import{Aa as L,Ba as B,Ca as w,Da as C,Ea as O,Fa as S,Ga as A,a as R}from"/build/_shared/chunk-GHFYQP6C.js";import{a as i,c as V}from"/build/_shared/chunk-NSPDEEEW.js";import{f as M,h as r,i as u}from"/build/_shared/chunk-MWCUBRQI.js";r();r();r();r();var o=M(u());r();var s=M(u()),f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=s.default.createContext&&s.default.createContext(f);var n=function(){return n=Object.assign||function(t){for(var h,a=1,v=arguments.length;a<v;a++){h=arguments[a];for(var c in h)Object.prototype.hasOwnProperty.call(h,c)&&(t[c]=h[c])}return t},n.apply(this,arguments)},T=function(t,h){var a={};for(var v in t)Object.prototype.hasOwnProperty.call(t,v)&&h.indexOf(v)<0&&(a[v]=t[v]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,v=Object.getOwnPropertySymbols(t);c<v.length;c++)h.indexOf(v[c])<0&&Object.prototype.propertyIsEnumerable.call(t,v[c])&&(a[v[c]]=t[v[c]]);return a};function y(t){return t&&t.map(function(h,a){return o.default.createElement(h.tag,n({key:a},h.attr),y(h.child))})}function d(t){return function(h){return o.default.createElement(N,n({attr:n({},t.attr)},h),y(t.child))}}function N(t){var h=function(a){var v=t.attr,c=t.size,z=t.title,H=T(t,["attr","size","title"]),g=c||a.size||"1em",e;return a.className&&(e=a.className),t.className&&(e=(e?e+" ":"")+t.className),o.default.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,v,H,{className:e,style:n(n({color:t.color||a.color},a.style),t.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),z&&o.default.createElement("title",null,z),t.children)};return x!==void 0?o.default.createElement(x.Consumer,null,function(a){return h(a)}):h(f)}function X(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}}]})(t)}function $(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"}}]})(t)}function b(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}function J(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(t)}r();var k=M(u()),l=M(R());r();var P=V.button`
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

  ${t=>t.category===L&&i`
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

  ${t=>t.category===B&&i`
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

  ${t=>t.category===w&&i`
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

  ${t=>t.category===C&&i`
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

  ${t=>t.category===O&&i`
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

  ${t=>t.category===A&&i`
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
`,F=V(b)`
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
`;function m({id:t,type:h,className:a,title:v,onClick:c,category:z,value:H,form:g,disabled:e,children:D}){return k.default.createElement(z===S?F:P,{id:t,type:h,className:a,title:v,onClick:c,category:z,value:H,form:g,disabled:e},D)}m.propTypes={id:l.default.string,type:l.default.string,className:l.default.string,title:l.default.string,onClick:l.default.func,category:l.default.string.isRequired,value:l.default.string,form:l.default.string,disabled:l.default.bool,children:l.default.string};m.defaultProps={id:"",type:"button",className:"",title:"",onClick:null,value:"",form:null,disabled:!1,children:""};var E=m;r();export{d as a,X as b,$ as c,b as d,J as e,P as f,E as g};
