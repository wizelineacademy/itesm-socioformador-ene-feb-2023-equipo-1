import React, { useState } from 'react';
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
`;

const ChatbotHeader = styled.div`
  background-color: #213246;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
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
  position: absolute;
  left: 5%;
`

const BotName = styled.text`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  padding: 0 80px;
`

const CloseButton = styled.button`
  background-color: transparent;
  background-image: url('/build/_assets/close-button-2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 50px;
  height: 50px;

  &:hover {
    background-size: 150%;
    width: 50px;
    height: 50px;
  }

`

const ChatbotMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 5px 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 5px 0;
  max-width: 80%;

  &.user {
    background-color: #ffffff;
    border-bottom-left-radius: 10px;
    align-self: flex-end;
  }

  &.bot {
    background-color: #213246;
    border-bottom-right-radius: 10px;
  }
`;

const ChatbotInput = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const message = input.value;
    setMessages([...messages, { text: message, user: true }]);
    input.value = '';
    // Aquí iría la lógica para procesar la entrada del usuario y generar una respuesta
    // Por ejemplo, podrías usar una API de chatbot para obtener la respuesta
    // Luego, agregarías la respuesta a la lista de mensajes usando setMessages
  };

  return (
    <ChatbotContainer>
      <ChatbotHeader>
        <IconBot/>
        <BotName> AnswerBot </BotName>
        <CloseButton/>
      </ChatbotHeader>
      <ChatbotMessages>
        {messages.map((message, index) => (
          <Message key={index} className={message.user ? 'user' : 'bot'}>
            {message.text}
          </Message>
        ))}
      </ChatbotMessages>
      <ChatbotInput onSubmit={handleInput}>
        <Input type="text" placeholder="Escribe un mensaje..." />
        <Button type="submit">Enviar</Button>
      </ChatbotInput>
    </ChatbotContainer>
  );
}

export default Chatbot;