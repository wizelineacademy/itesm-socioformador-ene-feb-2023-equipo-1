import {
  __default
} from "/build/_shared/chunk-ZJYHTA2X.js";
import {
  AiOutlineSearch
} from "/build/_shared/chunk-UK7JQ2MH.js";
import {
  Loader_default
} from "/build/_shared/chunk-RPQVA7VX.js";
import {
  Notifications_default
} from "/build/_shared/chunk-5V57YOE4.js";
import {
  DropdownButton_default,
  Pagination_default,
  UserImage_default
} from "/build/_shared/chunk-A27YXTH3.js";
import {
  Button_default,
  MdClose
} from "/build/_shared/chunk-U2RNYPEX.js";
import "/build/_shared/chunk-AOIRIE2A.js";
import "/build/_shared/chunk-UBEID7IU.js";
import {
  ICON_BUTTON,
  LSPIN_MEDIUM,
  PRIMARY_BUTTON,
  SECONDARY_BUTTON,
  require_prop_types
} from "/build/_shared/chunk-VKNNRTVS.js";
import {
  require_session
} from "/build/_shared/chunk-DTXDYIFC.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-UPCFJQSK.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-CA4B4QDL.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// browser-route-module:routes\admin.jsx?browser
init_react();

// app/routes/admin.jsx
init_react();
var import_react7 = __toESM(require_react());
var import_session = __toESM(require_session());

// app/styles/Admin.Styled.jsx
init_react();
var Container = styled_components_browser_esm_default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto;
  width: 90vw;

  @media (max-width: 576px) {
    flex-direction: column;

    h2 {
      margin-bottom: 30px;
    }
  }
`;

// app/components/AdminUsersTable/index.js
init_react();

// app/components/AdminUsersTable/AdminUsersTable.jsx
init_react();
var import_react4 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// app/images/logomark_medium.png
var logomark_medium_default = "/build/_assets/logomark_medium-U2FGMSIX.png";

// app/utils/hooks/usePagination.js
init_react();
var import_react = __toESM(require_react());
var DOTS = "...";
var range = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, idx) => idx + start);
};
function usePagination({
  currentPage,
  totalPages
}) {
  const pagintationRange = (0, import_react.useMemo)(() => {
    const totalPageCount = totalPages;
    const sibilingCount = 1;
    const totalPageNumbers = 2 + sibilingCount;
    if (totalPageNumbers > totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - sibilingCount, 1);
    const rigthSiblingIndex = Math.min(currentPage + sibilingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRigthDots = rigthSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRigthDots) {
      const leftItemCount = 5 * sibilingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRigthDots) {
      const rigthItemsCount = 5 * sibilingCount;
      const rigthRange = range(totalPageCount - rigthItemsCount, totalPageCount + 1);
      return [firstPageIndex, DOTS, ...rigthRange];
    }
    const middleRange = range(leftSiblingIndex, rigthSiblingIndex + 1);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }, [currentPage, totalPages]);
  return pagintationRange;
}

// app/components/AdminUsersTable/AdminUsersTable.Styled.jsx
init_react();
var TableContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem auto;
  width: 90vw;
  select {
    width: 10rem;
    border-radius: 5px;
    background-color: #fff;
    border: 1px solid #d3d3d4;
    border-radius: 15px;
    padding: 1px 4px;
    margin: 1rem 0;
    &:focus {
      outline: none;
    }
  }
`;
var UserTable = styled_components_browser_esm_default.table`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem auto;
  border-radius: 9px;
  border: 1px solid #f2efed;
  tr {
    justify-content: space-between;
  }
  @media (max-width: 481px) {
    .table-desktop-view {
      display: none;
    }
  }
`;
var RowTable = styled_components_browser_esm_default.tr`
  padding: 0.5rem 0;
  border: 1px solid #f2efed;
  .row-btn {
    margin: 0;
  }
  td {
    min-width: 18vw;
    max-width: 18.01vw;
    text-align: left;
    padding: 0 0.8rem;
    overflow-wrap: break-word;
    div {
      margin: 0.3 auto;
      display: flex;
      align-items: center;
    }
  }
  img {
    margin: 0.8rem;
    width: 2.5rem;
    border-radius: 50%;
  }
  @media (max-width: 767px) {
    td {
      min-width: 17.5vw;
      max-width: 17.51vw;
      text-align: left;
      padding: 0 0.8rem;
      overflow-wrap: break-word;
    }
    div {
      margin: 0.3 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      margin: 0.3rem;
      width: 2rem;
    }
  }
  @media (max-width: 481px) {
    .table-desktop-view {
      display: none;
    }
    td {
      min-width: 45.5vw;
      max-width: 45.51vw;
      text-align: left;
      padding: 0 0.8rem;
      overflow-wrap: break-word;
    }
    div {
      flex-direction: row;
    }
  }
`;
var HeaderTable = styled_components_browser_esm_default.tr`
  background-color: #f4f7f9;
  padding: 1rem 0;
  th {
    font-size: 1.5rem;
    min-width: 18vw;
    max-width: 18.01vw;
    color: #524f4e;
    margin: 2rem;
    padding: 0 0 0 1rem;
    @media (max-width: 767px) {
      margin: 0;
      padding: 0;
    }
  }
  .button-header{
    padding: 0.5rem 0 0 0;
  }
  
  @media (max-width: 481px) {
    th {
      min-width: 45.5vw;
      max-width: 45.51vw;
      text-align: left;
      padding: 0 0.8rem;
      overflow-wrap: break-word;
    }
  }
`;
var PaginationContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 1.5rem 0;
  width: 90vw;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
