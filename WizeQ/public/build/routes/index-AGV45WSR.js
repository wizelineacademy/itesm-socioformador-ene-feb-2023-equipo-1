import{a as yt,b as wt}from"/build/_shared/chunk-ICQWUE5U.js";import{A as ct,B as ft,C as xt,a as ot,b as rt,c as nt,d as it,l as st,r as lt,t as X,u as dt,w as at,x as pt,y as ut,z as mt}from"/build/_shared/chunk-63VCCG7L.js";import{w as et}from"/build/_shared/chunk-646QXAQT.js";import{b as gt}from"/build/_shared/chunk-LDTIR3NU.js";import{f as tt}from"/build/_shared/chunk-QS6ZHKAJ.js";import{a as ht}from"/build/_shared/chunk-LPSJP43J.js";import"/build/_shared/chunk-73HWT7H2.js";import{d as Pe,g as Ve}from"/build/_shared/chunk-WGEX3V3U.js";import{g as K}from"/build/_shared/chunk-OHJOTUO5.js";import"/build/_shared/chunk-7NP4ACH5.js";import{a as Y}from"/build/_shared/chunk-54MPZXUM.js";import"/build/_shared/chunk-FMW47GBS.js";import{Ba as Xe,Ea as Re,a as W,g as le,h as We,i as Ue,j as de,k as ze,l as U,m as $e,n as ae,o as je,p as G,q as He,r as pe,s as Ge,sa as Ye,t as J,u as Ze,v as Je,w as ue,x as Ke,y as me}from"/build/_shared/chunk-X6KB6YXJ.js";import{a as uo}from"/build/_shared/chunk-4BHLMLDL.js";import{a as se,c as r}from"/build/_shared/chunk-ILVVFOSI.js";import{b as Ie,e as V,g as po,h as Be,m as Oe,o as H,q as De,r as Me}from"/build/_shared/chunk-GLVWW33M.js";import{f as g,i as o,j as N}from"/build/_shared/chunk-XNUFYIVR.js";o();o();var k=g(N()),eo=g(uo());o();var bt=r.div`
background-color: #f4f7f9;
`;o();o();var d=g(N());var te=g(W());o();var St=r.div`
  display: flex;
  background-color: #f4f7f9;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  padding-top: 40px;
  @media (max-width: 1025px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`,kt=r.div`
  flex: 1;
`,Ct=r.div`
  flex: 2;
  display: flex;
  justify-content: center;
`,vt=r.div`
  flex: 1;
  display: flex;
  @media (max-width: 1025px) {
    width: 100%;
    display: contents;
    position: sticky;
  }
  @media (min-width: 1440px) {
    overflow: auto;
  }
`,Ft=r.div`
  max-width: 425px;
  
  @media (max-width: 1025px) {
    display: none;
  }
`,At=r.div`
  max-width: 650px;
  width: 100%;
`,Tt=r.div`
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`,Lt=r.div`
  align-items: center;
  display: flex;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  letter-spacing: 0.6px;
`,_t=r.div`
  margin: 5px 0 10px;
  padding-left: 0;
`,Et=r.div`
  border-radius: 3px;
  margin: 0 auto;
  max-width: 592px;
  width: 94%;
  padding: 15px 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`,Nt=r.div`
  width: 100%;
  max-width: 300px;
  @media (max-width: 1024px) {
    max-width: none;
    padding: 0 0 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: #f4f7f9;
    border-radius: 18px;
  }
  @media (max-width: 767px) {
    padding: 0 0 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`,Qt=r(Be)`
  align-items: center;
  background: var(--color-secondary);
  border: solid 1px transparent;
  border-radius: 3px;
  color: #fff;
  display: flex;
  height: 33px;
  justify-content: center;
  padding: 20px 15px;
  text-decoration: none;
  width: 120px;
  &:disabled {
    background: #d8d8d8;
  }
  &:hover {
    background-color: white;
    border: solid 1px var(--color-secondary);
    color: var(--color-secondary);
    text-decoration: none;
  }
`;o();o();var T=g(N()),s=g(W());po();var qt="/build/_assets/ic_comment_non-selected-KYYD5WEF.svg";function ce(t){let{question:e,currentUserEmail:p,question:{Answers:m},onVoteClick:b,searchTerm:x,processingFormSubmission:l}=t,v={Answers:m,isAdmin:!1,currentUserEmail:p,onAnswerClick:()=>{},openDeleteAnswerModal:()=>{},question:e,searchTerm:x,isPreview:!0,isFromList:!0,questionId:e.question_id,isAnswer:!0},h=e.Answers.length>0,Q=Ie(),q=()=>{let y=e.hasLike?rt:ot,f=e.hasDislike?it:nt;return T.default.createElement(xt,{isAdmin:!1,hasAnswer:h},T.default.createElement(X,{id:`like-button-${e.question_id}`,selected:e.hasLike,icon:y,count:e.numLikes,onClick:()=>b(!0),processingFormSubmission:l,isDisabled:e.hasDislike}),T.default.createElement(X,{id:`like-button-${e.question_id}`,selected:e.hasDislike,icon:f,count:e.numDisklike,onClick:()=>b(!1),processingFormSubmission:l,isDisabled:e.hasLike}),T.default.createElement(X,{id:`comments-button-${e.question_id}`,icon:qt,count:e.numComments,onClick:()=>Q(`/questions/${e.question_id}`)}))},F=()=>{if(!e.hasCommentApproved&&!e.hasCommunityAnswer||e.Answers.length>0)return null;let y={};if(e.hasCommentApproved)y=e.Comments.find(f=>f.approvedBy!==null);else if(e.hasCommunityAnswer){let[f]=dt(e.Comments);y=e.Comments.find($=>$.id===f)}if(y)return T.default.createElement(st,{answer_text:y.comment,user:y.User,answered_at:y.createdAt,searchTerm:v.searchTerm,isPreview:v.isPreview,isFromList:v.isFromList,questionId:e.question_id,isAnswer:e.Answers.length>0,isCommunityAnswer:e.hasCommunityAnswer,isCommentApproved:e.hasCommentApproved,approver:y.Approver})};return T.default.createElement(ut,null,T.default.createElement(mt,null,T.default.createElement(ct,null,T.default.createElement(pt,{question:e,isQuestionModalOpen:!1,hasAnswer:h}),T.default.createElement(ft,{hasAnswer:h,isQuestionModalOpen:!1},q()))),lt(v),F())}ce.propTypes={question:s.default.shape({question_id:s.default.number.isRequired,question:s.default.string.isRequired,user_hash:s.default.string,can_edit:s.default.bool,created_by_user:s.default.shape({email:s.default.string,employee_id:s.default.number,full_name:s.default.string,is_admin:s.default.bool,job_title:s.default.string,profile_picture:s.default.string}),Answers:s.default.arrayOf(s.default.shape()),createdAt:s.default.string.isRequired,location:s.default.string.isRequired,numComments:s.default.number.isRequired,hasVoted:s.default.bool.isRequired,hasCommentApproved:s.default.bool.isRequired,hasCommunityAnswer:s.default.bool.isRequired,Comments:s.default.arrayOf(s.default.shape()),numLikes:s.default.number.isRequired,numDisklike:s.default.number.isRequired,hasLike:s.default.bool.isRequired,hasDislike:s.default.bool.isRequired}).isRequired,onVoteClick:s.default.func.isRequired,currentUserEmail:s.default.string,searchTerm:s.default.string,processingFormSubmission:s.default.bool};ce.defaultProps={currentUserEmail:"",searchTerm:"",processingFormSubmission:!1};var fe=ce;o();o();var I=g(N());o();var It=r.button`
  all: unset;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 4px 0 0 4px;
  bottom: 45px;
  box-shadow: 0 2px 4px 0 #c7c6c6;
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: ${t=>t.display===!0?.9:0};
  padding-left: 11px;
  position: fixed;
  right: 0px;
  transition: opacity 200ms;
  width: 124px;
  transition: opacity 200ms, visibility 0s 200ms;
  &:hover {
    background-color: var(--color-secondary-hover);
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-secondary-active);
  }
  svg {
    align-self: center;
  }
`,Bt=r.span`
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.58px;
  padding-left: 11px;
  padding-right: 24px;
`;o();o();var xe=g(N());function ho(t){return xe.default.createElement("svg",{color:"white",fill:"currentColor",fillRule:"nonzero",height:12,stroke:"currentColor",strokeWidth:1,version:"1.1",viewBox:"0 0 23 27",width:10,xmlns:"http://www.w3.org/2000/svg",...t},xe.default.createElement("path",{transform:"translate(-18.000000, -17.000000)",d:"M30.6301904,20.6966946 C30.6304384,20.705609 30.6305632,20.7145536 30.6305632,20.7235269 L30.6305632,41.9301705 C30.6305632,42.462539 30.1912987,42.8941089 29.6494386,42.8941089 C29.1075784,42.8941089 28.6683139,42.462539 28.6683139,41.9301705 L28.6683139,20.7235269 C28.6683139,20.6823753 28.6709386,20.6418259 28.6760325,20.6020316 L20.2797113,28.5838228 C19.9872058,28.8618871 19.5118845,28.8618871 19.2193791,28.5838228 C18.9268736,28.3057585 18.9268736,27.853904 19.2193791,27.5758396 L29.0731557,18.2085482 C29.3656611,17.9304839 29.8409825,17.9304839 30.1334879,18.2085482 L39.9872645,27.5758396 C40.1335172,27.7148718 40.2066436,27.888662 40.2066436,28.0798312 C40.2066436,28.2710004 40.1335172,28.4447906 39.9872645,28.5838228 C39.6947591,28.8618871 39.2194378,28.8618871 38.9269323,28.5838228 L30.6301904,20.6966946 Z M29.6444293,19.7596009 L29.6033218,19.7205229 L29.5578693,19.7637314 C29.5863864,19.7611383 29.6152573,19.7597442 29.6444293,19.7596009 Z"}))}var he=ho;function go(){let[t,e]=(0,I.useState)(!1);return(0,I.useEffect)(()=>{window.addEventListener("scroll",()=>{window.scrollY>500?e(!0):e(!1)})},[]),I.default.createElement(It,{id:"go-to-top-button",display:t,onClick:()=>{window.scrollTo({top:0,behavior:"auto"})}},I.default.createElement(he,null),I.default.createElement(Bt,null,Ye))}var ge=go;o();o();var B=g(N()),ye=g(W());function we({onFetch:t,children:e}){let p=(0,B.useRef)(),m=null,b=500,x=([v])=>{v.isIntersecting&&t()},l=(0,B.useRef)();return(0,B.useEffect)(()=>(l.current=new IntersectionObserver(x,{root:m,rootMargin:`${b}px`,threshold:0}),p&&p.current&&l.current.observe(p.current),()=>{p&&p.current&&l.current.unobserve(p.current)}),[e.props.children.length]),B.default.createElement("div",null,e,B.default.createElement("div",{ref:p}))}we.propTypes={onFetch:ye.default.func.isRequired,children:ye.default.node};we.defaultProps={children:null};var be=we;o();o();var i=g(N()),ve=g(W());var Ot="/build/_assets/ic_filter-UC4LYVWR.svg";o();var Dt=r.div`
  background-color: transparent;
  margin: 0 11px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 auto;
    max-width: 592px;
    padding: 20px 0 5px;
    position: relative;
  }
  @media (max-width: 767px) {
    margin: 0 auto;
    max-width: 592px;
    padding: 20px 0 5px;
    position: relative;
  }
`,Mt=r.img`
  height: 20px;
  margin-right: 10px;
  width: 17px;
`,Pt=r.hr`
  border-top: 1px solid #e6e6e6;
  margin: 16px 0 24px;
  display: ${t=>t.visibility};
  ${t=>t.secondary&&se`
    margin: 0;
  `}
  
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 767px){
   display: block;
  }
`,Vt=r.div`
  flex-grow: 1;
  transition: box-shadow 300ms;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
      display: ${t=>t.hideComponent};
      margin: 0 auto;
      padding: 10px 0;
      width: 248px;
  }
  @media (max-width: 767px) {
      display: ${t=>t.hideComponent};
      margin: 0 auto;
      padding: 10px 0;
      width: 248px;
  }
  #sort-toggle.dropdown-toggle.btn {
    background-color: transparent;
    border: none;
    font-size: 14px;
    height: 56px;
    width: 100%;
  }
`,Wt=r.div`
  display: unset;
`,Se=r.div``,ke=r.div`
  font-size: 12px;
  margin: 8px 0 4px;
  width: auto;
  button {
    color: var(--color-secondary);
    float: right;
    font-size: 12px;
    text-decoration: none;
    background: none!important;
    border: none;
    padding: 0!important;
  }
`,z=r.div`
  border-color: transparent;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  .sort-toggle.dropdown {
    border-radius: 10px;
    margin: 8px 0;
    width: 100%;
  }
  .caret {
    color: var(--color-secondary);
    font-size: 50px;
    position: absolute;
    right: 24px;
    top: 48%;
  }
  .sort-toggle.dropdown.open .caret {
    -moz-transform: scale(1, -1);
    -ms-transform: scale(1, -1);
    -o-transform: scale(1, -1);
    -webkit-transform: scale(1, -1);
    transform: scale(1, -1);
  }
  .dropdown:hover {
    background-color: transparent;
  }
  .dropdown .menu-dropdown {
    box-shadow: none;
    margin: 0;
    min-width: 100%;
    width: 100%;
  }
  .dropdown.open .menu-dropdown {
    border: none;
    border-radius: 10px;
    padding: 5px 0 8.9px;
    position: unset;
  }
  ${t=>t.departments&&se`
      .dropdown-menu li:nth-child(2) a label {
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 12px;
      }
    `}
`;o();o();var E=g(N()),w=g(W());o();var R=r(Pe)`
  .dropdown-menu {
    top: 98%;
    background-color: transparent;
  }
  .dropdown-menu > .sub-menu-item > a {
    line-height: 20px;
    padding: 5px;
  }
  .dropdown-menu a {
    text-decoration: none;
    border-radius 10px;
    &:hover {
      background-color: #F1F3F6;
    }
  }
  .dropdown-menu li {
    height: auto;
  }
  .custom-dropdown input {
    display: none;
  }
  .custom-dropdown input:checked ~ .custom-dropdown--span {
    background-color: white;
  }
  .custom-dropdown--span::after {
    content: "";
    display: none;
    position: absolute;
  }
  .custom-dropdown input:checked ~ .custom-dropdown--span::after {
    display: block;
  }
  .custom-dropdown .custom-dropdown--span::after {
    background-color: var(--color-secondary);
    border-radius: 50%;
    height: 12px;
    left: 1px;
    top: 1px;
    width: 12px;
  }
  .custom-dropdown-selected {
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 600;
    margin: 0 5px;
  }
  .toggle {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .toogle > .caret {
    position: absolute;
  }
  .dropdown-text {
    color: var(--color-secondary);
    float: left;
    font-size: 12px;
    padding-left: 5px;
  }
  .dropdown-text.first {
    font-size: 14px;
    font-weight: unset;
  }
`,rr=r.p`
  color: var(--color-secondary);
  float: left;
  font-size: 12px;
  padding-left: 5px;
  .first {
    font-size: 14px;
    font-weight: unset;
  }
`,Ut=r(Ve)`
  .custom-dropdown {
    cursor: pointer;
    display: block;
    font-size: 14px;
    margin: 0;
    padding: 6px 0 6px 25px;
    position: relative;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .custom-dropdown--span {
    background-color: #fff;
    border: 1px solid var(--color-secondary);
    border-radius: 50%;
    height: 16px;
    left: 0;
    margin-top: 4px;
    position: absolute;
    top: 10%;
    width: 16px;
    &:after {
      content: "";
    display: none;
    position: absolute;
    }
  }
`;function Ce(t){let{accessValueName:e,selectedValue:p}=t,m=x=>x.map(l=>E.default.createElement(Ut,{eventKey:l,key:l[e]},E.default.createElement("label",{className:"custom-dropdown",htmlFor:l[e]},l.name,E.default.createElement("input",{type:"radio",className:"custom-dropdown--radio",checked:p===l[e],readOnly:!0,id:l[e]}),E.default.createElement("span",{className:"custom-dropdown--span"})))),b=()=>t.showSelected&&E.default.createElement("p",{className:"custom-dropdown-selected"},t.text);return E.default.createElement(R,{className:t.dropdownClass,onSelect:t.onSelectFunc,id:t.dropdownClass,disabled:t.disabled},E.default.createElement(R.Toggle,{onClick:t.onClickFunc,className:`toggle ${t.isHighlighted?"highlighted":""}`},E.default.createElement("p",{className:`dropdown-text ${t.showSelected?"":"first"}`},t.label),b()),E.default.createElement(R.Menu,{className:t.menuClass},t.elements.length>0&&m(t.elements)))}Ce.propTypes={elements:w.default.arrayOf().isRequired,text:w.default.string,label:w.default.string.isRequired,dropdownClass:w.default.string,menuClass:w.default.string,onClickFunc:w.default.func,onSelectFunc:w.default.func,selectedValue:w.default.oneOfType([w.default.number,w.default.string]),isHighlighted:w.default.bool,showSelected:w.default.bool,accessValueName:w.default.string.isRequired,disabled:w.default.bool};Ce.defaultProps={text:"",dropdownClass:"sort-toggle",menuClass:"menu-dropdown",onClickFunc:null,onSelectFunc:null,selectedValue:null,isHighlighted:!1,showSelected:!0,disabled:!1};var M=Ce;function zt(t){let{modifyQuery:e,clearFilters:p}=t,{departments:m,locations:b}=H(),[x]=V(),l=()=>{let n=x.get("status");if(n){let S=ae.find(_=>_.value===n);if(S)return S}return G},v=()=>{let n=x.get("order");if(n){let S=le.find(_=>_.value===n);if(S)return S}return We},h=()=>{let n=x.get("dateRange");if(n){let S=de.find(_=>_.value===n);if(S)return S}return U},Q=()=>{let n=parseInt(x.get("department"),10);if(n!==void 0){let S=pe.find(ie=>ie.department_id===n);if(S)return S;let _=m.find(ie=>ie.department_id===n);if(_)return _}return U},q=()=>{let n=x.get("location");if(n){let S=b.find(_=>_.code===n);if(S)return S}return me},[F,y]=(0,i.useState)(v()),[f,$]=(0,i.useState)(h()),[O,oe]=(0,i.useState)(l()),[D,re]=(0,i.useState)(Q()),[A,_e]=(0,i.useState)(q()),[u,c]=(0,i.useState)(!1),[P,L]=(0,i.useState)(!1),[Z,j]=(0,i.useState)("Show filters");(0,i.useEffect)(()=>{A!=null&&(f.name===U.name&&D.name===J.name&&O.name===G.name&&A.code===ue?c(!1):c(!0))},[f,O,D,A]);let ne=n=>{y(n),e("order",n.value)},Ee=n=>{$(n),n.value==="all"?e("dateRange",void 0):e("dateRange",n.value)},Ne=n=>{oe(n),n.value==="all"?e("status",void 0):e("status",n.value)},Qe=n=>{re(n),n.department_id===-1?e("department",void 0):e("department",n.department_id)},qe=n=>{_e(n),e("location",n.code)},oo=()=>{Ee(U,!1),Ne(G,!1),Qe(J,!1),qe(me,!1),p(["location","department","status","dateRange","location"])},ro=()=>{P?(j("Show filters"),L(!1)):(j("Hide filters"),L(!0))},no=()=>{let n={};return A&&(n={text:A.name,selectedValue:A.code,isHihlighted:A.code!==ue}),{...n,elements:b,label:Je,onSelectFunc:qe,accessValueName:Ke,disabled:A===void 0}},io={elements:le,label:F.name,onSelectFunc:ne,selectedValue:F.value,showSelected:!1,accessValueName:Ue},so={elements:de,text:f.name,label:ze,onSelectFunc:Ee,selectedValue:f.value,isHihlighted:f!==U,accessValueName:$e},lo={elements:[...pe,...m],text:D.name,label:Ge,onSelectFunc:Qe,selectedValue:D.department_id,isHihlighted:D!==J,accessValueName:Ze},ao={elements:ae,text:O.name,label:je,onSelectFunc:Ne,selectedValue:O.value,isHihlighted:O!==G,accessValueName:He};return i.default.createElement(Dt,null,i.default.createElement(K,{type:"button",category:Re,className:"show-filters-button",onClick:ro},i.default.createElement(Mt,{src:Ot,alt:"Icon"}),i.default.createElement("span",null,Z)),i.default.createElement(Pt,{secondary:!0,visibility:"none"}),i.default.createElement(Vt,{hideComponent:P?"block":"none"},i.default.createElement(Wt,null,i.default.createElement(Se,null,i.default.createElement(ke,null,"Order by:"),i.default.createElement(z,null,i.default.createElement(M,{...io}))),i.default.createElement(Se,null,i.default.createElement(ke,null,"Filter by:"," ",u&&i.default.createElement("button",{type:"button",onClick:oo},"Clear All Filters")),i.default.createElement(z,null,i.default.createElement(M,{...so})),i.default.createElement(z,null,i.default.createElement(M,{...ao})),i.default.createElement(z,{departments:!0},i.default.createElement(M,{...lo})),i.default.createElement(z,null,i.default.createElement(M,{...no()}))))))}zt.propTypes={clearFilters:ve.default.func.isRequired,modifyQuery:ve.default.func.isRequired};var Fe=zt;o();var a=g(N()),Ae=g(W());o();var $t=r.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1050;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`,jt=r.div`
    position: relative;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    display: block;
    max-height: calc(100vh - 150px);
    overflow-y: auto;
    padding: 24px 24px;
    max-width: 70vw;

    @media (max-width: 768px) {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
    }
