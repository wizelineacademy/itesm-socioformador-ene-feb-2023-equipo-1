import {
  Loader_default
} from "/build/_shared/chunk-RPQVA7VX.js";
import {
  CircleIcon,
  ContainerCounterButton,
  CounterButton_default,
  DateContainer,
  Label_default,
  QuestionCardActions,
  QuestionCardBorder,
  QuestionCardContainer,
  QuestionCardWrapper,
  QuestionMarkdown_default,
  QuestionResponder_default,
  QuestionRow_default,
  QuestionerResponderContainer,
  QuestionerResponderName,
  actions_default,
  commentUtils_default,
  getTimeDiff,
  ic_delete_default,
  ic_dislike_default,
  ic_dislike_pressed_default,
  ic_edit_default,
  ic_like_default,
  ic_like_pressed_default,
  renderAdminButtons,
  renderAnswer,
  renderDepartment,
  shouldRenderAdminButtons
} from "/build/_shared/chunk-L7GAI6VS.js";
import {
  useClickOutside_default
} from "/build/_shared/chunk-5M22U5RX.js";
import {
  MarkdownLinkRenderer_default,
  ReactMarkdown
} from "/build/_shared/chunk-NG3NZK5E.js";
import {
  InputCounter_default,
  shouldShowMarkdownSuggestions,
  validTextLength
} from "/build/_shared/chunk-LBDFOG4Y.js";
import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCheckCircle,
  BsCircleFill,
  BsThreeDotsVertical
} from "/build/_shared/chunk-DKUFPYEM.js";
import {
  Notifications_default
} from "/build/_shared/chunk-5V57YOE4.js";
import {
  addS,
  deleteNoMarkupFormatHTML
} from "/build/_shared/chunk-HZDGKNSJ.js";
import {
  ControlLabel_default,
  DropdownButton_default,
  FormGroup_default,
  MenuItem_default
} from "/build/_shared/chunk-HVOR6U45.js";
import {
  Button_default,
  GenIcon,
  MainButton,
  MdArrowBackIosNew
} from "/build/_shared/chunk-U2RNYPEX.js";
import "/build/_shared/chunk-IT4B5LWP.js";
import {
  useUser_default
} from "/build/_shared/chunk-P7BYWKM6.js";
import "/build/_shared/chunk-UBEID7IU.js";
import {
  ACTIVITY_TIME_QUESTION_COMMENT_SORTING,
  ANONYMOUS_USER,
  ANSWER_DELETE_WARNING_SUBTITLE,
  CANCEL,
  CLOSE_BUTTON,
  COMMENT_EDIT_PLACEHOLDER,
  COMMENT_INPUT_PLACEHOLDER,
  COMMUNITY_ANSWER_TAG_TEXT,
  DANGER_BUTTON,
  DEFAULT_QUESTION_COMMENT_SORTING,
  DELETE_ANSWER,
  DEPARTMENT_PLACEHOLDER,
  DISABLED_BUTTON,
  DISPLAY_TEXT_AFTER_SCORING,
  DISPLAY_TEXT_BEFORE_SCORING,
  HTML_CODE_WARNING,
  LSPIN_SMALL,
  MAXIMUM_ANSWER_LENGTH,
  MINIMUM_ANSWER_LENGTH,
  MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN,
  MINIMUM_WIDTH_TO_SHOW_MARKDOWN,
  MINIMUN_WINDOW_WIDTH,
  MIN_COMMENT_PREVIEW_LENGTH,
  MIN_SHOW_COMMENT_BTN_LENGTH,
  MIN_TEXTAREA_ROWS,
  PRIMARY_BUTTON,
  RECOMMENDATIONS_QUESTION,
  SCORES,
  SECONDARY_BUTTON,
  SUBMIT,
  SUBMIT_ANSWER,
  TEXT_BUTTON,
  UNDO_BUTTON_TEXT,
  UPDATE_ANSWER,
  addAnswerInfo,
  addAnswerMessage,
  answerDeleteWarning,
  editAnswerInfo,
  editAnswerMessage,
  inputPlaceholder,
  require_prop_types
} from "/build/_shared/chunk-VKNNRTVS.js";
import {
  require_session
} from "/build/_shared/chunk-DTXDYIFC.js";
import {
  Ce,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-UPCFJQSK.js";
import {
  init_dist,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-CA4B4QDL.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// browser-route-module:routes\questions\$questionId.jsx?browser
init_react();

// app/routes/questions/$questionId.jsx
init_react();
var import_react27 = __toESM(require_react());
init_dist();

// app/styles/QuestionDetails.Styled.jsx
init_react();
var Container = styled_components_browser_esm_default.div`
background-color: #f4f7f9;
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
padding-top: 30px;
overflow: auto;

@media (max-width: 1025px) {
  flex-direction: column;
  height: auto;
}

@media (max-width: 768px) {
  height: auto;
  overflow: hidden;
}
`;
var BackToHomeQuestion = styled_components_browser_esm_default.div`
flex: 1;

    @media (max-width: 1025px) {
        padding: 20px 0; 
    }

    button {
        padding: 0 24px;
        color: var(--color-secondary);
        font-weight: bolder;
    }
`;
var QuestionDetail = styled_components_browser_esm_default.div`
flex: 2;
height: 100%;
width: 100%;
`;
var RecommendationsContainer = styled_components_browser_esm_default.div`
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 25px 0 20px;
  }
`;
var QuestionRecommendations = styled_components_browser_esm_default.div`
flex: 1;

    @media (max-width: 1025px){
        display:none;
    }
`;
var Recommendations = styled_components_browser_esm_default.div`
background-color: var(--color-secondary-light);
border-radius: 15px;
display: flex;
flex-direction: column;
font-size: 13px;
padding: 20px;

span {
display: flex; 
flex-direction: row;

    &:first-child {
        justify-content: center;
        color: var(--color-secondary);
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 15px;
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
        margin-bottom: 10px;
    }
}
`;

// app/routes/questions/$questionId.jsx
var import_session = __toESM(require_session());

// app/components/QuestionDetail/index.js
init_react();

// app/components/QuestionDetail/QuestionDetail.jsx
init_react();
var import_react23 = __toESM(require_react());
init_dist();
var import_prop_types16 = __toESM(require_prop_types());

// app/components/QuestionCommentList/index.js
init_react();

// app/components/QuestionCommentList/QuestionCommentList.jsx
init_react();
var import_react9 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// app/components/QuestionCommentList/QuestionCommentList.styled.jsx
init_react();
var CommentListContainer = styled_components_browser_esm_default.div`
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    padding: 0 8px;
  }

  & .question-comment {
    @media screen and (max-width: 768px) {
      padding-top: 12px;
    }
  }
`;
var SortSelectorContainer = styled_components_browser_esm_default.div`
  float: right;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 0.6em;
  margin-bottom: 0.8em;
`;
var SortSelectorText = styled_components_browser_esm_default.span`
  font-size: 1.3rem;
  margin-right: 8px;
`;
var CommentListHeader = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-between;
`;

// app/components/QuestionComment/index.js
init_react();

// app/components/QuestionComment/QuestionComment.jsx
init_react();
var import_react5 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// app/components/QuestionComment/QuestionComment.styled.jsx
init_react();

// app/components/CommentInput/CommentInput.styled.jsx
init_react();

// app/components/Atoms/Input/Input.Styled.jsx
init_react();
var InputContainer = styled_components_browser_esm_default.div`
    align-items: top;
    background-color: #fff;
    border-bottom: 1px solid #e2e8ea;
    border-radius: 3px;
    display: flex;
    min-height: 44px;
`;
var InputLeftElement = styled_components_browser_esm_default.div`
`;
var InputRightElement = styled_components_browser_esm_default.div`
`;
var InputElement = styled_components_browser_esm_default.input`
    border: none;
    box-shadow: none;
    display: block;
    font-size: 14px;
    height: 100%;
    width: 100%;
    outline: none;
`;
var TextAreaElement = styled_components_browser_esm_default.textarea`
    border: none;
    box-shadow: none;
    display: block;
    font-size: 14px;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 12px 8px;
    resize: none;
`;

// app/components/CommentInput/CommentInput.styled.jsx
var CommentInputMainContainer = styled_components_browser_esm_default.div`
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgba(225, 229, 233, 0.8);
    padding: 15px 20px 10px;
    position: relative;
    
    &:before {
        content: "";
        position: absolute;
        background-color: #F5F7F9 ;
        left: 0;
        top: 0;
        width: 100%;
        height: 46px;
    }

    @media screen and (max-width: 500px) {
        display: none;
    }

    &.writing-mobile {
        display: block;
        margin-left: unset;
        margin-top: 16px;
        padding: 0;
    }
`;
var CommentInputTextArea = styled_components_browser_esm_default.div`
    display: block;
    position: relative;
    width: 100%;

    ${InputContainer} {
        min-height: 100px;
        background-color: transparent;
        padding-bottom: 10px;
    }

    ${TextAreaElement} {
        background-color: #F5F7F9;
        border-radius: 10px;
        margin-top: 10px;
        margin-left: 10px;
        height: auto;
        min-height: 100px;
    }

    @media screen and (max-width: 767px) {
        min-width: 90px;
    }
`;
var CommentInputTextAreaForm = styled_components_browser_esm_default.div`
    display: flex;
    flex: 1;
`;
var CommentInputOptions = styled_components_browser_esm_default.div`
    padding-bottom: 1%;

    @media (max-width: 500px) {
        display: none;
    }
`;
var CommentInputText = styled_components_browser_esm_default.div`
    display: flex;
    flex: 85%;
    flex-direction: column;

    @media (max-width: 500px) {
        margin-top: 14px;
    }
`;
var CommentInputForm = styled_components_browser_esm_default.form`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 24px 0 0;

    @media (max-width: 500px) {
        padding: 0 16px 0 0;
    }
`;
var CommentInputAuthor = styled_components_browser_esm_default.div`
    display: flex;
    justify-content: center;
    margin: 48px 0 0 16px;

    .open > .dropdown-menu {
        margin-left: 15px;
        width: auto;
        @media (max-width: 500px) {
          margin-left: 0;
          top: 40px;
          height: 100%;
        }
    }
    
    .dropdown-menu > li > a {
        padding: 4px 8px;
    }

    @media (max-width: 500px) {
        margin-top: 60px;
    }
`;
var CommentInputButtonsContainer = styled_components_browser_esm_default.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    @media (max-width: 500px) {
        margin-top: 12px;
    }
`;
var QuestionInputTextPreview = styled_components_browser_esm_default.div`
    display: flex;
    letter-spacing: 0.6px;
    line-height: 1.5;
    padding-bottom: 1%;
    z-index: 999;

    ${MainButton} {
        width: 80px;
        color: var(--color-dark-50);
    }

    @media (max-width: 767px) {
        position: unset;
    }
`;
var QuestionInputTab = styled_components_browser_esm_default.div`
    background-color: transparent;
    width: 80px;
    height: fit-content;
    margin-left: 10px;
    border-radius: 7px 7px 0 0;

    ${(props) => props.selected && Ce`
        background-color: #fff;
    `} 

    ${(props) => props.selected && !props.isNewComment && Ce`
        background-color: #f3f3f3;
        border-radius: 7px;
    `} 

    ${(props) => props.disabled && Ce`
        ${MainButton} {
            color: var(--color-dark-25) !important;
        }
    `} 
`;
var QuestionInputTextPreviewDiv = styled_components_browser_esm_default.div`
    padding: 10px;
    text-align: left;
    word-wrap: break-word;
    width: 100%;
    letter-spacing: 0.6px;
    line-height: 1.71;
    word-wrap: break-word;
    overflow-wrap: break-word;
`;
var AuthorImg = styled_components_browser_esm_default.img`
    box-shadow: 0 0 0 1px var(--color-secondary);
    margin-left: 5px;
    margin-right: 10px;
    height: 40px;
    border-radius: 50%;

    ${(props) => props.variant === "dropdown" ? "height: 32px" : "height: 40px"}
`;
var CommentInputAuthorPictureDiv = styled_components_browser_esm_default.div`
    float: left;
`;
var AuthorNameContainer = styled_components_browser_esm_default.div`
    color: var(--color-dark-50);
    padding-top: 5px;
    text-align: left;
`;
var AuthorNameContainerCaret = styled_components_browser_esm_default.span`
    border-color: transparent transparent var(--color-secondary);
    border-style: solid;
    border-width: 0 0 7.5px 7.5px;
    color: var(--color-secondary);
    margin-left: -16px;
    margin-top: 28px;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
`;
var DropdownButtonStyled = styled_components_browser_esm_default(DropdownButton_default)`
    background-color: #f7f7f7;
    border: unset;
    padding: 0%;
`;

// app/components/QuestionComment/QuestionComment.styled.jsx
var QuestionCommentContainer = styled_components_browser_esm_default.div`
  border-radius: 20px;
  margin-bottom: 24px;
  width: 100%;
  padding-bottom: ${(props) => !props.isDeleting ? "16px" : "10px"};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(225, 229, 233, 0.8);
  padding: 15px 20px 10px;
  ${(props) => props.isDeleting && Ce`border: 1px solid #cd3140;`}
  ${(props) => props.hadApprover && Ce`border: 1px solid var(--color-green-border);`}
  ${(props) => props.isCommunityAnswer && Ce`border: 1px solid var(--color-gold-border);`}

  ${ContainerCounterButton} {
    :hover {
      background-color: transparent;
    }
  }

  &:last-child {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    ${(props) => props.isEditing && `
      position: relative;
    `};
  }
`;
var QuestionCommentMetadata = styled_components_browser_esm_default.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-bottom: 8px;

  p {
    display: flex;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    ${CircleIcon} {
      display: none;
    }

    ${QuestionerResponderContainer} {
      flex-direction: column;
      align-items: flex-start;
    }

    ${QuestionerResponderName} {
      margin-top: -8px;
    }
  }
`;
var QuestionCommentText = styled_components_browser_esm_default.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 1.71;
  padding-left: 43px;

  @media screen and (max-width: 768px) {
    ${(props) => props.isEditing && `
    max-height: 100%;
    overflow-y: auto;
    `};
  }
`;
var QuestionCommentMarkdown = styled_components_browser_esm_default(ReactMarkdown)`
  display: inline;

  p {
    color: var(--color-dark-50);
    margin: 0;
    overflow-wrap: break-word;
  }
`;
var QuestionCommentOptionsWrapper = styled_components_browser_esm_default.div`
  align-items: center;
  display: flex;
`;
var QuestionCommentOptions = styled_components_browser_esm_default.div`
  margin-left: 5px;

  img {
    cursor: pointer;
    height: 15px;
    width: 15px;
  }

  img:first-child {
    margin-right: 16px;
  }
`;
var QuestionCommentDeleteConfirmation = styled_components_browser_esm_default.div`
  align-items: center;
  border-top: 1px solid #e5e5e5;
  display: flex;
  padding-top: 10px;

  p {
    font-family: "NunitoSans Semibold", sans-serif;
    margin-right: auto;
    margin-top: 10px;
  }
`;
var QuestionCommentEdit = styled_components_browser_esm_default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  div {
    line-height: 15px;
    padding-right: unset;
    position: static;
  }
`;
var QuestionCommentShowMore = styled_components_browser_esm_default.span`
  color: var(--color-secondary);
  cursor: pointer;
  display:${(props) => props.isEditing && "none"};
`;
var QuestionCommentButtons = styled_components_browser_esm_default.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  width: fit-content;
    
`;
var QuestionCommentWrapper = styled_components_browser_esm_default.div`
  border-radius: 15px;
  width: 100%;

  ${CommentInputTextArea} {
    @media screen and (max-width: 768px) {
      ${(props) => props.isEditing && `
        height: 200px;
      `};
    }
  }

  @media screen and (max-width: 768px) {
    ${(props) => props.isEditing && `
      background-color: #fff;
      position: fixed;
      padding: 20px 15px;
      border-radius: 0;
      top: 0;
      left: 0;
      z-index: 1000;
      height: 100%;
      width: 100%;
    `};
  }
`;
var QuestionCommentCounterSpan = styled_components_browser_esm_default.span` 
  display: flex;
  justify-content: center;

  ${(props) => props.upVoteActive && `
    color: var(--color-green);
  `};

  ${(props) => props.downVoteActive && `
    color: var(--color-primary);
  `};
`;
var QuestionCommentDotsWrapper = styled_components_browser_esm_default.div`
  cursor: pointer;
`;
var QuestionCommentDate = styled_components_browser_esm_default.div`
  display: flex;
  height: fit-content;
  color: var(--color-dark-metadata);
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  letter-spacing: 0.7px;
`;
var CommentAsAnswerToolTipText = styled_components_browser_esm_default.span`
background-color: black;
border-radius: 6px;
color: #fff;
display: block;
padding: 5px;
position: absolute;
visibility: hidden;
width: 168px;
z-index: 100;

`;
var CommentAsAnswerToolTip = styled_components_browser_esm_default.button`
background-color: transparent;
border: none;
position: relative;
 &:hover ${CommentAsAnswerToolTipText} {
  visibility: visible;
 }
`;
var ArrowUp = styled_components_browser_esm_default.div`
  border-radius: 50%;
  height: 1.8em;
  width: 1.8em;
  margin-right: 5px;

  ${(props) => props.upVoteActive && `
    background-color: var(--color-green-bg);
  `};
`;
var ArrowDown = styled_components_browser_esm_default.div`
  border-radius: 50%;
  height: 1.8em;
  width: 1.8em;
  margin-left: 5px;

  ${(props) => props.downVoteActive && `
    background-color: var(--color-primary-lowOpacity);
  `};
`;
var ApproverName = styled_components_browser_esm_default.span`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: var(--color-green);
`;

// app/images/ic_edit_selected.svg
var ic_edit_selected_default = "/build/_assets/ic_edit_selected-LEMRBASI.svg";

// app/images/ic_delete_selected.svg
var ic_delete_selected_default = "/build/_assets/ic_delete_selected-YSR34BBX.svg";

// app/components/CommentInput/CommentInputText.jsx
init_react();
var import_react4 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// app/components/CommentInput/CommentTextArea.jsx
init_react();
var import_react3 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// app/components/MarkdownFormattingNote/index.js
init_react();

// app/components/MarkdownFormattingNote/MarkdownFormattingNote.jsx
init_react();
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/components/MarkdownFormattingNote/MarkdownFormattingNote.Styled.jsx
init_react();
var Note = styled_components_browser_esm_default.span` 
  align-self: flex-start;
  color: #717274;
  font-size: 10.5px;
  font-size: 0.7em;
  height: 1rem;
  line-height: 1rem;
  margin-top: 3px;
  opacity: ${(props) => props.visible ? 1 : 0};
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;

  > b {
    margin-right: 3px;
  }

  > i {
    margin-right: 3px;
  }

  code {
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
    color: #717274;
    margin-right: 3px;
    &:nth-of-type(2) {
      margin-left: 3px;
    }
  }
  @media screen and (max-width: 767px){
    opacity: 0;
  }
`;

// app/components/MarkdownFormattingNote/MarkdownFormattingNote.jsx
function MarkdownFormattingNote({ visible }) {
  return /* @__PURE__ */ import_react.default.createElement(Note, {
    visible
  }, /* @__PURE__ */ import_react.default.createElement("b", null, "**bold**"), /* @__PURE__ */ import_react.default.createElement("i", null, "_italics_"), "~~strike~~", /* @__PURE__ */ import_react.default.createElement("code", null, "`code`"), /* @__PURE__ */ import_react.default.createElement("code", null, "```preformatted```"), /* @__PURE__ */ import_react.default.createElement("span", null, ">quote"));
}
MarkdownFormattingNote.defaultProps = {
  visible: false
};
MarkdownFormattingNote.propTypes = {
  visible: import_prop_types.default.bool
};
var MarkdownFormattingNote_default = MarkdownFormattingNote;

// app/components/Atoms/Input/index.js
init_react();

// app/components/Atoms/Input/Input.jsx
init_react();
var import_react2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var Input = import_react2.default.forwardRef((props, ref) => {
  const {
    id,
    type,
    classContainer,
    classInput,
    inputLeftElement,
    inputRightElement,
    classLeftElement,
    classRightElement,
    rows,
    ...inputParams
  } = props;
  return /* @__PURE__ */ import_react2.default.createElement(InputContainer, {
    id,
    className: classContainer
  }, inputLeftElement && /* @__PURE__ */ import_react2.default.createElement(InputLeftElement, {
    className: classLeftElement
  }, inputLeftElement), type !== "text-area" && /* @__PURE__ */ import_react2.default.createElement(InputElement, {
    ref,
    className: classInput,
    ...inputParams
  }), type === "text-area" && /* @__PURE__ */ import_react2.default.createElement(TextAreaElement, {
    ref,
    className: classInput,
    rows,
    ...inputParams
  }), inputRightElement && /* @__PURE__ */ import_react2.default.createElement(InputRightElement, {
    className: classRightElement
  }, inputRightElement));
});
Input.displayName = "Input";
var Input_default = Input;
Input.propTypes = {
  id: import_prop_types2.default.string.isRequired,
  type: import_prop_types2.default.string,
  inputParams: {}.isRequired,
  classContainer: import_prop_types2.default.string,
  classInput: import_prop_types2.default.string,
  inputLeftElement: import_prop_types2.default.element,
  inputRightElement: import_prop_types2.default.element,
  classLeftElement: import_prop_types2.default.element,
  classRightElement: import_prop_types2.default.element,
  rows: import_prop_types2.default.number
};
Input.defaultProps = {
  classContainer: "",
  classInput: "",
  type: "text",
  inputLeftElement: null,
  inputRightElement: null,
  classLeftElement: "",
  classRightElement: "",
  rows: 1
};

// app/components/CommentInput/CommentTextArea.jsx
function CommentTextArea({
  inputValue,
  onCommentChange,
  placeholder,
  textAreaRows,
  commentLength
}) {
  CommentTextArea.propTypes = {
    inputValue: import_prop_types3.default.string,
    onCommentChange: import_prop_types3.default.func.isRequired,
    commentLength: import_prop_types3.default.number.isRequired,
    textAreaRows: import_prop_types3.default.number,
    placeholder: import_prop_types3.default.string.isRequired
  };
  CommentTextArea.defaultProps = {
    inputValue: "",
    textAreaRows: MIN_TEXTAREA_ROWS
  };
  return /* @__PURE__ */ import_react3.default.createElement(CommentInputTextArea, null, /* @__PURE__ */ import_react3.default.createElement(Input_default, {
    type: "text-area",
    rows: textAreaRows,
    maxLength: MAXIMUM_ANSWER_LENGTH,
    value: inputValue,
    placeholder,
    onChange: onCommentChange,
    form: "question-submit-form",
    inputRightElement: /* @__PURE__ */ import_react3.default.createElement(InputCounter_default, {
      currentLength: commentLength,
      maxLength: MAXIMUM_ANSWER_LENGTH
    })
  }), /* @__PURE__ */ import_react3.default.createElement(CommentInputOptions, null, /* @__PURE__ */ import_react3.default.createElement(MarkdownFormattingNote_default, {
    visible: shouldShowMarkdownSuggestions(commentLength, MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN, MINIMUN_WINDOW_WIDTH, MINIMUM_WIDTH_TO_SHOW_MARKDOWN)
  })));
}
var CommentTextArea_default = CommentTextArea;

// app/components/CommentInput/CommentInputText.jsx
var CommentInputText2 = (0, import_react4.forwardRef)((props, ref) => {
  const initialState = {
    inputValue: props.inputValue,
    commentLength: props.inputValue ? props.inputValue.trim().length : 0,
    textAreaRows: 2,
    placeholder: COMMENT_INPUT_PLACEHOLDER
  };
  const [commentInput, setCommentInput] = (0, import_react4.useState)(initialState);
  const [canShowPreview, setCanShowPreview] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    setCommentInput({
      ...commentInput,
      inputValue: props.inputValue,
      commentLength: props.inputValue ? props.inputValue.trim().length : 0
    });
  }, [props.inputValue]);
  (0, import_react4.useEffect)(() => {
    setCanShowPreview(commentInput.commentLength > MIN_COMMENT_PREVIEW_LENGTH);
  }, [commentInput.commentLength]);
  (0, import_react4.useImperativeHandle)(ref, () => ({
    resetInputText() {
      setCommentInput({
        ...commentInput,
        inputValue: "",
        commentLength: 0
      });
    }
  }));
  const onCommentChange = (event) => {
    const rawText = event.target.value;
    const commentLength = rawText.trim().length;
    const inputValue = rawText.replace(/^\s+/, "");
    setCommentInput({
      inputValue,
      commentLength,
      textAreaRows: 2,
      placeholder: COMMENT_INPUT_PLACEHOLDER
    });
    props.onInputChange(inputValue);
  };
  const handlePreviewChange = (type) => {
    setCommentInput({
      ...commentInput,
      isShowPreview: !!(type === "preview" && canShowPreview)
    });
  };
  const renderPreviewButton = () => /* @__PURE__ */ import_react4.default.createElement(QuestionInputTextPreview, null, /* @__PURE__ */ import_react4.default.createElement(QuestionInputTab, {
    isNewComment: props.isNewComment,
    selected: !commentInput.isShowPreview
  }, /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    onClick: () => handlePreviewChange("write"),
    className: "preview-button"
  }, "Write")), /* @__PURE__ */ import_react4.default.createElement(QuestionInputTab, {
    isNewComment: props.isNewComment,
    selected: commentInput.isShowPreview,
    disabled: !canShowPreview
  }, /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    onClick: () => handlePreviewChange("preview"),
    className: "preview-button",
    disabled: !canShowPreview
  }, "Preview")));
  const renderCommentPreview = (inputValue) => /* @__PURE__ */ import_react4.default.createElement(QuestionInputTextPreviewDiv, {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react4.default.createElement(QuestionMarkdown_default, {
    source: inputValue
  }));
  const renderInputArea = () => {
    if (commentInput.isShowPreview && commentInput.commentLength > MIN_COMMENT_PREVIEW_LENGTH) {
      return renderCommentPreview(commentInput.inputValue);
    }
    return /* @__PURE__ */ import_react4.default.createElement(CommentTextArea_default, {
      inputValue: commentInput.inputValue,
      onCommentChange,
      textAreaRows: commentInput.textAreaRows,
      commentLength: commentInput.commentLength,
      placeholder: "Add a comment..."
    });
  };
  return /* @__PURE__ */ import_react4.default.createElement(CommentInputText, null, renderPreviewButton(commentInput), renderInputArea(commentInput));
});
CommentInputText2.propTypes = {
  inputValue: import_prop_types4.default.string,
  isNewComment: import_prop_types4.default.bool,
  onInputChange: import_prop_types4.default.func.isRequired
};
CommentInputText2.defaultProps = {
  inputValue: "",
  isNewComment: false
};
var CommentInputText_default = CommentInputText2;

// app/components/QuestionComment/QuestionComment.jsx
function QuestionComment({ commentData, onSubmitSuccess, ...props }) {
  const submit = useSubmit();
  const profile = useUser_default();
  const [isEditing, setIsEditing] = (0, import_react5.useState)(false);
  const [isDeleting, setIsDeleting] = (0, import_react5.useState)(false);
  const [commentHasChanged, setCommentHasChanged] = (0, import_react5.useState)(false);
  const [editIcon, setEditIcon] = (0, import_react5.useState)(ic_edit_default);
  const [deleteIcon, setDeleteIcon] = (0, import_react5.useState)(ic_delete_default);
  const [updatedComment, setUpdatedComment] = (0, import_react5.useState)("");
  const [upVote, setUpVote] = (0, import_react5.useState)(commentData.votes === void 0 ? 0 : Number(commentData.votes));
  const [upVoteActive, setUpVoteActive] = (0, import_react5.useState)(commentData.has_upvoted === void 0 ? false : commentData.has_upvoted);
  const [downVoteActive, setDownVoteActive] = (0, import_react5.useState)(commentData.has_downvoted === void 0 ? false : commentData.has_downvoted);
  const [searchParams] = useSearchParams();
  const isAnswer = props.hasCommentAsAnswer;
  const {
    state: showCommentOptionsState,
    setState: setShowCommentOptions,
    wrapperRef
  } = useClickOutside_default(isEditing || isDeleting);
  function voteComment(comment_id, value) {
    const data = new FormData();
    data.set("action", actions_default.VOTE_COMMENT);
    data.set("comment_id", comment_id);
    data.set("value", value);
    let url = `/questions/${commentData.questionId}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
  }
  function upVoteF() {
    voteComment(commentData.id, 1);
    if (downVoteActive) {
      setDownVoteActive(false);
      setUpVoteActive(true);
      setUpVote(upVote + 2);
    } else if (upVoteActive) {
      setUpVoteActive(false);
      setUpVote(upVote - 1);
    } else {
      setUpVoteActive(true);
      setUpVote(upVote + 1);
    }
  }
  function downVoteF() {
    voteComment(commentData.id, -1);
    if (upVoteActive) {
      setUpVoteActive(false);
      setDownVoteActive(true);
      setUpVote(upVote - 2);
    } else if (downVoteActive) {
      setDownVoteActive(false);
      setUpVote(upVote + 1);
    } else {
      setDownVoteActive(true);
      setUpVote(upVote - 1);
    }
  }
  function markAsAnswer(check) {
    const data = new FormData();
    data.set("action", actions_default.APPROVED_COMMENT);
    data.set("params", JSON.stringify({ questionId: commentData.questionId, commentId: commentData.id, checked: check }));
    let url = `/questions/${commentData.questionId}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
  }
  const onSubmit = () => {
    const newCommentData = {
      commentId: commentData.id,
      comment: updatedComment,
      accessToken: profile.accessToken,
      userEmail: profile.email
    };
    setUpdatedComment("");
    setIsEditing(false);
    setEditIcon(ic_edit_default);
    const data = new FormData();
    data.set("action", actions_default.UPDATE_COMMENT);
    data.set("newCommentData", JSON.stringify(newCommentData));
    let url = `/questions/${commentData.questionId}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
  };
  const changeEditState = () => {
    setIsEditing(!isEditing);
    setIsDeleting(false);
    setEditIcon(isEditing ? ic_edit_default : ic_edit_selected_default);
    setDeleteIcon(ic_delete_default);
  };
  const changeDeleteState = () => {
    setIsDeleting(!isDeleting);
    setIsEditing(false);
    setDeleteIcon(isDeleting ? ic_delete_default : ic_delete_selected_default);
    setEditIcon(ic_edit_default);
  };
  const handleDeleteComment = () => {
    const data = new FormData();
    data.set("action", actions_default.DELETE_COMMENT);
    data.set("comment_id", commentData.id);
    let url = `/questions/${commentData.questionId}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "delete", action: url, replace: true });
  };
  const handleCommentUpdate = (comment2) => {
    const commentChanged = comment2 !== commentData.comment && comment2.length > 2;
    setCommentHasChanged(commentChanged);
    setUpdatedComment(comment2);
  };
  const renderArrowIcon = (direction) => {
    if (direction === "up") {
      return /* @__PURE__ */ import_react5.default.createElement(ArrowUp, {
        upVoteActive
      }, /* @__PURE__ */ import_react5.default.createElement(BsArrowUpCircle, {
        size: "1.8em",
        color: upVoteActive ? "var(--color-green)" : "var(--color-dark-metadata)"
      }));
    }
    return /* @__PURE__ */ import_react5.default.createElement(ArrowDown, {
      downVoteActive
    }, /* @__PURE__ */ import_react5.default.createElement(BsArrowDownCircle, {
      size: "1.8em",
      color: downVoteActive ? "var(--color-primary)" : "var(--color-dark-metadata)"
    }));
  };
  const renderCommentOptions = () => /* @__PURE__ */ import_react5.default.createElement("div", {
    ref: wrapperRef
  }, showCommentOptionsState === true ? /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: editIcon,
    alt: "Edit comment",
    onClick: () => changeEditState()
  }), /* @__PURE__ */ import_react5.default.createElement("img", {
    src: deleteIcon,
    alt: "Delete comment",
    onClick: changeDeleteState
  })) : /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement(QuestionCommentDotsWrapper, {
    onClick: () => setShowCommentOptions(true)
  }, /* @__PURE__ */ import_react5.default.createElement(BsThreeDotsVertical, {
    size: "1.3em"
  }))));
  const renderButtonOption = () => {
    if (props.hasCommentAsAnswer && commentData.approvedBy !== null) {
      return /* @__PURE__ */ import_react5.default.createElement(BsCheckCircle, {
        color: "green",
        size: "20px"
      });
    }
    return /* @__PURE__ */ import_react5.default.createElement(BsCheckCircle, {
      color: "var(--color-dark-25)",
      size: "20px"
    });
  };
  const renderNotAdminOption = () => {
    if (props.hasCommentAsAnswer && commentData.approvedBy !== null) {
      return /* @__PURE__ */ import_react5.default.createElement(BsCheckCircle, {
        color: "green",
        size: "20px"
      });
    }
    return null;
  };
  const renderToolTip = (msg) => /* @__PURE__ */ import_react5.default.createElement(CommentAsAnswerToolTipText, null, msg);
  const renderAdminToolTips = () => {
    if (!props.hasAnswer && !props.hasCommentAsAnswer) {
      return renderToolTip("Click to approve the comment as an answer");
    }
    if (commentData.approvedBy !== null) {
      return renderToolTip("Click to unmark the comment as an answer");
    }
    return null;
  };
  const {
    comment,
    createdAt,
    updatedAt,
    User,
    canEdit
  } = commentData;
  const renderCommunityAnswerLabel = () => props.isCommunityAnswer && /* @__PURE__ */ import_react5.default.createElement(Label_default, {
    type: "Answer",
    text: COMMUNITY_ANSWER_TAG_TEXT
  });
  const renderApproverNameLabel = () => /* @__PURE__ */ import_react5.default.createElement(Label_default, {
    type: "Answer",
    text: "Approved",
    approvedBy: commentData.Approver.full_name
  });
  return /* @__PURE__ */ import_react5.default.createElement(QuestionCommentContainer, {
    hadApprover: commentData.approvedBy,
    isDeleting,
    isEditing,
    isCommunityAnswer: props.isCommunityAnswer
  }, /* @__PURE__ */ import_react5.default.createElement(QuestionCommentButtons, null, /* @__PURE__ */ import_react5.default.createElement(CounterButton_default, {
    selected: upVoteActive,
    icon: renderArrowIcon("up"),
    text: "",
    count: " ",
    onClick: upVoteF
  }), /* @__PURE__ */ import_react5.default.createElement(QuestionCommentCounterSpan, {
    upVoteActive,
    downVoteActive
  }, upVote), /* @__PURE__ */ import_react5.default.createElement(CounterButton_default, {
    selected: downVoteActive,
    icon: renderArrowIcon("down"),
    text: "",
    count: "",
    onClick: downVoteF
  }), commentData.approvedBy !== null && renderApproverNameLabel(), renderCommunityAnswerLabel()), /* @__PURE__ */ import_react5.default.createElement(QuestionCommentWrapper, {
    isDeleting,
    isEditing
  }, /* @__PURE__ */ import_react5.default.createElement(QuestionCommentMetadata, null, /* @__PURE__ */ import_react5.default.createElement(QuestionResponder_default, {
    createdBy: User,
    isUpdated: updatedAt !== null,
    userImgSize: "medium"
  }, /* @__PURE__ */ import_react5.default.createElement(DateContainer, {
    isComment: true,
    hasJobTitle: User.job_title
  }, /* @__PURE__ */ import_react5.default.createElement(CircleIcon, null), /* @__PURE__ */ import_react5.default.createElement(QuestionCommentDate, {
    isAdmin: props.isAdmin,
    hadApprover: commentData.approvedBy
  }, updatedAt && /* @__PURE__ */ import_react5.default.createElement("em", null, "edited"), getTimeDiff(updatedAt || createdAt)))), /* @__PURE__ */ import_react5.default.createElement(QuestionCommentOptionsWrapper, null, props.isAdmin && !props.hasAnswer ? /* @__PURE__ */ import_react5.default.createElement(CommentAsAnswerToolTip, {
    onClick: () => {
      markAsAnswer(!isAnswer);
    },
    disabled: props.hasCommentAsAnswer && commentData.approvedBy === null
  }, renderButtonOption(), renderAdminToolTips()) : /* @__PURE__ */ import_react5.default.createElement(CommentAsAnswerToolTip, null, renderNotAdminOption(), commentData.Approver !== null && renderToolTip("Approved as answer")), canEdit && /* @__PURE__ */ import_react5.default.createElement(QuestionCommentOptions, null, renderCommentOptions()))), /* @__PURE__ */ import_react5.default.createElement(QuestionCommentText, {
    isEditing
  }, !isEditing ? /* @__PURE__ */ import_react5.default.createElement(QuestionCommentMarkdown, {
    children: comment,
    components: { link: MarkdownLinkRenderer_default }
  }) : /* @__PURE__ */ import_react5.default.createElement(QuestionCommentEdit, null, /* @__PURE__ */ import_react5.default.createElement(CommentInputText_default, {
    inputValue: comment,
    placeholder: COMMENT_EDIT_PLACEHOLDER,
    onInputChange: handleCommentUpdate
  }), /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    className: "edit-comment-button",
    onClick: () => {
      changeEditState();
      setShowCommentOptions(false);
    }
  }, "Cancel"), /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    type: "button",
    category: DISABLED_BUTTON,
    className: "edit-comment-button",
    onClick: onSubmit,
    disabled: !commentHasChanged
  }, "Save changes")), isDeleting && /* @__PURE__ */ import_react5.default.createElement(QuestionCommentDeleteConfirmation, null, /* @__PURE__ */ import_react5.default.createElement("p", null, "You are about to delete this comment"), /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: () => {
      changeDeleteState();
      setShowCommentOptions(false);
    }
  }, "Cancel"), /* @__PURE__ */ import_react5.default.createElement(Button_default, {
    type: "button",
    category: DANGER_BUTTON,
    onClick: handleDeleteComment
  }, "Delete")))));
}
QuestionComment.propTypes = {
  commentData: import_prop_types5.default.shape({
    comment: import_prop_types5.default.string.isRequired,
    createdAt: import_prop_types5.default.string.isRequired,
    updatedAt: import_prop_types5.default.string,
    id: import_prop_types5.default.number.isRequired,
    User: import_prop_types5.default.shape({
      email: import_prop_types5.default.string.isRequired,
      full_name: import_prop_types5.default.string.isRequired,
      profile_picture: import_prop_types5.default.string.isRequired,
      job_title: import_prop_types5.default.string
    }),
    Approver: import_prop_types5.default.shape({
      email: import_prop_types5.default.string.isRequired,
      full_name: import_prop_types5.default.string.isRequired,
      profile_picture: import_prop_types5.default.string.isRequired
    }),
    canEdit: import_prop_types5.default.bool.isRequired,
    questionId: import_prop_types5.default.number.isRequired,
    approvedBy: import_prop_types5.default.bool,
    has_upvoted: import_prop_types5.default.bool.isRequired,
    has_downvoted: import_prop_types5.default.bool.isRequired,
    votes: import_prop_types5.default.number.isRequired
  }).isRequired,
  onSubmitSuccess: import_prop_types5.default.func.isRequired,
  isAdmin: import_prop_types5.default.bool.isRequired,
  hasCommentAsAnswer: import_prop_types5.default.bool.isRequired,
  hasAnswer: import_prop_types5.default.bool.isRequired,
  isCommunityAnswer: import_prop_types5.default.bool.isRequired
};
var QuestionComment_default = QuestionComment;

// app/components/SortQuestionCommentsDropdown/index.js
init_react();

// app/components/SortQuestionCommentsDropdown/SortQuestionCommentsDropdown.jsx
init_react();
var import_react7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/react-icons/io/index.esm.js
init_react();
function IoMdArrowDropdown(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 192l128 128 128-128z" } }] })(props);
}

// app/components/SortQuestionCommentsDropdown/SortQuestionCommentsDropdown.styled.jsx
init_react();
var Main = styled_components_browser_esm_default.div`
    font-family: sans-serif;
    background: #f0f0f0;
`;
var DropDownContainer = styled_components_browser_esm_default.div`
    margin: 0;
    position: relative;
`;
var DropDownHeader = styled_components_browser_esm_default.div`
    font-weight: 700;
    font-size: 1.3rem;
    color: #3faffa;
    cursor: pointer;
    display: flex;
    align-items:center;
`;
var DropDownListContainer = styled_components_browser_esm_default.div`
    right: 0;
    position: absolute;
    width: 10em;
    z-index: 999;
`;
var DropDownList = styled_components_browser_esm_default.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
var ListItem = styled_components_browser_esm_default.li`
  list-style: none;
  margin-bottom: 0.8em;
  :hover {
    color: #3faffa;
    cursor: pointer;
  }  
`;

// app/components/SortQuestionCommentsDropdown/SortQuestionCommentsDropdown.jsx
function SortQuestionCommentsDropdown(props) {
  SortQuestionCommentsDropdown.propTypes = {
    onSortCommentsOptionChange: import_prop_types6.default.func.isRequired,
    defaultSortingOptionText: import_prop_types6.default.string.isRequired
  };
  const { onSortCommentsOptionChange, defaultSortingOptionText } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDropdownOpen, setIsDropdownOpen] = (0, import_react7.useState)(false);
  const [selectedOption, setSelectedOption] = (0, import_react7.useState)(defaultSortingOptionText);
  const sortOptions = [
    {
      displayText: "Most voted",
      value: DEFAULT_QUESTION_COMMENT_SORTING
    },
    {
      displayText: "Recent activity",
      value: ACTIVITY_TIME_QUESTION_COMMENT_SORTING
    }
  ];
  (0, import_react7.useEffect)(() => {
    const order = searchParams.get("order");
    const optionSelected = sortOptions.find((v) => v.value === order);
    if (optionSelected) {
      setSelectedOption(optionSelected.displayText);
      onSortCommentsOptionChange(optionSelected.value);
    }
  }, []);
  const onSortSelection = (displayText, value) => async () => {
    setSelectedOption(displayText);
    searchParams.set("order", value);
    setSearchParams(searchParams);
    setIsDropdownOpen(false);
    onSortCommentsOptionChange(value);
  };
  return /* @__PURE__ */ import_react7.default.createElement(DropDownContainer, null, /* @__PURE__ */ import_react7.default.createElement(DropDownHeader, {
    onClick: () => setIsDropdownOpen((prevState) => !prevState)
  }, selectedOption, /* @__PURE__ */ import_react7.default.createElement(IoMdArrowDropdown, null)), isDropdownOpen && /* @__PURE__ */ import_react7.default.createElement(DropDownListContainer, null, /* @__PURE__ */ import_react7.default.createElement(DropDownList, null, sortOptions.map((sortOption) => /* @__PURE__ */ import_react7.default.createElement(ListItem, {
    className: "dropdown-option",
    onClick: onSortSelection(sortOption.displayText, sortOption.value),
    key: sortOption.value
  }, sortOption.displayText)))));
}
var SortQuestionCommentsDropdown_default = SortQuestionCommentsDropdown;

// app/components/QuestionCommentList/QuestionCommentList.jsx
function QuestionCommentList(props) {
  const { comments } = useLoaderData();
  QuestionCommentList.propTypes = {
    questionId: import_prop_types7.default.number.isRequired,
    isAdmin: import_prop_types7.default.bool.isRequired,
    hasAnswer: import_prop_types7.default.bool.isRequired,
    children: import_prop_types7.default.node
  };
  QuestionCommentList.defaultProps = {
    children: null
  };
  const initialState = {
    isLoading: true,
    sortCommentsOption: "votes"
  };
  const { isAdmin, hasAnswer } = props;
  const [, setState] = (0, import_react9.useState)(initialState);
  const renderCommentsList = (_comments) => {
    const [
      communityAnswerCommentId,
      reorderedByPriorityComments
    ] = commentUtils_default(_comments);
    return reorderedByPriorityComments.map((comment) => /* @__PURE__ */ import_react9.default.createElement(QuestionComment_default, {
      ...comment,
      key: comment.id,
      commentData: comment,
      isAdmin,
      hasCommentAsAnswer: comments.some((_comment) => _comment.approvedBy !== null),
      hasAnswer,
      isCommunityAnswer: comment.id === communityAnswerCommentId
    }));
  };
  const sortCommentsOptionChangeHandler = (sortCommentsOption) => {
    setState((prevState) => ({
      isLoading: prevState.isLoading,
      sortCommentsOption
    }));
  };
  const sortCommentsDropdown = /* @__PURE__ */ import_react9.default.createElement(SortSelectorContainer, null, /* @__PURE__ */ import_react9.default.createElement(SortSelectorText, null, "Order by:"), /* @__PURE__ */ import_react9.default.createElement(SortQuestionCommentsDropdown_default, {
    questionId: props.questionId,
    onSortCommentsOptionChange: sortCommentsOptionChangeHandler,
    defaultSortingOptionText: "Most voted"
  }));
  return /* @__PURE__ */ import_react9.default.createElement(CommentListContainer, null, /* @__PURE__ */ import_react9.default.createElement(CommentListHeader, null, props.children, comments.length > 0 && sortCommentsDropdown), renderCommentsList(comments));
}
var QuestionCommentList_default = QuestionCommentList;

// app/components/Modals/AssignAnswerModal/AssignAnswerModal.jsx
init_react();
var import_react11 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// app/components/Modals/AssignAnswerModal/AssignAnswerModal.Styled.jsx
init_react();
var AssignModal = styled_components_browser_esm_default.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1055;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    .job-title {
        font-size: 12px;
    }
`;
var AssignModalDialog = styled_components_browser_esm_default.div`
    position: relative;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    margin: 0 auto;
    max-width: 70vw;
    padding: 24px 24px;
    width: 100%;
    display: block;
    max-height: calc(100vh - 150px);

    @media (max-width: 768px) {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
    }
`;
var ModalHeader = styled_components_browser_esm_default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? `
        border-bottom: 1px solid #e5e5e5;
        padding: 15px;` : `
        border-bottom: none;`}
`;
var ModalBody = styled_components_browser_esm_default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
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
    ${(props) => props.variant === "logout" ? `
        border-top: 1px solid #e5e5e5;
        padding: 15px;text-align: right;` : `
        border-bottom: none;`}
`;
var ModalTitle = styled_components_browser_esm_default.div`
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`;
var SelectContainer = styled_components_browser_esm_default.div`
    background-color: #fff;
    border: solid 1px #e1e5e9;
    box-shadow: 0 3px 6px 0 rgba(225, 229, 233, 0.8);
    height: 56px;
    margin-bottom: 19px;
    padding-left: 0;
    position: relative;
    max-width: 100%;

    & ul {
        max-height:300px;
        overflow-y:scroll;
    }
`;
var CustDropDownButton = styled_components_browser_esm_default(DropdownButton_default)`
  background-color: #fff;
  border: none;
  border-radius: 0;
  color: var(--color-secondary);
  display: inline-block;
  height: 54px;
  letter-spacing: 0.8px;
  line-height: 1.71;
  padding-left: 10px;
  text-overflow: ellipsis;


  &:hover,
  &:active,
  &:focus {
    background-color: #fff;
    box-shadow: none;
    color: var(--color-secondary);
  }

  @media (max-width: 500px) {
    white-space: break-spaces;
  }

  
`;

// app/components/Modals/AssignAnswerModal/AssignAnswerModal.jsx
function AssignAnswerModal(props) {
  const {
    question,
    onClose
  } = props;
  const [departmentsDropdownSelected, setDeparmentsDropdownSelected] = (0, import_react11.useState)(null);
  const [department, setDepartment] = (0, import_react11.useState)({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 });
  const { departments: departmentData } = useLoaderData();
  const submit = useSubmit();
  const transition = useTransition();
  const assignQuestionForm = (0, import_react11.useRef)();
  const resetModal = () => {
    setDeparmentsDropdownSelected(null);
    setDepartment({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 });
    onClose();
  };
  const onDepartmentAssigned = () => {
    resetModal();
    if (transition.state !== "idle") {
      return;
    }
    const data = new FormData(assignQuestionForm.current);
    data.set("action", actions_default.ASSIGN_QUESTION);
    data.set("questionId", question.question_id);
    data.set("assigned_department", department.department_id);
    submit(data, { method: "post", action: `/questions/${question.question_id}`, replace: true });
    setDepartment({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 });
  };
  const selectDepartmentIndex = (selectedDepartment) => departmentData.findIndex((department1) => selectedDepartment.department_id === department1.department_id);
  const handleDepartmentSelectChange = (selectedDepartment) => {
    const selectedDepartmentIndex = selectDepartmentIndex(selectedDepartment);
    setDeparmentsDropdownSelected(departmentData[selectedDepartmentIndex]);
    setDepartment(departmentData[selectedDepartmentIndex]);
  };
  const isSubmitEnabled = () => departmentsDropdownSelected;
  const renderDepartmentOptions = () => departmentData.map((department2) => /* @__PURE__ */ import_react11.default.createElement(MenuItem_default, {
    eventKey: department2,
    key: department2.department_id
  }, department2.name));
  const renderDepartmentSelectBox = () => /* @__PURE__ */ import_react11.default.createElement(FormGroup_default, {
    controlId: "formControlsSelectMultiple"
  }, /* @__PURE__ */ import_react11.default.createElement(ControlLabel_default, null, "Specify which department you think your question should be addressed to:"), /* @__PURE__ */ import_react11.default.createElement(SelectContainer, null, /* @__PURE__ */ import_react11.default.createElement(CustDropDownButton, {
    bsStyle: "default",
    title: department.name,
    onSelect: handleDepartmentSelectChange,
    id: "dropdown"
  }, renderDepartmentOptions())));
  if (!question) {
    return null;
  }
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    id: "main",
    onClick: resetModal
  }, /* @__PURE__ */ import_react11.default.createElement(AssignModal, {
    show: true
  }, /* @__PURE__ */ import_react11.default.createElement(AssignModalDialog, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: resetModal
  }), /* @__PURE__ */ import_react11.default.createElement(ModalHeader, null, /* @__PURE__ */ import_react11.default.createElement(ModalTitle, null, "Reassign question Q", question.question_id)), /* @__PURE__ */ import_react11.default.createElement(ModalBody, null, renderDepartmentSelectBox()), /* @__PURE__ */ import_react11.default.createElement(ModalFooter, null, /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: resetModal
  }, "Cancel"), /* @__PURE__ */ import_react11.default.createElement(Button_default, {
    category: DISABLED_BUTTON,
    value: "Submit",
    disabled: !isSubmitEnabled(),
    onClick: onDepartmentAssigned
  }, "Reassign Question")))));
}
AssignAnswerModal.propTypes = {
  question: import_prop_types8.default.shape(),
  onClose: import_prop_types8.default.func.isRequired
};
AssignAnswerModal.defaultProps = {
  question: null
};
var AssignAnswerModal_default = AssignAnswerModal;

