import * as Styled from 'app/components/AnswerBot/AnswerBot.Styled';
import React, { useEffect, useRef, useState } from 'react';
import { pdfConv } from 'app/controllers/answerBot/pdfConv';
import PropTypes from 'prop-types';
import useUser from 'app/utils/hooks/useUser';
import {
  WELCOME_MESSAGE,
  INSTRUCTIONS_ANSWERBOT,
  POSITIVE_FEEDBACK_ANSWEBOT,
  NEGATIVE_FEEDBACK_ANSWEBOT,
  POSTED_ANSWEBOT,
} from 'app/utils/constants';
import {
  DEFAULT_ERROR_MESSAGE_BOT,
  DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
  DEFAULT_ERROR_MESSAGE_POST_BOT,
} from 'app/utils/backend/constants';
import useGlobalSuccessMessage from 'app/utils/hooks/useGlobalSuccessMessage';
import { useActionData } from '@remix-run/react';

function AnswerBot({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  updateAnswerBotPostID,
  departments,
}) {
  /// ///////////// Send Question to AnswerBot ////////////////

  // Instrucciones (query principal)
  const instructions = INSTRUCTIONS_ANSWERBOT;

  // The chat history in the chatbot.
  const [messages, setMessages] = useState([{ role: 'system', content: instructions }, { role: 'system', content: WELCOME_MESSAGE }]);
  // To save the id of the assigned department.
  const [messagesID, setMessagesID] = useState([{ role: 'system', content: instructions, depa: null }, { role: 'system', content: WELCOME_MESSAGE, depa: null }]);

  // Variables for chatbot effects.
  const messagesEndRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  // To send the user's question to the bot, be able to receive
  // an answer and register a new record in the AnswerBot table.
  const handleInput = async (e) => {
    e.preventDefault();

    // Extracts the input.
    const input = e.target.querySelector('input');
    const message = input.value;

    // Verifies that the input is greater than 13 characters in order to proceed with the process.
    if (message.length > 13) {
      input.value = '';

      // Update specific variables for chatbot effects.
      setInputValue(input.value);
      setIsWaitingForResponse(true);
      setMessages([...messages, { role: 'user', content: message }, { role: 'system', content: '...' }]);

      // Concatenate the user's question to the chat history and send it to the bot model.
      const chatHistory = [...messages, { role: 'user', content: message }];
      // Except the welcome message.
      const filteredMessages = chatHistory.filter((mess, index) => index !== 1);
      const response = await pdfConv(filteredMessages);

      // Extract answer from bot response.
      const answer = response.text;
      setMessages([...messages, { role: 'user', content: message }, { role: 'system', content: answer }]);
      setIsWaitingForResponse(false);

      // Extract department from bot response.
      const depaName = response.department;
      const department = departments.find((c) => c.name === depaName);
      setMessagesID([...messagesID, { role: 'user', content: message, depa: department?.department_id || 'wizeq' }, { role: 'system', content: answer, depa: department?.department_id || 'wizeq' }]);

      // Create the payload.
      const newQuestion = {
        question_by_user: message,
        answer_by_bot: answer,
        assignedDepartment: department?.department_id || 'wizeq',
      };

      // Create a new record.
      await postAnswerBotQuestion(newQuestion);
    }
  };

  // Updates the variable every time the value of the input is changed.
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // To update the view of the chatbot box to the last message.
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

  // To open and close the chatbot.
  const handleChatbotToggle = () => {
    setChatbotVisible(!chatbotVisible);
  };

  /// ///////////// Feedback to AnswerBot ////////////////

  const [showThanksMessage, setShowThanksMessage] = useState({});
  const [indexMessage, setIndexMessage] = useState(null);

  // To update the response feedback to positive.
  const handleLikeClick = async (index) => {
    // Setting the index.
    setIndexMessage(index);

    // Create the payload.
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answerFeedback: 1,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the feedback of the record.
    await updateAnswerBotFeedback(updateFeedback);

    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: 'Loading...',
    }));
  };

  // To update the response feedback to negative.
  const handleDislikeClick = async (index) => {
    // Setting the index.
    setIndexMessage(index);

    // Create the payload.
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answerFeedback: -1,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the feedback of the record.
    await updateAnswerBotFeedback(updateFeedback);

    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: 'Loading...',
    }));
  };

  // To post a question and be able to link it to the record made in the AnswerBot table.
  const handlePublishQuestion = async (index) => {
    // Setting the index.
    setIndexMessage(index);

    // Create the payload.
    const updatePostID = {
      question: messages[index].content,
      answer: messages[index + 1].content,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the id of the posted question with the answerbot's
    await updateAnswerBotPostID(updatePostID);

    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: 'Loading...',
    }));
  };

  /// //////////////// User ///////////////////

  const profile = useUser();

  /// //////////////// To Handle the Success/Error Messages in the Bot ///////////////////

  const globalSuccess = useGlobalSuccessMessage();
  const data = useActionData();

  useEffect(() => {
    // Checking if the action was successful
    if (globalSuccess) {
      switch (globalSuccess) {
        // For positive feedback
        case POSITIVE_FEEDBACK_ANSWEBOT:
          // Show thanks message.
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: true,
          }));

          // Set a time to fade the gratitude message.
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: 'na',
            }));
          }, 2500);

          break;

        // For negative feedback
        case NEGATIVE_FEEDBACK_ANSWEBOT:
          // Show thanks message.
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: true,
          }));

          // Show a message if the user would like to share the question in the forum.
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: 'Would you like to share your question with the community?',
            }));
          }, 1500);

          break;

        // For posting question
        case POSTED_ANSWEBOT:
          // Show thanks message.
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: 'Your question has been published successfully.',
          }));

          // Set a time to fade the gratitude message.
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: 'na',
            }));
          }, 2500);

          break;
        default:
          break;
      }

      setIndexMessage(null);
    }
  }, [globalSuccess]);

  useEffect(() => {
    if (!data) return;

    const { error, errors } = data;

    if (errors && Array.isArray(errors)) {
      errors.forEach((_error) => {
        if (_error.message === DEFAULT_ERROR_MESSAGE_BOT) {
          // Show error message.
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: DEFAULT_ERROR_MESSAGE_POST_BOT,
          }));

          // Set a time to fade the error message.
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: 'Would you like to share your question with the community?',
            }));
          }, 3000);
        }
      });

      setIndexMessage(null);

      return;
    }

    if (error) {
      switch (error.message) {
        // Error in feedback
        case DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT:
          // Show error message
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
          }));

          // Set a time to fade the error message
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: false,
            }));
          }, 2500);

          break;

        // Error in post
        case DEFAULT_ERROR_MESSAGE_POST_BOT:
          // Show error message
          setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [indexMessage]: DEFAULT_ERROR_MESSAGE_POST_BOT,
          }));

          // Set a time to fade the error message
          setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => ({
              ...prevShowThanksMessage,
              [indexMessage]: 'na',
            }));
          }, 2500);
          break;

        default:
          break;
      }

      setIndexMessage(null);
    }
  }, [data]);

  /// ///////////// Components ////////////////

  return (
    <div>
      <Styled.BotButton id="answerbotbutton" visible={!chatbotVisible} onClick={handleChatbotToggle}>
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
          <Styled.BotName id="openchat"> AnswerBot </Styled.BotName>
          <Styled.CloseButton id="closechat" onClick={handleChatbotToggle}> ✕ </Styled.CloseButton>
        </Styled.ChatbotHeader>

        <Styled.ChatbotMessages>
          {messages.slice(1).map((message, index) => (
            message.role === 'user' ? (
              <Styled.ChatbotRowMessage id={`msg-${index}`} style={{ justifyContent: 'flex-end' }}>
                <Styled.Message
                  id={`internal-msg-${index}`}
                  key={`message-${message.id}`}
                  className="user"
                  ref={messagesEndRef}
                  isWaiting={false}
                >
                  <span>{message.content}</span>
                </Styled.Message>
                <Styled.IconUser id={`icon-user-${index}`} src={profile.profile_picture} />
              </Styled.ChatbotRowMessage>
            )
              : (
                <div>
                  <Styled.ChatbotRowMessage id={`msg-${index}`} style={{ justifyContent: 'flex-start' }}>
                    <Styled.IconBot />
                    <Styled.Message
                      id={`internal-msg-${index}`}
                      key={`message-${message.id}`}
                      className="bot"
                      ref={messagesEndRef}
                      isWaiting={isWaitingForResponse && index + 2 === messages.length}
                    >
                      <span>{message.content}</span>
                    </Styled.Message>
                  </Styled.ChatbotRowMessage>
                  {index !== 0 && (
                  <div>
                    {!showThanksMessage[index]
                    && (index !== messages.length - 2 || !isWaitingForResponse) && (
                      <>
                        <Styled.LikeButton
                          id={`like-${index}`}
                          key={`like-${message.id}`}
                          onClick={() => handleLikeClick(index)}
                        />
                        <Styled.DislikeButton
                          id={`dislike-${index}`}
                          key={`dislike-${message.id}`}
                          onClick={() => handleDislikeClick(index)}
                        />
                      </>
                    )}
                    {showThanksMessage[index] && (
                      <Styled.TextFeedback id={`feedback-${index}`} padding={showThanksMessage[index]}>
                        {showThanksMessage[index] === true && ('Thanks for the feedback!')}
                        {showThanksMessage[index] === 'na' && ('')}
                        {!(showThanksMessage[index] === 'Thanks for the feedback!' || showThanksMessage[index] === 'na') && (showThanksMessage[index])}
                      </Styled.TextFeedback>
                    )}
                    {showThanksMessage[index] === 'Would you like to share your question with the community?' && (
                      <Styled.PublishButton id={`publishbutton-${index}`} onClick={() => handlePublishQuestion(index)}>
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
          <Styled.Input
            id="chatbotinput"
            type="text"
            placeholder="Enter your question..."
            onChange={handleChange}
            disabled={isWaitingForResponse}
            enabled={!isWaitingForResponse}
            title="Type at least 14 characters"
          />
          <Styled.SendButton id="sendbutton" type="submit" inputLength={inputValue.length} disabled={isWaitingForResponse} />
        </Styled.ChatbotInput>
      </Styled.ChatbotContainer>
    </div>
  );
}

AnswerBot.propTypes = {
  postAnswerBotQuestion: PropTypes.func.isRequired,
  updateAnswerBotFeedback: PropTypes.func.isRequired,
  updateAnswerBotPostID: PropTypes.func.isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
};

AnswerBot.defaultProps = {
  departments: [],
};

export default AnswerBot;
