import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/components/Slogan/Slogan.jsx
init_react();
var import_react = __toESM(require_react());

// app/components/Slogan/Slogan.Styled.jsx
init_react();
var SloganContainer = styled_components_browser_esm_default.div`
  p {
    font-weight: 100;
    width: fit-content;
    font-size: 15px;
    padding: 0 40px;
    span:first-child {
      color: var(--color-secondary);
      font-weight: 600;
    }
    span:last-child {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`;

// app/components/Slogan/Slogan.jsx
function Slogan() {
  return /* @__PURE__ */ import_react.default.createElement(SloganContainer, null, /* @__PURE__ */ import_react.default.createElement("p", null, "Your", " ", /* @__PURE__ */ import_react.default.createElement("span", null, "safespace"), " ", "to search answers, ask questions, and learn about", /* @__PURE__ */ import_react.default.createElement("span", null, "Wizeline")));
}
var Slogan_default = Slogan;

// app/components/Slogan/index.js
init_react();

export {
  SloganContainer,
  Slogan_default
};
//# sourceMappingURL=/build/_shared/chunk-D3E4TBWT.js.map
