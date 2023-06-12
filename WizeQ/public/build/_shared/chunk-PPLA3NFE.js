import{a as c,ga as n,ha as x,ia as p}from"/build/_shared/chunk-X6KB6YXJ.js";import{a as t,b as m,c as r}from"/build/_shared/chunk-ILVVFOSI.js";import{f as d,i,j as L}from"/build/_shared/chunk-XNUFYIVR.js";i();var o=d(L()),s=d(c());i();var l=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`,f=r.span`
  font-family: "Nunito";
  font-size: 18px;
  margin: 15px 0;
  text-align: center;

  ${e=>e.size===n&&t`
      font-size: 14px;
      margin: 10px 0;
    `}

  ${e=>e.size===p&&t`
      font-size: 20px;
      margin: 20px 0;
    `}
`,S=m`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,g=r.img`
  animation: ${S} 0.8s linear infinite;
  display: inline-block;
  margin: 20px 0;

  ${e=>e.size===n&&t`
      width: 43px;
      height: 30px;
      margin: 15px 0;
    `}

  ${e=>e.size===x&&t`
      width: 95px;
      height: 60px;
    `}

  ${e=>e.size===p&&t`
      width: 122px;
      height: 82px;
    `}
`;function y({src:e,size:a}){return o.default.createElement(l,null,o.default.createElement(g,{src:e,alt:"Wizeline logo",size:a}),o.default.createElement(f,{size:a},"Loading..."))}y.propTypes={src:s.default.string.isRequired,size:s.default.string.isRequired};var T=y;export{T as a};