`,Ht=r.div`
    display: block;
    font-size: 15px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    text-align: justify;
`,Gt=r.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${t=>t.variant==="logout"?`border-top: 1px solid #e5e5e5;
    padding: 15px;
    text-align: right;`:"border-bottom: none;"}
`,Zt=r.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${t=>t.variant==="logout"?`border-bottom: 1px solid #e5e5e5;
        padding: 15px;`:"border-bottom: none;"}
`,Jt=r.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`,Kt=r.div`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`,ee=r.span`
    color: ${t=>t.color};
    font-weight: 600;
    font-size: 16px;
    text-decoration:  ${t=>t.color} underline overline;
`,Yt=r.div`
    margin: 20px 0 20px 20px;
`;function Xt({show:t,onClose:e}){let p=Y(),m=b=>a.default.createElement(tt,{color:b,size:"7px",style:{marginTop:"3px",marginRight:"10px"}});return t?a.default.createElement("div",{onClick:e},a.default.createElement($t,{onClick:e},a.default.createElement(jt,{show:!0,hide:e},a.default.createElement(Zt,null,a.default.createElement(Jt,null,"Hello"," ",p.full_name," ","!"),a.default.createElement(Kt,null,"Welcome to Wize Q!")),a.default.createElement(Ht,null,a.default.createElement("p",null,"We want to share a few simple guidelines before you start. Remember that Wize Q is a space for asking questions and providing answers that are helpful to our community."),a.default.createElement("p",null,"Please practice our values when using Wize Q: "),a.default.createElement(Yt,null,a.default.createElement("p",null,m("var(--color-primary)"),a.default.createElement(ee,{color:"var(--color-primary)"},"Ownership"),"\u2013 See if you can find the answer to your question before posting on Wize Q. And if you know the answer to a question or how to find it, be sure to reply \u2014 anyone can!"),a.default.createElement("p",null,m("var(--color-secondary)"),a.default.createElement(ee,{color:"var(--color-secondary)"},"Innovation"),"\u2013 When someone shares a concern or challenge, let\u2019s be innovative \u2014 propose a solution or offer support!"),a.default.createElement("p",null,m("#E5C8A6"),a.default.createElement(ee,{color:"#E5C8A6"},"Community"),"\u2013 Remember to treat everyone with dignity and respect. Assume others have good intentions. Always be honest and constructive. Let\u2019s make Wizeline a community where everyone can thrive.")),a.default.createElement("p",null,"Consider that other channels: (ticketing portal, Slack, your manager or people partner) might be more effective for finding the right answer quickly."),a.default.createElement("p",null,"Thanks for being a valuable contributor to our community! "),a.default.createElement("p",null,"The Wize Q Team")),a.default.createElement(Gt,null,a.default.createElement(K,{id:"btnAccept",category:Xe,onClick:e},"Accept"))))):null}Xt.propTypes={onClose:Ae.default.func.isRequired,show:Ae.default.bool.isRequired};var Rt=Xt;function Te({questions:t,onFetchMore:e}){let p=Oe(),m=De(),b=(0,d.useRef)(),x=Y(),[l,v]=(0,d.useState)(wt("showValueMessage")),[h,Q]=V(),[q,F]=(0,d.useState)("Newest Questions"),y=l==="true"&&d.default.createElement(Rt,{show:l,onClose:()=>{v(!1),yt("showValueMessage",!1)}}),f=u=>({...u,question:et(u.question,void 0),hasVoted:!!u.hasVoted}),$=u=>{u.forEach(c=>{h.delete(c)}),Q(h)},O=(u,c)=>{u==="order"&&(c==="oldest"?F("Oldest Questions"):c==="newest"?F("Newest Questions"):c==="popular"?F("Popular Questions"):c==="most_commented"&&F("Most Commented Questions")),c===void 0?h.delete(u):h.set(u,c),Q(h)},oe=u=>u?u.full_name:"Anonymous",D=u=>u?`Answered by ${u}`:"",re=()=>{let u=(c,P)=>{if(m.state!=="idle")return;let L=new FormData(b.current);L.set("action",at.VOTE_QUESTION),L.set("questionId",c),L.set("user",JSON.stringify(x)),L.set("isUpVote",P);let Z="/?index";h.forEach((j,ne)=>{Z+=j?`&${ne}=${j}`:""}),p(L,{method:"post",action:Z,replace:!0})};return t.length===0?null:t.map((c,P)=>d.default.createElement(fe,{key:c.question_id,question:f(c),isAdmin:x.is_admin,displayUsername:oe,displayAnsweredBy:D,searchTerm:void 0,index:P,onVoteClick:L=>u(c.question_id,L),processingFormSubmission:m.state!=="idle"}))},A=()=>t?"There are no questions yet, how about asking one?":"Loading questions...";return d.default.createElement(St,null,d.default.createElement(kt,null,d.default.createElement(Ft,null,d.default.createElement(gt,null))),d.default.createElement(Ct,null,d.default.createElement(At,null,d.default.createElement(Tt,null,d.default.createElement(Lt,null,q),(()=>d.default.createElement(Qt,{to:"/questions/new",id:"ask-button"},"Ask Question"))()),t.length===0?d.default.createElement(Et,null,A()):d.default.createElement(be,{onFetch:e},d.default.createElement(_t,{id:"questions-list"},re(t))))),d.default.createElement(vt,null,d.default.createElement(Nt,null,d.default.createElement(Fe,{modifyQuery:O,clearFilters:$}))),d.default.createElement(ge,null),y)}Te.propTypes={questions:te.default.arrayOf(te.default.shape()),onFetchMore:te.default.func.isRequired};Te.defaultProps={questions:[]};var Le=Te;function to(){let{questions:t}=H(),{questionsFAQ:e}=H(),[p,m]=(0,k.useState)(t),[b,x]=(0,k.useState)(e),l=Me(),[v,h]=(0,k.useState)(!0),[Q,q]=(0,k.useState)(2),[F]=V(),y=()=>{!v||l.load(`/?index&${F.toString()}&page=${Q}`)};return(0,k.useEffect)(()=>{if(l.data&&l.data.questions&&l.data.questions.length===0){h(!1);return}l.data&&l.data.questions&&l.data.questions.length>0&&(m(f=>[...f,...l.data.questions]),q(f=>f+1),h(!0))},[l.data]),(0,k.useEffect)(()=>{m(t),x(e),q(2),h(!0)},[t,F]),k.default.createElement(k.default.Fragment,null,k.default.createElement(ht,null),k.default.createElement(bt,null,k.default.createElement(Le,{type:"all",questions:p,onFetchMore:y})))}export{to as default};
