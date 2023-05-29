import {
  init_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/utils/constants.js
init_react();
var MAXIMUM_ANSWER_LENGTH = 3e3;
var MAXIMUM_QUESTION_LENGTH = 500;
var MINIMUM_QUESTION_LENGTH = 14;
var MINIMUM_ANSWER_LENGTH = 14;
var MAXIMUM_MESSAGE_LENGTH = 3e3;
var MAXIUMUM_EMAIL_LENGTH = 320;
var MAXIMUM_NAME_LENGTH = 50;
var MAXIMUM_REASON_LENGTH = 7;
var QUESTION_LENGHT_RESTRICTIONS = `Question must be between ${MINIMUM_QUESTION_LENGTH} and ${MAXIMUM_QUESTION_LENGTH} characters`;
var answerDeleteWarning = (questionId) => `You're about to delete the answer to question Q${questionId}`;
var ANSWER_DELETE_WARNING_SUBTITLE = "Do you want to continue?";
var IDENTITY_MESSAGE = "You are about to post a question";
var CONTACT_WARNING = "Please enter all fields";
var HTML_CODE_WARNING = "Your input contains some HTML code without the correct Markdown format, so it will be removed if submitted. If you want to keep the HTML code please encapsulate it like `<html>markup</html>`";
var DEFAULT_ACCESS_VALUE = "value";
var DEFAULT_LOCATION_ACCESS_VALUE = "code";
var SORTING_OPTIONS = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Popular", value: "popular" },
  { name: "Most Commented", value: "most_commented" }
];
var DEFAULT_SORTING_OPT = SORTING_OPTIONS[0];
var SORTING_ACCESS_VALUE = DEFAULT_ACCESS_VALUE;
var DATE_RANGE_OPTIONS = [
  { name: "All", value: "all" },
  { name: "Today", value: "today" },
  { name: "This week", value: "this_week" },
  { name: "This month", value: "this_month" }
];
var DATE_RANGE_LABEL = "Date range";
var DEFAULT_DATE_RANGE_OPT = DATE_RANGE_OPTIONS[0];
var DATE_RANGE_ACCESS_VALUE = DEFAULT_ACCESS_VALUE;
var STATUS_OPTIONS = [
  { name: "All", value: "all" },
  { name: "Answered", value: "answered" },
  { name: "Not Answered", value: "not_answered" }
];
var STATUS_LABEL = "Status";
var DEFAULT_STATUS_OPT = STATUS_OPTIONS[0];
var STATUS_ACCESS_VALUE = DEFAULT_ACCESS_VALUE;
var DEPARTMENT_OPTIONS = [
  { department_id: -1, name: "All" },
  { department_id: 0, name: "Not Assigned" }
];
var DEPARTMENT_LABEL = "Department";
var DEFAULT_DEPARTMENT_OPT = DEPARTMENT_OPTIONS[0];
var DEFAULT_DEPARTMENT_ID = DEFAULT_DEPARTMENT_OPT.department_id;
var DEPARTMENT_ACCESS_VALUE = "department_id";
var LOCATION_LABEL = "Location";
var DEFAULT_LOCATION = "ALL";
var LOCATION_ACCESS_VALUE = DEFAULT_LOCATION_ACCESS_VALUE;
var DEFAULT_LOCATION_OPT = { name: "All", code: DEFAULT_LOCATION };
var DEFAULT_QUESTION_COMMENT_SORTING = "votes";
var ACTIVITY_TIME_QUESTION_COMMENT_SORTING = "activityTime";
var ANONYMOUS_USER = {
  username: "Anonymous",
  profilePicture: "/anonymous.png"
};
var ANSWER_LENGTH_EXCEEDED = `The maximum length is ${MAXIMUM_ANSWER_LENGTH} characters`;
var SHOW_MORE_TEXT = "Show more";
var SHOW_LESS_TEXT = "Show less";
var COLLAPSED_QUESTION_MIN_LENGTH = 130;
var COLLAPSED_ANSWER_MIN_LENGTH = 130;
var DEPARTMENT_NOT_ASSIGNED = "Not Assigned";
var COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD = 10;
var COMMUNITY_ANSWER_TAG_TEXT = "Community answer";
var CONTACT_REASONS_LIST = [
  { value: "default", reason: "I want to" },
  { value: "bug", reason: "Report a bug" },
  { value: "feature", reason: "Suggest new feature" },
  { value: "join", reason: "Join the WizeQ team" },
  { value: "vibes", reason: "Send Good Vibes!" }
];
var CONTACT_REASONS_MAP = {
  default: "I want to",
  bug: "Report a bug",
  feature: "Suggest a new feature",
  join: "Join the WizeQ team",
  vibes: "Send Good Vibes!"
};
var FOOTER_MESSAGE = "Proudly powered by Wizeline new hires as part of their technical on-boarding process";
var MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN = 2;
var MINIMUM_WIDTH_TO_SHOW_MARKDOWN = 767;
var MINIMUN_WINDOW_WIDTH = 768;
var editAnswerMessage = (questionId) => `Edit answer to question Q${questionId}?`;
var editAnswerInfo = (fullName, timeDiff) => `Question answered by ${fullName}, ${timeDiff}`;
var addAnswerInfo = (fullName, timeDiff) => `Question asked by ${fullName}, ${timeDiff}`;
var addAnswerMessage = (questionId) => `Do you have the answer to question Q${questionId}?`;
var CANCEL = "Cancel";
var SUBMIT = "Submit";
var DELETE_ANSWER = "Delete Answer";
var SUBMIT_ANSWER = "Submit Answer";
var UPDATE_ANSWER = "Update Answer";
var ANSWER = "ANSWER";
var REASSIGN = "REASSIGN";
var HIGHLIGHT_START = "HIGHLIGHT_START_INDICATOR";
var HIGHLIGHT_END = "HIGHLIGHT_END_INDICATOR";
var inputPlaceholder = (minCharacters) => `Type at least ${minCharacters} characters`;
var MIN_TEXTAREA_ROWS = 1;
var MIN_COMMENT_PREVIEW_LENGTH = 3;
var MIN_SHOW_COMMENT_BTN_LENGTH = 2;
var COMMENT_INPUT_PLACEHOLDER = "Add a comment and remember, we are all nice Wizeline collaborators.";
var COMMENT_EDIT_PLACEHOLDER = "Your comment can't be empty";
var LSPIN_SMALL = "SMALL";
var LSPIN_MEDIUM = "MEDIUM";
var LSPIN_LARGE = "LARGE";
var SCORES = [
  { name: "Strongly Disagree", value: 1 },
  { name: "Disagree", value: 2 },
  { name: "Agree", value: 3 },
  { name: "Strongly Agree", value: 4 }
];
var DISPLAY_TEXT_BEFORE_SCORING = "Do you consider the answer solves the question?";
var DISPLAY_TEXT_AFTER_SCORING = "Thanks for your feedback!";
var UNDO_BUTTON_TEXT = "Undo";
var DISABLED_ANSWER_ICONS_TOOLTIP_MESSAGE = "You can not modify an already scored answer";
var NO_DEPARTMENT_SELECTED_TOOLTIP_MESSAGE = "Select a department";
var MIN_CHARS_QUESTION_INPUT_TOOLTIP_MESSAGE = inputPlaceholder(MINIMUM_QUESTION_LENGTH);
var DEFAULT_MESSAGE_END_QUESTION_INPUT_TOOLTIP = "to ask a question.";
var NO_LOCATIONS_AVAILABLE_TOOLTIP_MESSAGE = "There are no locations";
var BACK_TO_TOP = "Back to top";
var NONE_LOCATION = "NONE";
var DEFAULT_LOCATION_MESSAGE = "As you have not selected a location for your question, it will be posted to all locations.";
var ALL_LOCATIONS_MESSAGE = "This question will be posted to all locations. Are you sure?";
var LOCATION_WARNING = "This question will be posted to: ";
var DEPARTMENT_PLACEHOLDER = "Select a department";
var NO_DEPARTMENT_SELECTED_ID = -1;
var NOT_ASSIGNED_DEPARTMENT_ID = 0;
var PRIMARY_BUTTON = "primary_button";
var SECONDARY_BUTTON = "secondary_button";
var DISABLED_BUTTON = "disabled_button";
var DANGER_BUTTON = "danger_button";
var TEXT_BUTTON = "text_button";
var CLOSE_BUTTON = "close_button";
var ICON_BUTTON = "icon_button";
var DEFAULT_TOAST_CONFIG = {
  position: "top-right",
  autoClose: 2e3,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: void 0
};
var RECOMMENDATIONS_QUESTION = [
  "Strive for constructive open communication. Avoid vagueness.",
  "Do not demean or degrade others because of their gender, race, age, religion, etc.",
  "Avoid posting questions that include sexually explicit comments, hate speech, prejudicial remarks, and profanity.",
  "Do not mock other members, their comments, profiles, threads, or experiences. Remember, what is funny for you may be offensive to others."
];

