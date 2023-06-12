import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/utils/hooks/useClickOutside.js
init_react();
var import_react = __toESM(require_react());
var useClickOutside = (exceptionState = false) => {
  const wrapperRef = (0, import_react.useRef)(null);
  const [state, setState] = (0, import_react.useState)(false);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target) && state && !exceptionState) {
      setState(false);
    }
  };
  (0, import_react.useEffect)(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state, exceptionState]);
  return { state, setState, wrapperRef };
};
var useClickOutside_default = useClickOutside;

export {
  useClickOutside_default
};
//# sourceMappingURL=/build/_shared/chunk-MCBQ4NGY.js.map
