import {
  setCookie
} from "/build/_shared/chunk-JBOOXQF7.js";
import {
  logo_white_default
} from "/build/_shared/chunk-CHRNTAPK.js";
import {
  SloganContainer,
  Slogan_default
} from "/build/_shared/chunk-FLVKZ3SJ.js";
import {
  Button_default
} from "/build/_shared/chunk-Z5KDSXRE.js";
import {
  PRIMARY_BUTTON
} from "/build/_shared/chunk-P6WCU7WC.js";
import "/build/_shared/chunk-2VQ64DF4.js";
import {
  require_session
} from "/build/_shared/chunk-Q745UF6A.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  Form
} from "/build/_shared/chunk-3MAIR26M.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes/login.jsx?browser
init_react();

// app/routes/login.jsx
init_react();
var import_react3 = __toESM(require_react());

// app/components/Login/LoginContainer.jsx
init_react();
var import_react = __toESM(require_react());

// app/components/Login/LoginContainer.Styled.jsx
init_react();
var LoginDiv = styled_components_browser_esm_default.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var LoginSubDiv = styled_components_browser_esm_default.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
var SH3 = styled_components_browser_esm_default.h3`
  text-align: center;
  color: #646464;
  margin-bottom: 50px;
  font-family: "Nunito";
  font-size: 25px;
  letter-spacing: 0.4px;
  font-weight: 700;
`;
var Span = styled_components_browser_esm_default.span`
  ${(props) => props.variant === "bold" ? 'font-family: "Nunito";' : 'font-family: "Nunito";'}
`;
var Paragraph = styled_components_browser_esm_default.p`
  text-align: center;
  color: #646464;
  font-family: "Nunito";
  font-size: 18px;
  letter-spacing: 0.7px;
  margin-top: 50px;
  width: 350px;
`;
var LeftDiv = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  padding: 0 40px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
var RightDiv = styled_components_browser_esm_default.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #203449;
  position: relative;

  img {
    height: fit-content;
    width: 200px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;

    img {
      margin-bottom: 0;
    }
  }
`;
var Slogan = styled_components_browser_esm_default.div`
  width: 320px;

  ${SloganContainer} {
    p {
      padding: 0;
      text-align: center;
      color: white;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
var RedDiv = styled_components_browser_esm_default.div`
  width: 20px;
  background-color: var(--color-primary);
  position: absolute;
  height: 100%;
  left: 0;
`;
var GoldDiv = styled_components_browser_esm_default.div`
  width: 20px;
  background-color: #e5c8a6;
  position: absolute;
  height: 100%;
  left: 20px;
`;
var AdviceContainer = styled_components_browser_esm_default.div`
  color: white;
  font-size: 15px;

  p {
    font-weight: 100;
    width: fit-content;
  }
  a {
    text-decoration: none;
    color: var(--color-secondary);
  }
  ul {
    li {
      margin: 10px;
    }
  }
`;

// app/components/Login/LoginContainer.jsx
function LoginContainer() {
  const redirectTo = "/";
  (0, import_react.useEffect)(() => {
    setCookie("showValueMessage", true);
  }, []);
  return /* @__PURE__ */ import_react.default.createElement(LoginDiv, null, /* @__PURE__ */ import_react.default.createElement(LoginSubDiv, null, /* @__PURE__ */ import_react.default.createElement(LeftDiv, null, /* @__PURE__ */ import_react.default.createElement(SH3, null, "Welcome Wizeliner!"), /* @__PURE__ */ import_react.default.createElement(Form, {
    action: "/auth/auth0",
    method: "POST"
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ import_react.default.createElement(Button_default, {
    type: "submit",
    category: PRIMARY_BUTTON,
    className: "login-button"
  }, "Log in with your Wizeline account")), /* @__PURE__ */ import_react.default.createElement(Paragraph, null, /* @__PURE__ */ import_react.default.createElement(Span, null, "Wizeline Questions"), /* @__PURE__ */ import_react.default.createElement(Span, {
    variant: "bold"
  }, " DOES NOT "), /* @__PURE__ */ import_react.default.createElement(Span, null, "store any personal information so that you can ask anything."))), /* @__PURE__ */ import_react.default.createElement(RightDiv, null, /* @__PURE__ */ import_react.default.createElement(RedDiv, null), /* @__PURE__ */ import_react.default.createElement(GoldDiv, null), /* @__PURE__ */ import_react.default.createElement("img", {
    src: logo_white_default,
    alt: "logo"
  }), /* @__PURE__ */ import_react.default.createElement(Slogan, null, /* @__PURE__ */ import_react.default.createElement(Slogan_default, null), /* @__PURE__ */ import_react.default.createElement(AdviceContainer, null, /* @__PURE__ */ import_react.default.createElement("p", null, "Before asking a question verify if you can get the information you need from these resources."), /* @__PURE__ */ import_react.default.createElement("ul", null, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://wizeline.slack.com/archives/C1UDJCL9E"
  }, " #Questions "), "- Slack Channel"), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://ticketing.wizeline.com/ticketing.html"
  }, " Ticketing"))))))));
}
var LoginContainer_default = LoginContainer;

// app/routes/login.jsx
var import_session = __toESM(require_session());
function Login() {
  return /* @__PURE__ */ import_react3.default.createElement(LoginContainer_default, null);
}
var login_default = Login;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-FCPWXMGL.js.map
