import os
import pickle
import shutil
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, Document, ServiceContext, StorageContext, load_index_from_storage, download_loader, LLMPredictor
from llama_index.langchain_helpers.agents import LlamaToolkit, create_llama_chat_agent, IndexToolConfig
from langchain import OpenAI
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain.agents import initialize_agent
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

#Database Connection
DatabaseReader = download_loader('DatabaseReader')
DBReader = DatabaseReader(
    scheme = "mysql", # Database Scheme
    host = "wizeq-answerbot-db-dev.cih8wohssbpg.us-east-2.rds.amazonaws.com", # Database Host
    port = "3306", # Database Port
    user = "admin", # Database User
    password = "wizeq_password", # Database Password
    dbname = "wizeqdb", # Database Name
)

memory = ConversationBufferMemory(memory_key="chat_history") # Conversation history to make conversation memory possible
llm=OpenAI(temperature=0) # Define the Large Language Model as OpenAI and make sure answers are always the same through temperature = 0.


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
    global stored_docs, index, agent_chain, query_engine
    if os.path.exists('./storage'):
        service_context = ServiceContext.from_defaults(chunk_size_limit=512)
        index = load_index_from_storage(StorageContext.from_defaults(persist_dir='./storage'), service_context=service_context)
        query_engine = index.as_query_engine()
        tool_config = IndexToolConfig(
            query_engine = query_engine,
            name = "WizelineQuestions Repository",
            description = "Useful for answering any question pertaining to Wizeline guidelines and policies, and any other thing about the company. Always use if the question starts with 'QUERY:'",
            #Use to answer any question given as it has been fed Wizeline documents and information and this bot resides in WizelineQuestions, the help forum of Wizeline. Useful if the question pertains to company policy or guidelines regarding the company.",
            tool_kwargs = {"return_direct": True}, #"return_sources": True Adding this returns sources, may expand on this
        )
        toolkit = LlamaToolkit(
            index_configs=[tool_config],
        )
        agent_chain = create_llama_chat_agent(
            toolkit,
            llm,
            memory=memory,
            verbose=True
        )
        print("Index Loaded!")
    else:
        # Query the database for all answers
        query = f"""
        SELECT a.answer_text
        FROM Answers AS a
        """
        documents = DBReader.load_data(query=query) # Add them to the documents

        documents += SimpleDirectoryReader('data').load_data() # Load all files in the "data" folder into the documents
        index = GPTVectorStoreIndex.from_documents(documents) # Generate the index
        index.set_index_id("vector_index")
        index.storage_context.persist('./storage') # Store the index for faster loading in future starts of the server

        query_engine = index.as_query_engine()
        # Generate tool to feed Langchain agent
        tool_config = IndexToolConfig(
            query_engine = query_engine,
            name = "WizelineQuestions Repository", # Name of Tool
            # Description, dictates when the tool is used, the context.
            description = "Useful for answering any question pertaining to Wizeline guidelines and policies, and any other thing about the company. Always use if the question starts with 'QUERY:'",
            #Use to answer any question given as it has been fed Wizeline documents and information and this bot resides in WizelineQuestions, the help forum of Wizeline. Useful if the question pertains to company policy or guidelines regarding the company.",
            tool_kwargs = {"return_direct": True, "return_sources": True}, #"return_sources": True Adding this returns sources, may expand on this
        )
        toolkit = LlamaToolkit(
            index_configs=[tool_config],
        )
        # Generate agent
        agent_chain = create_llama_chat_agent(
            toolkit,
            llm,
            memory=memory,
            verbose=True
        )

# Helper function to upload a file and add it to the documents that feed the bot
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

# Helper function to update the index once a question gets answered
@app.route('/api/updateAnswers', methods=['GET'])
def updateAnswers():
    global agent_chain
    # Get latest stored answer in the DB, as it should be the one just created.
    singlequery = f""" 
    SELECT answer_text
    FROM Answers
    ORDER BY createdAt DESC
    LIMIT 1;
    """
    DBAnswer = DBReader.load_data(query=singlequery)[0] # Query the database and get the new question
    index.insert(DBAnswer)
    query_engine = index.as_query_engine()
    # Generate tool to feed Langchain agent
    tool_config = IndexToolConfig(
        query_engine = query_engine,
        name = "WizelineQuestions Repository", # Name of Tool
        # Description, dictates when the tool is used, the context.
        description = "Useful for answering any question pertaining to Wizeline guidelines and policies, and any other thing about the company. Always use if the question starts with 'QUERY:'",
        #Use to answer any question given as it has been fed Wizeline documents and information and this bot resides in WizelineQuestions, the help forum of Wizeline. Useful if the question pertains to company policy or guidelines regarding the company.",
        tool_kwargs = {"return_direct": True, "return_sources": True}, #"return_sources": True Adding this returns sources, may expand on this
    )
    toolkit = LlamaToolkit(
        index_configs=[tool_config],
    )
    # Generate agent
    agent_chain = create_llama_chat_agent(
        toolkit,
        llm,
        memory=memory,
        verbose=True
    )
    return "Done!"
    
# Helper function to update the index once new information gets added
@app.route('/api/updateIndex', methods=['GET'])
def updateIndex():
    if os.path.exists('./storage'):
        shutil.rmtree('./storage')
        initialize_index()
        return "Updated the Index"
    else:
        initialize_index()
        return "Created Index"

# Helper function to delete documents from the repository that the bots feeds itself from.    
@app.route('/api/deleteDoc/<filename>', methods=['DELETE'])
def deleteDoc(filename):
    filepath = os.path.join('data', os.path.basename(filename))
    os.remove(filepath)
    if os.path.exists(filepath):
        return "File does not exist"
    else:
        return "Deleted succesfully"	

# Main function to answer queries, gets a JSON of the whole conversation, deconstructs it to build the answer and return it.
@app.route('/api/pdf_conversation_gpt', methods=['POST'])
def submit_conversation():
    global index
    conversation = request.json
    userInput = conversation[-1]["content"]
    department = find_department(userInput, keywords)
    #answer = agent_chain.run("'Query:' " + userInput + " 'WIZELINE'. Please try to give a complete answer that's not over 150 words at maximum.")
    answer = query_engine.query(userInput)
    answerStruct = {}
    answerStruct["content"] = answer.response
    answerStruct["role"] = "assistant"
    conversation.append(answerStruct)
    return jsonify({'conversation': conversation, 'department': department})

CORS(app, origins='http://localhost:3000')
if __name__ == '__main__':
    initialize_index()
    app.run(port=3000,debug=True)