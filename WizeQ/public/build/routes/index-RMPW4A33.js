import {
  getCookie,
  setCookie
} from "/build/_shared/chunk-QIZSXKRG.js";
import {
  AnswerRow_default,
  CounterButton_default,
  CounterButtonsWrapper,
  QuestionCardActions,
  QuestionCardBorder,
  QuestionCardContainer,
  QuestionCardWrapper,
  QuestionRow_default,
  actions_default,
  commentUtils_default,
  ic_dislike_default,
  ic_dislike_pressed_default,
  ic_like_default,
  ic_like_pressed_default,
  renderAnswer
} from "/build/_shared/chunk-X7Z6ZX7J.js";
import {
  markdownFormatQuestions_default
} from "/build/_shared/chunk-IBDLLEVI.js";
import {
  Slogan_default
} from "/build/_shared/chunk-D3E4TBWT.js";
import {
  BsCircleFill
} from "/build/_shared/chunk-AGULABHZ.js";
import {
  Notifications_default
} from "/build/_shared/chunk-GHYRS774.js";
import "/build/_shared/chunk-2ATFA6QJ.js";
import {
  Dropdown_default,
  MenuItem_default
} from "/build/_shared/chunk-G65RIFQG.js";
import {
  Button_default
} from "/build/_shared/chunk-HW6BGKIM.js";
import "/build/_shared/chunk-VMH7LORY.js";
import {
  useUser_default
} from "/build/_shared/chunk-QSZDZ2CR.js";
import "/build/_shared/chunk-EH6OGSNW.js";
import {
  BACK_TO_TOP,
  DATE_RANGE_ACCESS_VALUE,
  DATE_RANGE_LABEL,
  DATE_RANGE_OPTIONS,
  DEFAULT_DATE_RANGE_OPT,
  DEFAULT_DEPARTMENT_OPT,
  DEFAULT_LOCATION,
  DEFAULT_LOCATION_OPT,
  DEFAULT_SORTING_OPT,
  DEFAULT_STATUS_OPT,
  DEPARTMENT_ACCESS_VALUE,
  DEPARTMENT_LABEL,
  DEPARTMENT_OPTIONS,
  LOCATION_ACCESS_VALUE,
  LOCATION_LABEL,
  SECONDARY_BUTTON,
  SORTING_ACCESS_VALUE,
  SORTING_OPTIONS,
  STATUS_ACCESS_VALUE,
  STATUS_LABEL,
  STATUS_OPTIONS,
  TEXT_BUTTON,
  require_prop_types
} from "/build/_shared/chunk-CP2RARZH.js";
import {
  require_session
} from "/build/_shared/chunk-Q745UF6A.js";
import {
  Ce,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-EDO2VLX7.js";
import {
  Link,
  init_dist,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-3MAIR26M.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// browser-route-module:routes\index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_react13 = __toESM(require_react());
var import_session = __toESM(require_session());

// app/styles/Home.Styled.jsx
init_react();
var Container = styled_components_browser_esm_default.div`
background-color: #f4f7f9;
`;

// app/components/ListQuestions/index.js
init_react();

// app/components/ListQuestions/ListQuestions.jsx
init_react();
var import_react10 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// app/components/ListQuestions/ListQuestions.Styled.jsx
init_react();
var Container2 = styled_components_browser_esm_default.div`
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
`;
var LeftWrapper = styled_components_browser_esm_default.div`
  flex: 1;
`;
var CenterWrapper = styled_components_browser_esm_default.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;
var RightWrapper = styled_components_browser_esm_default.div`
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
`;
var SloganWrapper = styled_components_browser_esm_default.div`
  max-width: 425px;
  
  @media (max-width: 1025px) {
    display: none;
  }
`;
var QuestionsWrapper = styled_components_browser_esm_default.div`
  max-width: 650px;
  width: 100%;
`;
var AskQuestionButtonWrapper = styled_components_browser_esm_default.div`
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
var QuestionsTitle = styled_components_browser_esm_default.div`
  align-items: center;
  display: flex;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  letter-spacing: 0.6px;
`;
var QuestionList = styled_components_browser_esm_default.div`
  margin: 5px 0 10px;
  padding-left: 0;
`;
var Alert = styled_components_browser_esm_default.div`
  border-radius: 3px;
  margin: 0 auto;
  max-width: 592px;
  width: 94%;
  padding: 15px 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`;
var FiltersWrapper = styled_components_browser_esm_default.div`
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
`;
var AskButton = styled_components_browser_esm_default(Link)`
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
`;

// app/components/QuestionCard/index.js
init_react();

// app/components/QuestionCard/QuestionCard.jsx
init_react();
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_dist();

// app/images/ic_comment_non-selected.svg
var ic_comment_non_selected_default = "/build/_assets/ic_comment_non-selected-KYYD5WEF.svg";

// app/components/QuestionCard/QuestionCard.jsx
function QuestionCard(props) {
  const {
    question,
    currentUserEmail,
    question: { Answers },
    onVoteClick,
    searchTerm,
    processingFormSubmission
  } = props;
  const renderAnswerProps = {
    Answers,
    isAdmin: false,
    currentUserEmail,
    onAnswerClick: () => {
    },
    openDeleteAnswerModal: () => {
    },
    question,
    searchTerm,
    isPreview: true,
    isFromList: true,
    questionId: question.question_id,
    isAnswer: true
  };
  const hasAnswer = question.Answers.length > 0;
  const navigate = useNavigate();
  const renderButtons = () => {
    const icon = !question.hasLike ? ic_like_default : ic_like_pressed_default;
    const dislikeicon = !question.hasDislike ? ic_dislike_default : ic_dislike_pressed_default;
    return /* @__PURE__ */ import_react2.default.createElement(CounterButtonsWrapper, {
      isAdmin: false,
      hasAnswer
    }, /* @__PURE__ */ import_react2.default.createElement(CounterButton_default, {
      id: `like-button-${question.question_id}`,
      selected: question.hasLike,
      icon,
      count: question.numLikes,
      onClick: () => onVoteClick(true),
      processingFormSubmission,
      isDisabled: question.hasDislike
    }), /* @__PURE__ */ import_react2.default.createElement(CounterButton_default, {
      id: `like-button-${question.question_id}`,
      selected: question.hasDislike,
      icon: dislikeicon,
      count: question.numDisklike,
      onClick: () => onVoteClick(false),
      processingFormSubmission,
      isDisabled: question.hasLike
    }), /* @__PURE__ */ import_react2.default.createElement(CounterButton_default, {
      id: `comments-button-${question.question_id}`,
      icon: ic_comment_non_selected_default,
      count: question.numComments,
      onClick: () => navigate(`/questions/${question.question_id}`)
    }));
  };
  const renderCommentAnswer = () => {
    if (!question.hasCommentApproved && !question.hasCommunityAnswer || question.Answers.length > 0) {
      return null;
    }
    let commentAsAnswer = {};
    if (question.hasCommentApproved) {
      commentAsAnswer = question.Comments.find((comment) => comment.approvedBy !== null);
    } else if (question.hasCommunityAnswer) {
      const [communityAnswerCommentId] = commentUtils_default(question.Comments);
      commentAsAnswer = question.Comments.find((comment) => comment.id === communityAnswerCommentId);
    }
    if (commentAsAnswer) {
      return /* @__PURE__ */ import_react2.default.createElement(AnswerRow_default, {
        answer_text: commentAsAnswer.comment,
        user: commentAsAnswer.User,
        answered_at: commentAsAnswer.createdAt,
        searchTerm: renderAnswerProps.searchTerm,
        isPreview: renderAnswerProps.isPreview,
        isFromList: renderAnswerProps.isFromList,
        questionId: question.question_id,
        isAnswer: question.Answers.length > 0,
        isCommunityAnswer: question.hasCommunityAnswer,
        isCommentApproved: question.hasCommentApproved,
        approver: commentAsAnswer.Approver
      });
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(QuestionCardContainer, null, /* @__PURE__ */ import_react2.default.createElement(QuestionCardWrapper, null, /* @__PURE__ */ import_react2.default.createElement(QuestionCardBorder, null, /* @__PURE__ */ import_react2.default.createElement(QuestionRow_default, {
    question,
    isQuestionModalOpen: false,
    hasAnswer
  }), /* @__PURE__ */ import_react2.default.createElement(QuestionCardActions, {
    hasAnswer,
    isQuestionModalOpen: false
  }, renderButtons()))), renderAnswer(renderAnswerProps), renderCommentAnswer());
}
QuestionCard.propTypes = {
  question: import_prop_types.default.shape({
    question_id: import_prop_types.default.number.isRequired,
    question: import_prop_types.default.string.isRequired,
    user_hash: import_prop_types.default.string,
    can_edit: import_prop_types.default.bool,
    created_by_user: import_prop_types.default.shape({
      email: import_prop_types.default.string,
      employee_id: import_prop_types.default.number,
      full_name: import_prop_types.default.string,
      is_admin: import_prop_types.default.bool,
      job_title: import_prop_types.default.string,
      profile_picture: import_prop_types.default.string
    }),
    Answers: import_prop_types.default.arrayOf(import_prop_types.default.shape()),
    createdAt: import_prop_types.default.string.isRequired,
    location: import_prop_types.default.string.isRequired,
    numComments: import_prop_types.default.number.isRequired,
    hasVoted: import_prop_types.default.bool.isRequired,
    hasCommentApproved: import_prop_types.default.bool.isRequired,
    hasCommunityAnswer: import_prop_types.default.bool.isRequired,
    Comments: import_prop_types.default.arrayOf(import_prop_types.default.shape()),
    numLikes: import_prop_types.default.number.isRequired,
    numDisklike: import_prop_types.default.number.isRequired,
    hasLike: import_prop_types.default.bool.isRequired,
    hasDislike: import_prop_types.default.bool.isRequired
  }).isRequired,
  onVoteClick: import_prop_types.default.func.isRequired,
  currentUserEmail: import_prop_types.default.string,
  searchTerm: import_prop_types.default.string,
  processingFormSubmission: import_prop_types.default.bool
};
QuestionCard.defaultProps = {
  currentUserEmail: "",
  searchTerm: "",
  processingFormSubmission: false
};
var QuestionCard_default = QuestionCard;

// app/components/GoToTopButton/index.js
init_react();

// app/components/GoToTopButton/GoToTopButton.jsx
init_react();
var import_react4 = __toESM(require_react());

// app/components/GoToTopButton/GoToTopButton.Styled.jsx
init_react();
var Button = styled_components_browser_esm_default.button`
  all: unset;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 4px 0 0 4px;
  bottom: 45px;
  box-shadow: 0 2px 4px 0 #c7c6c6;
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: ${(props) => props.display === true ? 0.9 : 0};
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
`;
var Span = styled_components_browser_esm_default.span`
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.58px;
  padding-left: 11px;
  padding-right: 24px;
`;

// app/components/Atoms/ArrowIcon/index.js
init_react();

// app/components/Atoms/ArrowIcon/ArrowIcon.jsx
init_react();
var import_react3 = __toESM(require_react());
function ArrowIcon(props) {
  return /* @__PURE__ */ import_react3.default.createElement("svg", {
    color: "white",
    fill: "currentColor",
    fillRule: "nonzero",
    height: 12,
    stroke: "currentColor",
    strokeWidth: 1,
    version: "1.1",
    viewBox: "0 0 23 27",
    width: 10,
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  }, /* @__PURE__ */ import_react3.default.createElement("path", {
    transform: "translate(-18.000000, -17.000000)",
    d: "M30.6301904,20.6966946 C30.6304384,20.705609 30.6305632,20.7145536 30.6305632,20.7235269 L30.6305632,41.9301705 C30.6305632,42.462539 30.1912987,42.8941089 29.6494386,42.8941089 C29.1075784,42.8941089 28.6683139,42.462539 28.6683139,41.9301705 L28.6683139,20.7235269 C28.6683139,20.6823753 28.6709386,20.6418259 28.6760325,20.6020316 L20.2797113,28.5838228 C19.9872058,28.8618871 19.5118845,28.8618871 19.2193791,28.5838228 C18.9268736,28.3057585 18.9268736,27.853904 19.2193791,27.5758396 L29.0731557,18.2085482 C29.3656611,17.9304839 29.8409825,17.9304839 30.1334879,18.2085482 L39.9872645,27.5758396 C40.1335172,27.7148718 40.2066436,27.888662 40.2066436,28.0798312 C40.2066436,28.2710004 40.1335172,28.4447906 39.9872645,28.5838228 C39.6947591,28.8618871 39.2194378,28.8618871 38.9269323,28.5838228 L30.6301904,20.6966946 Z M29.6444293,19.7596009 L29.6033218,19.7205229 L29.5578693,19.7637314 C29.5863864,19.7611383 29.6152573,19.7597442 29.6444293,19.7596009 Z"
  }));
}
var ArrowIcon_default = ArrowIcon;

// app/components/GoToTopButton/GoToTopButton.jsx
function GoToTopButton() {
  const [show, setShow] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  return /* @__PURE__ */ import_react4.default.createElement(Button, {
    id: "go-to-top-button",
    display: show,
    onClick: goToTop
  }, /* @__PURE__ */ import_react4.default.createElement(ArrowIcon_default, null), /* @__PURE__ */ import_react4.default.createElement(Span, null, BACK_TO_TOP));
}
var GoToTopButton_default = GoToTopButton;

// app/components/Atoms/InfiniteScrollList/index.js
init_react();

// app/components/Atoms/InfiniteScrollList/InfiniteScrollList.jsx
init_react();
var import_react5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
function InfiniteScrollList({ onFetch, children }) {
  const endOfListRef = (0, import_react5.useRef)();
  const scrollContainer = null;
  const fetchScrollLimit = 500;
  const onScroll = ([entity]) => {
    if (entity.isIntersecting) {
      onFetch();
    }
  };
  const observer = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(() => {
    observer.current = new IntersectionObserver(onScroll, {
      root: scrollContainer,
      rootMargin: `${fetchScrollLimit}px`,
      threshold: 0
    });
    if (endOfListRef && endOfListRef.current) {
      observer.current.observe(endOfListRef.current);
    }
    return () => {
      if (endOfListRef && endOfListRef.current) {
        observer.current.unobserve(endOfListRef.current);
      }
    };
  }, [children.props.children.length]);
  return /* @__PURE__ */ import_react5.default.createElement("div", null, children, /* @__PURE__ */ import_react5.default.createElement("div", {
    ref: endOfListRef
  }));
}
InfiniteScrollList.propTypes = {
  onFetch: import_prop_types2.default.func.isRequired,
  children: import_prop_types2.default.node
};
InfiniteScrollList.defaultProps = {
  children: null
};
var InfiniteScrollList_default = InfiniteScrollList;

// app/components/Filters/index.js
init_react();

// app/components/Filters/Filters.jsx
init_react();
var import_react7 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// app/images/ic_filter.svg
var ic_filter_default = "/build/_assets/ic_filter-UC4LYVWR.svg";

// app/components/Filters/Filters.Styled.jsx
init_react();
var Filters = styled_components_browser_esm_default.div`
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
`;
var Icon = styled_components_browser_esm_default.img`
  height: 20px;
  margin-right: 10px;
  width: 17px;
`;
var FiltersLine = styled_components_browser_esm_default.hr`
  border-top: 1px solid #e6e6e6;
  margin: 16px 0 24px;
  display: ${(props) => props.visibility};
  ${(props) => props.secondary && Ce`
    margin: 0;
  `}
  
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 767px){
   display: block;
  }
`;
var FiltersWrapper2 = styled_components_browser_esm_default.div`
  flex-grow: 1;
  transition: box-shadow 300ms;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
      display: ${(props) => props.hideComponent};
      margin: 0 auto;
      padding: 10px 0;
      width: 248px;
  }
  @media (max-width: 767px) {
      display: ${(props) => props.hideComponent};
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
`;
var FiltersContainer = styled_components_browser_esm_default.div`
  display: unset;
`;
var FiltersBlock = styled_components_browser_esm_default.div``;
var FiltersLabel = styled_components_browser_esm_default.div`
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
`;
var FiltersField = styled_components_browser_esm_default.div`
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
  ${(props) => props.departments && Ce`
      .dropdown-menu li:nth-child(2) a label {
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 12px;
      }
    `}
`;

// app/components/CustomDropdown/index.js
init_react();

// app/components/CustomDropdown/CustomDropdown.jsx
init_react();
var import_react6 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// app/components/CustomDropdown/CustomDropdown.Styled.jsx
init_react();
var CDropdown = styled_components_browser_esm_default(Dropdown_default)`
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
`;
var CDropdownText = styled_components_browser_esm_default.p`
  color: var(--color-secondary);
  float: left;
  font-size: 12px;
  padding-left: 5px;
  .first {
    font-size: 14px;
    font-weight: unset;
  }
`;
var CMenuItem = styled_components_browser_esm_default(MenuItem_default)`
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
`;

// app/components/CustomDropdown/CustomDropdown.jsx
function CustomDropdown(props) {
  const { accessValueName, selectedValue } = props;
  const renderElements = (elements) => elements.map((element) => /* @__PURE__ */ import_react6.default.createElement(CMenuItem, {
    eventKey: element,
    key: element[accessValueName]
  }, /* @__PURE__ */ import_react6.default.createElement("label", {
    className: "custom-dropdown",
    htmlFor: element[accessValueName]
  }, element.name, /* @__PURE__ */ import_react6.default.createElement("input", {
    type: "radio",
    className: "custom-dropdown--radio",
    checked: selectedValue === element[accessValueName],
    readOnly: true,
    id: element[accessValueName]
  }), /* @__PURE__ */ import_react6.default.createElement("span", {
    className: "custom-dropdown--span"
  }))));
  const renderSelected = () => props.showSelected && /* @__PURE__ */ import_react6.default.createElement("p", {
    className: "custom-dropdown-selected"
  }, props.text);
  return /* @__PURE__ */ import_react6.default.createElement(CDropdown, {
    className: props.dropdownClass,
    onSelect: props.onSelectFunc,
    id: props.dropdownClass,
    disabled: props.disabled
  }, /* @__PURE__ */ import_react6.default.createElement(CDropdown.Toggle, {
    onClick: props.onClickFunc,
    className: `toggle ${props.isHighlighted ? "highlighted" : ""}`
  }, /* @__PURE__ */ import_react6.default.createElement("p", {
    className: `dropdown-text ${props.showSelected ? "" : "first"}`
  }, props.label), renderSelected()), /* @__PURE__ */ import_react6.default.createElement(CDropdown.Menu, {
    className: props.menuClass
  }, props.elements.length > 0 && renderElements(props.elements)));
}
CustomDropdown.propTypes = {
  elements: import_prop_types3.default.arrayOf().isRequired,
  text: import_prop_types3.default.string,
  label: import_prop_types3.default.string.isRequired,
  dropdownClass: import_prop_types3.default.string,
  menuClass: import_prop_types3.default.string,
  onClickFunc: import_prop_types3.default.func,
  onSelectFunc: import_prop_types3.default.func,
  selectedValue: import_prop_types3.default.oneOfType([
    import_prop_types3.default.number,
    import_prop_types3.default.string
  ]),
  isHighlighted: import_prop_types3.default.bool,
  showSelected: import_prop_types3.default.bool,
  accessValueName: import_prop_types3.default.string.isRequired,
  disabled: import_prop_types3.default.bool
};
CustomDropdown.defaultProps = {
  text: "",
  dropdownClass: "sort-toggle",
  menuClass: "menu-dropdown",
  onClickFunc: null,
  onSelectFunc: null,
  selectedValue: null,
  isHighlighted: false,
  showSelected: true,
  disabled: false
};
var CustomDropdown_default = CustomDropdown;

// app/components/Filters/Filters.jsx
function Filters2(props) {
  const { modifyQuery, clearFilters } = props;
  const { departments, locations } = useLoaderData();
  const [searchParams] = useSearchParams();
  const getDefaultStatus = () => {
    const searchParam = searchParams.get("status");
    if (searchParam) {
      const found = STATUS_OPTIONS.find((status) => status.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_STATUS_OPT;
  };
  const getDefaultSortOption = () => {
    const searchParam = searchParams.get("order");
    if (searchParam) {
      const found = SORTING_OPTIONS.find((order) => order.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_SORTING_OPT;
  };
  const getDefaultDateRangeOption = () => {
    const searchParam = searchParams.get("dateRange");
    if (searchParam) {
      const found = DATE_RANGE_OPTIONS.find((date) => date.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_DATE_RANGE_OPT;
  };
  const getDefaultDepartmentOption = () => {
    const searchParam = parseInt(searchParams.get("department"), 10);
    if (searchParam !== void 0) {
      const found = DEPARTMENT_OPTIONS.find((option) => option.department_id === searchParam);
      if (found)
        return found;
      const foundInData = departments.find((department) => department.department_id === searchParam);
      if (foundInData)
        return foundInData;
    }
    return DEFAULT_DATE_RANGE_OPT;
  };
  const getDefaultLocationOption = () => {
    const searchParam = searchParams.get("location");
    if (searchParam) {
      const foundInData = locations.find((location) => location.code === searchParam);
      if (foundInData)
        return foundInData;
    }
    return DEFAULT_LOCATION_OPT;
  };
  const [selectedOrderBy, setSelectedOrderBy] = (0, import_react7.useState)(getDefaultSortOption());
  const [selectedDateRange, setSelectedDateRange] = (0, import_react7.useState)(getDefaultDateRangeOption());
  const [selectedStatus, setSelectedStatus] = (0, import_react7.useState)(getDefaultStatus());
  const [selectedDepartment, setSelectedDepartment] = (0, import_react7.useState)(getDefaultDepartmentOption());
  const [selectedLocation, setSelectedLocation] = (0, import_react7.useState)(getDefaultLocationOption());
  const [showClearButton, setShowClearButton] = (0, import_react7.useState)(false);
  const [showFilters, setShowFilters] = (0, import_react7.useState)(false);
  const [filtersButtonName, setFiltersButtonName] = (0, import_react7.useState)("Show filters");
  (0, import_react7.useEffect)(() => {
    if (selectedLocation !== null && selectedLocation !== void 0) {
      if (selectedDateRange.name === DEFAULT_DATE_RANGE_OPT.name && selectedDepartment.name === DEFAULT_DEPARTMENT_OPT.name && selectedStatus.name === DEFAULT_STATUS_OPT.name && selectedLocation.code === DEFAULT_LOCATION) {
        setShowClearButton(false);
      } else {
        setShowClearButton(true);
      }
    }
  }, [selectedDateRange, selectedStatus, selectedDepartment, selectedLocation]);
  const selectOrderByFilter = (selectOrderBy) => {
    setSelectedOrderBy(selectOrderBy);
    modifyQuery("order", selectOrderBy.value);
  };
  const selectDateRangeFilter = (selectDateRange) => {
    setSelectedDateRange(selectDateRange);
    if (selectDateRange.value === "all") {
      modifyQuery("dateRange", void 0);
    } else {
      modifyQuery("dateRange", selectDateRange.value);
    }
  };
  const selectStatusFilter = (selectStatus) => {
    setSelectedStatus(selectStatus);
    if (selectStatus.value === "all") {
      modifyQuery("status", void 0);
    } else {
      modifyQuery("status", selectStatus.value);
    }
  };
  const selectDepartmentFilter = (selectDepartment) => {
    setSelectedDepartment(selectDepartment);
    if (selectDepartment.department_id === -1) {
      modifyQuery("department", void 0);
    } else {
      modifyQuery("department", selectDepartment.department_id);
    }
  };
  const selectLocationFilter = (selectLocation) => {
    setSelectedLocation(selectLocation);
    modifyQuery("location", selectLocation.code);
  };
  const clearAllFilters = () => {
    selectDateRangeFilter(DEFAULT_DATE_RANGE_OPT, false);
    selectStatusFilter(DEFAULT_STATUS_OPT, false);
    selectDepartmentFilter(DEFAULT_DEPARTMENT_OPT, false);
    selectLocationFilter(DEFAULT_LOCATION_OPT, false);
    clearFilters([
      "location",
      "department",
      "status",
      "dateRange",
      "location"
    ]);
  };
  const selectFilters = () => {
    if (!showFilters) {
      setFiltersButtonName("Hide filters");
      setShowFilters(true);
    } else {
      setFiltersButtonName("Show filters");
      setShowFilters(false);
    }
  };
  const getLocationFilterConfig = () => {
    let selectedLocationsProps = {};
    if (selectedLocation) {
      selectedLocationsProps = {
        text: selectedLocation.name,
        selectedValue: selectedLocation.code,
        isHihlighted: selectedLocation.code !== DEFAULT_LOCATION
      };
    }
    return {
      ...selectedLocationsProps,
      elements: locations,
      label: LOCATION_LABEL,
      onSelectFunc: selectLocationFilter,
      accessValueName: LOCATION_ACCESS_VALUE,
      disabled: selectedLocation === void 0
    };
  };
  const orderByDropdownConfig = {
    elements: SORTING_OPTIONS,
    label: selectedOrderBy.name,
    onSelectFunc: selectOrderByFilter,
    selectedValue: selectedOrderBy.value,
    showSelected: false,
    accessValueName: SORTING_ACCESS_VALUE
  };
  const dateRangeFilterConfig = {
    elements: DATE_RANGE_OPTIONS,
    text: selectedDateRange.name,
    label: DATE_RANGE_LABEL,
    onSelectFunc: selectDateRangeFilter,
    selectedValue: selectedDateRange.value,
    isHihlighted: selectedDateRange !== DEFAULT_DATE_RANGE_OPT,
    accessValueName: DATE_RANGE_ACCESS_VALUE
  };
  const departmentFilterConfig = {
    elements: [...DEPARTMENT_OPTIONS, ...departments],
    text: selectedDepartment.name,
    label: DEPARTMENT_LABEL,
    onSelectFunc: selectDepartmentFilter,
    selectedValue: selectedDepartment.department_id,
    isHihlighted: selectedDepartment !== DEFAULT_DEPARTMENT_OPT,
    accessValueName: DEPARTMENT_ACCESS_VALUE
  };
  const statusFilterConfig = {
    elements: STATUS_OPTIONS,
    text: selectedStatus.name,
    label: STATUS_LABEL,
    onSelectFunc: selectStatusFilter,
    selectedValue: selectedStatus.value,
    isHihlighted: selectedStatus !== DEFAULT_STATUS_OPT,
    accessValueName: STATUS_ACCESS_VALUE
  };
  return /* @__PURE__ */ import_react7.default.createElement(Filters, null, /* @__PURE__ */ import_react7.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "show-filters-button",
    onClick: selectFilters
  }, /* @__PURE__ */ import_react7.default.createElement(Icon, {
    src: ic_filter_default,
    alt: "Icon"
  }), /* @__PURE__ */ import_react7.default.createElement("span", null, filtersButtonName)), /* @__PURE__ */ import_react7.default.createElement(FiltersLine, {
    secondary: true,
    visibility: "none"
  }), /* @__PURE__ */ import_react7.default.createElement(FiltersWrapper2, {
    hideComponent: !showFilters ? "none" : "block"
  }, /* @__PURE__ */ import_react7.default.createElement(FiltersContainer, null, /* @__PURE__ */ import_react7.default.createElement(FiltersBlock, null, /* @__PURE__ */ import_react7.default.createElement(FiltersLabel, null, "Order by:"), /* @__PURE__ */ import_react7.default.createElement(FiltersField, null, /* @__PURE__ */ import_react7.default.createElement(CustomDropdown_default, {
    ...orderByDropdownConfig
  }))), /* @__PURE__ */ import_react7.default.createElement(FiltersBlock, null, /* @__PURE__ */ import_react7.default.createElement(FiltersLabel, null, "Filter by:", " ", showClearButton && /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "button",
    onClick: clearAllFilters
  }, "Clear All Filters")), /* @__PURE__ */ import_react7.default.createElement(FiltersField, null, /* @__PURE__ */ import_react7.default.createElement(CustomDropdown_default, {
    ...dateRangeFilterConfig
  })), /* @__PURE__ */ import_react7.default.createElement(FiltersField, null, /* @__PURE__ */ import_react7.default.createElement(CustomDropdown_default, {
    ...statusFilterConfig
  })), /* @__PURE__ */ import_react7.default.createElement(FiltersField, {
    departments: true
  }, /* @__PURE__ */ import_react7.default.createElement(CustomDropdown_default, {
    ...departmentFilterConfig
  })), /* @__PURE__ */ import_react7.default.createElement(FiltersField, null, /* @__PURE__ */ import_react7.default.createElement(CustomDropdown_default, {
    ...getLocationFilterConfig()
  }))))));
}
Filters2.propTypes = {
  clearFilters: import_prop_types4.default.func.isRequired,
  modifyQuery: import_prop_types4.default.func.isRequired
};
var Filters_default = Filters2;

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.jsx
init_react();
var import_react9 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.Styled.jsx
init_react();
var Modal = styled_components_browser_esm_default.div`
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
`;
var ModalDialog = styled_components_browser_esm_default.div`
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
`;
var ModalBody = styled_components_browser_esm_default.div`
    display: block;
    font-size: 15px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    text-align: justify;
`;
var ModalFooter = styled_components_browser_esm_default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? `border-top: 1px solid #e5e5e5;
    padding: 15px;
    text-align: right;` : "border-bottom: none;"}
`;
var ModalHeader = styled_components_browser_esm_default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? `border-bottom: 1px solid #e5e5e5;
        padding: 15px;` : "border-bottom: none;"}
