import {
  require_session
} from "/build/_shared/chunk-Q745UF6A.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3MAIR26M.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes/example.jsx?browser
init_react();

// app/routes/example.jsx
init_react();
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var FaqContainer = styled_components_browser_esm_default.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #f7f7f7;
  border-left: 1px solid #ccc;
`;
var FaqList = styled_components_browser_esm_default.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;
var FaqItem = styled_components_browser_esm_default.li`
  margin-bottom: 10px;
  cursor: pointer;
`;
var FaqLink = styled_components_browser_esm_default.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;
function Chatbot() {
  const { questionsFAQ } = useLoaderData();
  (0, import_react.useEffect)(() => {
    console.log(questionsFAQ);
  }, [questionsFAQ]);
  return /* @__PURE__ */ React.createElement(FaqContainer, null, /* @__PURE__ */ React.createElement(FaqList, null, questionsFAQ.map((faq, index) => /* @__PURE__ */ React.createElement(FaqItem, {
    key: index
  }, /* @__PURE__ */ React.createElement(FaqLink, {
    href: `http://localhost:3000/questions/${faq.question_id}`
  }, faq.question)))));
}
var example_default = Chatbot;
export {
  example_default as default
};
//# sourceMappingURL=/build/routes/example-3MLRWGJW.js.map
