import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';

function AnswerBotButton() {
    return (
        <Styled.BotButton>
            <Styled.BotIcon/>
            <Styled.BotMessage className="message">
                Hi, I'm AnswerBot!
                <br/>
                Ask me anything!
            </Styled.BotMessage>
        </Styled.BotButton>
    );
}

export default AnswerBotButton;