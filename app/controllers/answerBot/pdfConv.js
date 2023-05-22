const pdfConv = async (conversation) => fetch('http://3.213.188.151:4000/api/pdf_conversation_gpt', {
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