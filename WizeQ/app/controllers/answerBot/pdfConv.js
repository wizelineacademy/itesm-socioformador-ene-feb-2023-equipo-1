const pdfConv = async (conversation) => fetch('http://127.0.0.1:3000/api/pdf_conversation_gpt', {
  method: 'POST',
  body: JSON.stringify(conversation),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => ({ text: data[data.length - 1].content }))
  .catch((error) => {
    throw new Error(`There was an error making the API call: ${error.message}`);
  });

export default pdfConv;
