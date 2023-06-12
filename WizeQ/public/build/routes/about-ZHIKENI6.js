import {
  require_session
} from "/build/_shared/chunk-Q745UF6A.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes\about.jsx?browser
init_react();

// app/routes/about.jsx
init_react();
var import_react = __toESM(require_react());

// app/styles/About.Styled.jsx
init_react();
var colorDark50 = "#4E5154";
var colorSecondary = "#00A7E5";
var About = styled_components_browser_esm_default.div`
  background-color: #fff;
  color: ${colorDark50};
  line-height: 1.71;
  text-align: center;
`;
var AboutBody = styled_components_browser_esm_default.div`
  margin: auto;
  max-width: 65%;
  padding: 0 20px;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  h1 {
    color: #a2abaf;
    font-size: 14px;
    letter-spacing: 1.5px;
    margin: auto;
    padding: 72px 0 12px;
    text-transform: uppercase;
  }

  h2 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    padding: 8px 10px;
  }

  h3 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: left;
  }

  p {
    color: ${colorDark50};
    letter-spacing: 0.6px;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: justify;
  }

  span ul {
    list-style: none;

    @media (max-width: 767px) {
      padding-left: 20px;
    }
  }

  span ul li {
    padding-top: 10px;
    width: 60%;

    @media (max-width: 767px) {
      width: 100%;
    }

    &:before {
      display: inline-block;
      content: "\\2022";
      font-size: 30px;
      font-weight: bold;
      left: 6px;
      line-height: 0;
      margin-left: -1em;
      margin-top: 12px;
      position: relative;
      top: 4px;
      width: 1em;
      color: ${colorSecondary};

      @media (max-width: 767px) {
        left: 6px;
      }
    }
  }

  span ul.inside-list li::before {
    content: "\00b0";
    font-weight: unset;
    left: 22px;
    top: 23px;

    @media (max-width: 767px) {
      left: 32px;
    }
  }
`;
var BoxWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
var BoxContainer = styled_components_browser_esm_default.div`
    padding: 16px;
    
    @media screen and (min-width: 1025px){
      max-width: 50%;
    }

    @media (max-width: 767px) {
      left: 32px;
    }
`;
var BoxImageContainer = styled_components_browser_esm_default.div`
display: inline-block;
height: 48px;
margin-right: 8px;
`;
var BoxImage = styled_components_browser_esm_default.img`
  float: left;
  margin: 28px;

  @media (max-width: 767px) {
    margin-top: 0px;
  }
`;
var BoxBoldText = styled_components_browser_esm_default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;

  @media (max-width: 767px)  {
    margin-top: 0px;
  }
`;
var BoxMetadata = styled_components_browser_esm_default.div`
  margin: 28px;
  text-align: left;
`;
var AboutMetadata = styled_components_browser_esm_default.div`
  @media (max-width: 767px)  {
    margin-top: 24px;
  }
`;
var AboutWhatElseContainer = styled_components_browser_esm_default.div`
  margin-bottom: 28px;
  margin-top: 28px;
`;
var AboutWhatElseImg = styled_components_browser_esm_default.img`
  float: right;
  margin-left: 100px;
  margin-right: 28px;

  @media (max-width: 767px) {
    float: none;
    margin: auto;
  }
`;
var AboutWHatElseText = styled_components_browser_esm_default.div`
  margin-top: 44px;
  text-align: left;
  width: 70%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
var AboutWHatElseBold = styled_components_browser_esm_default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;
`;
var AboutWhatElseMetadata = styled_components_browser_esm_default.div`
  margin: 28px;
  text-align: left;
