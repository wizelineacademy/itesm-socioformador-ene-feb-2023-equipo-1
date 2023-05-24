import re
import fitz
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS
from tqdm.auto import tqdm

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

def generate_answer(conversation, model="gpt-3.5-turbo"):
    conversation.insert(0, pdf_context)
    completion = openai.ChatCompletion.create(
        model=model,
        messages=conversation,
        temperature=0.2
    )
    message = completion.choices[0].message
    return message

def loadPDF(pdf_context, start_page=1):
    texts = pdf_to_text("corpus.pdf", start_page=start_page)
    chunks = text_to_chunks(texts, start_page=start_page)
    pdf_context["content"] = "Context chunks: "
    for c in chunks:
        pdf_context["content"] += c
    return pdf_context

# ========================================= MAIN =========================================

openai.api_key = "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"

application = Flask(__name__)

pdf_context = {"role": "system", "content": ""}
pdf_context = loadPDF(pdf_context)
print("PDF Loaded...")

@application.route('/api/pdf_conversation_gpt', methods=['POST'])
def submit_conversation():
    conversation = request.json
    conversation.append(generate_answer(conversation))
    print(conversation[-1]["content"])
    return jsonify(conversation)

CORS(application, origins='http://3.213.188.151:4000')
application.run(port=4000,debug=True)
if __name__ == '__main__':
    application.run(debug=True)