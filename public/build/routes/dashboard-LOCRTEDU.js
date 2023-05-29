import {
  Table_default
} from "/build/_shared/chunk-THD6T3BE.js";
import "/build/_shared/chunk-2VQ64DF4.js";
import {
  require_session
} from "/build/_shared/chunk-Q745UF6A.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import "/build/_shared/chunk-PBFK4UZR.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3MAIR26M.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes/dashboard.jsx?browser
init_react();

// app/routes/dashboard.jsx
init_react();
var import_react2 = __toESM(require_react());

// app/styles/Dashboard.Styled.jsx
init_react();
var MainContainer = styled_components_browser_esm_default.div`
	background-color: #f7fafc; /* Slate-100 */
	margin-left: 15%;

	@media (min-width: 1536px) {
		margin-left: 40px; /* 2xl:ml-40 */
	}

	height: 100vh;
	padding-top: 8px; /* Pt-8 */
	align-content: stretch; /* Content-stretch */
`;
var NextContainer = styled_components_browser_esm_default.div`
	margin-left: 1%;

	height: 100vh;
	padding-top: 8px;
	display: grid;

	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 3.5rem;
	padding-left: 2.5rem;
	padding-right: 2.5rem;

	margin-right: 1px;
`;
var DividerContainer = styled_components_browser_esm_default.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-template-rows: minmax(0, 1fr);
	column-gap: 3%;
	margin-left: 2px;
`;
var TopContainers = styled_components_browser_esm_default.div`
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
`;
var BottomContainer = styled_components_browser_esm_default.div`
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
`;
var ContMargin = styled_components_browser_esm_default.div`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 10px;
`;
var UList = styled_components_browser_esm_default.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;
var Title = styled_components_browser_esm_default.h2`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	margin-bottom: 15px;
`;
var Text = styled_components_browser_esm_default.td`
	color: #17202a;
	font-weight: 400;
	letter-spacing: 1px;
`;
var TextBold = styled_components_browser_esm_default.th`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: medium;
`;
var TextBoldList = styled_components_browser_esm_default.li`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: large;
	margin-top: 30px;
`;
var TextU = styled_components_browser_esm_default.td`
	color: #c64927;
	font-weight: 400;
	letter-spacing: 1px;
`;
var TextA = styled_components_browser_esm_default.td`
	color: #83bb2b;
	font-weight: 400;
	letter-spacing: 1px;
`;
var TextB = styled_components_browser_esm_default.td`
	color: #4766b6;
	font-weight: 400;
	letter-spacing: 1px;
`;

// app/routes/dashboard.jsx
var import_session = __toESM(require_session());

// app/components/AdminSideBar/index.js
init_react();

// app/components/AdminSideBar/AdminSideBar.jsx
init_react();

// app/components/AdminSideBar/AdminSideBar.Styled.jsx
init_react();
var MainContainer2 = styled_components_browser_esm_default.div`
	margin-top: 1px;
	height: 100vh;
	position: absolute;
	inset-y: 0;
	display: flex;
	overflow-y: scroll;
`;
var DepContainer = styled_components_browser_esm_default.div`
	position: relative;
	display: inline-block;
	padding-left: 25px;
	padding-right: 15px;
`;
var TitleDep = styled_components_browser_esm_default.div`
	color: #17202a; /* Indigo-800 */
	font-weight: bold;
	font-size: large;
	margin-left: 8px;
	margin-right: 8px;
	margin-top: 18%;
`;
var ListDep = styled_components_browser_esm_default.ul`
	list-style-type: none;
	padding: 0;
	padding-left: 15px;
	margin-top: 20%;
