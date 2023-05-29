import{a as $}from"/build/_shared/chunk-54MPZXUM.js";import{a as wt}from"/build/_shared/chunk-DACSXK3H.js";import{a as P,b as M,c as r}from"/build/_shared/chunk-ILVVFOSI.js";import{f as j,i as l,j as xt}from"/build/_shared/chunk-XNUFYIVR.js";l();l();var w="/build/_assets/logo_answerbot-6JNTGKON.png";var z="/build/_assets/post-icon-N5A7NK2B.png";var N="/build/_assets/like-6G77RJIC.png";var H="/build/_assets/dislike-ZNGYXD5Y.png";var L="/build/_assets/likeHover-5HAAADIM.png";var U="/build/_assets/dislikeHover-TLAFEHHT.png";var _=r.button`
    background-color: #213246;
    border: none;
    width: 8.4vw;
    height: 8.4vw;
    right: 0px;
    position: fixed;
    top: 70%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    visibility: ${s=>s.visible?"visible":"hidden"};
    transition: width 0.3s ease-in-out;

    & > .message {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        width: 19vw;

        & > .message {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease-in-out;
            transition-delay: 0.2s;
        }
        
        @media screen and (min-width: 1600px) {
            width: 14vw;
        }

        @media screen and (min-width: 2000px) {
            width: 13vw;
        }
    }

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (min-width: 1600px) {
        width: 6vw;
        height: 6vw;
    }
`,W=r.img`
    width: 5.6vw;
    height: 5.6vw;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    background-image: url(${w});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 1.5vw;
    transform: translateY(-50%);

    @media screen and (min-width: 1600px) {
        width: 4vw;
        height: 4vw;
        left: 1.25vw;
    }
`,F=r.div`
    color: #fff;
    font-size: 115%;
    font-weight: bold;
    position: absolute;
    right: 1.3vw;
    padding-left: 7.85vw;
    transform: translateY(-50%);

    @media screen and (max-width: 1240px) {
        font-size: 100%;
        right: 1.1vw;
    }

    @media screen and (max-width: 1100px) {
        font-size: 85%;
    }

    @media screen and (min-width: 1600px) {
        font-size: 90%;
        padding-left: 5vw;
    }

`,O=r.div`
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
    transition: visibility 0.3s ease-in-out;
    visibility: ${s=>s.visible?"visible":"hidden"};

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (max-height: 450px) {
        display: none;
    }
`,Z=r.div`
    background-color: #213246;
    height: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 47.5px;
`,y=r.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    background-image: url(${w});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    left: 5%;
    margin: 5px 0px;
`,V=r.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    margin: 5px 0px;
`,R=r.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    padding: 0 85px;

    @media screen and (min-width: 2975px) {
        padding: 0 75px;
    }
`,G=r.button`
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    border: none;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.4);
    }
`,J=r.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`,k=r.div`
    display: flex;
    alignItems: center;
`,It=M`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`,B=r.div`
    padding: 10px 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px 7.5px;
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

        ${s=>s.isWaiting&&P`
          position: relative;
          overflow: hidden;

          &:after {
            content: '...';
            animation: ${It} 1s infinite alternate;
            animation-delay: ${s.index*.2}s;
          }
        `}
    }
`,Q=r.form`
    display: flex;
    align-items: center;
    width: 330px;
    background-color: #fff;
`,K=r.input`
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    cursor: ${s=>s.enabled?"text":"not-allowed"};
`,Y=r.button`
    width: 30px;
    height: 30px;
    border-radius: 25%;
    background-color: #fff;
    border: none;
    background-image: url(${z});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 5px;
    opacity: ${s=>s.inputLength>13?1:.3};
    cursor: ${s=>s.inputLength>13?"pointer":"not-allowed"};
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${s=>s.inputLength>13?"#F2F2F1":"#fff"};
    }
`,X=r.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${N});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 2.5% 12.5%;
    padding: 0 5px;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${L});
    }
