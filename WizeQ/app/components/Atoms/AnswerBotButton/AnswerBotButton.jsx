import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import { useEffect, useRef, useState, useCallback } from 'react';
import {pdfConv} from 'app/controllers/answerBot/pdfConv';

function AnswerBotButton() {

    const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\nCite each reference using [number] notation (every result has this number at the beginning).\nCitation should be done at the end of each sentence. If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'No se encontro respuesta'. Don't write 'Answer:'Directly start the answer.\n"

    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([{role: "system", content: instructions}, {role: "system", content: "Hello! Ask me any question and I'll see how I can help you."}]);

    const handleInput = async (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const message = input.value;
        input.value = '';
        setMessages([...messages, {role: "user", content: message}]);
        const chatHistory = [...messages, {role: "user", content: message}];
        const filteredMessages = chatHistory.filter((message, index) => index !== 1);
        const response = await pdfConv(filteredMessages);
        const answer = response.text
        setMessages([...messages, {role: "user", content: message}, {role: "system", content: answer}]);
        console.log(response);
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
                {messages.slice(1).map((message, index) => (
                    message.role == "user" ? 
                    <Styled.ChatbotRowMessage style={{justifyContent: 'flex-end'}}>
                        <Styled.Message key={index} className='user' ref={messagesEndRef}> {message.content} </Styled.Message>
                        <Styled.IconUser src='/build/_assets/placeholder_user_img-ZWAQNLBE.png'/> 
                    </Styled.ChatbotRowMessage>
                    :
                    <Styled.ChatbotRowMessage style={{justifyContent: 'flex-start'}}>
                        <Styled.IconBot/>
                        <Styled.Message key={index} className='bot' ref={messagesEndRef}> {message.content} </Styled.Message>
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