import * as Styled from 'app/components/AnswerBot/AnswerBot.Styled';
import React, { useEffect, useRef, useState } from 'react';
import {pdfConv} from 'app/controllers/answerBot/pdfConv';
import PropTypes from 'prop-types';
import useUser from 'app/utils/hooks/useUser';

function AnswerBot({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  updateAnswerBotPostID,
  departments,
}) {
  /// ///////////// Send Question to AnswerBot ////////////////

  // Instrucciones (query principal)
  const instructions = " "
  //Instructions: Compose a comprehensive reply to the query using the search results given.\n If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n";
  //Give all the information needed to fully understand the answer but keep the answer to the following question within 100 words and do not repeat yourself. You will be given the whole conversation in the format of a JSON, where the answers you give are done by the system role and the user questions are done by the user role, use the conversation context to be able to answer more aptly and keep conversation, only answer the last question when giving:"

  // The chat history in the chatbot.
  const [messages, setMessages] = useState([{ role: 'system', content: instructions }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you." }]);
  // To save the id of the assigned department.
  const [messagesID, setMessagesID] = useState([{ role: 'system', content: instructions, depa: null }, { role: 'system', content: "Hello! Ask me any question and I'll see how I can help you.", depa: null }]);

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
      setMessages([...messages, { role: 'user', content: message }, { role: 'system', content: '' }]);

      // Concatenate the user's question to the chat history and send it to the bot model.
      const chatHistory = [...messages, { role: 'user', content: message }];
      // Except the welcome message.
      const filteredMessages = chatHistory.filter((mess, index) => index !== 1);
      const response = await pdfConv(filteredMessages);
      console.log(response)

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

  // To update the response feedback to positive.
  const handleLikeClick = async (index) => {
    // Show thanks message.
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true,
    }));

    // Create the payload.
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answerFeedback: 1,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the feedback of the record.
    await updateAnswerBotFeedback(updateFeedback);

    // Set a time to fade the gratitude message.
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: 'na',
      }));
    }, 2500);
  };

  // To update the response feedback to negative.
  const handleDislikeClick = async (index) => {
    // Show thanks message.
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true,
    }));

    // Show a message if the user would like to share the question in the forum.
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: 'Would you like to share your question with the community?',
      }));
    }, 1500);

    // Create the payload.
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answerFeedback: -1,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the feedback of the record.
    await updateAnswerBotFeedback(updateFeedback);
  };

  // To post a question and be able to link it to the record made in the AnswerBot table.
  const handlePublishQuestion = async (index) => {
    // Create the payload.
    const updatePostID = {
      question: messages[index].content,
      answer: messages[index + 1].content,
      assignedDepartment: messagesID[index].depa,
    };

    // Update the id of the posted question with the answerbot's
    await updateAnswerBotPostID(updatePostID);

    // Show thanks message.
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: 'Your question has been published successfully.',
    }));

    // Set a time to fade the gratitude message.
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: 'na',
      }));
    }, 2500);
  };

  /// //////////////// User ///////////////////

  const profile = useUser();

  /// ///////////// Components ////////////////

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
                <Styled.IconUser src={profile.profile_picture} />
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
                      isWaiting={isWaitingForResponse && index + 2 === messages.length}
                    >
                      {message.content}
                    </Styled.Message>
                  </Styled.ChatbotRowMessage>
                  {index !== 0 && (
                  <div>
                    {!showThanksMessage[index]
                    && (index !== messages.length - 2 || !isWaitingForResponse) && (
                      <>
                        <Styled.LikeButton
                          key={`like-${message.id}`}
                          onClick={() => handleLikeClick(index)}
                        />
                        <Styled.DislikeButton
                          key={`dislike-${message.id}`}
                          onClick={() => handleDislikeClick(index)}
                        />
                      </>
                    )}
                    {showThanksMessage[index] && (
                      <Styled.TextFeedback padding={showThanksMessage[index]}>
                        {showThanksMessage[index] === true && ('Thanks for the feedback!')}
                        {showThanksMessage[index] === 'na' && ('')}
                        {!(showThanksMessage[index] === 'Thanks for the feedback!' || showThanksMessage[index] === 'na') && (showThanksMessage[index])}
                      </Styled.TextFeedback>
                    )}
                    {showThanksMessage[index] === 'Would you like to share your question with the community?' && (
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
          <Styled.Input
            type="text"
            placeholder="Enter your question..."
            onChange={handleChange}
            disabled={isWaitingForResponse}
            enabled={!isWaitingForResponse}
            title="Type at least 14 characters"
          />
          <Styled.SendButton type="submit" inputLength={inputValue.length} disabled={isWaitingForResponse} />
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
