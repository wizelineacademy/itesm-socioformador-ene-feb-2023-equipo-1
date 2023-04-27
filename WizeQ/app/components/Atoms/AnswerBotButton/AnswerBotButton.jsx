import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import { useEffect, useRef, useState, useCallback } from 'react';
import {pdfConv} from 'app/controllers/answerBot/pdfConv';

function AnswerBotButton() {

    const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\n If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n"

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

    const [likedButtons, setLikedButtons] = useState({});
    const [dislikedButtons, setDislikedButtons] = useState({});
    const [showThanksMessage, setShowThanksMessage] = useState({});

    const handleLikeClick = (index) => {
        setLikedButtons((prevLikedButtons) => ({
          ...prevLikedButtons,
          [index]: !prevLikedButtons[index],
        }));
        setDislikedButtons((prevDislikedButtons) => ({
          ...prevDislikedButtons,
          [index]: false,
        }));
        setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [index]: !likedButtons[index],
        }));
    };
    
    const handleDislikeClick = (index) => {
        setDislikedButtons((prevDislikedButtons) => ({
            ...prevDislikedButtons,
            [index]: !prevDislikedButtons[index],
        }));
        setLikedButtons((prevLikedButtons) => ({
            ...prevLikedButtons,
            [index]: false,
        }));
        setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [index]: !dislikedButtons[index],
        }));
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
                        <Styled.Message 
                            key={index}
                            className='user'
                            ref={messagesEndRef}>
                            {message.content}
                        </Styled.Message>
                        <Styled.IconUser src='/build/_assets/placeholder_user_img-ZWAQNLBE.png'/> 
                    </Styled.ChatbotRowMessage>
                    :
                    <div>
                        <Styled.ChatbotRowMessage style={{justifyContent: 'flex-start'}}>
                            <Styled.IconBot/>
                            <Styled.Message
                                key={index}
                                className='bot'
                                ref={messagesEndRef}>
                                {message.content}
                            </Styled.Message>
                        </Styled.ChatbotRowMessage>
                        {index !== 0 ?
                            <div>
                                <Styled.likeButton
                                    key={`like-${index}`}
                                    liked={likedButtons[index]}
                                    onClick={() => handleLikeClick(index)}
                                />
                                <Styled.dislikeButton
                                    key={`dislike-${index}`}
                                    disliked={dislikedButtons[index]}
                                    onClick={() => handleDislikeClick(index)}
                                />
                                { showThanksMessage[index] ? <span style={{padding: '5px'}}> Thanks for the feedback! </span> : <> </> }
                            </div>
                            :
                            <> </>
                        }
                    </div>
                ))}
                </Styled.ChatbotMessages>

                <Styled.ChatbotInput onSubmit={handleInput}>
                <Styled.Input type="text" placeholder="Enter your question..." />
                <Styled.sendButton type="submit"/>
                </Styled.ChatbotInput>
            </Styled.ChatbotContainer>
        </div>
    );
}

export default AnswerBotButton;