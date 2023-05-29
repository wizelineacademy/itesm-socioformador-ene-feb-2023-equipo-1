import{a as D}from"/build/_shared/chunk-DACSXK3H.js";import{a as J,c as v}from"/build/_shared/chunk-ILVVFOSI.js";import{f as E,i as Q,j as m}from"/build/_shared/chunk-XNUFYIVR.js";Q();var A=E(m()),s=E(D());Q();var e=v.div`
  border: 1px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;
  height: 32px;
  min-width: 32px;
  width: fit-content;
  ${h=>h.size==="small"&&J`
    height: 20px;
    min-width: 20px;
  `}
  ${h=>h.size==="big"&&J`
    height: 46px;
    min-width: 46px;
  `}
  ${h=>h.size==="extra big"&&J`
    min-height: 100px;
    min-width: 100px;
  `}
  ${h=>h.customSize&&J`
    min-height: ${h.customSize};
    min-width: ${h.customSize};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`,V=v.img`
  height: 100%;
  width: auto;
`;var j="/build/_assets/placeholder_user_img-ZWAQNLBE.png";function I({src:h,alt:U,customSize:P,size:S}){let[i,T]=(0,A.useState)(h);return A.default.createElement(e,{size:S,customSize:P},A.default.createElement(V,{alt:U,onError:()=>{i!==j&&T(j)},src:i}))}I.propTypes={src:s.default.string.isRequired,alt:s.default.string,size:s.default.oneOf(["small","medium","big","extra big"]),customSize:s.default.string};I.defaultProps={alt:"",size:"medium",customSize:null};var O=I;export{O as a};
