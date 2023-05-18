import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import React, { useEffect, useRef, useState } from 'react';
import pdfConv from 'app/controllers/answerBot/pdfConv';
import { DEFAULT_LOCATION } from 'app/utils/constants';
import PropTypes from 'prop-types';

function AnswerBotButton({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  updateAnswerBotPostID,
  departments,
}) {
  //////////////// Send Question to AnswerBot ////////////////

  const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\n If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n";

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([{ role: 'system', content: instructions }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you." }]);
  const [messagesID, setMessagesID] = useState([{ role: 'system', content: instructions, depa: null }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you.", depa: null }]);

  const handleInput = async (e) => {
    e.preventDefault();

    const input = e.target.querySelector('input');
    const message = input.value;
    input.value = '';
    setMessages([...messages, { role: 'user', content: message }]);

    const chatHistory = [...messages, { role: 'user', content: message }];
    const filteredMessages = chatHistory.filter((mess, index) => index !== 1);
    const response = await pdfConv(filteredMessages);
    const answer = response.text;
    setMessages([...messages, { role: 'user', content: message }, { role: 'system', content: answer }]);
    console.log(response);
    console.log(departments);

    const depaName = response.department;
    console.log('department = ', depaName)

    const department = departments.find((c) => c.name === depaName);
    setMessagesID([...messagesID, { role: 'user', content: message, depa: department?.department_id || 'wizeq' }, { role: 'system', content: answer, depa: department?.department_id || 'wizeq' }]);

    const newQuestion = {
      question_by_user: message,
      answer_by_bot: answer,
      answer_status: 0,
      assignedDepaQA: department?.department_id || 'wizeq',
    };

    console.log(newQuestion)

    try {
      await postAnswerBotQuestion(newQuestion);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(messagesID)
  }, [messagesID]);

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
  };

  //////////////// Feedback to AnswerBot ////////////////

  const [showThanksMessage, setShowThanksMessage] = useState({});

  const handleLikeClick = async (index) => {
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true,
    }));

    const newQuestion = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index+1].content,
      answer_status: 1,
      assignedDepaFeed: messagesID[index+1].depa,
    };

    console.log(newQuestion)

    try {
      await updateAnswerBotFeedback(newQuestion);
    } catch (error) {
      throw error;
    }

    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: 'na',
      }));
    }, 2500);
  };

  const handleDislikeClick = async (index) => {
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: false,
    }));

   
    if (!showThanksMessage[index]) {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: "Would you like to share your question with the community?",
      }));
    }

    const newQuestion = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index+1].content,
      answer_status: -1,
      assignedDepaFeed: messagesID[index+1].depa,
    };

    try {
      await updateAnswerBotFeedback(newQuestion);
    } catch (error) {
      throw error;
    }
  };

  const handlePublishQuestion = async (index) => {
    const question = {
      question: messages[index].content,
      answer: messages[index+1].content,
      status: -1,
      isAnonymous: false,
      assignedDepaPost: messagesID[index+1].depa,
      assigned_to_employee_id: 'undefined',
      location: DEFAULT_LOCATION,
    };

    try {
      await updateAnswerBotPostID(question)
    } catch (error) {
      throw error;
    }

    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true,
    }));

    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: 'na',
      }));
    }, 2500);
  };

  //////////////// Components ////////////////

  return (
    <div>
      <Styled.BotButton visible={!chatbotVisible} onClick={handleChatbotToggle}>
        <Styled.BotIcon />
        <Styled.BotMessage className="message">
          Hi, I&apos;m AnswerBot!
          <br />
          Ask me anything!
        </Styled.BotMessage>
      </Styled.BotButton>

      <Styled.ChatbotContainer visible={chatbotVisible}>
        <Styled.ChatbotHeader>
          <Styled.IconBot style={{ position: 'absolute' }} />
          <Styled.BotName> AnswerBot </Styled.BotName>
          <Styled.CloseButton onClick={handleChatbotToggle}> ✕ </Styled.CloseButton>
        </Styled.ChatbotHeader>

        <Styled.ChatbotMessages>
          {messages.slice(1).map((message, index) => (
            message.role === 'user' ? (
              <Styled.ChatbotRowMessage style={{ justifyContent: 'flex-end' }}>
                <Styled.Message
                  key={`message-${message.id}`}
                  className="user"
                  ref={messagesEndRef}
                >
                  {message.content}
                </Styled.Message>
                <Styled.IconUser src="/build/_assets/placeholder_user_img-ZWAQNLBE.png" />
              </Styled.ChatbotRowMessage>
            )
              : (
                <div>
                  <Styled.ChatbotRowMessage style={{ justifyContent: 'flex-start' }}>
                    <Styled.IconBot />
                    <Styled.Message
                      key={`message-${message.id}`}
                      className="bot"
                      ref={messagesEndRef}
                    >
                      {message.content}
                    </Styled.Message>
                  </Styled.ChatbotRowMessage>
                  {index !== 0 && (
                  <div>
                    {!showThanksMessage[index] && (
                      <>
                        <Styled.LikeButton
                          key={`like-${index}`}
                          onClick={() => handleLikeClick(index)}
                        />
                        <Styled.DislikeButton
                          key={`dislike-${index}`}
                          onClick={() => handleDislikeClick(index)}
                        />
                      </>
                    )}
                    {showThanksMessage[index] && (
                      <Styled.TextFeedback padding={showThanksMessage[index]}>
                        {showThanksMessage[index] === true
                          ? 'Thanks for the feedback!'
                          : showThanksMessage[index] === 'na' ? '' : showThanksMessage[index]}
                      </Styled.TextFeedback>
                    )}
                    {showThanksMessage[index] === "Would you like to share your question with the community?" && (
                      <Styled.PublishButton onClick={() => handlePublishQuestion(index)}>
                        Post question
                      </Styled.PublishButton>
                    )}
                  </div>
                )}
                </div>
              )
          ))}
        </Styled.ChatbotMessages>

        <Styled.ChatbotInput onSubmit={handleInput}>
          <Styled.Input type="text" placeholder="Enter your question..." />
          <Styled.SendButton type="submit" />
        </Styled.ChatbotInput>
      </Styled.ChatbotContainer>
    </div>
  );
}

AnswerBotButton.propTypes = {
  postAnswerBotQuestion: PropTypes.func.isRequired,
  updateAnswerBotFeedback: PropTypes.func.isRequired,
  updateAnswerBotPostID: PropTypes.func.isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

AnswerBotButton.defaultProps = {
  departments: [],
};

export default AnswerBotButton;
