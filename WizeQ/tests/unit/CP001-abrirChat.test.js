import { render } from 'remix';
import { act } from 'react-dom/test-utils';
import AnswerBotButton from 'app/components/Atoms/AnswerBotButton';

describe('Testing pdfConv component', () => {
  it('Test question that should have expected answer', () => {
    render(<AnswerBotButton />);
  });
});
