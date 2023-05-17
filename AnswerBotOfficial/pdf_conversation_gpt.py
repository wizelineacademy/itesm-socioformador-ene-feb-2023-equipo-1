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


openai.api_key = "********************"


app = Flask(__name__)


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
        text = doc.load_page(i).get_text("content")
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
    load_recommender('corpus.pdf')
    userInput = conversation[-1]["content"]
    topn_chunks = recommender(userInput)
    department = find_department(userInput, keywords)
    
    prompt = ""
    prompt += 'search results:\n\n'
    for c in topn_chunks:
        prompt += c + '\n\n'
    
    prompt += f"Query: {userInput}\n\n"
    conversation[-1]["content"] = prompt
    answer = generate_text(conversation)
    return answer, department


@app.route('/api/pdf_conversation_gpt', methods=['POST'])
def submit_conversation():
    conversation = request.json
    print(conversation)
    answer, department = generate_answer(conversation)
    conversation.append(answer)
    print(conversation[-1]["content"])
    print(department)
    return jsonify({'conversation': conversation, 'department': department})

CORS(app, origins='http://localhost:3000')
if __name__ == '__main__':
    app.run(port=3000,debug=True)