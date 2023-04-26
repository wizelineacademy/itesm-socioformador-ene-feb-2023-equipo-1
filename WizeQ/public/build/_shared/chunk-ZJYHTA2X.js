import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-UPCFJQSK.js";
import {
  Link
} from "/build/_shared/chunk-CA4B4QDL.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// app/routes/$.jsx
init_react();
var import_react2 = __toESM(require_react());

// app/images/404.svg
var __default = "/build/_assets/404-HJIPXGIH.svg";

// app/styles/NotFound.Styled.jsx
init_react();

// app/images/header-background-dots-pattern.svg
var header_background_dots_pattern_default = "/build/_assets/header-background-dots-pattern-M2TDWK6C.svg";

// app/styles/NotFound.Styled.jsx
var BackgroundDiv = styled_components_browser_esm_default.div`
    background-image: url(${header_background_dots_pattern_default});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
`;
var MainDiv = styled_components_browser_esm_default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60rem;
    margin-top: 3.5rem;
    width: 100%;
`;
var Container = styled_components_browser_esm_default.div`
    align-items: center;
    margin: 0 auto;
    width: 70.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 704px;
    }

    @media (max-width: 767px) {
        width: 288px;
    }
`;
var Img = styled_components_browser_esm_default.img`
    display: block;
    height: 12.5rem;
    margin-bottom: 5rem;
    max-width: 100%
`;
var Title = styled_components_browser_esm_default.h2`
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    margin: 0 0 5rem 0;
`;
var SLink = styled_components_browser_esm_default(Link)`
    color: #fff;
    background-color: var(--color-secondary);
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 1.5rem 4.1rem;
    text-decoration: none;

    &:hover {
        color: #fff;
        background-color: var(--color-secondary-hover);
        cursor: pointer;
        text-decoration: none;
    }

    &:active {
        background-color: var(--color-secondary-active);
    }
`;

// app/routes/$.jsx
function NotFound() {
  return /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement(BackgroundDiv, null), /* @__PURE__ */ import_react2.default.createElement(MainDiv, null, /* @__PURE__ */ import_react2.default.createElement(Container, null, /* @__PURE__ */ import_react2.default.createElement(Img, {
    src: __default,
    alt: "404"
  }), /* @__PURE__ */ import_react2.default.createElement(Title, null, "Sorry! The page you were looking for doesn\u2019t exist."), /* @__PURE__ */ import_react2.default.createElement(SLink, {
    to: "/"
  }, "Go back"))));
}
var __default2 = NotFound;

export {
  __default2 as __default
};
//# sourceMappingURL=/build/_shared/chunk-ZJYHTA2X.js.map