var FilterDropdown = styled_components_browser_esm_default(DropdownButton_default)`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #524f4e;
  align-items: center;
  :hover {
    background: transparent;
  }
`;
var TablePagination = styled_components_browser_esm_default(Pagination_default)`
 background-color: white;  
`;
var Alert = styled_components_browser_esm_default.div`
  display: flex;
  color: var(--color-secondary-active);
  align-items: center;
  background-color: var(--color-secondary-light);
  border-radius: 10px;
  font-family: "Nunito";
  font-size: 16px;
  min-height: 50px;
  margin: 15px auto;
  padding: 6px 16px;
  justify-content: center;
  width: 50vw;
  .message {
    padding: 8px 15px;
  }
  @media (max-width: 576px) {
    width: 90vw;
  }
`;

// app/components/Modals/EditUserModal/EditUserModal.jsx
init_react();
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// app/components/Modals/EditUserModal/EditUserModal.Styled.jsx
init_react();
var Wrapper = styled_components_browser_esm_default.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
`;
var Container2 = styled_components_browser_esm_default.div`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  border-radius: 15px;
  background-color: white;
  max-width: 500px;
  width: calc(100% - 40px);
  margin: 20px;
  padding: 15px 0;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 15px 0;
  }
  span {
    margin: 6px 0;
  }
`;
var User = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #d8d8d8;
  padding: 15px 25px;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`;
var UserInfo = styled_components_browser_esm_default.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
var Roles = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 25px;
`;
var RolesTable = styled_components_browser_esm_default.div`
  border-radius: 15px;
  border: 1px solid #d8d8d8;
  margin: 10px 0 0;
`;
var TableRow = styled_components_browser_esm_default.ul`
  border-top: ${(props) => props.noBorder ? "none" : "1px solid #d8d8d8"};
  list-style: none;
  margin: 0;
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  li {
    max-width: 50%;
    width: 75px;
  }
  input[type="text"] {
    max-width: calc(100% - 4px);
    padding: 5px 2px;
  }
