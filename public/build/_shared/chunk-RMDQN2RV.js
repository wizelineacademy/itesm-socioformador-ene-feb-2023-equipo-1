import {
  require_prop_types
} from "/build/_shared/chunk-2VQ64DF4.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/utils/input.js
init_react();
var validTextLength = (currentTextLength, minTextLength, maxTextLength) => currentTextLength >= minTextLength && currentTextLength <= maxTextLength;
var shouldShowMarkdownSuggestions = (textLength, minLength, windowWidth, minWidth) => windowWidth > minWidth && textLength > minLength;

// app/components/InputCounter/InputCounter.jsx
init_react();
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/components/InputCounter/InputCounter.Styled.jsx
init_react();
var InputCounterWrapper = styled_components_browser_esm_default.p`
    align-self: flex-end;
    bottom: 33px;
    color: #a2abaf;
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    right: 12px;
    padding: 10px;
`;
var InputCounter_Styled_default = InputCounterWrapper;

// app/components/InputCounter/InputCounter.jsx
function InputCounter(props) {
  const { currentLength, maxLength } = props;
  return /* @__PURE__ */ import_react.default.createElement(InputCounter_Styled_default, {
    className: "input-counter"
  }, currentLength, "/", maxLength);
}
var InputCounter_default = InputCounter;
InputCounter.propTypes = {
  currentLength: import_prop_types.default.string.isRequired,
  maxLength: import_prop_types.default.string.isRequired
};

// app/components/InputCounter/index.js
init_react();

export {
  validTextLength,
  shouldShowMarkdownSuggestions,
  InputCounter_default
};
//# sourceMappingURL=/build/_shared/chunk-RMDQN2RV.js.map