// app/components/CommentInput/CommentInput.jsx
init_react();
var import_react14 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// app/components/CommentInput/CommentInputAuthor.jsx
init_react();
var import_react13 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
function CommentInputAuthor2(props) {
  const {
    anonymousUsername,
    anonymousProfilePicture,
    profilePicture,
    selectPostingAs
  } = props;
  const profile = useUser_default();
  const renderUserProfile = ({ full_name, profile_picture }) => full_name && /* @__PURE__ */ import_react13.default.createElement(MenuItem_default, {
    eventKey: full_name
  }, /* @__PURE__ */ import_react13.default.createElement(AuthorImg, {
    variant: "dropdown",
    src: profile_picture
  }), full_name);
  const renderDropdownTitle = () => /* @__PURE__ */ import_react13.default.createElement("div", null, /* @__PURE__ */ import_react13.default.createElement(CommentInputAuthorPictureDiv, null, /* @__PURE__ */ import_react13.default.createElement(AuthorImg, {
    src: profilePicture
  })), /* @__PURE__ */ import_react13.default.createElement(AuthorNameContainer, null, /* @__PURE__ */ import_react13.default.createElement(AuthorNameContainerCaret, null)));
  return /* @__PURE__ */ import_react13.default.createElement(CommentInputAuthor, null, /* @__PURE__ */ import_react13.default.createElement(DropdownButtonStyled, {
    bsStyle: "default",
    title: renderDropdownTitle(),
    onSelect: selectPostingAs,
    noCaret: true,
    dropup: true
  }, renderUserProfile(profile), /* @__PURE__ */ import_react13.default.createElement(MenuItem_default, {
    eventKey: anonymousUsername
  }, /* @__PURE__ */ import_react13.default.createElement(AuthorImg, {
    variant: "dropdown",
    src: anonymousProfilePicture
  }), "Anonymous")));
}
CommentInputAuthor2.propTypes = {
  anonymousUsername: import_prop_types9.default.string,
  anonymousProfilePicture: import_prop_types9.default.string,
  profilePicture: import_prop_types9.default.string.isRequired,
  selectPostingAs: import_prop_types9.default.func.isRequired
};
CommentInputAuthor2.defaultProps = {
  anonymousUsername: ANONYMOUS_USER.username,
  anonymousProfilePicture: ANONYMOUS_USER.profilePicture
};
var CommentInputAuthor_default = CommentInputAuthor2;