`;
var ButtonContainer = styled_components_browser_esm_default.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    margin-left: 10px;
  }
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

// app/components/Modals/EditUserModal/EditUserModal.jsx
function EditUserModal({ user, onClose }) {
  const [uAdmin, setUAdmin] = (0, import_react2.useState)(user.is_admin);
  const [uJobTitle, setUJobTitle] = (0, import_react2.useState)(user.job_title);
  return /* @__PURE__ */ import_react2.default.createElement(Wrapper, null, /* @__PURE__ */ import_react2.default.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ import_react2.default.createElement(Container2, null, /* @__PURE__ */ import_react2.default.createElement(User, null, /* @__PURE__ */ import_react2.default.createElement(UserImage_default, {
    src: user.profile_picture,
    size: "extra big"
  }), /* @__PURE__ */ import_react2.default.createElement(UserInfo, null, /* @__PURE__ */ import_react2.default.createElement("h2", null, user.full_name), /* @__PURE__ */ import_react2.default.createElement("span", null, /* @__PURE__ */ import_react2.default.createElement("b", null, user.job_title !== null ? user.job_title : "")), /* @__PURE__ */ import_react2.default.createElement("span", null, user.email))), /* @__PURE__ */ import_react2.default.createElement(Roles, null, /* @__PURE__ */ import_react2.default.createElement("h3", null, "Roles"), /* @__PURE__ */ import_react2.default.createElement("span", null, "Edit roles for this user"), /* @__PURE__ */ import_react2.default.createElement(RolesTable, null, /* @__PURE__ */ import_react2.default.createElement(TableRow, {
    noBorder: true
  }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("b", null, "Name")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("b", null, "Action"))), /* @__PURE__ */ import_react2.default.createElement(TableRow, null, /* @__PURE__ */ import_react2.default.createElement("li", null, "Job Title"), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("input", {
    name: "job_title",
    type: "text",
    value: uJobTitle,
    onChange: (e) => {
      setUJobTitle(e.target.value);
    }
  }))), /* @__PURE__ */ import_react2.default.createElement(TableRow, null, /* @__PURE__ */ import_react2.default.createElement("li", null, "Role Title"), /* @__PURE__ */ import_react2.default.createElement("li", null, "Employee", user.is_admin && ", Admin")), /* @__PURE__ */ import_react2.default.createElement(TableRow, null, /* @__PURE__ */ import_react2.default.createElement("li", null, "Admin"), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("input", {
    name: "is_admin",
    type: "checkbox",
    checked: uAdmin,
    onChange: (e) => {
      setUAdmin(e.target.checked);
    },
    disabled: user.is_admin
  })))), /* @__PURE__ */ import_react2.default.createElement(ButtonContainer, null, /* @__PURE__ */ import_react2.default.createElement(Button_default, {
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ import_react2.default.createElement(Button_default, {
    category: PRIMARY_BUTTON,
    type: "submit"
  }, "Save")))), /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "hidden",
    name: "employee_id",
    value: user.employee_id
  })));
}
EditUserModal.propTypes = {
  user: import_prop_types.default.shape({
    employee_id: import_prop_types.default.number,
    full_name: import_prop_types.default.string,
    email: import_prop_types.default.string,
    job_title: import_prop_types.default.string,
    is_admin: import_prop_types.default.bool,
    profile_picture: import_prop_types.default.node,
    departments: import_prop_types.default.shape([])
  }),
  onClose: import_prop_types.default.func
};
EditUserModal.defaultProps = {
  user: {
    employee_id: "",
    full_name: "",
    email: "",
    job_title: "",
    is_admin: false
  },
  onClose: () => {
  }
};
var EditUserModal_default = EditUserModal;

// app/components/AdminUsersTable/AdminUsersTable.jsx
function AdminUsersTable({
  users,
  currentPage,
  totalPages,
  isLoading,
  size
}) {
  const [modal, setModal] = (0, import_react4.useState)(false);
  const [currentUser, setCurrenUser] = (0, import_react4.useState)({});
  const quantityRef = (0, import_react4.useRef)(0);
  const paginationRange = usePagination({
    currentPage: currentPage === 0 ? 1 : currentPage + 1,
    totalPages
  });
  const [, setSearchParams] = useSearchParams();
  const data = useActionData();
  (0, import_react4.useEffect)(() => {
    if (data && data.successMessage) {
      setModal(false);
    }
  }, [users, data]);
  const handleModal = (u) => {
    if (!modal) {
      setCurrenUser(u);
    }
    setModal(!modal);
  };
  const changePage = (page) => {
    setSearchParams({
      size,
      page
    });
  };
  const nextPageHandler = () => {
    setSearchParams({
      size,
      page: currentPage + 1
    });
  };
  const prevPageHandler = () => {
    setSearchParams({
      size,
      page: currentPage - 1
    });
  };
  const createPaginationItem = (i, idx) => /* @__PURE__ */ import_react4.default.createElement(TablePagination.Item, {
    key: idx,
    onClick: () => changePage(i),
    active: i === currentPage
  }, i);
  const getPaginationItems = () => {
    const item = paginationRange.map((__page, idx) => {
      if (__page === DOTS) {
        return /* @__PURE__ */ import_react4.default.createElement(TablePagination.Ellipsis, {
          key: idx
        });
      }
      return createPaginationItem(__page, idx);
    });
    return [...item];
  };
  const paginationItems = getPaginationItems();
  const renderHeader = () => /* @__PURE__ */ import_react4.default.createElement("thead", null, /* @__PURE__ */ import_react4.default.createElement(HeaderTable, null, /* @__PURE__ */ import_react4.default.createElement("th", null, "Name"), /* @__PURE__ */ import_react4.default.createElement("th", {
    className: "table-desktop-view"
  }, "Email"), /* @__PURE__ */ import_react4.default.createElement("th", {
    className: "table-desktop-view"
  }, "Job Title"), /* @__PURE__ */ import_react4.default.createElement("th", {
    className: "table-desktop-view"
  }, "Roles"), /* @__PURE__ */ import_react4.default.createElement("th", null, "Action")));
  const setQTY = (value) => {
    setSearchParams({
      size: value,
      page: currentPage
    });
  };
  if (!users.length && !isLoading) {
    return /* @__PURE__ */ import_react4.default.createElement(Alert, null, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "message"
    }, "There are no results to show"));
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement(TableContainer, null, "Select the number of results", /* @__PURE__ */ import_react4.default.createElement("select", {
    ref: quantityRef,
    onChange: (e) => setQTY(e.target.value),
    defaultValue: size
  }, /* @__PURE__ */ import_react4.default.createElement("option", {
    value: "5"
  }, "5"), /* @__PURE__ */ import_react4.default.createElement("option", {
    value: "10"
  }, "10"), /* @__PURE__ */ import_react4.default.createElement("option", {
    value: "15"
  }, "15"), /* @__PURE__ */ import_react4.default.createElement("option", {
    value: "20"
  }, "20"), /* @__PURE__ */ import_react4.default.createElement("option", {
    value: "25"
  }, "25")), isLoading ? /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement(UserTable, null, renderHeader()), /* @__PURE__ */ import_react4.default.createElement(Loader_default, {
    src: logomark_medium_default,
    size: LSPIN_MEDIUM
  })) : /* @__PURE__ */ import_react4.default.createElement(UserTable, null, renderHeader(), /* @__PURE__ */ import_react4.default.createElement("tbody", null, users.map((user) => /* @__PURE__ */ import_react4.default.createElement(RowTable, {
    key: user.employee_id
  }, /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("img", {
    src: user.profile_picture,
    alt: ""
  }), user.full_name)), /* @__PURE__ */ import_react4.default.createElement("td", {
    className: "table-desktop-view"
  }, user.email), /* @__PURE__ */ import_react4.default.createElement("td", {
    className: "table-desktop-view"
  }, user.job_title), /* @__PURE__ */ import_react4.default.createElement("td", {
    className: "table-desktop-view"
  }, "Employee", user.is_admin && ", Admin"), /* @__PURE__ */ import_react4.default.createElement("td", null, /* @__PURE__ */ import_react4.default.createElement(Button_default, {
    category: PRIMARY_BUTTON,
    onClick: () => handleModal(user),
    className: "row-btn"
  }, "Edit roles")))))), !isLoading && /* @__PURE__ */ import_react4.default.createElement(PaginationContainer, null, /* @__PURE__ */ import_react4.default.createElement("div", null, "Page", " ", currentPage, " ", "of", " ", totalPages), /* @__PURE__ */ import_react4.default.createElement(TablePagination, {
    boundarylinks: "true"
  }, currentPage > 1 && /* @__PURE__ */ import_react4.default.createElement(TablePagination.Prev, {
    onClick: prevPageHandler
  }), paginationItems, currentPage < totalPages && /* @__PURE__ */ import_react4.default.createElement(TablePagination.Next, {
    onClick: nextPageHandler
  }))), modal ? /* @__PURE__ */ import_react4.default.createElement(EditUserModal_default, {
    user: currentUser,
    onClose: () => handleModal()
  }) : null));
}
AdminUsersTable.propTypes = {
  users: import_prop_types2.default.arrayOf(import_prop_types2.default.shape()),
  currentPage: import_prop_types2.default.number.isRequired,
  totalPages: import_prop_types2.default.number.isRequired,
  isLoading: import_prop_types2.default.bool.isRequired,
  size: import_prop_types2.default.number.isRequired
};
AdminUsersTable.defaultProps = {
  users: []
};
var AdminUsersTable_default = AdminUsersTable;

// app/components/UserSearchBar/index.js
init_react();

// app/components/UserSearchBar/UserSearchBar.jsx
init_react();
var import_prop_types3 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());

// app/components/UserSearchBar/UserSearchBar.Styled.jsx
init_react();
var SearchField = styled_components_browser_esm_default.div`
  align-items: center;
  display: flex;
  background-color: #fff;
  border: 1px solid #d3d3d4;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  max-width: 270px;
  position: relative;
  width: 100%;
  transition: all 0.5s ease;
