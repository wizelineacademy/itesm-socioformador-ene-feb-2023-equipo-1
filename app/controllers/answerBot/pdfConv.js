import { FLASK_ENDPOINT } from './pythonUrl';

const endpoint = `http://${FLASK_ENDPOINT}:4000/api/pdf_conversation_gpt`;

export const pdfConv = async (conversation) => fetch(endpoint, {
  method: 'POST',
  body: JSON.stringify(conversation),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => ({
    text: data.conversation[data.conversation.length - 1].content,
    department: data.department,
  }))
  .catch((error) => {
    throw new Error(`There was an error making the API call: ${error.message}`);
  });

export const updateAnswers = async () => fetch(`http://${FLASK_ENDPOINT}:4000/api/updateAnswers`)
  .catch((error) => {
    throw new Error(`There was an error making the API call: ${error.message}`);
  });

export const uploadFiles = async (formData) => fetch(`http://${FLASK_ENDPOINT}:4000/api/uploadFile`, {
  method: 'POST',
  body: formData,
})
  .catch((error) => {
    throw new Error(`There was an error making the API call: ${error.message}`);
  });
