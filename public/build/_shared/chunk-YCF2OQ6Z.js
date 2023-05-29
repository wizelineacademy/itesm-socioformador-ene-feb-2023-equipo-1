import {
  useUser_default
} from "/build/_shared/chunk-I5GBPAQ4.js";
import {
  require_prop_types
} from "/build/_shared/chunk-2VQ64DF4.js";
import {
  Ce,
  Ue,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/components/AnswerBot/AnswerBot.jsx
init_react();

// app/components/AnswerBot/AnswerBot.Styled.jsx
init_react();

// app/images/logo_answerbot.png
var logo_answerbot_default = "/build/_assets/logo_answerbot-6JNTGKON.png";

// app/images/post-icon.png
var post_icon_default = "/build/_assets/post-icon-N5A7NK2B.png";

// app/images/like.png
var like_default = "/build/_assets/like-6G77RJIC.png";

// app/images/dislike.png
var dislike_default = "/build/_assets/dislike-ZNGYXD5Y.png";

// app/images/likeHover.png
var likeHover_default = "/build/_assets/likeHover-5HAAADIM.png";

// app/images/dislikeHover.png
var dislikeHover_default = "/build/_assets/dislikeHover-TLAFEHHT.png";

// app/components/AnswerBot/AnswerBot.Styled.jsx
var BotButton = styled_components_browser_esm_default.button`
    background-color: #213246;
    border: none;
    width: 8.4vw;
    height: 8.4vw;
    right: 0px;
    position: fixed;
    top: 70%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    visibility: ${(props) => props.visible ? "visible" : "hidden"};
    transition: width 0.3s ease-in-out;

    & > .message {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        width: 19vw;

        & > .message {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease-in-out;
            transition-delay: 0.2s;
        }
        
        @media screen and (min-width: 1600px) {
            width: 14vw;
        }

        @media screen and (min-width: 2000px) {
            width: 13vw;
        }
    }

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (min-width: 1600px) {
        width: 6vw;
        height: 6vw;
    }
`;
var BotIcon = styled_components_browser_esm_default.img`
    width: 5.6vw;
    height: 5.6vw;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    background-image: url(${logo_answerbot_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 1.5vw;
    transform: translateY(-50%);

    @media screen and (min-width: 1600px) {
        width: 4vw;
        height: 4vw;
        left: 1.25vw;
    }
`;
var BotMessage = styled_components_browser_esm_default.div`
    color: #fff;
    font-size: 115%;
    font-weight: bold;
    position: absolute;
    right: 1.3vw;
    padding-left: 7.85vw;
    transform: translateY(-50%);

    @media screen and (max-width: 1240px) {
        font-size: 100%;
        right: 1.1vw;
    }

    @media screen and (max-width: 1100px) {
        font-size: 85%;
    }

    @media screen and (min-width: 1600px) {
        font-size: 90%;
        padding-left: 5vw;
    }

`;
var ChatbotContainer = styled_components_browser_esm_default.div`
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
    transition: visibility 0.3s ease-in-out;
    visibility: ${(props) => props.visible ? "visible" : "hidden"};

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (max-height: 450px) {
        display: none;
    }
`;
var ChatbotHeader = styled_components_browser_esm_default.div`
    background-color: #213246;
    height: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 47.5px;
`;
var IconBot = styled_components_browser_esm_default.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    background-image: url(${logo_answerbot_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    left: 5%;
    margin: 5px 0px;
`;
var IconUser = styled_components_browser_esm_default.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    margin: 5px 0px;
`;
var BotName = styled_components_browser_esm_default.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    padding: 0 85px;

    @media screen and (min-width: 2975px) {
        padding: 0 75px;
    }
`;
var CloseButton = styled_components_browser_esm_default.button`
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
var ChatbotMessages = styled_components_browser_esm_default.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`;
var ChatbotRowMessage = styled_components_browser_esm_default.div`
    display: flex;
    alignItems: center;
`;
var blinkAnimation = Ue`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;
var Message = styled_components_browser_esm_default.div`
    padding: 10px 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px 7.5px;
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

        ${(props) => props.isWaiting && Ce`
          position: relative;
          overflow: hidden;

          &:after {
            content: '...';
            animation: ${blinkAnimation} 1s infinite alternate;
            animation-delay: ${props.index * 0.2}s;
          }
        `}
    }
`;
var ChatbotInput = styled_components_browser_esm_default.form`
    display: flex;
    align-items: center;
    width: 330px;
    background-color: #fff;
`;
var Input = styled_components_browser_esm_default.input`
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    cursor: ${(props) => props.enabled ? "text" : "not-allowed"};
`;
var SendButton = styled_components_browser_esm_default.button`
    width: 30px;
    height: 30px;
    border-radius: 25%;
    background-color: #fff;
    border: none;
    background-image: url(${post_icon_default});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 5px;
    opacity: ${(props) => props.inputLength > 13 ? 1 : 0.3};
    cursor: ${(props) => props.inputLength > 13 ? "pointer" : "not-allowed"};
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.inputLength > 13 ? "#F2F2F1" : "#fff"};
    }
`;
var LikeButton = styled_components_browser_esm_default.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${like_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 2.5% 12.5%;
    padding: 0 5px;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${likeHover_default});
    }
`;
var DislikeButton = styled_components_browser_esm_default.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${dislike_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${dislikeHover_default});
    }
`;
var TextFeedback = styled_components_browser_esm_default.span`
    padding: ${(props) => props.padding === "na" ? "0px 0px" : "5px 31px"};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
`;
var PublishButton = styled_components_browser_esm_default.button`
    margin: 0 0 2.5% 10%;
    background-color: #fff;
    color: #213246;
    border: 1px solid #213246;
    padding: 8px 25px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #213246;
        color: #fff;
    }
`;

// app/components/AnswerBot/AnswerBot.jsx
var import_react = __toESM(require_react());

// app/controllers/answerBot/pdfConv.js
init_react();
var pdfConv = async (conversation) => fetch("http://127.0.0.1:3000/api/pdf_conversation_gpt", {
  method: "POST",
  body: JSON.stringify(conversation),
  headers: {
    "Content-Type": "application/json"
  }
}).then((response) => response.json()).then((data) => ({ text: data.conversation[data.conversation.length - 1].content, department: data.department })).catch((error) => {
  throw new Error(`There was an error making the API call: ${error.message}`);
});
var pdfConv_default = pdfConv;

// app/components/AnswerBot/AnswerBot.jsx
var import_prop_types = __toESM(require_prop_types());
function AnswerBot({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  updateAnswerBotPostID,
  departments
}) {
  const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\n If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n";
  const [messages, setMessages] = (0, import_react.useState)([{ role: "system", content: instructions }, { role: "system", content: "Hello! Ask me any question and I'll see how I can help you." }]);
  const [messagesID, setMessagesID] = (0, import_react.useState)([{ role: "system", content: instructions, depa: null }, { role: "system", content: "Hello! Ask me any question and I'll see how I can help you.", depa: null }]);
  const messagesEndRef = (0, import_react.useRef)(null);
  const [inputValue, setInputValue] = (0, import_react.useState)("");
  const [isWaitingForResponse, setIsWaitingForResponse] = (0, import_react.useState)(false);
  const handleInput = async (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const message = input.value;
    if (message.length > 13) {
      input.value = "";
      setInputValue(input.value);
      setIsWaitingForResponse(true);
      setMessages([...messages, { role: "user", content: message }, { role: "system", content: "" }]);
      const chatHistory = [...messages, { role: "user", content: message }];
      const filteredMessages = chatHistory.filter((mess, index) => index !== 1);
      const response = await pdfConv_default(filteredMessages);
      const answer = response.text;
      setMessages([...messages, { role: "user", content: message }, { role: "system", content: answer }]);
      setIsWaitingForResponse(false);
      const depaName = response.department;
      const department = departments.find((c) => c.name === depaName);
      setMessagesID([...messagesID, { role: "user", content: message, depa: (department == null ? void 0 : department.department_id) || "wizeq" }, { role: "system", content: answer, depa: (department == null ? void 0 : department.department_id) || "wizeq" }]);
      const newQuestion = {
        question_by_user: message,
        answer_by_bot: answer,
        assignedDepartment: (department == null ? void 0 : department.department_id) || "wizeq"
      };
      try {
        await postAnswerBotQuestion(newQuestion);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  (0, import_react.useEffect)(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToBottom();
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const [chatbotVisible, setChatbotVisible] = (0, import_react.useState)(false);
  const handleChatbotToggle = () => {
    setChatbotVisible(!chatbotVisible);
  };
  const [showThanksMessage, setShowThanksMessage] = (0, import_react.useState)({});
  const handleLikeClick = async (index) => {
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true
    }));
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answer_feedback: 1,
      assignedDepartment: messagesID[index].depa
    };
    try {
      await updateAnswerBotFeedback(updateFeedback);
    } catch (error) {
      throw error;
    }
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: "na"
      }));
    }, 2500);
  };
  const handleDislikeClick = async (index) => {
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: true
    }));
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: "Would you like to share your question with the community?"
      }));
    }, 1500);
    const updateFeedback = {
      question_by_user: messages[index].content,
      answer_by_bot: messages[index + 1].content,
      answer_feedback: -1,
      assignedDepartment: messagesID[index].depa
    };
    try {
      await updateAnswerBotFeedback(updateFeedback);
    } catch (error) {
      throw error;
    }
  };
  const handlePublishQuestion = async (index) => {
    const updatePostID = {
      question: messages[index].content,
      answer: messages[index + 1].content,
      assignedDepartment: messagesID[index].depa
    };
    try {
      await updateAnswerBotPostID(updatePostID);
    } catch (error) {
      throw error;
    }
    setShowThanksMessage((prevShowThanksMessage) => ({
      ...prevShowThanksMessage,
      [index]: "Your question has been published successfully."
    }));
    setTimeout(() => {
      setShowThanksMessage((prevShowThanksMessage) => ({
        ...prevShowThanksMessage,
        [index]: "na"
      }));
    }, 2500);
  };
  const profile = useUser_default();
  if (!profile) {
    return;
  }
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(BotButton, {
    visible: !chatbotVisible,
    onClick: handleChatbotToggle
  }, /* @__PURE__ */ import_react.default.createElement(BotIcon, null), /* @__PURE__ */ import_react.default.createElement(BotMessage, {
    className: "message"
  }, "Hi, I'm AnswerBot!", /* @__PURE__ */ import_react.default.createElement("br", null), "Ask me anything!")), /* @__PURE__ */ import_react.default.createElement(ChatbotContainer, {
    visible: chatbotVisible
  }, /* @__PURE__ */ import_react.default.createElement(ChatbotHeader, null, /* @__PURE__ */ import_react.default.createElement(IconBot, {
    style: { position: "absolute" }
  }), /* @__PURE__ */ import_react.default.createElement(BotName, null, " AnswerBot "), /* @__PURE__ */ import_react.default.createElement(CloseButton, {
    onClick: handleChatbotToggle
  }, " \u2715 ")), /* @__PURE__ */ import_react.default.createElement(ChatbotMessages, null, messages.slice(1).map((message, index) => message.role === "user" ? /* @__PURE__ */ import_react.default.createElement(ChatbotRowMessage, {
    style: { justifyContent: "flex-end" }
  }, /* @__PURE__ */ import_react.default.createElement(Message, {
    key: `message-${message.id}`,
    className: "user",
    ref: messagesEndRef
  }, message.content), /* @__PURE__ */ import_react.default.createElement(IconUser, {
    src: profile.profile_picture
  })) : /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(ChatbotRowMessage, {
    style: { justifyContent: "flex-start" }
  }, /* @__PURE__ */ import_react.default.createElement(IconBot, null), /* @__PURE__ */ import_react.default.createElement(Message, {
    key: `message-${message.id}`,
    className: "bot",
    ref: messagesEndRef,
    isWaiting: isWaitingForResponse && index + 2 === messages.length
  }, message.content)), index !== 0 && /* @__PURE__ */ import_react.default.createElement("div", null, !showThanksMessage[index] && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, (index !== messages.length - 2 || !isWaitingForResponse) && /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(LikeButton, {
    key: `like-${index}`,
    onClick: () => handleLikeClick(index)
  }), /* @__PURE__ */ import_react.default.createElement(DislikeButton, {
    key: `dislike-${index}`,
    onClick: () => handleDislikeClick(index)
  }))), showThanksMessage[index] && /* @__PURE__ */ import_react.default.createElement(TextFeedback, {
    padding: showThanksMessage[index]
  }, showThanksMessage[index] === true ? "Thanks for the feedback!" : showThanksMessage[index] === "na" ? "" : showThanksMessage[index]), showThanksMessage[index] === "Would you like to share your question with the community?" && /* @__PURE__ */ import_react.default.createElement(PublishButton, {
    onClick: () => handlePublishQuestion(index)
  }, "Post question"))))), /* @__PURE__ */ import_react.default.createElement(ChatbotInput, {
    onSubmit: handleInput
  }, /* @__PURE__ */ import_react.default.createElement(Input, {
    type: "text",
    placeholder: "Enter your question...",
    onChange: handleChange,
    disabled: isWaitingForResponse,
    enabled: !isWaitingForResponse,
    title: "Type at least 14 characters"
  }), /* @__PURE__ */ import_react.default.createElement(SendButton, {
    type: "submit",
    inputLength: inputValue.length,
    disabled: isWaitingForResponse
  }))));
}
AnswerBot.propTypes = {
  postAnswerBotQuestion: import_prop_types.default.func.isRequired,
  updateAnswerBotFeedback: import_prop_types.default.func.isRequired,
  updateAnswerBotPostID: import_prop_types.default.func.isRequired,
  departments: import_prop_types.default.arrayOf(import_prop_types.default.shape())
};
AnswerBot.defaultProps = {
  departments: []
};
var AnswerBot_default = AnswerBot;

// app/components/AnswerBot/index.js
init_react();

export {
  AnswerBot_default
};
//# sourceMappingURL=/build/_shared/chunk-YCF2OQ6Z.js.map
