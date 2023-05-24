import pdfConv from 'app/controllers/answerBot/pdfConv';

jest.setTimeout(20000);

describe('CP004 - Continuar conversación con el AnswerBot', () => {
  it('Se manda más de una pregunta y el AnswerBot puede seguir respondiendo', async () => {
    const data = await pdfConv([{ role: 'user', content: 'What should I do if I test positive?' }]);
    expect(data.text).toBeTruthy();
    const data2 = await pdfConv([
      { role: 'user', content: 'What should I do if I test positive?' },
      { role: 'assistant', content: data.text },
      { role: 'user', content: 'How many days should I isolate?' },
    ]);
    expect(data2.text).toBeTruthy();
  });
});