`;
var IconWrapper = styled_components_browser_esm_default.div`
  left: 10px;
  top: auto;
  width: 22px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Input = styled_components_browser_esm_default.input`
  background-color: transparent;
  border: none;
  font-size: 14px;
  height: 100%;
  padding: 0 40px;
  width: 100%;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(78, 81, 84, 0.65);
    font-family: "Nunito", sans-serif;
  }
`;
var SearchIcon = styled_components_browser_esm_default(AiOutlineSearch)`
  font-size: 30px;
  color: rgba(78, 81, 84, 0.65);
`;
var ClearIcon = styled_components_browser_esm_default(MdClose)`
  font-size: 28px;
  color: rgba(78, 81, 84, 0.65);
  padding: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

// app/components/UserSearchBar/UserSearchBar.jsx
function UserSearchBar({ onSearch }) {
  const [search, setSearch] = (0, import_react6.useState)("");
  const clearText = () => {
    setSearch("");
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (search && event.key === "Enter") {
      onSearch(search);
    }
  };
  return /* @__PURE__ */ import_react6.default.createElement(SearchField, null, /* @__PURE__ */ import_react6.default.createElement(IconWrapper, null, /* @__PURE__ */ import_react6.default.createElement(SearchIcon, null)), /* @__PURE__ */ import_react6.default.createElement(Input, {
    type: "search",
    value: search,
    onChange,
    placeholder: "Search for\u2026",
    onKeyDown: handleKeyDown
  }), search && /* @__PURE__ */ import_react6.default.createElement(Button_default, {
    type: "button",
    className: "clear-button",
    title: "Clear",
    category: ICON_BUTTON,
    onClick: clearText
  }, /* @__PURE__ */ import_react6.default.createElement(ClearIcon, null)));
}
UserSearchBar.propTypes = {
  onSearch: import_prop_types3.default.func.isRequired
};

// app/routes/admin.jsx
function Admin() {
  const {
    users,
    totalPages,
    currentPage,
    size
  } = useLoaderData();
  const [, setSearchParams] = useSearchParams();
  const onSearch = (search) => {
    setSearchParams({
      search
    });
  };
  return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react7.default.createElement(Container, null, /* @__PURE__ */ import_react7.default.createElement("h2", null, "Admin page"), /* @__PURE__ */ import_react7.default.createElement(UserSearchBar, {
    onSearch
  })), /* @__PURE__ */ import_react7.default.createElement(AdminUsersTable_default, {
    users,
    currentPage,
    totalPages,
    size
  }));
}
function CatchBoundary() {
  return /* @__PURE__ */ import_react7.default.createElement(__default, null);
}
var admin_default = Admin;
export {
  CatchBoundary,
  admin_default as default
};
//# sourceMappingURL=/build/routes/admin-QRGZM2IO.js.map
