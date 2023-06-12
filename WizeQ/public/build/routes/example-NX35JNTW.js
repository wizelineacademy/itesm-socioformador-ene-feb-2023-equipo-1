import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes\example.jsx?browser
init_react();

// app/routes/example.jsx
init_react();
var import_react = __toESM(require_react());
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
  visibility: ${(props) => props.visible ? "visible" : "hidden"};
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
  background-image: url('/build/_assets/logo_answerbot-6JNTGKON.png');
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
var Message = styled_components_browser_esm_default.div`
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
`;
var Button = styled_components_browser_esm_default.button`
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
  const messagesEndRef = (0, import_react.useRef)(null);
  const [messages, setMessages] = (0, import_react.useState)([
    { text: "Hola", user: false },
    { text: "Hola, \xBFc\xF3mo est\xE1s?", user: true },
    { text: "Estoy bien, gracias. \xBFY t\xFA?", user: false },
    { text: "Bien.", user: true },
    { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", user: false },
    { text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", user: true },
    { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", user: false }
  ]);
  const handleInput = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const message = input.value;
    setMessages([...messages, { text: message, user: true }]);
    input.value = "";
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
    console.log(chatbotVisible);
  };
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: handleChatbotToggle
  }, " Mostrar chatbot "), /* @__PURE__ */ import_react.default.createElement(ChatbotContainer, {
    visible: chatbotVisible
  }, /* @__PURE__ */ import_react.default.createElement(ChatbotHeader, null, /* @__PURE__ */ import_react.default.createElement(IconBot, {
    style: { position: "absolute" }
  }), /* @__PURE__ */ import_react.default.createElement(BotName, null, " AnswerBot "), /* @__PURE__ */ import_react.default.createElement(CloseButton, {
    onClick: handleChatbotToggle
  }, " \u2715 ")), /* @__PURE__ */ import_react.default.createElement(ChatbotMessages, null, messages.map((message, index) => message.user ? /* @__PURE__ */ import_react.default.createElement(ChatbotRowMessage, {
    style: { justifyContent: "flex-end" }
  }, /* @__PURE__ */ import_react.default.createElement(Message, {
    key: index,
    className: "user",
    ref: messagesEndRef
  }, " ", message.text, " "), /* @__PURE__ */ import_react.default.createElement(IconUser, {
    src: "/build/_assets/placeholder_user_img-ZWAQNLBE.png"
  })) : /* @__PURE__ */ import_react.default.createElement(ChatbotRowMessage, {
    style: { justifyContent: "flex-start" }
  }, /* @__PURE__ */ import_react.default.createElement(IconBot, null), /* @__PURE__ */ import_react.default.createElement(Message, {
    key: index,
    className: "bot",
    ref: messagesEndRef
  }, " ", message.text, " ")))), /* @__PURE__ */ import_react.default.createElement(ChatbotInput, {
    onSubmit: handleInput
  }, /* @__PURE__ */ import_react.default.createElement(Input, {
    type: "text",
    placeholder: "Enter your question..."
  }), /* @__PURE__ */ import_react.default.createElement(Button, {
    type: "submit"
  }))));
}
var example_default = Chatbot;
export {
  example_default as default
};
//# sourceMappingURL=/build/routes/example-NX35JNTW.js.map
