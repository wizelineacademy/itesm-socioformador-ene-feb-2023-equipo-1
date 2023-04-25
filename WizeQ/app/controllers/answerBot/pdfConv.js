export const pdfConv = async (conversation) => {
  console.log(conversation)
  return fetch('http://127.0.0.1:8080/pdf_conversation_gpt', {
    method: 'POST',
    body: JSON.stringify(conversation),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      return {text: data[data.length -1].content}
    })
    .catch(error => console.error(error));
}