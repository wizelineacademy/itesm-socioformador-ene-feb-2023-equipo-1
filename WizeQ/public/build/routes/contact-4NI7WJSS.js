import {
  useUser_default
} from "/build/_shared/chunk-P7BYWKM6.js";
import "/build/_shared/chunk-UBEID7IU.js";
import {
  CONTACT_REASONS_LIST,
  CONTACT_REASONS_MAP,
  CONTACT_WARNING,
  FOOTER_MESSAGE,
  MAXIMUM_MESSAGE_LENGTH,
  MAXIMUM_NAME_LENGTH,
  MAXIMUM_REASON_LENGTH,
  MAXIUMUM_EMAIL_LENGTH,
  require_prop_types
} from "/build/_shared/chunk-VKNNRTVS.js";
import {
  require_session
} from "/build/_shared/chunk-DTXDYIFC.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-UPCFJQSK.js";
import "/build/_shared/chunk-CA4B4QDL.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// browser-route-module:routes\contact.jsx?browser
init_react();

// app/routes/contact.jsx
init_react();
var import_react3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// app/components/Footer.jsx
init_react();
var import_react = __toESM(require_react());

// app/styles/Contact.Styled.jsx
init_react();

// app/images/caret-down-solid.svg
var caret_down_solid_default = "/build/_assets/caret-down-solid-VHSOYTMP.svg";

// app/styles/Contact.Styled.jsx
var FooterDiv = styled_components_browser_esm_default.div`
    background-color: #f4f7f9;
    color: #a2abaf;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px 70px;

    @media (max-width: 400px) {
        padding: 0 15px 20px;
    }
`;
var FooterContainer = styled_components_browser_esm_default.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;

    @media (min-width: 1200px) {
        width: 1170px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 970px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 750px;
    }
`;
var FooterLink = styled_components_browser_esm_default.a`
    color: #666;

    &:hover {
        text-decoration: underline;
    }
`;
var ContactInputDiv = styled_components_browser_esm_default.div`
    background-color: #f4f7f9;
    box-sizing: border-box;
    min-height: 64.8752vh;
    padding: 2% 0 7%;
    position: relative;
    text-align: center;
`;
var ContactForm = styled_components_browser_esm_default.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    max-width: 390px;
    width: 100%;
`;
var ContactFormP = styled_components_browser_esm_default.p`
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
    color: var(--color-dark-50);
    line-height: 24px;
`;
var ContactSelect = styled_components_browser_esm_default.select`
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background: #fff url(${caret_down_solid_default}) no-repeat;
    background-position-x: calc(100% - 16px);
    background-position-y: 6px;
    background-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: #222;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
`;
var ContactTextArea = styled_components_browser_esm_default.textarea`
    border: 1px solid #ccc;
    height: 150px;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
    resize: none;
    overflow: auto;
    border-radius: 4px;
    box-sizing: border-box;
`;
var BtnContainer = styled_components_browser_esm_default.div`
    padding: 12px 0;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    width: 100%;
`;
var SubmitBtn = styled_components_browser_esm_default.button`
    background-color: var(--color-secondary);
    border-radius: 3px;
    border: none;
    color: #fff;
    cursor: pointer;
    margin: 4px 2px;
    padding: 12px 32px;
    text-decoration: none;
    width: 100%;
    text-transform: none;
    overflow: visible;

    &:hover {
        background-color: #00a7e587;
    }
`;
var SuccessDiv = styled_components_browser_esm_default.div`
    background-color: white;
    color: var(--color-dark-50);
    margin-top: 50px;
    max-width: 500px;
    padding: 30px 20px;
    margin-right: auto;
    margin-left: auto;  

    @media (min-width: 1200px) {
        width: 1170px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 970px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 750px;
    }
`;
var ContactCardDiv = styled_components_browser_esm_default.div`
    background-color: #1c1c1c;
`;
var ContactInputHeader = styled_components_browser_esm_default.div`
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
    box-sizing: border-box;
`;
var ContactInputHeaderH1 = styled_components_browser_esm_default.h1`
    color: #a2abaf;
    letter-spacing: 1.5px;
    padding: 72px 0 12px;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 auto;
    max-width: 390px;
`;
var ContactInputHeaderH2 = styled_components_browser_esm_default.h2`
    color: var(--color-dark-50);
    font-size: 24px;
    font-weight: 600;
    padding: 12px 0 8px;
    margin: 0 auto;
    max-width: 390px;
`;
var ContactInputHeaderP = styled_components_browser_esm_default.p`
    color: var(--color-dark-50);
    letter-spacing: 0.6px;
    line-height: 1.71;
    padding: 8px 10px 28px;
    font-size: 14px;
    margin: 0 auto;
    max-width: 390px;
`;
var ContactInputSitesDiv = styled_components_browser_esm_default.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 390px;
`;
var ContactInputGoTo = styled_components_browser_esm_default.div`
    margin: 20px 40px 40px;
    max-width: 390px;
