import{c as e}from"/build/_shared/chunk-ILVVFOSI.js";import{f as x,i as n,j as h}from"/build/_shared/chunk-XNUFYIVR.js";n();n();var t=x(h());var m=e.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 330px;
  height: 430px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background-color: #E1EAF4;
  display: flex;
  flex-direction: column;
  visibility: ${o=>o.visible?"visible":"hidden"};
`,y=e.div`
  background-color: #213246;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47.5px;
`,d=e.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 0px solid transparent;
  background-image: url('/build/_assets/logo_answerbot-6JNTGKON.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  left: 5%;
  margin: 5px 0px;
`,k=e.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 0px solid transparent;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  margin: 5px 0px;
`,w=e.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  padding: 0 85px;
`,v=e.button`
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  border: none;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.4);
  }

`,C=e.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`,u=e.div`
  display: flex;
  alignItems: center;
`,p=e.div`
  padding: 5px 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin: 5px 10px;
  max-width: 80%;
  word-break: break-word;

  &.user {
    background-color: #fff;
    border-top-left-radius: 10px;
    align-self: flex-end;
    color: #000;
    text-align: right;
  }

  &.bot {
    background-color: #213246;
    border-top-right-radius: 10px;
    color: #fff;
  }

`,I=e.form`
  display: flex;
  align-items: center;
  width: 330px;
  background-color: #fff;
`,B=e.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
`,M=e.button`
  width: 30px;
  height: 30px;
  border-radius: 25%;
  background-color: #fff;
  border: none;
  background-image: url('/build/_assets/post-icon.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 5px 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #F2F2F1;
  }
`;function N(){let o=(0,t.useRef)(null),[i,b]=(0,t.useState)([{text:"Hola",user:!1},{text:"Hola, \xBFc\xF3mo est\xE1s?",user:!0},{text:"Estoy bien, gracias. \xBFY t\xFA?",user:!1},{text:"Bien.",user:!0},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",user:!1},{text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",user:!0},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",user:!1}]),c=r=>{r.preventDefault();let s=r.target.querySelector("input"),f=s.value;b([...i,{text:f,user:!0}]),s.value=""};(0,t.useEffect)(()=>{(()=>{o.current&&o.current.scrollIntoView({behavior:"smooth"})})(),o.current&&o.current.scrollIntoView({behavior:"smooth"})},[i]);let[a,g]=(0,t.useState)(!1),l=()=>{g(!a),console.log(a)};return t.default.createElement("div",null,t.default.createElement("button",{onClick:l}," Mostrar chatbot "),t.default.createElement(m,{visible:a},t.default.createElement(y,null,t.default.createElement(d,{style:{position:"absolute"}}),t.default.createElement(w,null," AnswerBot "),t.default.createElement(v,{onClick:l}," \u2715 ")),t.default.createElement(C,null,i.map((r,s)=>r.user?t.default.createElement(u,{style:{justifyContent:"flex-end"}},t.default.createElement(p,{key:s,className:"user",ref:o}," ",r.text," "),t.default.createElement(k,{src:"/build/_assets/placeholder_user_img-ZWAQNLBE.png"})):t.default.createElement(u,{style:{justifyContent:"flex-start"}},t.default.createElement(d,null),t.default.createElement(p,{key:s,className:"bot",ref:o}," ",r.text," ")))),t.default.createElement(I,{onSubmit:c},t.default.createElement(B,{type:"text",placeholder:"Enter your question..."}),t.default.createElement(M,{type:"submit"}))))}var q=N;export{q as default};