// app/components/CommentInput/CommentInput.jsx
function CommentInput(props) {
  const submit = useSubmit();
  const { setWritingCommentOnMobile } = props;
  const profile = useUser_default();
  const initialState = {
    comment: "",
    isCommenting: false,
    isCommentingError: false,
    isCommentingSuccess: false,
    isCommentingWarning: false,
    isAnonymous: false,
    warnings: [],
    profilePicture: profile.profile_picture,
    inputValue: "",
    isShowPreview: false
  };
  const [comment, setComment] = (0, import_react14.useState)(initialState);
  const [searchParams] = useSearchParams();
  const openSubmitWithModal = (warning) => {
    setComment((state) => ({
      warnings: [
        ...state.warnings,
        warning
      ]
    }));
  };
  const CommentInputTextRef = (0, import_react14.useRef)();
  const resetForm = () => {
    setComment((state) => ({
      ...state,
      isCommenting: false,
      isCommentingError: false,
      isCommentingSuccess: false,
      isCommentingWarning: false,
      isAnonymous: false,
      profilePicture: profile.profile_picture,
      warnings: [],
      inputValue: "",
      isShowPreview: false
    }));
    CommentInputTextRef.current.resetInputText();
  };
  const onSubmit = async (event) => {
    const { questionId } = props;
    event.preventDefault();
    const inputValue = comment.inputValue.trim();
    const sanitizedInput = deleteNoMarkupFormatHTML(inputValue);
    if (inputValue !== sanitizedInput) {
      openSubmitWithModal(HTML_CODE_WARNING);
    }
    const commentToSubmit = {
      comment: sanitizedInput,
      questionId,
      user: {
        accessToken: profile.accessToken,
        userEmail: profile.email,
        userName: profile.full_name
      },
      isAnonymous: comment.isAnonymous
    };
    const data = new FormData();
    data.set("action", actions_default.CREATE_COMMENT);
    data.set("commentToSubmit", JSON.stringify(commentToSubmit));
    let url = `/questions/${questionId}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
    resetForm();
    setWritingCommentOnMobile(false);
  };
  const onInputChange = (inputValue) => {
    setComment((state) => ({
      ...state,
      inputValue
    }));
  };
  const getAuthor = () => {
    if (comment.isAnonymous) {
      return ` as ${ANONYMOUS_USER.username}`;
    }
    const name = profile.full_name.split(" ")[0];
    if (name) {
      return ` as ${name}`;
    }
    return "";
  };
  const selectPostingAs = (username) => {
    const isAnonymous = username === ANONYMOUS_USER.username;
    const profilePicture2 = isAnonymous ? ANONYMOUS_USER.profilePicture : profile.profile_picture;
    setComment((state) => ({
      ...state,
      isAnonymous,
      profilePicture: profilePicture2
    }));
  };
  const renderButtons = () => {
    const commentLength = comment.inputValue ? comment.inputValue.length : 0;
    return (commentLength >= MIN_SHOW_COMMENT_BTN_LENGTH || props.isWritingCommentMobile) && /* @__PURE__ */ import_react14.default.createElement(CommentInputButtonsContainer, null, /* @__PURE__ */ import_react14.default.createElement(Button_default, {
      type: "button",
      category: SECONDARY_BUTTON,
      onClick: () => {
        resetForm();
        setWritingCommentOnMobile(false);
      }
    }, "Cancel"), /* @__PURE__ */ import_react14.default.createElement(Button_default, {
      type: "submit",
      category: PRIMARY_BUTTON,
      form: "comment-form"
    }, "Post", getAuthor()));
  };
  const { profilePicture } = comment;
  return /* @__PURE__ */ import_react14.default.createElement(CommentInputMainContainer, {
    className: `${props.isWritingCommentMobile ? "writing-mobile" : ""}`
  }, /* @__PURE__ */ import_react14.default.createElement(CommentInputForm, {
    id: "comment-form",
    onSubmit
  }, /* @__PURE__ */ import_react14.default.createElement(CommentInputTextAreaForm, null, /* @__PURE__ */ import_react14.default.createElement(CommentInputAuthor_default, {
    profilePicture,
    selectPostingAs
  }), /* @__PURE__ */ import_react14.default.createElement(CommentInputText_default, {
    ref: CommentInputTextRef,
    onInputChange,
    resetInputText: resetForm,
    isNewComment: true
  })), renderButtons()));
}
CommentInput.propTypes = {
  questionId: import_prop_types10.default.number,
  isWritingCommentMobile: import_prop_types10.default.bool,
  setWritingCommentOnMobile: import_prop_types10.default.func
};
CommentInput.defaultProps = {
  questionId: null,
  isWritingCommentMobile: false,
  setWritingCommentOnMobile: () => {
  }
};
var CommentInput_default = CommentInput;

// app/components/Modals/AnswerModal/AnswerModal.jsx
init_react();
var import_react18 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// app/components/AnswerInputText/AnswerInputText.jsx
init_react();
var import_react17 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// app/components/AnswerInputText/AnswerTextArea.jsx
init_react();
var import_react16 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// app/components/AnswerInputText/AnswerInputText.Styled.jsx
init_react();
var CommentInputText3 = styled_components_browser_esm_default.div`
    display: flex;
    flex: 85%;
    flex-direction: column;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
    }
`;
var CommentInputTextArea2 = styled_components_browser_esm_default.div`
    display: block;
    position: relative;
    width: 100%;
`;
var CommentInputOptions2 = styled_components_browser_esm_default.div`
    padding-bottom: 1%;

    @media (max-width: 500px) {
        display: none;
    }
`;

// app/components/AnswerInputText/AnswerTextArea.jsx
function AnswerTextArea(props) {
  return /* @__PURE__ */ import_react16.default.createElement(CommentInputTextArea2, null, /* @__PURE__ */ import_react16.default.createElement(Input_default, {
    type: "text-area",
    rows: props.textAreaRows,
    maxLength: MAXIMUM_ANSWER_LENGTH,
    placeholder: inputPlaceholder(MINIMUM_ANSWER_LENGTH),
    value: props.inputValue,
    onChange: props.onAnswerChange,
    form: "question-submit-form",
    ref: props.inputRef,
    inputRightElement: /* @__PURE__ */ import_react16.default.createElement(InputCounter_default, {
      currentLength: props.answerLength,
      maxLength: MAXIMUM_ANSWER_LENGTH
    })
  }), /* @__PURE__ */ import_react16.default.createElement(CommentInputOptions2, null, /* @__PURE__ */ import_react16.default.createElement(MarkdownFormattingNote_default, {
    visible: shouldShowMarkdownSuggestions(props.answerLength, MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN, window.innerWidth, MINIMUM_WIDTH_TO_SHOW_MARKDOWN)
  })));
}
AnswerTextArea.propTypes = {
  inputValue: import_prop_types11.default.string.isRequired,
  onAnswerChange: import_prop_types11.default.func.isRequired,
  answerLength: import_prop_types11.default.number,
  textAreaRows: import_prop_types11.default.number,
  inputRef: import_prop_types11.default.func
};
AnswerTextArea.defaultProps = {
  answerLength: 0,
  textAreaRows: 1,
  inputRef: () => {
  }
};
var AnswerTextArea_default = AnswerTextArea;

// app/components/AnswerInputText/AnswerInputText.jsx
function AnswerInputText(props) {
  AnswerInputText.propTypes = {
    minRows: import_prop_types12.default.number,
    inputValue: import_prop_types12.default.string,
    answerLength: import_prop_types12.default.number,
    onInputChange: import_prop_types12.default.func.isRequired
  };
  AnswerInputText.defaultProps = {
    minRows: MIN_TEXTAREA_ROWS,
    inputValue: "",
    answerLength: 0
  };
  const initialAnswerState = {
    inputValue: props.inputValue,
    answerLength: props.answerLength,
    textAreaRows: props.minRows
  };
  const [answerState, setAnswerState] = (0, import_react17.useState)(initialAnswerState);
  const onAnswerChange = (event) => {
    const rawText = event.target.value;
    const answerLength = rawText.trim().length;
    const inputValue = rawText.replace(/^\s+/, "");
    setAnswerState({
      inputValue,
      answerLength,
      textAreaRows: answerLength > 0 ? answerLength : props.minRows
    });
    props.onInputChange(inputValue);
  };
  const setTextInputRef = (element) => {
    this.textInput = element;
  };
  const handlePreviewChange = () => {
    setAnswerState({ ...answerState, isShowPreview: !answerState.isShowPreview });
  };
  const renderPreviewButton = ({
    answerLength,
    isShowPreview
  }) => answerLength > MINIMUM_ANSWER_LENGTH && /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "preview-button",
    onClick: handlePreviewChange
  }, isShowPreview ? "Edit answer" : "Show preview"));
  const renderAnswerPreview = (inputValue) => /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react17.default.createElement(QuestionMarkdown_default, {
    source: inputValue
  }));
  const renderInputArea = () => {
    const { inputValue, answerLength, isShowPreview } = answerState;
    if (isShowPreview && answerLength > MINIMUM_ANSWER_LENGTH) {
      return renderAnswerPreview(inputValue);
    }
    return /* @__PURE__ */ import_react17.default.createElement(AnswerTextArea_default, {
      inputValue,
      onAnswerChange,
      setTextInputRef,
      textAreaRows: answerState.minRows,
      answerLength
    });
  };
  return /* @__PURE__ */ import_react17.default.createElement(CommentInputText3, null, renderPreviewButton(answerState), renderInputArea(answerState));
}
var AnswerInputText_default = AnswerInputText;

// app/components/Modals/AnswerModal/AnswerModal.Styled.jsx
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
    ${(props) => props.variant === "submit" ? "padding: 0px 24px;max-width: 55vw;" : "padding: 24px 24px;max-width: 70vw;"}

    @media (max-width: 768px) {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
    }
`;
var ModalBody2 = styled_components_browser_esm_default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
`;
var ModalFooter2 = styled_components_browser_esm_default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-top: 1px solid #e5e5e5;padding: 15px;text-align: right;" : "border-bottom: none;"}
`;
var ModalHeader2 = styled_components_browser_esm_default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`;
var ModalTitle2 = styled_components_browser_esm_default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`;
var ModalSubtitle = styled_components_browser_esm_default.div`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`;

// app/components/Modals/AnswerModal/AnswerModal.jsx
function AnswerModal(props) {
  AnswerModal.propTypes = {
    question: import_prop_types13.default.shape(),
    onClose: import_prop_types13.default.func.isRequired,
    openAssignAnswerModal: import_prop_types13.default.func.isRequired
  };
  AnswerModal.defaultProps = {
    question: null
  };
  const submit = useSubmit();
  const transition = useTransition();
  const submitAnswerForm = (0, import_react18.useRef)();
  const profile = useUser_default();
  const [searchParams] = useSearchParams();
  const initialState = {
    Answer: props.question.Answer ? props.question.Answer : "",
    isAnswering: false,
    sanitizedInput: props.question.Answer ? deleteNoMarkupFormatHTML(props.question.Answer.answer_text) : ""
  };
  const [answerData, setAnswerData] = (0, import_react18.useState)(initialState);
  const onAnswerChange = (answer) => {
    setAnswerData({
      ...answerData,
      sanitizedInput: deleteNoMarkupFormatHTML(answer)
    });
  };
  const getQuestionAuthor = (question2) => {
    if (!question2.is_anonymous && question2.created_by) {
      return question2.created_by.full_name;
    }
    return ANONYMOUS_USER.username;
  };
  const onSubmitAnswer = () => {
    if (transition.state !== "idle") {
      return;
    }
    const {
      question: question2,
      onClose
    } = props;
    const answerValue = answerData.sanitizedInput;
    const answerValueNoHTML = deleteNoMarkupFormatHTML(answerValue);
    if (answerValue !== answerValueNoHTML) {
      return;
    }
    const action = question2.Answer ? actions_default.UPDATE_QUESTION_ANSWER : actions_default.CREATE_QUESTION_ANSWER;
    const data = new FormData(submitAnswerForm.current);
    data.set("action", action);
    if (question2.Answer) {
      data.set("answerId", question2.Answer.answer_id);
    } else {
      data.set("employee_id", profile.employee_id);
      data.set("questionId", question2.question_id);
    }
    data.set("answer", answerValueNoHTML);
    onClose();
    let url = `/questions/${question2.question_id}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, {
      method: "post",
      action: url,
      replace: true
    });
  };
  const renderSecondaryButton = () => {
    if (props.question.Answer) {
      return /* @__PURE__ */ import_react18.default.createElement(Button_default, {
        type: "button",
        category: SECONDARY_BUTTON,
        onClick: props.onClose
      }, CANCEL);
    }
    return null;
  };
  const renderAnswerSubtitle = ({ question: question2, question: { Answer: Answer2 } }) => {
    if (Answer2) {
      return editAnswerInfo(Answer2.AnsweredBy.full_name, getTimeDiff(Answer2.answered_at));
    }
    return addAnswerInfo(getQuestionAuthor(question2), getTimeDiff(question2.createdAt));
  };
  const {
    question,
    question: { question_id }
  } = props;
  const { Answer } = question;
  const sanitizedInputLength = answerData.sanitizedInput.length;
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    onClick: props.onClose
  }, /* @__PURE__ */ import_react18.default.createElement(Modal, {
    show: true,
    hide: props.onClose
  }, /* @__PURE__ */ import_react18.default.createElement(ModalDialog, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react18.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: props.onClose
  }), /* @__PURE__ */ import_react18.default.createElement(ModalHeader2, null, /* @__PURE__ */ import_react18.default.createElement(ModalTitle2, null, Answer ? editAnswerMessage(question_id) : addAnswerMessage(question_id)), /* @__PURE__ */ import_react18.default.createElement(QuestionMarkdown_default, {
    source: question.question
  }), /* @__PURE__ */ import_react18.default.createElement(ModalSubtitle, null, renderAnswerSubtitle(props))), /* @__PURE__ */ import_react18.default.createElement(ModalBody2, null, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react18.default.createElement(AnswerInputText_default, {
    inputValue: Answer ? Answer.answer : "",
    onInputChange: onAnswerChange
  })))), /* @__PURE__ */ import_react18.default.createElement(ModalFooter2, null, renderSecondaryButton(), /* @__PURE__ */ import_react18.default.createElement(Button_default, {
    id: "submitAnswerBtn",
    category: DISABLED_BUTTON,
    onClick: onSubmitAnswer,
    value: SUBMIT,
    disabled: !validTextLength(sanitizedInputLength, MINIMUM_ANSWER_LENGTH, MAXIMUM_ANSWER_LENGTH)
  }, props.question.Answer ? UPDATE_ANSWER : SUBMIT_ANSWER)))));
}
var AnswerModal_default = AnswerModal;

// app/components/Modals/DeleteAnswerModal/DeleteAnswerModal.jsx
init_react();
var import_react20 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// app/components/Modals/DeleteAnswerModal/DeleteAnswerModal.Styled.jsx
init_react();
var Modal2 = styled_components_browser_esm_default.div` 
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
var ModalDialog2 = styled_components_browser_esm_default.div`
    position: relative;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin: 0 auto;
    padding: 48px 24px 24px;
    max-width: 70vw;
    display: block;
    max-height: calc(100vh - 150px);
    overflow-y: auto;
    ${(props) => props.variant === "submit" ? "padding: 0px 24px;max-width: 55vw;" : "padding: 24px 24px;max-width: 70vw;"}

    @media (max-width: 768px) {
        max-height: 99%;
        max-width: 80%;
    }

    @media (max-width: 576px) {
        max-height: 99%;
        max-width: 90%;
    }
`;
var ModalHeader3 = styled_components_browser_esm_default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`;
var ModalInfo = styled_components_browser_esm_default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #4e5154;
`;
var ModalTitle3 = styled_components_browser_esm_default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`;
var ModalSubtitle2 = styled_components_browser_esm_default.div`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`;
var ModalFooter3 = styled_components_browser_esm_default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-top: 1px solid #e5e5e5;padding: 15px;text-align: right;" : "border-bottom: none;"}
`;

// app/components/Modals/DeleteAnswerModal/DeleteAnswerModal.jsx
function DeleteAnswerModal({
  question,
  onClose
}) {
  const submit = useSubmit();
  const transition = useTransition();
  const deleteAnswerForm = (0, import_react20.useRef)();
  const [searchParams] = useSearchParams();
  const onDeleteAnswer = () => {
    if (transition.state !== "idle") {
      return;
    }
    const data = new FormData(deleteAnswerForm.current);
    data.set("action", actions_default.DELETE_ANSWER);
    data.set("answerId", question.Answer.answer_id);
    onClose();
    let url = `/questions/${question.question_id}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, {
      method: "post",
      action: url,
      replace: true
    });
  };
  return /* @__PURE__ */ import_react20.default.createElement("div", {
    onClick: onClose
  }, /* @__PURE__ */ import_react20.default.createElement(Modal2, {
    show: true
  }, /* @__PURE__ */ import_react20.default.createElement(ModalDialog2, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react20.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: onClose
  }), /* @__PURE__ */ import_react20.default.createElement(ModalHeader3, null, /* @__PURE__ */ import_react20.default.createElement(ModalInfo, null, /* @__PURE__ */ import_react20.default.createElement(ModalTitle3, null, answerDeleteWarning(question.question_id)), /* @__PURE__ */ import_react20.default.createElement(ModalSubtitle2, null, ANSWER_DELETE_WARNING_SUBTITLE))), /* @__PURE__ */ import_react20.default.createElement(ModalFooter3, null, /* @__PURE__ */ import_react20.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, CANCEL), /* @__PURE__ */ import_react20.default.createElement(Button_default, {
    type: "button",
    category: DANGER_BUTTON,
    onClick: onDeleteAnswer
  }, DELETE_ANSWER)))));
}
DeleteAnswerModal.propTypes = {
  question: import_prop_types14.default.shape(),
  onClose: import_prop_types14.default.func.isRequired
};
DeleteAnswerModal.defaultProps = {
  question: null
};
var DeleteAnswerModal_default = DeleteAnswerModal;

// app/components/NetPromoterScoreRow/NetPromoterScoreRow.jsx
init_react();
var import_react22 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// app/components/NetPromoterScoreRow/NetPromoterScoreRow.styled.jsx
init_react();
var NpsRowContainer = styled_components_browser_esm_default.div`
  background-color: var(--color-secondary);
  border-radius: 15px; 
  border: solid 1px rgba(80, 165, 231, 0.8);
  box-shadow: 0 3px 6px 0 rgba(225, 229, 233, 0.8);
  padding: 20px 24px 16px;
  width: 100%;

  > div {
    display: inline-block;
  }
`;
var NpsRowDisplayText = styled_components_browser_esm_default.div`
  color: #fff;
  font-family: "Nunito";
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 1.71;
  vertical-align: top;
  width: 253px;

  p {
    padding-bottom: 0;
  }
`;
var NpsRowOptionsContainer = styled_components_browser_esm_default.div`
  padding-left: 0;
  width: auto;
  height: auto;

  .nps-row__option--container {
    color: #fff;
    cursor: pointer;
    font-family: "Nunito";
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .nps-row__option--container p {
    margin-bottom: 8px;
    width: 60px;
  }

  .nps-row__option--container input {
    cursor: pointer;
  }

  .nps-row__options--container label {
    margin-bottom: 0;
    margin-left: 32px;
  }

  .custom-radio {
    background-color: #fff;
    border-radius: 50%;
    display: block;
    height: 16px;
    margin: 0 auto;
    width: 16px;
  }

  .nps-row__option--container:hover input ~ .custom-radio {
    box-shadow: 0 0 0 2px var(--color-secondary-active);
  }

  .nps-row__option--container input:checked ~ .custom-radio {
    background-color: #fff;
  }

  .custom-radio::after {
    content: "";
    display: none;
    position: absolute;
  }

  .nps-row__option--container input:checked ~ .custom-radio::after {
    display: block;
  }

  .nps-row__option--container .custom-radio::after {
    background: #a2abaf;
    border-radius: 50%;
    height: 10px;
    margin: 3px;
    width: 10px;
  }

  .nps-row--container.invisible > div {
    width: auto;
  }
`;

// app/components/NetPromoterScoreRow/NetPromoterScoreRow.jsx
function NetPromoterScoreRow(props) {
  const {
    answer_id,
    hasScored,
    canUndoNps,
    scoreAnswer,
    deleteScore
  } = props;
  const [scored, setScored] = (0, import_react22.useState)(hasScored);
  const [selectedOption, setSelectedOption] = (0, import_react22.useState)(void 0);
  const [undoNps, setUndoNps] = (0, import_react22.useState)(canUndoNps);
  const [selected, setSelected] = (0, import_react22.useState)(false);
  const sendScore = () => {
    const score = selectedOption;
    if (selected) {
      scoreAnswer(score, answer_id);
      setScored(true);
    }
  };
  const handleOptionsClick = (score) => {
    setSelectedOption(score);
    setUndoNps(true);
    setSelected(true);
  };
  const handleUndoClick = () => {
    deleteScore(answer_id);
    setScored(false);
    setSelected(false);
    setSelectedOption("");
  };
  const generateSendButton = () => /* @__PURE__ */ import_react22.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "send-button",
    onClick: () => sendScore()
  }, "Send");
  const generateUndoButton = (canUndoNps_) => canUndoNps_ && /* @__PURE__ */ import_react22.default.createElement(Button_default, {
    id: "nps-undo-btn",
    type: "button",
    category: TEXT_BUTTON,
    className: "undo-button",
    onClick: () => handleUndoClick()
  }, UNDO_BUTTON_TEXT);
  function NpsRating() {
    return /* @__PURE__ */ import_react22.default.createElement(NpsRowOptionsContainer, null, SCORES.map((score) => /* @__PURE__ */ import_react22.default.createElement("label", {
      key: score.name,
      className: "nps-row__option--container",
      htmlFor: `choice${score.value}`
    }, /* @__PURE__ */ import_react22.default.createElement("p", null, score.name), /* @__PURE__ */ import_react22.default.createElement("input", {
      type: "radio",
      name: "score",
      checked: selectedOption === score.value,
      onClick: () => handleOptionsClick(score.value)
    }))), generateSendButton());
  }
  return /* @__PURE__ */ import_react22.default.createElement(NpsRowContainer, null, /* @__PURE__ */ import_react22.default.createElement(NpsRowDisplayText, null, /* @__PURE__ */ import_react22.default.createElement("p", null, scored ? DISPLAY_TEXT_AFTER_SCORING : DISPLAY_TEXT_BEFORE_SCORING)), "\b", scored ? generateUndoButton(undoNps) : NpsRating());
}
NetPromoterScoreRow.propTypes = {
  answer_id: import_prop_types15.default.number.isRequired,
  hasScored: import_prop_types15.default.bool.isRequired,
  canUndoNps: import_prop_types15.default.bool.isRequired,
  scoreAnswer: import_prop_types15.default.func.isRequired,
  deleteScore: import_prop_types15.default.func.isRequired
};
var NetPromoterScoreRow_default = NetPromoterScoreRow;

// app/components/QuestionDetail/QuestionDetail.Styled.jsx
init_react();
var Container2 = styled_components_browser_esm_default.div`
display: flex;
justify-content: center;
`;
var QuestionDetail2 = styled_components_browser_esm_default.div`
border-radius: 15px;
width: 100%;
margin-bottom: 30px

`;
var CounterButtonsWrapper = styled_components_browser_esm_default.div`
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        padding-left: 10px;
    }
`;
var NumComments = styled_components_browser_esm_default.div`
    color: var(--color-dark-50);
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        padding-left: 20px;
    }
`;
var QuestionDetailHeader = styled_components_browser_esm_default.div`
    padding: 24px 20px 0;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;
var QuestionDetailBody = styled_components_browser_esm_default.div`
    padding: 24px 20px 0;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;
var QuestionDetailFooter = styled_components_browser_esm_default.div`
    padding: 24px 20px 0;
`;

// app/images/logomark_small.png
var logomark_small_default = "/build/_assets/logomark_small-AOD5XB2M.png";

// app/components/QuestionDetail/QuestionDetail.jsx
function QuestionDetails(props) {
  const submit = useSubmit();
  const transition = useTransition();
  const voteQuestionForm = (0, import_react23.useRef)();
  const profile = useUser_default();
  const isAdmin = profile.is_admin;
  const currentUserEmail = profile.email;
  const { question } = props;
  const initialState = {
    showAnswerModal: false,
    showAssignAnswerModal: false,
    showDeleteAnswerModal: false
  };
  const [state, setState] = (0, import_react23.useState)(initialState);
  const [writingCommentOnMobile, setWritingCommentOnMobile] = (0, import_react23.useState)(false);
  const [searchParams] = useSearchParams();
  const { questionId } = useParams();
  const addComment = () => {
    setWritingCommentOnMobile(true);
  };
  const renderQuestionButtons = () => {
    const onLikeButtonClick = (isUpVote) => {
      if (transition.state !== "idle") {
        return;
      }
      const data = new FormData(voteQuestionForm.current);
      data.set("action", actions_default.VOTE_QUESTION);
      data.set("questionId", question.question_id);
      data.set("user", JSON.stringify(profile));
      data.set("isUpVote", isUpVote);
      let url = `/questions/${question.question_id}`;
      const urlSearchParam = searchParams.get("order");
      url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
      submit(data, {
        method: "post",
        action: url,
        replace: true
      });
    };
    const icon = !question.hasLike ? ic_like_default : ic_like_pressed_default;
    const dislikeicon = !question.hasDislike ? ic_dislike_default : ic_dislike_pressed_default;
    return /* @__PURE__ */ import_react23.default.createElement(CounterButtonsWrapper, {
      isAdmin,
      hasAnswer: question.Answer
    }, /* @__PURE__ */ import_react23.default.createElement(CounterButton_default, {
      selected: question.hasLike,
      icon,
      count: question.numLikes,
      processingFormSubmission: transition.state !== "idle",
      onClick: () => {
        onLikeButtonClick(true);
      },
      isDisabled: question.hasDislike
    }), /* @__PURE__ */ import_react23.default.createElement(CounterButton_default, {
      selected: question.hasDislike,
      icon: dislikeicon,
      count: question.numDisklike,
      processingFormSubmission: transition.state !== "idle",
      onClick: () => {
        onLikeButtonClick(false);
      },
      isDisabled: question.hasLike
    }));
  };
  const renderNumCommentsRow = () => /* @__PURE__ */ import_react23.default.createElement(NumComments, null, question.numComments, " ", addS("Comment", question.numComments));
  const openAssignAnswerModal = () => {
    setState({
      ...state,
      showAssignAnswerModal: true
    });
  };
  const openAnswerModal = () => {
    setState({
      ...state,
      showAnswerModal: true
    });
  };
  const openDeleteAnswerModal = () => {
    setState({
      ...state,
      showDeleteAnswerModal: true
    });
  };
  const handleAnswerModalClose = () => {
    setState({
      ...state,
      showAnswerModal: false
    });
  };
  const handleDeleteAnswerModalClose = () => {
    setState({ ...state, showDeleteAnswerModal: false });
  };
  const answerModal = state.showAnswerModal ? /* @__PURE__ */ import_react23.default.createElement(AnswerModal_default, {
    question,
    onClose: handleAnswerModalClose,
    openAssignAnswerModal
  }) : null;
  const deleteAnswerModal = state.showDeleteAnswerModal ? /* @__PURE__ */ import_react23.default.createElement(DeleteAnswerModal_default, {
    question,
    onClose: handleDeleteAnswerModalClose
  }) : null;
  const scoreAnswer = (score, answer_id) => {
    const data = new FormData();
    data.set("score", score);
    data.set("answer_id", answer_id);
    data.set("action", actions_default.SCORE_ANSWER);
    let url = `/questions/${question.question_id}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
  };
  const deleteScore = (answer_id) => {
    const data = new FormData();
    data.set("answer_id", answer_id);
    data.set("action", actions_default.DELETE_SCORE);
    let url = `/questions/${question.question_id}`;
    const urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    submit(data, { method: "post", action: url, replace: true });
  };
  const renderNPS = (answer) => answer && answer.AnsweredBy.email !== currentUserEmail && /* @__PURE__ */ import_react23.default.createElement("div", null, /* @__PURE__ */ import_react23.default.createElement(NetPromoterScoreRow_default, {
    answer_id: answer.answer_id,
    hasScored: !!answer.hasScored,
    canUndoNps: !!answer.canUndoNps,
    scoreAnswer,
    deleteScore
  }));
  const isEmpty = (obj) => Object.keys(obj).length === 0;
  const handleAssignAnswerModalClose = () => {
    setState({ ...state, showAssignAnswerModal: false });
  };
  const handleAssignAnswerModalSubmitSuccess = () => {
    setState({
      ...state,
      showAssignAnswerModal: false,
      showAnswerModal: false
    });
  };
  const assignAnswerModal = state.showAssignAnswerModal ? /* @__PURE__ */ import_react23.default.createElement(AssignAnswerModal_default, {
    question,
    onClose: handleAssignAnswerModalClose,
    onSubmitSuccess: handleAssignAnswerModalSubmitSuccess
  }) : null;
  return /* @__PURE__ */ import_react23.default.createElement(Container2, null, !isEmpty(question) && question.question_id === parseInt(questionId, 10) && isAdmin !== void 0 ? /* @__PURE__ */ import_react23.default.createElement(QuestionDetail2, null, /* @__PURE__ */ import_react23.default.createElement(QuestionDetailHeader, null, /* @__PURE__ */ import_react23.default.createElement(QuestionCardContainer, null, /* @__PURE__ */ import_react23.default.createElement(QuestionCardWrapper, null, /* @__PURE__ */ import_react23.default.createElement(QuestionCardBorder, null, /* @__PURE__ */ import_react23.default.createElement(QuestionRow_default, {
    question,
    isFromList: false
  }), /* @__PURE__ */ import_react23.default.createElement(QuestionCardActions, {
    hasDetail: true,
    hasAnswer: question.Answer,
    isQuestionModalOpen: true
  }, renderQuestionButtons(), shouldRenderAdminButtons(question, isAdmin) && renderAdminButtons({
    question,
    onAnswerClick: () => {
      setState({ ...state, showAnswerModal: true });
    },
    onAssignAnswerClick: () => {
      openAssignAnswerModal(question);
    }
  })))), renderAnswer({
    Answer: question.Answer,
    isAdmin,
    currentUserEmail,
    onAnswerClick: () => {
      openAnswerModal(question);
    },
    openDeleteAnswerModal: () => {
      openDeleteAnswerModal(question);
    },
    question,
    isQuestionModalOpen: true,
    isFromList: false
  })), renderNPS(question.Answer)), /* @__PURE__ */ import_react23.default.createElement(QuestionDetailBody, null, /* @__PURE__ */ import_react23.default.createElement(QuestionCommentList_default, {
    questionId: parseInt(questionId, 10),
    isAdmin,
    hasAnswer: question.Answer !== null
  }, renderNumCommentsRow())), /* @__PURE__ */ import_react23.default.createElement(QuestionDetailFooter, {
    className: writingCommentOnMobile ? "writing-mobile" : ""
  }, /* @__PURE__ */ import_react23.default.createElement(Button_default, {
    type: "button",
    category: PRIMARY_BUTTON,
    className: writingCommentOnMobile ? "writing-mobile" : "add-comment-button",
    onClick: addComment
  }, "Add Comment"), /* @__PURE__ */ import_react23.default.createElement(CommentInput_default, {
    isWritingCommentMobile: writingCommentOnMobile,
    setWritingCommentOnMobile,
    questionId: parseInt(questionId, 10)
  }))) : /* @__PURE__ */ import_react23.default.createElement(Loader_default, {
    src: logomark_small_default,
    size: LSPIN_SMALL
  }), answerModal, deleteAnswerModal, assignAnswerModal);
}
QuestionDetails.propTypes = {
  question: import_prop_types16.default.shape({
    question_id: import_prop_types16.default.number.isRequired,
    question: import_prop_types16.default.string.isRequired,
    user_hash: import_prop_types16.default.string,
    can_edit: import_prop_types16.default.bool,
    AnsweredBy: import_prop_types16.default.shape({
      email: import_prop_types16.default.string,
      employee_id: import_prop_types16.default.number,
      full_name: import_prop_types16.default.string,
      is_admin: import_prop_types16.default.bool,
      job_title: import_prop_types16.default.string,
      profile_picture: import_prop_types16.default.string
    }),
    createdAt: import_prop_types16.default.string.isRequired,
    location: import_prop_types16.default.string.isRequired,
    numComments: import_prop_types16.default.number.isRequired,
    hasVoted: import_prop_types16.default.bool.isRequired,
    Answer: import_prop_types16.default.shape({
      answer: import_prop_types16.default.string,
      answer_id: import_prop_types16.default.number.isRequired,
      answered_at: import_prop_types16.default.string,
      answered_by_id: import_prop_types16.default.number,
      hasScored: import_prop_types16.default.bool,
      canUndoNps: import_prop_types16.default.bool
    }),
    mostUpvoted: import_prop_types16.default.bool,
    numLikes: import_prop_types16.default.number.isRequired,
    numDisklike: import_prop_types16.default.number.isRequired,
    hasLike: import_prop_types16.default.bool.isRequired,
    hasDislike: import_prop_types16.default.bool.isRequired
  })
};
QuestionDetails.defaultProps = {
  question: null
};
var QuestionDetail_default = QuestionDetails;

// app/components/QuestionDetailInfo/index.js
init_react();

// app/components/QuestionDetailInfo/QuestionDetailInfo.jsx
init_react();
var import_react25 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// app/components/QuestionDetailInfo/QuestionDetailInfo.Styled.jsx
init_react();
var QuestionDetailInfoContainer = styled_components_browser_esm_default.div`
  padding: 0 50px;
  margin-top: 10px;
  margin-left: 10px;
`;
var QuestionDetailInfoSection = styled_components_browser_esm_default.div`
  border-bottom: 1px solid var(--color-dark-25);
  padding: 15px 10px;
`;
var QuestionDetailInfoTitle = styled_components_browser_esm_default.span`
  display: flex;
  margin-bottom: 15px;
  color: var(--color-dark-50);
  font-weight: 600;
  font-size: 12px;
`;
var NotAssigned = styled_components_browser_esm_default.span`
  font-size: 12px;
  color: var(--color-dark-25);
`;

// app/components/QuestionDetailInfo/QuestionDetailInfo.jsx
function QuestionDetailInfo({ location, department, employeeName }) {
  const { locations } = useLoaderData();
  const renderLocation = (_location, _locations) => {
    if (_locations.length === 0) {
      return "...";
    }
    return _locations.find((loc) => loc.code === location).name;
  };
  return /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoContainer, null, /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoTitle, null, "Location"), /* @__PURE__ */ import_react25.default.createElement(Label_default, {
    text: renderLocation(location, locations),
    type: "Location"
  })), /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoTitle, null, "Department"), department ? /* @__PURE__ */ import_react25.default.createElement(Label_default, {
    text: renderDepartment(department),
    type: "Department"
  }) : /* @__PURE__ */ import_react25.default.createElement(NotAssigned, null, "Not Assigned")), employeeName && /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react25.default.createElement(QuestionDetailInfoTitle, null, "Assigned to"), /* @__PURE__ */ import_react25.default.createElement(Label_default, {
    text: employeeName,
    type: "Employee"
  })));
}
QuestionDetailInfo.propTypes = {
  location: import_prop_types17.default.string.isRequired,
  department: import_prop_types17.default.string.isRequired,
  employeeName: import_prop_types17.default.string.isRequired
};
var QuestionDetailInfo_default = QuestionDetailInfo;

