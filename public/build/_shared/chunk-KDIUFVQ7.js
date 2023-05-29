import{c as e}from"/build/_shared/chunk-ILVVFOSI.js";import{h as i}from"/build/_shared/chunk-GLVWW33M.js";import{f as g,i as l,j as p}from"/build/_shared/chunk-XNUFYIVR.js";l();var t=g(p());var s="/build/_assets/404-HJIPXGIH.svg";l();var r="/build/_assets/header-background-dots-pattern-4BTNNPHR.svg";var a=e.div`
    background-image: url(${r});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
`,o=e.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60rem;
    margin-top: 3.5rem;
    width: 100%;
`,n=e.div`
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
`,c=e.img`
    display: block;
    height: 12.5rem;
    margin-bottom: 5rem;
    max-width: 100%
`,d=e.h2`
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    margin: 0 0 5rem 0;
`,h=e(i)`
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
`;function y(){return t.default.createElement("div",null,t.default.createElement(a,null),t.default.createElement(o,null,t.default.createElement(n,null,t.default.createElement(c,{src:s,alt:"404"}),t.default.createElement(d,null,"Sorry! The page you were looking for doesn\u2019t exist."),t.default.createElement(h,{to:"/"},"Go back"))))}var H=y;export{H as a};
