import {
  CLOSE_BUTTON,
  DANGER_BUTTON,
  DISABLED_BUTTON,
  ICON_BUTTON,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  TEXT_BUTTON,
  require_prop_types
} from "/build/_shared/chunk-CP2RARZH.js";
import {
  Ce,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// node_modules/react-icons/md/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/md/index.esm.js
function MdErrorOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" } }] })(props);
}
function MdArrowBackIosNew(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z" } }] })(props);
}
function MdClose(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }] })(props);
}
function MdOutlineKeyboardArrowDown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" } }, { "tag": "path", "attr": { "d": "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" } }] })(props);
}

// app/components/Atoms/Button/Button.jsx
init_react();
var import_react3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/components/Atoms/Button/Button.Styled.jsx
init_react();
var MainButton = styled_components_browser_esm_default.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  ${(props) => props.category === PRIMARY_BUTTON && Ce`
      background-color: var(--color-secondary);
      border: 1px solid transparent;
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: var(--color-secondary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }

      &.login-button {
        font-size: 18px;
        height: 44px;
        letter-spacing: 0.3px;
        margin: 0;
        padding: 0 32px;
      }

      &.large-button {
        line-height: inherit;
        margin: 0;
        padding: 12px 32px;
        width: 100%;
      }

      &.add-comment-button {
        display: none;
        @media (max-width: 500px) {
            display: inline-block;
        }
      }

      &.writing-mobile {
        @media (max-width: 768px) {
          display: none;
        }
      }
    `}

  ${(props) => props.category === SECONDARY_BUTTON && Ce`
      background-color: #fff;
      border: 1px solid var(--color-secondary);
      color: var(--color-secondary);
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: #f8f9fa;
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }

      &.edit-comment-button {
        margin: 0 0 0 20px;
        height: 34px;
      }
    `}

  ${(props) => props.category === DISABLED_BUTTON && Ce`
      background-color: var(--color-secondary);
      border: 1px solid transparent;
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
      &:hover:enabled {
        background-color: var(--color-secondary-hover);
        border: 1px solid var(--color-secondary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
        opacity: 1;
      }

      &.edit-comment-button {
        margin: 0 0 0 20px;
        height: 34px;
      }
    `}

  ${(props) => props.category === DANGER_BUTTON && Ce`
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: var(--color-primary-hover);
        border: 1px solid var(--color-primary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }
    `}    

  ${(props) => props.category === TEXT_BUTTON && Ce`
      background-color: transparent;
      color: var(--color-secondary);
      letter-spacing: 0.6px;

      &.admin-button {
        font-size: 12px;
        margin-right: 12px;
        padding: 5px;
      }

      &.preview-button {
        font-family: "Nunito", sans-serif;
        height: 32px;
        padding: 1px 6px;
      }

      &.undo-button {
        color: #fff;
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        margin: 3px 0;
        float: right;
        right: 48px;
        text-decoration: underline;
      }
      
      &.send-button {
        color: #fff;
        font-size: 14px;
        font-family: "NunitoSans Semibold", sans-serif;
        margin: 3px 0;
        position: relative;
        left: 85px;
        bottom: 15px;
        text-decoration: underline;
      }

      &.show-filters-button {
        display: none;
        color: var(--color-dark-50);
        padding: 6px 10px;
        text-align: left;
        &:hover {
          background-color: var(--color-secondary-light);
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          display: block;
        }
        @media (max-width: 767px) {
          display: block;
        }
      }
    `}

  ${(props) => props.category === ICON_BUTTON && Ce`
      display: flex;

      &.clear-button {
        background-color: var(--color-dark-25);
        border-radius: 50%;
        position: absolute;
        right: 6px;
        top: auto;
        &:hover {
          background-color: var(--color-dark-50);
        }
      }
    `} 
`;
var CloseButton = styled_components_browser_esm_default(MdClose)`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 28px;
  color: #555555;
  cursor: pointer;

  &:hover {
    color: darkgray;
  }

  &.question-modal-button {
    z-index: 1000;
    top: 3px;
    right: 25px;
  }
`;

// app/components/Atoms/Button/Button.jsx
function Button({
  id,
  type,
  className,
  title,
  onClick,
  category,
  value,
  form,
  disabled,
  children
}) {
  const RootButton = category === CLOSE_BUTTON ? CloseButton : MainButton;
  return /* @__PURE__ */ import_react3.default.createElement(RootButton, {
    id,
    type,
    className,
    title,
    onClick,
    category,
    value,
    form,
    disabled
  }, children);
}
Button.propTypes = {
  id: import_prop_types.default.string,
  type: import_prop_types.default.string,
  className: import_prop_types.default.string,
  title: import_prop_types.default.string,
  onClick: import_prop_types.default.func,
  category: import_prop_types.default.string.isRequired,
  value: import_prop_types.default.string,
  form: import_prop_types.default.string,
  disabled: import_prop_types.default.bool,
  children: import_prop_types.default.string
};
Button.defaultProps = {
  id: "",
  type: "button",
  className: "",
  title: "",
  onClick: null,
  value: "",
  form: null,
  disabled: false,
  children: ""
};
var Button_default = Button;

// app/components/Atoms/Button/index.js
init_react();

export {
  GenIcon,
  MdErrorOutline,
  MdArrowBackIosNew,
  MdClose,
  MdOutlineKeyboardArrowDown,
  MainButton,
  Button_default
};
//# sourceMappingURL=/build/_shared/chunk-HW6BGKIM.js.map
