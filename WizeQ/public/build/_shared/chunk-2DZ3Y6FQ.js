import {
  LSPIN_LARGE,
  LSPIN_MEDIUM,
  LSPIN_SMALL,
  require_prop_types
} from "/build/_shared/chunk-CP2RARZH.js";
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

// app/components/Loader.jsx
init_react();
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/styles/Loader.Styled.jsx
init_react();
var LoaderWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`;
var LoaderText = styled_components_browser_esm_default.span`
  font-family: "Nunito";
  font-size: 18px;
  margin: 15px 0;
  text-align: center;

  ${(props) => props.size === LSPIN_SMALL && Ce`
      font-size: 14px;
      margin: 10px 0;
    `}

  ${(props) => props.size === LSPIN_LARGE && Ce`
      font-size: 20px;
      margin: 20px 0;
    `}
`;
var rotate = Ue`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
var Spinner = styled_components_browser_esm_default.img`
  animation: ${rotate} 0.8s linear infinite;
  display: inline-block;
  margin: 20px 0;

  ${(props) => props.size === LSPIN_SMALL && Ce`
      width: 43px;
      height: 30px;
      margin: 15px 0;
    `}

  ${(props) => props.size === LSPIN_MEDIUM && Ce`
      width: 95px;
      height: 60px;
    `}

  ${(props) => props.size === LSPIN_LARGE && Ce`
      width: 122px;
      height: 82px;
    `}
`;

// app/components/Loader.jsx
function Loader({ src, size }) {
  return /* @__PURE__ */ import_react.default.createElement(LoaderWrapper, null, /* @__PURE__ */ import_react.default.createElement(Spinner, {
    src,
    alt: "Wizeline logo",
    size
  }), /* @__PURE__ */ import_react.default.createElement(LoaderText, {
    size
  }, "Loading..."));
}
Loader.propTypes = {
  src: import_prop_types.default.string.isRequired,
  size: import_prop_types.default.string.isRequired
};
var Loader_default = Loader;

export {
  Loader_default
};
//# sourceMappingURL=/build/_shared/chunk-2DZ3Y6FQ.js.map
