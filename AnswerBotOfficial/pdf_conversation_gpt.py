import os
import pickle
import shutil
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, Document, ServiceContext, StorageContext, load_index_from_storage, download_loader, LLMPredictor
from dotenv import load_dotenv
from pathlib import Path
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

dotenv_path = Path('../.env')
load_dotenv(dotenv_path=dotenv_path)
os.environ['OPENAI_API_KEY'] = os.getenv("OPENAI_API_KEY")
 
keywords = {
    'Founders': ['startup', 'entrepreneurship', 'incubator', 'funding'],
    'Academy': ['education', 'curriculum', 'learning', 'teaching', 'training', 'certification'],
    'Business Operations': ['process', 'improvement', 'efficiency', 'management', 'control'],
    'Engineering': ['CAD', 'development', 'system', 'engineering'],
    'Facilities': ['maintenance', 'building', 'efficiency', 'security', 'planning'],
    'Finance & Accounting': ['financial', 'budgeting', 'forecasting', 'taxation'],
    'Marketing': ['advertising', 'branding', 'content', 'market'],
    'People Operations': ['recruitment', 'employee', 'onboarding', 'talent'],
    'Product': ['product', 'innovation', 'prototyping', 'features'],
    'Sales': ['prospecting', 'networking', 'closing', 'pipeline'],
    'UX Design': ['wireframes', 'prototyping', 'interface', 'aesthetics'],
    'IT & Security Engineering': ['cybersecurity', 'network', 'encryption', 'authentication'],
    'CEO / Exec Staff': ['leadership', 'strategy', 'vision', 'growth'],
    'Delivery': ['supply-chain', 'inventory', 'shipping', 'distribution'],
    'Solutions': ['integration', 'customization', 'automation', 'optimization'],
    'User Experience': ['usability', 'accessibility', 'interaction', 'persona'],
    'Wizeline Questions Staff': ['feedback', 'satisfaction', 'performance', 'communication', 'test'],
    'Legal': ['compliance', 'litigation', 'contracts', 'regulations'],
}


def find_department(query, keywords):
    for department, kws in keywords.items():
        for kw in kws:
            if kw in query:
                return department
    return 'I don\'t know whom to assign it.'

# Create a new global index, or load one from the pre-set path
def initialize_index():
    global stored_docs, index

    if os.path.exists('./storage'):
        service_context = ServiceContext.from_defaults(chunk_size_limit=512)
        index = load_index_from_storage(StorageContext.from_defaults(persist_dir='./storage'), service_context=service_context)
        print("Index Loaded!")
        query_engine = index.as_query_engine()
    else:
        DatabaseReader = download_loader('DatabaseReader')
        reader = DatabaseReader(
            scheme = "mysql", # Database Scheme
            host = "wizeq-answerbot-db-dev.cih8wohssbpg.us-east-2.rds.amazonaws.com", # Database Host
            port = "3306", # Database Port
            user = "admin", # Database User
            password = "wizeq_password", # Database Password
            dbname = "wizeqdb", # Database Name
        )

        query = f"""
        SELECT a.answer_text
        FROM Answers AS a
        """

        documents = reader.load_data(query=query)


        documents += SimpleDirectoryReader('data').load_data()
        index = GPTVectorStoreIndex.from_documents(documents)
        index.set_index_id("vector_index")
        index.storage_context.persist('./storage')

        # rebuild storage context
        storage_context = StorageContext.from_defaults(persist_dir="./storage")
        # load index
        index = load_index_from_storage(storage_context)
        print("Index Created!")
    if os.path.exists("stored_documents.pkl"):
            with open("stored_documents.pkl", "rb") as f:
                stored_docs = pickle.load(f)


@app.route('/api/pdf_conversation_gpt', methods=['POST'])
def submit_conversation():
    global index
    conversation = request.json
    userInput = conversation[-1]["content"]
    department = find_department(userInput, keywords)
    answer = index.as_query_engine().query("Give all the information needed to fully understand the answer but keep the answer to the following question within 100 words and do not repeat yourself: " + userInput)
    answerStruct = {}
    answerStruct["content"] = answer.response
    answerStruct["role"] = "assistant"
    conversation.append(answerStruct)
    return jsonify({'conversation': conversation, 'department': department})

@app.route("/api/uploadFile", methods=["POST"])
def upload_file():
    global index
    if 'file' not in request.files:
        return "Please send a POST request with a file", 400
        filepath = None
    try:
        uploaded_file = request.files["file"]
        filename = secure_filename(uploaded_file.filename)
        filepath = os.path.join('data', os.path.basename(filename))
        uploaded_file.save(filepath)
        updateIndex()
        return "File uploaded!"
    except Exception as e:
        # cleanup temp file
        if filepath is not None and os.path.exists(filepath):
            os.remove(filepath)
        return "Error: {}".format(str(e)), 500

@app.route('/api/updateIndex', methods=['GET'])
def updateIndex():
    if os.path.exists('./storage'):
        shutil.rmtree('./storage')
        initialize_index()
        return "Updated the Index"
    
@app.route('/api/deleteDoc/<filename>', methods=['DELETE'])
def deleteDoc(filename):
    filepath = os.path.join('data', os.path.basename(filename))
    os.remove(filepath)
    if os.path.exists(filepath):
        return "File does not exist"
    else:
        return "Deleted succesfully"	

CORS(app, origins='http://localhost:3000')
if __name__ == '__main__':
    initialize_index()
    app.run(port=3000,debug=True)