`;
var ModalTitle = styled_components_browser_esm_default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`;
var ModalSubtitle = styled_components_browser_esm_default.div`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`;
var ValueText = styled_components_browser_esm_default.span`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 16px;
    text-decoration:  ${(props) => props.color} underline overline;
`;
var ValuesInformation = styled_components_browser_esm_default.div`
    margin: 20px 0 20px 20px;
`;

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.jsx
function ValuesMessageModal({ show, onClose }) {
  const profile = useUser_default();
  const renderBulletPoint = (color) => /* @__PURE__ */ import_react9.default.createElement(BsCircleFill, {
    color,
    size: "7px",
    style: { marginTop: "3px", marginRight: "10px" }
  });
  if (!show) {
    return null;
  }
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    onClick: onClose
  }, /* @__PURE__ */ import_react9.default.createElement(Modal, {
    onClick: onClose
  }, /* @__PURE__ */ import_react9.default.createElement(ModalDialog, {
    show: true,
    hide: onClose
  }, /* @__PURE__ */ import_react9.default.createElement(ModalHeader, null, /* @__PURE__ */ import_react9.default.createElement(ModalTitle, null, "Hello", " ", profile.full_name, " ", "!"), /* @__PURE__ */ import_react9.default.createElement(ModalSubtitle, null, "Welcome to Wize Q!")), /* @__PURE__ */ import_react9.default.createElement(ModalBody, null, /* @__PURE__ */ import_react9.default.createElement("p", null, "We want to share a few simple guidelines before you start. Remember that Wize Q is a space for asking questions and providing answers that are helpful to our community."), /* @__PURE__ */ import_react9.default.createElement("p", null, "Please practice our values when using Wize Q: "), /* @__PURE__ */ import_react9.default.createElement(ValuesInformation, null, /* @__PURE__ */ import_react9.default.createElement("p", null, renderBulletPoint("var(--color-primary)"), /* @__PURE__ */ import_react9.default.createElement(ValueText, {
    color: "var(--color-primary)"
  }, "Ownership"), "\u2013 See if you can find the answer to your question before posting on Wize Q. And if you know the answer to a question or how to find it, be sure to reply \u2014 anyone can!"), /* @__PURE__ */ import_react9.default.createElement("p", null, renderBulletPoint("var(--color-secondary)"), /* @__PURE__ */ import_react9.default.createElement(ValueText, {
    color: "var(--color-secondary)"
  }, "Innovation"), "\u2013 When someone shares a concern or challenge, let\u2019s be innovative \u2014 propose a solution or offer support!"), /* @__PURE__ */ import_react9.default.createElement("p", null, renderBulletPoint("#E5C8A6"), /* @__PURE__ */ import_react9.default.createElement(ValueText, {
    color: "#E5C8A6"
  }, "Community"), "\u2013 Remember to treat everyone with dignity and respect. Assume others have good intentions. Always be honest and constructive. Let\u2019s make Wizeline a community where everyone can thrive.")), /* @__PURE__ */ import_react9.default.createElement("p", null, "Consider that other channels: (ticketing portal, Slack, your manager or people partner) might be more effective for finding the right answer quickly."), /* @__PURE__ */ import_react9.default.createElement("p", null, "Thanks for being a valuable contributor to our community! "), /* @__PURE__ */ import_react9.default.createElement("p", null, "The Wize Q Team")), /* @__PURE__ */ import_react9.default.createElement(ModalFooter, null, /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    id: "btnAccept",
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, "Accept")))));
}
ValuesMessageModal.propTypes = {
  onClose: import_prop_types5.default.func.isRequired,
  show: import_prop_types5.default.bool.isRequired
};
var ValuesMessageModal_default = ValuesMessageModal;

