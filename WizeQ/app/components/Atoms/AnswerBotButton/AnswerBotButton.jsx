import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import { useEffect, useRef, useState } from 'react';

function AnswerBotButton() {

    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([
        { text: 'Hola', user: false },
        { text: 'Hola, ¿cómo estás?', user: true },
        { text: 'Estoy bien, gracias. ¿Y tú?', user: false },
        { text: 'Bien.', user: true },
        { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', user: false },
        { text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', user: true },
        { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', user: false },
    ]);

    const handleInput = (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const message = input.value;
        setMessages([...messages, { text: message, user: true}]);
        input.value = '';
    };

    useEffect(() => {
        const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        };
        scrollToBottom();
        if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const [chatbotVisible, setChatbotVisible] = useState(false);

    const handleChatbotToggle = () => {
        setChatbotVisible(!chatbotVisible);
        console.log(chatbotVisible);
    };

    return (
        <div>
            <Styled.BotButton visible={!chatbotVisible} onClick={handleChatbotToggle}>
                <Styled.BotIcon/>
                <Styled.BotMessage className="message">
                    Hi, I'm AnswerBot!
                    <br/>
                    Ask me anything!
                </Styled.BotMessage>
            </Styled.BotButton>

            <Styled.ChatbotContainer visible={chatbotVisible}>
                <Styled.ChatbotHeader>
                    <Styled.IconBot style={{position: 'absolute'}}/>
                    <Styled.BotName> AnswerBot </Styled.BotName>
                    <Styled.CloseButton onClick={handleChatbotToggle}> ✕ </Styled.CloseButton>
                </Styled.ChatbotHeader>

                <Styled.ChatbotMessages>
                {messages.map((message, index) => (
                    message.user ? 
                    <Styled.ChatbotRowMessage style={{justifyContent: 'flex-end'}}>
                        <Styled.Message key={index} className='user' ref={messagesEndRef}> {message.text} </Styled.Message>
                        <Styled.IconUser src='/build/_assets/placeholder_user_img-ZWAQNLBE.png'/> 
                    </Styled.ChatbotRowMessage>
                    :
                    <Styled.ChatbotRowMessage style={{justifyContent: 'flex-start'}}>
                        <Styled.IconBot/>
                        <Styled.Message key={index} className='bot' ref={messagesEndRef}> {message.text} </Styled.Message>
                    </Styled.ChatbotRowMessage>
                ))}
                </Styled.ChatbotMessages>

                <Styled.ChatbotInput onSubmit={handleInput}>
                <Styled.Input type="text" placeholder="Enter your question..." />
                <Styled.Button type="submit"/>
                </Styled.ChatbotInput>
            </Styled.ChatbotContainer>
        </div>
    );
}

export default AnswerBotButton;