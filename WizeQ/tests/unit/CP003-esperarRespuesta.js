import pdfConv from 'app/controllers/answerBot/pdfConv'

describe('Testing pdfConv component', () => {
  it('Test question that should have expected answer', async () => {
    const data = await pdfConv([{ role: 'user', content: "What should I do if I test positive?" }])
    expect(data.text).toBeTruthy();
  });
});