`;
var AboutFooter = styled_components_browser_esm_default.div`
  padding: 50px 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 50px 0 100px;
  }

  @media (max-width: 767px) {
    padding: 50px 0 100px;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: auto;
    max-width: 800px;
    padding: 0 20px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;

// app/images/ic_meeting.svg
var ic_meeting_default = "/build/_assets/ic_meeting-Q6VQZ7JB.svg";

// app/images/ic_saving_fund.svg
var ic_saving_fund_default = "/build/_assets/ic_saving_fund-Q3MWXURZ.svg";

// app/images/ic_dialogue.svg
var ic_dialogue_default = "/build/_assets/ic_dialogue-IMAMZON2.svg";

// app/images/ic_anonymous.svg
var ic_anonymous_default = "/build/_assets/ic_anonymous-YCAN6UEP.svg";

// app/routes/about.jsx
var import_session = __toESM(require_session());
function About2() {
  return /* @__PURE__ */ import_react.default.createElement(About, null, /* @__PURE__ */ import_react.default.createElement(AboutBody, null, /* @__PURE__ */ import_react.default.createElement("h1", null, "About Us"), /* @__PURE__ */ import_react.default.createElement("h2", null, "This is Wizeline Questions"), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement("strong", null, "Wizeline Questions (WizeQ)"), " ", "is a communication space where you can express your ideas, learn more about Wizeline, and ask all kinds of questions."), /* @__PURE__ */ import_react.default.createElement("p", null, "Wizeline Questions is a knowledge base where you can ask for information to a specific department and allow other Wizeliners to benefit from it. For example:"), /* @__PURE__ */ import_react.default.createElement(BoxWrapper, null, /* @__PURE__ */ import_react.default.createElement(BoxContainer, null, /* @__PURE__ */ import_react.default.createElement(BoxImageContainer, null, /* @__PURE__ */ import_react.default.createElement(BoxImage, {
    src: ic_meeting_default
  }), /* @__PURE__ */ import_react.default.createElement(BoxBoldText, null, "Are you still having problems with Zoom for your next meeting?")), /* @__PURE__ */ import_react.default.createElement(BoxMetadata, null, "Check Wizeline Questions, someone might have already asked IT the same question. If that is not the case, this is your chance to shine!")), /* @__PURE__ */ import_react.default.createElement(BoxContainer, null, /* @__PURE__ */ import_react.default.createElement(BoxImageContainer, null, /* @__PURE__ */ import_react.default.createElement(BoxImage, {
    src: ic_saving_fund_default
  }), /* @__PURE__ */ import_react.default.createElement(BoxBoldText, null, "Do you want to know more about the savings fund?")), /* @__PURE__ */ import_react.default.createElement(BoxMetadata, null, "Tag People Ops in your question, other Wizeliners will be glad to learn about that same topic, for sure!"))), /* @__PURE__ */ import_react.default.createElement(AboutMetadata, null, /* @__PURE__ */ import_react.default.createElement("p", null, "Information can be easily lost in the flood of comments and pinged posts on Slack. Do you need information to persist?", " ", /* @__PURE__ */ import_react.default.createElement("strong", null, "Use Wizeline Questions instead!"))), /* @__PURE__ */ import_react.default.createElement("h3", null, "What else?"), /* @__PURE__ */ import_react.default.createElement(AboutWhatElseContainer, null, /* @__PURE__ */ import_react.default.createElement(AboutWhatElseImg, {
    src: ic_dialogue_default
  }), /* @__PURE__ */ import_react.default.createElement(AboutWHatElseText, null, /* @__PURE__ */ import_react.default.createElement(AboutWHatElseBold, null, "Start a conversation. Is there a topic you want to discuss with other Wizeliners?"), /* @__PURE__ */ import_react.default.createElement(AboutWhatElseMetadata, null, "This is the place!. You can reply to a question and also hold interesting conversations with other Wizeliners.  Use it as a discussion forum, suggestion what-else, or simply visit to say hello! Help us to keep Wizeline an amazing place!"))), /* @__PURE__ */ import_react.default.createElement(AboutWhatElseContainer, null, /* @__PURE__ */ import_react.default.createElement(AboutWhatElseImg, {
    src: ic_anonymous_default
  }), /* @__PURE__ */ import_react.default.createElement(AboutWHatElseText, null, /* @__PURE__ */ import_react.default.createElement(AboutWHatElseBold, null, "Is there a sensitive question you want to ask anonymously?"), /* @__PURE__ */ import_react.default.createElement(AboutWhatElseMetadata, null, "Ask on Wizeline Questions! To promote ownership and open communication, it displays your user name by default when you post a new question. But you can always opt for anonymity."))), /* @__PURE__ */ import_react.default.createElement("h3", null, "Things to Keep in Mind When Asking a Question"), /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("p", null, "We value your ideas, questions, suggestions, and comments. Therefore, we encourage you to use this communication space. Please, when writing a new question or a comment follow these recommendations:"), /* @__PURE__ */ import_react.default.createElement("div", {
    style: { textAlign: "justify" }
  }, /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, "Strive for constructive open communication. Avoid vagueness."), /* @__PURE__ */ import_react.default.createElement("li", null, "Do not demean or degrade others because of their gender, race, age, religion, etc."), /* @__PURE__ */ import_react.default.createElement("li", null, "Avoid posting questions that include sexually explicit comments, hate speech, prejudicial remarks, and profanity."), /* @__PURE__ */ import_react.default.createElement("li", null, "Do not mock other members, their comments, profiles, threads, or experiences. Remember, what is funny for you may be offensive to others."))))), /* @__PURE__ */ import_react.default.createElement(AboutFooter, null, /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement("strong", null, "We need your help!"), " ", "Wizeline Questions is an internal project and everyone can contribute. Come aboard and meet the team at", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://wizeline.slack.com/archives/C031D9DP7C2",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "#wize-q-2022"), ". You can take a look at our", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://github.com/wizeline/wize-q-remix"
  }, "source code"), " ", "on GitHub.")));
}
var about_default = About2;
export {
  about_default as default
};
//# sourceMappingURL=/build/routes/about-ZHIKENI6.js.map