`;
var ContactInputGoToP = styled_components_browser_esm_default.p`
    font-size: 16px;
    margin: 8px 0 4px;
    padding: 0;
    max-width: 390px;
`;
var ContactInputGoToA = styled_components_browser_esm_default.a`
    padding: 4px 0;
    white-space: nowrap;
    color: var(--color-secondary);
    margin: 0 auto;
    max-width: 390px;
`;
var ContactInputGoToImg = styled_components_browser_esm_default.img`
    background-color: #f4f7f9;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #f4f7f9;
    height: 28px;
    margin: 18px;
    width: 28px;
    max-width: 390px;
`;

// app/components/Footer.jsx
var Footer = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.state = {
      wizeQTeamUrl: "https://wizeline.atlassian.net/wiki/spaces/WIZEQ/overview"
    };
  }
  render() {
    return /* @__PURE__ */ import_react.default.createElement(FooterDiv, null, /* @__PURE__ */ import_react.default.createElement(FooterContainer, null, /* @__PURE__ */ import_react.default.createElement(FooterLink, {
      href: this.state.wizeQTeamUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    }, FOOTER_MESSAGE)));
  }
};
var Footer_default = Footer;

// app/images/ic_email.svg
var ic_email_default = "/build/_assets/ic_email-HBLCPGEV.svg";

// app/images/ic_slack.svg
var ic_slack_default = "/build/_assets/ic_slack-IQPOSSZZ.svg";

// app/components/ContactGoto.jsx
init_react();
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function ContactGoto(props) {
  const {
    icon,
    text,
    goto,
    dir
  } = props;
  return /* @__PURE__ */ import_react2.default.createElement(ContactInputGoTo, null, /* @__PURE__ */ import_react2.default.createElement(ContactInputGoToImg, {
    src: icon
  }), /* @__PURE__ */ import_react2.default.createElement(ContactInputGoToP, null, text), /* @__PURE__ */ import_react2.default.createElement(ContactInputGoToA, {
    href: dir,
    target: "_blank",
    rel: "noopener noreferrer"
  }, goto));
}
ContactGoto.propTypes = {
  icon: import_prop_types.default.string.isRequired,
  text: import_prop_types.default.string.isRequired,
  goto: import_prop_types.default.string.isRequired,
  dir: import_prop_types.default.string.isRequired
};
var ContactGoto_default = ContactGoto;

// app/routes/contact.jsx
var import_session = __toESM(require_session());
var initialState = {
  reason: "",
  message: "",
  placeholders: {
    message: "Your message"
  },
  isSubmitted: false
};
var Contact = (props) => {
  const { full_name: name, email } = useUser_default();
  const [state, setState] = (0, import_react3.useState)(initialState);
  const resetForm = () => {
    setState(initialState);
  };
  const handleContactClick = () => {
    resetForm();
  };
  const renderSuccessMessage = () => /* @__PURE__ */ import_react3.default.createElement(SuccessDiv, null, /* @__PURE__ */ import_react3.default.createElement("p", null, "Thanks for contacting us! We will review your feedback shortly."), /* @__PURE__ */ import_react3.default.createElement("p", null, "Click", " ", /* @__PURE__ */ import_react3.default.createElement("button", {
    type: "button",
    onClick: handleContactClick
  }, " here "), " ", "to contact us again."), /* @__PURE__ */ import_react3.default.createElement("p", null, "Cheers,", /* @__PURE__ */ import_react3.default.createElement("br", null), " ", "The WizeQ team!"));
  const renderOptionsList = () => CONTACT_REASONS_LIST.map((options) => /* @__PURE__ */ import_react3.default.createElement("option", {
    value: options.value,
    key: options.value
  }, options.reason));
  const onInputChange = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      };
    });
  };
  const handleEmailSent = () => {
    setState((prevState) => ({
      ...prevState,
      isSubmitted: true
    }));
  };
  const createEmailContent = () => {
    const emailObj = {};
    emailObj.fullName = name;
    emailObj.email = email;
    emailObj.reason = CONTACT_REASONS_MAP[state.reason];
    emailObj.message = state.message;
    return emailObj;
  };
  const onSubmitWithSuccess = () => {
    const emailBody = createEmailContent();
    props.sendContact(emailBody);
    handleEmailSent();
  };
  const inputLengthIsValid = (input, maxLength) => input.length > 0 && input.length <= maxLength;
  const onSubmit = (event) => {
    event.preventDefault();
    if (state.isSubmitted) {
      return;
    }
    if (!inputLengthIsValid(name, MAXIMUM_NAME_LENGTH)) {
      props.warningAlert(CONTACT_WARNING);
      return;
    }
    if (!inputLengthIsValid(email, MAXIUMUM_EMAIL_LENGTH)) {
      props.warningAlert(CONTACT_WARNING);
      return;
    }
    if (!inputLengthIsValid(state.reason, MAXIMUM_REASON_LENGTH)) {
      props.warningAlert(CONTACT_WARNING);
      return;
    }
    if (!inputLengthIsValid(state.message, MAXIMUM_MESSAGE_LENGTH)) {
      props.warningAlert(CONTACT_WARNING);
      return;
    }
    onSubmitWithSuccess();
  };
  const renderContactForm = () => {
    const firstName = name ? name.split(" ")[0] : "";
    return /* @__PURE__ */ import_react3.default.createElement(ContactForm, {
      onSubmit
    }, /* @__PURE__ */ import_react3.default.createElement(ContactFormP, null, "Hi", /* @__PURE__ */ import_react3.default.createElement("strong", null, " ", firstName), "!", /* @__PURE__ */ import_react3.default.createElement("br", null), "Send us a message!"), /* @__PURE__ */ import_react3.default.createElement(ContactSelect, {
      name: "reason",
      onChange: onInputChange
    }, renderOptionsList()), /* @__PURE__ */ import_react3.default.createElement(ContactTextArea, {
      name: "message",
      placeholder: state.placeholders.message,
      onChange: onInputChange
    }), /* @__PURE__ */ import_react3.default.createElement(BtnContainer, null, /* @__PURE__ */ import_react3.default.createElement(SubmitBtn, {
      type: "submit"
    }, "Submit")));
  };
  const handleRender = () => {
    if (!state.isSubmitted) {
      return renderContactForm();
    }
    if (state.isSubmitted) {
      return renderSuccessMessage();
    }
    return null;
  };
  return /* @__PURE__ */ import_react3.default.createElement(ContactCardDiv, null, /* @__PURE__ */ import_react3.default.createElement(ContactInputHeader, null, /* @__PURE__ */ import_react3.default.createElement(ContactInputHeaderH1, null, "Contact Us"), /* @__PURE__ */ import_react3.default.createElement(ContactInputHeaderH2, null, "We are here for you!"), /* @__PURE__ */ import_react3.default.createElement(ContactInputHeaderP, null, "We\u2019d love to hear from you, please let us know what you think and get in touch with us.", " "), /* @__PURE__ */ import_react3.default.createElement(ContactInputSitesDiv, null, /* @__PURE__ */ import_react3.default.createElement(ContactGoto_default, {
    icon: ic_email_default,
    text: "Email us at",
    goto: "wizeq@wizeline.com",
    dir: "mailto:wizeq@wizeline.com"
  }), /* @__PURE__ */ import_react3.default.createElement(ContactGoto_default, {
    icon: ic_slack_default,
    text: "Slack us at",
    goto: "#wize-q-support",
    dir: "https://wizeline.slack.com/messages/C6M652THT"
  }))), /* @__PURE__ */ import_react3.default.createElement(ContactInputDiv, null, handleRender()), /* @__PURE__ */ import_react3.default.createElement(Footer_default, null));
};
Contact.propTypes = {
  sendContact: import_prop_types2.default.func.isRequired,
  warningAlert: import_prop_types2.default.func.isRequired
};
var contact_default = Contact;
export {
  contact_default as default
};
//# sourceMappingURL=/build/routes/contact-4NI7WJSS.js.map
