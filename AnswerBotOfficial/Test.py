from llama_index import GPTVectorStoreIndex, SimpleDirectoryReader, load_index_from_storage, StorageContext, download_loader
import os

os.environ['OPENAI_API_KEY'] = "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"

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

query_engine = index.as_query_engine()
response = query_engine.query("What are the authorized workzones in Guadalajara?")
print(response)