// app/components/ListQuestions/ListQuestions.jsx
function ListQuestions({
  questions,
  onFetchMore
}) {
  const submit = useSubmit();
  const transition = useTransition();
  const voteQuestionForm = (0, import_react10.useRef)();
  const profile = useUser_default();
  const [showValuesMessage, setShowValueMessage] = (0, import_react10.useState)(getCookie("showValueMessage"));
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = (0, import_react10.useState)("Newest Questions");
  const valuesMessageModal = showValuesMessage === "true" && /* @__PURE__ */ import_react10.default.createElement(ValuesMessageModal_default, {
    show: showValuesMessage,
    onClose: () => {
      setShowValueMessage(false);
      setCookie("showValueMessage", false);
    }
  });
  const decorateQuestion = (question) => ({
    ...question,
    question: markdownFormatQuestions_default(question.question, void 0),
    hasVoted: !!question.hasVoted
  });
  const clearFilters = (params) => {
    params.forEach((param) => {
      searchParams.delete(param);
    });
    setSearchParams(searchParams);
  };
  const modifyQuery = (field, value) => {
    if (field === "order") {
      if (value === "oldest") {
        setTitle("Oldest Questions");
      } else if (value === "newest") {
        setTitle("Newest Questions");
      } else if (value === "popular") {
        setTitle("Popular Questions");
      } else if (value === "most_commented") {
        setTitle("Most Commented Questions");
      }
    }
    if (value === void 0) {
      searchParams.delete(field);
    } else {
      searchParams.set(field, value);
    }
    setSearchParams(searchParams);
  };
  const displayUsername = (user) => {
    if (!user) {
      return "Anonymous";
    }
    return user.full_name;
  };
  const displayAnsweredBy = (username) => {
    const answeredBy = username ? `Answered by ${username}` : "";
    return answeredBy;
  };
  const renderQuestionsList = () => {
    const onLikeButtonClick = (questionId, isUpVote) => {
      if (transition.state !== "idle") {
        return;
      }
      const data = new FormData(voteQuestionForm.current);
      data.set("action", actions_default.VOTE_QUESTION);
      data.set("questionId", questionId);
      data.set("user", JSON.stringify(profile));
      data.set("isUpVote", isUpVote);
      let actionUrl = "/?index";
      searchParams.forEach((value, key) => {
        actionUrl += value ? `&${key}=${value}` : "";
      });
      submit(data, { method: "post", action: actionUrl, replace: true });
    };
    if (questions.length === 0) {
      return null;
    }
    return questions.map((question, index) => /* @__PURE__ */ import_react10.default.createElement(QuestionCard_default, {
      key: question.question_id,
      question: decorateQuestion(question),
      isAdmin: profile.is_admin,
      displayUsername,
      displayAnsweredBy,
      searchTerm: void 0,
      index,
      onVoteClick: (isUpVote) => onLikeButtonClick(question.question_id, isUpVote),
      processingFormSubmission: transition.state !== "idle"
    }));
  };
  const renderNoResultMessage = () => {
    if (!questions) {
      return "Loading questions...";
    }
    return "There are no questions yet, how about asking one?";
  };
  const generateAskQuestionButton = () => /* @__PURE__ */ import_react10.default.createElement(AskButton, {
    to: "/questions/new",
    id: "ask-button"
  }, "Ask Question");
  return /* @__PURE__ */ import_react10.default.createElement(Container2, null, /* @__PURE__ */ import_react10.default.createElement(LeftWrapper, null, /* @__PURE__ */ import_react10.default.createElement(SloganWrapper, null, /* @__PURE__ */ import_react10.default.createElement(Slogan_default, null))), /* @__PURE__ */ import_react10.default.createElement(CenterWrapper, null, /* @__PURE__ */ import_react10.default.createElement(QuestionsWrapper, null, /* @__PURE__ */ import_react10.default.createElement(AskQuestionButtonWrapper, null, /* @__PURE__ */ import_react10.default.createElement(QuestionsTitle, null, title), generateAskQuestionButton()), questions.length === 0 ? /* @__PURE__ */ import_react10.default.createElement(Alert, null, renderNoResultMessage()) : /* @__PURE__ */ import_react10.default.createElement(InfiniteScrollList_default, {
    onFetch: onFetchMore
  }, /* @__PURE__ */ import_react10.default.createElement(QuestionList, {
    id: "questions-list"
  }, renderQuestionsList(questions))))), /* @__PURE__ */ import_react10.default.createElement(RightWrapper, null, /* @__PURE__ */ import_react10.default.createElement(FiltersWrapper, null, /* @__PURE__ */ import_react10.default.createElement(Filters_default, {
    modifyQuery,
    clearFilters
  }))), /* @__PURE__ */ import_react10.default.createElement(GoToTopButton_default, null), valuesMessageModal);
}
ListQuestions.propTypes = {
  questions: import_prop_types6.default.arrayOf(import_prop_types6.default.shape()),
  onFetchMore: import_prop_types6.default.func.isRequired
};
ListQuestions.defaultProps = {
  questions: []
};
var ListQuestions_default = ListQuestions;