// app/routes/questions/$questionId.jsx
function QuestionDetailPage() {
  var _a;
  const { question } = useLoaderData();
  const navigate = useNavigate();
  const renderBulletPoint = () => {
    /* @__PURE__ */ import_react27.default.createElement("div", null, /* @__PURE__ */ import_react27.default.createElement(BsCircleFill, {
      color: "var(--color-secondary)",
      size: "7px",
      style: { marginTop: "3px", marginRight: "10px" }
    }));
  };
  return /* @__PURE__ */ import_react27.default.createElement(Container, null, /* @__PURE__ */ import_react27.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react27.default.createElement(BackToHomeQuestion, null, /* @__PURE__ */ import_react27.default.createElement(Button_default, {
    onClick: () => {
      navigate(-1);
    }
  }, /* @__PURE__ */ import_react27.default.createElement("strong", null, /* @__PURE__ */ import_react27.default.createElement(MdArrowBackIosNew, {
    style: { verticalAlign: "middle" }
  }), " ", "Back", " ")), /* @__PURE__ */ import_react27.default.createElement(QuestionDetailInfo_default, {
    location: question.location,
    department: question.Department,
    employeeName: (_a = question.assigned_to) == null ? void 0 : _a.full_name
  })), /* @__PURE__ */ import_react27.default.createElement(QuestionDetail, null, /* @__PURE__ */ import_react27.default.createElement(QuestionDetail_default, {
    question
  })), /* @__PURE__ */ import_react27.default.createElement(QuestionRecommendations, null, /* @__PURE__ */ import_react27.default.createElement(RecommendationsContainer, null, /* @__PURE__ */ import_react27.default.createElement(Recommendations, null, /* @__PURE__ */ import_react27.default.createElement("span", null, " Things to keep in mind"), /* @__PURE__ */ import_react27.default.createElement("span", null, renderBulletPoint(), COMMENT_INPUT_PLACEHOLDER), RECOMMENDATIONS_QUESTION.map((text, index) => /* @__PURE__ */ import_react27.default.createElement("span", {
    key: index
  }, renderBulletPoint(), text))))));
}
var questionId_default = QuestionDetailPage;
export {
  questionId_default as default
};
//# sourceMappingURL=/build/routes/questions/$questionId-6KWVSX2I.js.map
