export const pdfConv = async (conversation) => fetch('http://127.0.0.1:3000/api/pdf_conversation_gpt', {
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

export const updateAnswers = async (questionID) => fetch('http://127.0.0.1:3000/api/updateAnswers')
.catch((error) => {
  throw new Error(`There was an error making the API call: ${error.message}`);
});