// app/routes/index.jsx
function Index() {
  const { questions: initialQuestions } = useLoaderData();
  const { questionsFAQ: popularQuestions } = useLoaderData();
  const [questions, setQuestions] = (0, import_react13.useState)(initialQuestions);
  const [questionsFAQ, setFAQ] = (0, import_react13.useState)(popularQuestions);
  const fetcher = useFetcher();
  const [shouldFetch, setShouldFetch] = (0, import_react13.useState)(true);
  const [page, setPage] = (0, import_react13.useState)(2);
  const [searchParams] = useSearchParams();
  const onFetchMore = () => {
    if (!shouldFetch)
      return;
    fetcher.load(`/?index&${searchParams.toString()}&page=${page}`);
  };
  (0, import_react13.useEffect)(() => {
    if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length === 0) {
      setShouldFetch(false);
      return;
    }
    if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length > 0) {
      setQuestions((prevQuestions) => [...prevQuestions, ...fetcher.data.questions]);
      setPage((prevPage) => prevPage + 1);
      setShouldFetch(true);
    }
  }, [fetcher.data]);
  (0, import_react13.useEffect)(() => {
    setQuestions(initialQuestions);
    setFAQ(popularQuestions);
    setPage(2);
    setShouldFetch(true);
  }, [initialQuestions, searchParams]);
  return /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react13.default.createElement(Container, null, /* @__PURE__ */ import_react13.default.createElement(ListQuestions_default, {
    type: "all",
    questions,
    onFetchMore
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-RMPW4A33.js.map
