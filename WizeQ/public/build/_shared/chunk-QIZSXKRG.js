import {
  init_react
} from "/build/_shared/chunk-4DA2OAD7.js";

// app/utils/cookies.js
init_react();
function setCookie(name, value) {
  document.cookie = `${name}=${value}`;
}
function getCookie(name) {
  if (typeof window !== "undefined") {
    const cname = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
  }
  return "";
}

export {
  setCookie,
  getCookie
};
//# sourceMappingURL=/build/_shared/chunk-QIZSXKRG.js.map
