import urllib.request
import tensorflow_hub as hub
import fitz
import re
import numpy as np
import openai
import os
from tqdm.auto import tqdm
from sklearn.neighbors import NearestNeighbors
import sys
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

openai.api_key = "**************"

app = Flask(__name__)

def download_pdf(output_path):
    '''
    download file from URL and save it to `output_path`
    '''
    urllib.request.urlretrieve("https://d2l.ai/d2l-en.pdf", output_path)


def preprocess(text):
    '''
    preprocess chunks
    1. Replace new line character with whitespace.
    2. Replace redundant whitespace with a single whitespace
    '''
    text = text.replace('\n', ' ')
    text = re.sub('\s+', ' ', text)
    return text


def pdf_to_text(path, start_page=1, end_page=None):
    '''
    convert PDF document to text
    '''
    doc = fitz.open(path)
    total_pages = doc.page_count

    if end_page is None:
        end_page = total_pages

    text_list = []

    for i in tqdm(range(start_page-1, end_page)):
        text = doc.load_page(i).get_text("text")
        text = preprocess(text)
        text_list.append(text)

    doc.close()
    return text_list


def text_to_chunks(texts, word_length=150, start_page=1):
    '''
    convert list of texts to smaller chunks of length `word_length`
    '''
    text_toks = [t.split(' ') for t in texts]
    page_nums = []
    chunks = []
    
    for idx, words in enumerate(text_toks):
        for i in range(0, len(words), word_length):
            chunk = words[i:i+word_length]
            if (i+word_length) > len(words) and (len(chunk) < word_length) and (
                len(text_toks) != (idx+1)):
                text_toks[idx+1] = chunk + text_toks[idx+1]
                continue
            chunk = ' '.join(chunk).strip()
            chunk = f'[{idx+start_page}]' + ' ' + '"' + chunk + '"'
            chunks.append(chunk)
    return chunks

class SemanticSearch:
    
    def __init__(self):
        self.use = hub.load('https://tfhub.dev/google/universal-sentence-encoder/4')
        self.fitted = False
    
    
    def fit(self, data, batch=1000, n_neighbors=5):
        self.data = data
        self.embeddings = self.get_text_embedding(data, batch=batch)
        n_neighbors = min(n_neighbors, len(self.embeddings))
        self.nn = NearestNeighbors(n_neighbors=n_neighbors)
        self.nn.fit(self.embeddings)
        self.fitted = True
    
    
    def __call__(self, text, return_data=True):
        inp_emb = self.use([text])
        neighbors = self.nn.kneighbors(inp_emb, return_distance=False)[0]
        
        if return_data:
            return [self.data[i] for i in neighbors]
        else:
            return neighbors
    
    
    def get_text_embedding(self, texts, batch=1000):
        embeddings = []
        for i in tqdm(range(0, len(texts), batch)):
            text_batch = texts[i:(i+batch)]
            emb_batch = self.use(text_batch)
            embeddings.append(emb_batch)
        embeddings = np.vstack(embeddings)
        return embeddings
    
    

recommender = SemanticSearch()


def load_recommender(path, start_page=1):
    global recommender
    texts = pdf_to_text(path, start_page=start_page)
    chunks = text_to_chunks(texts, start_page=start_page)
    recommender.fit(chunks)
    return 'Corpus Loaded.'


def generate_text(messages, model="gpt-3.5-turbo"):
    completion = openai.ChatCompletion.create(
        model=model,
        messages=messages
    )
    message = completion.choices[0].message
    return message


def generate_answer(conversation):
    #download_pdf('corpus.pdf')
    load_recommender('corpus.pdf')
    topn_chunks = recommender(conversation[-1]["text"])
    userInput = conversation[-1]["text"]
    prompt = ""
    prompt += 'search results:\n\n'
    for c in topn_chunks:
        prompt += c + '\n\n'
    
    prompt += f"Query: {userInput}\n\n"
    conversation[-1]["text"] = prompt
    answer = generate_text(conversation)
    return answer

def main():
    '''instructions = "Instructions: Compose a comprehensive reply to the query using the search results given."\
              "Cite each reference using [number] notation (every result has this number at the beginning)."\
              "Citation should be done at the end of each sentence. If the search results mention multiple subjects"\
              "with the same name, create separate answers for each. Only include information found in the results and"\
              "don't add any additional information. Make sure the answer is correct and don't output false content."\
              "If the text does not relate to the query, simply state 'No se encontro respuesta'. Don't write 'Answer:'"\
              "Directly start the answer.\n"
    conversation = [{"user": false, "text": instructions}]
    unserInput = input()
    conversation.append({"user": true, "text": unserInput})
    conversation.append(generate_answer(conversation))
    print(conversation[-1]["text"])
    while (unserInput != "exit conversation"):
        conversation.append({"user": true, "text": unserInput})
        conversation.append(generate_answer(conversation))
        print(conversation[-1]["text"])
        unserInput = input()'''
    #print(generate_answer("What is the purpose of this book?"))

    conversation = json.loads(sys.argv[1])
    conversation.append(generate_answer(conversation))
    print(conversation[-1]["text"])

@app.route('/api/pdf_conversation_gpt', methods=['POST'])
def submit_conversation():
    conversation = request.json
    print(conversation)
    conversation.append(generate_answer(conversation))
    print(conversation[-1]["text"])
    return jsonify(conversation)

CORS(app, origins='http://localhost:8080')
if __name__ == '__main__':
    app.run(port=8080,debug=True)
