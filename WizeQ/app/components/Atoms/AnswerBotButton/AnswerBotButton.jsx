import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import React, { useEffect, useRef, useState } from 'react';
import pdfConv from 'app/controllers/answerBot/pdfConv';
// import { useSubmit } from '@remix-run/react';
// import { json, redirect } from '@remix-run/node';
// import createAnswerByBot from 'app/controllers/answerBot/create';
// import { commitSession, getAuthenticatedUser, getSession } from 'app/session.server';
import { NO_DEPARTMENT_SELECTED_ID, DEFAULT_LOCATION } from 'app/utils/constants';
import PropTypes from 'prop-types';

function AnswerBotButton({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  postQuestion,
  updatePostFeed,
  initialValueQuestion,
  initialValueAnswer,
  initialAnswerStatus,
  departments,
  initialDepartment,
}) {
  //////////////// Post Q&A AnswerBot ////////////////
  const initialState = {
    question_by_user: initialValueQuestion,
    answer_by_bot: initialValueAnswer,
    answer_status: initialAnswerStatus,
    assignedDepaQA: initialDepartment,
  };

  //////////////// Send Question to AnswerBot ////////////////

  const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\n If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n";

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([{ role: 'system', content: instructions }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you." }]);
  const [messagesID, setMessagesID] = useState([{ role: 'system', content: instructions, id: 0 }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you.", id: 0 }]);

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
    // console.log(response);

    const newQuestion = {
      question_by_user: message,
      answer_by_bot: answer,
      answer_status: 0,
      assignedDepaQA: 17,
    };

    try {
      await postAnswerBotQuestion(newQuestion);
    } catch (error) {
      console.error(error);
    }

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

  //////////////// Feedback to AnswerBot ////////////////

  const [likedButtons, setLikedButtons] = useState({});
  const [dislikedButtons, setDislikedButtons] = useState({});
  const [showThanksMessage, setShowThanksMessage] = useState({});

  const handleLikeClick = async (index) => {
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

    const newQuestion = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index+1].content,
      answer_status: 1,
      assignedDepaFeed: 17,
    };

    console.log(messagesID[index])
    console.log(messagesID[index+1])

    try {
      await updateAnswerBotFeedback(newQuestion);
    } catch (error) {
      throw error;
    }

  };

  const handleDislikeClick = async (index) => {
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

    const newQuestion = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index+1].content,
      answer_status: -1,
      assignedDepaFeed: 17,
    };
    
    const question = {
      question: messages[index].content,
      answer: messages[index+1].content,
      status: -1,
      isAnonymous: false,
      assignedDepaPost: 17,
      assigned_to_employee_id: 'undefined',
      location: DEFAULT_LOCATION,
    };

    try {
      await updateAnswerBotFeedback(newQuestion);
      // await postQuestion(question)
      await updatePostFeed(question)
    } catch (error) {
      throw error;
    }

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
                  {index !== 0
                    ? (
                      <div>
                        <Styled.LikeButton
                          key={`like-${message.id}`}
                          liked={likedButtons[index]}
                          onClick={() => handleLikeClick(index)}
                        />
                        <Styled.DislikeButton
                          key={`dislike-${message.id}`}
                          disliked={dislikedButtons[index]}
                          onClick={() => handleDislikeClick(index)}
                        />
                        { showThanksMessage[index] ? <span style={{ padding: '5px' }}> Thanks for the feedback! </span> : <> </> }
                      </div>
                    )
                    : <> </>}
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
  postQuestion: PropTypes.func.isRequired,
  updatePostFeed: PropTypes.func.isRequired,
  initialValueQuestion: PropTypes.string,
  initialValueAnswer: PropTypes.string,
  initialAnswerStatus: PropTypes.number,
  departments: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  initialDepartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    department_id: PropTypes.number.isRequired,
  }),
};

AnswerBotButton.defaultProps = {
  initialValueQuestion: 'Question by user inside component',
  initialValueAnswer: 'Answer by bot inside component',
  initialAnswerStatus: 0,
  departments: [],
  initialDepartment: { name: 'hey', department_id: 17 },
};



export default AnswerBotButton;
