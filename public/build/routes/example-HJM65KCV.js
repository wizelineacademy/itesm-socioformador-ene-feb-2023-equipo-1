import{c as e}from"/build/_shared/chunk-NSPDEEEW.js";import{f as x,h as s,i as h}from"/build/_shared/chunk-MWCUBRQI.js";s();s();var t=x(h());var m=e.div`
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
  visibility: ${r=>r.visible?"visible":"hidden"};
`,y=e.div`
  background-color: #213246;
  height: 40px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47.5px;
`,l=e.img`
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
`;function N(){let r=(0,t.useRef)(null),[n,b]=(0,t.useState)([{text:"Hola",user:!1},{text:"Hola, \xBFc\xF3mo est\xE1s?",user:!0},{text:"Estoy bien, gracias. \xBFY t\xFA?",user:!1},{text:"Bien.",user:!0},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",user:!1},{text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",user:!0},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",user:!1}]),c=o=>{o.preventDefault();let d=o.target.querySelector("input"),f=d.value;b([...n,{text:f,user:!0}]),d.value=""};(0,t.useEffect)(()=>{(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth"})})(),r.current&&r.current.scrollIntoView({behavior:"smooth"})},[n]);let[i,g]=(0,t.useState)(!1),a=()=>{g(!i)};return t.default.createElement("div",null,t.default.createElement("button",{type:"button",onClick:a}," Mostrar chatbot "),t.default.createElement(m,{visible:i},t.default.createElement(y,null,t.default.createElement(l,{style:{position:"absolute"}}),t.default.createElement(w,null," AnswerBot "),t.default.createElement(v,{onClick:a}," \u2715 ")),t.default.createElement(C,null,n.map(o=>o.user?t.default.createElement(u,{style:{justifyContent:"flex-end"}},t.default.createElement(p,{key:`message ${o.id}`,className:"user",ref:r}," ",o.text," "),t.default.createElement(k,{src:"/build/_assets/placeholder_user_img-ZWAQNLBE.png"})):t.default.createElement(u,{style:{justifyContent:"flex-start"}},t.default.createElement(l,null),t.default.createElement(p,{key:`message ${o.id}`,className:"bot",ref:r}," ",o.text," ")))),t.default.createElement(I,{onSubmit:c},t.default.createElement(B,{type:"text",placeholder:"Enter your question..."}),t.default.createElement(M,{type:"submit"}))))}var q=N;export{q as default};
