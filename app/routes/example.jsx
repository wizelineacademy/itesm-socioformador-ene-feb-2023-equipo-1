import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// import userImg from 'build/_assets/placeholder_user_img-ZWAQNLBE.png'
// import botImg from 'build/_assets/logo_answerbot.png'

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 330px;
  height: 430px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #E1EAF4;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const ChatbotHeader = styled.div`
  background-color: #213246;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47.5px;
`;

const IconBot = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 0px solid transparent;
  background-image: url('/build/_assets/logo_answerbot-6JNTGKON.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  left: 5%;
  margin: 5px 0px;
`;

const IconUser = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 0px solid transparent;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  margin: 5px 0px;
`;

const BotName = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  padding: 0 85px;
`;

const CloseButton = styled.button`
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  border: none;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }

`;

const ChatbotMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const ChatbotRowMessage = styled.div`
  display: flex;
  alignItems: center;
`;

const Message = styled.div`
  padding: 5px 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 5px 10px;
  max-width: 80%;
  word-break: break-word;

  &.user {
    background-color: #fff;
    border-top-left-radius: 10px;
    align-self: flex-end;
    color: #000;
    text-align: right;
  }

  &.bot {
    background-color: #213246;
    border-top-right-radius: 10px;
    color: #fff;
  }

`;

const ChatbotInput = styled.form`
  display: flex;
  align-items: center;
  width: 330px;
  background-color: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 25%;
  background-color: #fff;
  border: none;
  background-image: url('/build/_assets/post-icon.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 5px 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #F2F2F1;
  }
`;

function Chatbot() {
  // const [messages, setMessages] = useState([]);

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
    setMessages([...messages, { text: message, user: true }]);
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
    // console.log(chatbotVisible);
  };

  return (

    <div>

      <button type="button" onClick={handleChatbotToggle}> Mostrar chatbot </button>

      <ChatbotContainer visible={chatbotVisible}>

        <ChatbotHeader>
          <IconBot style={{ position: 'absolute' }} />
          <BotName> AnswerBot </BotName>
          <CloseButton onClick={handleChatbotToggle}> ✕ </CloseButton>
        </ChatbotHeader>

        <ChatbotMessages>
          {messages.map((message) => (
            message.user
              ? (
                <ChatbotRowMessage style={{ justifyContent: 'flex-end' }}>
                  <Message key={`message ${message.id}`} className="user" ref={messagesEndRef}>
                    {' '}
                    {message.text}
                    {' '}
                  </Message>
                  <IconUser src="/build/_assets/placeholder_user_img-ZWAQNLBE.png" />
                </ChatbotRowMessage>
              )
              : (
                <ChatbotRowMessage style={{ justifyContent: 'flex-start' }}>
                  <IconBot />
                  <Message key={`message ${message.id}`} className="bot" ref={messagesEndRef}>
                    {' '}
                    {message.text}
                    {' '}
                  </Message>
                </ChatbotRowMessage>
              )
          ))}
        </ChatbotMessages>

        <ChatbotInput onSubmit={handleInput}>
          <Input type="text" placeholder="Enter your question..." />
          <Button type="submit" />
        </ChatbotInput>

      </ChatbotContainer>

    </div>

  );
}

export default Chatbot;