export {
  MAXIMUM_ANSWER_LENGTH,
  MAXIMUM_QUESTION_LENGTH,
  MINIMUM_QUESTION_LENGTH,
  MINIMUM_ANSWER_LENGTH,
  MAXIMUM_MESSAGE_LENGTH,
  MAXIUMUM_EMAIL_LENGTH,
  MAXIMUM_NAME_LENGTH,
  MAXIMUM_REASON_LENGTH,
  answerDeleteWarning,
  ANSWER_DELETE_WARNING_SUBTITLE,
  IDENTITY_MESSAGE,
  CONTACT_WARNING,
  HTML_CODE_WARNING,
  SORTING_OPTIONS,
  DEFAULT_SORTING_OPT,
  SORTING_ACCESS_VALUE,
  DATE_RANGE_OPTIONS,
  DATE_RANGE_LABEL,
  DEFAULT_DATE_RANGE_OPT,
  DATE_RANGE_ACCESS_VALUE,
  STATUS_OPTIONS,
  STATUS_LABEL,
  DEFAULT_STATUS_OPT,
  STATUS_ACCESS_VALUE,
  DEPARTMENT_OPTIONS,
  DEPARTMENT_LABEL,
  DEFAULT_DEPARTMENT_OPT,
  DEPARTMENT_ACCESS_VALUE,
  LOCATION_LABEL,
  DEFAULT_LOCATION,
  LOCATION_ACCESS_VALUE,
  DEFAULT_LOCATION_OPT,
  DEFAULT_QUESTION_COMMENT_SORTING,
  ACTIVITY_TIME_QUESTION_COMMENT_SORTING,
  ANONYMOUS_USER,
  SHOW_MORE_TEXT,
  SHOW_LESS_TEXT,
  COLLAPSED_QUESTION_MIN_LENGTH,
  COLLAPSED_ANSWER_MIN_LENGTH,
  DEPARTMENT_NOT_ASSIGNED,
  COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD,
  COMMUNITY_ANSWER_TAG_TEXT,
  CONTACT_REASONS_LIST,
  CONTACT_REASONS_MAP,
  FOOTER_MESSAGE,
  MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN,
  MINIMUM_WIDTH_TO_SHOW_MARKDOWN,
  MINIMUN_WINDOW_WIDTH,
  editAnswerMessage,
  editAnswerInfo,
  addAnswerInfo,
  addAnswerMessage,
  CANCEL,
  SUBMIT,
  DELETE_ANSWER,
  SUBMIT_ANSWER,
  UPDATE_ANSWER,
  ANSWER,
  REASSIGN,
  HIGHLIGHT_START,
  HIGHLIGHT_END,
  inputPlaceholder,
  MIN_TEXTAREA_ROWS,
  MIN_COMMENT_PREVIEW_LENGTH,
  MIN_SHOW_COMMENT_BTN_LENGTH,
  COMMENT_INPUT_PLACEHOLDER,
  COMMENT_EDIT_PLACEHOLDER,
  LSPIN_SMALL,
  LSPIN_MEDIUM,
  LSPIN_LARGE,
  SCORES,
  DISPLAY_TEXT_BEFORE_SCORING,
  DISPLAY_TEXT_AFTER_SCORING,
  UNDO_BUTTON_TEXT,
  DISABLED_ANSWER_ICONS_TOOLTIP_MESSAGE,
  NO_DEPARTMENT_SELECTED_TOOLTIP_MESSAGE,
  MIN_CHARS_QUESTION_INPUT_TOOLTIP_MESSAGE,
  DEFAULT_MESSAGE_END_QUESTION_INPUT_TOOLTIP,
  NO_LOCATIONS_AVAILABLE_TOOLTIP_MESSAGE,
  BACK_TO_TOP,
  NONE_LOCATION,
  DEFAULT_LOCATION_MESSAGE,
  ALL_LOCATIONS_MESSAGE,
  LOCATION_WARNING,
  DEPARTMENT_PLACEHOLDER,
  NO_DEPARTMENT_SELECTED_ID,
  NOT_ASSIGNED_DEPARTMENT_ID,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  DISABLED_BUTTON,
  DANGER_BUTTON,
  TEXT_BUTTON,
  CLOSE_BUTTON,
  ICON_BUTTON,
  DEFAULT_TOAST_CONFIG,
  RECOMMENDATIONS_QUESTION
};
//# sourceMappingURL=/build/_shared/chunk-P6WCU7WC.js.map