`;
var DepSelect = styled_components_browser_esm_default.li`
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
`;

// app/components/AdminSideBar/AdminSideBar.jsx
var import_react = __toESM(require_react());
function SideBar({ departments, selectedDepartment, handleSelectDepartment }) {
  return /* @__PURE__ */ import_react.default.createElement(MainContainer2, null, /* @__PURE__ */ import_react.default.createElement(DepContainer, null, /* @__PURE__ */ import_react.default.createElement(TitleDep, null, "Departaments"), /* @__PURE__ */ import_react.default.createElement(ListDep, null, departments.map((item) => /* @__PURE__ */ import_react.default.createElement(DepSelect, {
    key: item.name,
    "aria-current": item.current ? "page" : void 0,
    onClick: () => handleSelectDepartment(item.department_id),
    selected: item.department_id === selectedDepartment
  }, item.name)))));
}
var AdminSideBar_default = SideBar;

// app/routes/dashboard.jsx
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
};
function Dashboard() {
  const { questionsFAQ, questionsOF, questionsBot, departments } = useLoaderData();
  const [selectedDepartment, setSelectedDepartment] = (0, import_react2.useState)(departments[0].department_id);
  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
    const queryParams = new URLSearchParams({ department });
    window.location.search = queryParams.toString();
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(AdminSideBar_default, {
    departments,
    selectedDepartment,
    handleSelectDepartment
  }), /* @__PURE__ */ import_react2.default.createElement(MainContainer, null, /* @__PURE__ */ import_react2.default.createElement(NextContainer, null, /* @__PURE__ */ import_react2.default.createElement(DividerContainer, null, /* @__PURE__ */ import_react2.default.createElement(TopContainers, null, /* @__PURE__ */ import_react2.default.createElement(ContMargin, null, /* @__PURE__ */ import_react2.default.createElement(Title, null, "Open Forums"), /* @__PURE__ */ import_react2.default.createElement(Table_default, {
    hover: true
  }, /* @__PURE__ */ import_react2.default.createElement("tbody", null, questionsOF.map((question, index) => /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement(Text, {
    key: `questionOP-${index}`,
    title: question.question
  }, question.question.length > 100 ? `${question.question.substring(0, 100)}...` : question.question))))))), /* @__PURE__ */ import_react2.default.createElement(TopContainers, null, /* @__PURE__ */ import_react2.default.createElement(ContMargin, null, /* @__PURE__ */ import_react2.default.createElement(Title, null, "Answerbot Feedback"), /* @__PURE__ */ import_react2.default.createElement(Table_default, {
    stripped: true,
    hover: true
  }, /* @__PURE__ */ import_react2.default.createElement("thead", null, /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "250"
  }, "Question"), /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "250"
  }, "Answer"), /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "170"
  }, "Feedback"))), /* @__PURE__ */ import_react2.default.createElement("tbody", null, questionsBot.map((question, index) => /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement(Text, {
    key: `questionAB-${index}`,
    title: question.question_by_user
  }, question.question_by_user.length > 50 ? `${question.question_by_user.substring(0, 50)}...` : question.question_by_user), /* @__PURE__ */ import_react2.default.createElement(Text, {
    key: `answerAB-${index}`,
    title: question.answer_by_bot
  }, question.answer_by_bot.length > 50 ? `${question.answer_by_bot.substring(0, 50)}...` : question.answer_by_bot), question.answer_feedback === -1 && /* @__PURE__ */ import_react2.default.createElement(TextU, {
    key: `feedbackAB-${index}`
  }, " Bad "), question.answer_feedback === 0 && /* @__PURE__ */ import_react2.default.createElement(Text, {
    key: `feedbackAB-${index}`
  }, " N/A "), question.answer_feedback === 1 && /* @__PURE__ */ import_react2.default.createElement(TextA, {
    key: `feedbackAB-${index}`
  }, " Good ")))))))), /* @__PURE__ */ import_react2.default.createElement(BottomContainer, null, /* @__PURE__ */ import_react2.default.createElement(ContMargin, null, /* @__PURE__ */ import_react2.default.createElement(Title, null, "FAQs"), /* @__PURE__ */ import_react2.default.createElement(Table_default, {
    stripped: true,
    hover: true
  }, /* @__PURE__ */ import_react2.default.createElement("thead", null, /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "330"
  }, "Question"), /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "170"
  }, "Department"), /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "170"
  }, "Date"), /* @__PURE__ */ import_react2.default.createElement(TextBold, {
    width: "170"
  }, "Status"))), /* @__PURE__ */ import_react2.default.createElement("tbody", null, questionsFAQ.map((question, index) => {
    var _a;
    return /* @__PURE__ */ import_react2.default.createElement("tr", null, /* @__PURE__ */ import_react2.default.createElement(Text, {
      key: `questionFAQ-${index}`,
      title: question.question
    }, question.question.length > 50 ? `${question.question.substring(0, 50)}...` : question.question), /* @__PURE__ */ import_react2.default.createElement(Text, {
      key: `department-${index}`
    }, " ", question.assigned_department !== null ? (_a = departments.find((depa) => depa.department_id === question.assigned_department)) == null ? void 0 : _a.name : "Not Assigned", " "), /* @__PURE__ */ import_react2.default.createElement(Text, {
      key: `date-${index}`
    }, " ", formatDate(question.createdAt), " "), question.Answers.length > 0 ? /* @__PURE__ */ import_react2.default.createElement(TextA, {
      key: `statusFAQ-${index}`
    }, " Answered ") : /* @__PURE__ */ import_react2.default.createElement(TextU, {
      key: `statusFAQ-${index}`
    }, " Unanswered "));
  }))))))));
}
var dashboard_default = Dashboard;
export {
  dashboard_default as default
};
//# sourceMappingURL=/build/routes/dashboard-LOCRTEDU.js.map