`,tt=r.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${H});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${U});
    }
`,et=r.span`
    padding: ${s=>s.padding==="na"?"0px 0px":"5px 31px"};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
`,ot=r.button`
    margin: 0 0 2.5% 10%;
    background-color: #fff;
    color: #213246;
    border: 1px solid #213246;
    padding: 8px 25px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #213246;
        color: #fff;
    }
`;var t=j(xt());l();var Tt=async s=>fetch("http://127.0.0.1:3000/api/pdf_conversation_gpt",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then(a=>a.json()).then(a=>({text:a.conversation[a.conversation.length-1].content,department:a.department})).catch(a=>{throw new Error(`There was an error making the API call: ${a.message}`)}),nt=Tt;var h=j(wt());function C({postAnswerBotQuestion:s,updateAnswerBotFeedback:a,updateAnswerBotPostID:st,departments:rt}){let D=`Instructions: Compose a comprehensive reply to the query using the search results given.
 If the search results mention multiple subjects
with the same name, create separate answers for each. Only include information found in the results and
don't add any additional information. Make sure the answer is correct and don't output false content.
If the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.
`,[i,v]=(0,t.useState)([{role:"system",content:D},{role:"system",content:"Hello! Ask me any question and I'll see how I can help you."}]),[b,it]=(0,t.useState)([{role:"system",content:D,depa:null},{role:"system",content:"Hello! Ask me any question and I'll see how I can help you.",depa:null}]),c=(0,t.useRef)(null),[at,I]=(0,t.useState)(""),[g,S]=(0,t.useState)(!1),dt=async e=>{e.preventDefault();let o=e.target.querySelector("input"),n=o.value;if(n.length>13){o.value="",I(o.value),S(!0),v([...i,{role:"user",content:n},{role:"system",content:""}]);let gt=[...i,{role:"user",content:n}].filter((m,ft)=>ft!==1),q=await nt(gt),x=q.text;v([...i,{role:"user",content:n},{role:"system",content:x}]),S(!1);let bt=q.department,d=rt.find(m=>m.name===bt);it([...b,{role:"user",content:n,depa:(d==null?void 0:d.department_id)||"wizeq"},{role:"system",content:x,depa:(d==null?void 0:d.department_id)||"wizeq"}]);let mt={question_by_user:n,answer_by_bot:x,assignedDepartment:(d==null?void 0:d.department_id)||"wizeq"};try{await s(mt)}catch(m){console.error(m)}}},lt=e=>{I(e.target.value)};(0,t.useEffect)(()=>{(()=>{c.current&&c.current.scrollIntoView({behavior:"smooth"})})(),c.current&&c.current.scrollIntoView({behavior:"smooth"})},[i]);let[f,pt]=(0,t.useState)(!1),T=()=>{pt(!f)},[p,u]=(0,t.useState)({}),ct=async e=>{u(n=>({...n,[e]:!0}));let o={question_by_user:i[e].content,answer_by_bot:i[e+1].content,answer_feedback:1,assignedDepartment:b[e].depa};try{await a(o)}catch(n){throw n}setTimeout(()=>{u(n=>({...n,[e]:"na"}))},2500)},ut=async e=>{u(n=>({...n,[e]:!0})),setTimeout(()=>{u(n=>({...n,[e]:"Would you like to share your question with the community?"}))},1500);let o={question_by_user:i[e].content,answer_by_bot:i[e+1].content,answer_feedback:-1,assignedDepartment:b[e].depa};try{await a(o)}catch(n){throw n}},ht=async e=>{let o={question:i[e].content,answer:i[e+1].content,assignedDepartment:b[e].depa};try{await st(o)}catch(n){throw n}u(n=>({...n,[e]:"Your question has been published successfully."})),setTimeout(()=>{u(n=>({...n,[e]:"na"}))},2500)},A=$();if(!!A)return t.default.createElement("div",null,t.default.createElement(_,{visible:!f,onClick:T},t.default.createElement(W,null),t.default.createElement(F,{className:"message"},"Hi, I'm AnswerBot!",t.default.createElement("br",null),"Ask me anything!")),t.default.createElement(O,{visible:f},t.default.createElement(Z,null,t.default.createElement(y,{style:{position:"absolute"}}),t.default.createElement(R,null," AnswerBot "),t.default.createElement(G,{onClick:T}," \u2715 ")),t.default.createElement(J,null,i.slice(1).map((e,o)=>e.role==="user"?t.default.createElement(k,{style:{justifyContent:"flex-end"}},t.default.createElement(B,{key:`message-${e.id}`,className:"user",ref:c},e.content),t.default.createElement(V,{src:A.profile_picture})):t.default.createElement("div",null,t.default.createElement(k,{style:{justifyContent:"flex-start"}},t.default.createElement(y,null),t.default.createElement(B,{key:`message-${e.id}`,className:"bot",ref:c,isWaiting:g&&o+2===i.length},e.content)),o!==0&&t.default.createElement("div",null,!p[o]&&t.default.createElement(t.default.Fragment,null,(o!==i.length-2||!g)&&t.default.createElement(t.default.Fragment,null,t.default.createElement(X,{key:`like-${o}`,onClick:()=>ct(o)}),t.default.createElement(tt,{key:`dislike-${o}`,onClick:()=>ut(o)}))),p[o]&&t.default.createElement(et,{padding:p[o]},p[o]===!0?"Thanks for the feedback!":p[o]==="na"?"":p[o]),p[o]==="Would you like to share your question with the community?"&&t.default.createElement(ot,{onClick:()=>ht(o)},"Post question"))))),t.default.createElement(Q,{onSubmit:dt},t.default.createElement(K,{type:"text",placeholder:"Enter your question...",onChange:lt,disabled:g,enabled:!g,title:"Type at least 14 characters"}),t.default.createElement(Y,{type:"submit",inputLength:at.length,disabled:g}))))}C.propTypes={postAnswerBotQuestion:h.default.func.isRequired,updateAnswerBotFeedback:h.default.func.isRequired,updateAnswerBotPostID:h.default.func.isRequired,departments:h.default.arrayOf(h.default.shape())};C.defaultProps={departments:[]};var At=C;l();export{At as a};
