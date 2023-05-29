import{l as y}from"/build/_shared/chunk-23LXH4L2.js";import"/build/_shared/chunk-DACSXK3H.js";import{a as U}from"/build/_shared/chunk-4BHLMLDL.js";import{c as n}from"/build/_shared/chunk-ILVVFOSI.js";import"/build/_shared/chunk-7NP4ACH5.js";import{o as C}from"/build/_shared/chunk-GLVWW33M.js";import{f as S,i as o,j as w}from"/build/_shared/chunk-XNUFYIVR.js";o();o();var t=S(w());o();var B=n.div`
	background-color: #f7fafc; /* Slate-100 */
	margin-left: 15%;

	@media (min-width: 1536px) {
		margin-left: 40px; /* 2xl:ml-40 */
	}

	height: 100vh;
	padding-top: 8px; /* Pt-8 */
	align-content: stretch; /* Content-stretch */
`,D=n.div`
	margin-left: 1%;

	height: 100vh;
	padding-top: 8px;
	display: grid;

	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 3.5rem;
	padding-left: 2.5rem;
	padding-right: 2.5rem;

	margin-right: 1px;
`,A=n.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-template-rows: minmax(0, 1fr);
	column-gap: 3%;
	margin-left: 2px;
`,u=n.div`
	display: inline-block;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	width: 11/12;
	height: 100%;
	border-radius: 0.5rem;
	background-color: white;
	border: 1px solid #d1d5db;
	box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
	&:focus {
		outline: none;
		box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
	}
`,k=n.div`
	display: inline-block;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 20px;
	border: 1px solid #d1d5db; /* ring-gray-200 */
	box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
	&:focus {
		outline: none;
		box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
	}
	border-radius: 0.375rem; /* rounded-md */
	margin-left: 2px; /* ml-2 */
	margin-right: 1px; /* mr-1 */
	height: 90%;
`,x=n.div`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 10px;
`,K=n.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`,g=n.h2`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	margin-bottom: 15px;
`,i=n.td`
	color: #17202a;
	font-weight: 400;
	letter-spacing: 1px;
`,l=n.th`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: medium;
`,V=n.li`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: large;
	margin-top: 30px;
`,h=n.td`
	color: #c64927;
	font-weight: 400;
	letter-spacing: 1px;
`,b=n.td`
	color: #83bb2b;
	font-weight: 400;
	letter-spacing: 1px;
`,W=n.td`
	color: #4766b6;
	font-weight: 400;
	letter-spacing: 1px;
`;var z=S(U());o();o();o();var _=n.div`
	margin-top: 1px;
	height: 100vh;
	position: absolute;
	inset-y: 0;
	display: flex;
	overflow-y: scroll;
`,v=n.div`
	position: relative;
	display: inline-block;
	padding-left: 25px;
	padding-right: 15px;
`,N=n.div`
	color: #17202a; /* Indigo-800 */
	font-weight: bold;
	font-size: large;
	margin-left: 8px;
	margin-right: 8px;
	margin-top: 18%;
`,$=n.ul`
	list-style-type: none;
	padding: 0;
	padding-left: 15px;
	margin-top: 20%;
`,M=n.li`
	@import url("https://fonts.googleapis.com/css?family=Inter");
	text-align: left;
	margin-top: 7.5%;
	// margin-top: 20%;
	/* background-color: #1f2937;  Gray-900 */
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;

	&:hover {
		background-color: #213246; /* Gray-700 */
		color: white;
		border-radius: 0.375rem; /* Rounded-md */
		// padding-left: 0.75rem; /* Px-3 */
		// padding-right: 0.75rem; /* Px-3 */
		padding-top: 0.5rem; /* Py-2 */
		padding-bottom: 0.5rem; /* Py-2 */
	}
`;var p=S(w());function j({departments:s,selectedDepartment:a,handleSelectDepartment:m}){return p.default.createElement(_,null,p.default.createElement(v,null,p.default.createElement(N,null,"Departaments"),p.default.createElement($,null,s.map(d=>p.default.createElement(M,{key:d.name,"aria-current":d.current?"page":void 0,onClick:()=>m(d.department_id),selected:d.department_id===a},d.name)))))}var c=j;var G=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],I=s=>{let a=new Date(s),m=G[a.getMonth()],d=a.getDate();return`${m} ${d}`};function J(){let{questionsFAQ:s,questionsOF:a,questionsBot:m,departments:d}=C(),[F,P]=(0,t.useState)(d[0].department_id);return t.default.createElement(t.default.Fragment,null,t.default.createElement(c,{departments:d,selectedDepartment:F,handleSelectDepartment:e=>{P(e);let r=new URLSearchParams({department:e});window.location.search=r.toString()}}),t.default.createElement(B,null,t.default.createElement(D,null,t.default.createElement(A,null,t.default.createElement(u,null,t.default.createElement(x,null,t.default.createElement(g,null,"Open Forums"),t.default.createElement(y,{hover:!0},t.default.createElement("tbody",null,a.map((e,r)=>t.default.createElement("tr",null,t.default.createElement(i,{key:`questionOP-${r}`,title:e.question},e.question.length>100?`${e.question.substring(0,100)}...`:e.question))))))),t.default.createElement(u,null,t.default.createElement(x,null,t.default.createElement(g,null,"Answerbot Feedback"),t.default.createElement(y,{stripped:!0,hover:!0},t.default.createElement("thead",null,t.default.createElement("tr",null,t.default.createElement(l,{width:"250"},"Question"),t.default.createElement(l,{width:"250"},"Answer"),t.default.createElement(l,{width:"170"},"Feedback"))),t.default.createElement("tbody",null,m.map((e,r)=>t.default.createElement("tr",null,t.default.createElement(i,{key:`questionAB-${r}`,title:e.question_by_user},e.question_by_user.length>50?`${e.question_by_user.substring(0,50)}...`:e.question_by_user),t.default.createElement(i,{key:`answerAB-${r}`,title:e.answer_by_bot},e.answer_by_bot.length>50?`${e.answer_by_bot.substring(0,50)}...`:e.answer_by_bot),e.answer_feedback===-1&&t.default.createElement(h,{key:`feedbackAB-${r}`}," Bad "),e.answer_feedback===0&&t.default.createElement(i,{key:`feedbackAB-${r}`}," N/A "),e.answer_feedback===1&&t.default.createElement(b,{key:`feedbackAB-${r}`}," Good ")))))))),t.default.createElement(k,null,t.default.createElement(x,null,t.default.createElement(g,null,"FAQs"),t.default.createElement(y,{stripped:!0,hover:!0},t.default.createElement("thead",null,t.default.createElement("tr",null,t.default.createElement(l,{width:"330"},"Question"),t.default.createElement(l,{width:"170"},"Department"),t.default.createElement(l,{width:"170"},"Date"),t.default.createElement(l,{width:"170"},"Status"))),t.default.createElement("tbody",null,s.map((e,r)=>{var T;return t.default.createElement("tr",null,t.default.createElement(i,{key:`questionFAQ-${r}`,title:e.question},e.question.length>50?`${e.question.substring(0,50)}...`:e.question),t.default.createElement(i,{key:`department-${r}`}," ",e.assigned_department!==null?(T=d.find(Q=>Q.department_id===e.assigned_department))==null?void 0:T.name:"Not Assigned"," "),t.default.createElement(i,{key:`date-${r}`}," ",I(e.createdAt)," "),e.Answers.length>0?t.default.createElement(b,{key:`statusFAQ-${r}`}," Answered "):t.default.createElement(h,{key:`statusFAQ-${r}`}," Unanswered "))}))))))))}var q=J;export{q as default};
