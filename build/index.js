var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// app/utils/backend/constants.js
var require_constants = __commonJS({
  "app/utils/backend/constants.js"(exports, module2) {
    init_react();
    module2.exports = {
      MINIMUM_ANSWER_LENGTH: 1,
      MAXIMUM_ANSWER_LENGTH: 3e3,
      MINIMUM_COMMENT_LENGTH: 2,
      MAXIMUM_COMMENT_LENGTH: 3e3,
      MINIMUM_QUESTION_LENGTH: 14,
      MAXIMUM_QUESTION_LENGTH: 500,
      DATE_FORMAT: "MM-DD-YYYY",
      DATE_TIME_FORMAT: "YYYY-MM-DDTHH:mm:ssZ",
      BASE_NUMBER: 10,
      NOTIFICATION_MINUTE_INTERVAL: 3,
      MAXIMUM_QUESTION_EXPORT_CSV_DAYS_RANGE: 90,
      MAXIMUM_QUESTION_EXPORT_CSV_MONTHS_RANGE: 3,
      DEFAULT_LIMIT: 20,
      DEFAULT_OFFSET: 0,
      MIN_NET_PROMOTER_SCORE: 1,
      MAX_NET_PROMOTER_SCORE: 4,
      DEFAULT_ERROR_MESSAGE: "An unknown error has occurred with your request.",
      DEFAULT_ERROR_MESSAGE_BOT: "An unknown error has occurred with your request to bot.",
      DEFAULT_ERROR_MESSAGE_CREATE_BOT: "An unknown error has occurred with your request to bot.",
      DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT: "An unknown error has occurred while submitting feedback.",
      DEFAULT_ERROR_MESSAGE_POST_BOT: "An unknown error has occurred while posting the question.",
      COMMENT_AS_AN_ANSWER: "This question already has a comment as answer",
      COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD: 10,
      DEFAULT_MONTHS: -3
    };
  }
});

// app/utils/backend/filterConstants.js
var require_filterConstants = __commonJS({
  "app/utils/backend/filterConstants.js"(exports, module2) {
    init_react();
    module2.exports = {
      ALL_DEPARTMENTS: -1,
      NOT_ASSIGNED_DEPARTMENT_ID: 0
    };
  }
});

// app/utils/backend/joiConstants.js
var require_joiConstants = __commonJS({
  "app/utils/backend/joiConstants.js"(exports, module2) {
    init_react();
    var Joi10 = require("joi");
    module2.exports = {
      JOI_ID_VALIDATION: Joi10.number().integer().min(1).required(),
      JOI_SIMPLE_STRING_VALIDATION: Joi10.string().required(),
      JOI_EMAIL_VALIDATION: Joi10.string().email()
    };
  }
});

// app/utils/backend/slackConstants.js
var require_slackConstants = __commonJS({
  "app/utils/backend/slackConstants.js"(exports, module2) {
    init_react();
    module2.exports = {
      DEFAULT_DOMAIN: "",
      DEFAULT_SLACK_NAME: "WizeQ-bot",
      SLACK_FALLBACK_STRING: "New question posted",
      SLACK_QUESTION_COLOR: "#FF9248",
      SLACK_QUESTION_EMOJI: ":question:",
      SLACK_QUESTION_DETAILS: "see question details in WizeQ",
      SLACK_QUESTION_HEADER: "A new question has been posted at WizeQ!",
      SLACK_QUESTION_SEE_MORE: "see full question in WizeQ",
      SLACK_QUESTION_LIMIT: 240,
      SLACK_ANSWER_COLOR: "#7CD197",
      SLACK_ANSWER_EMOJI: ":exclamation:",
      SLACK_ANSWER_HEADER: "A question has been answered at WizeQ!",
      SLACK_ANSWER_UPDATED_HEADER: "An answer has been updated at WizeQ!",
      SLACK_MAX_MESSAGE_SIZE_IN_BYTES: 7500
    };
  }
});

// app/utils/backend/utilConstants.js
var require_utilConstants = __commonJS({
  "app/utils/backend/utilConstants.js"(exports, module2) {
    init_react();
    module2.exports = {
      HTTP_PREFIX: "http",
      TRUNCATE_ENDING: "..."
    };
  }
});

// node_modules/markdown-draft-js/lib/draft-to-markdown.js
var require_draft_to_markdown = __commonJS({
  "node_modules/markdown-draft-js/lib/draft-to-markdown.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.default = void 0;
    var TRAILING_WHITESPACE = /[ \u0020\t\n]*$/, MARKDOWN_STYLE_CHARACTERS = ["*", "_", "~", "`"], MARKDOWN_STYLE_CHARACTER_REGXP = /(\*|_|~|\\|`)/g, orderedListNumber = {}, previousOrderedListDepth = 0, StyleItems = {
      "unordered-list-item": {
        open: function() {
          return "- ";
        },
        close: function() {
          return "";
        }
      },
      "ordered-list-item": {
        open: function(block) {
          var number2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return "".concat(number2, ". ");
        },
        close: function() {
          return "";
        }
      },
      blockquote: {
        open: function() {
          return "> ";
        },
        close: function() {
          return "";
        }
      },
      "header-one": {
        open: function() {
          return "# ";
        },
        close: function() {
          return "";
        }
      },
      "header-two": {
        open: function() {
          return "## ";
        },
        close: function() {
          return "";
        }
      },
      "header-three": {
        open: function() {
          return "### ";
        },
        close: function() {
          return "";
        }
      },
      "header-four": {
        open: function() {
          return "#### ";
        },
        close: function() {
          return "";
        }
      },
      "header-five": {
        open: function() {
          return "##### ";
        },
        close: function() {
          return "";
        }
      },
      "header-six": {
        open: function() {
          return "###### ";
        },
        close: function() {
          return "";
        }
      },
      "code-block": {
        open: function(block) {
          return "```" + (block.data.language || "") + `
`;
        },
        close: function() {
          return "\n```";
        }
      },
      BOLD: {
        open: function() {
          return "**";
        },
        close: function() {
          return "**";
        }
      },
      ITALIC: {
        open: function() {
          return "_";
        },
        close: function() {
          return "_";
        }
      },
      STRIKETHROUGH: {
        open: function() {
          return "~~";
        },
        close: function() {
          return "~~";
        }
      },
      CODE: {
        open: function() {
          return "`";
        },
        close: function() {
          return "`";
        }
      }
    }, EntityItems = {
      LINK: {
        open: function(entity) {
          return "[";
        },
        close: function(entity) {
          return "](".concat(entity.data.url || entity.data.href, ")");
        }
      }
    }, SingleNewlineAfterBlock = ["unordered-list-item", "ordered-list-item"];
    function isEmptyBlock(block) {
      return block.text.length === 0 && block.entityRanges.length === 0 && Object.keys(block.data || {}).length === 0;
    }
    function renderBlock(block, index2, rawDraftObject, options) {
      var openInlineStyles = [], markdownToAdd = [], markdownString = "", customStyleItems = options.styleItems || {}, customEntityItems = options.entityItems || {}, escapeMarkdownCharacters = options.hasOwnProperty("escapeMarkdownCharacters") ? options.escapeMarkdownCharacters : !0, type = block.type, markdownStyleCharactersToEscape = [];
      isEmptyBlock(block) && !options.preserveNewlines && (type = "unstyled"), customStyleItems[type] || StyleItems[type] ? ((type === "unordered-list-item" || type === "ordered-list-item") && (markdownString += " ".repeat(block.depth * 4)), type === "ordered-list-item" ? (orderedListNumber[block.depth] = orderedListNumber[block.depth] || 1, markdownString += (customStyleItems[type] || StyleItems[type]).open(block, orderedListNumber[block.depth]), orderedListNumber[block.depth]++, previousOrderedListDepth > block.depth && (orderedListNumber[previousOrderedListDepth] = 1), previousOrderedListDepth = block.depth) : (orderedListNumber = {}, markdownString += (customStyleItems[type] || StyleItems[type]).open(block))) : orderedListNumber = {};
      var openTags = [];
      function openTag(tag) {
        if (openTags.push(tag), tag.style) {
          if (customStyleItems[tag.style] || StyleItems[tag.style]) {
            var styleToAdd = (customStyleItems[tag.style] || StyleItems[tag.style]).open();
            markdownToAdd.push({
              type: "style",
              style: tag,
              value: styleToAdd
            });
          }
        } else {
          var entity = rawDraftObject.entityMap[tag.key];
          if (customEntityItems[entity.type] || EntityItems[entity.type]) {
            var entityToAdd = (customEntityItems[entity.type] || EntityItems[entity.type]).open(entity, block);
            markdownToAdd.push({
              type: "entity",
              value: entityToAdd
            });
          }
        }
      }
      function closeTag(tag) {
        var popped = openTags.pop();
        if (tag !== popped)
          throw new Error("Invariant violation: Cannot close a tag before all inner tags have been closed");
        if (tag.style) {
          if (customStyleItems[tag.style] || StyleItems[tag.style]) {
            var trailingWhitespace = TRAILING_WHITESPACE.exec(markdownString);
            markdownString = markdownString.slice(0, markdownString.length - trailingWhitespace[0].length), markdownString += (customStyleItems[tag.style] || StyleItems[tag.style]).close(), markdownString += trailingWhitespace[0];
          }
        } else {
          var entity = rawDraftObject.entityMap[tag.key];
          (customEntityItems[entity.type] || EntityItems[entity.type]) && (markdownString += (customEntityItems[entity.type] || EntityItems[entity.type]).close(entity, block));
        }
      }
      var compareTagsLastCloseFirst = function(a, b) {
        return b.offset + b.length - (a.offset + a.length);
      }, reverse = function(array) {
        return array.concat().reverse();
      };
      return Array.from(block.text).some(function(character, characterIndex) {
        reverse(openTags).forEach(function(tag) {
          if (tag.offset + tag.length === characterIndex) {
            var tagsToSplit = openTags.slice(openTags.indexOf(tag) + 1);
            reverse(tagsToSplit).forEach(closeTag), closeTag(tag), tagsToSplit.sort(compareTagsLastCloseFirst).forEach(openTag);
          }
        });
        var inlineTagsToOpen = block.inlineStyleRanges.filter(function(tag) {
          return tag.offset === characterIndex;
        }), entityTagsToOpen = block.entityRanges.filter(function(tag) {
          return tag.offset === characterIndex;
        });
        if (inlineTagsToOpen.concat(entityTagsToOpen).sort(compareTagsLastCloseFirst).forEach(openTag), character !== " " && markdownToAdd.length && (markdownString += markdownToAdd.map(function(item) {
          return item.value;
        }).join(""), markdownToAdd = []), block.type !== "code-block" && escapeMarkdownCharacters) {
          var insideInlineCodeStyle = openTags.find(function(style2) {
            return style2.style === "CODE";
          });
          if (!insideInlineCodeStyle) {
            if (characterIndex === 0 && character === "#" && block.text[1] && block.text[1] === " " ? character = character.replace("#", "\\#") : characterIndex === 0 && character === ">" && (character = character.replace(">", "\\>")), MARKDOWN_STYLE_CHARACTERS.includes(character)) {
              var openingStyle = markdownStyleCharactersToEscape.find(function(item) {
                return item.character === character;
              });
              if (!openingStyle && block.text[characterIndex - 1] === " " && block.text[characterIndex + 1] !== " ")
                markdownStyleCharactersToEscape.push({
                  character,
                  index: characterIndex,
                  markdownStringIndexStart: markdownString.length + character.length - 1,
                  markdownStringIndexEnd: markdownString.length + character.length
                });
              else if (openingStyle && block.text[characterIndex - 1] === character && characterIndex === openingStyle.index + 1)
                openingStyle.markdownStringIndexEnd += 1;
              else if (openingStyle) {
                var openingStyleLength = openingStyle.markdownStringIndexEnd - openingStyle.markdownStringIndexStart, escapeCharacter = !1, popOpeningStyle = !1;
                if (openingStyleLength === 1 && (block.text[characterIndex + 1] === " " || !block.text[characterIndex + 1]) && (popOpeningStyle = !0, escapeCharacter = !0), openingStyleLength === 2 && block.text[characterIndex + 1] === character && (escapeCharacter = !0), openingStyleLength === 2 && block.text[characterIndex - 1] === character && (block.text[characterIndex + 1] === " " || !block.text[characterIndex + 1]) && (popOpeningStyle = !0, escapeCharacter = !0), popOpeningStyle) {
                  markdownStyleCharactersToEscape.splice(markdownStyleCharactersToEscape.indexOf(openingStyle), 1);
                  var replacementString = markdownString.slice(openingStyle.markdownStringIndexStart, openingStyle.markdownStringIndexEnd);
                  replacementString = replacementString.replace(MARKDOWN_STYLE_CHARACTER_REGXP, "\\$1"), markdownString = markdownString.slice(0, openingStyle.markdownStringIndexStart) + replacementString + markdownString.slice(openingStyle.markdownStringIndexEnd);
                }
                escapeCharacter && (character = "\\".concat(character));
              }
            }
          }
        }
        character === `
` && type === "blockquote" ? markdownString += `
> ` : markdownString += character;
      }), reverse(openTags).forEach(closeTag), (customStyleItems[type] || StyleItems[type]) && (markdownString += (customStyleItems[type] || StyleItems[type]).close(block)), SingleNewlineAfterBlock.indexOf(type) !== -1 && rawDraftObject.blocks[index2 + 1] && SingleNewlineAfterBlock.indexOf(rawDraftObject.blocks[index2 + 1].type) !== -1 ? markdownString += `
` : rawDraftObject.blocks[index2 + 1] && (rawDraftObject.blocks[index2].text ? SingleNewlineAfterBlock.indexOf(type) !== -1 && SingleNewlineAfterBlock.indexOf(rawDraftObject.blocks[index2 + 1].type) === -1 ? markdownString += `

` : options.preserveNewlines ? markdownString += `
` : markdownString += `

` : options.preserveNewlines && (markdownString += `
`)), markdownString;
    }
    function draftToMarkdown2(rawDraftObject, options) {
      options = options || {};
      var markdownString = "";
      return rawDraftObject.blocks.forEach(function(block, index2) {
        markdownString += renderBlock(block, index2, rawDraftObject, options);
      }), orderedListNumber = {}, markdownString;
    }
    var _default = draftToMarkdown2;
    exports.default = _default;
  }
});

// node_modules/remarkable/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/remarkable/dist/cjs/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var entities = {
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xA6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      CenterDot: "\xB7",
      centerdot: "\xB7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      GT: ">",
      Gt: "\u226B",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      LT: "<",
      Lt: "\u226A",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: `
`,
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xA3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xAE",
      reg: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xFF",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    }, hasOwn = Object.prototype.hasOwnProperty;
    function has(object, key) {
      return object ? hasOwn.call(object, key) : !1;
    }
    function decodeEntity(name) {
      return has(entities, name) ? entities[name] : name;
    }
    function typeOf(obj) {
      return Object.prototype.toString.call(obj);
    }
    function isString(obj) {
      return typeOf(obj) === "[object String]";
    }
    var hasOwn$1 = Object.prototype.hasOwnProperty;
    function has$1(object, key) {
      return object ? hasOwn$1.call(object, key) : !1;
    }
    function assign(obj) {
      var sources = [].slice.call(arguments, 1);
      return sources.forEach(function(source) {
        if (!!source) {
          if (typeof source != "object")
            throw new TypeError(source + "must be object");
          Object.keys(source).forEach(function(key) {
            obj[key] = source[key];
          });
        }
      }), obj;
    }
    var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    function unescapeMd(str) {
      return str.indexOf("\\") < 0 ? str : str.replace(UNESCAPE_MD_RE, "$1");
    }
    function isValidEntityCode(c) {
      return !(c >= 55296 && c <= 57343 || c >= 64976 && c <= 65007 || (c & 65535) === 65535 || (c & 65535) === 65534 || c >= 0 && c <= 8 || c === 11 || c >= 14 && c <= 31 || c >= 127 && c <= 159 || c > 1114111);
    }
    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }
      return String.fromCharCode(c);
    }
    var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi, DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    function replaceEntityPattern(match, name) {
      var code4 = 0, decoded = decodeEntity(name);
      return name !== decoded ? decoded : name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name) && (code4 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10), isValidEntityCode(code4)) ? fromCodePoint(code4) : match;
    }
    function replaceEntities(str) {
      return str.indexOf("&") < 0 ? str : str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
    }
    var HTML_ESCAPE_TEST_RE = /[&<>"]/, HTML_ESCAPE_REPLACE_RE = /[&<>"]/g, HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }
    function escapeHtml(str) {
      return HTML_ESCAPE_TEST_RE.test(str) ? str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar) : str;
    }
    var utils = /* @__PURE__ */ Object.freeze({
      isString,
      has: has$1,
      assign,
      unescapeMd,
      isValidEntityCode,
      fromCodePoint,
      replaceEntities,
      escapeHtml
    }), rules = {};
    rules.blockquote_open = function() {
      return `<blockquote>
`;
    };
    rules.blockquote_close = function(tokens, idx) {
      return "</blockquote>" + getBreak(tokens, idx);
    };
    rules.code = function(tokens, idx) {
      return tokens[idx].block ? "<pre><code>" + escapeHtml(tokens[idx].content) + "</code></pre>" + getBreak(tokens, idx) : "<code>" + escapeHtml(tokens[idx].content) + "</code>";
    };
    rules.fence = function(tokens, idx, options, env, instance) {
      var token = tokens[idx], langClass = "", langPrefix = options.langPrefix, langName = "", fences2, fenceName, highlighted;
      if (token.params) {
        if (fences2 = token.params.split(/\s+/g), fenceName = fences2.join(" "), has$1(instance.rules.fence_custom, fences2[0]))
          return instance.rules.fence_custom[fences2[0]](tokens, idx, options, env, instance);
        langName = escapeHtml(replaceEntities(unescapeMd(fenceName))), langClass = ' class="' + langPrefix + langName + '"';
      }
      return options.highlight ? highlighted = options.highlight.apply(options.highlight, [token.content].concat(fences2)) || escapeHtml(token.content) : highlighted = escapeHtml(token.content), "<pre><code" + langClass + ">" + highlighted + "</code></pre>" + getBreak(tokens, idx);
    };
    rules.fence_custom = {};
    rules.heading_open = function(tokens, idx) {
      return "<h" + tokens[idx].hLevel + ">";
    };
    rules.heading_close = function(tokens, idx) {
      return "</h" + tokens[idx].hLevel + `>
`;
    };
    rules.hr = function(tokens, idx, options) {
      return (options.xhtmlOut ? "<hr />" : "<hr>") + getBreak(tokens, idx);
    };
    rules.bullet_list_open = function() {
      return `<ul>
`;
    };
    rules.bullet_list_close = function(tokens, idx) {
      return "</ul>" + getBreak(tokens, idx);
    };
    rules.list_item_open = function() {
      return "<li>";
    };
    rules.list_item_close = function() {
      return `</li>
`;
    };
    rules.ordered_list_open = function(tokens, idx) {
      var token = tokens[idx], order2 = token.order > 1 ? ' start="' + token.order + '"' : "";
      return "<ol" + order2 + `>
`;
    };
    rules.ordered_list_close = function(tokens, idx) {
      return "</ol>" + getBreak(tokens, idx);
    };
    rules.paragraph_open = function(tokens, idx) {
      return tokens[idx].tight ? "" : "<p>";
    };
    rules.paragraph_close = function(tokens, idx) {
      var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === "inline" && !tokens[idx - 1].content);
      return (tokens[idx].tight ? "" : "</p>") + (addBreak ? getBreak(tokens, idx) : "");
    };
    rules.link_open = function(tokens, idx, options) {
      var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "", target = options.linkTarget ? ' target="' + options.linkTarget + '"' : "";
      return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + ">";
    };
    rules.link_close = function() {
      return "</a>";
    };
    rules.image = function(tokens, idx, options) {
      var src = ' src="' + escapeHtml(tokens[idx].src) + '"', title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "", alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : "") + '"', suffix = options.xhtmlOut ? " /" : "";
      return "<img" + src + alt + title + suffix + ">";
    };
    rules.table_open = function() {
      return `<table>
`;
    };
    rules.table_close = function() {
      return `</table>
`;
    };
    rules.thead_open = function() {
      return `<thead>
`;
    };
    rules.thead_close = function() {
      return `</thead>
`;
    };
    rules.tbody_open = function() {
      return `<tbody>
`;
    };
    rules.tbody_close = function() {
      return `</tbody>
`;
    };
    rules.tr_open = function() {
      return "<tr>";
    };
    rules.tr_close = function() {
      return `</tr>
`;
    };
    rules.th_open = function(tokens, idx) {
      var token = tokens[idx];
      return "<th" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
    };
    rules.th_close = function() {
      return "</th>";
    };
    rules.td_open = function(tokens, idx) {
      var token = tokens[idx];
      return "<td" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
    };
    rules.td_close = function() {
      return "</td>";
    };
    rules.strong_open = function() {
      return "<strong>";
    };
    rules.strong_close = function() {
      return "</strong>";
    };
    rules.em_open = function() {
      return "<em>";
    };
    rules.em_close = function() {
      return "</em>";
    };
    rules.del_open = function() {
      return "<del>";
    };
    rules.del_close = function() {
      return "</del>";
    };
    rules.ins_open = function() {
      return "<ins>";
    };
    rules.ins_close = function() {
      return "</ins>";
    };
    rules.mark_open = function() {
      return "<mark>";
    };
    rules.mark_close = function() {
      return "</mark>";
    };
    rules.sub = function(tokens, idx) {
      return "<sub>" + escapeHtml(tokens[idx].content) + "</sub>";
    };
    rules.sup = function(tokens, idx) {
      return "<sup>" + escapeHtml(tokens[idx].content) + "</sup>";
    };
    rules.hardbreak = function(tokens, idx, options) {
      return options.xhtmlOut ? `<br />
` : `<br>
`;
    };
    rules.softbreak = function(tokens, idx, options) {
      return options.breaks ? options.xhtmlOut ? `<br />
` : `<br>
` : `
`;
    };
    rules.text = function(tokens, idx) {
      return escapeHtml(tokens[idx].content);
    };
    rules.htmlblock = function(tokens, idx) {
      return tokens[idx].content;
    };
    rules.htmltag = function(tokens, idx) {
      return tokens[idx].content;
    };
    rules.abbr_open = function(tokens, idx) {
      return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
    };
    rules.abbr_close = function() {
      return "</abbr>";
    };
    rules.footnote_ref = function(tokens, idx) {
      var n = Number(tokens[idx].id + 1).toString(), id = "fnref" + n;
      return tokens[idx].subId > 0 && (id += ":" + tokens[idx].subId), '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + "]</a></sup>";
    };
    rules.footnote_block_open = function(tokens, idx, options) {
      var hr2 = options.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`;
      return hr2 + `<section class="footnotes">
<ol class="footnotes-list">
`;
    };
    rules.footnote_block_close = function() {
      return `</ol>
</section>
`;
    };
    rules.footnote_open = function(tokens, idx) {
      var id = Number(tokens[idx].id + 1).toString();
      return '<li id="fn' + id + '"  class="footnote-item">';
    };
    rules.footnote_close = function() {
      return `</li>
`;
    };
    rules.footnote_anchor = function(tokens, idx) {
      var n = Number(tokens[idx].id + 1).toString(), id = "fnref" + n;
      return tokens[idx].subId > 0 && (id += ":" + tokens[idx].subId), ' <a href="#' + id + '" class="footnote-backref">\u21A9</a>';
    };
    rules.dl_open = function() {
      return `<dl>
`;
    };
    rules.dt_open = function() {
      return "<dt>";
    };
    rules.dd_open = function() {
      return "<dd>";
    };
    rules.dl_close = function() {
      return `</dl>
`;
    };
    rules.dt_close = function() {
      return `</dt>
`;
    };
    rules.dd_close = function() {
      return `</dd>
`;
    };
    function nextToken(tokens, idx) {
      return ++idx >= tokens.length - 2 ? idx : tokens[idx].type === "paragraph_open" && tokens[idx].tight && tokens[idx + 1].type === "inline" && tokens[idx + 1].content.length === 0 && tokens[idx + 2].type === "paragraph_close" && tokens[idx + 2].tight ? nextToken(tokens, idx + 2) : idx;
    }
    var getBreak = rules.getBreak = function(tokens, idx) {
      return idx = nextToken(tokens, idx), idx < tokens.length && tokens[idx].type === "list_item_close" ? "" : `
`;
    };
    function Renderer() {
      this.rules = assign({}, rules), this.getBreak = rules.getBreak;
    }
    Renderer.prototype.renderInline = function(tokens, options, env) {
      for (var _rules2 = this.rules, len = tokens.length, i2 = 0, result = ""; len--; )
        result += _rules2[tokens[i2].type](tokens, i2++, options, env, this);
      return result;
    };
    Renderer.prototype.render = function(tokens, options, env) {
      for (var _rules2 = this.rules, len = tokens.length, i2 = -1, result = ""; ++i2 < len; )
        tokens[i2].type === "inline" ? result += this.renderInline(tokens[i2].children, options, env) : result += _rules2[tokens[i2].type](tokens, i2, options, env, this);
      return result;
    };
    function Ruler() {
      this.__rules__ = [], this.__cache__ = null;
    }
    Ruler.prototype.__find__ = function(name) {
      for (var len = this.__rules__.length, i2 = -1; len--; )
        if (this.__rules__[++i2].name === name)
          return i2;
      return -1;
    };
    Ruler.prototype.__compile__ = function() {
      var self = this, chains = [""];
      self.__rules__.forEach(function(rule) {
        !rule.enabled || rule.alt.forEach(function(altName) {
          chains.indexOf(altName) < 0 && chains.push(altName);
        });
      }), self.__cache__ = {}, chains.forEach(function(chain) {
        self.__cache__[chain] = [], self.__rules__.forEach(function(rule) {
          !rule.enabled || chain && rule.alt.indexOf(chain) < 0 || self.__cache__[chain].push(rule.fn);
        });
      });
    };
    Ruler.prototype.at = function(name, fn, options) {
      var idx = this.__find__(name), opt = options || {};
      if (idx === -1)
        throw new Error("Parser rule not found: " + name);
      this.__rules__[idx].fn = fn, this.__rules__[idx].alt = opt.alt || [], this.__cache__ = null;
    };
    Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
      var idx = this.__find__(beforeName), opt = options || {};
      if (idx === -1)
        throw new Error("Parser rule not found: " + beforeName);
      this.__rules__.splice(idx, 0, {
        name: ruleName,
        enabled: !0,
        fn,
        alt: opt.alt || []
      }), this.__cache__ = null;
    };
    Ruler.prototype.after = function(afterName, ruleName, fn, options) {
      var idx = this.__find__(afterName), opt = options || {};
      if (idx === -1)
        throw new Error("Parser rule not found: " + afterName);
      this.__rules__.splice(idx + 1, 0, {
        name: ruleName,
        enabled: !0,
        fn,
        alt: opt.alt || []
      }), this.__cache__ = null;
    };
    Ruler.prototype.push = function(ruleName, fn, options) {
      var opt = options || {};
      this.__rules__.push({
        name: ruleName,
        enabled: !0,
        fn,
        alt: opt.alt || []
      }), this.__cache__ = null;
    };
    Ruler.prototype.enable = function(list4, strict) {
      list4 = Array.isArray(list4) ? list4 : [list4], strict && this.__rules__.forEach(function(rule) {
        rule.enabled = !1;
      }), list4.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0)
          throw new Error("Rules manager: invalid rule name " + name);
        this.__rules__[idx].enabled = !0;
      }, this), this.__cache__ = null;
    };
    Ruler.prototype.disable = function(list4) {
      list4 = Array.isArray(list4) ? list4 : [list4], list4.forEach(function(name) {
        var idx = this.__find__(name);
        if (idx < 0)
          throw new Error("Rules manager: invalid rule name " + name);
        this.__rules__[idx].enabled = !1;
      }, this), this.__cache__ = null;
    };
    Ruler.prototype.getRules = function(chainName) {
      return this.__cache__ === null && this.__compile__(), this.__cache__[chainName] || [];
    };
    function block(state) {
      state.inlineMode ? state.tokens.push({
        type: "inline",
        content: state.src.replace(/\n/g, " ").trim(),
        level: 0,
        lines: [0, 1],
        children: []
      }) : state.block.parse(state.src, state.options, state.env, state.tokens);
    }
    function StateInline(src, parserInline, options, env, outTokens) {
      this.src = src, this.env = env, this.options = options, this.parser = parserInline, this.tokens = outTokens, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
    }
    StateInline.prototype.pushPending = function() {
      this.tokens.push({
        type: "text",
        content: this.pending,
        level: this.pendingLevel
      }), this.pending = "";
    };
    StateInline.prototype.push = function(token) {
      this.pending && this.pushPending(), this.tokens.push(token), this.pendingLevel = this.level;
    };
    StateInline.prototype.cacheSet = function(key, val) {
      for (var i2 = this.cache.length; i2 <= key; i2++)
        this.cache.push(0);
      this.cache[key] = val;
    };
    StateInline.prototype.cacheGet = function(key) {
      return key < this.cache.length ? this.cache[key] : 0;
    };
    function parseLinkLabel(state, start) {
      var level, found, marker, labelEnd2 = -1, max = state.posMax, oldPos = state.pos, oldFlag = state.isInLabel;
      if (state.isInLabel)
        return -1;
      if (state.labelUnmatchedScopes)
        return state.labelUnmatchedScopes--, -1;
      for (state.pos = start + 1, state.isInLabel = !0, level = 1; state.pos < max; ) {
        if (marker = state.src.charCodeAt(state.pos), marker === 91)
          level++;
        else if (marker === 93 && (level--, level === 0)) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return found ? (labelEnd2 = state.pos, state.labelUnmatchedScopes = 0) : state.labelUnmatchedScopes = level - 1, state.pos = oldPos, state.isInLabel = oldFlag, labelEnd2;
    }
    function parseAbbr(str, parserInline, options, env) {
      var state, labelEnd2, pos, max, label, title;
      if (str.charCodeAt(0) !== 42 || str.charCodeAt(1) !== 91 || str.indexOf("]:") === -1 || (state = new StateInline(str, parserInline, options, env, []), labelEnd2 = parseLinkLabel(state, 1), labelEnd2 < 0 || str.charCodeAt(labelEnd2 + 1) !== 58))
        return -1;
      for (max = state.posMax, pos = labelEnd2 + 2; pos < max && state.src.charCodeAt(pos) !== 10; pos++)
        ;
      return label = str.slice(2, labelEnd2), title = str.slice(labelEnd2 + 2, pos).trim(), title.length === 0 ? -1 : (env.abbreviations || (env.abbreviations = {}), typeof env.abbreviations[":" + label] > "u" && (env.abbreviations[":" + label] = title), pos);
    }
    function abbr(state) {
      var tokens = state.tokens, i2, l, content3, pos;
      if (!state.inlineMode) {
        for (i2 = 1, l = tokens.length - 1; i2 < l; i2++)
          if (tokens[i2 - 1].type === "paragraph_open" && tokens[i2].type === "inline" && tokens[i2 + 1].type === "paragraph_close") {
            for (content3 = tokens[i2].content; content3.length && (pos = parseAbbr(content3, state.inline, state.options, state.env), !(pos < 0)); )
              content3 = content3.slice(pos).trim();
            tokens[i2].content = content3, content3.length || (tokens[i2 - 1].tight = !0, tokens[i2 + 1].tight = !0);
          }
      }
    }
    function normalizeLink(url) {
      var normalized = replaceEntities(url);
      try {
        normalized = decodeURI(normalized);
      } catch {
      }
      return encodeURI(normalized);
    }
    function parseLinkDestination(state, pos) {
      var code4, level, link2, start = pos, max = state.posMax;
      if (state.src.charCodeAt(pos) === 60) {
        for (pos++; pos < max; ) {
          if (code4 = state.src.charCodeAt(pos), code4 === 10)
            return !1;
          if (code4 === 62)
            return link2 = normalizeLink(unescapeMd(state.src.slice(start + 1, pos))), state.parser.validateLink(link2) ? (state.pos = pos + 1, state.linkContent = link2, !0) : !1;
          if (code4 === 92 && pos + 1 < max) {
            pos += 2;
            continue;
          }
          pos++;
        }
        return !1;
      }
      for (level = 0; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 === 32 || code4 < 32 || code4 === 127)); ) {
        if (code4 === 92 && pos + 1 < max) {
          pos += 2;
          continue;
        }
        if (code4 === 40 && (level++, level > 1) || code4 === 41 && (level--, level < 0))
          break;
        pos++;
      }
      return start === pos || (link2 = unescapeMd(state.src.slice(start, pos)), !state.parser.validateLink(link2)) ? !1 : (state.linkContent = link2, state.pos = pos, !0);
    }
    function parseLinkTitle(state, pos) {
      var code4, start = pos, max = state.posMax, marker = state.src.charCodeAt(pos);
      if (marker !== 34 && marker !== 39 && marker !== 40)
        return !1;
      for (pos++, marker === 40 && (marker = 41); pos < max; ) {
        if (code4 = state.src.charCodeAt(pos), code4 === marker)
          return state.pos = pos + 1, state.linkContent = unescapeMd(state.src.slice(start + 1, pos)), !0;
        if (code4 === 92 && pos + 1 < max) {
          pos += 2;
          continue;
        }
        pos++;
      }
      return !1;
    }
    function normalizeReference(str) {
      return str.trim().replace(/\s+/g, " ").toUpperCase();
    }
    function parseReference(str, parser, options, env) {
      var state, labelEnd2, pos, max, code4, start, href, title, label;
      if (str.charCodeAt(0) !== 91 || str.indexOf("]:") === -1 || (state = new StateInline(str, parser, options, env, []), labelEnd2 = parseLinkLabel(state, 0), labelEnd2 < 0 || str.charCodeAt(labelEnd2 + 1) !== 58))
        return -1;
      for (max = state.posMax, pos = labelEnd2 + 2; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
        ;
      if (!parseLinkDestination(state, pos))
        return -1;
      for (href = state.linkContent, pos = state.pos, start = pos, pos = pos + 1; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
        ;
      for (pos < max && start !== pos && parseLinkTitle(state, pos) ? (title = state.linkContent, pos = state.pos) : (title = "", pos = start); pos < max && state.src.charCodeAt(pos) === 32; )
        pos++;
      return pos < max && state.src.charCodeAt(pos) !== 10 ? -1 : (label = normalizeReference(str.slice(1, labelEnd2)), typeof env.references[label] > "u" && (env.references[label] = { title, href }), pos);
    }
    function references(state) {
      var tokens = state.tokens, i2, l, content3, pos;
      if (state.env.references = state.env.references || {}, !state.inlineMode) {
        for (i2 = 1, l = tokens.length - 1; i2 < l; i2++)
          if (tokens[i2].type === "inline" && tokens[i2 - 1].type === "paragraph_open" && tokens[i2 + 1].type === "paragraph_close") {
            for (content3 = tokens[i2].content; content3.length && (pos = parseReference(content3, state.inline, state.options, state.env), !(pos < 0)); )
              content3 = content3.slice(pos).trim();
            tokens[i2].content = content3, content3.length || (tokens[i2 - 1].tight = !0, tokens[i2 + 1].tight = !0);
          }
      }
    }
    function inline(state) {
      var tokens = state.tokens, tok, i2, l;
      for (i2 = 0, l = tokens.length; i2 < l; i2++)
        tok = tokens[i2], tok.type === "inline" && state.inline.parse(tok.content, state.options, state.env, tok.children);
    }
    function footnote_block(state) {
      var i2, l, j, t, lastParagraph, list4, tokens, current, currentLabel, level = 0, insideRef = !1, refTokens = {};
      if (!!state.env.footnotes && (state.tokens = state.tokens.filter(function(tok) {
        return tok.type === "footnote_reference_open" ? (insideRef = !0, current = [], currentLabel = tok.label, !1) : tok.type === "footnote_reference_close" ? (insideRef = !1, refTokens[":" + currentLabel] = current, !1) : (insideRef && current.push(tok), !insideRef);
      }), !!state.env.footnotes.list)) {
        for (list4 = state.env.footnotes.list, state.tokens.push({
          type: "footnote_block_open",
          level: level++
        }), i2 = 0, l = list4.length; i2 < l; i2++) {
          for (state.tokens.push({
            type: "footnote_open",
            id: i2,
            level: level++
          }), list4[i2].tokens ? (tokens = [], tokens.push({
            type: "paragraph_open",
            tight: !1,
            level: level++
          }), tokens.push({
            type: "inline",
            content: "",
            level,
            children: list4[i2].tokens
          }), tokens.push({
            type: "paragraph_close",
            tight: !1,
            level: --level
          })) : list4[i2].label && (tokens = refTokens[":" + list4[i2].label]), state.tokens = state.tokens.concat(tokens), state.tokens[state.tokens.length - 1].type === "paragraph_close" ? lastParagraph = state.tokens.pop() : lastParagraph = null, t = list4[i2].count > 0 ? list4[i2].count : 1, j = 0; j < t; j++)
            state.tokens.push({
              type: "footnote_anchor",
              id: i2,
              subId: j,
              level
            });
          lastParagraph && state.tokens.push(lastParagraph), state.tokens.push({
            type: "footnote_close",
            level: --level
          });
        }
        state.tokens.push({
          type: "footnote_block_close",
          level: --level
        });
      }
    }
    var PUNCT_CHARS = ` 
()[]'".,!?-`;
    function regEscape(s) {
      return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
    }
    function abbr2(state) {
      var i2, j, l, tokens, token, text6, nodes, pos, level, reg, m, regText, blockTokens = state.tokens;
      if (!!state.env.abbreviations) {
        for (state.env.abbrRegExp || (regText = "(^|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])(" + Object.keys(state.env.abbreviations).map(function(x) {
          return x.substr(1);
        }).sort(function(a, b) {
          return b.length - a.length;
        }).map(regEscape).join("|") + ")($|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])", state.env.abbrRegExp = new RegExp(regText, "g")), reg = state.env.abbrRegExp, j = 0, l = blockTokens.length; j < l; j++)
          if (blockTokens[j].type === "inline") {
            for (tokens = blockTokens[j].children, i2 = tokens.length - 1; i2 >= 0; i2--)
              if (token = tokens[i2], token.type === "text") {
                for (pos = 0, text6 = token.content, reg.lastIndex = 0, level = token.level, nodes = []; m = reg.exec(text6); )
                  reg.lastIndex > pos && nodes.push({
                    type: "text",
                    content: text6.slice(pos, m.index + m[1].length),
                    level
                  }), nodes.push({
                    type: "abbr_open",
                    title: state.env.abbreviations[":" + m[2]],
                    level: level++
                  }), nodes.push({
                    type: "text",
                    content: m[2],
                    level
                  }), nodes.push({
                    type: "abbr_close",
                    level: --level
                  }), pos = reg.lastIndex - m[3].length;
                !nodes.length || (pos < text6.length && nodes.push({
                  type: "text",
                  content: text6.slice(pos),
                  level
                }), blockTokens[j].children = tokens = [].concat(tokens.slice(0, i2), nodes, tokens.slice(i2 + 1)));
              }
          }
      }
    }
    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig, SCOPED_ABBR = {
      c: "\xA9",
      r: "\xAE",
      p: "\xA7",
      tm: "\u2122"
    };
    function replaceScopedAbbr(str) {
      return str.indexOf("(") < 0 ? str : str.replace(SCOPED_ABBR_RE, function(match, name) {
        return SCOPED_ABBR[name.toLowerCase()];
      });
    }
    function replace2(state) {
      var i2, token, text6, inlineTokens, blkIdx;
      if (!!state.options.typographer) {
        for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--)
          if (state.tokens[blkIdx].type === "inline")
            for (inlineTokens = state.tokens[blkIdx].children, i2 = inlineTokens.length - 1; i2 >= 0; i2--)
              token = inlineTokens[i2], token.type === "text" && (text6 = token.content, text6 = replaceScopedAbbr(text6), RARE_RE.test(text6) && (text6 = text6.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1\u2014$2").replace(/(^|\s)--(\s|$)/mg, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1\u2013$2")), token.content = text6);
      }
    }
    var QUOTE_TEST_RE = /['"]/, QUOTE_RE = /['"]/g, PUNCT_RE = /[-\s()\[\]]/, APOSTROPHE = "\u2019";
    function isLetter(str, pos) {
      return pos < 0 || pos >= str.length ? !1 : !PUNCT_RE.test(str[pos]);
    }
    function replaceAt(str, index2, ch) {
      return str.substr(0, index2) + ch + str.substr(index2 + 1);
    }
    function smartquotes(state) {
      var i2, token, text6, t, pos, max, thisLevel, lastSpace, nextSpace, item, canOpen, canClose, j, isSingle, blkIdx, tokens, stack;
      if (!!state.options.typographer) {
        for (stack = [], blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--)
          if (state.tokens[blkIdx].type === "inline")
            for (tokens = state.tokens[blkIdx].children, stack.length = 0, i2 = 0; i2 < tokens.length; i2++) {
              if (token = tokens[i2], token.type !== "text" || QUOTE_TEST_RE.test(token.text))
                continue;
              for (thisLevel = tokens[i2].level, j = stack.length - 1; j >= 0 && !(stack[j].level <= thisLevel); j--)
                ;
              stack.length = j + 1, text6 = token.content, pos = 0, max = text6.length;
              OUTER:
                for (; pos < max && (QUOTE_RE.lastIndex = pos, t = QUOTE_RE.exec(text6), !!t); ) {
                  if (lastSpace = !isLetter(text6, t.index - 1), pos = t.index + 1, isSingle = t[0] === "'", nextSpace = !isLetter(text6, pos), !nextSpace && !lastSpace) {
                    isSingle && (token.content = replaceAt(token.content, t.index, APOSTROPHE));
                    continue;
                  }
                  if (canOpen = !nextSpace, canClose = !lastSpace, canClose) {
                    for (j = stack.length - 1; j >= 0 && (item = stack[j], !(stack[j].level < thisLevel)); j--)
                      if (item.single === isSingle && stack[j].level === thisLevel) {
                        item = stack[j], isSingle ? (tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]), token.content = replaceAt(token.content, t.index, state.options.quotes[3])) : (tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]), token.content = replaceAt(token.content, t.index, state.options.quotes[1])), stack.length = j;
                        continue OUTER;
                      }
                  }
                  canOpen ? stack.push({
                    token: i2,
                    pos: t.index,
                    single: isSingle,
                    level: thisLevel
                  }) : canClose && isSingle && (token.content = replaceAt(token.content, t.index, APOSTROPHE));
                }
            }
      }
    }
    var _rules = [
      ["block", block],
      ["abbr", abbr],
      ["references", references],
      ["inline", inline],
      ["footnote_tail", footnote_block],
      ["abbr2", abbr2],
      ["replacements", replace2],
      ["smartquotes", smartquotes]
    ];
    function Core() {
      this.options = {}, this.ruler = new Ruler();
      for (var i2 = 0; i2 < _rules.length; i2++)
        this.ruler.push(_rules[i2][0], _rules[i2][1]);
    }
    Core.prototype.process = function(state) {
      var i2, l, rules2;
      for (rules2 = this.ruler.getRules(""), i2 = 0, l = rules2.length; i2 < l; i2++)
        rules2[i2](state);
    };
    function StateBlock(src, parser, options, env, tokens) {
      var ch, s, start, pos, len, indent2, indent_found;
      for (this.src = src, this.parser = parser, this.options = options, this.env = env, this.tokens = tokens, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", s = this.src, indent2 = 0, indent_found = !1, start = pos = indent2 = 0, len = s.length; pos < len; pos++) {
        if (ch = s.charCodeAt(pos), !indent_found)
          if (ch === 32) {
            indent2++;
            continue;
          } else
            indent_found = !0;
        (ch === 10 || pos === len - 1) && (ch !== 10 && pos++, this.bMarks.push(start), this.eMarks.push(pos), this.tShift.push(indent2), indent_found = !1, indent2 = 0, start = pos + 1);
      }
      this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
    }
    StateBlock.prototype.isEmpty = function(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };
    StateBlock.prototype.skipEmptyLines = function(from) {
      for (var max = this.lineMax; from < max && !(this.bMarks[from] + this.tShift[from] < this.eMarks[from]); from++)
        ;
      return from;
    };
    StateBlock.prototype.skipSpaces = function(pos) {
      for (var max = this.src.length; pos < max && this.src.charCodeAt(pos) === 32; pos++)
        ;
      return pos;
    };
    StateBlock.prototype.skipChars = function(pos, code4) {
      for (var max = this.src.length; pos < max && this.src.charCodeAt(pos) === code4; pos++)
        ;
      return pos;
    };
    StateBlock.prototype.skipCharsBack = function(pos, code4, min) {
      if (pos <= min)
        return pos;
      for (; pos > min; )
        if (code4 !== this.src.charCodeAt(--pos))
          return pos + 1;
      return pos;
    };
    StateBlock.prototype.getLines = function(begin, end, indent2, keepLastLF) {
      var i2, first, last, queue, shift, line = begin;
      if (begin >= end)
        return "";
      if (line + 1 === end)
        return first = this.bMarks[line] + Math.min(this.tShift[line], indent2), last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line], this.src.slice(first, last);
      for (queue = new Array(end - begin), i2 = 0; line < end; line++, i2++)
        shift = this.tShift[line], shift > indent2 && (shift = indent2), shift < 0 && (shift = 0), first = this.bMarks[line] + shift, line + 1 < end || keepLastLF ? last = this.eMarks[line] + 1 : last = this.eMarks[line], queue[i2] = this.src.slice(first, last);
      return queue.join("");
    };
    function code3(state, startLine, endLine) {
      var nextLine, last;
      if (state.tShift[startLine] - state.blkIndent < 4)
        return !1;
      for (last = nextLine = startLine + 1; nextLine < endLine; ) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }
        if (state.tShift[nextLine] - state.blkIndent >= 4) {
          nextLine++, last = nextLine;
          continue;
        }
        break;
      }
      return state.line = nextLine, state.tokens.push({
        type: "code",
        content: state.getLines(startLine, last, 4 + state.blkIndent, !0),
        block: !0,
        lines: [startLine, state.line],
        level: state.level
      }), !0;
    }
    function fences(state, startLine, endLine, silent) {
      var marker, len, params, nextLine, mem, haveEndMarker = !1, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (pos + 3 > max || (marker = state.src.charCodeAt(pos), marker !== 126 && marker !== 96) || (mem = pos, pos = state.skipChars(pos, marker), len = pos - mem, len < 3) || (params = state.src.slice(pos, max).trim(), params.indexOf("`") >= 0))
        return !1;
      if (silent)
        return !0;
      for (nextLine = startLine; nextLine++, !(nextLine >= endLine || (pos = mem = state.bMarks[nextLine] + state.tShift[nextLine], max = state.eMarks[nextLine], pos < max && state.tShift[nextLine] < state.blkIndent)); )
        if (state.src.charCodeAt(pos) === marker && !(state.tShift[nextLine] - state.blkIndent >= 4) && (pos = state.skipChars(pos, marker), !(pos - mem < len) && (pos = state.skipSpaces(pos), !(pos < max)))) {
          haveEndMarker = !0;
          break;
        }
      return len = state.tShift[startLine], state.line = nextLine + (haveEndMarker ? 1 : 0), state.tokens.push({
        type: "fence",
        params,
        content: state.getLines(startLine + 1, nextLine, len, !0),
        lines: [startLine, state.line],
        level: state.level
      }), !0;
    }
    function blockquote2(state, startLine, endLine, silent) {
      var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines, terminatorRules, i2, l, terminate, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (pos > max || state.src.charCodeAt(pos++) !== 62 || state.level >= state.options.maxNesting)
        return !1;
      if (silent)
        return !0;
      for (state.src.charCodeAt(pos) === 32 && pos++, oldIndent = state.blkIndent, state.blkIndent = 0, oldBMarks = [state.bMarks[startLine]], state.bMarks[startLine] = pos, pos = pos < max ? state.skipSpaces(pos) : pos, lastLineEmpty = pos >= max, oldTShift = [state.tShift[startLine]], state.tShift[startLine] = pos - state.bMarks[startLine], terminatorRules = state.parser.ruler.getRules("blockquote"), nextLine = startLine + 1; nextLine < endLine && (pos = state.bMarks[nextLine] + state.tShift[nextLine], max = state.eMarks[nextLine], !(pos >= max)); nextLine++) {
        if (state.src.charCodeAt(pos++) === 62) {
          state.src.charCodeAt(pos) === 32 && pos++, oldBMarks.push(state.bMarks[nextLine]), state.bMarks[nextLine] = pos, pos = pos < max ? state.skipSpaces(pos) : pos, lastLineEmpty = pos >= max, oldTShift.push(state.tShift[nextLine]), state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }
        if (lastLineEmpty)
          break;
        for (terminate = !1, i2 = 0, l = terminatorRules.length; i2 < l; i2++)
          if (terminatorRules[i2](state, nextLine, endLine, !0)) {
            terminate = !0;
            break;
          }
        if (terminate)
          break;
        oldBMarks.push(state.bMarks[nextLine]), oldTShift.push(state.tShift[nextLine]), state.tShift[nextLine] = -1337;
      }
      for (oldParentType = state.parentType, state.parentType = "blockquote", state.tokens.push({
        type: "blockquote_open",
        lines: lines = [startLine, 0],
        level: state.level++
      }), state.parser.tokenize(state, startLine, nextLine), state.tokens.push({
        type: "blockquote_close",
        level: --state.level
      }), state.parentType = oldParentType, lines[1] = state.line, i2 = 0; i2 < oldTShift.length; i2++)
        state.bMarks[i2 + startLine] = oldBMarks[i2], state.tShift[i2 + startLine] = oldTShift[i2];
      return state.blkIndent = oldIndent, !0;
    }
    function hr(state, startLine, endLine, silent) {
      var marker, cnt, ch, pos = state.bMarks[startLine], max = state.eMarks[startLine];
      if (pos += state.tShift[startLine], pos > max || (marker = state.src.charCodeAt(pos++), marker !== 42 && marker !== 45 && marker !== 95))
        return !1;
      for (cnt = 1; pos < max; ) {
        if (ch = state.src.charCodeAt(pos++), ch !== marker && ch !== 32)
          return !1;
        ch === marker && cnt++;
      }
      return cnt < 3 ? !1 : (silent || (state.line = startLine + 1, state.tokens.push({
        type: "hr",
        lines: [startLine, state.line],
        level: state.level
      })), !0);
    }
    function skipBulletListMarker(state, startLine) {
      var marker, pos, max;
      return pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine], pos >= max || (marker = state.src.charCodeAt(pos++), marker !== 42 && marker !== 45 && marker !== 43) || pos < max && state.src.charCodeAt(pos) !== 32 ? -1 : pos;
    }
    function skipOrderedListMarker(state, startLine) {
      var ch, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (pos + 1 >= max || (ch = state.src.charCodeAt(pos++), ch < 48 || ch > 57))
        return -1;
      for (; ; ) {
        if (pos >= max)
          return -1;
        if (ch = state.src.charCodeAt(pos++), !(ch >= 48 && ch <= 57)) {
          if (ch === 41 || ch === 46)
            break;
          return -1;
        }
      }
      return pos < max && state.src.charCodeAt(pos) !== 32 ? -1 : pos;
    }
    function markTightParagraphs(state, idx) {
      var i2, l, level = state.level + 2;
      for (i2 = idx + 2, l = state.tokens.length - 2; i2 < l; i2++)
        state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open" && (state.tokens[i2 + 2].tight = !0, state.tokens[i2].tight = !0, i2 += 2);
    }
    function list3(state, startLine, endLine, silent) {
      var nextLine, indent2, oldTShift, oldIndent, oldTight, oldParentType, start, posAfterMarker, max, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = !0, terminatorRules, i2, l, terminate;
      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0)
        isOrdered = !0;
      else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0)
        isOrdered = !1;
      else
        return !1;
      if (state.level >= state.options.maxNesting)
        return !1;
      if (markerCharCode = state.src.charCodeAt(posAfterMarker - 1), silent)
        return !0;
      for (listTokIdx = state.tokens.length, isOrdered ? (start = state.bMarks[startLine] + state.tShift[startLine], markerValue = Number(state.src.substr(start, posAfterMarker - start - 1)), state.tokens.push({
        type: "ordered_list_open",
        order: markerValue,
        lines: listLines = [startLine, 0],
        level: state.level++
      })) : state.tokens.push({
        type: "bullet_list_open",
        lines: listLines = [startLine, 0],
        level: state.level++
      }), nextLine = startLine, prevEmptyEnd = !1, terminatorRules = state.parser.ruler.getRules("list"); nextLine < endLine && (contentStart = state.skipSpaces(posAfterMarker), max = state.eMarks[nextLine], contentStart >= max ? indentAfterMarker = 1 : indentAfterMarker = contentStart - posAfterMarker, indentAfterMarker > 4 && (indentAfterMarker = 1), indentAfterMarker < 1 && (indentAfterMarker = 1), indent2 = posAfterMarker - state.bMarks[nextLine] + indentAfterMarker, state.tokens.push({
        type: "list_item_open",
        lines: itemLines = [startLine, 0],
        level: state.level++
      }), oldIndent = state.blkIndent, oldTight = state.tight, oldTShift = state.tShift[startLine], oldParentType = state.parentType, state.tShift[startLine] = contentStart - state.bMarks[startLine], state.blkIndent = indent2, state.tight = !0, state.parentType = "list", state.parser.tokenize(state, startLine, endLine, !0), (!state.tight || prevEmptyEnd) && (tight = !1), prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1), state.blkIndent = oldIndent, state.tShift[startLine] = oldTShift, state.tight = oldTight, state.parentType = oldParentType, state.tokens.push({
        type: "list_item_close",
        level: --state.level
      }), nextLine = startLine = state.line, itemLines[1] = nextLine, contentStart = state.bMarks[startLine], !(nextLine >= endLine || state.isEmpty(nextLine) || state.tShift[nextLine] < state.blkIndent)); ) {
        for (terminate = !1, i2 = 0, l = terminatorRules.length; i2 < l; i2++)
          if (terminatorRules[i2](state, nextLine, endLine, !0)) {
            terminate = !0;
            break;
          }
        if (terminate)
          break;
        if (isOrdered) {
          if (posAfterMarker = skipOrderedListMarker(state, nextLine), posAfterMarker < 0)
            break;
        } else if (posAfterMarker = skipBulletListMarker(state, nextLine), posAfterMarker < 0)
          break;
        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1))
          break;
      }
      return state.tokens.push({
        type: isOrdered ? "ordered_list_close" : "bullet_list_close",
        level: --state.level
      }), listLines[1] = nextLine, state.line = nextLine, tight && markTightParagraphs(state, listTokIdx), !0;
    }
    function footnote2(state, startLine, endLine, silent) {
      var oldBMark, oldTShift, oldParentType, pos, label, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (start + 4 > max || state.src.charCodeAt(start) !== 91 || state.src.charCodeAt(start + 1) !== 94 || state.level >= state.options.maxNesting)
        return !1;
      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 32)
          return !1;
        if (state.src.charCodeAt(pos) === 93)
          break;
      }
      return pos === start + 2 || pos + 1 >= max || state.src.charCodeAt(++pos) !== 58 ? !1 : (silent || (pos++, state.env.footnotes || (state.env.footnotes = {}), state.env.footnotes.refs || (state.env.footnotes.refs = {}), label = state.src.slice(start + 2, pos - 2), state.env.footnotes.refs[":" + label] = -1, state.tokens.push({
        type: "footnote_reference_open",
        label,
        level: state.level++
      }), oldBMark = state.bMarks[startLine], oldTShift = state.tShift[startLine], oldParentType = state.parentType, state.tShift[startLine] = state.skipSpaces(pos) - pos, state.bMarks[startLine] = pos, state.blkIndent += 4, state.parentType = "footnote", state.tShift[startLine] < state.blkIndent && (state.tShift[startLine] += state.blkIndent, state.bMarks[startLine] -= state.blkIndent), state.parser.tokenize(state, startLine, endLine, !0), state.parentType = oldParentType, state.blkIndent -= 4, state.tShift[startLine] = oldTShift, state.bMarks[startLine] = oldBMark, state.tokens.push({
        type: "footnote_reference_close",
        level: --state.level
      })), !0);
    }
    function heading2(state, startLine, endLine, silent) {
      var ch, level, tmp, pos = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
      if (pos >= max || (ch = state.src.charCodeAt(pos), ch !== 35 || pos >= max))
        return !1;
      for (level = 1, ch = state.src.charCodeAt(++pos); ch === 35 && pos < max && level <= 6; )
        level++, ch = state.src.charCodeAt(++pos);
      return level > 6 || pos < max && ch !== 32 ? !1 : (silent || (max = state.skipCharsBack(max, 32, pos), tmp = state.skipCharsBack(max, 35, pos), tmp > pos && state.src.charCodeAt(tmp - 1) === 32 && (max = tmp), state.line = startLine + 1, state.tokens.push({
        type: "heading_open",
        hLevel: level,
        lines: [startLine, state.line],
        level: state.level
      }), pos < max && state.tokens.push({
        type: "inline",
        content: state.src.slice(pos, max).trim(),
        level: state.level + 1,
        lines: [startLine, state.line],
        children: []
      }), state.tokens.push({ type: "heading_close", hLevel: level, level: state.level })), !0);
    }
    function lheading(state, startLine, endLine) {
      var marker, pos, max, next = startLine + 1;
      return next >= endLine || state.tShift[next] < state.blkIndent || state.tShift[next] - state.blkIndent > 3 || (pos = state.bMarks[next] + state.tShift[next], max = state.eMarks[next], pos >= max) || (marker = state.src.charCodeAt(pos), marker !== 45 && marker !== 61) || (pos = state.skipChars(pos, marker), pos = state.skipSpaces(pos), pos < max) ? !1 : (pos = state.bMarks[startLine] + state.tShift[startLine], state.line = next + 1, state.tokens.push({
        type: "heading_open",
        hLevel: marker === 61 ? 1 : 2,
        lines: [startLine, state.line],
        level: state.level
      }), state.tokens.push({
        type: "inline",
        content: state.src.slice(pos, state.eMarks[startLine]).trim(),
        level: state.level + 1,
        lines: [startLine, state.line - 1],
        children: []
      }), state.tokens.push({
        type: "heading_close",
        hLevel: marker === 61 ? 1 : 2,
        level: state.level
      }), !0);
    }
    var html_blocks = {};
    [
      "article",
      "aside",
      "button",
      "blockquote",
      "body",
      "canvas",
      "caption",
      "col",
      "colgroup",
      "dd",
      "div",
      "dl",
      "dt",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "iframe",
      "li",
      "map",
      "object",
      "ol",
      "output",
      "p",
      "pre",
      "progress",
      "script",
      "section",
      "style",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "tr",
      "thead",
      "ul",
      "video"
    ].forEach(function(name) {
      html_blocks[name] = !0;
    });
    var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/, HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
    function isLetter$1(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    function htmlblock(state, startLine, endLine, silent) {
      var ch, match, nextLine, pos = state.bMarks[startLine], max = state.eMarks[startLine], shift = state.tShift[startLine];
      if (pos += shift, !state.options.html || shift > 3 || pos + 2 >= max || state.src.charCodeAt(pos) !== 60)
        return !1;
      if (ch = state.src.charCodeAt(pos + 1), ch === 33 || ch === 63) {
        if (silent)
          return !0;
      } else if (ch === 47 || isLetter$1(ch)) {
        if (ch === 47) {
          if (match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE), !match)
            return !1;
        } else if (match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE), !match)
          return !1;
        if (html_blocks[match[1].toLowerCase()] !== !0)
          return !1;
        if (silent)
          return !0;
      } else
        return !1;
      for (nextLine = startLine + 1; nextLine < state.lineMax && !state.isEmpty(nextLine); )
        nextLine++;
      return state.line = nextLine, state.tokens.push({
        type: "htmlblock",
        level: state.level,
        lines: [startLine, state.line],
        content: state.getLines(startLine, nextLine, 0, !0)
      }), !0;
    }
    function getLine(state, line) {
      var pos = state.bMarks[line] + state.blkIndent, max = state.eMarks[line];
      return state.src.substr(pos, max - pos);
    }
    function table2(state, startLine, endLine, silent) {
      var ch, lineText, pos, i2, nextLine, rows, cell, aligns, t, tableLines, tbodyLines;
      if (startLine + 2 > endLine || (nextLine = startLine + 1, state.tShift[nextLine] < state.blkIndent) || (pos = state.bMarks[nextLine] + state.tShift[nextLine], pos >= state.eMarks[nextLine]) || (ch = state.src.charCodeAt(pos), ch !== 124 && ch !== 45 && ch !== 58) || (lineText = getLine(state, startLine + 1), !/^[-:| ]+$/.test(lineText)) || (rows = lineText.split("|"), rows <= 2))
        return !1;
      for (aligns = [], i2 = 0; i2 < rows.length; i2++) {
        if (t = rows[i2].trim(), !t) {
          if (i2 === 0 || i2 === rows.length - 1)
            continue;
          return !1;
        }
        if (!/^:?-+:?$/.test(t))
          return !1;
        t.charCodeAt(t.length - 1) === 58 ? aligns.push(t.charCodeAt(0) === 58 ? "center" : "right") : t.charCodeAt(0) === 58 ? aligns.push("left") : aligns.push("");
      }
      if (lineText = getLine(state, startLine).trim(), lineText.indexOf("|") === -1 || (rows = lineText.replace(/^\||\|$/g, "").split("|"), aligns.length !== rows.length))
        return !1;
      if (silent)
        return !0;
      for (state.tokens.push({
        type: "table_open",
        lines: tableLines = [startLine, 0],
        level: state.level++
      }), state.tokens.push({
        type: "thead_open",
        lines: [startLine, startLine + 1],
        level: state.level++
      }), state.tokens.push({
        type: "tr_open",
        lines: [startLine, startLine + 1],
        level: state.level++
      }), i2 = 0; i2 < rows.length; i2++)
        state.tokens.push({
          type: "th_open",
          align: aligns[i2],
          lines: [startLine, startLine + 1],
          level: state.level++
        }), state.tokens.push({
          type: "inline",
          content: rows[i2].trim(),
          lines: [startLine, startLine + 1],
          level: state.level,
          children: []
        }), state.tokens.push({ type: "th_close", level: --state.level });
      for (state.tokens.push({ type: "tr_close", level: --state.level }), state.tokens.push({ type: "thead_close", level: --state.level }), state.tokens.push({
        type: "tbody_open",
        lines: tbodyLines = [startLine + 2, 0],
        level: state.level++
      }), nextLine = startLine + 2; nextLine < endLine && !(state.tShift[nextLine] < state.blkIndent || (lineText = getLine(state, nextLine).trim(), lineText.indexOf("|") === -1)); nextLine++) {
        for (rows = lineText.replace(/^\||\|$/g, "").split("|"), state.tokens.push({ type: "tr_open", level: state.level++ }), i2 = 0; i2 < rows.length; i2++)
          state.tokens.push({ type: "td_open", align: aligns[i2], level: state.level++ }), cell = rows[i2].substring(rows[i2].charCodeAt(0) === 124 ? 1 : 0, rows[i2].charCodeAt(rows[i2].length - 1) === 124 ? rows[i2].length - 1 : rows[i2].length).trim(), state.tokens.push({
            type: "inline",
            content: cell,
            level: state.level,
            children: []
          }), state.tokens.push({ type: "td_close", level: --state.level });
        state.tokens.push({ type: "tr_close", level: --state.level });
      }
      return state.tokens.push({ type: "tbody_close", level: --state.level }), state.tokens.push({ type: "table_close", level: --state.level }), tableLines[1] = tbodyLines[1] = nextLine, state.line = nextLine, !0;
    }
    function skipMarker(state, line) {
      var pos, marker, start = state.bMarks[line] + state.tShift[line], max = state.eMarks[line];
      return start >= max || (marker = state.src.charCodeAt(start++), marker !== 126 && marker !== 58) || (pos = state.skipSpaces(start), start === pos) || pos >= max ? -1 : pos;
    }
    function markTightParagraphs$1(state, idx) {
      var i2, l, level = state.level + 2;
      for (i2 = idx + 2, l = state.tokens.length - 2; i2 < l; i2++)
        state.tokens[i2].level === level && state.tokens[i2].type === "paragraph_open" && (state.tokens[i2 + 2].tight = !0, state.tokens[i2].tight = !0, i2 += 2);
    }
    function deflist(state, startLine, endLine, silent) {
      var contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, nextLine, oldIndent, oldDDIndent, oldParentType, oldTShift, oldTight, prevEmptyEnd, tight;
      if (silent)
        return state.ddIndent < 0 ? !1 : skipMarker(state, startLine) >= 0;
      if (nextLine = startLine + 1, state.isEmpty(nextLine) && ++nextLine > endLine || state.tShift[nextLine] < state.blkIndent || (contentStart = skipMarker(state, nextLine), contentStart < 0) || state.level >= state.options.maxNesting)
        return !1;
      listTokIdx = state.tokens.length, state.tokens.push({
        type: "dl_open",
        lines: listLines = [startLine, 0],
        level: state.level++
      }), dtLine = startLine, ddLine = nextLine;
      OUTER:
        for (; ; ) {
          for (tight = !0, prevEmptyEnd = !1, state.tokens.push({
            type: "dt_open",
            lines: [dtLine, dtLine],
            level: state.level++
          }), state.tokens.push({
            type: "inline",
            content: state.getLines(dtLine, dtLine + 1, state.blkIndent, !1).trim(),
            level: state.level + 1,
            lines: [dtLine, dtLine],
            children: []
          }), state.tokens.push({
            type: "dt_close",
            level: --state.level
          }); ; ) {
            if (state.tokens.push({
              type: "dd_open",
              lines: itemLines = [nextLine, 0],
              level: state.level++
            }), oldTight = state.tight, oldDDIndent = state.ddIndent, oldIndent = state.blkIndent, oldTShift = state.tShift[ddLine], oldParentType = state.parentType, state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2, state.tShift[ddLine] = contentStart - state.bMarks[ddLine], state.tight = !0, state.parentType = "deflist", state.parser.tokenize(state, ddLine, endLine, !0), (!state.tight || prevEmptyEnd) && (tight = !1), prevEmptyEnd = state.line - ddLine > 1 && state.isEmpty(state.line - 1), state.tShift[ddLine] = oldTShift, state.tight = oldTight, state.parentType = oldParentType, state.blkIndent = oldIndent, state.ddIndent = oldDDIndent, state.tokens.push({
              type: "dd_close",
              level: --state.level
            }), itemLines[1] = nextLine = state.line, nextLine >= endLine || state.tShift[nextLine] < state.blkIndent)
              break OUTER;
            if (contentStart = skipMarker(state, nextLine), contentStart < 0)
              break;
            ddLine = nextLine;
          }
          if (nextLine >= endLine || (dtLine = nextLine, state.isEmpty(dtLine)) || state.tShift[dtLine] < state.blkIndent || (ddLine = dtLine + 1, ddLine >= endLine) || (state.isEmpty(ddLine) && ddLine++, ddLine >= endLine) || state.tShift[ddLine] < state.blkIndent || (contentStart = skipMarker(state, ddLine), contentStart < 0))
            break;
        }
      return state.tokens.push({
        type: "dl_close",
        level: --state.level
      }), listLines[1] = nextLine, state.line = nextLine, tight && markTightParagraphs$1(state, listTokIdx), !0;
    }
    function paragraph2(state, startLine) {
      var endLine, content3, terminate, i2, l, nextLine = startLine + 1, terminatorRules;
      if (endLine = state.lineMax, nextLine < endLine && !state.isEmpty(nextLine)) {
        for (terminatorRules = state.parser.ruler.getRules("paragraph"); nextLine < endLine && !state.isEmpty(nextLine); nextLine++)
          if (!(state.tShift[nextLine] - state.blkIndent > 3)) {
            for (terminate = !1, i2 = 0, l = terminatorRules.length; i2 < l; i2++)
              if (terminatorRules[i2](state, nextLine, endLine, !0)) {
                terminate = !0;
                break;
              }
            if (terminate)
              break;
          }
      }
      return content3 = state.getLines(startLine, nextLine, state.blkIndent, !1).trim(), state.line = nextLine, content3.length && (state.tokens.push({
        type: "paragraph_open",
        tight: !1,
        lines: [startLine, state.line],
        level: state.level
      }), state.tokens.push({
        type: "inline",
        content: content3,
        level: state.level + 1,
        lines: [startLine, state.line],
        children: []
      }), state.tokens.push({
        type: "paragraph_close",
        tight: !1,
        level: state.level
      })), !0;
    }
    var _rules$1 = [
      ["code", code3],
      ["fences", fences, ["paragraph", "blockquote", "list"]],
      ["blockquote", blockquote2, ["paragraph", "blockquote", "list"]],
      ["hr", hr, ["paragraph", "blockquote", "list"]],
      ["list", list3, ["paragraph", "blockquote"]],
      ["footnote", footnote2, ["paragraph"]],
      ["heading", heading2, ["paragraph", "blockquote"]],
      ["lheading", lheading],
      ["htmlblock", htmlblock, ["paragraph", "blockquote"]],
      ["table", table2, ["paragraph"]],
      ["deflist", deflist, ["paragraph"]],
      ["paragraph", paragraph2]
    ];
    function ParserBlock() {
      this.ruler = new Ruler();
      for (var i2 = 0; i2 < _rules$1.length; i2++)
        this.ruler.push(_rules$1[i2][0], _rules$1[i2][1], {
          alt: (_rules$1[i2][2] || []).slice()
        });
    }
    ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
      for (var rules2 = this.ruler.getRules(""), len = rules2.length, line = startLine, hasEmptyLines = !1, ok2, i2; line < endLine && (state.line = line = state.skipEmptyLines(line), !(line >= endLine || state.tShift[line] < state.blkIndent)); ) {
        for (i2 = 0; i2 < len && (ok2 = rules2[i2](state, line, endLine, !1), !ok2); i2++)
          ;
        if (state.tight = !hasEmptyLines, state.isEmpty(state.line - 1) && (hasEmptyLines = !0), line = state.line, line < endLine && state.isEmpty(line)) {
          if (hasEmptyLines = !0, line++, line < endLine && state.parentType === "list" && state.isEmpty(line))
            break;
          state.line = line;
        }
      }
    };
    var TABS_SCAN_RE = /[\n\t]/g, NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, SPACES_RE = /\u00a0/g;
    ParserBlock.prototype.parse = function(str, options, env, outTokens) {
      var state, lineStart = 0, lastTabPos = 0;
      if (!str)
        return [];
      str = str.replace(SPACES_RE, " "), str = str.replace(NEWLINES_RE, `
`), str.indexOf("	") >= 0 && (str = str.replace(TABS_SCAN_RE, function(match, offset) {
        var result;
        return str.charCodeAt(offset) === 10 ? (lineStart = offset + 1, lastTabPos = 0, match) : (result = "    ".slice((offset - lineStart - lastTabPos) % 4), lastTabPos = offset - lineStart + 1, result);
      })), state = new StateBlock(str, this, options, env, outTokens), this.tokenize(state, state.line, state.lineMax);
    };
    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 92:
        case 96:
        case 42:
        case 95:
        case 94:
        case 91:
        case 93:
        case 33:
        case 38:
        case 60:
        case 62:
        case 123:
        case 125:
        case 36:
        case 37:
        case 64:
        case 126:
        case 43:
        case 61:
        case 58:
          return !0;
        default:
          return !1;
      }
    }
    function text5(state, silent) {
      for (var pos = state.pos; pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos)); )
        pos++;
      return pos === state.pos ? !1 : (silent || (state.pending += state.src.slice(state.pos, pos)), state.pos = pos, !0);
    }
    function newline(state, silent) {
      var pmax, max, pos = state.pos;
      if (state.src.charCodeAt(pos) !== 10)
        return !1;
      if (pmax = state.pending.length - 1, max = state.posMax, !silent)
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32)
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            for (var i2 = pmax - 2; i2 >= 0; i2--)
              if (state.pending.charCodeAt(i2) !== 32) {
                state.pending = state.pending.substring(0, i2 + 1);
                break;
              }
            state.push({
              type: "hardbreak",
              level: state.level
            });
          } else
            state.pending = state.pending.slice(0, -1), state.push({
              type: "softbreak",
              level: state.level
            });
        else
          state.push({
            type: "softbreak",
            level: state.level
          });
      for (pos++; pos < max && state.src.charCodeAt(pos) === 32; )
        pos++;
      return state.pos = pos, !0;
    }
    var ESCAPED = [];
    for (i = 0; i < 256; i++)
      ESCAPED.push(0);
    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });
    function escape2(state, silent) {
      var ch, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 92)
        return !1;
      if (pos++, pos < max) {
        if (ch = state.src.charCodeAt(pos), ch < 256 && ESCAPED[ch] !== 0)
          return silent || (state.pending += state.src[pos]), state.pos += 2, !0;
        if (ch === 10) {
          for (silent || state.push({
            type: "hardbreak",
            level: state.level
          }), pos++; pos < max && state.src.charCodeAt(pos) === 32; )
            pos++;
          return state.pos = pos, !0;
        }
      }
      return silent || (state.pending += "\\"), state.pos++, !0;
    }
    function backticks(state, silent) {
      var start, max, marker, matchStart, matchEnd, pos = state.pos, ch = state.src.charCodeAt(pos);
      if (ch !== 96)
        return !1;
      for (start = pos, pos++, max = state.posMax; pos < max && state.src.charCodeAt(pos) === 96; )
        pos++;
      for (marker = state.src.slice(start, pos), matchStart = matchEnd = pos; (matchStart = state.src.indexOf("`", matchEnd)) !== -1; ) {
        for (matchEnd = matchStart + 1; matchEnd < max && state.src.charCodeAt(matchEnd) === 96; )
          matchEnd++;
        if (matchEnd - matchStart === marker.length)
          return silent || state.push({
            type: "code",
            content: state.src.slice(pos, matchStart).replace(/[ \n]+/g, " ").trim(),
            block: !1,
            level: state.level
          }), state.pos = matchEnd, !0;
      }
      return silent || (state.pending += marker), state.pos += marker.length, !0;
    }
    function del(state, silent) {
      var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
      if (state.src.charCodeAt(start) !== 126 || silent || start + 4 >= max || state.src.charCodeAt(start + 1) !== 126 || state.level >= state.options.maxNesting || (lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1, nextChar = state.src.charCodeAt(start + 2), lastChar === 126) || nextChar === 126 || nextChar === 32 || nextChar === 10)
        return !1;
      for (pos = start + 2; pos < max && state.src.charCodeAt(pos) === 126; )
        pos++;
      if (pos > start + 3)
        return state.pos += pos - start, silent || (state.pending += state.src.slice(start, pos)), !0;
      for (state.pos = start + 2, stack = 1; state.pos + 1 < max; ) {
        if (state.src.charCodeAt(state.pos) === 126 && state.src.charCodeAt(state.pos + 1) === 126 && (lastChar = state.src.charCodeAt(state.pos - 1), nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1, nextChar !== 126 && lastChar !== 126 && (lastChar !== 32 && lastChar !== 10 ? stack-- : nextChar !== 32 && nextChar !== 10 && stack++, stack <= 0))) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return found ? (state.posMax = state.pos, state.pos = start + 2, silent || (state.push({ type: "del_open", level: state.level++ }), state.parser.tokenize(state), state.push({ type: "del_close", level: --state.level })), state.pos = state.posMax + 2, state.posMax = max, !0) : (state.pos = start, !1);
    }
    function ins(state, silent) {
      var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
      if (state.src.charCodeAt(start) !== 43 || silent || start + 4 >= max || state.src.charCodeAt(start + 1) !== 43 || state.level >= state.options.maxNesting || (lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1, nextChar = state.src.charCodeAt(start + 2), lastChar === 43) || nextChar === 43 || nextChar === 32 || nextChar === 10)
        return !1;
      for (pos = start + 2; pos < max && state.src.charCodeAt(pos) === 43; )
        pos++;
      if (pos !== start + 2)
        return state.pos += pos - start, silent || (state.pending += state.src.slice(start, pos)), !0;
      for (state.pos = start + 2, stack = 1; state.pos + 1 < max; ) {
        if (state.src.charCodeAt(state.pos) === 43 && state.src.charCodeAt(state.pos + 1) === 43 && (lastChar = state.src.charCodeAt(state.pos - 1), nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1, nextChar !== 43 && lastChar !== 43 && (lastChar !== 32 && lastChar !== 10 ? stack-- : nextChar !== 32 && nextChar !== 10 && stack++, stack <= 0))) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return found ? (state.posMax = state.pos, state.pos = start + 2, silent || (state.push({ type: "ins_open", level: state.level++ }), state.parser.tokenize(state), state.push({ type: "ins_close", level: --state.level })), state.pos = state.posMax + 2, state.posMax = max, !0) : (state.pos = start, !1);
    }
    function mark2(state, silent) {
      var found, pos, stack, max = state.posMax, start = state.pos, lastChar, nextChar;
      if (state.src.charCodeAt(start) !== 61 || silent || start + 4 >= max || state.src.charCodeAt(start + 1) !== 61 || state.level >= state.options.maxNesting || (lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1, nextChar = state.src.charCodeAt(start + 2), lastChar === 61) || nextChar === 61 || nextChar === 32 || nextChar === 10)
        return !1;
      for (pos = start + 2; pos < max && state.src.charCodeAt(pos) === 61; )
        pos++;
      if (pos !== start + 2)
        return state.pos += pos - start, silent || (state.pending += state.src.slice(start, pos)), !0;
      for (state.pos = start + 2, stack = 1; state.pos + 1 < max; ) {
        if (state.src.charCodeAt(state.pos) === 61 && state.src.charCodeAt(state.pos + 1) === 61 && (lastChar = state.src.charCodeAt(state.pos - 1), nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1, nextChar !== 61 && lastChar !== 61 && (lastChar !== 32 && lastChar !== 10 ? stack-- : nextChar !== 32 && nextChar !== 10 && stack++, stack <= 0))) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return found ? (state.posMax = state.pos, state.pos = start + 2, silent || (state.push({ type: "mark_open", level: state.level++ }), state.parser.tokenize(state), state.push({ type: "mark_close", level: --state.level })), state.pos = state.posMax + 2, state.posMax = max, !0) : (state.pos = start, !1);
    }
    function isAlphaNum(code4) {
      return code4 >= 48 && code4 <= 57 || code4 >= 65 && code4 <= 90 || code4 >= 97 && code4 <= 122;
    }
    function scanDelims(state, start) {
      var pos = start, lastChar, nextChar, count, can_open = !0, can_close = !0, max = state.posMax, marker = state.src.charCodeAt(start);
      for (lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1; pos < max && state.src.charCodeAt(pos) === marker; )
        pos++;
      return pos >= max && (can_open = !1), count = pos - start, count >= 4 ? can_open = can_close = !1 : (nextChar = pos < max ? state.src.charCodeAt(pos) : -1, (nextChar === 32 || nextChar === 10) && (can_open = !1), (lastChar === 32 || lastChar === 10) && (can_close = !1), marker === 95 && (isAlphaNum(lastChar) && (can_open = !1), isAlphaNum(nextChar) && (can_close = !1))), {
        can_open,
        can_close,
        delims: count
      };
    }
    function emphasis2(state, silent) {
      var startCount, count, found, oldCount, newCount, stack, res, max = state.posMax, start = state.pos, marker = state.src.charCodeAt(start);
      if (marker !== 95 && marker !== 42 || silent)
        return !1;
      if (res = scanDelims(state, start), startCount = res.delims, !res.can_open)
        return state.pos += startCount, silent || (state.pending += state.src.slice(start, state.pos)), !0;
      if (state.level >= state.options.maxNesting)
        return !1;
      for (state.pos = start + startCount, stack = [startCount]; state.pos < max; ) {
        if (state.src.charCodeAt(state.pos) === marker) {
          if (res = scanDelims(state, state.pos), count = res.delims, res.can_close) {
            for (oldCount = stack.pop(), newCount = count; oldCount !== newCount; ) {
              if (newCount < oldCount) {
                stack.push(oldCount - newCount);
                break;
              }
              if (newCount -= oldCount, stack.length === 0)
                break;
              state.pos += oldCount, oldCount = stack.pop();
            }
            if (stack.length === 0) {
              startCount = oldCount, found = !0;
              break;
            }
            state.pos += count;
            continue;
          }
          res.can_open && stack.push(count), state.pos += count;
          continue;
        }
        state.parser.skipToken(state);
      }
      return found ? (state.posMax = state.pos, state.pos = start + startCount, silent || ((startCount === 2 || startCount === 3) && state.push({ type: "strong_open", level: state.level++ }), (startCount === 1 || startCount === 3) && state.push({ type: "em_open", level: state.level++ }), state.parser.tokenize(state), (startCount === 1 || startCount === 3) && state.push({ type: "em_close", level: --state.level }), (startCount === 2 || startCount === 3) && state.push({ type: "strong_close", level: --state.level })), state.pos = state.posMax + startCount, state.posMax = max, !0) : (state.pos = start, !1);
    }
    var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    function sub(state, silent) {
      var found, content3, max = state.posMax, start = state.pos;
      if (state.src.charCodeAt(start) !== 126 || silent || start + 2 >= max || state.level >= state.options.maxNesting)
        return !1;
      for (state.pos = start + 1; state.pos < max; ) {
        if (state.src.charCodeAt(state.pos) === 126) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return !found || start + 1 === state.pos || (content3 = state.src.slice(start + 1, state.pos), content3.match(/(^|[^\\])(\\\\)*\s/)) ? (state.pos = start, !1) : (state.posMax = state.pos, state.pos = start + 1, silent || state.push({
        type: "sub",
        level: state.level,
        content: content3.replace(UNESCAPE_RE, "$1")
      }), state.pos = state.posMax + 1, state.posMax = max, !0);
    }
    var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
    function sup(state, silent) {
      var found, content3, max = state.posMax, start = state.pos;
      if (state.src.charCodeAt(start) !== 94 || silent || start + 2 >= max || state.level >= state.options.maxNesting)
        return !1;
      for (state.pos = start + 1; state.pos < max; ) {
        if (state.src.charCodeAt(state.pos) === 94) {
          found = !0;
          break;
        }
        state.parser.skipToken(state);
      }
      return !found || start + 1 === state.pos || (content3 = state.src.slice(start + 1, state.pos), content3.match(/(^|[^\\])(\\\\)*\s/)) ? (state.pos = start, !1) : (state.posMax = state.pos, state.pos = start + 1, silent || state.push({
        type: "sup",
        level: state.level,
        content: content3.replace(UNESCAPE_RE$1, "$1")
      }), state.pos = state.posMax + 1, state.posMax = max, !0);
    }
    function links2(state, silent) {
      var labelStart, labelEnd2, label, href, title, pos, ref, code4, isImage = !1, oldPos = state.pos, max = state.posMax, start = state.pos, marker = state.src.charCodeAt(start);
      if (marker === 33 && (isImage = !0, marker = state.src.charCodeAt(++start)), marker !== 91 || state.level >= state.options.maxNesting || (labelStart = start + 1, labelEnd2 = parseLinkLabel(state, start), labelEnd2 < 0))
        return !1;
      if (pos = labelEnd2 + 1, pos < max && state.src.charCodeAt(pos) === 40) {
        for (pos++; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
          ;
        if (pos >= max)
          return !1;
        for (start = pos, parseLinkDestination(state, pos) ? (href = state.linkContent, pos = state.pos) : href = "", start = pos; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
          ;
        if (pos < max && start !== pos && parseLinkTitle(state, pos))
          for (title = state.linkContent, pos = state.pos; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
            ;
        else
          title = "";
        if (pos >= max || state.src.charCodeAt(pos) !== 41)
          return state.pos = oldPos, !1;
        pos++;
      } else {
        if (state.linkLevel > 0)
          return !1;
        for (; pos < max && (code4 = state.src.charCodeAt(pos), !(code4 !== 32 && code4 !== 10)); pos++)
          ;
        if (pos < max && state.src.charCodeAt(pos) === 91 && (start = pos + 1, pos = parseLinkLabel(state, pos), pos >= 0 ? label = state.src.slice(start, pos++) : pos = start - 1), label || (typeof label > "u" && (pos = labelEnd2 + 1), label = state.src.slice(labelStart, labelEnd2)), ref = state.env.references[normalizeReference(label)], !ref)
          return state.pos = oldPos, !1;
        href = ref.href, title = ref.title;
      }
      return silent || (state.pos = labelStart, state.posMax = labelEnd2, isImage ? state.push({
        type: "image",
        src: href,
        title,
        alt: state.src.substr(labelStart, labelEnd2 - labelStart),
        level: state.level
      }) : (state.push({
        type: "link_open",
        href,
        title,
        level: state.level++
      }), state.linkLevel++, state.parser.tokenize(state), state.linkLevel--, state.push({ type: "link_close", level: --state.level }))), state.pos = pos, state.posMax = max, !0;
    }
    function footnote_inline(state, silent) {
      var labelStart, labelEnd2, footnoteId, oldLength, max = state.posMax, start = state.pos;
      return start + 2 >= max || state.src.charCodeAt(start) !== 94 || state.src.charCodeAt(start + 1) !== 91 || state.level >= state.options.maxNesting || (labelStart = start + 2, labelEnd2 = parseLinkLabel(state, start + 1), labelEnd2 < 0) ? !1 : (silent || (state.env.footnotes || (state.env.footnotes = {}), state.env.footnotes.list || (state.env.footnotes.list = []), footnoteId = state.env.footnotes.list.length, state.pos = labelStart, state.posMax = labelEnd2, state.push({
        type: "footnote_ref",
        id: footnoteId,
        level: state.level
      }), state.linkLevel++, oldLength = state.tokens.length, state.parser.tokenize(state), state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) }, state.linkLevel--), state.pos = labelEnd2 + 1, state.posMax = max, !0);
    }
    function footnote_ref(state, silent) {
      var label, pos, footnoteId, footnoteSubId, max = state.posMax, start = state.pos;
      if (start + 3 > max || !state.env.footnotes || !state.env.footnotes.refs || state.src.charCodeAt(start) !== 91 || state.src.charCodeAt(start + 1) !== 94 || state.level >= state.options.maxNesting)
        return !1;
      for (pos = start + 2; pos < max; pos++) {
        if (state.src.charCodeAt(pos) === 32 || state.src.charCodeAt(pos) === 10)
          return !1;
        if (state.src.charCodeAt(pos) === 93)
          break;
      }
      return pos === start + 2 || pos >= max || (pos++, label = state.src.slice(start + 2, pos - 1), typeof state.env.footnotes.refs[":" + label] > "u") ? !1 : (silent || (state.env.footnotes.list || (state.env.footnotes.list = []), state.env.footnotes.refs[":" + label] < 0 ? (footnoteId = state.env.footnotes.list.length, state.env.footnotes.list[footnoteId] = { label, count: 0 }, state.env.footnotes.refs[":" + label] = footnoteId) : footnoteId = state.env.footnotes.refs[":" + label], footnoteSubId = state.env.footnotes.list[footnoteId].count, state.env.footnotes.list[footnoteId].count++, state.push({
        type: "footnote_ref",
        id: footnoteId,
        subId: footnoteSubId,
        level: state.level
      })), state.pos = pos, state.posMax = max, !0);
    }
    var url_schemas = [
      "coap",
      "doi",
      "javascript",
      "aaa",
      "aaas",
      "about",
      "acap",
      "cap",
      "cid",
      "crid",
      "data",
      "dav",
      "dict",
      "dns",
      "file",
      "ftp",
      "geo",
      "go",
      "gopher",
      "h323",
      "http",
      "https",
      "iax",
      "icap",
      "im",
      "imap",
      "info",
      "ipp",
      "iris",
      "iris.beep",
      "iris.xpc",
      "iris.xpcs",
      "iris.lwz",
      "ldap",
      "mailto",
      "mid",
      "msrp",
      "msrps",
      "mtqp",
      "mupdate",
      "news",
      "nfs",
      "ni",
      "nih",
      "nntp",
      "opaquelocktoken",
      "pop",
      "pres",
      "rtsp",
      "service",
      "session",
      "shttp",
      "sieve",
      "sip",
      "sips",
      "sms",
      "snmp",
      "soap.beep",
      "soap.beeps",
      "tag",
      "tel",
      "telnet",
      "tftp",
      "thismessage",
      "tn3270",
      "tip",
      "tv",
      "urn",
      "vemmi",
      "ws",
      "wss",
      "xcon",
      "xcon-userid",
      "xmlrpc.beep",
      "xmlrpc.beeps",
      "xmpp",
      "z39.50r",
      "z39.50s",
      "adiumxtra",
      "afp",
      "afs",
      "aim",
      "apt",
      "attachment",
      "aw",
      "beshare",
      "bitcoin",
      "bolo",
      "callto",
      "chrome",
      "chrome-extension",
      "com-eventbrite-attendee",
      "content",
      "cvs",
      "dlna-playsingle",
      "dlna-playcontainer",
      "dtn",
      "dvb",
      "ed2k",
      "facetime",
      "feed",
      "finger",
      "fish",
      "gg",
      "git",
      "gizmoproject",
      "gtalk",
      "hcp",
      "icon",
      "ipn",
      "irc",
      "irc6",
      "ircs",
      "itms",
      "jar",
      "jms",
      "keyparc",
      "lastfm",
      "ldaps",
      "magnet",
      "maps",
      "market",
      "message",
      "mms",
      "ms-help",
      "msnim",
      "mumble",
      "mvn",
      "notes",
      "oid",
      "palm",
      "paparazzi",
      "platform",
      "proxy",
      "psyc",
      "query",
      "res",
      "resource",
      "rmi",
      "rsync",
      "rtmp",
      "secondlife",
      "sftp",
      "sgn",
      "skype",
      "smb",
      "soldat",
      "spotify",
      "ssh",
      "steam",
      "svn",
      "teamspeak",
      "things",
      "udp",
      "unreal",
      "ut2004",
      "ventrilo",
      "view-source",
      "webcal",
      "wtai",
      "wyciwyg",
      "xfire",
      "xri",
      "ymsgr"
    ], EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
    function autolink2(state, silent) {
      var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;
      return state.src.charCodeAt(pos) !== 60 || (tail = state.src.slice(pos), tail.indexOf(">") < 0) ? !1 : (linkMatch = tail.match(AUTOLINK_RE), linkMatch ? url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0 || (url = linkMatch[0].slice(1, -1), fullUrl = normalizeLink(url), !state.parser.validateLink(url)) ? !1 : (silent || (state.push({
        type: "link_open",
        href: fullUrl,
        level: state.level
      }), state.push({
        type: "text",
        content: url,
        level: state.level + 1
      }), state.push({ type: "link_close", level: state.level })), state.pos += linkMatch[0].length, !0) : (emailMatch = tail.match(EMAIL_RE), emailMatch ? (url = emailMatch[0].slice(1, -1), fullUrl = normalizeLink("mailto:" + url), state.parser.validateLink(fullUrl) ? (silent || (state.push({
        type: "link_open",
        href: fullUrl,
        level: state.level
      }), state.push({
        type: "text",
        content: url,
        level: state.level + 1
      }), state.push({ type: "link_close", level: state.level })), state.pos += emailMatch[0].length, !0) : !1) : !1));
    }
    function replace$1(regex, options) {
      return regex = regex.source, options = options || "", function self(name, val) {
        return name ? (val = val.source || val, regex = regex.replace(name, val), self) : new RegExp(regex, options);
      };
    }
    var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, unquoted = /[^"'=<>`\x00-\x20]+/, single_quoted = /'[^']*'/, double_quoted = /"[^"]*"/, attr_value = replace$1(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", unquoted)("single_quoted", single_quoted)("double_quoted", double_quoted)(), attribute = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", attr_name)("attr_value", attr_value)(), open_tag = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", attribute)(), close_tag = /<\/[A-Za-z][A-Za-z0-9]*\s*>/, comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/, processing = /<[?].*?[?]>/, declaration = /<![A-Z]+\s+[^>]*>/, cdata = /<!\[CDATA\[[\s\S]*?\]\]>/, HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", open_tag)("close_tag", close_tag)("comment", comment)("processing", processing)("declaration", declaration)("cdata", cdata)();
    function isLetter$2(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }
    function htmltag(state, silent) {
      var ch, match, max, pos = state.pos;
      return !state.options.html || (max = state.posMax, state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) || (ch = state.src.charCodeAt(pos + 1), ch !== 33 && ch !== 63 && ch !== 47 && !isLetter$2(ch)) || (match = state.src.slice(pos).match(HTML_TAG_RE), !match) ? !1 : (silent || state.push({
        type: "htmltag",
        content: state.src.slice(pos, pos + match[0].length),
        level: state.level
      }), state.pos += match[0].length, !0);
    }
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
    function entity(state, silent) {
      var ch, code4, match, pos = state.pos, max = state.posMax;
      if (state.src.charCodeAt(pos) !== 38)
        return !1;
      if (pos + 1 < max) {
        if (ch = state.src.charCodeAt(pos + 1), ch === 35) {
          if (match = state.src.slice(pos).match(DIGITAL_RE), match)
            return silent || (code4 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10), state.pending += isValidEntityCode(code4) ? fromCodePoint(code4) : fromCodePoint(65533)), state.pos += match[0].length, !0;
        } else if (match = state.src.slice(pos).match(NAMED_RE), match) {
          var decoded = decodeEntity(match[1]);
          if (match[1] !== decoded)
            return silent || (state.pending += decoded), state.pos += match[0].length, !0;
        }
      }
      return silent || (state.pending += "&"), state.pos++, !0;
    }
    var _rules$2 = [
      ["text", text5],
      ["newline", newline],
      ["escape", escape2],
      ["backticks", backticks],
      ["del", del],
      ["ins", ins],
      ["mark", mark2],
      ["emphasis", emphasis2],
      ["sub", sub],
      ["sup", sup],
      ["links", links2],
      ["footnote_inline", footnote_inline],
      ["footnote_ref", footnote_ref],
      ["autolink", autolink2],
      ["htmltag", htmltag],
      ["entity", entity]
    ];
    function ParserInline() {
      this.ruler = new Ruler();
      for (var i2 = 0; i2 < _rules$2.length; i2++)
        this.ruler.push(_rules$2[i2][0], _rules$2[i2][1]);
      this.validateLink = validateLink;
    }
    ParserInline.prototype.skipToken = function(state) {
      var rules2 = this.ruler.getRules(""), len = rules2.length, pos = state.pos, i2, cached_pos;
      if ((cached_pos = state.cacheGet(pos)) > 0) {
        state.pos = cached_pos;
        return;
      }
      for (i2 = 0; i2 < len; i2++)
        if (rules2[i2](state, !0)) {
          state.cacheSet(pos, state.pos);
          return;
        }
      state.pos++, state.cacheSet(pos, state.pos);
    };
    ParserInline.prototype.tokenize = function(state) {
      for (var rules2 = this.ruler.getRules(""), len = rules2.length, end = state.posMax, ok2, i2; state.pos < end; ) {
        for (i2 = 0; i2 < len && (ok2 = rules2[i2](state, !1), !ok2); i2++)
          ;
        if (ok2) {
          if (state.pos >= end)
            break;
          continue;
        }
        state.pending += state.src[state.pos++];
      }
      state.pending && state.pushPending();
    };
    ParserInline.prototype.parse = function(str, options, env, outTokens) {
      var state = new StateInline(str, this, options, env, outTokens);
      this.tokenize(state);
    };
    function validateLink(url) {
      var BAD_PROTOCOLS = ["vbscript", "javascript", "file", "data"], str = url.trim().toLowerCase();
      return str = replaceEntities(str), !(str.indexOf(":") !== -1 && BAD_PROTOCOLS.indexOf(str.split(":")[0]) !== -1);
    }
    var defaultConfig = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkTarget: "",
        typographer: !1,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "block",
            "inline",
            "references",
            "replacements",
            "smartquotes",
            "references",
            "abbr2",
            "footnote_tail"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fences",
            "footnote",
            "heading",
            "hr",
            "htmlblock",
            "lheading",
            "list",
            "paragraph",
            "table"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "del",
            "emphasis",
            "entity",
            "escape",
            "footnote_ref",
            "htmltag",
            "links",
            "newline",
            "text"
          ]
        }
      }
    }, fullConfig = {
      options: {
        html: !1,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkTarget: "",
        typographer: !1,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    }, commonmarkConfig = {
      options: {
        html: !0,
        xhtmlOut: !0,
        breaks: !1,
        langPrefix: "language-",
        linkTarget: "",
        typographer: !1,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: [
            "block",
            "inline",
            "references",
            "abbr2"
          ]
        },
        block: {
          rules: [
            "blockquote",
            "code",
            "fences",
            "heading",
            "hr",
            "htmlblock",
            "lheading",
            "list",
            "paragraph"
          ]
        },
        inline: {
          rules: [
            "autolink",
            "backticks",
            "emphasis",
            "entity",
            "escape",
            "htmltag",
            "links",
            "newline",
            "text"
          ]
        }
      }
    }, config = {
      default: defaultConfig,
      full: fullConfig,
      commonmark: commonmarkConfig
    };
    function StateCore(instance, str, env) {
      this.src = str, this.env = env, this.options = instance.options, this.tokens = [], this.inlineMode = !1, this.inline = instance.inline, this.block = instance.block, this.renderer = instance.renderer, this.typographer = instance.typographer;
    }
    function Remarkable(preset, options) {
      typeof preset != "string" && (options = preset, preset = "default"), options && options.linkify != null && console.warn(`linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`), this.inline = new ParserInline(), this.block = new ParserBlock(), this.core = new Core(), this.renderer = new Renderer(), this.ruler = new Ruler(), this.options = {}, this.configure(config[preset]), this.set(options || {});
    }
    Remarkable.prototype.set = function(options) {
      assign(this.options, options);
    };
    Remarkable.prototype.configure = function(presets) {
      var self = this;
      if (!presets)
        throw new Error("Wrong `remarkable` preset, check name/content");
      presets.options && self.set(presets.options), presets.components && Object.keys(presets.components).forEach(function(name) {
        presets.components[name].rules && self[name].ruler.enable(presets.components[name].rules, !0);
      });
    };
    Remarkable.prototype.use = function(plugin, options) {
      return plugin(this, options), this;
    };
    Remarkable.prototype.parse = function(str, env) {
      var state = new StateCore(this, str, env);
      return this.core.process(state), state.tokens;
    };
    Remarkable.prototype.render = function(str, env) {
      return env = env || {}, this.renderer.render(this.parse(str, env), this.options, env);
    };
    Remarkable.prototype.parseInline = function(str, env) {
      var state = new StateCore(this, str, env);
      return state.inlineMode = !0, this.core.process(state), state.tokens;
    };
    Remarkable.prototype.renderInline = function(str, env) {
      return env = env || {}, this.renderer.render(this.parseInline(str, env), this.options, env);
    };
    exports.Remarkable = Remarkable;
    exports.utils = utils;
  }
});

// node_modules/markdown-draft-js/lib/markdown-to-draft.js
var require_markdown_to_draft = __commonJS({
  "node_modules/markdown-draft-js/lib/markdown-to-draft.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    exports.default = void 0;
    var _remarkable = require_cjs();
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
    function _iterableToArrayLimit(arr, i) {
      if (Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]") {
        var _arr = [], _n = !0, _d = !1, _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
            ;
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            !_n && _i.return != null && _i.return();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _typeof(obj) {
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(obj2) {
        return typeof obj2;
      } : _typeof = function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var TRAILING_NEW_LINE = /\n$/;
    function strlen(str) {
      return Array.from(str).length;
    }
    var DefaultBlockTypes = {
      paragraph_open: function(item) {
        return {
          type: "unstyled",
          text: "",
          entityRanges: [],
          inlineStyleRanges: []
        };
      },
      blockquote_open: function(item) {
        return {
          type: "blockquote",
          text: ""
        };
      },
      ordered_list_item_open: function() {
        return {
          type: "ordered-list-item",
          text: ""
        };
      },
      unordered_list_item_open: function() {
        return {
          type: "unordered-list-item",
          text: ""
        };
      },
      fence: function(item) {
        return {
          type: "code-block",
          data: {
            language: item.params || ""
          },
          text: (item.content || "").replace(TRAILING_NEW_LINE, ""),
          entityRanges: [],
          inlineStyleRanges: []
        };
      },
      heading_open: function(item) {
        var type = "header-" + {
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six"
        }[item.hLevel];
        return {
          type,
          text: ""
        };
      }
    }, DefaultBlockEntities = {
      link_open: function(item) {
        return {
          type: "LINK",
          mutability: "MUTABLE",
          data: {
            url: item.href,
            href: item.href
          }
        };
      }
    }, DefaultBlockStyles = {
      strong_open: "BOLD",
      em_open: "ITALIC",
      code: "CODE",
      del_open: "STRIKETHROUGH"
    }, idCounter = -1;
    function generateUniqueKey() {
      return idCounter++, idCounter;
    }
    function parseInline(inlineItem, BlockEntities, BlockStyles) {
      var content3 = "", blockEntities = {}, blockEntityRanges = [], blockInlineStyleRanges = [];
      return inlineItem.children.forEach(function(child) {
        if (child.type === "text")
          content3 += child.content;
        else if (child.type === "softbreak")
          content3 += `
`;
        else if (child.type === "hardbreak")
          content3 += `
`;
        else if (BlockStyles[child.type]) {
          var key = generateUniqueKey(), styleBlock = {
            offset: strlen(content3) || 0,
            length: 0,
            style: BlockStyles[child.type]
          };
          (child.type === "code" || child.type === "sub" || child.type === "sup") && (styleBlock.length = strlen(child.content), content3 += child.content), blockInlineStyleRanges.push(styleBlock);
        } else if (BlockEntities[child.type]) {
          var key = generateUniqueKey();
          blockEntities[key] = BlockEntities[child.type](child), blockEntityRanges.push({
            offset: strlen(content3) || 0,
            length: 0,
            key
          });
        } else if (child.type.indexOf("_close") !== -1 && BlockEntities[child.type.replace("_close", "_open")])
          blockEntityRanges[blockEntityRanges.length - 1].length = strlen(content3) - blockEntityRanges[blockEntityRanges.length - 1].offset;
        else if (child.type.indexOf("_close") !== -1 && BlockStyles[child.type.replace("_close", "_open")]) {
          var type = BlockStyles[child.type.replace("_close", "_open")];
          blockInlineStyleRanges = blockInlineStyleRanges.map(function(style2) {
            return style2.length === 0 && style2.style === type && (style2.length = strlen(content3) - style2.offset), style2;
          });
        }
      }), {
        content: content3,
        blockEntities,
        blockEntityRanges,
        blockInlineStyleRanges
      };
    }
    function markdownToDraft2(string3) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, remarkablePreset = options.remarkablePreset || options.remarkableOptions, remarkableOptions = _typeof(options.remarkableOptions) === "object" ? options.remarkableOptions : null, md = new _remarkable.Remarkable(remarkablePreset, remarkableOptions);
      if ((!remarkableOptions || !remarkableOptions.enable || !remarkableOptions.enable.block || remarkableOptions.enable.block !== "table" || remarkableOptions.enable.block.includes("table") === !1) && md.block.ruler.disable("table"), remarkableOptions && remarkableOptions.disable)
        for (var _i = 0, _Object$entries = Object.entries(remarkableOptions.disable); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
          md[key].ruler.disable(value);
        }
      if (remarkableOptions && remarkableOptions.enable)
        for (var _i2 = 0, _Object$entries2 = Object.entries(remarkableOptions.enable); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _key = _Object$entries2$_i[0], _value = _Object$entries2$_i[1];
          md[_key].ruler.enable(_value);
        }
      options.remarkablePlugins && options.remarkablePlugins.forEach(function(plugin) {
        md.use(plugin, {});
      });
      var blocks = [], entityMap = {}, parsedData = md.parse(string3, {}), currentListType = null, previousBlockEndingLine = 0, BlockTypes = Object.assign({}, DefaultBlockTypes, options.blockTypes || {}), BlockEntities = Object.assign({}, DefaultBlockEntities, options.blockEntities || {}), BlockStyles = Object.assign({}, DefaultBlockStyles, options.blockStyles || {});
      return parsedData.forEach(function(item) {
        item.type === "bullet_list_open" ? currentListType = "unordered_list_item_open" : item.type === "ordered_list_open" && (currentListType = "ordered_list_item_open");
        var itemType = item.type;
        if (itemType === "list_item_open" && (itemType = currentListType), itemType === "inline") {
          var _parseInline = parseInline(item, BlockEntities, BlockStyles), content3 = _parseInline.content, blockEntities = _parseInline.blockEntities, blockEntityRanges = _parseInline.blockEntityRanges, blockInlineStyleRanges = _parseInline.blockInlineStyleRanges, blockToModify = blocks[blocks.length - 1];
          blockToModify.text = content3, blockToModify.inlineStyleRanges = blockInlineStyleRanges, blockToModify.entityRanges = blockEntityRanges, Object.assign(entityMap, blockEntities);
        } else if ((itemType.indexOf("_open") !== -1 || itemType === "fence" || itemType === "hr" || itemType === "htmlblock") && BlockTypes[itemType]) {
          var depth = 0, block;
          if (item.level > 0 && (depth = Math.floor(item.level / 2)), item.level === 0 || item.type === "list_item_open" ? block = Object.assign({
            depth
          }, BlockTypes[itemType](item)) : item.level > 0 && blocks[blocks.length - 1].text && (block = Object.assign({}, blocks[blocks.length - 1])), block && options.preserveNewlines)
            for (var totalEmptyParagraphsToCreate = item.lines[0] - previousBlockEndingLine, i = 0; i < totalEmptyParagraphsToCreate; i++)
              blocks.push(DefaultBlockTypes.paragraph_open());
          block && (previousBlockEndingLine = item.lines[1], (block.type === "unordered-list-item" || block.type === "ordered-list-item") && (previousBlockEndingLine += 1), blocks.push(block));
        }
      }), blocks.length || blocks.push(DefaultBlockTypes.paragraph_open()), {
        entityMap,
        blocks
      };
    }
    var _default = markdownToDraft2;
    exports.default = _default;
  }
});

// node_modules/markdown-draft-js/lib/index.js
var require_lib = __commonJS({
  "node_modules/markdown-draft-js/lib/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    Object.defineProperty(exports, "draftToMarkdown", {
      enumerable: !0,
      get: function() {
        return _draftToMarkdown.default;
      }
    });
    Object.defineProperty(exports, "markdownToDraft", {
      enumerable: !0,
      get: function() {
        return _markdownToDraft.default;
      }
    });
    var _draftToMarkdown = _interopRequireDefault(require_draft_to_markdown()), _markdownToDraft = _interopRequireDefault(require_markdown_to_draft());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// empty-module:app/react-draft-wysiwyg.client
var require_react_draft_wysiwyg = __commonJS({
  "empty-module:app/react-draft-wysiwyg.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// app/utils/backend/emails/emailConstants.js
var emailConstants_exports = {};
__export(emailConstants_exports, {
  EMAILS: () => EMAILS,
  EMAIL_SUBJECT_PREFIX: () => EMAIL_SUBJECT_PREFIX
});
var EMAIL_SUBJECT_PREFIX, EMAILS, init_emailConstants = __esm({
  "app/utils/backend/emails/emailConstants.js"() {
    init_react();
    EMAIL_SUBJECT_PREFIX = "Wizeline Questions - ", EMAILS = {
      anonymousQuestionAssigned: {
        subject: "New question assigned to you",
        template: "anonymousQuestionAssigned"
      }
    };
  }
});

// app/utils/backend/emails/emailTransporter.js
var require_emailTransporter = __commonJS({
  "app/utils/backend/emails/emailTransporter.js"(exports, module2) {
    init_react();
    require("dotenv").config();
    var nodemailer = require("nodemailer"), hbs = require("nodemailer-express-handlebars"), path2 = require("path"), instantiateTransporter = () => {
      let {
        EMAIL_SERVICE,
        EMAIL_HOST,
        EMAIL_PORT,
        EMAIL_AUTH_USER,
        EMAIL_AUTH_PASSWORD
      } = process.env, transporter;
      if (EMAIL_SERVICE && EMAIL_SERVICE.toLowerCase() === "gmail") {
        if (!EMAIL_AUTH_USER || !EMAIL_AUTH_PASSWORD)
          return;
        transporter = nodemailer.createTransport({
          service: EMAIL_SERVICE,
          auth: {
            user: EMAIL_AUTH_USER,
            pass: EMAIL_AUTH_PASSWORD
          }
        });
      } else {
        if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_AUTH_USER || !EMAIL_AUTH_PASSWORD)
          return;
        transporter = nodemailer.createTransport({
          host: EMAIL_HOST,
          port: EMAIL_PORT,
          auth: {
            user: EMAIL_AUTH_USER,
            pass: EMAIL_AUTH_PASSWORD
          }
        });
      }
      let handlebarOptions = {
        viewEngine: {
          extname: ".hbs",
          layoutsDir: path2.resolve(__dirname, "templates/layouts/"),
          defaultLayout: "default",
          partialsDir: path2.resolve(__dirname, "templates/partials/")
        },
        viewPath: path2.resolve(__dirname, "templates/views/"),
        extName: ".hbs"
      };
      return transporter.use("compile", hbs(handlebarOptions)), transporter;
    };
    module2.exports = {
      instantiateTransporter
    };
  }
});

// app/utils/backend/validators/email.js
var email_exports = {};
__export(email_exports, {
  default: () => email_default,
  sendEmailSchema: () => sendEmailSchema
});
var import_joi7, sendEmailSchema, email_default, init_email = __esm({
  "app/utils/backend/validators/email.js"() {
    init_react();
    import_joi7 = __toESM(require("joi")), sendEmailSchema = import_joi7.default.object().keys({
      subject: import_joi7.default.string().required(),
      to: import_joi7.default.string().required(),
      template: import_joi7.default.string().required(),
      context: import_joi7.default.object()
    }), email_default = sendEmailSchema;
  }
});

// app/utils/backend/emails/emailHandler.js
var require_emailHandler = __commonJS({
  "app/utils/backend/emails/emailHandler.js"(exports, module2) {
    init_react();
    var { EMAIL_SUBJECT_PREFIX: EMAIL_SUBJECT_PREFIX2 } = (init_emailConstants(), __toCommonJS(emailConstants_exports)), { instantiateTransporter } = require_emailTransporter(), { sendEmailSchema: sendEmailSchema2 } = (init_email(), __toCommonJS(email_exports)), sendEmail2 = async (message) => {
      let { error } = sendEmailSchema2.validate(message);
      if (error)
        throw Error(error);
      let transporter = instantiateTransporter();
      if (!transporter)
        return;
      let transformedSubject = message.subject;
      message.subject.includes(EMAIL_SUBJECT_PREFIX2) || (transformedSubject = `${EMAIL_SUBJECT_PREFIX2}${message.subject}`), await transporter.sendMail(__spreadProps(__spreadValues({}, message), {
        subject: transformedSubject
      }));
    };
    module2.exports = {
      sendEmail: sendEmail2
    };
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = __toESM(require("react")), import_react2 = require("@remix-run/react"), import_server = require("react-dom/server"), import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ import_react.default.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }))), styles = sheet.getStyleTags();
  return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react23 = __toESM(require("react")), import_react24 = require("@remix-run/react");

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-VA75UTYY.css";

// node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css
var react_draft_wysiwyg_default = "/build/_assets/react-draft-wysiwyg-SYTSOWRP.css";

// node_modules/draft-js/dist/Draft.css
var Draft_default = "/build/_assets/Draft-U64VZDWR.css";

// app/root.jsx
var import_node2 = require("@remix-run/node");

// app/styles/global.css
var global_default = "/build/_assets/global-LITR44L5.css";

// app/styles/bootstrap/css/bootstrap.min.css
var bootstrap_min_default = "/build/_assets/bootstrap.min-PBEPUKPK.css";

// app/components/ErrorHandler/ErrorHandler.jsx
init_react();
var import_react3 = __toESM(require("react")), import_vsc = require("react-icons/vsc"), import_prop_types = __toESM(require("prop-types"));
function ErrorHandler({ error }) {
  return /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    style: { display: "flex", justifyContent: "center", paddingTop: "200px" }
  }, /* @__PURE__ */ import_react3.default.createElement(import_vsc.VscBracketError, {
    size: "15rem",
    color: "var(--color-primary)"
  }), /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: { paddingTop: "40px" }
  }, "Sorry! Something Went Wrong.")), /* @__PURE__ */ import_react3.default.createElement("div", {
    style: { display: "flex", justifyContent: "center", paddingTop: "20px" }
  }, /* @__PURE__ */ import_react3.default.createElement("pre", null, error.message)));
}
ErrorHandler.propTypes = {
  error: import_prop_types.default.shape().isRequired
};
var ErrorHandler_default = ErrorHandler;

// app/session.server.js
init_react();
var import_node = require("@remix-run/node"), USER_SESSION_KEY = "userData", SESSION_SECRET = process.env.SESSION_SECRET || "super-duper-s3cret", sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: !1
  }
});
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function createUserSession({
  request,
  userData,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userData), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session, remember)
    }
  });
}
async function commitSession(session, remember = !0) {
  return await sessionStorage.commitSession(session, {
    maxAge: remember ? 60 * 60 * 24 * 7 : void 0
  });
}
async function requireAuth(request) {
  let session = await getSession(request);
  if (!session.has("userData"))
    throw (0, import_node.redirect)("/login");
  return session;
}
async function requireAdminAuth(request) {
  await requireAuth(request);
  let user = await getAuthenticatedUser(request);
  if (!(user && user.is_admin))
    throw new Response("Not Found", {
      status: 404
    });
}
async function getAuthenticatedUser(request) {
  let session = await getSession(request);
  return session && session.has("userData") ? session.get("userData") : null;
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/components/AppNavbar/index.js
init_react();

// app/components/AppNavbar/AppNavbar.jsx
init_react();
var import_react21 = __toESM(require("react")), import_react_bootstrap5 = require("react-bootstrap"), import_react22 = require("@remix-run/react");

// app/images/logo-white.png
var logo_white_default = "/build/_assets/logo-white-OWKWHN6A.png";

// app/components/AppNavbar/AppNavbar.Styled.jsx
init_react();
var import_styled_components2 = __toESM(require("styled-components")), import_react_bootstrap = require("react-bootstrap"), import_ai = require("react-icons/ai"), AppNav = (0, import_styled_components2.default)(import_react_bootstrap.Navbar).attrs(() => ({
  fluid: !0
}))`
background-color: #203449;
border-color: #203449;
border-radius: 0;
margin-bottom: 0;
padding: 5px;
width: 100%;
.dropdown.btn-group {
float: left;
margin-left: 30px;
}
`, ButtonBootstrap = (0, import_styled_components2.default)(import_react_bootstrap.Button)`
background-color: transparent;
display: none;
border: 1px solid transparent;
border-radius: 25px;
position: absolute;
right: 65px;
top: 8px;

&:hover,
&.hover {
background-color: #4d5d6d;
border: 1px solid transparent;
}
&:focus,
&.focus {
background-color: #4d5d6d;
border: 1px solid transparent;
}
&:active:hover,
&:active:focus {
background-color: #4d5d6d;
border: 1px solid transparent;
color: transparent;
}
@media (max-width: 768px) {
display: block;
}
`, SearchBarNavContainer = import_styled_components2.default.div`
display: none;
@media (max-width: 768px) {
display: flex;
width: 100%;
}
`, IconWrapper = import_styled_components2.default.div`
width: 22px;
display: flex;
align-items: center;
justify-content: center;
`, SearchIcon = (0, import_styled_components2.default)(import_ai.AiOutlineSearch)`
font-size: 30px;
color: #fff;
`;

// app/components/UserControls/index.js
init_react();

// app/components/UserControls/UserControls.jsx
init_react();
var import_react20 = __toESM(require("react")), import_prop_types11 = __toESM(require("prop-types")), import_react_router_bootstrap = require("react-router-bootstrap"), import_react_bootstrap4 = require("react-bootstrap");

// app/components/UserControls/UserControl.styled.jsx
init_react();
var import_styled_components3 = __toESM(require("styled-components")), import_react_bootstrap2 = require("react-bootstrap"), NavBar = (0, import_styled_components3.default)(import_react_bootstrap2.Nav)`
  margin-right: 15px;
  display: flex;
  align-items: center;
`, Navitem = (0, import_styled_components3.default)(import_react_bootstrap2.NavItem)`
  line-height: 20px;
  margin-left: 30px;
  padding-top: 0;
  text-decoration: none;
  font-size: 1.1em;
  a {
    line-height: 55px;
    padding: 0;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: #aaa;
    }
  }
`, XSNavItem = (0, import_styled_components3.default)(Navitem)`
  display: none !important;
  @media (max-width: 767px) {
    display: block !important;
  }
`, VisibleNavitem = (0, import_styled_components3.default)(import_react_bootstrap2.NavItem)`
  line-height: 20px;
  margin-left: 30px;
  padding-top: 0;
  text-decoration: none;
  font-size: 1.1em;
  a {
    line-height: 55px;
    padding: 0;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: #aaa;
    }
  }
`, NavLi = import_styled_components3.default.li`
  font-size: 1.1em;
  margin-left: 0;
  line-height: 20px;
  margin-left: 30px;
  padding-top: 0;
  text-decoration: none;
  a {
    line-height: 55px;
    padding: 0;
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      color: #aaa;
    }
  }
  @media (max-width: 767px) {
      display: none !important;
  }
`, SearchBarNavContainer2 = import_styled_components3.default.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

// app/components/UserDropdown/index.js
init_react();

// app/components/UserDropdown/UserDropdown.jsx
init_react();
var import_react6 = __toESM(require("react")), import_prop_types4 = __toESM(require("prop-types"));

// app/components/Atoms/UserImage/index.js
init_react();

// app/components/Atoms/UserImage/UserImage.jsx
init_react();
var import_react4 = __toESM(require("react")), import_prop_types2 = __toESM(require("prop-types"));

// app/components/Atoms/UserImage/UserImage.Styled.jsx
init_react();
var import_styled_components4 = __toESM(require("styled-components")), Container = import_styled_components4.default.div`
  border: 1px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;
  height: 32px;
  min-width: 32px;
  width: fit-content;
  ${(props) => props.size === "small" && import_styled_components4.css`
    height: 20px;
    min-width: 20px;
  `}
  ${(props) => props.size === "big" && import_styled_components4.css`
    height: 46px;
    min-width: 46px;
  `}
  ${(props) => props.size === "extra big" && import_styled_components4.css`
    min-height: 100px;
    min-width: 100px;
  `}
  ${(props) => props.customSize && import_styled_components4.css`
    min-height: ${props.customSize};
    min-width: ${props.customSize};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`, Image = import_styled_components4.default.img`
  height: 100%;
  width: auto;
`;

// app/images/placeholder_user_img.png
var placeholder_user_img_default = "/build/_assets/placeholder_user_img-ZWAQNLBE.png";

// app/components/Atoms/UserImage/UserImage.jsx
function UserImage({
  src,
  alt,
  customSize,
  size
}) {
  let [imageSrc, setImageSrc] = (0, import_react4.useState)(src);
  return /* @__PURE__ */ import_react4.default.createElement(Container, {
    size,
    customSize
  }, /* @__PURE__ */ import_react4.default.createElement(Image, {
    alt,
    onError: () => {
      imageSrc !== placeholder_user_img_default && setImageSrc(placeholder_user_img_default);
    },
    src: imageSrc
  }));
}
UserImage.propTypes = {
  src: import_prop_types2.default.string.isRequired,
  alt: import_prop_types2.default.string,
  size: import_prop_types2.default.oneOf(["small", "medium", "big", "extra big"]),
  customSize: import_prop_types2.default.string
};
UserImage.defaultProps = {
  alt: "",
  size: "medium",
  customSize: null
};
var UserImage_default = UserImage;

// app/components/UserProfile/index.js
init_react();

// app/components/UserProfile/UserProfile.jsx
init_react();
var import_react5 = __toESM(require("react")), import_prop_types3 = __toESM(require("prop-types"));

// app/components/UserProfile/UserProfile.styled.jsx
init_react();
var import_styled_components5 = __toESM(require("styled-components")), ProfileDropdown = import_styled_components5.default.div`
    line-height: normal;
    text-align: center;
`, ProfileDropdownInfo = import_styled_components5.default.div`
    display: flex;
    padding: 35px 25px 16px;
    text-align: left;
`, ProfileDropdownUser = import_styled_components5.default.div`
    padding-left: 12px;
`, ProfileDropdownName = import_styled_components5.default.p`
    font-family: "Nunito", sans-serif;
    margin: 0 0 10px;
`;

// app/components/UserProfile/UserProfile.jsx
function UserProfile({
  name,
  title,
  email,
  picture
}) {
  return /* @__PURE__ */ import_react5.default.createElement(ProfileDropdown, null, /* @__PURE__ */ import_react5.default.createElement(ProfileDropdownInfo, null, /* @__PURE__ */ import_react5.default.createElement(UserImage_default, {
    src: picture,
    size: "big",
    alt: "user"
  }), /* @__PURE__ */ import_react5.default.createElement(ProfileDropdownUser, null, /* @__PURE__ */ import_react5.default.createElement(ProfileDropdownName, null, name), /* @__PURE__ */ import_react5.default.createElement("p", null, title), /* @__PURE__ */ import_react5.default.createElement("p", null, email))));
}
UserProfile.propTypes = {
  name: import_prop_types3.default.string.isRequired,
  title: import_prop_types3.default.string,
  email: import_prop_types3.default.string.isRequired,
  picture: import_prop_types3.default.string.isRequired
};
UserProfile.defaultProps = {
  title: ""
};
var UserProfile_default = UserProfile;

// app/components/UserDropdown/UserDropdown.styled.jsx
init_react();
var import_styled_components6 = __toESM(require("styled-components")), import_react_bootstrap3 = require("react-bootstrap"), UDropdown = (0, import_styled_components6.default)(import_react_bootstrap3.Dropdown)`
  background: none;
  box-shadow: none;
  padding: 0;
  .btn-default.active,
  .open > .dropdown-toggle.btn-default,
  .open > .dropdown-toggle.btn-default:hover {
    background: none;
    color: #333;
  }
  a {
    box-shadow: none !important;  
  }
  .dropdown-menu {
    border: 1px solid #e1e5e9;
    padding: 0;
    margin-top: 5px;
    width: auto;
    a {
      color: #222;
      line-height: initial;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`, UInfo = import_styled_components6.default.div`
  color: black;
  cursor: default;
`, UMenuItem = (0, import_styled_components6.default)(import_react_bootstrap3.MenuItem)`
  background: none;
  padding: 0;
  width: auto;
  &:hover {
    background-color: none;
  }
  ${(props) => props.footer && import_styled_components6.css`
    background-color: #f4f7f9;
    a {
      color: var(--color-secondary) !important;
      font-family: "Nunito", sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 40px !important;
      padding-right: 25px;
      text-align: right;
    }
  `}
`;

// app/components/UserDropdown/UserDropdown.jsx
function UserDropdown({
  name,
  title,
  email,
  picture,
  onLogoutClick
}) {
  return /* @__PURE__ */ import_react6.default.createElement(UDropdown, {
    id: "userDropdown"
  }, /* @__PURE__ */ import_react6.default.createElement(UDropdown.Toggle, {
    noCaret: !0,
    componentClass: "a"
  }, /* @__PURE__ */ import_react6.default.createElement(UserImage_default, {
    src: picture,
    size: "big",
    alt: "user"
  })), /* @__PURE__ */ import_react6.default.createElement(UDropdown.Menu, null, /* @__PURE__ */ import_react6.default.createElement(UInfo, null, /* @__PURE__ */ import_react6.default.createElement(UserProfile_default, {
    name,
    title,
    email,
    picture
  })), /* @__PURE__ */ import_react6.default.createElement(UMenuItem, {
    footer: "true",
    eventKey: "1",
    onClick: onLogoutClick
  }, "Logout")));
}
UserDropdown.propTypes = {
  onLogoutClick: import_prop_types4.default.func.isRequired,
  name: import_prop_types4.default.string.isRequired,
  title: import_prop_types4.default.string,
  email: import_prop_types4.default.string.isRequired,
  picture: import_prop_types4.default.string.isRequired
};
UserDropdown.defaultProps = {
  title: ""
};

// app/components/Modals/LogoutConfirmationModal/index.js
init_react();

// app/components/Modals/LogoutConfirmationModal/LogoutConfirmationModal.jsx
init_react();
var import_react9 = __toESM(require("react")), import_react10 = require("@remix-run/react"), import_prop_types6 = __toESM(require("prop-types"));

// app/components/Atoms/Button/index.js
init_react();

// app/components/Atoms/Button/Button.jsx
init_react();
var import_react7 = __toESM(require("react")), import_prop_types5 = __toESM(require("prop-types"));

// app/utils/constants.js
init_react();
var answerDeleteWarning = (questionId) => `You're about to delete the answer to question Q${questionId}`, ANSWER_DELETE_WARNING_SUBTITLE = "Do you want to continue?";
var IDENTITY_MESSAGE = "You are about to post a question";
var CONTACT_WARNING = "Please enter all fields", HTML_CODE_WARNING = "Your input contains some HTML code without the correct Markdown format, so it will be removed if submitted. If you want to keep the HTML code please encapsulate it like `<html>markup</html>`", PAGE_QUESTIONS_LIMIT = 20;
var DEFAULT_ACCESS_VALUE = "value", DEFAULT_LOCATION_ACCESS_VALUE = "code", SORTING_OPTIONS = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
  { name: "Popular", value: "popular" },
  { name: "Most Commented", value: "most_commented" }
], DEFAULT_SORTING_OPT = SORTING_OPTIONS[0], SORTING_ACCESS_VALUE = DEFAULT_ACCESS_VALUE, DATE_RANGE_OPTIONS = [
  { name: "All", value: "all" },
  { name: "Today", value: "today" },
  { name: "This week", value: "this_week" },
  { name: "This month", value: "this_month" }
], DATE_RANGE_LABEL = "Date range", DEFAULT_DATE_RANGE_OPT = DATE_RANGE_OPTIONS[0], DATE_RANGE_ACCESS_VALUE = DEFAULT_ACCESS_VALUE, STATUS_OPTIONS = [
  { name: "All", value: "all" },
  { name: "Answered", value: "answered" },
  { name: "Not Answered", value: "not_answered" }
], STATUS_LABEL = "Status", DEFAULT_STATUS_OPT = STATUS_OPTIONS[0], STATUS_ACCESS_VALUE = DEFAULT_ACCESS_VALUE, DEPARTMENT_OPTIONS = [
  { department_id: -1, name: "All" },
  { department_id: 0, name: "Not Assigned" }
], DEPARTMENT_LABEL = "Department", DEFAULT_DEPARTMENT_OPT = DEPARTMENT_OPTIONS[0], DEFAULT_DEPARTMENT_ID = DEFAULT_DEPARTMENT_OPT.department_id, DEPARTMENT_ACCESS_VALUE = "department_id", LOCATION_LABEL = "Location", DEFAULT_LOCATION = "ALL", LOCATION_ACCESS_VALUE = DEFAULT_LOCATION_ACCESS_VALUE, DEFAULT_LOCATION_OPT = { name: "All", code: DEFAULT_LOCATION };
var DEFAULT_QUESTION_COMMENT_SORTING = "votes", ACTIVITY_TIME_QUESTION_COMMENT_SORTING = "activityTime";
var ANONYMOUS_USER = {
  username: "Anonymous",
  profilePicture: "/anonymous.png"
};
var SHOW_MORE_TEXT = "Show more", SHOW_LESS_TEXT = "Show less", COLLAPSED_QUESTION_MIN_LENGTH = 130, COLLAPSED_ANSWER_MIN_LENGTH = 130;
var DEPARTMENT_NOT_ASSIGNED = "Not Assigned";
var COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD = 10, COMMUNITY_ANSWER_TAG_TEXT = "Community answer", CONTACT_REASONS_LIST = [
  { value: "default", reason: "I want to" },
  { value: "bug", reason: "Report a bug" },
  { value: "feature", reason: "Suggest new feature" },
  { value: "join", reason: "Join the WizeQ team" },
  { value: "vibes", reason: "Send Good Vibes!" }
], CONTACT_REASONS_MAP = {
  default: "I want to",
  bug: "Report a bug",
  feature: "Suggest a new feature",
  join: "Join the WizeQ team",
  vibes: "Send Good Vibes!"
};
var FOOTER_MESSAGE = "Proudly powered by Wizeline new hires as part of their technical on-boarding process";
var MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN = 2, MINIMUM_WIDTH_TO_SHOW_MARKDOWN = 767, MINIMUN_WINDOW_WIDTH = 768, editAnswerMessage = (questionId) => `Edit answer to question Q${questionId}?`, editAnswerInfo = (fullName, timeDiff) => `Question answered by ${fullName}, ${timeDiff}`, addAnswerInfo = (fullName, timeDiff) => `Question asked by ${fullName}, ${timeDiff}`, addAnswerMessage = (questionId) => `Do you have the answer to question Q${questionId}?`, CANCEL = "Cancel", SUBMIT = "Submit", DELETE_ANSWER = "Delete Answer", SUBMIT_ANSWER = "Submit Answer", UPDATE_ANSWER = "Update Answer", ANSWER = "ANSWER";
var REASSIGN = "REASSIGN", HIGHLIGHT_START = "HIGHLIGHT_START_INDICATOR", HIGHLIGHT_END = "HIGHLIGHT_END_INDICATOR", inputPlaceholder = (minCharacters) => `Type at least ${minCharacters} characters`, MIN_TEXTAREA_ROWS = 1;
var MIN_COMMENT_PREVIEW_LENGTH = 3, MIN_SHOW_COMMENT_BTN_LENGTH = 2;
var COMMENT_INPUT_PLACEHOLDER = "Add a comment and remember, we are all nice Wizeline collaborators.", COMMENT_EDIT_PLACEHOLDER = "Your comment can't be empty", LSPIN_SMALL = "SMALL", LSPIN_MEDIUM = "MEDIUM", LSPIN_LARGE = "LARGE", SCORES = [
  { name: "Strongly Disagree", value: 1 },
  { name: "Disagree", value: 2 },
  { name: "Agree", value: 3 },
  { name: "Strongly Agree", value: 4 }
], DISPLAY_TEXT_BEFORE_SCORING = "Do you consider the answer solves the question?", DISPLAY_TEXT_AFTER_SCORING = "Thanks for your feedback!", UNDO_BUTTON_TEXT = "Undo";
var DISABLED_ANSWER_ICONS_TOOLTIP_MESSAGE = "You can not modify an already scored answer", NO_DEPARTMENT_SELECTED_TOOLTIP_MESSAGE = "Select a department";
var MIN_CHARS_QUESTION_INPUT_TOOLTIP_MESSAGE = inputPlaceholder(14), DEFAULT_MESSAGE_END_QUESTION_INPUT_TOOLTIP = "to ask a question.", NO_LOCATIONS_AVAILABLE_TOOLTIP_MESSAGE = "There are no locations";
var BACK_TO_TOP = "Back to top";
var NONE_LOCATION = "NONE";
var DEFAULT_LOCATION_MESSAGE = "As you have not selected a location for your question, it will be posted to all locations.", ALL_LOCATIONS_MESSAGE = "This question will be posted to all locations. Are you sure?", LOCATION_WARNING = "This question will be posted to: ";
var DEPARTMENT_PLACEHOLDER = "Select a department", NO_DEPARTMENT_SELECTED_ID = -1;
var NOT_ASSIGNED_DEPARTMENT_ID = 0, PRIMARY_BUTTON = "primary_button", SECONDARY_BUTTON = "secondary_button", DISABLED_BUTTON = "disabled_button", DANGER_BUTTON = "danger_button", TEXT_BUTTON = "text_button", CLOSE_BUTTON = "close_button", ICON_BUTTON = "icon_button", DEFAULT_TOAST_CONFIG = {
  position: "top-right",
  autoClose: 2e3,
  hideProgressBar: !1,
  closeOnClick: !0,
  pauseOnHover: !0,
  draggable: !0,
  progress: void 0
}, RECOMMENDATIONS_QUESTION = [
  "Strive for constructive open communication. Avoid vagueness.",
  "Do not demean or degrade others because of their gender, race, age, religion, etc.",
  "Avoid posting questions that include sexually explicit comments, hate speech, prejudicial remarks, and profanity.",
  "Do not mock other members, their comments, profiles, threads, or experiences. Remember, what is funny for you may be offensive to others."
], PIN_QUESTION_ERROR_MESSAGE = "Error trying to pin/unpin the question.", INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE = "The provided parameters for the operation are not valid", QUESTION_NOT_FOUND_ERROR_MESSAGE = "The question with the id provided could not be found", INVALIDATE_VOTE_ERROR_MESSAGE = "Error trying to invalidate the vote in the question", UPDATE_COMMENT_ERROR_MESSAGE = "Error trying to update the comment", DELETE_COMMENT_ERROR_MESSAGE = "Error trying to delete the comment", ENABLE_DISABLE_ERROR_MESSAGE = "Error trying to enable/disable this question", WELCOME_MESSAGE = "Hello! Ask me any question and I'll see how I can help you.", CREATED_ANSWEBOT = "The question to bot has been created succesfully!", POSITIVE_FEEDBACK_ANSWEBOT = "The positive feedback to bot has been updated succesfully!", NEGATIVE_FEEDBACK_ANSWEBOT = "The negative feedback to bot has been updated succesfully!", POSTED_ANSWEBOT = "The question has been posted on the forum successfully!", INSTRUCTIONS_ANSWERBOT = `Instructions: Compose a comprehensive reply to the query using the search results given.
 If the search results mention multiple subjects
with the same name, create separate answers for each. Only include information found in the results and
don't add any additional information. Make sure the answer is correct and don't output false content.
If the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.
`;

// app/components/Atoms/Button/Button.Styled.jsx
init_react();
var import_styled_components7 = __toESM(require("styled-components")), import_md = require("react-icons/md");
var MainButton = import_styled_components7.default.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: all 0.3s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  ${(props) => props.category === PRIMARY_BUTTON && import_styled_components7.css`
      background-color: var(--color-secondary);
      border: 1px solid transparent;
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: var(--color-secondary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }

      &.login-button {
        font-size: 18px;
        height: 44px;
        letter-spacing: 0.3px;
        margin: 0;
        padding: 0 32px;
      }

      &.large-button {
        line-height: inherit;
        margin: 0;
        padding: 12px 32px;
        width: 100%;
      }

      &.add-comment-button {
        display: none;
        @media (max-width: 500px) {
            display: inline-block;
        }
      }

      &.writing-mobile {
        @media (max-width: 768px) {
          display: none;
        }
      }
    `}

  ${(props) => props.category === SECONDARY_BUTTON && import_styled_components7.css`
      background-color: #fff;
      border: 1px solid var(--color-secondary);
      color: var(--color-secondary);
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: #f8f9fa;
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }

      &.edit-comment-button {
        margin: 0 0 0 20px;
        height: 34px;
      }
    `}

  ${(props) => props.category === DISABLED_BUTTON && import_styled_components7.css`
      background-color: var(--color-secondary);
      border: 1px solid transparent;
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
      &:hover:enabled {
        background-color: var(--color-secondary-hover);
        border: 1px solid var(--color-secondary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
        opacity: 1;
      }

      &.edit-comment-button {
        margin: 0 0 0 20px;
        height: 34px;
      }
    `}

  ${(props) => props.category === DANGER_BUTTON && import_styled_components7.css`
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
      color: #fff;
      line-height: 1.42857;
      margin: 0 0 0 10px;
      padding: 6px 12px;
      min-width: 76px;
      touch-action: manipulation;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);

      &:hover {
        background-color: var(--color-primary-hover);
        border: 1px solid var(--color-primary-hover);
        box-shadow: 0 3px 4px 0 rgba(233, 236, 239, 0.5);
      }
    `}    

  ${(props) => props.category === TEXT_BUTTON && import_styled_components7.css`
      background-color: transparent;
      color: var(--color-secondary);
      letter-spacing: 0.6px;

      &.admin-button {
        font-size: 12px;
        margin-right: 12px;
        padding: 5px;
      }

      &.preview-button {
        font-family: "Nunito", sans-serif;
        height: 32px;
        padding: 1px 6px;
      }

      &.undo-button {
        color: #fff;
        font-size: 14px;
        font-family: "Nunito", sans-serif;
        margin: 3px 0;
        float: right;
        right: 48px;
        text-decoration: underline;
      }
      
      &.send-button {
        color: #fff;
        font-size: 14px;
        font-family: "NunitoSans Semibold", sans-serif;
        margin: 3px 0;
        position: relative;
        left: 85px;
        bottom: 15px;
        text-decoration: underline;
      }

      &.show-filters-button {
        display: none;
        color: var(--color-dark-50);
        padding: 6px 10px;
        text-align: left;
        &:hover {
          background-color: var(--color-secondary-light);
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          display: block;
        }
        @media (max-width: 767px) {
          display: block;
        }
      }
    `}

  ${(props) => props.category === ICON_BUTTON && import_styled_components7.css`
      display: flex;

      &.clear-button {
        background-color: var(--color-dark-25);
        border-radius: 50%;
        position: absolute;
        right: 6px;
        top: auto;
        &:hover {
          background-color: var(--color-dark-50);
        }
      }
    `} 
`, CloseButton = (0, import_styled_components7.default)(import_md.MdClose)`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 28px;
  color: #555555;
  cursor: pointer;

  &:hover {
    color: darkgray;
  }

  &.question-modal-button {
    z-index: 1000;
    top: 3px;
    right: 25px;
  }
`;

// app/components/Atoms/Button/Button.jsx
function Button2({
  id,
  type,
  className,
  title,
  onClick,
  category,
  value,
  form,
  disabled,
  children
}) {
  return /* @__PURE__ */ import_react7.default.createElement(category === CLOSE_BUTTON ? CloseButton : MainButton, {
    id,
    type,
    className,
    title,
    onClick,
    category,
    value,
    form,
    disabled
  }, children);
}
Button2.propTypes = {
  id: import_prop_types5.default.string,
  type: import_prop_types5.default.string,
  className: import_prop_types5.default.string,
  title: import_prop_types5.default.string,
  onClick: import_prop_types5.default.func,
  category: import_prop_types5.default.string.isRequired,
  value: import_prop_types5.default.string,
  form: import_prop_types5.default.string,
  disabled: import_prop_types5.default.bool,
  children: import_prop_types5.default.string
};
Button2.defaultProps = {
  id: "",
  type: "button",
  className: "",
  title: "",
  onClick: null,
  value: "",
  form: null,
  disabled: !1,
  children: ""
};
var Button_default = Button2;

// app/utils/hooks/useUser.js
init_react();

// app/utils/hooks/useFindLoaderMatch.js
init_react();
var import_react8 = require("@remix-run/react");
function useFindLoaderMatch(id) {
  return (0, import_react8.useMatches)().find((route) => route.id === id);
}
var useFindLoaderMatch_default = useFindLoaderMatch;

// app/utils/hooks/useUser.js
function useUser() {
  let loader14 = useFindLoaderMatch_default("root");
  if (!(!loader14 || !loader14.data))
    return loader14.data.profile;
}
var useUser_default = useUser;

// app/components/Modals/LogoutConfirmationModal/LogoutConfirmationModal.styled.jsx
init_react();
var import_styled_components8 = __toESM(require("styled-components")), LogoutModal = import_styled_components8.default.div` 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);  
`, LogoutModalDialog = import_styled_components8.default.div`
    position: relative;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    margin: 0 auto;
    max-width: 70vw;
    padding: 24px 0px;
    width: 100%;
    display: block;
    max-height: calc(100vh - 150px);
    overflow-y: auto;

    @media (max-width: 576px) {
        max-height: 90%;
        max-width: 90%;
    }
`, ModalFooter = import_styled_components8.default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-top: 1px solid #e5e5e5;padding: 15px;text-align: right;" : "border-bottom: none;"}
`, ModalHeader = import_styled_components8.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`, ModalBody = import_styled_components8.default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
`, ModalTitle = import_styled_components8.default.div`
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`;

// app/components/Modals/LogoutConfirmationModal/LogoutConfirmationModal.jsx
function LogoutConfirmationModal({ show, onClose }) {
  let profile = useUser_default();
  return show ? /* @__PURE__ */ import_react9.default.createElement("div", {
    onClick: onClose
  }, /* @__PURE__ */ import_react9.default.createElement(LogoutModal, {
    show: !0
  }, /* @__PURE__ */ import_react9.default.createElement(import_react10.Form, {
    action: "/logout",
    method: "POST"
  }, /* @__PURE__ */ import_react9.default.createElement(LogoutModalDialog, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react9.default.createElement(ModalHeader, {
    variant: "logout",
    closeButton: !0
  }, /* @__PURE__ */ import_react9.default.createElement(ModalTitle, null, "Warning"), /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: onClose
  })), /* @__PURE__ */ import_react9.default.createElement(ModalBody, null, /* @__PURE__ */ import_react9.default.createElement("p", null, " ", "You're about to log out as", profile.full_name, ", do you still want to continue?", " ")), /* @__PURE__ */ import_react9.default.createElement(ModalFooter, {
    variant: "logout"
  }, /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ import_react9.default.createElement(Button_default, {
    category: DANGER_BUTTON,
    type: "submit"
  }, "Logout")))))) : null;
}
LogoutConfirmationModal.propTypes = {
  show: import_prop_types6.default.bool.isRequired,
  onClose: import_prop_types6.default.func.isRequired
};
var LogoutConfirmationModal_default = LogoutConfirmationModal;

// app/components/SearchBarNav/index.js
init_react();

// app/components/SearchBarNav/SearchBarNav.jsx
init_react();
var import_react18 = __toESM(require("react")), import_react19 = require("@remix-run/react"), import_lodash = require("lodash");

// app/utils/hooks/useClickOutside.js
init_react();
var import_react11 = require("react"), useClickOutside = (exceptionState = !1) => {
  let wrapperRef = (0, import_react11.useRef)(null), [state, setState] = (0, import_react11.useState)(!1), handleClickOutside = (event) => {
    wrapperRef.current && !wrapperRef.current.contains(event.target) && state && !exceptionState && setState(!1);
  };
  return (0, import_react11.useEffect)(() => (document.addEventListener("mousedown", handleClickOutside), () => {
    document.removeEventListener("mousedown", handleClickOutside);
  }), [state, exceptionState]), { state, setState, wrapperRef };
}, useClickOutside_default = useClickOutside;

// app/components/SearchBarNav/SearchBarNav.Styled.jsx
init_react();
var import_styled_components9 = __toESM(require("styled-components")), import_md2 = require("react-icons/md"), import_ai2 = require("react-icons/ai"), SearchField = import_styled_components9.default.div`
  align-items: center;
  display: flex;
  background-color: #f4f7f9;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  max-width: 270px;
  position: relative;
  width: 100%;
  transition: all 0.5s ease;
  @media (max-width: 768px) {
    max-width: none;
  }
`, IconWrapper2 = import_styled_components9.default.div`
  left: 10px;
  top: auto;
  width: 22px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`, Input = import_styled_components9.default.input`
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
    font-family: "NunitoSans Regular", sans-serif;
  }
`, SearchIcon2 = (0, import_styled_components9.default)(import_ai2.AiOutlineSearch)`
  font-size: 30px;
  color: rgba(78, 81, 84, 0.65);
`, ClearIcon = (0, import_styled_components9.default)(import_md2.MdClose)`
  font-size: 28px;
  color: rgba(78, 81, 84, 0.65);
  padding: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

// app/components/SearchBarDropdown/index.js
init_react();

// app/components/SearchBarDropdown/SearchBarDropdown.jsx
init_react();
var import_react17 = __toESM(require("react")), import_prop_types10 = __toESM(require("prop-types"));

// app/components/SearchBarDropdown/SearchBarDropdown.Styled.jsx
init_react();
var import_styled_components10 = __toESM(require("styled-components"));

// node_modules/react-markdown/index.js
init_react();

// node_modules/react-markdown/lib/uri-transformer.js
init_react();
var protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  let url = (uri || "").trim(), first = url.charAt(0);
  if (first === "#" || first === "/")
    return url;
  let colon = url.indexOf(":");
  if (colon === -1)
    return url;
  let index2 = -1;
  for (; ++index2 < protocols.length; ) {
    let protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol)
      return url;
  }
  return index2 = url.indexOf("?"), index2 !== -1 && colon > index2 || (index2 = url.indexOf("#"), index2 !== -1 && colon > index2) ? url : "javascript:void(0)";
}

// node_modules/react-markdown/lib/react-markdown.js
init_react();
var import_react13 = __toESM(require("react"), 1);

// node_modules/vfile/index.js
init_react();

// node_modules/vfile/lib/index.js
init_react();
var import_is_buffer = __toESM(require("is-buffer"), 1);

// node_modules/vfile-message/index.js
init_react();

// node_modules/unist-util-stringify-position/index.js
init_react();
function stringifyPosition(value) {
  return !value || typeof value != "object" ? "" : "position" in value || "type" in value ? position(value.position) : "start" in value || "end" in value ? position(value) : "line" in value || "column" in value ? point(value) : "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value == "number" ? value : 1;
}

// node_modules/vfile-message/index.js
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    let parts = [null, null], position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    super();
    if (typeof place == "string" && (origin = place, place = void 0), typeof origin == "string") {
      let index2 = origin.indexOf(":");
      index2 === -1 ? parts[1] = origin : (parts[0] = origin.slice(0, index2), parts[1] = origin.slice(index2 + 1));
    }
    place && ("type" in place || "position" in place ? place.position && (position2 = place.position) : "start" in place || "end" in place ? position2 = place : ("line" in place || "column" in place) && (position2.start = place)), this.name = stringifyPosition(place) || "1:1", this.message = typeof reason == "object" ? reason.message : reason, this.stack = typeof reason == "object" ? reason.stack : "", this.reason = this.message, this.fatal, this.line = position2.start.line, this.column = position2.start.column, this.source = parts[0], this.ruleId = parts[1], this.position = position2, this.actual, this.expected, this.file, this.url, this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// node_modules/vfile/lib/minpath.js
init_react();
var import_path = __toESM(require("path"), 1);

// node_modules/vfile/lib/minproc.js
init_react();
var import_process = __toESM(require("process"), 1);

// node_modules/vfile/lib/minurl.js
init_react();
var import_url = require("url");

// node_modules/vfile/lib/minurl.shared.js
init_react();
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath == "object" && fileURLOrPath.href && fileURLOrPath.origin;
}

// node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"], VFile = class {
  constructor(value) {
    let options;
    value ? typeof value == "string" || (0, import_is_buffer.default)(value) ? options = { value } : isUrl(value) ? options = { path: value } : options = value : options = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = import_process.default.cwd(), this.value, this.stored, this.result, this.map;
    let index2 = -1;
    for (; ++index2 < order.length; ) {
      let prop2 = order[index2];
      prop2 in options && options[prop2] !== void 0 && (this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2]);
    }
    let prop;
    for (prop in options)
      order.includes(prop) || (this[prop] = options[prop]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    isUrl(path2) && (path2 = (0, import_url.fileURLToPath)(path2)), assertNonEmpty(path2, "path"), this.path !== path2 && this.history.push(path2);
  }
  get dirname() {
    return typeof this.path == "string" ? import_path.default.dirname(this.path) : void 0;
  }
  set dirname(dirname) {
    assertPath(this.basename, "dirname"), this.path = import_path.default.join(dirname || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? import_path.default.basename(this.path) : void 0;
  }
  set basename(basename) {
    assertNonEmpty(basename, "basename"), assertPart(basename, "basename"), this.path = import_path.default.join(this.dirname || "", basename);
  }
  get extname() {
    return typeof this.path == "string" ? import_path.default.extname(this.path) : void 0;
  }
  set extname(extname) {
    if (assertPart(extname, "extname"), assertPath(this.dirname, "extname"), extname) {
      if (extname.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (extname.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = import_path.default.join(this.dirname, this.stem + (extname || ""));
  }
  get stem() {
    return typeof this.path == "string" ? import_path.default.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem"), assertPart(stem, "stem"), this.path = import_path.default.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    let message = new VFileMessage(reason, place, origin);
    return this.path && (message.name = this.path + ":" + message.name, message.file = this.path), message.fatal = !1, this.messages.push(message), message;
  }
  info(reason, place, origin) {
    let message = this.message(reason, place, origin);
    return message.fatal = null, message;
  }
  fail(reason, place, origin) {
    let message = this.message(reason, place, origin);
    throw message.fatal = !0, message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(import_path.default.sep))
    throw new Error("`" + name + "` cannot be a path: did not expect `" + import_path.default.sep + "`");
}
function assertNonEmpty(part, name) {
  if (!part)
    throw new Error("`" + name + "` cannot be empty");
}
function assertPath(path2, name) {
  if (!path2)
    throw new Error("Setting `" + name + "` requires `path` to be set too");
}

// node_modules/unified/index.js
init_react();

// node_modules/unified/lib/index.js
init_react();

// node_modules/bail/index.js
init_react();
function bail(error) {
  if (error)
    throw error;
}

// node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require("is-buffer"), 1), import_extend = __toESM(require("extend"), 1), import_is_plain_obj = __toESM(require("is-plain-obj"), 1);

// node_modules/trough/index.js
init_react();
function trough() {
  let fns = [], pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1, callback = values.pop();
    if (typeof callback != "function")
      throw new TypeError("Expected function as last argument, not " + callback);
    next(null, ...values);
    function next(error, ...output) {
      let fn = fns[++middlewareIndex], index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      for (; ++index2 < values.length; )
        (output[index2] === null || output[index2] === void 0) && (output[index2] = values[index2]);
      values = output, fn ? wrap(fn, next)(...output) : callback(null, ...output);
    }
  }
  function use(middelware) {
    if (typeof middelware != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    return fns.push(middelware), pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    let fnExpectsCallback = middleware.length > parameters.length, result;
    fnExpectsCallback && parameters.push(done);
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      let exception = error;
      if (fnExpectsCallback && called)
        throw exception;
      return done(exception);
    }
    fnExpectsCallback || (result instanceof Promise ? result.then(then, done) : result instanceof Error ? done(result) : then(result));
  }
  function done(error, ...output) {
    called || (called = !0, callback(error, ...output));
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/unified/lib/index.js
var unified = base().freeze(), own = {}.hasOwnProperty;
function base() {
  let transformers = trough(), attachers = [], namespace = {}, frozen, freezeIndex = -1;
  return processor.data = data, processor.Parser = void 0, processor.Compiler = void 0, processor.freeze = freeze, processor.attachers = attachers, processor.use = use, processor.parse = parse2, processor.stringify = stringify3, processor.run = run, processor.runSync = runSync, processor.process = process2, processor.processSync = processSync, processor;
  function processor() {
    let destination = base(), index2 = -1;
    for (; ++index2 < attachers.length; )
      destination.use(...attachers[index2]);
    return destination.data((0, import_extend.default)(!0, {}, namespace)), destination;
  }
  function data(key, value) {
    return typeof key == "string" ? arguments.length === 2 ? (assertUnfrozen("data", frozen), namespace[key] = value, processor) : own.call(namespace, key) && namespace[key] || null : key ? (assertUnfrozen("data", frozen), namespace = key, processor) : namespace;
  }
  function freeze() {
    if (frozen)
      return processor;
    for (; ++freezeIndex < attachers.length; ) {
      let [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === !1)
        continue;
      options[0] === !0 && (options[0] = void 0);
      let transformer = attacher.call(processor, ...options);
      typeof transformer == "function" && transformers.use(transformer);
    }
    return frozen = !0, freezeIndex = Number.POSITIVE_INFINITY, processor;
  }
  function use(value, ...options) {
    let settings;
    if (assertUnfrozen("use", frozen), value != null)
      if (typeof value == "function")
        addPlugin(value, ...options);
      else if (typeof value == "object")
        Array.isArray(value) ? addList(value) : addPreset(value);
      else
        throw new TypeError("Expected usable value, not `" + value + "`");
    return settings && (namespace.settings = Object.assign(namespace.settings || {}, settings)), processor;
    function add(value2) {
      if (typeof value2 == "function")
        addPlugin(value2);
      else if (typeof value2 == "object")
        if (Array.isArray(value2)) {
          let [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else
          addPreset(value2);
      else
        throw new TypeError("Expected usable value, not `" + value2 + "`");
    }
    function addPreset(result) {
      addList(result.plugins), result.settings && (settings = Object.assign(settings || {}, result.settings));
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins != null)
        if (Array.isArray(plugins))
          for (; ++index2 < plugins.length; ) {
            let thing = plugins[index2];
            add(thing);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
    }
    function addPlugin(plugin, value2) {
      let index2 = -1, entry2;
      for (; ++index2 < attachers.length; )
        if (attachers[index2][0] === plugin) {
          entry2 = attachers[index2];
          break;
        }
      entry2 ? ((0, import_is_plain_obj.default)(entry2[1]) && (0, import_is_plain_obj.default)(value2) && (value2 = (0, import_extend.default)(!0, entry2[1], value2)), entry2[1] = value2) : attachers.push([...arguments]);
    }
  }
  function parse2(doc) {
    processor.freeze();
    let file = vfile(doc), Parser = processor.Parser;
    return assertParser("parse", Parser), newable(Parser, "parse") ? new Parser(String(file), file).parse() : Parser(String(file), file);
  }
  function stringify3(node, doc) {
    processor.freeze();
    let file = vfile(doc), Compiler = processor.Compiler;
    return assertCompiler("stringify", Compiler), assertNode(node), newable(Compiler, "compile") ? new Compiler(node, file).compile() : Compiler(node, file);
  }
  function run(node, doc, callback) {
    if (assertNode(node), processor.freeze(), !callback && typeof doc == "function" && (callback = doc, doc = void 0), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node, error ? reject(error) : resolve ? resolve(tree) : callback(null, tree, file);
      }
    }
  }
  function runSync(node, file) {
    let result, complete;
    return processor.run(node, file, done), assertDone("runSync", "run", complete), result;
    function done(error, tree) {
      bail(error), result = tree, complete = !0;
    }
  }
  function process2(doc, callback) {
    if (processor.freeze(), assertParser("process", processor.Parser), assertCompiler("process", processor.Compiler), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      let file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2)
          done(error);
        else {
          let result = processor.stringify(tree, file2);
          result == null || (looksLikeAVFileValue(result) ? file2.value = result : file2.result = result), done(error, file2);
        }
      });
      function done(error, file2) {
        error || !file2 ? reject(error) : resolve ? resolve(file2) : callback(null, file2);
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze(), assertParser("processSync", processor.Parser), assertCompiler("processSync", processor.Compiler);
    let file = vfile(doc);
    return processor.process(file, done), assertDone("processSync", "process", complete), file;
    function done(error) {
      complete = !0, bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value == "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value)
    if (own.call(value, key))
      return !0;
  return !1;
}
function assertParser(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Parser`");
}
function assertCompiler(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
}
function assertUnfrozen(name, frozen) {
  if (frozen)
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function assertNode(node) {
  if (!(0, import_is_plain_obj.default)(node) || typeof node.type != "string")
    throw new TypeError("Expected node, got `" + node + "`");
}
function assertDone(name, asyncName, complete) {
  if (!complete)
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value == "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value == "string" || (0, import_is_buffer2.default)(value);
}

// node_modules/remark-parse/index.js
init_react();

// node_modules/remark-parse/lib/index.js
init_react();

// node_modules/mdast-util-from-markdown/index.js
init_react();

// node_modules/mdast-util-from-markdown/lib/index.js
init_react();

// node_modules/mdast-util-to-string/index.js
init_react();
function toString(node, options) {
  var { includeImageAlt = !0 } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node == "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  for (var result = [], index2 = -1; ++index2 < values.length; )
    result[index2] = one(values[index2], includeImageAlt);
  return result.join("");
}

// node_modules/micromark/lib/parse.js
init_react();

// node_modules/micromark-util-combine-extensions/index.js
init_react();

// node_modules/micromark-util-chunked/index.js
init_react();
function splice(list3, start, remove, items) {
  let end = list3.length, chunkStart = 0, parameters;
  if (start < 0 ? start = -start > end ? 0 : end + start : start = start > end ? end : start, remove = remove > 0 ? remove : 0, items.length < 1e4)
    parameters = Array.from(items), parameters.unshift(start, remove), [].splice.apply(list3, parameters);
  else
    for (remove && [].splice.apply(list3, [start, remove]); chunkStart < items.length; )
      parameters = items.slice(chunkStart, chunkStart + 1e4), parameters.unshift(start, 0), [].splice.apply(list3, parameters), chunkStart += 1e4, start += 1e4;
}
function push(list3, items) {
  return list3.length > 0 ? (splice(list3, list3.length, 0, items), list3) : items;
}

// node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  let all3 = {}, index2 = -1;
  for (; ++index2 < extensions.length; )
    syntaxExtension(all3, extensions[index2]);
  return all3;
}
function syntaxExtension(all3, extension2) {
  let hook;
  for (hook in extension2) {
    let left = (hasOwnProperty.call(all3, hook) ? all3[hook] : void 0) || (all3[hook] = {}), right = extension2[hook], code3;
    for (code3 in right) {
      hasOwnProperty.call(left, code3) || (left[code3] = []);
      let value = right[code3];
      constructs(left[code3], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1, before = [];
  for (; ++index2 < list3.length; )
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  splice(existing, 0, 0, before);
}

// node_modules/micromark/lib/initialize/content.js
init_react();

// node_modules/micromark-factory-space/index.js
init_react();

// node_modules/micromark-util-character/index.js
init_react();

// node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
init_react();
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/), asciiDigit = regexCheck(/\d/), asciiHexDigit = regexCheck(/[\dA-Fa-f]/), asciiAlphanumeric = regexCheck(/[\dA-Za-z]/), asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/), asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code3) {
  return code3 !== null && (code3 < 32 || code3 === 127);
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
var unicodeWhitespace = regexCheck(/\s/), unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && regex.test(String.fromCharCode(code3));
  }
}

// node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok2, type, max) {
  let limit = max ? max - 1 : Number.POSITIVE_INFINITY, size = 0;
  return start;
  function start(code3) {
    return markdownSpace(code3) ? (effects.enter(type), prefix(code3)) : ok2(code3);
  }
  function prefix(code3) {
    return markdownSpace(code3) && size++ < limit ? (effects.consume(code3), prefix) : (effects.exit(type), ok2(code3));
  }
}

// node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  let contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial), previous3;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    return effects.enter("paragraph"), lineStart(code3);
  }
  function lineStart(code3) {
    let token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous3
    });
    return previous3 && (previous3.next = token), previous3 = token, data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText"), effects.exit("paragraph"), effects.consume(code3);
      return;
    }
    return markdownLineEnding(code3) ? (effects.consume(code3), effects.exit("chunkText"), lineStart) : (effects.consume(code3), data);
  }
}

// node_modules/micromark/lib/initialize/document.js
init_react();
var document2 = {
  tokenize: initializeDocument
}, containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  let self = this, stack = [], continued = 0, childFlow, childToken, lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      let item = stack[continued];
      return self.containerState = item[1], effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    if (continued++, self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0, childFlow && closeFlow();
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, point3;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self.events[indexBeforeFlow][1].end;
          break;
        }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      for (; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point3), index2++;
      return splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)), self.events.length = index2, checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow)
        return documentContinued(code3);
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete)
        return flowStart(code3);
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    return self.containerState = {}, effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code3);
  }
  function thereIsANewContainer(code3) {
    return childFlow && closeFlow(), exitContainers(continued), documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    return self.parser.lazy[self.now().line] = continued !== stack.length, lineStartOffset = self.now().offset, flowStart(code3);
  }
  function documentContinued(code3) {
    return self.containerState = {}, effects.attempt(containerConstruct, containerContinue, flowStart)(code3);
  }
  function containerContinue(code3) {
    return continued++, stack.push([self.currentConstruct, self.containerState]), documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      childFlow && closeFlow(), exitContainers(0), effects.consume(code3);
      return;
    }
    return childFlow = childFlow || self.parser.flow(self.now()), effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    }), flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), !0), exitContainers(0), effects.consume(code3);
      return;
    }
    return markdownLineEnding(code3) ? (effects.consume(code3), writeToChild(effects.exit("chunkFlow")), continued = 0, self.interrupt = void 0, start) : (effects.consume(code3), flowContinue);
  }
  function writeToChild(token, eof) {
    let stream = self.sliceStream(token);
    if (eof && stream.push(null), token.previous = childToken, childToken && (childToken.next = token), childToken = token, childFlow.defineSkip(token.start), childFlow.write(stream), self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      for (; index2--; )
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset))
          return;
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, seen, point3;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = !0;
        }
      for (exitContainers(continued), index2 = indexBeforeExits; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point3), index2++;
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)), self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    for (; index2-- > size; ) {
      let entry2 = stack[index2];
      self.containerState = entry2[1], entry2[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]), childToken = void 0, childFlow = void 0, self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/micromark/lib/initialize/flow.js
init_react();

// node_modules/micromark-core-commonmark/index.js
init_react();

// node_modules/micromark-core-commonmark/lib/attention.js
init_react();

// node_modules/micromark-util-classify-character/index.js
init_react();
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3))
    return 1;
  if (unicodePunctuation(code3))
    return 2;
}

// node_modules/micromark-util-resolve-all/index.js
init_react();
function resolveAll(constructs2, events, context) {
  let called = [], index2 = -1;
  for (; ++index2 < constructs2.length; ) {
    let resolve = constructs2[index2].resolveAll;
    resolve && !called.includes(resolve) && (events = resolve(events, context), called.push(resolve));
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1, open, group, text5, openingSequence, closingSequence, use, nextEvents, offset;
  for (; ++index2 < events.length; )
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      for (open = index2; open--; )
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3))
            continue;
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          let start = Object.assign({}, events[open][1].end), end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use), movePoint(end, use), openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          }, closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          }, text5 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          }, group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          }, events[open][1].end = Object.assign({}, openingSequence.start), events[index2][1].start = Object.assign({}, closingSequence.end), nextEvents = [], events[open][1].end.offset - events[open][1].start.offset && (nextEvents = push(nextEvents, [
            ["enter", events[open][1], context],
            ["exit", events[open][1], context]
          ])), nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text5, context]
          ]), nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context)), nextEvents = push(nextEvents, [
            ["exit", text5, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]), events[index2][1].end.offset - events[index2][1].start.offset ? (offset = 2, nextEvents = push(nextEvents, [
            ["enter", events[index2][1], context],
            ["exit", events[index2][1], context]
          ])) : offset = 0, splice(events, open - 1, index2 - open + 3, nextEvents), index2 = open + nextEvents.length - offset - 2;
          break;
        }
    }
  for (index2 = -1; ++index2 < events.length; )
    events[index2][1].type === "attentionSequence" && (events[index2][1].type = "data");
  return events;
}
function tokenizeAttention(effects, ok2) {
  let attentionMarkers2 = this.parser.constructs.attentionMarkers.null, previous3 = this.previous, before = classifyCharacter(previous3), marker;
  return start;
  function start(code3) {
    return effects.enter("attentionSequence"), marker = code3, sequence(code3);
  }
  function sequence(code3) {
    if (code3 === marker)
      return effects.consume(code3), sequence;
    let token = effects.exit("attentionSequence"), after = classifyCharacter(code3), open = !after || after === 2 && before || attentionMarkers2.includes(code3), close = !before || before === 2 && after || attentionMarkers2.includes(previous3);
    return token._open = Boolean(marker === 42 ? open : open && (before || !close)), token._close = Boolean(marker === 42 ? close : close && (after || !open)), ok2(code3);
  }
}
function movePoint(point3, offset) {
  point3.column += offset, point3.offset += offset, point3._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
init_react();
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code3) {
    return effects.enter("autolink"), effects.enter("autolinkMarker"), effects.consume(code3), effects.exit("autolinkMarker"), effects.enter("autolinkProtocol"), open;
  }
  function open(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), schemeOrEmailAtext) : asciiAtext(code3) ? emailAtext(code3) : nok(code3);
  }
  function schemeOrEmailAtext(code3) {
    return code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3) ? schemeInsideOrEmailAtext(code3) : emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    return code3 === 58 ? (effects.consume(code3), urlInside) : (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32 ? (effects.consume(code3), schemeInsideOrEmailAtext) : emailAtext(code3);
  }
  function urlInside(code3) {
    return code3 === 62 ? (effects.exit("autolinkProtocol"), end(code3)) : code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3) ? nok(code3) : (effects.consume(code3), urlInside);
  }
  function emailAtext(code3) {
    return code3 === 64 ? (effects.consume(code3), size = 0, emailAtSignOrDot) : asciiAtext(code3) ? (effects.consume(code3), emailAtext) : nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    return code3 === 46 ? (effects.consume(code3), size = 0, emailAtSignOrDot) : code3 === 62 ? (effects.exit("autolinkProtocol").type = "autolinkEmail", end(code3)) : emailValue(code3);
  }
  function emailValue(code3) {
    return (code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63 ? (effects.consume(code3), code3 === 45 ? emailValue : emailLabel) : nok(code3);
  }
  function end(code3) {
    return effects.enter("autolinkMarker"), effects.consume(code3), effects.exit("autolinkMarker"), effects.exit("autolink"), ok2;
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
init_react();
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: !0
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
init_react();
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      let state = self.containerState;
      return state.open || (effects.enter("blockQuote", {
        _container: !0
      }), state.open = !0), effects.enter("blockQuotePrefix"), effects.enter("blockQuoteMarker"), effects.consume(code3), effects.exit("blockQuoteMarker"), after;
    }
    return nok(code3);
  }
  function after(code3) {
    return markdownSpace(code3) ? (effects.enter("blockQuotePrefixWhitespace"), effects.consume(code3), effects.exit("blockQuotePrefixWhitespace"), effects.exit("blockQuotePrefix"), ok2) : (effects.exit("blockQuotePrefix"), ok2(code3));
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
init_react();
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("characterEscape"), effects.enter("escapeMarker"), effects.consume(code3), effects.exit("escapeMarker"), open;
  }
  function open(code3) {
    return asciiPunctuation(code3) ? (effects.enter("characterEscapeValue"), effects.consume(code3), effects.exit("characterEscapeValue"), effects.exit("characterEscape"), ok2) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
init_react();

// node_modules/decode-named-character-reference/index.js
init_react();

// node_modules/character-entities/index.js
init_react();
var characterEntities = {
  AElig: "\xC6",
  AMP: "&",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atilde: "\xC3",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ETH: "\xD0",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: `
`,
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslash: "\xD8",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acirc: "\xE2",
  acute: "\xB4",
  acy: "\u0430",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atilde: "\xE3",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\u2256",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  eth: "\xF0",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacute: "\xED",
  ic: "\u2063",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\u229A",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslash: "\xF8",
  osol: "\u2298",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\u2225",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thorn: "\xFE",
  tilde: "\u02DC",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/decode-named-character-reference/index.js
var own2 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own2.call(characterEntities, value) ? characterEntities[value] : !1;
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  let self = this, size = 0, max, test;
  return start;
  function start(code3) {
    return effects.enter("characterReference"), effects.enter("characterReferenceMarker"), effects.consume(code3), effects.exit("characterReferenceMarker"), open;
  }
  function open(code3) {
    return code3 === 35 ? (effects.enter("characterReferenceMarkerNumeric"), effects.consume(code3), effects.exit("characterReferenceMarkerNumeric"), numeric) : (effects.enter("characterReferenceValue"), max = 31, test = asciiAlphanumeric, value(code3));
  }
  function numeric(code3) {
    return code3 === 88 || code3 === 120 ? (effects.enter("characterReferenceMarkerHexadecimal"), effects.consume(code3), effects.exit("characterReferenceMarkerHexadecimal"), effects.enter("characterReferenceValue"), max = 6, test = asciiHexDigit, value) : (effects.enter("characterReferenceValue"), max = 7, test = asciiDigit, value(code3));
  }
  function value(code3) {
    let token;
    return code3 === 59 && size ? (token = effects.exit("characterReferenceValue"), test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token)) ? nok(code3) : (effects.enter("characterReferenceMarker"), effects.consume(code3), effects.exit("characterReferenceMarker"), effects.exit("characterReference"), ok2)) : test(code3) && size++ < max ? (effects.consume(code3), value) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
init_react();
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: !0
};
function tokenizeCodeFenced(effects, ok2, nok) {
  let self = this, closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: !0
  }, nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: !0
  }, tail = this.events[this.events.length - 1], initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, sizeOpen = 0, marker;
  return start;
  function start(code3) {
    return effects.enter("codeFenced"), effects.enter("codeFencedFence"), effects.enter("codeFencedFenceSequence"), marker = code3, sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    return code3 === marker ? (effects.consume(code3), sizeOpen++, sequenceOpen) : (effects.exit("codeFencedFenceSequence"), sizeOpen < 3 ? nok(code3) : factorySpace(effects, infoOpen, "whitespace")(code3));
  }
  function infoOpen(code3) {
    return code3 === null || markdownLineEnding(code3) ? openAfter(code3) : (effects.enter("codeFencedFenceInfo"), effects.enter("chunkString", {
      contentType: "string"
    }), info(code3));
  }
  function info(code3) {
    return code3 === null || markdownLineEndingOrSpace(code3) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceInfo"), factorySpace(effects, infoAfter, "whitespace")(code3)) : code3 === 96 && code3 === marker ? nok(code3) : (effects.consume(code3), info);
  }
  function infoAfter(code3) {
    return code3 === null || markdownLineEnding(code3) ? openAfter(code3) : (effects.enter("codeFencedFenceMeta"), effects.enter("chunkString", {
      contentType: "string"
    }), meta2(code3));
  }
  function meta2(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceMeta"), openAfter(code3)) : code3 === 96 && code3 === marker ? nok(code3) : (effects.consume(code3), meta2);
  }
  function openAfter(code3) {
    return effects.exit("codeFencedFence"), self.interrupt ? ok2(code3) : contentStart(code3);
  }
  function contentStart(code3) {
    return code3 === null ? after(code3) : markdownLineEnding(code3) ? effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code3) : (effects.enter("codeFlowValue"), contentContinue(code3));
  }
  function contentContinue(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("codeFlowValue"), contentStart(code3)) : (effects.consume(code3), contentContinue);
  }
  function after(code3) {
    return effects.exit("codeFenced"), ok2(code3);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    let self2 = this;
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code3) {
      return self2.parser.lazy[self2.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code3) {
      return effects2.enter("codeFencedFence"), effects2.enter("codeFencedFenceSequence"), closingSequence(code3);
    }
    function closingSequence(code3) {
      return code3 === marker ? (effects2.consume(code3), size++, closingSequence) : size < sizeOpen ? nok2(code3) : (effects2.exit("codeFencedFenceSequence"), factorySpace(effects2, closingSequenceEnd, "whitespace")(code3));
    }
    function closingSequenceEnd(code3) {
      return code3 === null || markdownLineEnding(code3) ? (effects2.exit("codeFencedFence"), ok3(code3)) : nok2(code3);
    }
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
init_react();
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
}, indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: !0
};
function tokenizeCodeIndented(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("codeIndented"), factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterStartPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? afterPrefix(code3) : nok(code3);
  }
  function afterPrefix(code3) {
    return code3 === null ? after(code3) : markdownLineEnding(code3) ? effects.attempt(indentedContent, afterPrefix, after)(code3) : (effects.enter("codeFlowValue"), content3(code3));
  }
  function content3(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("codeFlowValue"), afterPrefix(code3)) : (effects.consume(code3), content3);
  }
  function after(code3) {
    return effects.exit("codeIndented"), ok2(code3);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return self.parser.lazy[self.now().line] ? nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), start) : factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code3) : markdownLineEnding(code3) ? start(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
init_react();
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4, headEnterIndex = 3, index2, enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    for (index2 = headEnterIndex; ++index2 < tailExitIndex; )
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding", events[tailExitIndex][1].type = "codeTextPadding", headEnterIndex += 2, tailExitIndex -= 2;
        break;
      }
  }
  for (index2 = headEnterIndex - 1, tailExitIndex++; ++index2 <= tailExitIndex; )
    enter === void 0 ? index2 !== tailExitIndex && events[index2][1].type !== "lineEnding" && (enter = index2) : (index2 === tailExitIndex || events[index2][1].type === "lineEnding") && (events[enter][1].type = "codeTextData", index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), tailExitIndex -= index2 - enter - 2, index2 = enter + 2), enter = void 0);
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let self = this, sizeOpen = 0, size, token;
  return start;
  function start(code3) {
    return effects.enter("codeText"), effects.enter("codeTextSequence"), openingSequence(code3);
  }
  function openingSequence(code3) {
    return code3 === 96 ? (effects.consume(code3), sizeOpen++, openingSequence) : (effects.exit("codeTextSequence"), gap(code3));
  }
  function gap(code3) {
    return code3 === null ? nok(code3) : code3 === 96 ? (token = effects.enter("codeTextSequence"), size = 0, closingSequence(code3)) : code3 === 32 ? (effects.enter("space"), effects.consume(code3), effects.exit("space"), gap) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), gap) : (effects.enter("codeTextData"), data(code3));
  }
  function data(code3) {
    return code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3) ? (effects.exit("codeTextData"), gap(code3)) : (effects.consume(code3), data);
  }
  function closingSequence(code3) {
    return code3 === 96 ? (effects.consume(code3), size++, closingSequence) : size === sizeOpen ? (effects.exit("codeTextSequence"), effects.exit("codeText"), ok2(code3)) : (token.type = "codeTextData", data(code3));
  }
}

// node_modules/micromark-core-commonmark/lib/content.js
init_react();

// node_modules/micromark-util-subtokenize/index.js
init_react();
function subtokenize(events) {
  let jumps = {}, index2 = -1, event, lineIndex, otherIndex, otherEvent, parameters, subevents, more;
  for (; ++index2 < events.length; ) {
    for (; index2 in jumps; )
      index2 = jumps[index2];
    if (event = events[index2], index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix" && (subevents = event[1]._tokenizer.events, otherIndex = 0, otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank" && (otherIndex += 2), otherIndex < subevents.length && subevents[otherIndex][1].type === "content"))
      for (; ++otherIndex < subevents.length && subevents[otherIndex][1].type !== "content"; )
        subevents[otherIndex][1].type === "chunkText" && (subevents[otherIndex][1]._isInFirstContentOfListItem = !0, otherIndex++);
    if (event[0] === "enter")
      event[1].contentType && (Object.assign(jumps, subcontent(events, index2)), index2 = jumps[index2], more = !0);
    else if (event[1]._container) {
      for (otherIndex = index2, lineIndex = void 0; otherIndex-- && (otherEvent = events[otherIndex], otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank"); )
        otherEvent[0] === "enter" && (lineIndex && (events[lineIndex][1].type = "lineEndingBlank"), otherEvent[1].type = "lineEnding", lineIndex = otherIndex);
      lineIndex && (event[1].end = Object.assign({}, events[lineIndex][1].start), parameters = events.slice(lineIndex, index2), parameters.unshift(event), splice(events, lineIndex, index2 - lineIndex + 1, parameters));
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  let token = events[eventIndex][1], context = events[eventIndex][2], startPosition = eventIndex - 1, startPositions = [], tokenizer = token._tokenizer || context.parser[token.contentType](token.start), childEvents = tokenizer.events, jumps = [], gaps = {}, stream, previous3, index2 = -1, current = token, adjust = 0, start = 0, breaks = [start];
  for (; current; ) {
    for (; events[++startPosition][1] !== current; )
      ;
    startPositions.push(startPosition), current._tokenizer || (stream = context.sliceStream(current), current.next || stream.push(null), previous3 && tokenizer.defineSkip(current.start), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = !0), tokenizer.write(stream), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = void 0)), previous3 = current, current = current.next;
  }
  for (current = token; ++index2 < childEvents.length; )
    childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line && (start = index2 + 1, breaks.push(start), current._tokenizer = void 0, current.previous = void 0, current = current.next);
  for (tokenizer.events = [], current ? (current._tokenizer = void 0, current.previous = void 0) : breaks.pop(), index2 = breaks.length; index2--; ) {
    let slice = childEvents.slice(breaks[index2], breaks[index2 + 1]), start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]), splice(events, start2, 2, slice);
  }
  for (index2 = -1; ++index2 < jumps.length; )
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1], adjust += jumps[index2][1] - jumps[index2][0] - 1;
  return gaps;
}

// node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
}, continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: !0
};
function resolveContent(events) {
  return subtokenize(events), events;
}
function tokenizeContent(effects, ok2) {
  let previous3;
  return start;
  function start(code3) {
    return effects.enter("content"), previous3 = effects.enter("chunkContent", {
      contentType: "content"
    }), data(code3);
  }
  function data(code3) {
    return code3 === null ? contentEnd(code3) : markdownLineEnding(code3) ? effects.check(continuationConstruct, contentContinue, contentEnd)(code3) : (effects.consume(code3), data);
  }
  function contentEnd(code3) {
    return effects.exit("chunkContent"), effects.exit("content"), ok2(code3);
  }
  function contentContinue(code3) {
    return effects.consume(code3), effects.exit("chunkContent"), previous3.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous3
    }), previous3 = previous3.next, data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  let self = this;
  return startLookahead;
  function startLookahead(code3) {
    return effects.exit("chunkContent"), effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3))
      return nok(code3);
    let tail = self.events[self.events.length - 1];
    return !self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code3) : effects.interrupt(self.parser.constructs.flow, nok, ok2)(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/definition.js
init_react();

// node_modules/micromark-factory-destination/index.js
init_react();
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  let limit = max || Number.POSITIVE_INFINITY, balance = 0;
  return start;
  function start(code3) {
    return code3 === 60 ? (effects.enter(type), effects.enter(literalType), effects.enter(literalMarkerType), effects.consume(code3), effects.exit(literalMarkerType), destinationEnclosedBefore) : code3 === null || code3 === 41 || asciiControl(code3) ? nok(code3) : (effects.enter(type), effects.enter(rawType), effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationRaw(code3));
  }
  function destinationEnclosedBefore(code3) {
    return code3 === 62 ? (effects.enter(literalMarkerType), effects.consume(code3), effects.exit(literalMarkerType), effects.exit(literalType), effects.exit(type), ok2) : (effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationEnclosed(code3));
  }
  function destinationEnclosed(code3) {
    return code3 === 62 ? (effects.exit("chunkString"), effects.exit(stringType), destinationEnclosedBefore(code3)) : code3 === null || code3 === 60 || markdownLineEnding(code3) ? nok(code3) : (effects.consume(code3), code3 === 92 ? destinationEnclosedEscape : destinationEnclosed);
  }
  function destinationEnclosedEscape(code3) {
    return code3 === 60 || code3 === 62 || code3 === 92 ? (effects.consume(code3), destinationEnclosed) : destinationEnclosed(code3);
  }
  function destinationRaw(code3) {
    return code3 === 40 ? ++balance > limit ? nok(code3) : (effects.consume(code3), destinationRaw) : code3 === 41 ? balance-- ? (effects.consume(code3), destinationRaw) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code3)) : code3 === null || markdownLineEndingOrSpace(code3) ? balance ? nok(code3) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code3)) : asciiControl(code3) ? nok(code3) : (effects.consume(code3), code3 === 92 ? destinationRawEscape : destinationRaw);
  }
  function destinationRawEscape(code3) {
    return code3 === 40 || code3 === 41 || code3 === 92 ? (effects.consume(code3), destinationRaw) : destinationRaw(code3);
  }
}

// node_modules/micromark-factory-label/index.js
init_react();
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  let self = this, size = 0, data;
  return start;
  function start(code3) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.enter(stringType), atBreak;
  }
  function atBreak(code3) {
    return code3 === null || code3 === 91 || code3 === 93 && !data || code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999 ? nok(code3) : code3 === 93 ? (effects.exit(stringType), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.exit(type), ok2) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), atBreak) : (effects.enter("chunkString", {
      contentType: "string"
    }), label(code3));
  }
  function label(code3) {
    return code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999 ? (effects.exit("chunkString"), atBreak(code3)) : (effects.consume(code3), data = data || !markdownSpace(code3), code3 === 92 ? labelEscape : label);
  }
  function labelEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, label) : label(code3);
  }
}

// node_modules/micromark-factory-title/index.js
init_react();
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), marker = code3 === 40 ? 41 : code3, atFirstTitleBreak;
  }
  function atFirstTitleBreak(code3) {
    return code3 === marker ? (effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.exit(type), ok2) : (effects.enter(stringType), atTitleBreak(code3));
  }
  function atTitleBreak(code3) {
    return code3 === marker ? (effects.exit(stringType), atFirstTitleBreak(marker)) : code3 === null ? nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, atTitleBreak, "linePrefix")) : (effects.enter("chunkString", {
      contentType: "string"
    }), title(code3));
  }
  function title(code3) {
    return code3 === marker || code3 === null || markdownLineEnding(code3) ? (effects.exit("chunkString"), atTitleBreak(code3)) : (effects.consume(code3), code3 === 92 ? titleEscape : title);
  }
  function titleEscape(code3) {
    return code3 === marker || code3 === 92 ? (effects.consume(code3), title) : title(code3);
  }
}

// node_modules/micromark-factory-whitespace/index.js
init_react();
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code3) {
    return markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), seen = !0, start) : markdownSpace(code3) ? factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code3) : ok2(code3);
  }
}

// node_modules/micromark-util-normalize-identifier/index.js
init_react();
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
}, titleConstruct = {
  tokenize: tokenizeTitle,
  partial: !0
};
function tokenizeDefinition(effects, ok2, nok) {
  let self = this, identifier;
  return start;
  function start(code3) {
    return effects.enter("definition"), factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code3);
  }
  function labelAfter(code3) {
    return identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)), code3 === 58 ? (effects.enter("definitionMarker"), effects.consume(code3), effects.exit("definitionMarker"), factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("definition"), self.parser.defined.includes(identifier) || self.parser.defined.push(identifier), ok2(code3)) : nok(code3);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, before)(code3) : nok(code3);
  }
  function before(code3) {
    return code3 === 34 || code3 === 39 || code3 === 40 ? factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code3) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
init_react();
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("hardBreakEscape"), effects.enter("escapeMarker"), effects.consume(code3), open;
  }
  function open(code3) {
    return markdownLineEnding(code3) ? (effects.exit("escapeMarker"), effects.exit("hardBreakEscape"), ok2(code3)) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
init_react();
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2, contentStart = 3, content3, text5;
  return events[contentStart][1].type === "whitespace" && (contentStart += 2), contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace" && (contentEnd -= 2), events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace") && (contentEnd -= contentStart + 1 === contentEnd ? 2 : 4), contentEnd > contentStart && (content3 = {
    type: "atxHeadingText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end
  }, text5 = {
    type: "chunkText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end,
    contentType: "text"
  }, splice(events, contentStart, contentEnd - contentStart + 1, [
    ["enter", content3, context],
    ["enter", text5, context],
    ["exit", text5, context],
    ["exit", content3, context]
  ])), events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let self = this, size = 0;
  return start;
  function start(code3) {
    return effects.enter("atxHeading"), effects.enter("atxHeadingSequence"), fenceOpenInside(code3);
  }
  function fenceOpenInside(code3) {
    return code3 === 35 && size++ < 6 ? (effects.consume(code3), fenceOpenInside) : code3 === null || markdownLineEndingOrSpace(code3) ? (effects.exit("atxHeadingSequence"), self.interrupt ? ok2(code3) : headingBreak(code3)) : nok(code3);
  }
  function headingBreak(code3) {
    return code3 === 35 ? (effects.enter("atxHeadingSequence"), sequence(code3)) : code3 === null || markdownLineEnding(code3) ? (effects.exit("atxHeading"), ok2(code3)) : markdownSpace(code3) ? factorySpace(effects, headingBreak, "whitespace")(code3) : (effects.enter("atxHeadingText"), data(code3));
  }
  function sequence(code3) {
    return code3 === 35 ? (effects.consume(code3), sequence) : (effects.exit("atxHeadingSequence"), headingBreak(code3));
  }
  function data(code3) {
    return code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3) ? (effects.exit("atxHeadingText"), headingBreak(code3)) : (effects.consume(code3), data);
  }
}

// node_modules/micromark-core-commonmark/lib/html-flow.js
init_react();

// node_modules/micromark-util-html-tag-name/index.js
init_react();
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: !0
}, nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: !0
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  for (; index2-- && !(events[index2][0] === "enter" && events[index2][1].type === "htmlFlow"); )
    ;
  return index2 > 1 && events[index2 - 2][1].type === "linePrefix" && (events[index2][1].start = events[index2 - 2][1].start, events[index2 + 1][1].start = events[index2 - 2][1].start, events.splice(index2 - 2, 2)), events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  let self = this, kind, startTag, buffer2, index2, marker;
  return start;
  function start(code3) {
    return effects.enter("htmlFlow"), effects.enter("htmlFlowData"), effects.consume(code3), open;
  }
  function open(code3) {
    return code3 === 33 ? (effects.consume(code3), declarationStart) : code3 === 47 ? (effects.consume(code3), tagCloseStart) : code3 === 63 ? (effects.consume(code3), kind = 3, self.interrupt ? ok2 : continuationDeclarationInside) : asciiAlpha(code3) ? (effects.consume(code3), buffer2 = String.fromCharCode(code3), startTag = !0, tagName) : nok(code3);
  }
  function declarationStart(code3) {
    return code3 === 45 ? (effects.consume(code3), kind = 2, commentOpenInside) : code3 === 91 ? (effects.consume(code3), kind = 5, buffer2 = "CDATA[", index2 = 0, cdataOpenInside) : asciiAlpha(code3) ? (effects.consume(code3), kind = 4, self.interrupt ? ok2 : continuationDeclarationInside) : nok(code3);
  }
  function commentOpenInside(code3) {
    return code3 === 45 ? (effects.consume(code3), self.interrupt ? ok2 : continuationDeclarationInside) : nok(code3);
  }
  function cdataOpenInside(code3) {
    return code3 === buffer2.charCodeAt(index2++) ? (effects.consume(code3), index2 === buffer2.length ? self.interrupt ? ok2 : continuation : cdataOpenInside) : nok(code3);
  }
  function tagCloseStart(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), buffer2 = String.fromCharCode(code3), tagName) : nok(code3);
  }
  function tagName(code3) {
    return code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3) ? code3 !== 47 && startTag && htmlRawNames.includes(buffer2.toLowerCase()) ? (kind = 1, self.interrupt ? ok2(code3) : continuation(code3)) : htmlBlockNames.includes(buffer2.toLowerCase()) ? (kind = 6, code3 === 47 ? (effects.consume(code3), basicSelfClosing) : self.interrupt ? ok2(code3) : continuation(code3)) : (kind = 7, self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : startTag ? completeAttributeNameBefore(code3) : completeClosingTagAfter(code3)) : code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), buffer2 += String.fromCharCode(code3), tagName) : nok(code3);
  }
  function basicSelfClosing(code3) {
    return code3 === 62 ? (effects.consume(code3), self.interrupt ? ok2 : continuation) : nok(code3);
  }
  function completeClosingTagAfter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), completeClosingTagAfter) : completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    return code3 === 47 ? (effects.consume(code3), completeEnd) : code3 === 58 || code3 === 95 || asciiAlpha(code3) ? (effects.consume(code3), completeAttributeName) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeNameBefore) : completeEnd(code3);
  }
  function completeAttributeName(code3) {
    return code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3) ? (effects.consume(code3), completeAttributeName) : completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    return code3 === 61 ? (effects.consume(code3), completeAttributeValueBefore) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeNameAfter) : completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    return code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 ? nok(code3) : code3 === 34 || code3 === 39 ? (effects.consume(code3), marker = code3, completeAttributeValueQuoted) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeValueBefore) : (marker = null, completeAttributeValueUnquoted(code3));
  }
  function completeAttributeValueQuoted(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : code3 === marker ? (effects.consume(code3), completeAttributeValueQuotedAfter) : (effects.consume(code3), completeAttributeValueQuoted);
  }
  function completeAttributeValueUnquoted(code3) {
    return code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3) ? completeAttributeNameAfter(code3) : (effects.consume(code3), completeAttributeValueUnquoted);
  }
  function completeAttributeValueQuotedAfter(code3) {
    return code3 === 47 || code3 === 62 || markdownSpace(code3) ? completeAttributeNameBefore(code3) : nok(code3);
  }
  function completeEnd(code3) {
    return code3 === 62 ? (effects.consume(code3), completeAfter) : nok(code3);
  }
  function completeAfter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), completeAfter) : code3 === null || markdownLineEnding(code3) ? continuation(code3) : nok(code3);
  }
  function continuation(code3) {
    return code3 === 45 && kind === 2 ? (effects.consume(code3), continuationCommentInside) : code3 === 60 && kind === 1 ? (effects.consume(code3), continuationRawTagOpen) : code3 === 62 && kind === 4 ? (effects.consume(code3), continuationClose) : code3 === 63 && kind === 3 ? (effects.consume(code3), continuationDeclarationInside) : code3 === 93 && kind === 5 ? (effects.consume(code3), continuationCharacterDataInside) : markdownLineEnding(code3) && (kind === 6 || kind === 7) ? effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code3) : code3 === null || markdownLineEnding(code3) ? continuationAtLineEnding(code3) : (effects.consume(code3), continuation);
  }
  function continuationAtLineEnding(code3) {
    return effects.exit("htmlFlowData"), htmlContinueStart(code3);
  }
  function htmlContinueStart(code3) {
    return code3 === null ? done(code3) : markdownLineEnding(code3) ? effects.attempt({
      tokenize: htmlLineEnd,
      partial: !0
    }, htmlContinueStart, done)(code3) : (effects.enter("htmlFlowData"), continuation(code3));
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code3) {
      return self.parser.lazy[self.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function continuationCommentInside(code3) {
    return code3 === 45 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    return code3 === 47 ? (effects.consume(code3), buffer2 = "", continuationRawEndTag) : continuation(code3);
  }
  function continuationRawEndTag(code3) {
    return code3 === 62 && htmlRawNames.includes(buffer2.toLowerCase()) ? (effects.consume(code3), continuationClose) : asciiAlpha(code3) && buffer2.length < 8 ? (effects.consume(code3), buffer2 += String.fromCharCode(code3), continuationRawEndTag) : continuation(code3);
  }
  function continuationCharacterDataInside(code3) {
    return code3 === 93 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    return code3 === 62 ? (effects.consume(code3), continuationClose) : code3 === 45 && kind === 2 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationClose(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("htmlFlowData"), done(code3)) : (effects.consume(code3), continuationClose);
  }
  function done(code3) {
    return effects.exit("htmlFlow"), ok2(code3);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.exit("htmlFlowData"), effects.enter("lineEndingBlank"), effects.consume(code3), effects.exit("lineEndingBlank"), effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
init_react();
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  let self = this, marker, buffer2, index2, returnState;
  return start;
  function start(code3) {
    return effects.enter("htmlText"), effects.enter("htmlTextData"), effects.consume(code3), open;
  }
  function open(code3) {
    return code3 === 33 ? (effects.consume(code3), declarationOpen) : code3 === 47 ? (effects.consume(code3), tagCloseStart) : code3 === 63 ? (effects.consume(code3), instruction) : asciiAlpha(code3) ? (effects.consume(code3), tagOpen) : nok(code3);
  }
  function declarationOpen(code3) {
    return code3 === 45 ? (effects.consume(code3), commentOpen) : code3 === 91 ? (effects.consume(code3), buffer2 = "CDATA[", index2 = 0, cdataOpen) : asciiAlpha(code3) ? (effects.consume(code3), declaration) : nok(code3);
  }
  function commentOpen(code3) {
    return code3 === 45 ? (effects.consume(code3), commentStart) : nok(code3);
  }
  function commentStart(code3) {
    return code3 === null || code3 === 62 ? nok(code3) : code3 === 45 ? (effects.consume(code3), commentStartDash) : comment(code3);
  }
  function commentStartDash(code3) {
    return code3 === null || code3 === 62 ? nok(code3) : comment(code3);
  }
  function comment(code3) {
    return code3 === null ? nok(code3) : code3 === 45 ? (effects.consume(code3), commentClose) : markdownLineEnding(code3) ? (returnState = comment, atLineEnding(code3)) : (effects.consume(code3), comment);
  }
  function commentClose(code3) {
    return code3 === 45 ? (effects.consume(code3), end) : comment(code3);
  }
  function cdataOpen(code3) {
    return code3 === buffer2.charCodeAt(index2++) ? (effects.consume(code3), index2 === buffer2.length ? cdata : cdataOpen) : nok(code3);
  }
  function cdata(code3) {
    return code3 === null ? nok(code3) : code3 === 93 ? (effects.consume(code3), cdataClose) : markdownLineEnding(code3) ? (returnState = cdata, atLineEnding(code3)) : (effects.consume(code3), cdata);
  }
  function cdataClose(code3) {
    return code3 === 93 ? (effects.consume(code3), cdataEnd) : cdata(code3);
  }
  function cdataEnd(code3) {
    return code3 === 62 ? end(code3) : code3 === 93 ? (effects.consume(code3), cdataEnd) : cdata(code3);
  }
  function declaration(code3) {
    return code3 === null || code3 === 62 ? end(code3) : markdownLineEnding(code3) ? (returnState = declaration, atLineEnding(code3)) : (effects.consume(code3), declaration);
  }
  function instruction(code3) {
    return code3 === null ? nok(code3) : code3 === 63 ? (effects.consume(code3), instructionClose) : markdownLineEnding(code3) ? (returnState = instruction, atLineEnding(code3)) : (effects.consume(code3), instruction);
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), tagClose) : nok(code3);
  }
  function tagClose(code3) {
    return code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagClose) : tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    return markdownLineEnding(code3) ? (returnState = tagCloseBetween, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagCloseBetween) : end(code3);
  }
  function tagOpen(code3) {
    return code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagOpen) : code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : nok(code3);
  }
  function tagOpenBetween(code3) {
    return code3 === 47 ? (effects.consume(code3), end) : code3 === 58 || code3 === 95 || asciiAlpha(code3) ? (effects.consume(code3), tagOpenAttributeName) : markdownLineEnding(code3) ? (returnState = tagOpenBetween, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenBetween) : end(code3);
  }
  function tagOpenAttributeName(code3) {
    return code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagOpenAttributeName) : tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    return code3 === 61 ? (effects.consume(code3), tagOpenAttributeValueBefore) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeNameAfter, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenAttributeNameAfter) : tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    return code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 ? nok(code3) : code3 === 34 || code3 === 39 ? (effects.consume(code3), marker = code3, tagOpenAttributeValueQuoted) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeValueBefore, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenAttributeValueBefore) : (effects.consume(code3), marker = void 0, tagOpenAttributeValueUnquoted);
  }
  function tagOpenAttributeValueQuoted(code3) {
    return code3 === marker ? (effects.consume(code3), tagOpenAttributeValueQuotedAfter) : code3 === null ? nok(code3) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeValueQuoted, atLineEnding(code3)) : (effects.consume(code3), tagOpenAttributeValueQuoted);
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    return code3 === 62 || code3 === 47 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : nok(code3);
  }
  function tagOpenAttributeValueUnquoted(code3) {
    return code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96 ? nok(code3) : code3 === 62 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : (effects.consume(code3), tagOpenAttributeValueUnquoted);
  }
  function atLineEnding(code3) {
    return effects.exit("htmlTextData"), effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code3) {
    return effects.enter("htmlTextData"), returnState(code3);
  }
  function end(code3) {
    return code3 === 62 ? (effects.consume(code3), effects.exit("htmlTextData"), effects.exit("htmlText"), ok2) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
init_react();
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}, resourceConstruct = {
  tokenize: tokenizeResource
}, fullReferenceConstruct = {
  tokenize: tokenizeFullReference
}, collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1, token;
  for (; ++index2 < events.length; )
    token = events[index2][1], (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") && (events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2), token.type = "data", index2++);
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length, offset = 0, token, open, close, media;
  for (; index2--; )
    if (token = events[index2][1], open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive)
        break;
      events[index2][0] === "enter" && token.type === "labelLink" && (token._inactive = !0);
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced && (open = index2, token.type !== "labelLink")) {
        offset = 2;
        break;
      }
    } else
      token.type === "labelEnd" && (close = index2);
  let group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }, label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  }, text5 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  return media = [
    ["enter", group, context],
    ["enter", label, context]
  ], media = push(media, events.slice(open + 1, open + offset + 3)), media = push(media, [["enter", text5, context]]), media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)), media = push(media, [
    ["exit", text5, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]), media = push(media, events.slice(close + 1)), media = push(media, [["exit", group, context]]), splice(events, open, events.length, media), events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  let self = this, index2 = self.events.length, labelStart, defined;
  for (; index2--; )
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  return start;
  function start(code3) {
    return labelStart ? labelStart._inactive ? balanced(code3) : (defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }))), effects.enter("labelEnd"), effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelEnd"), afterLabelEnd) : nok(code3);
  }
  function afterLabelEnd(code3) {
    return code3 === 40 ? effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code3) : code3 === 91 ? effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code3) : defined ? ok2(code3) : balanced(code3);
  }
  function balanced(code3) {
    return labelStart._balanced = !0, nok(code3);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("resource"), effects.enter("resourceMarker"), effects.consume(code3), effects.exit("resourceMarker"), factoryWhitespace(effects, open);
  }
  function open(code3) {
    return code3 === 41 ? end(code3) : factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code3);
  }
  function destinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, between)(code3) : end(code3);
  }
  function between(code3) {
    return code3 === 34 || code3 === 39 || code3 === 40 ? factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code3) : end(code3);
  }
  function end(code3) {
    return code3 === 41 ? (effects.enter("resourceMarker"), effects.consume(code3), effects.exit("resourceMarker"), effects.exit("resource"), ok2) : nok(code3);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code3);
  }
  function afterLabel(code3) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok2(code3) : nok(code3);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("reference"), effects.enter("referenceMarker"), effects.consume(code3), effects.exit("referenceMarker"), open;
  }
  function open(code3) {
    return code3 === 93 ? (effects.enter("referenceMarker"), effects.consume(code3), effects.exit("referenceMarker"), effects.exit("reference"), ok2) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
init_react();
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("labelImage"), effects.enter("labelImageMarker"), effects.consume(code3), effects.exit("labelImageMarker"), open;
  }
  function open(code3) {
    return code3 === 91 ? (effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelImage"), after) : nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
init_react();
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("labelLink"), effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelLink"), after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
init_react();
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code3) {
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, ok2, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
init_react();

// node_modules/micromark-core-commonmark/lib/thematic-break.js
init_react();
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0, marker;
  return start;
  function start(code3) {
    return effects.enter("thematicBreak"), marker = code3, atBreak(code3);
  }
  function atBreak(code3) {
    return code3 === marker ? (effects.enter("thematicBreakSequence"), sequence(code3)) : markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : size < 3 || code3 !== null && !markdownLineEnding(code3) ? nok(code3) : (effects.exit("thematicBreak"), ok2(code3));
  }
  function sequence(code3) {
    return code3 === marker ? (effects.consume(code3), size++, sequence) : (effects.exit("thematicBreakSequence"), atBreak(code3));
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
}, listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: !0
}, indentConstruct = {
  tokenize: tokenizeIndent,
  partial: !0
};
function tokenizeListStart(effects, ok2, nok) {
  let self = this, tail = self.events[self.events.length - 1], initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, size = 0;
  return start;
  function start(code3) {
    let kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
      if (self.containerState.type || (self.containerState.type = kind, effects.enter(kind, {
        _container: !0
      })), kind === "listUnordered")
        return effects.enter("listItemPrefix"), code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      if (!self.interrupt || code3 === 49)
        return effects.enter("listItemPrefix"), effects.enter("listItemValue"), inside(code3);
    }
    return nok(code3);
  }
  function inside(code3) {
    return asciiDigit(code3) && ++size < 10 ? (effects.consume(code3), inside) : (!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46) ? (effects.exit("listItemValue"), atMarker(code3)) : nok(code3);
  }
  function atMarker(code3) {
    return effects.enter("listItemMarker"), effects.consume(code3), effects.exit("listItemMarker"), self.containerState.marker = self.containerState.marker || code3, effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code3) {
    return self.containerState.initialBlankLine = !0, initialSize++, endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    return markdownSpace(code3) ? (effects.enter("listItemPrefixWhitespace"), effects.consume(code3), effects.exit("listItemPrefixWhitespace"), endOfPrefix) : nok(code3);
  }
  function endOfPrefix(code3) {
    return self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), !0).length, ok2(code3);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  let self = this;
  return self.containerState._closeFlow = void 0, effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    return self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine, factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code3);
  }
  function notBlank(code3) {
    return self.containerState.furtherBlankLines || !markdownSpace(code3) ? (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, notInCurrentItem(code3)) : (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, effects.attempt(indentConstruct, ok2, notInCurrentItem)(code3));
  }
  function notInCurrentItem(code3) {
    return self.containerState._closeFlow = !0, self.interrupt = void 0, factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code3);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], !0).length === self.containerState.size ? ok2(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
init_react();
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length, content3, text5, definition2;
  for (; index2--; )
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      events[index2][1].type === "paragraph" && (text5 = index2);
    } else
      events[index2][1].type === "content" && events.splice(index2, 1), !definition2 && events[index2][1].type === "definition" && (definition2 = index2);
  let heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text5][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  return events[text5][1].type = "setextHeadingText", definition2 ? (events.splice(text5, 0, ["enter", heading2, context]), events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]), events[content3][1].end = Object.assign({}, events[definition2][1].end)) : events[content3][1] = heading2, events.push(["exit", heading2, context]), events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  let self = this, index2 = self.events.length, marker, paragraph2;
  for (; index2--; )
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  return start;
  function start(code3) {
    return !self.parser.lazy[self.now().line] && (self.interrupt || paragraph2) ? (effects.enter("setextHeadingLine"), effects.enter("setextHeadingLineSequence"), marker = code3, closingSequence(code3)) : nok(code3);
  }
  function closingSequence(code3) {
    return code3 === marker ? (effects.consume(code3), closingSequence) : (effects.exit("setextHeadingLineSequence"), factorySpace(effects, closingSequenceEnd, "lineSuffix")(code3));
  }
  function closingSequenceEnd(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("setextHeadingLine"), ok2(code3)) : nok(code3);
  }
}

// node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  let self = this, initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEndingBlank"), effects.consume(code3), effects.exit("lineEndingBlank"), self.currentConstruct = void 0, initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), self.currentConstruct = void 0, initial;
  }
}

// node_modules/micromark/lib/initialize/text.js
init_react();
var resolver = {
  resolveAll: createResolver()
}, string = initializeFactory("string"), text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    let self = this, constructs2 = this.parser.constructs[field], text5 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text5(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      return effects.enter("data"), effects.consume(code3), data;
    }
    function data(code3) {
      return atBreak(code3) ? (effects.exit("data"), text5(code3)) : (effects.consume(code3), data);
    }
    function atBreak(code3) {
      if (code3 === null)
        return !0;
      let list3 = constructs2[code3], index2 = -1;
      if (list3)
        for (; ++index2 < list3.length; ) {
          let item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous))
            return !0;
        }
      return !1;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1, enter;
    for (; ++index2 <= events.length; )
      enter === void 0 ? events[index2] && events[index2][1].type === "data" && (enter = index2, index2++) : (!events[index2] || events[index2][1].type !== "data") && (index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), index2 = enter + 2), enter = void 0);
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  for (; ++eventIndex <= events.length; )
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      let data = events[eventIndex - 1][1], chunks = context.sliceStream(data), index2 = chunks.length, bufferIndex = -1, size = 0, tabs;
      for (; index2--; ) {
        let chunk = chunks[index2];
        if (typeof chunk == "string") {
          for (bufferIndex = chunk.length; chunk.charCodeAt(bufferIndex - 1) === 32; )
            size++, bufferIndex--;
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2)
          tabs = !0, size++;
        else if (chunk !== -1) {
          index2++;
          break;
        }
      }
      if (size) {
        let token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start), data.start.offset === data.end.offset ? Object.assign(data, token) : (events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]), eventIndex += 2);
      }
      eventIndex++;
    }
  return events;
}

// node_modules/micromark/lib/create-tokenizer.js
init_react();
function createTokenizer(parser, initialize, from) {
  let point3 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  }), columnStart = {}, resolveAllConstructs = [], chunks = [], stack = [], consumed = !0, effects = {
    consume,
    enter,
    exit: exit3,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: !0
    })
  }, context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  }, state = initialize.tokenize.call(context, effects), expectedCode;
  return initialize.resolveAll && resolveAllConstructs.push(initialize), context;
  function write(slice) {
    return chunks = push(chunks, slice), main(), chunks[chunks.length - 1] !== null ? [] : (addResult(initialize, 0), context.events = resolveAll(resolveAllConstructs, context.events, context), context.events);
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point3);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column, accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    for (; point3._index < chunks.length; ) {
      let chunk = chunks[point3._index];
      if (typeof chunk == "string")
        for (chunkIndex = point3._index, point3._bufferIndex < 0 && (point3._bufferIndex = 0); point3._index === chunkIndex && point3._bufferIndex < chunk.length; )
          go(chunk.charCodeAt(point3._bufferIndex));
      else
        go(chunk);
    }
  }
  function go(code3) {
    consumed = void 0, expectedCode = code3, state = state(code3);
  }
  function consume(code3) {
    markdownLineEnding(code3) ? (point3.line++, point3.column = 1, point3.offset += code3 === -3 ? 2 : 1, accountForPotentialSkip()) : code3 !== -1 && (point3.column++, point3.offset++), point3._bufferIndex < 0 ? point3._index++ : (point3._bufferIndex++, point3._bufferIndex === chunks[point3._index].length && (point3._bufferIndex = -1, point3._index++)), context.previous = code3, consumed = !0;
  }
  function enter(type, fields) {
    let token = fields || {};
    return token.type = type, token.start = now(), context.events.push(["enter", token, context]), stack.push(token), token;
  }
  function exit3(type) {
    let token = stack.pop();
    return token.end = now(), context.events.push(["exit", token, context]), token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs, constructIndex, currentConstruct, info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map) {
        return start;
        function start(code3) {
          let def = code3 !== null && map[code3], all3 = code3 !== null && map.null, list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
          ];
          return handleListOfConstructs(list3)(code3);
        }
      }
      function handleListOfConstructs(list3) {
        return listOfConstructs = list3, constructIndex = 0, list3.length === 0 ? bogusState : handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          return info = store(), currentConstruct = construct, construct.partial || (context.currentConstruct = construct), construct.name && context.parser.constructs.disable.null.includes(construct.name) ? nok(code3) : construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code3);
        }
      }
      function ok2(code3) {
        return consumed = !0, onreturn(currentConstruct, info), returnState;
      }
      function nok(code3) {
        return consumed = !0, info.restore(), ++constructIndex < listOfConstructs.length ? handleConstruct(listOfConstructs[constructIndex]) : bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    construct.resolveAll && !resolveAllConstructs.includes(construct) && resolveAllConstructs.push(construct), construct.resolve && splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context)), construct.resolveTo && (context.events = construct.resolveTo(context.events, context));
  }
  function store() {
    let startPoint = now(), startPrevious = context.previous, startCurrentConstruct = context.currentConstruct, startEventsIndex = context.events.length, startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point3 = startPoint, context.previous = startPrevious, context.currentConstruct = startCurrentConstruct, context.events.length = startEventsIndex, stack = startStack, accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    point3.line in columnStart && point3.column < 2 && (point3.column = columnStart[point3.line], point3.offset += columnStart[point3.line] - 1);
  }
}
function sliceChunks(chunks, token) {
  let startIndex = token.start._index, startBufferIndex = token.start._bufferIndex, endIndex = token.end._index, endBufferIndex = token.end._bufferIndex, view;
  return startIndex === endIndex ? view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)] : (view = chunks.slice(startIndex, endIndex), startBufferIndex > -1 && (view[0] = view[0].slice(startBufferIndex)), endBufferIndex > 0 && view.push(chunks[endIndex].slice(0, endBufferIndex))), view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1, result = [], atTab;
  for (; ++index2 < chunks.length; ) {
    let chunk = chunks[index2], value;
    if (typeof chunk == "string")
      value = chunk;
    else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = `
`;
          break;
        }
        case -3: {
          value = `\r
`;
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default:
          value = String.fromCharCode(chunk);
      }
    atTab = chunk === -2, result.push(value);
  }
  return result.join("");
}

// node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
init_react();
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
}, contentInitial = {
  [91]: definition
}, flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
}, flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
}, string2 = {
  [38]: characterReference,
  [92]: characterEscape
}, text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
}, insideSpan = {
  null: [attention, resolver]
}, attentionMarkers = {
  null: [42, 95]
}, disable = {
  null: []
};

// node_modules/micromark/lib/parse.js
function parse(options = {}) {
  let constructs2 = combineExtensions([constructs_exports].concat(options.extensions || [])), parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content),
    document: create2(document2),
    flow: create2(flow),
    string: create2(string),
    text: create2(text)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/micromark/lib/preprocess.js
init_react();
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1, buffer2 = "", start = !0, atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    let chunks = [], match, next, startPosition, endPosition, code3;
    for (value = buffer2 + value.toString(encoding), startPosition = 0, buffer2 = "", start && (value.charCodeAt(0) === 65279 && startPosition++, start = void 0); startPosition < value.length; ) {
      if (search.lastIndex = startPosition, match = search.exec(value), endPosition = match && match.index !== void 0 ? match.index : value.length, code3 = value.charCodeAt(endPosition), !match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn)
        chunks.push(-3), atCarriageReturn = void 0;
      else
        switch (atCarriageReturn && (chunks.push(-5), atCarriageReturn = void 0), startPosition < endPosition && (chunks.push(value.slice(startPosition, endPosition)), column += endPosition - startPosition), code3) {
          case 0: {
            chunks.push(65533), column++;
            break;
          }
          case 9: {
            for (next = Math.ceil(column / 4) * 4, chunks.push(-2); column++ < next; )
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4), column = 1;
            break;
          }
          default:
            atCarriageReturn = !0, column = 1;
        }
      startPosition = endPosition + 1;
    }
    return end && (atCarriageReturn && chunks.push(-5), buffer2 && chunks.push(buffer2), chunks.push(null)), chunks;
  }
}

// node_modules/micromark/lib/postprocess.js
init_react();
function postprocess(events) {
  for (; !subtokenize(events); )
    ;
  return events;
}

// node_modules/micromark-util-decode-numeric-character-reference/index.js
init_react();
function decodeNumericCharacterReference(value, base2) {
  let code3 = Number.parseInt(value, base2);
  return code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || code3 > 126 && code3 < 160 || code3 > 55295 && code3 < 57344 || code3 > 64975 && code3 < 65008 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || code3 > 1114111 ? "\uFFFD" : String.fromCharCode(code3);
}

// node_modules/micromark-util-decode-string/index.js
init_react();
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1)
    return $1;
  if ($2.charCodeAt(0) === 35) {
    let head2 = $2.charCodeAt(1), hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var own3 = {}.hasOwnProperty, fromMarkdown = function(value, encoding, options) {
  return typeof encoding != "string" && (options = encoding, encoding = void 0), compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, !0))));
};
function compiler(options = {}) {
  let config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html4, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html4, buffer2),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer2,
      link: opener(link2),
      listItem: opener(listItem3),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []), data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    }, stack = [tree], tokenStack = [], listStack = [], context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit3,
      buffer: buffer2,
      resume,
      setData,
      getData
    }, index2 = -1;
    for (; ++index2 < events.length; )
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered")
        if (events[index2][0] === "enter")
          listStack.push(index2);
        else {
          let tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
    for (index2 = -1; ++index2 < events.length; ) {
      let handler = config[events[index2][0]];
      own3.call(handler, events[index2][1].type) && handler[events[index2][1].type].call(Object.assign({
        sliceSerialize: events[index2][2].sliceSerialize
      }, context), events[index2][1]);
    }
    if (tokenStack.length > 0) {
      let tail = tokenStack[tokenStack.length - 1];
      (tail[1] || defaultOnError).call(context, void 0, tail[0]);
    }
    for (tree.position = {
      start: point3(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point3(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, index2 = -1; ++index2 < config.transforms.length; )
      tree = config.transforms[index2](tree) || tree;
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1, containerBalance = -1, listSpread = !1, listItem4, lineIndex, firstBlankLineIndex, atMarker;
    for (; ++index2 <= length; ) {
      let event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote" ? (event[0] === "enter" ? containerBalance++ : containerBalance--, atMarker = void 0) : event[1].type === "lineEndingBlank" ? event[0] === "enter" && (listItem4 && !atMarker && !containerBalance && !firstBlankLineIndex && (firstBlankLineIndex = index2), atMarker = void 0) : event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace" || (atMarker = void 0), !containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem4) {
          let tailIndex = index2;
          for (lineIndex = void 0; tailIndex--; ) {
            let tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              lineIndex && (events[lineIndex][1].type = "lineEndingBlank", listSpread = !0), tailEvent[1].type = "lineEnding", lineIndex = tailIndex;
            } else if (!(tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent"))
              break;
          }
          firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex) && (listItem4._spread = !0), listItem4.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end), events.splice(lineIndex || index2, 0, ["exit", listItem4, event[2]]), index2++, length++;
        }
        event[1].type === "listItemPrefix" && (listItem4 = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, event[1].start)
        }, events.splice(index2, 0, ["enter", listItem4, event[2]]), index2++, length++, firstBlankLineIndex = void 0, atMarker = !0);
      }
    }
    return events[start][1]._spread = listSpread, length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point3(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token), and && and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    return this.stack[this.stack.length - 1].children.push(node), this.stack.push(node), this.tokenStack.push([token, errorHandler]), node.position = {
      start: point3(token.start)
    }, node;
  }
  function closer(and) {
    return close;
    function close(token) {
      and && and.call(this, token), exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    let node = this.stack.pop(), open = this.tokenStack.pop();
    if (open)
      open[0].type !== token.type && (onExitError ? onExitError.call(this, token, open[0]) : (open[1] || defaultOnError).call(this, token, open[0]));
    else
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    return node.position.end = point3(token.end), node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", !0);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      let ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10), setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    getData("flowCodeInside") || (this.buffer(), setData("flowCodeInside", !0));
  }
  function onexitcodefenced() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), setData("flowCodeInside");
  }
  function onexitcodeindented() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    let node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      let depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", !0);
  }
  function onexitsetextheadinglinesequence(token) {
    let node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    let parent = this.stack[this.stack.length - 1], tail = parent.children[parent.children.length - 1];
    (!tail || tail.type !== "text") && (tail = text5(), tail.position = {
      start: point3(token.start)
    }, parent.children.push(tail)), this.stack.push(tail);
  }
  function onexitdata(token) {
    let tail = this.stack.pop();
    tail.value += this.sliceSerialize(token), tail.position.end = point3(token.end);
  }
  function onexitlineending(token) {
    let context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      let tail = context.children[context.children.length - 1];
      tail.position.end = point3(token.end), setData("atHardBreak");
      return;
    }
    !getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type) && (onenterdata.call(this, token), onexitdata.call(this, token));
  }
  function onexithardbreak() {
    setData("atHardBreak", !0);
  }
  function onexithtmlflow() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitimage() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitlabeltext(token) {
    let ancestor = this.stack[this.stack.length - 2], string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3), ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    let fragment = this.stack[this.stack.length - 1], value = this.resume(), node = this.stack[this.stack.length - 1];
    setData("inReference", !0), node.type === "link" ? node.children = fragment.children : node.alt = value;
  }
  function onexitresourcedestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase(), setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    let data2 = this.sliceSerialize(token), type = getData("characterReferenceType"), value;
    type ? (value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16), setData("characterReferenceType")) : value = decodeNamedCharacterReference(data2);
    let tail = this.stack.pop();
    tail.value += value, tail.position.end = point3(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html4() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem3(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text5() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  for (; ++index2 < extensions.length; ) {
    let value = extensions[index2];
    Array.isArray(value) ? configure(combined, value) : extension(combined, value);
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2)
    if (own3.call(extension2, key)) {
      let list3 = key === "canContainEols" || key === "transforms", left = (own3.call(combined, key) ? combined[key] : void 0) || (combined[key] = list3 ? [] : {}), right = extension2[key];
      right && (list3 ? combined[key] = [...left, ...right] : Object.assign(left, right));
    }
}
function defaultOnError(left, right) {
  throw left ? new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
    start: left.start,
    end: left.end
  }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
    start: right.start,
    end: right.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
    start: right.start,
    end: right.end
  }) + ") is still open");
}

// node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  Object.assign(this, { Parser: (doc) => {
    let settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  } });
}

// node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// node_modules/react-markdown/node_modules/remark-rehype/index.js
init_react();

// node_modules/react-markdown/node_modules/mdast-util-to-hast/index.js
init_react();

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/traverse.js
init_react();

// node_modules/unist-builder/index.js
init_react();
var u = function(type, props, value) {
  var node = { type: String(type) };
  return value == null && (typeof props == "string" || Array.isArray(props)) ? value = props : Object.assign(node, props), Array.isArray(value) ? node.children = value : value != null && (node.value = String(value)), node;
};

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/traverse.js
var own4 = {}.hasOwnProperty;
function unknown(h, node) {
  let data = node.data || {};
  return "value" in node && !(own4.call(data, "hName") || own4.call(data, "hProperties") || own4.call(data, "hChildren")) ? h.augment(node, u("text", node.value)) : h(node, "div", all2(h, node));
}
function one2(h, node, parent) {
  let type = node && node.type, fn;
  if (!type)
    throw new Error("Expected node, got `" + node + "`");
  return own4.call(h.handlers, type) ? fn = h.handlers[type] : h.passThrough && h.passThrough.includes(type) ? fn = returnNode : fn = h.unknownHandler, (typeof fn == "function" ? fn : unknown)(h, node, parent);
}
function returnNode(h, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all2(h, node) }) : node;
}
function all2(h, parent) {
  let values = [];
  if ("children" in parent) {
    let nodes = parent.children, index2 = -1;
    for (; ++index2 < nodes.length; ) {
      let result = one2(h, nodes[index2], parent);
      if (result) {
        if (index2 && nodes[index2 - 1].type === "break" && (!Array.isArray(result) && result.type === "text" && (result.value = result.value.replace(/^\s+/, "")), !Array.isArray(result) && result.type === "element")) {
          let head = result.children[0];
          head && head.type === "text" && (head.value = head.value.replace(/^\s+/, ""));
        }
        Array.isArray(result) ? values.push(...result) : values.push(result);
      }
    }
  }
  return values;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/index.js
init_react();

// node_modules/unist-util-visit/index.js
init_react();

// node_modules/unist-util-visit-parents/index.js
init_react();

// node_modules/unist-util-is/index.js
init_react();
var convert = function(test) {
  if (test == null)
    return ok;
  if (typeof test == "string")
    return typeFactory(test);
  if (typeof test == "object")
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  if (typeof test == "function")
    return castFactory(test);
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  let checks2 = [], index2 = -1;
  for (; ++index2 < tests.length; )
    checks2[index2] = convert(tests[index2]);
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    for (; ++index3 < checks2.length; )
      if (checks2[index3].call(this, ...parameters))
        return !0;
    return !1;
  }
}
function propsFactory(check) {
  return castFactory(all3);
  function all3(node) {
    let key;
    for (key in check)
      if (node[key] !== check[key])
        return !1;
    return !0;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return !0;
}

// node_modules/unist-util-visit-parents/color.js
init_react();
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/index.js
var CONTINUE = !0, SKIP = "skip", EXIT = !1, visitParents = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null);
  let is = convert(test), step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    let value = typeof node == "object" && node !== null ? node : {}, name;
    return typeof value.type == "string" && (name = typeof value.tagName == "string" ? value.tagName : typeof value.name == "string" ? value.name : void 0, Object.defineProperty(visit2, "name", {
      value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
    })), visit2;
    function visit2() {
      let result = [], subresult, offset, grandparents;
      if ((!test || is(node, index2, parents[parents.length - 1] || null)) && (result = toResult(visitor(node, parents)), result[0] === EXIT))
        return result;
      if (node.children && result[0] !== SKIP)
        for (offset = (reverse ? node.children.length : -1) + step, grandparents = parents.concat(node); offset > -1 && offset < node.children.length; ) {
          if (subresult = factory2(node.children[offset], offset, grandparents)(), subresult[0] === EXIT)
            return subresult;
          offset = typeof subresult[1] == "number" ? subresult[1] : offset + step;
        }
      return result;
    }
  }
};
function toResult(value) {
  return Array.isArray(value) ? value : typeof value == "number" ? [CONTINUE, value] : [value];
}

// node_modules/unist-util-visit/index.js
var visit = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null), visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    let parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/unist-util-position/index.js
init_react();
var pointStart = point2("start"), pointEnd = point2("end");
function point2(type) {
  return point3;
  function point3(node) {
    let point4 = node && node.position && node.position[type] || {};
    return {
      line: point4.line || null,
      column: point4.column || null,
      offset: point4.offset > -1 ? point4.offset : null
    };
  }
}

// node_modules/unist-util-generated/index.js
init_react();
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

// node_modules/mdast-util-definitions/index.js
init_react();
var own5 = {}.hasOwnProperty;
function definitions(node) {
  let cache = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type)
    throw new Error("mdast-util-definitions expected node");
  return visit(node, "definition", (definition3) => {
    let id = clean(definition3.identifier);
    id && !own5.call(cache, id) && (cache[id] = definition3);
  }), definition2;
  function definition2(identifier) {
    let id = clean(identifier);
    return id && own5.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/footer.js
init_react();

// node_modules/micromark-util-sanitize-uri/index.js
init_react();
function normalizeUri(value) {
  let result = [], index2 = -1, start = 0, skip = 0;
  for (; ++index2 < value.length; ) {
    let code3 = value.charCodeAt(index2), replace2 = "";
    if (code3 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2)))
      skip = 2;
    else if (code3 < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code3)) || (replace2 = String.fromCharCode(code3));
    else if (code3 > 55295 && code3 < 57344) {
      let next = value.charCodeAt(index2 + 1);
      code3 < 56320 && next > 56319 && next < 57344 ? (replace2 = String.fromCharCode(code3, next), skip = 1) : replace2 = "\uFFFD";
    } else
      replace2 = String.fromCharCode(code3);
    replace2 && (result.push(value.slice(start, index2), encodeURIComponent(replace2)), start = index2 + skip + 1, replace2 = ""), skip && (index2 += skip, skip = 0);
  }
  return result.join("") + value.slice(start);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/wrap.js
init_react();
function wrap2(nodes, loose) {
  let result = [], index2 = -1;
  for (loose && result.push(u("text", `
`)); ++index2 < nodes.length; )
    index2 && result.push(u("text", `
`)), result.push(nodes[index2]);
  return loose && nodes.length > 0 && result.push(u("text", `
`)), result;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/footer.js
function footer(h) {
  let index2 = -1, listItems = [];
  for (; ++index2 < h.footnoteOrder.length; ) {
    let def = h.footnoteById[h.footnoteOrder[index2].toUpperCase()];
    if (!def)
      continue;
    let content3 = all2(h, def), id = String(def.identifier), safeId = normalizeUri(id.toLowerCase()), referenceIndex = 0, backReferences = [];
    for (; ++referenceIndex <= h.footnoteCounts[id]; ) {
      let backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: h.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      referenceIndex > 1 && backReference.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(referenceIndex) }]
      }), backReferences.length > 0 && backReferences.push({ type: "text", value: " " }), backReferences.push(backReference);
    }
    let tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      let tailTail = tail.children[tail.children.length - 1];
      tailTail && tailTail.type === "text" ? tailTail.value += " " : tail.children.push({ type: "text", value: " " }), tail.children.push(...backReferences);
    } else
      content3.push(...backReferences);
    let listItem3 = {
      type: "element",
      tagName: "li",
      properties: { id: h.clobberPrefix + "fn-" + safeId },
      children: wrap2(content3, !0)
    };
    def.position && (listItem3.position = def.position), listItems.push(listItem3);
  }
  return listItems.length === 0 ? null : {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: !0, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: h.footnoteLabelTagName,
        properties: __spreadProps(__spreadValues({}, JSON.parse(JSON.stringify(h.footnoteLabelProperties))), {
          id: "footnote-label"
        }),
        children: [u("text", h.footnoteLabel)]
      },
      { type: "text", value: `
` },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap2(listItems, !0)
      },
      { type: "text", value: `
` }
    ]
  };
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/index.js
init_react();

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
init_react();
function blockquote(h, node) {
  return h(node, "blockquote", wrap2(all2(h, node), !0));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/break.js
init_react();
function hardBreak(h, node) {
  return [h(node, "br"), u("text", `
`)];
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/code.js
init_react();
function code(h, node) {
  let value = node.value ? node.value + `
` : "", lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/), props = {};
  lang && (props.className = ["language-" + lang]);
  let code3 = h(node, "code", props, [u("text", value)]);
  return node.meta && (code3.data = { meta: node.meta }), h(node.position, "pre", [code3]);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/delete.js
init_react();
function strikethrough(h, node) {
  return h(node, "del", all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
init_react();
function emphasis(h, node) {
  return h(node, "em", all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
init_react();
function footnoteReference(h, node) {
  let id = String(node.identifier), safeId = normalizeUri(id.toLowerCase()), index2 = h.footnoteOrder.indexOf(id), counter;
  index2 === -1 ? (h.footnoteOrder.push(id), h.footnoteCounts[id] = 1, counter = h.footnoteOrder.length) : (h.footnoteCounts[id]++, counter = index2 + 1);
  let reuseCounter = h.footnoteCounts[id];
  return h(node, "sup", [
    h(node.position, "a", {
      href: "#" + h.clobberPrefix + "fn-" + safeId,
      id: h.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: "footnote-label"
    }, [u("text", String(counter))])
  ]);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
init_react();
function footnote(h, node) {
  let footnoteById = h.footnoteById, no = 1;
  for (; no in footnoteById; )
    no++;
  let identifier = String(no);
  return footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  }, footnoteReference(h, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/heading.js
init_react();
function heading(h, node) {
  return h(node, "h" + node.depth, all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/html.js
init_react();
function html(h, node) {
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
init_react();

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/revert.js
init_react();
function revert(h, node) {
  let subtype = node.referenceType, suffix = "]";
  if (subtype === "collapsed" ? suffix += "[]" : subtype === "full" && (suffix += "[" + (node.label || node.identifier) + "]"), node.type === "imageReference")
    return u("text", "![" + node.alt + suffix);
  let contents = all2(h, node), head = contents[0];
  head && head.type === "text" ? head.value = "[" + head.value : contents.unshift(u("text", "["));
  let tail = contents[contents.length - 1];
  return tail && tail.type === "text" ? tail.value += suffix : contents.push(u("text", suffix)), contents;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h, node) {
  let def = h.definition(node.identifier);
  if (!def)
    return revert(h, node);
  let props = { src: normalizeUri(def.url || ""), alt: node.alt };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h(node, "img", props);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/image.js
init_react();
function image(h, node) {
  let props = { src: normalizeUri(node.url), alt: node.alt };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h(node, "img", props);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
init_react();
function inlineCode(h, node) {
  return h(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
init_react();
function linkReference(h, node) {
  let def = h.definition(node.identifier);
  if (!def)
    return revert(h, node);
  let props = { href: normalizeUri(def.url || "") };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h(node, "a", props, all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/link.js
init_react();
function link(h, node) {
  let props = { href: normalizeUri(node.url) };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h(node, "a", props, all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
init_react();
function listItem(h, node, parent) {
  let result = all2(h, node), loose = parent ? listLoose(parent) : listItemLoose(node), props = {}, wrapped = [];
  if (typeof node.checked == "boolean") {
    let paragraph2;
    result[0] && result[0].type === "element" && result[0].tagName === "p" ? paragraph2 = result[0] : (paragraph2 = h(null, "p", []), result.unshift(paragraph2)), paragraph2.children.length > 0 && paragraph2.children.unshift(u("text", " ")), paragraph2.children.unshift(h(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: !0
    })), props.className = ["task-list-item"];
  }
  let index2 = -1;
  for (; ++index2 < result.length; ) {
    let child = result[index2];
    (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") && wrapped.push(u("text", `
`)), child.type === "element" && child.tagName === "p" && !loose ? wrapped.push(...child.children) : wrapped.push(child);
  }
  let tail = result[result.length - 1];
  return tail && (loose || !("tagName" in tail) || tail.tagName !== "p") && wrapped.push(u("text", `
`)), h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread, children = node.children, index2 = -1;
  for (; !loose && ++index2 < children.length; )
    loose = listItemLoose(children[index2]);
  return Boolean(loose);
}
function listItemLoose(node) {
  let spread = node.spread;
  return spread ?? node.children.length > 1;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/list.js
init_react();
function list2(h, node) {
  let props = {}, name = node.ordered ? "ol" : "ul", items = all2(h, node), index2 = -1;
  for (typeof node.start == "number" && node.start !== 1 && (props.start = node.start); ++index2 < items.length; ) {
    let item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h(node, name, props, wrap2(items, !0));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
init_react();
function paragraph(h, node) {
  return h(node, "p", all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/root.js
init_react();
function root(h, node) {
  return h.augment(node, u("root", wrap2(all2(h, node))));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/strong.js
init_react();
function strong(h, node) {
  return h(node, "strong", all2(h, node));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/table.js
init_react();
function table(h, node) {
  let rows = node.children, index2 = -1, align = node.align || [], result = [];
  for (; ++index2 < rows.length; ) {
    let row = rows[index2].children, name = index2 === 0 ? "th" : "td", out = [], cellIndex = -1, length = node.align ? align.length : row.length;
    for (; ++cellIndex < length; ) {
      let cell = row[cellIndex];
      out.push(h(cell, name, { align: align[cellIndex] }, cell ? all2(h, cell) : []));
    }
    result[index2] = h(rows[index2], "tr", wrap2(out, !0));
  }
  return h(node, "table", wrap2([h(result[0].position, "thead", wrap2([result[0]], !0))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap2(result.slice(1), !0)) : []), !0));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/text.js
init_react();

// node_modules/trim-lines/index.js
init_react();
function trimLines(value) {
  let source = String(value), search2 = /\r?\n|\r/g, match = search2.exec(source), last = 0, lines = [];
  for (; match; )
    lines.push(trimLine(source.slice(last, match.index), last > 0, !0), match[0]), last = match.index + match[0].length, match = search2.exec(source);
  return lines.push(trimLine(source.slice(last), last > 0, !1)), lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0, endIndex = value.length;
  if (start) {
    let code3 = value.codePointAt(startIndex);
    for (; code3 === 9 || code3 === 32; )
      startIndex++, code3 = value.codePointAt(startIndex);
  }
  if (end) {
    let code3 = value.codePointAt(endIndex - 1);
    for (; code3 === 9 || code3 === 32; )
      endIndex--, code3 = value.codePointAt(endIndex - 1);
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/text.js
function text3(h, node) {
  return h.augment(node, u("text", trimLines(String(node.value))));
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
init_react();
function thematicBreak2(h, node) {
  return h(node, "hr");
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list: list2,
  paragraph,
  root,
  strong,
  table,
  text: text3,
  thematicBreak: thematicBreak2,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// node_modules/react-markdown/node_modules/mdast-util-to-hast/lib/index.js
var own6 = {}.hasOwnProperty;
function factory(tree, options) {
  let settings = options || {}, dangerous = settings.allowDangerousHtml || !1, footnoteById = {};
  return h.dangerous = dangerous, h.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix, h.footnoteLabel = settings.footnoteLabel || "Footnotes", h.footnoteLabelTagName = settings.footnoteLabelTagName || "h2", h.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ["sr-only"]
  }, h.footnoteBackLabel = settings.footnoteBackLabel || "Back to content", h.definition = definitions(tree), h.footnoteById = footnoteById, h.footnoteOrder = [], h.footnoteCounts = {}, h.augment = augment, h.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers), h.unknownHandler = settings.unknownHandler, h.passThrough = settings.passThrough, visit(tree, "footnoteDefinition", (definition2) => {
    let id = String(definition2.identifier).toUpperCase();
    own6.call(footnoteById, id) || (footnoteById[id] = definition2);
  }), h;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      let data = left.data;
      data.hName && (right.type !== "element" && (right = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), right.tagName = data.hName), right.type === "element" && data.hProperties && (right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties)), "children" in right && right.children && data.hChildren && (right.children = data.hChildren);
    }
    if (left) {
      let ctx = "type" in left ? left : { position: left };
      generated(ctx) || (right.position = { start: pointStart(ctx), end: pointEnd(ctx) });
    }
    return right;
  }
  function h(node, tagName, props, children) {
    return Array.isArray(props) && (children = props, props = {}), augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  let h = factory(tree, options), node = one2(h, tree, null), foot = footer(h);
  return foot && node.children.push(u("text", `
`), foot), Array.isArray(node) ? { type: "root", children: node } : node;
}

// node_modules/react-markdown/node_modules/remark-rehype/lib/index.js
init_react();
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
}, lib_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}

// node_modules/react-markdown/lib/react-markdown.js
var import_prop_types7 = __toESM(require("prop-types"), 1);

// node_modules/property-information/index.js
init_react();

// node_modules/property-information/lib/util/merge.js
init_react();

// node_modules/property-information/lib/util/schema.js
init_react();
var Schema = class {
  constructor(property, normal, space) {
    this.property = property, this.normal = normal, space && (this.space = space);
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// node_modules/property-information/lib/util/merge.js
function merge(definitions2, space) {
  let property = {}, normal = {}, index2 = -1;
  for (; ++index2 < definitions2.length; )
    Object.assign(property, definitions2[index2].property), Object.assign(normal, definitions2[index2].normal);
  return new Schema(property, normal, space);
}

// node_modules/property-information/lib/xlink.js
init_react();

// node_modules/property-information/lib/util/create.js
init_react();

// node_modules/property-information/lib/normalize.js
init_react();
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/property-information/lib/util/defined-info.js
init_react();

// node_modules/property-information/lib/util/info.js
init_react();
var Info = class {
  constructor(property, attribute) {
    this.property = property, this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.boolean = !1;
Info.prototype.booleanish = !1;
Info.prototype.overloadedBoolean = !1;
Info.prototype.number = !1;
Info.prototype.commaSeparated = !1;
Info.prototype.spaceSeparated = !1;
Info.prototype.commaOrSpaceSeparated = !1;
Info.prototype.mustUseProperty = !1;
Info.prototype.defined = !1;

// node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
init_react();
var powers = 0, boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports), DefinedInfo = class extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    if (mark(this, "space", space), typeof mask == "number")
      for (; ++index2 < checks.length; ) {
        let check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
  }
};
DefinedInfo.prototype.defined = !0;
function mark(values, key, value) {
  value && (values[key] = value);
}

// node_modules/property-information/lib/util/create.js
var own7 = {}.hasOwnProperty;
function create(definition2) {
  let property = {}, normal = {}, prop;
  for (prop in definition2.properties)
    if (own7.call(definition2.properties, prop)) {
      let value = definition2.properties[prop], info = new DefinedInfo(prop, definition2.transform(definition2.attributes || {}, prop), value, definition2.space);
      definition2.mustUseProperty && definition2.mustUseProperty.includes(prop) && (info.mustUseProperty = !0), property[prop] = info, normal[normalize(prop)] = prop, normal[normalize(info.attribute)] = prop;
    }
  return new Schema(property, normal, definition2.space);
}

// node_modules/property-information/lib/xlink.js
var xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

// node_modules/property-information/lib/xml.js
init_react();
var xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});

// node_modules/property-information/lib/xmlns.js
init_react();

// node_modules/property-information/lib/util/case-insensitive-transform.js
init_react();

// node_modules/property-information/lib/util/case-sensitive-transform.js
init_react();
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/property-information/lib/xmlns.js
var xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});

// node_modules/property-information/lib/aria.js
init_react();
var aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

// node_modules/property-information/lib/html.js
init_react();
var html2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// node_modules/property-information/lib/svg.js
init_react();
var svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// node_modules/property-information/lib/find.js
init_react();
var valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
function find(schema, value) {
  let normal = normalize(value), prop = value, Type = Info;
  if (normal in schema.normal)
    return schema.property[schema.normal[normal]];
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      let rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      let rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        dashes.charAt(0) !== "-" && (dashes = "-" + dashes), value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/property-information/lib/hast-to-react.js
init_react();
var hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};

// node_modules/property-information/index.js
var html3 = merge([xml, xlink, xmlns, aria, html2], "html"), svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// node_modules/react-markdown/lib/rehype-filter.js
init_react();
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements)
    throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
  if (options.allowedElements || options.disallowedElements || options.allowElement)
    return (tree) => {
      visit(tree, "element", (node, index2, parent_) => {
        let parent = parent_, remove;
        if (options.allowedElements ? remove = !options.allowedElements.includes(node.tagName) : options.disallowedElements && (remove = options.disallowedElements.includes(node.tagName)), !remove && options.allowElement && typeof index2 == "number" && (remove = !options.allowElement(node, index2, parent)), remove && typeof index2 == "number")
          return options.unwrapDisallowed && node.children ? parent.children.splice(index2, 1, ...node.children) : parent.children.splice(index2, 1), index2;
      });
    };
}

// node_modules/react-markdown/lib/ast-to-react.js
init_react();
var import_react12 = __toESM(require("react"), 1), import_react_is = __toESM(require("react-is"), 1);

// node_modules/hast-util-whitespace/index.js
init_react();
function whitespace(thing) {
  var value = thing && typeof thing == "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value == "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

// node_modules/space-separated-tokens/index.js
init_react();
function stringify(values) {
  return values.join(" ").trim();
}

// node_modules/comma-separated-tokens/index.js
init_react();
function stringify2(values, options) {
  var settings = options || {};
  return values[values.length - 1] === "" && (values = values.concat("")), values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === !1 ? "" : " ")).trim();
}

// node_modules/react-markdown/lib/ast-to-react.js
var import_style_to_object = __toESM(require("style-to-object"), 1), own8 = {}.hasOwnProperty, tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  let children = [], childIndex = -1, child;
  for (; ++childIndex < node.children.length; )
    child = node.children[childIndex], child.type === "element" ? children.push(toReact(context, child, childIndex, node)) : child.type === "text" ? (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) && children.push(child.value) : child.type === "raw" && !context.options.skipHtml && children.push(child.value);
  return children;
}
function toReact(context, node, index2, parent) {
  let options = context.options, parentSchema = context.schema, name = node.tagName, properties = {}, schema = parentSchema, property;
  if (parentSchema.space === "html" && name === "svg" && (schema = svg2, context.schema = schema), node.properties)
    for (property in node.properties)
      own8.call(node.properties, property) && addProperty(properties, property, node.properties[property], context);
  (name === "ol" || name === "ul") && context.listDepth++;
  let children = childrenToReact(context, node);
  (name === "ol" || name === "ul") && context.listDepth--, context.schema = parentSchema;
  let position2 = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, component = options.components && own8.call(options.components, name) ? options.components[name] : name, basic = typeof component == "string" || component === import_react12.default.Fragment;
  if (!import_react_is.default.isValidElementType(component))
    throw new TypeError(`Component for name \`${name}\` not defined or is not renderable`);
  if (properties.key = [
    name,
    position2.start.line,
    position2.start.column,
    index2
  ].join("-"), name === "a" && options.linkTarget && (properties.target = typeof options.linkTarget == "function" ? options.linkTarget(String(properties.href || ""), node.children, typeof properties.title == "string" ? properties.title : null) : options.linkTarget), name === "a" && options.transformLinkUri && (properties.href = options.transformLinkUri(String(properties.href || ""), node.children, typeof properties.title == "string" ? properties.title : null)), !basic && name === "code" && parent.type === "element" && parent.tagName !== "pre" && (properties.inline = !0), !basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6") && (properties.level = Number.parseInt(name.charAt(1), 10)), name === "img" && options.transformImageUri && (properties.src = options.transformImageUri(String(properties.src || ""), String(properties.alt || ""), typeof properties.title == "string" ? properties.title : null)), !basic && name === "li" && parent.type === "element") {
    let input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null, properties.index = getElementsBeforeCount(parent, node), properties.ordered = parent.tagName === "ol";
  }
  return !basic && (name === "ol" || name === "ul") && (properties.ordered = name === "ol", properties.depth = context.listDepth), (name === "td" || name === "th") && (properties.align && (properties.style || (properties.style = {}), properties.style.textAlign = properties.align, delete properties.align), basic || (properties.isHeader = name === "th")), !basic && name === "tr" && parent.type === "element" && (properties.isHeader = Boolean(parent.tagName === "thead")), options.sourcePos && (properties["data-sourcepos"] = flattenPosition(position2)), !basic && options.rawSourcePos && (properties.sourcePosition = node.position), !basic && options.includeElementIndex && (properties.index = getElementsBeforeCount(parent, node), properties.siblingCount = getElementsBeforeCount(parent)), basic || (properties.node = node), children.length > 0 ? import_react12.default.createElement(component, properties, children) : import_react12.default.createElement(component, properties);
}
function getInputElement(node) {
  let index2 = -1;
  for (; ++index2 < node.children.length; ) {
    let child = node.children[index2];
    if (child.type === "element" && child.tagName === "input")
      return child;
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index2 = -1, count = 0;
  for (; ++index2 < parent.children.length && parent.children[index2] !== node; )
    parent.children[index2].type === "element" && count++;
  return count;
}
function addProperty(props, prop, value, ctx) {
  let info = find(ctx.schema, prop), result = value;
  result == null || result !== result || (Array.isArray(result) && (result = info.commaSeparated ? stringify2(result) : stringify(result)), info.property === "style" && typeof result == "string" && (result = parseStyle(result)), info.space && info.property ? props[own8.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result : info.attribute && (props[info.attribute] = result));
}
function parseStyle(value) {
  let result = {};
  try {
    (0, import_style_to_object.default)(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v) {
    let k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d) => String(d)).join("");
}

// node_modules/react-markdown/lib/react-markdown.js
var own9 = {}.hasOwnProperty, changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", deprecated = {
  plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (let key in deprecated)
    if (own9.call(deprecated, key) && own9.call(options, key)) {
      let deprecation = deprecated[key];
      console.warn(`[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`), delete deprecated[key];
    }
  let processor = unified().use(remark_parse_default).use(options.remarkPlugins || []).use(lib_default, __spreadProps(__spreadValues({}, options.remarkRehypeOptions), {
    allowDangerousHtml: !0
  })).use(options.rehypePlugins || []).use(rehypeFilter, options), file = new VFile();
  typeof options.children == "string" ? file.value = options.children : options.children !== void 0 && options.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`);
  let hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root")
    throw new TypeError("Expected a `root` node");
  let result = import_react13.default.createElement(import_react13.default.Fragment, {}, childrenToReact({ options, schema: html3, listDepth: 0 }, hastNode));
  return options.className && (result = import_react13.default.createElement("div", { className: options.className }, result)), result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: import_prop_types7.default.string,
  className: import_prop_types7.default.string,
  allowElement: import_prop_types7.default.func,
  allowedElements: import_prop_types7.default.arrayOf(import_prop_types7.default.string),
  disallowedElements: import_prop_types7.default.arrayOf(import_prop_types7.default.string),
  unwrapDisallowed: import_prop_types7.default.bool,
  remarkPlugins: import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([
    import_prop_types7.default.object,
    import_prop_types7.default.func,
    import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([
      import_prop_types7.default.bool,
      import_prop_types7.default.string,
      import_prop_types7.default.object,
      import_prop_types7.default.func,
      import_prop_types7.default.arrayOf(import_prop_types7.default.any)
    ]))
  ])),
  rehypePlugins: import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([
    import_prop_types7.default.object,
    import_prop_types7.default.func,
    import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([
      import_prop_types7.default.bool,
      import_prop_types7.default.string,
      import_prop_types7.default.object,
      import_prop_types7.default.func,
      import_prop_types7.default.arrayOf(import_prop_types7.default.any)
    ]))
  ])),
  sourcePos: import_prop_types7.default.bool,
  rawSourcePos: import_prop_types7.default.bool,
  skipHtml: import_prop_types7.default.bool,
  includeElementIndex: import_prop_types7.default.bool,
  transformLinkUri: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.bool]),
  linkTarget: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.string]),
  transformImageUri: import_prop_types7.default.func,
  components: import_prop_types7.default.object
};

// app/components/SearchBarDropdown/SearchBarDropdown.Styled.jsx
var Dropdown2 = import_styled_components10.default.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(225, 229, 233, 0.8);
  min-height: 5px;
  top: 100%;
  margin-top: 5px;
  width: 150%;
  position: absolute;
  padding: 15px;
  z-index: 999;
  font-size: 12px;
  @media (max-width: 768px) {
    width: 110%;
  }
`, Alert = import_styled_components10.default.span`
  color: var(--color-dark-25);
`, DropdownQuestion = import_styled_components10.default.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
`, DepartmentLabel = import_styled_components10.default.div`
  border: 2px solid var(--color-secondary);
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  height: fit-content;
  padding: 5px;
  border-radius: 20px;
  min-width: 110px;
  font-weight: 600;
  color: var(--color-secondary);
`, QuestionMarkdown = (0, import_styled_components10.default)(ReactMarkdown)`
  overflow-wrap: anywhere;
  width: 100%;
  margin-left: 10px;
  font-size: 12px;
`, TitleContainer = import_styled_components10.default.span`
  color: #bbbbbb;
  display: flex;
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 10px;
`, ButtonShowMore = (0, import_styled_components10.default)(Button_default)`
  color: #bbbbbb;
  font-size: 12px;
`;

// app/utils/stringOperations.js
init_react();
var import_xss = __toESM(require("xss"));
function deleteNoMarkupFormatHTML(content3) {
  let token = "`", options = {
    whiteList: [],
    stripIgnoreTag: !0,
    stripIgnoreTagBody: ["script"],
    escapeHtml: (html4) => html4
  }, splitContent = content3.split(token), contentLength = splitContent.length, finalContent = "";
  for (let i = 1; i < contentLength; i += 2)
    finalContent += (0, import_xss.default)(splitContent[i - 1], options), finalContent += token + splitContent[i] + token;
  return contentLength % 2 === 1 && (finalContent += (0, import_xss.default)(splitContent[contentLength - 1], options)), finalContent;
}
function addS(text5, num) {
  return num === 1 ? text5 : `${text5}s`;
}
var showCollapseOrExpandMessage = (isCollapsed) => isCollapsed ? SHOW_MORE_TEXT : SHOW_LESS_TEXT, formatCollapsingText = (text5, shouldCollapse, isCollapsed, minLength) => {
  if (shouldCollapse && isCollapsed) {
    let indexOfLastSpace = text5.lastIndexOf(" ", minLength);
    return `${text5.substring(0, indexOfLastSpace).trim()}...`;
  }
  return text5;
};

// app/utils/markdownFormatQuestions.js
init_react();
var import_react16 = __toESM(require("react")), import_server2 = require("react-dom/server");

// app/components/SearchedLinkRenderer/index.js
init_react();

// app/components/SearchedLinkRenderer/SearchedLinkRenderer.jsx
init_react();
var import_react15 = __toESM(require("react")), import_prop_types9 = __toESM(require("prop-types"));

// app/components/MarkdownLinkRenderer/index.js
init_react();

// app/components/MarkdownLinkRenderer/MarkdownLinkRenderer.jsx
init_react();
var import_react14 = __toESM(require("react")), import_prop_types8 = __toESM(require("prop-types")), propTypes = {
  href: import_prop_types8.default.string.isRequired,
  children: import_prop_types8.default.node.isRequired
}, buildLinkAttributes = (href) => {
  let target = "_blank", rel = "nofollow noopener noreferrer";
  return href.startsWith("/") && (target = "_self", rel = ""), { target, rel };
};
function MarkdownLinkRenderer({ href, children }) {
  let { target, rel } = buildLinkAttributes(href);
  return /* @__PURE__ */ import_react14.default.createElement("a", {
    href,
    target,
    rel
  }, children);
}
MarkdownLinkRenderer.propTypes = propTypes;
var MarkdownLinkRenderer_default = MarkdownLinkRenderer;

// app/components/SearchedLinkRenderer/SearchedLinkRenderer.jsx
var propTypes2 = {
  href: import_prop_types9.default.string.isRequired,
  children: import_prop_types9.default.node.isRequired
};
function SearchedLinkRenderer({ href, children }) {
  let cleanedUrl = href.replace(new RegExp(HIGHLIGHT_START, "g"), "");
  return cleanedUrl = cleanedUrl.replace(new RegExp(HIGHLIGHT_END, "g"), ""), /* @__PURE__ */ import_react15.default.createElement(MarkdownLinkRenderer_default, {
    href: cleanedUrl
  }, children);
}
SearchedLinkRenderer.propTypes = propTypes2;
var SearchedLinkRenderer_default = SearchedLinkRenderer;

// app/utils/markdownFormatQuestions.js
var addTagsToText = (srcText) => srcText.replace(/(#[a-z\d]+)/ig, (x) => ` [${x}](/?tag=${x.slice(1)})`), removeQuestionLinksInsideCode = (srcText) => srcText.replace(/`.*?`/g, (x) => x.replace(/\[(Q\d+)\]\(\/\?questionId=\d+\)/g, "$1")), addQuestionsToText = (srcText) => removeQuestionLinksInsideCode(srcText.replace(/\b(?!`)\b(Q[0-9]+)\b(?!`)/g, (x) => `[${x}](/?questionId=${x.slice(1)})`)), highlightText = (srcText, searchTerm) => {
  let searchRegExp = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), formattedText = srcText.replace(searchRegExp, (text5) => HIGHLIGHT_START + text5 + HIGHLIGHT_END);
  return formattedText = (0, import_server2.renderToStaticMarkup)(/* @__PURE__ */ import_react16.default.createElement(ReactMarkdown, {
    source: formattedText,
    escapeHtml: !1,
    renderers: {
      link: SearchedLinkRenderer_default
    }
  })), formattedText = formattedText.replace(new RegExp(HIGHLIGHT_START, "g"), "<highlight>"), formattedText = formattedText.replace(new RegExp(HIGHLIGHT_END, "g"), "</highlight>"), formattedText;
}, markdownFormat = (srcText, searchTerm) => {
  let formattedText = addTagsToText(srcText);
  return searchTerm && (formattedText = highlightText(formattedText, searchTerm)), formattedText;
}, markdownFormatQuestion = (srcText, searchTerm) => {
  let formattedText = addQuestionsToText(srcText);
  return markdownFormat(formattedText, searchTerm);
}, markdownFormatQuestions_default = markdownFormatQuestion;

// app/components/SearchBarDropdown/SearchBarDropdown.jsx
function SearchBarDropdown({ searchTerm, questions, onQuestionClick }) {
  let renderNoResultMessage = () => searchTerm ? "Oops! There are no results for your search" : "Find something...";
  return /* @__PURE__ */ import_react17.default.createElement(Dropdown2, null, questions.length === 0 ? /* @__PURE__ */ import_react17.default.createElement(Alert, null, renderNoResultMessage()) : /* @__PURE__ */ import_react17.default.createElement("div", null, /* @__PURE__ */ import_react17.default.createElement(TitleContainer, null, "Questions"), questions.map((question) => /* @__PURE__ */ import_react17.default.createElement(DropdownQuestion, {
    key: question.question_id,
    onClick: () => onQuestionClick(question.question_id)
  }, /* @__PURE__ */ import_react17.default.createElement(DepartmentLabel, null, question.Department ? question.Department.name : "Not Assigned"), /* @__PURE__ */ import_react17.default.createElement(QuestionMarkdown, {
    children: formatCollapsingText(markdownFormat(question.question), question.question.length > COLLAPSED_QUESTION_MIN_LENGTH, !0, COLLAPSED_QUESTION_MIN_LENGTH)
  })))));
}
var SearchBarDropdown_default = SearchBarDropdown;
SearchBarDropdown.propTypes = {
  searchTerm: import_prop_types10.default.string.isRequired,
  questions: import_prop_types10.default.arrayOf(import_prop_types10.default.shape()).isRequired,
  onQuestionClick: import_prop_types10.default.func.isRequired
};

// app/components/SearchBarNav/SearchBarNav.jsx
function SearchBarNav() {
  let [searchTerm, setSearchTerm] = (0, import_react18.useState)(""), { state: showDropdown, setState: setShowDropdown, wrapperRef } = useClickOutside_default(), [found, setFound] = (0, import_react18.useState)([]), navigate = (0, import_react19.useNavigate)(), fetcher = (0, import_react19.useFetcher)();
  (0, import_react18.useEffect)(() => {
    fetcher.data && fetcher.data.searchResults !== void 0 && setFound(fetcher.data.searchResults);
  }, [fetcher.data]);
  let sendQuery = (value) => {
    fetcher.load(`/?search=${value}`);
  }, delayedQuery = (0, import_react18.useCallback)((0, import_lodash.debounce)((value) => sendQuery(value), 400), []), onChange = (e) => {
    setSearchTerm(e.target.value), delayedQuery(e.target.value);
  }, onClear = () => {
    setSearchTerm("");
  };
  return /* @__PURE__ */ import_react18.default.createElement(SearchField, {
    ref: wrapperRef
  }, /* @__PURE__ */ import_react18.default.createElement(IconWrapper2, null, /* @__PURE__ */ import_react18.default.createElement(SearchIcon2, null)), /* @__PURE__ */ import_react18.default.createElement(Input, {
    type: "search",
    value: searchTerm,
    onChange,
    onFocus: () => setShowDropdown(!0),
    placeholder: "Search for\u2026"
  }), searchTerm && /* @__PURE__ */ import_react18.default.createElement(Button_default, {
    type: "button",
    className: "clear-button",
    title: "Clear",
    category: ICON_BUTTON,
    onClick: onClear
  }, /* @__PURE__ */ import_react18.default.createElement(ClearIcon, null)), showDropdown && /* @__PURE__ */ import_react18.default.createElement(SearchBarDropdown_default, {
    searchTerm,
    questions: found,
    onQuestionClick: (questionId) => {
      onClear(), setShowDropdown(!1), navigate(`/questions/${questionId}`);
    }
  }));
}
var SearchBarNav_default = SearchBarNav;

// app/components/UserControls/UserControls.jsx
function UserControls(props) {
  let [showLogoutModal, setShowLogoutModal] = (0, import_react20.useState)(!1), handleLogoutClick = () => {
    setShowLogoutModal(!0);
  }, handleCancelLogoutClick = () => {
    setShowLogoutModal(!1);
  }, {
    name,
    title,
    email,
    picture,
    isAdmin
  } = props;
  return /* @__PURE__ */ import_react20.default.createElement(NavBar, {
    pullRight: !0
  }, /* @__PURE__ */ import_react20.default.createElement(SearchBarNavContainer2, null, /* @__PURE__ */ import_react20.default.createElement(SearchBarNav_default, null)), /* @__PURE__ */ import_react20.default.createElement(import_react_router_bootstrap.LinkContainer, {
    to: "/",
    exact: "true"
  }, /* @__PURE__ */ import_react20.default.createElement(Navitem, null, "Home")), /* @__PURE__ */ import_react20.default.createElement(import_react_router_bootstrap.LinkContainer, {
    to: "/about"
  }, /* @__PURE__ */ import_react20.default.createElement(Navitem, {
    eventKey: 1
  }, "About")), /* @__PURE__ */ import_react20.default.createElement(import_react_router_bootstrap.LinkContainer, {
    to: "/contact"
  }, /* @__PURE__ */ import_react20.default.createElement(Navitem, null, "Contact")), isAdmin && /* @__PURE__ */ import_react20.default.createElement(import_react_router_bootstrap.LinkContainer, {
    to: "/admin"
  }, /* @__PURE__ */ import_react20.default.createElement(Navitem, null, "Admin")), isAdmin && /* @__PURE__ */ import_react20.default.createElement(import_react_router_bootstrap.LinkContainer, {
    to: "/dashboard"
  }, /* @__PURE__ */ import_react20.default.createElement(Navitem, null, "Dashboard")), /* @__PURE__ */ import_react20.default.createElement(NavLi, null, /* @__PURE__ */ import_react20.default.createElement(import_react_bootstrap4.ButtonToolbar, null, /* @__PURE__ */ import_react20.default.createElement(UserDropdown, {
    name,
    title,
    email,
    picture,
    onLogoutClick: handleLogoutClick
  }))), /* @__PURE__ */ import_react20.default.createElement(XSNavItem, {
    eventKey: 2,
    onClick: handleLogoutClick
  }, "Logout"), /* @__PURE__ */ import_react20.default.createElement(LogoutConfirmationModal_default, {
    show: showLogoutModal,
    onClose: handleCancelLogoutClick
  }));
}
UserControls.propTypes = {
  name: import_prop_types11.default.string,
  title: import_prop_types11.default.string,
  email: import_prop_types11.default.string.isRequired,
  picture: import_prop_types11.default.string.isRequired,
  isAdmin: import_prop_types11.default.bool
};
UserControls.defaultProps = {
  title: "",
  name: "",
  isAdmin: !1
};
var UserControls_default = UserControls;

// app/components/AppNavbar/AppNavbar.jsx
function AppNavbar() {
  let [expanded, setExpanded] = (0, import_react21.useState)(!1), [open, setOpen] = (0, import_react21.useState)(!1), toggle = () => {
    setExpanded(!expanded);
  }, complexOnSelect = (eventKey) => {
    setExpanded(eventKey === 2);
  }, profile = useUser_default();
  if (!!profile)
    return /* @__PURE__ */ import_react21.default.createElement(AppNav, {
      onSelect: complexOnSelect,
      expanded,
      onToggle: toggle
    }, /* @__PURE__ */ import_react21.default.createElement(import_react_bootstrap5.Navbar.Header, null, /* @__PURE__ */ import_react21.default.createElement(import_react_bootstrap5.Navbar.Brand, null, /* @__PURE__ */ import_react21.default.createElement(import_react22.Link, {
      to: "/"
    }, /* @__PURE__ */ import_react21.default.createElement("img", {
      src: logo_white_default,
      alt: "logo",
      className: "App-logo"
    }))), /* @__PURE__ */ import_react21.default.createElement(import_react_bootstrap5.Navbar.Toggle, null), /* @__PURE__ */ import_react21.default.createElement(ButtonBootstrap, {
      onClick: () => setOpen(!open),
      "aria-controls": "example-collapse-text",
      "aria-expanded": open
    }, /* @__PURE__ */ import_react21.default.createElement(IconWrapper, null, /* @__PURE__ */ import_react21.default.createElement(SearchIcon, null)))), /* @__PURE__ */ import_react21.default.createElement(import_react_bootstrap5.Navbar.Collapse, {
      id: "user-controls"
    }, /* @__PURE__ */ import_react21.default.createElement(UserControls_default, {
      name: profile.full_name,
      title: profile.job_title,
      email: profile.email,
      picture: profile.profile_picture,
      isAdmin: profile.is_admin
    })), /* @__PURE__ */ import_react21.default.createElement(SearchBarNavContainer, null, /* @__PURE__ */ import_react21.default.createElement(import_react_bootstrap5.Navbar.Collapse, {
      in: open,
      id: "example-collapse-text",
      style: { width: "100%", padding: "10px", overflow: "visible" }
    }, /* @__PURE__ */ import_react21.default.createElement(SearchBarNav_default, null))));
}
var AppNavbar_default = AppNavbar;

// app/controllers/questions/list.js
init_react();
var import_constants9 = __toESM(require_constants()), import_filterConstants = __toESM(require_filterConstants());

// app/utils/backend/dateUtils.js
init_react();
var createDateRange = (startDate, months2) => {
  let startDateCopy = new Date(startDate), newDate = new Date(startDateCopy.setMonth(startDate.getMonth() + months2)), initialDate = months2 < 0 ? newDate : startDate, lastDate = months2 < 0 ? startDate : newDate;
  return {
    initialDate,
    lastDate: new Date(lastDate.setDate(lastDate.getDate() + 1))
  };
}, dateUtils_default = createDateRange;

// app/utils/db.server.js
init_react();
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/controllers/questions/list.js
var getOrderBy = (order2) => {
  let orderListBy = {
    oldest: [
      {
        is_pinned: "desc"
      },
      {
        question_id: "asc"
      }
    ],
    newest: [
      {
        is_pinned: "desc"
      },
      {
        question_id: "desc"
      }
    ],
    most_commented: [
      {
        is_pinned: "desc"
      },
      {
        Comments: {
          _count: "desc"
        }
      }
    ]
  };
  return orderListBy[order2] || orderListBy.newest;
}, buildWhereStatus = (status) => {
  let filter = {};
  switch (status) {
    case "answered":
      filter = {
        Answers: {
          some: {}
        }
      };
      break;
    case "not_answered":
      filter = {
        Answers: {
          none: {}
        }
      };
      break;
    default:
      break;
  }
  return filter;
}, buildWhereCommentStatus = (commentStatus) => {
  let filter = {};
  switch (commentStatus) {
    case "approved":
      filter = {
        Comments: {
          some: {
            approvedBy: {
              not: null
            }
          }
        }
      };
      break;
    case "not_approved":
      filter = {
        OR: [
          {
            Comments: {
              some: {
                approvedBy: null
              }
            }
          },
          {
            Comments: {
              none: {}
            }
          }
        ]
      };
      break;
    default:
      break;
  }
  return filter;
}, buildWhereCommentVote = (commentVote) => {
  let filter = {};
  switch (commentVote) {
    case "approved":
      filter = {
        Comments: {
          some: {
            CommentVote: {
              some: {
                value: {
                  gte: 10
                }
              }
            }
          }
        }
      };
      break;
    case "not_approved":
      filter = {
        Comments: {
          none: {
            CommentVote: {
              some: {
                value: {
                  gte: 10
                }
              }
            }
          }
        }
      };
      break;
    default:
      break;
  }
  return filter;
}, buildWhereLocation = (location) => location ? {
  location
} : {}, buildWhereDepartment = (department) => department === void 0 || department === import_filterConstants.ALL_DEPARTMENTS ? {} : department === import_filterConstants.NOT_ASSIGNED_DEPARTMENT_ID ? {
  assigned_department: null
} : { assigned_department: department }, buildWhereDateRange = (dateRange) => dateRange && dateRange.startDate && dateRange.endDate ? {
  createdAt: {
    lte: new Date(dateRange.endDate),
    gte: new Date(dateRange.startDate)
  }
} : {}, buildWhereSearch = (search2) => search2 ? {
  OR: [
    {
      question: {
        contains: search2
      }
    },
    {
      Answers: {
        some: {
          answer_text: {
            contains: search2
          }
        }
      }
    }
  ]
} : {}, buildWhereLastXMonths = (numMonths, dateRange, search2) => {
  if (typeof numMonths == "number" && !dateRange && !search2) {
    let { initialDate, lastDate } = dateUtils_default(new Date(), numMonths);
    return {
      OR: [
        {
          createdAt: {
            lte: new Date(lastDate),
            gte: new Date(initialDate)
          }
        },
        {
          is_pinned: !0
        }
      ]
    };
  }
  return {};
}, buildWhereIsAdminSearch = (isAdmin) => isAdmin ? {} : { is_enabled: !0 }, buildWhere = ({
  status,
  commentStatus,
  commentVote,
  search: search2,
  location,
  department,
  dateRange,
  isAdmin
}) => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, buildWhereStatus(status)), buildWhereCommentStatus(commentStatus)), buildWhereCommentVote(commentVote)), buildWhereLocation(location)), buildWhereDepartment(department)), buildWhereDateRange(dateRange)), buildWhereSearch(search2)), buildWhereLastXMonths(import_constants9.DEFAULT_MONTHS, dateRange, search2)), buildWhereIsAdminSearch(isAdmin)), sortQuestions = (sortType, questions) => {
  let _sortQuestions;
  switch (sortType) {
    case "popular":
      _sortQuestions = questions.sort((a, b) => a.numVotes > b.numVotes ? -1 : a.numVotes < b.numVotes ? 1 : 0);
      break;
    case "unpopular":
      _sortQuestions = questions.sort((a, b) => a.numVotes > b.numVotes ? 1 : a.numVotes < b.numVotes ? -1 : 0);
      break;
    default:
      _sortQuestions = [...questions];
      break;
  }
  return _sortQuestions.sort((a, b) => a.is_pinned && !b.is_pinned ? -1 : !a.is_pinned && b.is_pinned ? 1 : 0);
}, listQuestions = async (params) => {
  let {
    limit,
    offset,
    orderBy,
    status,
    commentStatus,
    commentVote,
    location,
    department,
    dateRange,
    search: search2,
    user
  } = params, fetchedQuestions = await db.Questions.findMany({
    where: buildWhere({
      status,
      commentStatus,
      commentVote,
      location,
      department,
      dateRange,
      search: search2,
      isAdmin: user ? user.is_admin : !1
    }),
    take: limit || import_constants9.DEFAULT_LIMIT,
    skip: offset || import_constants9.DEFAULT_OFFSET,
    orderBy: getOrderBy(orderBy),
    include: {
      _count: {
        select: {
          Comments: !0,
          Votes: !0
        }
      },
      Votes: !0,
      Answers: {
        include: {
          Nps: !0,
          AnsweredBy: !0
        }
      },
      Comments: {
        include: {
          CommentVote: !0,
          Approver: !0,
          User: !0
        }
      },
      created_by: !0,
      assigned_to: { select: { full_name: !0 } },
      Department: !0
    }
  }), hasUserData = user && user.id, questions = fetchedQuestions.map((question) => {
    let hasAnswer = question.Answers.length > 0, can_edit, numLikes = question.Votes.filter((vote) => {
      if (vote.is_upvote || vote.is_upvote === null)
        return __spreadValues({}, vote);
    }).length, numDisklike = question.Votes.filter((vote) => {
      if (!vote.is_upvote && vote.is_upvote !== null)
        return __spreadValues({}, vote);
    }).length, hasLike = (hasUserData && question.Votes.some((vote) => (vote.is_upvote || vote.is_upvote === null) && vote.user === user.id)) ?? !1, hasDislike = (hasUserData && question.Votes.some((vote) => !vote.is_upvote && vote.is_upvote !== null && vote.user === user.id)) ?? !1;
    question.created_by && (can_edit = user && user.email && user.email === question.created_by.email);
    let hasCommentApproved = question.Comments.some((comment) => comment.approvedBy !== null), CommentsComplete = question.Comments.map((comment) => {
      let value = comment.CommentVote.reduce((prev, current) => prev + current.value, 0);
      return __spreadProps(__spreadValues({}, comment), {
        votes: value
      });
    }), hasCommunityAnswer = CommentsComplete.some((comment) => comment.votes >= import_constants9.COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD);
    return delete question.Comments, __spreadProps(__spreadValues({}, question), {
      hasVoted: (hasUserData && question.Votes.some((vote) => vote.user === user.id)) ?? !1,
      hasScored: (hasUserData && hasAnswer && question.Answers[0].Nps.some((nps) => nps.user === user.id)) ?? !1,
      numComments: question._count.Comments,
      numVotes: numLikes - numDisklike,
      can_edit,
      hasCommentApproved,
      hasCommunityAnswer,
      Comments: CommentsComplete,
      numLikes,
      numDisklike,
      hasLike,
      hasDislike
    });
  });
  return questions = sortQuestions(orderBy, questions), questions;
}, list_default = listQuestions;

// app/root.jsx
var titleSuffix = " - Local", meta = () => ({
  charset: "utf-8",
  title: `Wizeline Questions${titleSuffix}`,
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [
    { rel: "stylesheet", href: bootstrap_min_default },
    { rel: "stylesheet", href: ReactToastify_default },
    { rel: "stylesheet", href: Draft_default },
    { rel: "stylesheet", href: react_draft_wysiwyg_default },
    { rel: "stylesheet", href: global_default }
  ];
}
var loader = async ({ request }) => {
  let profile = await getAuthenticatedUser(request), session = await getSession(request), search2 = new URL(request.url).searchParams.get("search"), searchResults = [];
  search2 && (searchResults = await list_default({
    user: profile,
    limit: 5,
    search: search2
  }));
  let globalSuccess = session.get("globalSuccess") || null;
  return (0, import_node2.json)({
    profile,
    globalSuccess,
    searchResults
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function App() {
  return /* @__PURE__ */ import_react23.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react23.default.createElement("head", null, /* @__PURE__ */ import_react23.default.createElement(import_react24.Meta, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.Links, null), typeof document > "u" ? "__STYLES__" : null), /* @__PURE__ */ import_react23.default.createElement("body", null, /* @__PURE__ */ import_react23.default.createElement(AppNavbar_default, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.Outlet, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.ScrollRestoration, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.Scripts, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ import_react23.default.createElement("html", {
    lang: "es"
  }, /* @__PURE__ */ import_react23.default.createElement("head", null, /* @__PURE__ */ import_react23.default.createElement("title", null, "Oh no!"), /* @__PURE__ */ import_react23.default.createElement(import_react24.Meta, null), /* @__PURE__ */ import_react23.default.createElement(import_react24.Links, null)), /* @__PURE__ */ import_react23.default.createElement("body", null, /* @__PURE__ */ import_react23.default.createElement(ErrorHandler_default, {
    error
  }), /* @__PURE__ */ import_react23.default.createElement(import_react24.Scripts, null)));
}

// app/routes/employees/getByDeparment/$id.js
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader2
});
init_react();

// app/controllers/employees/list.js
init_react();
var listEmployees = async (id) => {
  let idValue = parseInt(id, 10);
  return (await db.EmployeesDepartments.findMany({
    where: {
      department_id: idValue
    },
    distinct: ["email"],
    include: {
      users: !0
    }
  })).map((rel) => ({ name: rel.users.full_name, id: rel.employee_id }));
}, list_default2 = listEmployees;

// app/routes/employees/getByDeparment/$id.js
var loader2 = async (data) => {
  let { params } = data;
  return params.id === -1 || params.id === "undefined" ? [] : await list_default2(params.id);
}, id_default = loader2;

// app/routes/questions/$questionId.jsx
var questionId_exports = {};
__export(questionId_exports, {
  action: () => action,
  default: () => questionId_default,
  loader: () => loader3
});
init_react();
var import_react67 = __toESM(require("react")), import_react68 = require("@remix-run/react"), import_md3 = require("react-icons/md"), import_bs4 = require("react-icons/bs"), import_react_router_dom2 = require("react-router-dom"), import_node3 = require("@remix-run/node");

// app/styles/QuestionDetails.Styled.jsx
init_react();
var import_styled_components11 = __toESM(require("styled-components")), Container2 = import_styled_components11.default.div`
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
`, BackToHomeQuestion = import_styled_components11.default.div`
flex: 1;

    @media (max-width: 1025px) {
        padding: 20px 0; 
    }

    button {
        padding: 0 24px;
        color: var(--color-secondary);
        font-weight: bolder;
    }
`, QuestionDetail = import_styled_components11.default.div`
flex: 2;
height: 100%;
width: 100%;
`, RecommendationsContainer = import_styled_components11.default.div`
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 25px 0 20px;
  }
`, QuestionRecommendations = import_styled_components11.default.div`
flex: 1;

    @media (max-width: 1025px){
        display:none;
    }
`, Recommendations = import_styled_components11.default.div`
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

// app/components/QuestionDetail/index.js
init_react();

// app/components/QuestionDetail/QuestionDetail.jsx
init_react();
var import_react61 = __toESM(require("react")), import_react62 = require("@remix-run/react"), import_react_router_dom = require("react-router-dom"), import_prop_types38 = __toESM(require("prop-types"));

// app/images/ic_like.svg
var ic_like_default = "/build/_assets/ic_like-NMKT3SD2.svg";

// app/images/ic_like_pressed.svg
var ic_like_pressed_default = "/build/_assets/ic_like_pressed-XXP725X2.svg";

// app/images/ic_dislike.svg
var ic_dislike_default = "/build/_assets/ic_dislike-SKUS46A3.svg";

// app/images/ic_dislike_pressed.svg
var ic_dislike_pressed_default = "/build/_assets/ic_dislike_pressed-2IDCQ6K4.svg";

// app/utils/questionUtils.js
init_react();
var import_react31 = __toESM(require("react"));

// app/components/AnswerRow/index.js
init_react();

// app/components/AnswerRow/AnswerRow.jsx
init_react();
var import_react29 = __toESM(require("react")), import_prop_types15 = __toESM(require("prop-types"));

// app/utils/timeOperations.js
init_react();
var import_moment2 = __toESM(require("moment"));

// app/utils/dateFormat.js
init_react();
var import_moment = __toESM(require("moment"));
function getFormattedDate(date) {
  return (0, import_moment.default)(date).format("DD/MMM/YYYY");
}
var dateFormat_default = getFormattedDate;

// app/utils/timeOperations.js
function getTimeDiff(time) {
  return (0, import_moment2.default)(time).fromNow();
}
function getDateData(time) {
  return import_moment2.default.duration((0, import_moment2.default)().diff(time)).years() > 0 ? dateFormat_default(time) : getTimeDiff(time);
}

// app/components/AnswerRow/AnswerRow.Styled.jsx
init_react();
var import_styled_components13 = __toESM(require("styled-components"));

// app/components/QuestionResponderInfo/QuestionResponderInfo.Styled.jsx
init_react();
var import_styled_components12 = __toESM(require("styled-components")), import_bs = require("react-icons/bs"), QuestionerResponderContainer = import_styled_components12.default.div`
  align-items: flex-start;
  color: var(--color-dark-50);
  display: inline-flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => !props.hasJobTitle && import_styled_components12.css`
    align-items: center;
  `}
`, QuestionResponderWrapper = import_styled_components12.default.div`
  display: flex;
  align-items: center;
  width: max-content;
`, QuestionerResponderInfoContainer = import_styled_components12.default.div`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`, QuestionerResponderName = import_styled_components12.default.span`
  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: -3px;
`, QuestionerResponderJobTitle = import_styled_components12.default.span`
  margin-top: 4px;
  font-size: 12px;
`, QuestionerResponderCircumstance = import_styled_components12.default.span`
  letter-spacing: 0.7px;
  margin-top: 8px;
`, TopContainer = import_styled_components12.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`, CircleIcon = (0, import_styled_components12.default)(import_bs.BsFillCircleFill)`
    font-size: 5px;
    color: var(--color-dark-metadata);
    margin: 0 5px;
`, DateContainer = import_styled_components12.default.div`
  display: flex;
  align-items: center;
  width: max-content;

  ${(props) => props.hasJobTitle && import_styled_components12.css`
        margin-top: 3px;
  `};

  @media screen and (max-width: 480px) {
    ${(props) => props.isComment && import_styled_components12.css`
      margin-left: 40px;
      margin-top: -13px;
    `};

    ${(props) => props.isComment && props.hasJobTitle && import_styled_components12.css`
        margin-top: -5px;
    `};
  }
`;

// app/components/AnswerRow/AnswerRow.Styled.jsx
var AnswerRow = import_styled_components13.default.div` 
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 1.71;
  width: 100%;
`, AnswerMarkdown = (0, import_styled_components13.default)(ReactMarkdown)`
  color: var(--color-dark-50);
  overflow-wrap: break-word;
  p {
    color: var(--color-dark-50);
    overflow-wrap: break-word;
    @media screen and (max-width: 480px) {
      margin-bottom: 0
    }
  }
  a {
    color: var(--color-secondary);
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0
  }
`, AnswerContainer = import_styled_components13.default.div`
  width: 100%;
  background-color: #EDF5FF;
  border-radius: 0px 0px 15px 15px;
  padding: 15px 20px 10px;

  @media screen and (max-width: 480px) {
    padding: 15px 12px 10px;
  }
`, AnsweredBy = import_styled_components13.default.div`
  color: var(--color-secondary);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: ${(props) => props.isPreview ? "14px" : "4px"};
`, AnsweredMetadata = import_styled_components13.default.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 17px;
  position: relative;
  width: 100%;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`, AnsweredRightContainer = import_styled_components13.default.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`, AnsweredMetadataLeft = import_styled_components13.default.div`
    display: flex;
    align-items: flex-start;
    width: 100%;

    ${(props) => !props.hasJobTitle && import_styled_components13.css`
      align-items: center;

      @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
      }
    `}

    @media screen and (max-width: 480px) {
      flex-direction: column;

      ${QuestionerResponderContainer} {
        margin-bottom: 5px;
      }
    }
`, AnswerRowDate = import_styled_components13.default.div`
  color: var(--color-dark-metadata);
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  align-items: end;
  letter-spacing: 0.7px;
  margin-right: 8px;
`, AnswerRowBorderBottom = import_styled_components13.default.div`
  margin-top: 8px;
  width: 100%;
`;

// app/components/Atoms/ConditionalLinkTo/index.js
init_react();

// app/components/Atoms/ConditionalLinkTo/ConditionalLinkTo.jsx
init_react();
var import_react25 = __toESM(require("react")), import_react26 = require("@remix-run/react"), import_prop_types12 = __toESM(require("prop-types"));
function ConditionalLinkTo({ children, to, condition }) {
  return condition ? /* @__PURE__ */ import_react25.default.createElement(import_react26.Link, {
    style: { textDecoration: "none" },
    to
  }, children) : /* @__PURE__ */ import_react25.default.createElement("div", null, children);
}
ConditionalLinkTo.propTypes = {
  children: import_prop_types12.default.node.isRequired,
  to: import_prop_types12.default.string.isRequired,
  condition: import_prop_types12.default.bool.isRequired
};
var ConditionalLinkTo_default = ConditionalLinkTo;

// app/components/QuestionResponderInfo/index.js
init_react();

// app/components/QuestionResponderInfo/QuestionResponder.jsx
init_react();
var import_react27 = __toESM(require("react")), import_prop_types13 = __toESM(require("prop-types"));
function QuestionerResponderInfo(props) {
  let renderName = (createdBy2) => createdBy2 && createdBy2.full_name ? createdBy2.full_name : ANONYMOUS_USER.username, renderProfilePicture = (createdBy2) => createdBy2 && createdBy2.profile_picture ? createdBy2.profile_picture : ANONYMOUS_USER.profilePicture, renderJobTitle = (createdBy2) => createdBy2 && createdBy2.is_admin && createdBy2.job_title ? createdBy2.job_title : "", { children, createdBy } = props, fullName = renderName(createdBy), jobTitle = renderJobTitle(createdBy), profilePicture = renderProfilePicture(createdBy);
  return /* @__PURE__ */ import_react27.default.createElement(QuestionerResponderContainer, {
    hasJobTitle: jobTitle
  }, /* @__PURE__ */ import_react27.default.createElement(QuestionResponderWrapper, null, /* @__PURE__ */ import_react27.default.createElement(UserImage_default, {
    src: profilePicture,
    size: props.userImgSize
  }), /* @__PURE__ */ import_react27.default.createElement(QuestionerResponderInfoContainer, null, /* @__PURE__ */ import_react27.default.createElement(QuestionerResponderName, null, fullName), /* @__PURE__ */ import_react27.default.createElement(QuestionerResponderJobTitle, null, jobTitle))), children);
}
QuestionerResponderInfo.defaultProps = {
  createdBy: {
    full_name: ANONYMOUS_USER.username,
    profile_picture: ANONYMOUS_USER.profilePicture
  },
  userImgSize: "medium",
  children: null
};
QuestionerResponderInfo.propTypes = {
  createdBy: import_prop_types13.default.shape({
    full_name: import_prop_types13.default.string.isRequired,
    profile_picture: import_prop_types13.default.string.isRequired
  }),
  userImgSize: import_prop_types13.default.string,
  children: import_prop_types13.default.node
};
var QuestionResponder_default = QuestionerResponderInfo;

// app/components/Atoms/Label/index.js
init_react();

// app/components/Atoms/Label/Label.jsx
init_react();
var import_react28 = __toESM(require("react")), import_prop_types14 = __toESM(require("prop-types"));

// app/components/Atoms/Label/Label.Styled.jsx
init_react();
var import_styled_components14 = __toESM(require("styled-components")), LabelContainer = import_styled_components14.default.div`
  display: flex;
  align-items: center;
`, Label = import_styled_components14.default.div`
  background-color: var(--color-secondary-lowOpacity);
  border-radius: 20px;
  color: var(--color-secondary);
  display: flex;
  font-weight: 600;
  font-size: 11px;
  line-height: normal;
  letter-spacing: 0.5px;
  margin-right: 7px;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;

  ${(props) => props.text === "Not Assigned" && import_styled_components14.css`
    display: none;
  `}

  ${(props) => props.type === "Location" && import_styled_components14.css`
    background-color: var(--color-primary-lowOpacity);
    color: var(--color-primary);
  `}

  ${(props) => props.type === "Department" && import_styled_components14.css`
    background-color: var(--color-secondary-lowOpacity);
    color: var(--color-secondary);
  `}

  ${(props) => props.type === "Employee" && import_styled_components14.css`
    background-color: var(--color-green-lowOpacity);
    color: var(--color-green);
  `}

  ${(props) => props.type === "Answer" && import_styled_components14.css`
    background-color: var(--color-green-bg);
    color: var(--color-green);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
  `}
  
  ${(props) => props.text === "Community answer" && import_styled_components14.css`
    background-color: var(--color-gold-bg);
    color: var(--color-gold);
  `}
`, ApproverName = import_styled_components14.default.span`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: var(--color-green);
`;

// app/components/Atoms/Label/Label.jsx
function Label2({ text: text5, type, approvedBy }) {
  return /* @__PURE__ */ import_react28.default.createElement(LabelContainer, null, /* @__PURE__ */ import_react28.default.createElement(Label, {
    type,
    text: text5
  }, text5), approvedBy && /* @__PURE__ */ import_react28.default.createElement(ApproverName, null, "by", /* @__PURE__ */ import_react28.default.createElement("strong", null, approvedBy)));
}
Label2.propTypes = {
  text: import_prop_types14.default.string.isRequired,
  type: import_prop_types14.default.string.isRequired,
  approvedBy: import_prop_types14.default.string
};
Label2.defaultProps = {
  approvedBy: null
};
var Label_default = Label2;

// app/components/AnswerRow/AnswerRow.jsx
function AnswerRow2(_a) {
  var _b = _a, {
    searchTerm,
    isPreview,
    isQuestionModalOpen
  } = _b, props = __objRest(_b, [
    "searchTerm",
    "isPreview",
    "isQuestionModalOpen"
  ]);
  let shouldCollapse = () => props.answer_text.length > COLLAPSED_ANSWER_MIN_LENGTH, [collapsed, setCollapsed] = (0, import_react29.useState)(shouldCollapse), renderAnswer2 = () => /* @__PURE__ */ import_react29.default.createElement(AnswerRow, null, /* @__PURE__ */ import_react29.default.createElement(ConditionalLinkTo_default, {
    to: `/questions/${props.questionId}`,
    condition: props.isFromList
  }, /* @__PURE__ */ import_react29.default.createElement(AnswerMarkdown, {
    children: formatCollapsingText(markdownFormat(props.answer_text, searchTerm), shouldCollapse(), collapsed, COLLAPSED_ANSWER_MIN_LENGTH),
    components: { link: MarkdownLinkRenderer_default }
  })), shouldCollapse() && /* @__PURE__ */ import_react29.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    onClick: () => setCollapsed(!collapsed)
  }, " ", showCollapseOrExpandMessage(collapsed))), renderAnswerLabel = () => props.isCommentApproved ? /* @__PURE__ */ import_react29.default.createElement(Label_default, {
    type: "Answer",
    text: "Approved",
    approvedBy: props.approver.full_name
  }) : props.isCommunityAnswer ? /* @__PURE__ */ import_react29.default.createElement(Label_default, {
    type: "Answer",
    text: "Community answer"
  }) : /* @__PURE__ */ import_react29.default.createElement(Label_default, {
    type: "Answer",
    text: "Best Answer"
  }), getAnswerDate = () => props.isCommunityAnswer || props.isCommentApproved ? props.answered_at : props.answer_date, { user, children } = props, anwserDate = getAnswerDate();
  return /* @__PURE__ */ import_react29.default.createElement(AnswerContainer, {
    isPreview,
    isQuestionModalOpen
  }, /* @__PURE__ */ import_react29.default.createElement(AnsweredMetadata, {
    isPreview
  }, /* @__PURE__ */ import_react29.default.createElement(AnsweredMetadataLeft, {
    hasJobTitle: user !== null ? user.job_title : ""
  }, /* @__PURE__ */ import_react29.default.createElement(ConditionalLinkTo_default, {
    to: `/questions/${props.questionId}`,
    condition: props.isFromList
  }, /* @__PURE__ */ import_react29.default.createElement(QuestionResponder_default, {
    createdBy: user,
    isAnswer: !0
  }, /* @__PURE__ */ import_react29.default.createElement(DateContainer, {
    hasJobTitle: user !== null ? user.job_title : ""
  }, /* @__PURE__ */ import_react29.default.createElement(CircleIcon, null), /* @__PURE__ */ import_react29.default.createElement(AnswerRowDate, {
    isQuestionModalOpen
  }, getDateData(anwserDate))))), /* @__PURE__ */ import_react29.default.createElement(AnsweredRightContainer, null, renderAnswerLabel(), children))), renderAnswer2({ isQuestionModalOpen }));
}
AnswerRow2.propTypes = {
  answer_text: import_prop_types15.default.string.isRequired,
  user: import_prop_types15.default.shape({
    email: import_prop_types15.default.string.isRequired,
    full_name: import_prop_types15.default.string.isRequired,
    profile_picture: import_prop_types15.default.string.isRequired,
    job_title: import_prop_types15.default.string
  }).isRequired,
  createdAt: import_prop_types15.default.string.isRequired,
  children: import_prop_types15.default.node.isRequired,
  searchTerm: import_prop_types15.default.string,
  isPreview: import_prop_types15.default.bool,
  isQuestionModalOpen: import_prop_types15.default.bool,
  isFromList: import_prop_types15.default.bool,
  questionId: import_prop_types15.default.number.isRequired,
  isAnswer: import_prop_types15.default.bool.isRequired,
  isCommunityAnswer: import_prop_types15.default.bool.isRequired,
  isCommentApproved: import_prop_types15.default.bool.isRequired,
  approver: import_prop_types15.default.shape({
    email: import_prop_types15.default.string.isRequired,
    full_name: import_prop_types15.default.string.isRequired,
    profile_picture: import_prop_types15.default.string.isRequired,
    job_title: import_prop_types15.default.string
  }),
  answer_date: import_prop_types15.default.string,
  answered_at: import_prop_types15.default.string
};
AnswerRow2.defaultProps = {
  searchTerm: "",
  isPreview: !1,
  isQuestionModalOpen: !1,
  isFromList: !0,
  approver: {},
  answer_date: "",
  answered_at: ""
};
var AnswerRow_default = AnswerRow2;

// app/components/AnswerAdminOptions/index.js
init_react();

// app/components/AnswerAdminOptions/AnswerAdminOptions.jsx
init_react();
var import_react30 = __toESM(require("react")), import_prop_types16 = __toESM(require("prop-types"));

// app/components/AnswerAdminOptions/AnswerAdminOptions.Styled.jsx
init_react();
var import_styled_components15 = __toESM(require("styled-components")), AnswerOptions = import_styled_components15.default.div`
  display: flex;
  button {
    background: transparent;
    border: 0;
    &:first-child {
      margin-right: 16px;
    }
    :disabled {
      opacity: 0.5;
    }
    > img {
      height: 15px;
      width: 15px;
    }
  }
  ${(props) => !props.isPreview && import_styled_components15.css`
    @media screen and (max-width: 480px) {
      min-width: fit-content;
    }
    & > img:first-child {
      @media screen and (max-width: 480px) {
        margin-right: 24px;
      }
    }
  `}
  ${(props) => props.isDisabled && import_styled_components15.css`
    display: inline-block;
    position: relative;
  `}
`, OptionsTooltip = import_styled_components15.default.div`
  font-family: 'Nunito', sans-serif;
  background-color: #31425a;
  border-radius: 6px;
  bottom: 150%;
  color: #fff;
  left: 50%;
  margin-left: -60px;
  padding: 8px;
  position: absolute;
  text-align: center;
  width: 120px;
  z-index: 1;
  font-size: 14px;
  letter-spacing: 0.6px;
  &::after {
    border: 5px solid transparent;
    border-top-color: #31425a;
    content: " ";
    left: 50%;
    margin-left: -5px;
    position: absolute;
    top: 100%;
  }
`;

// app/images/ic_edit.svg
var ic_edit_default = "/build/_assets/ic_edit-RAYDZA5B.svg";

// app/images/ic_delete.svg
var ic_delete_default = "/build/_assets/ic_delete-O2BLLQ3J.svg";

// app/components/AnswerAdminOptions/AnswerAdminOptions.jsx
function AnswerAdminOptions({
  isPreview,
  isDisabled,
  onAnswerClick,
  openDeleteAnswerModal,
  question
}) {
  let [showTootip, setShowTooltip] = (0, import_react30.useState)(!1);
  return /* @__PURE__ */ import_react30.default.createElement(AnswerOptions, {
    isPreview,
    isDisabled
  }, /* @__PURE__ */ import_react30.default.createElement("button", {
    type: "button",
    onMouseOver: () => isDisabled && setShowTooltip(!0),
    onFocus: () => isDisabled && setShowTooltip(!0),
    onMouseOut: () => isDisabled && setShowTooltip(!1),
    onBlur: () => isDisabled && setShowTooltip(!1),
    onClick: () => !isDisabled && onAnswerClick(question),
    disabled: isDisabled
  }, /* @__PURE__ */ import_react30.default.createElement("img", {
    src: ic_edit_default,
    alt: "Edit"
  })), /* @__PURE__ */ import_react30.default.createElement("button", {
    type: "button",
    onMouseOver: () => isDisabled && setShowTooltip(!0),
    onFocus: () => isDisabled && setShowTooltip(!0),
    onMouseOut: () => isDisabled && setShowTooltip(!1),
    onBlur: () => isDisabled && setShowTooltip(!1),
    onClick: () => !isDisabled && openDeleteAnswerModal(question),
    disabled: isDisabled
  }, /* @__PURE__ */ import_react30.default.createElement("img", {
    src: ic_delete_default,
    alt: "Delete"
  })), isDisabled && showTootip && /* @__PURE__ */ import_react30.default.createElement(OptionsTooltip, {
    show: showTootip
  }, DISABLED_ANSWER_ICONS_TOOLTIP_MESSAGE));
}
AnswerAdminOptions.propTypes = {
  isDisabled: import_prop_types16.default.bool.isRequired,
  isPreview: import_prop_types16.default.bool,
  onAnswerClick: import_prop_types16.default.func.isRequired,
  openDeleteAnswerModal: import_prop_types16.default.func.isRequired,
  question: import_prop_types16.default.shape().isRequired
};
AnswerAdminOptions.defaultProps = {
  isPreview: !1
};
var AnswerAdminOptions_default = AnswerAdminOptions;

// app/utils/questionUtils.js
var renderDepartment = (department) => department ? department.name : DEPARTMENT_NOT_ASSIGNED;
function shouldRenderAdminButtons(question, isAdmin) {
  return !question.Answer && isAdmin;
}
function hasJobTitle(createdBy) {
  return createdBy ? createdBy.job_title : "";
}
function renderAdminButtons(renderAdminBtnProps) {
  let { question, onAnswerClick, onAssignAnswerClick } = renderAdminBtnProps;
  return /* @__PURE__ */ import_react31.default.createElement("div", {
    className: "question-row__admin-buttons--container",
    style: { display: "flex" }
  }, /* @__PURE__ */ import_react31.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "admin-button",
    onClick: () => onAnswerClick(question)
  }, ANSWER), /* @__PURE__ */ import_react31.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "admin-button",
    onClick: () => onAssignAnswerClick(question)
  }, REASSIGN));
}
function renderAnswer(renderAnswerProps) {
  let {
    isAdmin,
    currentUserEmail,
    onAnswerClick,
    openDeleteAnswerModal,
    question,
    searchTerm,
    isPreview,
    isQuestionModalOpen,
    isFromList
  } = renderAnswerProps, Answer;
  if (question.Answers.length > 0 && (Answer = question.Answers[0]), !Answer)
    return null;
  let actionsEnabled = !1;
  return Answer.num_scores <= 1 && (actionsEnabled = !0), /* @__PURE__ */ import_react31.default.createElement(AnswerRow_default, __spreadProps(__spreadValues({}, Answer), {
    searchTerm,
    isPreview,
    isQuestionModalOpen,
    questionId: question.question_id,
    isFromList,
    user: Answer.AnsweredBy,
    isAnswer: !0,
    isCommunityAnswer: !1,
    isCommentApproved: !1
  }), isAdmin && Answer.AnsweredBy.email === currentUserEmail && /* @__PURE__ */ import_react31.default.createElement(AnswerAdminOptions_default, {
    isPreview,
    isDisabled: !actionsEnabled,
    onAnswerClick,
    openDeleteAnswerModal,
    question
  }));
}

// app/components/CounterButton/index.js
init_react();

// app/components/CounterButton/CounterButton.jsx
init_react();
var import_react32 = __toESM(require("react")), import_prop_types17 = __toESM(require("prop-types"));

// app/components/CounterButton/CounterButton.Styled.jsx
init_react();
var import_styled_components16 = __toESM(require("styled-components")), handleColorType = (props) => props.selected ? "var(--color-secondary-active)" : props.notButton ? "var(--color-secondary)" : "#31425a", setCursorType = (props) => props.processingFormSubmission ? "not-allowed" : "pointer", ContainerCounterButton = import_styled_components16.default.button`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 3px;
  color: ${(props) => handleColorType(props)};
  cursor: ${(props) => setCursorType(props)};
  display: inline-flex;
  flex-direction: row;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  padding: 3px 7px;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #f4f7f9;
  }
  :disabled {
    cursor: not-allowed;
  }
  img,
  span {
    align-items: flex-end;
    display: flex;
    min-height: 20px;
  }
  img {
    height: 17px;
    margin-right: 10px;
    width: 17px;
  }
`, ContainerCounterButtonNotMobile = import_styled_components16.default.div`
  display: unset;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// app/components/CounterButton/CounterButton.jsx
function CounterButton({
  id,
  icon,
  text: text5,
  count,
  selected,
  onClick,
  notButton,
  processingFormSubmission,
  isDisabled
}) {
  let validIcon = import_react32.default.isValidElement(icon);
  return /* @__PURE__ */ import_react32.default.createElement(ContainerCounterButton, {
    id,
    onClick,
    selected,
    notButton,
    processingFormSubmission,
    disabled: isDisabled
  }, validIcon ? icon : /* @__PURE__ */ import_react32.default.createElement("img", {
    src: icon,
    alt: "Icon"
  }), /* @__PURE__ */ import_react32.default.createElement("span", null, count, text5 && /* @__PURE__ */ import_react32.default.createElement(ContainerCounterButtonNotMobile, null, text5)));
}
CounterButton.defaultProps = {
  id: "",
  count: "0",
  selected: !1,
  notButton: !1,
  onClick: null,
  processingFormSubmission: !1,
  isDisabled: !1
};
CounterButton.propTypes = {
  id: import_prop_types17.default.string,
  icon: import_prop_types17.default.oneOfType([
    import_prop_types17.default.string,
    import_prop_types17.default.element
  ]).isRequired,
  text: import_prop_types17.default.string.isRequired,
  count: import_prop_types17.default.string,
  selected: import_prop_types17.default.bool,
  onClick: import_prop_types17.default.func,
  notButton: import_prop_types17.default.bool,
  processingFormSubmission: import_prop_types17.default.bool,
  isDisabled: import_prop_types17.default.bool
};
var CounterButton_default = CounterButton;

// app/components/QuestionCommentList/index.js
init_react();

// app/components/QuestionCommentList/QuestionCommentList.jsx
init_react();
var import_react43 = __toESM(require("react")), import_prop_types26 = __toESM(require("prop-types")), import_react44 = require("@remix-run/react");

// app/components/QuestionCommentList/QuestionCommentList.styled.jsx
init_react();
var import_styled_components17 = __toESM(require("styled-components")), CommentListContainer = import_styled_components17.default.div`
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    padding: 0 8px;
  }

  & .question-comment {
    @media screen and (max-width: 768px) {
      padding-top: 12px;
    }
  }
`, SortSelectorContainer = import_styled_components17.default.div`
  float: right;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 0.6em;
  margin-bottom: 0.8em;
`, SortSelectorText = import_styled_components17.default.span`
  font-size: 1.3rem;
  margin-right: 8px;
`, CommentListHeader = import_styled_components17.default.div`
  display: flex;
  justify-content: space-between;
`;

// app/utils/commentUtils.js
init_react();
function reorderHighlightedComments(comments) {
  if (comments.length === 0)
    return [null, comments];
  if (comments.length === 1)
    return [parseInt(comments[0].votes, 10) >= COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD ? comments[0].id : null, comments];
  let mostVotesInComment = comments.reduce((previous3, current) => {
    let votesPrevious = previous3.votes ? parseInt(previous3.votes, 10) : 0;
    return (current.votes ? parseInt(current.votes, 10) : 0) > votesPrevious ? current : previous3;
  });
  if (mostVotesInComment = mostVotesInComment.votes ? parseInt(mostVotesInComment.votes, 10) : 0, !(mostVotesInComment >= COMMUNITY_ANSWER_COMMENT_VOTES_THRESHOLD))
    return [null, comments];
  let maxVotesComments = comments.filter((comment) => (comment.votes ? parseInt(comment.votes, 10) : 0) === mostVotesInComment), recentActivitySortingFunction = (a, b) => {
    let createdFirst = a.createdAt ? a.createdAt : new Date().toISOString(), createdSecond = b.createdAt ? b.createdAt : new Date().toISOString(), firstComparingTimestamp = createdFirst, secondComparingTimestamp = createdSecond;
    return a.updatedAt !== null && a.updatedAt !== void 0 && a.updatedAt > createdFirst && (firstComparingTimestamp = a.updatedAt), b.updatedAt !== null && b.updatedAt !== void 0 && b.updatedAt > createdSecond && (secondComparingTimestamp = b.updatedAt), secondComparingTimestamp > firstComparingTimestamp ? 1 : secondComparingTimestamp < firstComparingTimestamp ? -1 : 0;
  }, selectedCommunityAnswerComment = maxVotesComments.length > 1 ? maxVotesComments.sort(recentActivitySortingFunction)[0] : maxVotesComments[0], approvedByAdminCommentInList = comments.some((comm) => comm.approvedBy);
  if (comments.length < 3 && approvedByAdminCommentInList)
    return [selectedCommunityAnswerComment.id, comments];
  let commentsWithoutCommunityAnswer = comments.filter((comm) => comm.id !== selectedCommunityAnswerComment.id);
  if (approvedByAdminCommentInList && selectedCommunityAnswerComment.approvedBy)
    return [selectedCommunityAnswerComment.id, comments];
  if (approvedByAdminCommentInList && !selectedCommunityAnswerComment.approvedBy) {
    let reorderedComments = [...commentsWithoutCommunityAnswer];
    return reorderedComments.splice(1, 0, selectedCommunityAnswerComment), [selectedCommunityAnswerComment.id, reorderedComments];
  }
  if (!approvedByAdminCommentInList) {
    let reorderedComments = [...commentsWithoutCommunityAnswer];
    return reorderedComments.unshift(selectedCommunityAnswerComment), [selectedCommunityAnswerComment.id, reorderedComments];
  }
  return [null, comments];
}
var commentUtils_default = reorderHighlightedComments;

// app/components/QuestionComment/index.js
init_react();

// app/components/QuestionComment/QuestionComment.jsx
init_react();
var import_react39 = __toESM(require("react")), import_bs2 = require("react-icons/bs"), import_prop_types24 = __toESM(require("prop-types")), import_react40 = require("@remix-run/react");

// app/components/QuestionComment/QuestionComment.styled.jsx
init_react();
var import_styled_components20 = __toESM(require("styled-components"));

// app/components/CommentInput/CommentInput.styled.jsx
init_react();
var import_styled_components19 = __toESM(require("styled-components")), import_react_bootstrap6 = require("react-bootstrap");

// app/components/Atoms/Input/Input.Styled.jsx
init_react();
var import_styled_components18 = __toESM(require("styled-components")), InputContainer = import_styled_components18.default.div`
    align-items: top;
    background-color: #fff;
    border-bottom: 1px solid #e2e8ea;
    border-radius: 3px;
    display: flex;
    min-height: 44px;
`, InputLeftElement = import_styled_components18.default.div`
`, InputRightElement = import_styled_components18.default.div`
`, InputElement = import_styled_components18.default.input`
    border: none;
    box-shadow: none;
    display: block;
    font-size: 14px;
    height: 100%;
    width: 100%;
    outline: none;
`, TextAreaElement = import_styled_components18.default.textarea`
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
var CommentInputMainContainer = import_styled_components19.default.div`
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
`, CommentInputTextArea = import_styled_components19.default.div`
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
`, CommentInputTextAreaForm = import_styled_components19.default.div`
    display: flex;
    flex: 1;
`, CommentInputOptions = import_styled_components19.default.div`
    padding-bottom: 1%;

    @media (max-width: 500px) {
        display: none;
    }
`, CommentInputText = import_styled_components19.default.div`
    display: flex;
    flex: 85%;
    flex-direction: column;

    @media (max-width: 500px) {
        margin-top: 14px;
    }
`, CommentInputForm = import_styled_components19.default.form`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 24px 0 0;

    @media (max-width: 500px) {
        padding: 0 16px 0 0;
    }
`, CommentInputAuthor = import_styled_components19.default.div`
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
`, CommentInputButtonsContainer = import_styled_components19.default.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    @media (max-width: 500px) {
        margin-top: 12px;
    }
`, QuestionInputTextPreview = import_styled_components19.default.div`
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
`, QuestionInputTab = import_styled_components19.default.div`
    background-color: transparent;
    width: 80px;
    height: fit-content;
    margin-left: 10px;
    border-radius: 7px 7px 0 0;

    ${(props) => props.selected && import_styled_components19.css`
        background-color: #fff;
    `} 

    ${(props) => props.selected && !props.isNewComment && import_styled_components19.css`
        background-color: #f3f3f3;
        border-radius: 7px;
    `} 

    ${(props) => props.disabled && import_styled_components19.css`
        ${MainButton} {
            color: var(--color-dark-25) !important;
        }
    `} 
`, QuestionInputTextPreviewDiv = import_styled_components19.default.div`
    padding: 10px;
    text-align: left;
    word-wrap: break-word;
    width: 100%;
    letter-spacing: 0.6px;
    line-height: 1.71;
    word-wrap: break-word;
    overflow-wrap: break-word;
`, AuthorImg = import_styled_components19.default.img`
    box-shadow: 0 0 0 1px var(--color-secondary);
    margin-left: 5px;
    margin-right: 10px;
    height: 40px;
    border-radius: 50%;

    ${(props) => props.variant === "dropdown" ? "height: 32px" : "height: 40px"}
`, CommentInputAuthorPictureDiv = import_styled_components19.default.div`
    float: left;
`, AuthorNameContainer = import_styled_components19.default.div`
    color: var(--color-dark-50);
    padding-top: 5px;
    text-align: left;
`, AuthorNameContainerCaret = import_styled_components19.default.span`
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
`, DropdownButtonStyled = (0, import_styled_components19.default)(import_react_bootstrap6.DropdownButton)`
    background-color: #f7f7f7;
    border: unset;
    padding: 0%;
`;

// app/components/QuestionComment/QuestionComment.styled.jsx
var QuestionCommentContainer = import_styled_components20.default.div`
  border-radius: 20px;
  margin-bottom: 24px;
  width: 100%;
  padding-bottom: ${(props) => props.isDeleting ? "10px" : "16px"};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(225, 229, 233, 0.8);
  padding: 15px 20px 10px;
  ${(props) => props.isDeleting && import_styled_components20.css`border: 1px solid #cd3140;`}
  ${(props) => props.hadApprover && import_styled_components20.css`border: 1px solid var(--color-green-border);`}
  ${(props) => props.isCommunityAnswer && import_styled_components20.css`border: 1px solid var(--color-gold-border);`}

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
`, QuestionCommentMetadata = import_styled_components20.default.div`
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
`, QuestionCommentText = import_styled_components20.default.div`
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
`, QuestionCommentMarkdown = (0, import_styled_components20.default)(ReactMarkdown)`
  display: inline;

  p {
    color: var(--color-dark-50);
    margin: 0;
    overflow-wrap: break-word;
  }
`, QuestionCommentOptionsWrapper = import_styled_components20.default.div`
  align-items: center;
  display: flex;
`, QuestionCommentOptions = import_styled_components20.default.div`
  margin-left: 5px;

  img {
    cursor: pointer;
    height: 15px;
    width: 15px;
  }

  img:first-child {
    margin-right: 16px;
  }
`, QuestionCommentDeleteConfirmation = import_styled_components20.default.div`
  align-items: center;
  border-top: 1px solid #e5e5e5;
  display: flex;
  padding-top: 10px;

  p {
    font-family: "NunitoSans Semibold", sans-serif;
    margin-right: auto;
    margin-top: 10px;
  }
`, QuestionCommentEdit = import_styled_components20.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  div {
    line-height: 15px;
    padding-right: unset;
    position: static;
  }
`, QuestionCommentShowMore = import_styled_components20.default.span`
  color: var(--color-secondary);
  cursor: pointer;
  display:${(props) => props.isEditing && "none"};
`, QuestionCommentButtons = import_styled_components20.default.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  width: fit-content;
    
`, QuestionCommentWrapper = import_styled_components20.default.div`
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
`, QuestionCommentCounterSpan = import_styled_components20.default.span` 
  display: flex;
  justify-content: center;

  ${(props) => props.upVoteActive && `
    color: var(--color-green);
  `};

  ${(props) => props.downVoteActive && `
    color: var(--color-primary);
  `};
`, QuestionCommentDotsWrapper = import_styled_components20.default.div`
  cursor: pointer;
`, QuestionCommentDate = import_styled_components20.default.div`
  display: flex;
  height: fit-content;
  color: var(--color-dark-metadata);
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  letter-spacing: 0.7px;
`, CommentAsAnswerToolTipText = import_styled_components20.default.span`
background-color: black;
border-radius: 6px;
color: #fff;
display: block;
padding: 5px;
position: absolute;
visibility: hidden;
width: 168px;
z-index: 100;

`, CommentAsAnswerToolTip = import_styled_components20.default.button`
background-color: transparent;
border: none;
position: relative;
 &:hover ${CommentAsAnswerToolTipText} {
  visibility: visible;
 }
`, ArrowUp = import_styled_components20.default.div`
  border-radius: 50%;
  height: 1.8em;
  width: 1.8em;
  margin-right: 5px;

  ${(props) => props.upVoteActive && `
    background-color: var(--color-green-bg);
  `};
`, ArrowDown = import_styled_components20.default.div`
  border-radius: 50%;
  height: 1.8em;
  width: 1.8em;
  margin-left: 5px;

  ${(props) => props.downVoteActive && `
    background-color: var(--color-primary-lowOpacity);
  `};
`, ApproverName2 = import_styled_components20.default.span`
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: var(--color-green);
`;

// app/images/ic_edit_selected.svg
var ic_edit_selected_default = "/build/_assets/ic_edit_selected-EJWVUM6O.svg";

// app/images/ic_delete_selected.svg
var ic_delete_selected_default = "/build/_assets/ic_delete_selected-2Y6ZTOBB.svg";

// app/components/CommentInput/CommentInputText.jsx
init_react();
var import_react38 = __toESM(require("react")), import_prop_types23 = __toESM(require("prop-types"));

// app/components/CommentInput/CommentTextArea.jsx
init_react();
var import_react36 = __toESM(require("react")), import_prop_types21 = __toESM(require("prop-types"));

// app/components/MarkdownFormattingNote/index.js
init_react();

// app/components/MarkdownFormattingNote/MarkdownFormattingNote.jsx
init_react();
var import_react33 = __toESM(require("react")), import_prop_types18 = __toESM(require("prop-types"));

// app/components/MarkdownFormattingNote/MarkdownFormattingNote.Styled.jsx
init_react();
var import_styled_components21 = __toESM(require("styled-components")), Note = import_styled_components21.default.span` 
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
  return /* @__PURE__ */ import_react33.default.createElement(Note, {
    visible
  }, /* @__PURE__ */ import_react33.default.createElement("b", null, "**bold**"), /* @__PURE__ */ import_react33.default.createElement("i", null, "_italics_"), "~~strike~~", /* @__PURE__ */ import_react33.default.createElement("code", null, "`code`"), /* @__PURE__ */ import_react33.default.createElement("code", null, "```preformatted```"), /* @__PURE__ */ import_react33.default.createElement("span", null, ">quote"));
}
MarkdownFormattingNote.defaultProps = {
  visible: !1
};
MarkdownFormattingNote.propTypes = {
  visible: import_prop_types18.default.bool
};
var MarkdownFormattingNote_default = MarkdownFormattingNote;

// app/utils/input.js
init_react();
var validTextLength = (currentTextLength, minTextLength, maxTextLength) => currentTextLength >= minTextLength && currentTextLength <= maxTextLength, shouldShowMarkdownSuggestions = (textLength, minLength, windowWidth, minWidth) => windowWidth > minWidth && textLength > minLength;

// app/components/Atoms/Input/index.js
init_react();

// app/components/Atoms/Input/Input.jsx
init_react();
var import_react34 = __toESM(require("react")), import_prop_types19 = __toESM(require("prop-types"));
var Input2 = import_react34.default.forwardRef((props, ref) => {
  let _a = props, {
    id,
    type,
    classContainer,
    classInput,
    inputLeftElement,
    inputRightElement,
    classLeftElement,
    classRightElement,
    rows
  } = _a, inputParams = __objRest(_a, [
    "id",
    "type",
    "classContainer",
    "classInput",
    "inputLeftElement",
    "inputRightElement",
    "classLeftElement",
    "classRightElement",
    "rows"
  ]);
  return /* @__PURE__ */ import_react34.default.createElement(InputContainer, {
    id,
    className: classContainer
  }, inputLeftElement && /* @__PURE__ */ import_react34.default.createElement(InputLeftElement, {
    className: classLeftElement
  }, inputLeftElement), type !== "text-area" && /* @__PURE__ */ import_react34.default.createElement(InputElement, __spreadValues({
    ref,
    className: classInput
  }, inputParams)), type === "text-area" && /* @__PURE__ */ import_react34.default.createElement(TextAreaElement, __spreadValues({
    ref,
    className: classInput,
    rows
  }, inputParams)), inputRightElement && /* @__PURE__ */ import_react34.default.createElement(InputRightElement, {
    className: classRightElement
  }, inputRightElement));
});
Input2.displayName = "Input";
var Input_default = Input2;
Input2.propTypes = {
  id: import_prop_types19.default.string.isRequired,
  type: import_prop_types19.default.string,
  inputParams: {}.isRequired,
  classContainer: import_prop_types19.default.string,
  classInput: import_prop_types19.default.string,
  inputLeftElement: import_prop_types19.default.element,
  inputRightElement: import_prop_types19.default.element,
  classLeftElement: import_prop_types19.default.element,
  classRightElement: import_prop_types19.default.element,
  rows: import_prop_types19.default.number
};
Input2.defaultProps = {
  classContainer: "",
  classInput: "",
  type: "text",
  inputLeftElement: null,
  inputRightElement: null,
  classLeftElement: "",
  classRightElement: "",
  rows: 1
};

// app/components/InputCounter/index.js
init_react();

// app/components/InputCounter/InputCounter.jsx
init_react();
var import_react35 = __toESM(require("react")), import_prop_types20 = __toESM(require("prop-types"));

// app/components/InputCounter/InputCounter.Styled.jsx
init_react();
var import_styled_components22 = __toESM(require("styled-components")), InputCounterWrapper = import_styled_components22.default.p`
    align-self: flex-end;
    bottom: 33px;
    color: #a2abaf;
    font-family: 'Nunito', sans-serif;
    font-size: 12px;
    right: 12px;
    padding: 10px;
`, InputCounter_Styled_default = InputCounterWrapper;

// app/components/InputCounter/InputCounter.jsx
function InputCounter(props) {
  let { currentLength, maxLength } = props;
  return /* @__PURE__ */ import_react35.default.createElement(InputCounter_Styled_default, {
    className: "input-counter"
  }, currentLength, "/", maxLength);
}
var InputCounter_default = InputCounter;
InputCounter.propTypes = {
  currentLength: import_prop_types20.default.string.isRequired,
  maxLength: import_prop_types20.default.string.isRequired
};

// app/components/CommentInput/CommentTextArea.jsx
function CommentTextArea({
  inputValue,
  onCommentChange,
  placeholder,
  textAreaRows,
  commentLength
}) {
  return CommentTextArea.propTypes = {
    inputValue: import_prop_types21.default.string,
    onCommentChange: import_prop_types21.default.func.isRequired,
    commentLength: import_prop_types21.default.number.isRequired,
    textAreaRows: import_prop_types21.default.number,
    placeholder: import_prop_types21.default.string.isRequired
  }, CommentTextArea.defaultProps = {
    inputValue: "",
    textAreaRows: MIN_TEXTAREA_ROWS
  }, /* @__PURE__ */ import_react36.default.createElement(CommentInputTextArea, null, /* @__PURE__ */ import_react36.default.createElement(Input_default, {
    type: "text-area",
    rows: textAreaRows,
    maxLength: 3e3,
    value: inputValue,
    placeholder,
    onChange: onCommentChange,
    form: "question-submit-form",
    inputRightElement: /* @__PURE__ */ import_react36.default.createElement(InputCounter_default, {
      currentLength: commentLength,
      maxLength: 3e3
    })
  }), /* @__PURE__ */ import_react36.default.createElement(CommentInputOptions, null, /* @__PURE__ */ import_react36.default.createElement(MarkdownFormattingNote_default, {
    visible: shouldShowMarkdownSuggestions(commentLength, MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN, MINIMUN_WINDOW_WIDTH, MINIMUM_WIDTH_TO_SHOW_MARKDOWN)
  })));
}
var CommentTextArea_default = CommentTextArea;

// app/components/QuestionMarkdown/index.js
init_react();

// app/components/QuestionMarkdown/QuestionMarkdown.jsx
init_react();
var import_react37 = __toESM(require("react")), import_prop_types22 = __toESM(require("prop-types"));

// node_modules/remark-gfm/index.js
init_react();

// node_modules/micromark-extension-gfm/index.js
init_react();

// node_modules/micromark-extension-gfm-autolink-literal/index.js
init_react();

// node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
init_react();
var www = {
  tokenize: tokenizeWww,
  partial: !0
}, domain = {
  tokenize: tokenizeDomain,
  partial: !0
}, path = {
  tokenize: tokenizePath,
  partial: !0
}, punctuation = {
  tokenize: tokenizePunctuation,
  partial: !0
}, namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: !0
}, wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
}, httpAutolink = {
  tokenize: tokenizeHttpAutolink,
  previous: previousHttp
}, emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
}, text4 = {}, gfmAutolinkLiteral = {
  text: text4
}, code2 = 48;
for (; code2 < 123; )
  text4[code2] = emailAutolink, code2++, code2 === 58 ? code2 = 65 : code2 === 91 && (code2 = 97);
text4[43] = emailAutolink;
text4[45] = emailAutolink;
text4[46] = emailAutolink;
text4[95] = emailAutolink;
text4[72] = [emailAutolink, httpAutolink];
text4[104] = [emailAutolink, httpAutolink];
text4[87] = [emailAutolink, wwwAutolink];
text4[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok2, nok) {
  let self = this, hasDot, hasDigitInLastSegment;
  return start;
  function start(code3) {
    return !gfmAtext(code3) || !previousEmail(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkEmail"), atext(code3));
  }
  function atext(code3) {
    return gfmAtext(code3) ? (effects.consume(code3), atext) : code3 === 64 ? (effects.consume(code3), label) : nok(code3);
  }
  function label(code3) {
    return code3 === 46 ? effects.check(punctuation, done, dotContinuation)(code3) : code3 === 45 || code3 === 95 ? effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code3) : asciiAlphanumeric(code3) ? (!hasDigitInLastSegment && asciiDigit(code3) && (hasDigitInLastSegment = !0), effects.consume(code3), label) : done(code3);
  }
  function dotContinuation(code3) {
    return effects.consume(code3), hasDot = !0, hasDigitInLastSegment = void 0, label;
  }
  function dashOrUnderscoreContinuation(code3) {
    return effects.consume(code3), afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code3) {
    return code3 === 46 ? effects.check(punctuation, nok, dotContinuation)(code3) : label(code3);
  }
  function done(code3) {
    return hasDot && !hasDigitInLastSegment ? (effects.exit("literalAutolinkEmail"), effects.exit("literalAutolink"), ok2(code3)) : nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return code3 !== 87 && code3 !== 119 || !previousWww(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkWww"), effects.check(www, effects.attempt(domain, effects.attempt(path, done), nok), nok)(code3));
  }
  function done(code3) {
    return effects.exit("literalAutolinkWww"), effects.exit("literalAutolink"), ok2(code3);
  }
}
function tokenizeHttpAutolink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return code3 !== 72 && code3 !== 104 || !previousHttp(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkHttp"), effects.consume(code3), t1);
  }
  function t1(code3) {
    return code3 === 84 || code3 === 116 ? (effects.consume(code3), t2) : nok(code3);
  }
  function t2(code3) {
    return code3 === 84 || code3 === 116 ? (effects.consume(code3), p) : nok(code3);
  }
  function p(code3) {
    return code3 === 80 || code3 === 112 ? (effects.consume(code3), s) : nok(code3);
  }
  function s(code3) {
    return code3 === 83 || code3 === 115 ? (effects.consume(code3), colon) : colon(code3);
  }
  function colon(code3) {
    return code3 === 58 ? (effects.consume(code3), slash1) : nok(code3);
  }
  function slash1(code3) {
    return code3 === 47 ? (effects.consume(code3), slash2) : nok(code3);
  }
  function slash2(code3) {
    return code3 === 47 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, done), nok)(code3);
  }
  function done(code3) {
    return effects.exit("literalAutolinkHttp"), effects.exit("literalAutolink"), ok2(code3);
  }
}
function tokenizeWww(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), w2;
  }
  function w2(code3) {
    return code3 === 87 || code3 === 119 ? (effects.consume(code3), w3) : nok(code3);
  }
  function w3(code3) {
    return code3 === 87 || code3 === 119 ? (effects.consume(code3), dot) : nok(code3);
  }
  function dot(code3) {
    return code3 === 46 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : ok2(code3);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let hasUnderscoreInLastSegment, hasUnderscoreInLastLastSegment;
  return domain3;
  function domain3(code3) {
    return code3 === 38 ? effects.check(namedCharacterReference, done, punctuationContinuation)(code3) : code3 === 46 || code3 === 95 ? effects.check(punctuation, done, punctuationContinuation)(code3) : code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3) ? done(code3) : (effects.consume(code3), domain3);
  }
  function punctuationContinuation(code3) {
    return code3 === 46 ? (hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment, hasUnderscoreInLastSegment = void 0, effects.consume(code3), domain3) : (code3 === 95 && (hasUnderscoreInLastSegment = !0), effects.consume(code3), domain3);
  }
  function done(code3) {
    return !hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment ? ok2(code3) : nok(code3);
  }
}
function tokenizePath(effects, ok2) {
  let balance = 0;
  return inPath;
  function inPath(code3) {
    return code3 === 38 ? effects.check(namedCharacterReference, ok2, continuedPunctuation)(code3) : (code3 === 40 && balance++, code3 === 41 ? effects.check(punctuation, parenAtPathEnd, continuedPunctuation)(code3) : pathEnd(code3) ? ok2(code3) : trailingPunctuation(code3) ? effects.check(punctuation, ok2, continuedPunctuation)(code3) : (effects.consume(code3), inPath));
  }
  function continuedPunctuation(code3) {
    return effects.consume(code3), inPath;
  }
  function parenAtPathEnd(code3) {
    return balance--, balance < 0 ? ok2(code3) : continuedPunctuation(code3);
  }
}
function tokenizeNamedCharacterReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), inside;
  }
  function inside(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), inside) : code3 === 59 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function tokenizePunctuation(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), after;
  }
  function after(code3) {
    return trailingPunctuation(code3) ? (effects.consume(code3), after) : pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function trailingPunctuation(code3) {
  return code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 95 || code3 === 126;
}
function pathEnd(code3) {
  return code3 === null || code3 === 60 || markdownLineEndingOrSpace(code3);
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousHttp(code3) {
  return code3 === null || !asciiAlpha(code3);
}
function previousEmail(code3) {
  return code3 !== 47 && previousHttp(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length, result = !1;
  for (; index2--; ) {
    let token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = !0;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = !1;
      break;
    }
  }
  return events.length > 0 && !result && (events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), result;
}

// node_modules/micromark-extension-gfm-footnote/index.js
init_react();

// node_modules/micromark-extension-gfm-footnote/lib/syntax.js
init_react();
var indent = {
  tokenize: tokenizeIndent2,
  partial: !0
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  let self = this, index2 = self.events.length, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), labelStart;
  for (; index2--; ) {
    let token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link")
      break;
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced)
      return nok(code3);
    let id = normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }));
    return id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1)) ? nok(code3) : (effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), ok2(code3));
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length, labelStart;
  for (; index2--; )
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  events[index2 + 1][1].type = "data", events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  let call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }, marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++, marker.end.offset++, marker.end._bufferIndex++;
  let string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  }, chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  }, replacement = [
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    events[index2 + 3],
    events[index2 + 4],
    ["enter", marker, context],
    ["exit", marker, context],
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  return events.splice(index2, events.length - index2 + 1, ...replacement), events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  let self = this, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), size = 0, data;
  return start;
  function start(code3) {
    return effects.enter("gfmFootnoteCall"), effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), callStart;
  }
  function callStart(code3) {
    return code3 !== 94 ? nok(code3) : (effects.enter("gfmFootnoteCallMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallMarker"), effects.enter("gfmFootnoteCallString"), effects.enter("chunkString").contentType = "string", callData);
  }
  function callData(code3) {
    let token;
    return code3 === null || code3 === 91 || size++ > 999 ? nok(code3) : code3 === 93 ? data ? (effects.exit("chunkString"), token = effects.exit("gfmFootnoteCallString"), defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code3) : nok(code3)) : nok(code3) : (effects.consume(code3), markdownLineEndingOrSpace(code3) || (data = !0), code3 === 92 ? callEscape : callData);
  }
  function callEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, callData) : callData(code3);
  }
  function end(code3) {
    return effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), effects.exit("gfmFootnoteCall"), ok2;
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  let self = this, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), identifier, size = 0, data;
  return start;
  function start(code3) {
    return effects.enter("gfmFootnoteDefinition")._container = !0, effects.enter("gfmFootnoteDefinitionLabel"), effects.enter("gfmFootnoteDefinitionLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionLabelMarker"), labelStart;
  }
  function labelStart(code3) {
    return code3 === 94 ? (effects.enter("gfmFootnoteDefinitionMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionMarker"), effects.enter("gfmFootnoteDefinitionLabelString"), atBreak) : nok(code3);
  }
  function atBreak(code3) {
    let token;
    return code3 === null || code3 === 91 || size > 999 ? nok(code3) : code3 === 93 ? data ? (token = effects.exit("gfmFootnoteDefinitionLabelString"), identifier = normalizeIdentifier(self.sliceSerialize(token)), effects.enter("gfmFootnoteDefinitionLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionLabelMarker"), effects.exit("gfmFootnoteDefinitionLabel"), labelAfter) : nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), size++, atBreak) : (effects.enter("chunkString").contentType = "string", label(code3));
  }
  function label(code3) {
    return code3 === null || markdownLineEnding(code3) || code3 === 91 || code3 === 93 || size > 999 ? (effects.exit("chunkString"), atBreak(code3)) : (markdownLineEndingOrSpace(code3) || (data = !0), size++, effects.consume(code3), code3 === 92 ? labelEscape : label);
  }
  function labelEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, label) : label(code3);
  }
  function labelAfter(code3) {
    return code3 === 58 ? (effects.enter("definitionMarker"), effects.consume(code3), effects.exit("definitionMarker"), factorySpace(effects, done, "gfmFootnoteDefinitionWhitespace")) : nok(code3);
  }
  function done(code3) {
    return defined.includes(identifier) || defined.push(identifier), ok2(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 4 + 1);
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], !0).length === 4 ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm-strikethrough/index.js
init_react();

// node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
init_react();
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde, tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  return single == null && (single = !0), {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    for (; ++index2 < events.length; )
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        for (; open--; )
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence", events[open][1].type = "strikethroughSequence";
            let strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            }, text5 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            }, nextEvents = [
              ["enter", strikethrough2, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text5, context]
            ];
            splice(nextEvents, nextEvents.length, 0, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context)), splice(nextEvents, nextEvents.length, 0, [
              ["exit", text5, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough2, context]
            ]), splice(events, open - 1, index2 - open + 3, nextEvents), index2 = open + nextEvents.length - 2;
            break;
          }
      }
    for (index2 = -1; ++index2 < events.length; )
      events[index2][1].type === "strikethroughSequenceTemporary" && (events[index2][1].type = "data");
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    let previous3 = this.previous, events = this.events, size = 0;
    return start;
    function start(code3) {
      return previous3 === 126 && events[events.length - 1][1].type !== "characterEscape" ? nok(code3) : (effects.enter("strikethroughSequenceTemporary"), more(code3));
    }
    function more(code3) {
      let before = classifyCharacter(previous3);
      if (code3 === 126)
        return size > 1 ? nok(code3) : (effects.consume(code3), size++, more);
      if (size < 2 && !single)
        return nok(code3);
      let token = effects.exit("strikethroughSequenceTemporary"), after = classifyCharacter(code3);
      return token._open = !after || after === 2 && Boolean(before), token._close = !before || before === 2 && Boolean(after), ok2(code3);
    }
  }
}

// node_modules/micromark-extension-gfm-table/index.js
init_react();

// node_modules/micromark-extension-gfm-table/lib/syntax.js
init_react();
var gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolve: resolveTable
    }
  }
}, nextPrefixedOrBlank = {
  tokenize: tokenizeNextPrefixedOrBlank,
  partial: !0
};
function resolveTable(events, context) {
  let index2 = -1, inHead, inDelimiterRow, inRow, contentStart, contentEnd, cellStart, seenCellInRow;
  for (; ++index2 < events.length; ) {
    let token = events[index2][1];
    if (inRow && (token.type === "temporaryTableCellContent" && (contentStart = contentStart || index2, contentEnd = index2), (token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd)) {
      let content3 = {
        type: "tableContent",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      }, text5 = {
        type: "chunkText",
        start: content3.start,
        end: content3.end,
        contentType: "text"
      };
      events.splice(contentStart, contentEnd - contentStart + 1, ["enter", content3, context], ["enter", text5, context], ["exit", text5, context], ["exit", content3, context]), index2 -= contentEnd - contentStart - 3, contentStart = void 0, contentEnd = void 0;
    }
    if (events[index2][0] === "exit" && cellStart !== void 0 && cellStart + (seenCellInRow ? 0 : 1) < index2 && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index2 || events[cellStart][1].type !== "whitespace"))) {
      let cell = {
        type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
        start: events[cellStart][1].start,
        end: events[index2][1].end
      };
      events.splice(index2 + (token.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        cell,
        context
      ]), events.splice(cellStart, 0, ["enter", cell, context]), index2 += 2, cellStart = index2 + 1, seenCellInRow = !0;
    }
    token.type === "tableRow" && (inRow = events[index2][0] === "enter", inRow && (cellStart = index2 + 1, seenCellInRow = !1)), token.type === "tableDelimiterRow" && (inDelimiterRow = events[index2][0] === "enter", inDelimiterRow && (cellStart = index2 + 1, seenCellInRow = !1)), token.type === "tableHead" && (inHead = events[index2][0] === "enter");
  }
  return events;
}
function tokenizeTable(effects, ok2, nok) {
  let self = this, align = [], tableHeaderCount = 0, seenDelimiter, hasDash;
  return start;
  function start(code3) {
    return effects.enter("table")._align = align, effects.enter("tableHead"), effects.enter("tableRow"), code3 === 124 ? cellDividerHead(code3) : (tableHeaderCount++, effects.enter("temporaryTableCellContent"), inCellContentHead(code3));
  }
  function cellDividerHead(code3) {
    return effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), seenDelimiter = !0, cellBreakHead;
  }
  function cellBreakHead(code3) {
    return code3 === null || markdownLineEnding(code3) ? atRowEndHead(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceHead) : (seenDelimiter && (seenDelimiter = void 0, tableHeaderCount++), code3 === 124 ? cellDividerHead(code3) : (effects.enter("temporaryTableCellContent"), inCellContentHead(code3)));
  }
  function inWhitespaceHead(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceHead) : (effects.exit("whitespace"), cellBreakHead(code3));
  }
  function inCellContentHead(code3) {
    return code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3) ? (effects.exit("temporaryTableCellContent"), cellBreakHead(code3)) : (effects.consume(code3), code3 === 92 ? inCellContentEscapeHead : inCellContentHead);
  }
  function inCellContentEscapeHead(code3) {
    return code3 === 92 || code3 === 124 ? (effects.consume(code3), inCellContentHead) : inCellContentHead(code3);
  }
  function atRowEndHead(code3) {
    if (code3 === null)
      return nok(code3);
    effects.exit("tableRow"), effects.exit("tableHead");
    let originalInterrupt = self.interrupt;
    return self.interrupt = !0, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: !0
    }, function(code4) {
      return self.interrupt = originalInterrupt, effects.enter("tableDelimiterRow"), atDelimiterRowBreak(code4);
    }, function(code4) {
      return self.interrupt = originalInterrupt, nok(code4);
    })(code3);
  }
  function atDelimiterRowBreak(code3) {
    return code3 === null || markdownLineEnding(code3) ? rowEndDelimiter(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceDelimiter) : code3 === 45 ? (effects.enter("tableDelimiterFiller"), effects.consume(code3), hasDash = !0, align.push("none"), inFillerDelimiter) : code3 === 58 ? (effects.enter("tableDelimiterAlignment"), effects.consume(code3), effects.exit("tableDelimiterAlignment"), align.push("left"), afterLeftAlignment) : code3 === 124 ? (effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), atDelimiterRowBreak) : nok(code3);
  }
  function inWhitespaceDelimiter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceDelimiter) : (effects.exit("whitespace"), atDelimiterRowBreak(code3));
  }
  function inFillerDelimiter(code3) {
    return code3 === 45 ? (effects.consume(code3), inFillerDelimiter) : (effects.exit("tableDelimiterFiller"), code3 === 58 ? (effects.enter("tableDelimiterAlignment"), effects.consume(code3), effects.exit("tableDelimiterAlignment"), align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right", afterRightAlignment) : atDelimiterRowBreak(code3));
  }
  function afterLeftAlignment(code3) {
    return code3 === 45 ? (effects.enter("tableDelimiterFiller"), effects.consume(code3), hasDash = !0, inFillerDelimiter) : nok(code3);
  }
  function afterRightAlignment(code3) {
    return code3 === null || markdownLineEnding(code3) ? rowEndDelimiter(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceDelimiter) : code3 === 124 ? (effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), atDelimiterRowBreak) : nok(code3);
  }
  function rowEndDelimiter(code3) {
    return effects.exit("tableDelimiterRow"), !hasDash || tableHeaderCount !== align.length ? nok(code3) : code3 === null ? tableClose(code3) : effects.check(nextPrefixedOrBlank, tableClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: !0
    }, factorySpace(effects, bodyStart, "linePrefix", 4), tableClose))(code3);
  }
  function tableClose(code3) {
    return effects.exit("table"), ok2(code3);
  }
  function bodyStart(code3) {
    return effects.enter("tableBody"), rowStartBody(code3);
  }
  function rowStartBody(code3) {
    return effects.enter("tableRow"), code3 === 124 ? cellDividerBody(code3) : (effects.enter("temporaryTableCellContent"), inCellContentBody(code3));
  }
  function cellDividerBody(code3) {
    return effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), cellBreakBody;
  }
  function cellBreakBody(code3) {
    return code3 === null || markdownLineEnding(code3) ? atRowEndBody(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceBody) : code3 === 124 ? cellDividerBody(code3) : (effects.enter("temporaryTableCellContent"), inCellContentBody(code3));
  }
  function inWhitespaceBody(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceBody) : (effects.exit("whitespace"), cellBreakBody(code3));
  }
  function inCellContentBody(code3) {
    return code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3) ? (effects.exit("temporaryTableCellContent"), cellBreakBody(code3)) : (effects.consume(code3), code3 === 92 ? inCellContentEscapeBody : inCellContentBody);
  }
  function inCellContentEscapeBody(code3) {
    return code3 === 92 || code3 === 124 ? (effects.consume(code3), inCellContentBody) : inCellContentBody(code3);
  }
  function atRowEndBody(code3) {
    return effects.exit("tableRow"), code3 === null ? tableBodyClose(code3) : effects.check(nextPrefixedOrBlank, tableBodyClose, effects.attempt({
      tokenize: tokenizeRowEnd,
      partial: !0
    }, factorySpace(effects, rowStartBody, "linePrefix", 4), tableBodyClose))(code3);
  }
  function tableBodyClose(code3) {
    return effects.exit("tableBody"), tableClose(code3);
  }
  function tokenizeRowEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), factorySpace(effects2, prefixed, "linePrefix");
    }
    function prefixed(code3) {
      if (self.parser.lazy[self.now().line] || code3 === null || markdownLineEnding(code3))
        return nok2(code3);
      let tail = self.events[self.events.length - 1];
      return !self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? nok2(code3) : (self._gfmTableDynamicInterruptHack = !0, effects2.check(self.parser.constructs.flow, function(code4) {
        return self._gfmTableDynamicInterruptHack = !1, nok2(code4);
      }, function(code4) {
        return self._gfmTableDynamicInterruptHack = !1, ok3(code4);
      })(code3));
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code3) {
    return effects.enter("check"), effects.consume(code3), whitespace2;
  }
  function whitespace2(code3) {
    return code3 === -1 || code3 === 32 ? (effects.consume(code3), size++, size === 4 ? ok2 : whitespace2) : code3 === null || markdownLineEndingOrSpace(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm-task-list-item/index.js
init_react();

// node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
init_react();
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
}, gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok2, nok) {
  let self = this;
  return open;
  function open(code3) {
    return self.previous !== null || !self._gfmTasklistFirstContentOfListItem ? nok(code3) : (effects.enter("taskListCheck"), effects.enter("taskListCheckMarker"), effects.consume(code3), effects.exit("taskListCheckMarker"), inside);
  }
  function inside(code3) {
    return markdownLineEndingOrSpace(code3) ? (effects.enter("taskListCheckValueUnchecked"), effects.consume(code3), effects.exit("taskListCheckValueUnchecked"), close) : code3 === 88 || code3 === 120 ? (effects.enter("taskListCheckValueChecked"), effects.consume(code3), effects.exit("taskListCheckValueChecked"), close) : nok(code3);
  }
  function close(code3) {
    return code3 === 93 ? (effects.enter("taskListCheckMarker"), effects.consume(code3), effects.exit("taskListCheckMarker"), effects.exit("taskListCheck"), effects.check({
      tokenize: spaceThenNonSpace
    }, ok2, nok)) : nok(code3);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    let tail = self.events[self.events.length - 1];
    return (tail && tail[1].type === "whitespace" || markdownLineEnding(code3)) && code3 !== null ? ok2(code3) : nok(code3);
  }
}

// node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}

// node_modules/mdast-util-gfm/index.js
init_react();

// node_modules/mdast-util-gfm/lib/index.js
init_react();

// node_modules/mdast-util-gfm-autolink-literal/index.js
init_react();

// node_modules/ccount/index.js
init_react();
function ccount(value, character) {
  let source = String(value);
  if (typeof character != "string")
    throw new TypeError("Expected character");
  let count = 0, index2 = source.indexOf(character);
  for (; index2 !== -1; )
    count++, index2 = source.indexOf(character, index2 + character.length);
  return count;
}

// node_modules/mdast-util-find-and-replace/index.js
init_react();

// node_modules/mdast-util-find-and-replace/lib/index.js
init_react();
var import_escape_string_regexp = __toESM(require("escape-string-regexp"), 1);
var own10 = {}.hasOwnProperty, findAndReplace = function(tree, find2, replace2, options) {
  let settings, schema;
  typeof find2 == "string" || find2 instanceof RegExp ? (schema = [[find2, replace2]], settings = options) : (schema = find2, settings = replace2), settings || (settings = {});
  let ignored = convert(settings.ignore || []), pairs = toPairs(schema), pairIndex = -1;
  for (; ++pairIndex < pairs.length; )
    visitParents(tree, "text", visitor);
  return tree;
  function visitor(node, parents) {
    let index2 = -1, grandparent;
    for (; ++index2 < parents.length; ) {
      let parent = parents[index2];
      if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent))
        return;
      grandparent = parent;
    }
    if (grandparent)
      return handler(node, parents);
  }
  function handler(node, parents) {
    let parent = parents[parents.length - 1], find3 = pairs[pairIndex][0], replace3 = pairs[pairIndex][1], start = 0, index2 = parent.children.indexOf(node), change = !1, nodes = [], position2;
    find3.lastIndex = 0;
    let match = find3.exec(node.value);
    for (; match; ) {
      position2 = match.index;
      let matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node]
      }, value = replace3(...match, matchObject);
      if (typeof value == "string" && (value = value.length > 0 ? { type: "text", value } : void 0), value !== !1 && (start !== position2 && nodes.push({
        type: "text",
        value: node.value.slice(start, position2)
      }), Array.isArray(value) ? nodes.push(...value) : value && nodes.push(value), start = position2 + match[0].length, change = !0), !find3.global)
        break;
      match = find3.exec(node.value);
    }
    return change ? (start < node.value.length && nodes.push({ type: "text", value: node.value.slice(start) }), parent.children.splice(index2, 1, ...nodes)) : nodes = [node], index2 + nodes.length;
  }
};
function toPairs(schema) {
  let result = [];
  if (typeof schema != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(schema)) {
    let index2 = -1;
    for (; ++index2 < schema.length; )
      result.push([
        toExpression(schema[index2][0]),
        toFunction(schema[index2][1])
      ]);
  } else {
    let key;
    for (key in schema)
      own10.call(schema, key) && result.push([toExpression(key), toFunction(schema[key])]);
  }
  return result;
}
function toExpression(find2) {
  return typeof find2 == "string" ? new RegExp((0, import_escape_string_regexp.default)(find2), "g") : find2;
}
function toFunction(replace2) {
  return typeof replace2 == "function" ? replace2 : () => replace2;
}

// node_modules/mdast-util-gfm-autolink-literal/index.js
var inConstruct = "phrasing", notInConstruct = ["autolink", "link", "image", "label"], gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
}, gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
  ]
};
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  let node = this.stack[this.stack.length - 1];
  node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(tree, [
    [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
    [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
  ], { ignore: ["link", "linkReference"] });
}
function findUrl(_, protocol, domain3, path2, match) {
  let prefix = "";
  if (!previous2(match) || (/^w/i.test(protocol) && (domain3 = protocol + domain3, protocol = "", prefix = "http://"), !isCorrectDomain(domain3)))
    return !1;
  let parts = splitUrl(domain3 + path2);
  if (!parts[0])
    return !1;
  let result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  return parts[1] ? [result, { type: "text", value: parts[1] }] : result;
}
function findEmail(_, atext, label, match) {
  return !previous2(match, !0) || /[_-\d]$/.test(label) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain3) {
  let parts = domain3.split(".");
  return !(parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2])));
}
function splitUrl(url) {
  let trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url), closingParenIndex, openingParens, closingParens, trail;
  if (trailExec)
    for (url = url.slice(0, trailExec.index), trail = trailExec[0], closingParenIndex = trail.indexOf(")"), openingParens = ccount(url, "("), closingParens = ccount(url, ")"); closingParenIndex !== -1 && openingParens > closingParens; )
      url += trail.slice(0, closingParenIndex + 1), trail = trail.slice(closingParenIndex + 1), closingParenIndex = trail.indexOf(")"), closingParens++;
  return [url, trail];
}
function previous2(match, email) {
  let code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && (!email || code3 !== 47);
}

// node_modules/mdast-util-gfm-footnote/index.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/association.js
init_react();
function association(node) {
  return node.label || !node.identifier ? node.label || "" : decodeString(node.identifier);
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/track.js
init_react();
function track(options_) {
  let options = options_ || {}, now = options.now || {}, lineShift = options.lineShift || 0, line = now.line || 1, column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    let chunks = value.split(/\r?\n|\r/g), tail = chunks[chunks.length - 1];
    return line += chunks.length - 1, column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift, value;
  }
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context, safeOptions) {
  let indexStack = context.indexStack, children = parent.children || [], tracker = track(safeOptions), results = [], index2 = -1;
  for (indexStack.push(-1); ++index2 < children.length; ) {
    let child = children[index2];
    indexStack[indexStack.length - 1] = index2, results.push(tracker.move(context.handle(child, parent, context, __spreadValues({
      before: `
`,
      after: `
`
    }, tracker.current())))), child.type !== "list" && (context.bulletLastUsed = void 0), index2 < children.length - 1 && results.push(tracker.move(between(child, children[index2 + 1])));
  }
  return indexStack.pop(), results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    for (; index3--; ) {
      let result = context.join[index3](left, right, parent, context);
      if (result === !0 || result === 1)
        break;
      if (typeof result == "number")
        return `
`.repeat(1 + result);
      if (result === !1)
        return `

<!---->

`;
    }
    return `

`;
  }
}

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
init_react();
var eol = /\r?\n|\r/g;
function indentLines(value, map) {
  let result = [], start = 0, line = 0, match;
  for (; match = eol.exec(value); )
    one3(value.slice(start, match.index)), result.push(match[0]), start = match.index + match[0].length, line++;
  return one3(value.slice(start)), result.join("");
  function one3(value2) {
    result.push(map(value2, line, !value2));
  }
}

// node_modules/mdast-util-to-markdown/lib/util/safe.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
init_react();
function patternCompile(pattern) {
  if (!pattern._compiled) {
    let before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
  }
  return pattern._compiled;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
init_react();
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, !0) && !listInScope(stack, pattern.notInConstruct, !1);
}
function listInScope(stack, list3, none) {
  if (!list3)
    return none;
  typeof list3 == "string" && (list3 = [list3]);
  let index2 = -1;
  for (; ++index2 < list3.length; )
    if (stack.includes(list3[index2]))
      return !0;
  return !1;
}

// node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(context, input, config) {
  let value = (config.before || "") + (input || "") + (config.after || ""), positions = [], result = [], infos = {}, index2 = -1;
  for (; ++index2 < context.unsafe.length; ) {
    let pattern = context.unsafe[index2];
    if (!patternInScope(context.stack, pattern))
      continue;
    let expression = patternCompile(pattern), match;
    for (; match = expression.exec(value); ) {
      let before = "before" in pattern || Boolean(pattern.atBreak), after = "after" in pattern, position2 = match.index + (before ? match[1].length : 0);
      positions.includes(position2) ? (infos[position2].before && !before && (infos[position2].before = !1), infos[position2].after && !after && (infos[position2].after = !1)) : (positions.push(position2), infos[position2] = { before, after });
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0, end = value.length - (config.after ? config.after.length : 0);
  for (index2 = -1; ++index2 < positions.length; ) {
    let position2 = positions[index2];
    position2 < start || position2 >= end || position2 + 1 < end && positions[index2 + 1] === position2 + 1 && infos[position2].after && !infos[position2 + 1].before && !infos[position2 + 1].after || positions[index2 - 1] === position2 - 1 && infos[position2].before && !infos[position2 - 1].before && !infos[position2 - 1].after || (start !== position2 && result.push(escapeBackslashes(value.slice(start, position2), "\\")), start = position2, /[!-/:-@[-`{-~]/.test(value.charAt(position2)) && (!config.encode || !config.encode.includes(value.charAt(position2))) ? result.push("\\") : (result.push("&#x" + value.charCodeAt(position2).toString(16).toUpperCase() + ";"), start++));
  }
  return result.push(escapeBackslashes(value.slice(start, end), config.after)), result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  let expression = /\\(?=[!-/:-@[-`{-~])/g, positions = [], results = [], whole = value + after, index2 = -1, start = 0, match;
  for (; match = expression.exec(whole); )
    positions.push(match.index);
  for (; ++index2 < positions.length; )
    start !== positions[index2] && results.push(value.slice(start, positions[index2])), results.push("\\"), start = positions[index2];
  return results.push(value.slice(start)), results.join("");
}

// node_modules/mdast-util-gfm-footnote/index.js
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, token);
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  return footnoteReference2.peek = footnoteReferencePeek, {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference: footnoteReference2 }
  };
  function footnoteReference2(node, _, context, safeOptions) {
    let tracker = track(safeOptions), value = tracker.move("[^"), exit3 = context.enter("footnoteReference"), subexit = context.enter("reference");
    return value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    }))), subexit(), exit3(), value += tracker.move("]"), value;
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node, _, context, safeOptions) {
    let tracker = track(safeOptions), value = tracker.move("[^"), exit3 = context.enter("footnoteDefinition"), subexit = context.enter("label");
    return value += tracker.move(safe(context, association(node), __spreadProps(__spreadValues({}, tracker.current()), {
      before: value,
      after: "]"
    }))), subexit(), value += tracker.move("]:" + (node.children && node.children.length > 0 ? " " : "")), tracker.shift(4), value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map)), exit3(), value;
    function map(line, index2, blank) {
      return index2 ? (blank ? "" : "    ") + line : line;
    }
  }
}

// node_modules/mdast-util-gfm-strikethrough/index.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
init_react();
function containerPhrasing(parent, context, safeOptions) {
  let indexStack = context.indexStack, children = parent.children || [], results = [], index2 = -1, before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  for (; ++index2 < children.length; ) {
    let child = children[index2], after;
    if (indexStack[indexStack.length - 1] = index2, index2 + 1 < children.length) {
      let handle = context.handle.handlers[children[index2 + 1].type];
      handle && handle.peek && (handle = handle.peek), after = handle ? handle(children[index2 + 1], parent, context, __spreadValues({
        before: "",
        after: ""
      }, tracker.current())).charAt(0) : "";
    } else
      after = safeOptions.after;
    results.length > 0 && (before === "\r" || before === `
`) && child.type === "html" && (results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " "), before = " ", tracker = track(safeOptions), tracker.move(results.join(""))), results.push(tracker.move(context.handle(child, parent, context, __spreadProps(__spreadValues({}, tracker.current()), {
      before,
      after
    })))), before = results[results.length - 1].slice(-1);
  }
  return indexStack.pop(), results.join("");
}

// node_modules/mdast-util-gfm-strikethrough/index.js
var gfmStrikethroughFromMarkdown = {
  canContainEols: ["delete"],
  enter: { strikethrough: enterStrikethrough },
  exit: { strikethrough: exitStrikethrough }
}, gfmStrikethroughToMarkdown = {
  unsafe: [{ character: "~", inConstruct: "phrasing" }],
  handlers: { delete: handleDelete }
};
handleDelete.peek = peekDelete;
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _, context, safeOptions) {
  let tracker = track(safeOptions), exit3 = context.enter("emphasis"), value = tracker.move("~~");
  return value += containerPhrasing(node, context, __spreadProps(__spreadValues({}, tracker.current()), {
    before: value,
    after: "~"
  })), value += tracker.move("~~"), exit3(), value;
}
function peekDelete() {
  return "~";
}

// node_modules/mdast-util-gfm-table/index.js
init_react();

// node_modules/mdast-util-gfm-table/lib/index.js
init_react();

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
init_react();
inlineCode2.peek = inlineCodePeek;
function inlineCode2(node, _, context) {
  let value = node.value || "", sequence = "`", index2 = -1;
  for (; new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value); )
    sequence += "`";
  for (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value)) && (value = " " + value + " "); ++index2 < context.unsafe.length; ) {
    let pattern = context.unsafe[index2], expression = patternCompile(pattern), match;
    if (!!pattern.atBreak)
      for (; match = expression.exec(value); ) {
        let position2 = match.index;
        value.charCodeAt(position2) === 10 && value.charCodeAt(position2 - 1) === 13 && position2--, value = value.slice(0, position2) + " " + value.slice(match.index + 1);
      }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/markdown-table/index.js
init_react();
function markdownTable(table2, options = {}) {
  let align = (options.align || []).concat(), stringLength = options.stringLength || defaultStringLength, alignments = [], cellMatrix = [], sizeMatrix = [], longestCellByColumn = [], mostCellsPerRow = 0, rowIndex = -1;
  for (; ++rowIndex < table2.length; ) {
    let row2 = [], sizes2 = [], columnIndex2 = -1;
    for (table2[rowIndex].length > mostCellsPerRow && (mostCellsPerRow = table2[rowIndex].length); ++columnIndex2 < table2[rowIndex].length; ) {
      let cell = serialize(table2[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== !1) {
        let size = stringLength(cell);
        sizes2[columnIndex2] = size, (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) && (longestCellByColumn[columnIndex2] = size);
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2, sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align == "object" && "length" in align)
    for (; ++columnIndex < mostCellsPerRow; )
      alignments[columnIndex] = toAlignment(align[columnIndex]);
  else {
    let code3 = toAlignment(align);
    for (; ++columnIndex < mostCellsPerRow; )
      alignments[columnIndex] = code3;
  }
  columnIndex = -1;
  let row = [], sizes = [];
  for (; ++columnIndex < mostCellsPerRow; ) {
    let code3 = alignments[columnIndex], before = "", after = "";
    code3 === 99 ? (before = ":", after = ":") : code3 === 108 ? before = ":" : code3 === 114 && (after = ":");
    let size = options.alignDelimiters === !1 ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length), cell = before + "-".repeat(size) + after;
    options.alignDelimiters !== !1 && (size = before.length + size + after.length, size > longestCellByColumn[columnIndex] && (longestCellByColumn[columnIndex] = size), sizes[columnIndex] = size), row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row), sizeMatrix.splice(1, 0, sizes), rowIndex = -1;
  let lines = [];
  for (; ++rowIndex < cellMatrix.length; ) {
    let row2 = cellMatrix[rowIndex], sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    let line = [];
    for (; ++columnIndex < mostCellsPerRow; ) {
      let cell = row2[columnIndex] || "", before = "", after = "";
      if (options.alignDelimiters !== !1) {
        let size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0), code3 = alignments[columnIndex];
        code3 === 114 ? before = " ".repeat(size) : code3 === 99 ? size % 2 ? (before = " ".repeat(size / 2 + 0.5), after = " ".repeat(size / 2 - 0.5)) : (before = " ".repeat(size / 2), after = before) : after = " ".repeat(size);
      }
      options.delimiterStart !== !1 && !columnIndex && line.push("|"), options.padding !== !1 && !(options.alignDelimiters === !1 && cell === "") && (options.delimiterStart !== !1 || columnIndex) && line.push(" "), options.alignDelimiters !== !1 && line.push(before), line.push(cell), options.alignDelimiters !== !1 && line.push(after), options.padding !== !1 && line.push(" "), (options.delimiterEnd !== !1 || columnIndex !== mostCellsPerRow - 1) && line.push("|");
    }
    lines.push(options.delimiterEnd === !1 ? line.join("").replace(/ +$/, "") : line.join(""));
  }
  return lines.join(`
`);
}
function serialize(value) {
  return value == null ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  let code3 = typeof value == "string" ? value.codePointAt(0) : 0;
  return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
}

// node_modules/mdast-util-gfm-table/lib/index.js
var gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit2,
    tableHeader: exit2,
    tableRow: exit2
  }
};
function enterTable(token) {
  let align = token._align;
  this.enter({
    type: "table",
    align: align.map((d) => d === "none" ? null : d),
    children: []
  }, token), this.setData("inTable", !0);
}
function exitTable(token) {
  this.exit(token), this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  this.getData("inTable") && (value = value.replace(/\\([\\|])/g, replace));
  let node = this.stack[this.stack.length - 1];
  node.value = value, this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  let settings = options || {}, padding = settings.tableCellPadding, alignDelimiters = settings.tablePipeAlign, stringLength = settings.stringLength, around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _, context, safeOptions) {
    return serializeData(handleTableAsData(node, context, safeOptions), node.align);
  }
  function handleTableRow(node, _, context, safeOptions) {
    let row = handleTableRowAsData(node, context, safeOptions), value = serializeData([row]);
    return value.slice(0, value.indexOf(`
`));
  }
  function handleTableCell(node, _, context, safeOptions) {
    let exit3 = context.enter("tableCell"), subexit = context.enter("phrasing"), value = containerPhrasing(node, context, __spreadProps(__spreadValues({}, safeOptions), {
      before: around,
      after: around
    }));
    return subexit(), exit3(), value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  function handleTableAsData(node, context, safeOptions) {
    let children = node.children, index2 = -1, result = [], subexit = context.enter("table");
    for (; ++index2 < children.length; )
      result[index2] = handleTableRowAsData(children[index2], context, safeOptions);
    return subexit(), result;
  }
  function handleTableRowAsData(node, context, safeOptions) {
    let children = node.children, index2 = -1, result = [], subexit = context.enter("tableRow");
    for (; ++index2 < children.length; )
      result[index2] = handleTableCell(children[index2], node, context, safeOptions);
    return subexit(), result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode2(node, parent, context);
    return context.stack.includes("tableCell") && (value = value.replace(/\|/g, "\\$&")), value;
  }
}

// node_modules/mdast-util-gfm-task-list-item/index.js
init_react();

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
init_react();

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
init_react();
function checkBullet(context) {
  let marker = context.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-")
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
init_react();
function checkListItemIndent(context) {
  let style2 = context.options.listItemIndent || "tab";
  if (style2 === 1 || style2 === "1")
    return "one";
  if (style2 !== "tab" && style2 !== "one" && style2 !== "mixed")
    throw new Error("Cannot serialize items with `" + style2 + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  return style2;
}

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem2(node, parent, context, safeOptions) {
  let listItemIndent = checkListItemIndent(context), bullet = context.bulletCurrent || checkBullet(context);
  parent && parent.type === "list" && parent.ordered && (bullet = (typeof parent.start == "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === !1 ? 0 : parent.children.indexOf(node)) + bullet);
  let size = bullet.length + 1;
  (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) && (size = Math.ceil(size / 4) * 4);
  let tracker = track(safeOptions);
  tracker.move(bullet + " ".repeat(size - bullet.length)), tracker.shift(size);
  let exit3 = context.enter("listItem"), value = indentLines(containerFlow(node, context, tracker.current()), map);
  return exit3(), value;
  function map(line, index2, blank) {
    return index2 ? (blank ? "" : " ".repeat(size)) + line : (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/mdast-util-gfm-task-list-item/index.js
var gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
}, gfmTaskListItemToMarkdown = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: listItemWithTaskListItem }
};
function exitCheck(token) {
  let node = this.stack[this.stack.length - 2];
  node.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  let parent = this.stack[this.stack.length - 2], node = this.stack[this.stack.length - 1], siblings = parent.children, head = node.children[0], index2 = -1, firstParaghraph;
  if (parent && parent.type === "listItem" && typeof parent.checked == "boolean" && head && head.type === "text") {
    for (; ++index2 < siblings.length; ) {
      let sibling = siblings[index2];
      if (sibling.type === "paragraph") {
        firstParaghraph = sibling;
        break;
      }
    }
    firstParaghraph === node && (head.value = head.value.slice(1), head.value.length === 0 ? node.children.shift() : node.position && head.position && typeof head.position.start.offset == "number" && (head.position.start.column++, head.position.start.offset++, node.position.start = Object.assign({}, head.position.start)));
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context, safeOptions) {
  let head = node.children[0], checkable = typeof node.checked == "boolean" && head && head.type === "paragraph", checkbox = "[" + (node.checked ? "x" : " ") + "] ", tracker = track(safeOptions);
  checkable && tracker.move(checkbox);
  let value = listItem2(node, parent, context, __spreadValues(__spreadValues({}, safeOptions), tracker.current()));
  return checkable && (value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)), value;
  function check($0) {
    return $0 + checkbox;
  }
}

// node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}

// node_modules/remark-gfm/index.js
function remarkGfm(options = {}) {
  let data = this.data();
  add("micromarkExtensions", gfm(options)), add("fromMarkdownExtensions", gfmFromMarkdown()), add("toMarkdownExtensions", gfmToMarkdown(options));
  function add(field, value) {
    (data[field] ? data[field] : data[field] = []).push(value);
  }
}

// app/components/QuestionMarkdown/QuestionMarkdown.Styled.jsx
init_react();
var import_styled_components23 = __toESM(require("styled-components"));
var QuestionMarkdown2 = (0, import_styled_components23.default)(ReactMarkdown)`
  color: var(--color-dark-50);
  font-family: "Nunito";
  font-size: 14px;
  letter-spacing: 0.6px;
  line-height: 1.71;
  overflow-wrap: break-word;
  word-wrap: break-word;
  
  a {
    color: var(--color-secondary);
  }
  p {
    overflow-wrap: anywhere;
  }
`;

// app/components/QuestionMarkdown/QuestionMarkdown.jsx
function QuestionMarkdown3(props) {
  return /* @__PURE__ */ import_react37.default.createElement(QuestionMarkdown2, {
    children: props.source,
    components: {
      link: MarkdownLinkRenderer_default
    },
    remarkPlugins: [remarkGfm]
  });
}
QuestionMarkdown3.propTypes = {
  source: import_prop_types22.default.string.isRequired
};
var QuestionMarkdown_default = QuestionMarkdown3;

// app/components/CommentInput/CommentInputText.jsx
var CommentInputText2 = (0, import_react38.forwardRef)((props, ref) => {
  let initialState2 = {
    inputValue: props.inputValue,
    commentLength: props.inputValue ? props.inputValue.trim().length : 0,
    textAreaRows: 2,
    placeholder: COMMENT_INPUT_PLACEHOLDER
  }, [commentInput, setCommentInput] = (0, import_react38.useState)(initialState2), [canShowPreview, setCanShowPreview] = (0, import_react38.useState)(!1);
  (0, import_react38.useEffect)(() => {
    setCommentInput(__spreadProps(__spreadValues({}, commentInput), {
      inputValue: props.inputValue,
      commentLength: props.inputValue ? props.inputValue.trim().length : 0
    }));
  }, [props.inputValue]), (0, import_react38.useEffect)(() => {
    setCanShowPreview(commentInput.commentLength > MIN_COMMENT_PREVIEW_LENGTH);
  }, [commentInput.commentLength]), (0, import_react38.useImperativeHandle)(ref, () => ({
    resetInputText() {
      setCommentInput(__spreadProps(__spreadValues({}, commentInput), {
        inputValue: "",
        commentLength: 0
      }));
    }
  }));
  let onCommentChange = (event) => {
    let rawText = event.target.value, commentLength = rawText.trim().length, inputValue = rawText.replace(/^\s+/, "");
    setCommentInput({
      inputValue,
      commentLength,
      textAreaRows: 2,
      placeholder: COMMENT_INPUT_PLACEHOLDER
    }), props.onInputChange(inputValue);
  }, handlePreviewChange = (type) => {
    setCommentInput(__spreadProps(__spreadValues({}, commentInput), {
      isShowPreview: !!(type === "preview" && canShowPreview)
    }));
  }, renderPreviewButton = () => /* @__PURE__ */ import_react38.default.createElement(QuestionInputTextPreview, null, /* @__PURE__ */ import_react38.default.createElement(QuestionInputTab, {
    isNewComment: props.isNewComment,
    selected: !commentInput.isShowPreview
  }, /* @__PURE__ */ import_react38.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    onClick: () => handlePreviewChange("write"),
    className: "preview-button"
  }, "Write")), /* @__PURE__ */ import_react38.default.createElement(QuestionInputTab, {
    isNewComment: props.isNewComment,
    selected: commentInput.isShowPreview,
    disabled: !canShowPreview
  }, /* @__PURE__ */ import_react38.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    onClick: () => handlePreviewChange("preview"),
    className: "preview-button",
    disabled: !canShowPreview
  }, "Preview"))), renderCommentPreview = (inputValue) => /* @__PURE__ */ import_react38.default.createElement(QuestionInputTextPreviewDiv, {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react38.default.createElement(QuestionMarkdown_default, {
    source: inputValue
  })), renderInputArea = () => commentInput.isShowPreview && commentInput.commentLength > MIN_COMMENT_PREVIEW_LENGTH ? renderCommentPreview(commentInput.inputValue) : /* @__PURE__ */ import_react38.default.createElement(CommentTextArea_default, {
    inputValue: commentInput.inputValue,
    onCommentChange,
    textAreaRows: commentInput.textAreaRows,
    commentLength: commentInput.commentLength,
    placeholder: "Add a comment..."
  });
  return /* @__PURE__ */ import_react38.default.createElement(CommentInputText, null, renderPreviewButton(commentInput), renderInputArea(commentInput));
});
CommentInputText2.propTypes = {
  inputValue: import_prop_types23.default.string,
  isNewComment: import_prop_types23.default.bool,
  onInputChange: import_prop_types23.default.func.isRequired
};
CommentInputText2.defaultProps = {
  inputValue: "",
  isNewComment: !1
};
var CommentInputText_default = CommentInputText2;

// app/utils/actions.js
init_react();
var ACTIONS = {
  PINNIN: "pin",
  VOTE_QUESTION: "vote_question",
  CREATE_QUESTION_ANSWER: "create_question_answer",
  UPDATE_QUESTION_ANSWER: "edit_question_answer",
  DELETE_ANSWER: "delete_answer",
  ASSIGN_QUESTION: "assign_question",
  CREATE_COMMENT: "create_comment",
  UPDATE_COMMENT: "update_comment",
  VOTE_COMMENT: "vote_comment",
  DELETE_COMMENT: "delete_commet",
  APPROVED_COMMENT: "approved_comment",
  SCORE_ANSWER: "score_answer",
  DELETE_SCORE: "delete_answer_score",
  ENABLED_ACTION: "enable/disable",
  CREATE_QUESTION_ANSWERBOT: "create_question_answerbot",
  UPDATE_FEEDBACK_ANSWERBOT: "update_feedback_answerbot",
  UPDATE_POST_ANSWERBOT: "update_post_answerbot"
}, actions_default = ACTIONS;

// app/components/QuestionComment/QuestionComment.jsx
function QuestionComment(_a) {
  var _b = _a, { commentData, onSubmitSuccess } = _b, props = __objRest(_b, ["commentData", "onSubmitSuccess"]);
  let submit = (0, import_react40.useSubmit)(), profile = useUser_default(), [isEditing, setIsEditing] = (0, import_react39.useState)(!1), [isDeleting, setIsDeleting] = (0, import_react39.useState)(!1), [commentHasChanged, setCommentHasChanged] = (0, import_react39.useState)(!1), [editIcon, setEditIcon] = (0, import_react39.useState)(ic_edit_default), [deleteIcon, setDeleteIcon] = (0, import_react39.useState)(ic_delete_default), [updatedComment, setUpdatedComment] = (0, import_react39.useState)(""), [upVote, setUpVote] = (0, import_react39.useState)(commentData.votes === void 0 ? 0 : Number(commentData.votes)), [upVoteActive, setUpVoteActive] = (0, import_react39.useState)(commentData.has_upvoted === void 0 ? !1 : commentData.has_upvoted), [downVoteActive, setDownVoteActive] = (0, import_react39.useState)(commentData.has_downvoted === void 0 ? !1 : commentData.has_downvoted), [searchParams] = (0, import_react40.useSearchParams)(), isAnswer = props.hasCommentAsAnswer, {
    state: showCommentOptionsState,
    setState: setShowCommentOptions,
    wrapperRef
  } = useClickOutside_default(isEditing || isDeleting);
  function voteComment(comment_id, value) {
    let data = new FormData();
    data.set("action", actions_default.VOTE_COMMENT), data.set("comment_id", comment_id), data.set("value", value);
    let url = `/questions/${commentData.questionId}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 });
  }
  function upVoteF() {
    voteComment(commentData.id, 1), downVoteActive ? (setDownVoteActive(!1), setUpVoteActive(!0), setUpVote(upVote + 2)) : upVoteActive ? (setUpVoteActive(!1), setUpVote(upVote - 1)) : (setUpVoteActive(!0), setUpVote(upVote + 1));
  }
  function downVoteF() {
    voteComment(commentData.id, -1), upVoteActive ? (setUpVoteActive(!1), setDownVoteActive(!0), setUpVote(upVote - 2)) : downVoteActive ? (setDownVoteActive(!1), setUpVote(upVote + 1)) : (setDownVoteActive(!0), setUpVote(upVote - 1));
  }
  function markAsAnswer(check) {
    let data = new FormData();
    data.set("action", actions_default.APPROVED_COMMENT), data.set("params", JSON.stringify({ questionId: commentData.questionId, commentId: commentData.id, checked: check }));
    let url = `/questions/${commentData.questionId}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 });
  }
  let onSubmit = () => {
    let newCommentData = {
      commentId: commentData.id,
      comment: updatedComment,
      accessToken: profile.accessToken,
      userEmail: profile.email
    };
    setUpdatedComment(""), setIsEditing(!1), setEditIcon(ic_edit_default);
    let data = new FormData();
    data.set("action", actions_default.UPDATE_COMMENT), data.set("newCommentData", JSON.stringify(newCommentData));
    let url = `/questions/${commentData.questionId}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 });
  }, changeEditState = () => {
    setIsEditing(!isEditing), setIsDeleting(!1), setEditIcon(isEditing ? ic_edit_default : ic_edit_selected_default), setDeleteIcon(ic_delete_default);
  }, changeDeleteState = () => {
    setIsDeleting(!isDeleting), setIsEditing(!1), setDeleteIcon(isDeleting ? ic_delete_default : ic_delete_selected_default), setEditIcon(ic_edit_default);
  }, handleDeleteComment = () => {
    let data = new FormData();
    data.set("action", actions_default.DELETE_COMMENT), data.set("comment_id", commentData.id);
    let url = `/questions/${commentData.questionId}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "delete", action: url, replace: !0 });
  }, handleCommentUpdate = (comment2) => {
    let commentChanged = comment2 !== commentData.comment && comment2.length > 2;
    setCommentHasChanged(commentChanged), setUpdatedComment(comment2);
  }, renderArrowIcon = (direction) => direction === "up" ? /* @__PURE__ */ import_react39.default.createElement(ArrowUp, {
    upVoteActive
  }, /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsArrowUpCircle, {
    size: "1.8em",
    color: upVoteActive ? "var(--color-green)" : "var(--color-dark-metadata)"
  })) : /* @__PURE__ */ import_react39.default.createElement(ArrowDown, {
    downVoteActive
  }, /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsArrowDownCircle, {
    size: "1.8em",
    color: downVoteActive ? "var(--color-primary)" : "var(--color-dark-metadata)"
  })), renderCommentOptions = () => /* @__PURE__ */ import_react39.default.createElement("div", {
    ref: wrapperRef
  }, showCommentOptionsState === !0 ? /* @__PURE__ */ import_react39.default.createElement("div", null, /* @__PURE__ */ import_react39.default.createElement("img", {
    src: editIcon,
    alt: "Edit comment",
    onClick: () => changeEditState()
  }), /* @__PURE__ */ import_react39.default.createElement("img", {
    src: deleteIcon,
    alt: "Delete comment",
    onClick: changeDeleteState
  })) : /* @__PURE__ */ import_react39.default.createElement("div", null, /* @__PURE__ */ import_react39.default.createElement(QuestionCommentDotsWrapper, {
    onClick: () => setShowCommentOptions(!0)
  }, /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsThreeDotsVertical, {
    size: "1.3em"
  })))), renderButtonOption = () => props.hasCommentAsAnswer && commentData.approvedBy !== null ? /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsCheckCircle, {
    color: "green",
    size: "20px"
  }) : /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsCheckCircle, {
    color: "var(--color-dark-25)",
    size: "20px"
  }), renderNotAdminOption = () => props.hasCommentAsAnswer && commentData.approvedBy !== null ? /* @__PURE__ */ import_react39.default.createElement(import_bs2.BsCheckCircle, {
    color: "green",
    size: "20px"
  }) : null, renderToolTip = (msg) => /* @__PURE__ */ import_react39.default.createElement(CommentAsAnswerToolTipText, null, msg), renderAdminToolTips = () => !props.hasAnswer && !props.hasCommentAsAnswer ? renderToolTip("Click to approve the comment as an answer") : commentData.approvedBy !== null ? renderToolTip("Click to unmark the comment as an answer") : null, {
    comment,
    createdAt,
    updatedAt,
    User: User2,
    canEdit
  } = commentData, renderCommunityAnswerLabel = () => props.isCommunityAnswer && /* @__PURE__ */ import_react39.default.createElement(Label_default, {
    type: "Answer",
    text: COMMUNITY_ANSWER_TAG_TEXT
  }), renderApproverNameLabel = () => /* @__PURE__ */ import_react39.default.createElement(Label_default, {
    type: "Answer",
    text: "Approved",
    approvedBy: commentData.Approver.full_name
  });
  return /* @__PURE__ */ import_react39.default.createElement(QuestionCommentContainer, {
    hadApprover: commentData.approvedBy,
    isDeleting,
    isEditing,
    isCommunityAnswer: props.isCommunityAnswer
  }, /* @__PURE__ */ import_react39.default.createElement(QuestionCommentButtons, null, /* @__PURE__ */ import_react39.default.createElement(CounterButton_default, {
    selected: upVoteActive,
    icon: renderArrowIcon("up"),
    text: "",
    count: " ",
    onClick: upVoteF
  }), /* @__PURE__ */ import_react39.default.createElement(QuestionCommentCounterSpan, {
    upVoteActive,
    downVoteActive
  }, upVote), /* @__PURE__ */ import_react39.default.createElement(CounterButton_default, {
    selected: downVoteActive,
    icon: renderArrowIcon("down"),
    text: "",
    count: "",
    onClick: downVoteF
  }), commentData.approvedBy !== null && renderApproverNameLabel(), renderCommunityAnswerLabel()), /* @__PURE__ */ import_react39.default.createElement(QuestionCommentWrapper, {
    isDeleting,
    isEditing
  }, /* @__PURE__ */ import_react39.default.createElement(QuestionCommentMetadata, null, /* @__PURE__ */ import_react39.default.createElement(QuestionResponder_default, {
    createdBy: User2,
    isUpdated: updatedAt !== null,
    userImgSize: "medium"
  }, /* @__PURE__ */ import_react39.default.createElement(DateContainer, {
    isComment: !0,
    hasJobTitle: User2.job_title
  }, /* @__PURE__ */ import_react39.default.createElement(CircleIcon, null), /* @__PURE__ */ import_react39.default.createElement(QuestionCommentDate, {
    isAdmin: props.isAdmin,
    hadApprover: commentData.approvedBy
  }, updatedAt && /* @__PURE__ */ import_react39.default.createElement("em", null, "edited"), getTimeDiff(updatedAt || createdAt)))), /* @__PURE__ */ import_react39.default.createElement(QuestionCommentOptionsWrapper, null, props.isAdmin && !props.hasAnswer ? /* @__PURE__ */ import_react39.default.createElement(CommentAsAnswerToolTip, {
    onClick: () => {
      markAsAnswer(!isAnswer);
    },
    disabled: props.hasCommentAsAnswer && commentData.approvedBy === null
  }, renderButtonOption(), renderAdminToolTips()) : /* @__PURE__ */ import_react39.default.createElement(CommentAsAnswerToolTip, null, renderNotAdminOption(), commentData.Approver !== null && renderToolTip("Approved as answer")), canEdit && /* @__PURE__ */ import_react39.default.createElement(QuestionCommentOptions, null, renderCommentOptions()))), /* @__PURE__ */ import_react39.default.createElement(QuestionCommentText, {
    isEditing
  }, isEditing ? /* @__PURE__ */ import_react39.default.createElement(QuestionCommentEdit, null, /* @__PURE__ */ import_react39.default.createElement(CommentInputText_default, {
    inputValue: comment,
    placeholder: COMMENT_EDIT_PLACEHOLDER,
    onInputChange: handleCommentUpdate
  }), /* @__PURE__ */ import_react39.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    className: "edit-comment-button",
    onClick: () => {
      changeEditState(), setShowCommentOptions(!1);
    }
  }, "Cancel"), /* @__PURE__ */ import_react39.default.createElement(Button_default, {
    type: "button",
    category: DISABLED_BUTTON,
    className: "edit-comment-button",
    onClick: onSubmit,
    disabled: !commentHasChanged
  }, "Save changes")) : /* @__PURE__ */ import_react39.default.createElement(QuestionCommentMarkdown, {
    children: comment,
    components: { link: MarkdownLinkRenderer_default }
  }), isDeleting && /* @__PURE__ */ import_react39.default.createElement(QuestionCommentDeleteConfirmation, null, /* @__PURE__ */ import_react39.default.createElement("p", null, "You are about to delete this comment"), /* @__PURE__ */ import_react39.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: () => {
      changeDeleteState(), setShowCommentOptions(!1);
    }
  }, "Cancel"), /* @__PURE__ */ import_react39.default.createElement(Button_default, {
    type: "button",
    category: DANGER_BUTTON,
    onClick: handleDeleteComment
  }, "Delete")))));
}
QuestionComment.propTypes = {
  commentData: import_prop_types24.default.shape({
    comment: import_prop_types24.default.string.isRequired,
    createdAt: import_prop_types24.default.string.isRequired,
    updatedAt: import_prop_types24.default.string,
    id: import_prop_types24.default.number.isRequired,
    User: import_prop_types24.default.shape({
      email: import_prop_types24.default.string.isRequired,
      full_name: import_prop_types24.default.string.isRequired,
      profile_picture: import_prop_types24.default.string.isRequired,
      job_title: import_prop_types24.default.string
    }),
    Approver: import_prop_types24.default.shape({
      email: import_prop_types24.default.string.isRequired,
      full_name: import_prop_types24.default.string.isRequired,
      profile_picture: import_prop_types24.default.string.isRequired
    }),
    canEdit: import_prop_types24.default.bool.isRequired,
    questionId: import_prop_types24.default.number.isRequired,
    approvedBy: import_prop_types24.default.bool,
    has_upvoted: import_prop_types24.default.bool.isRequired,
    has_downvoted: import_prop_types24.default.bool.isRequired,
    votes: import_prop_types24.default.number.isRequired
  }).isRequired,
  onSubmitSuccess: import_prop_types24.default.func.isRequired,
  isAdmin: import_prop_types24.default.bool.isRequired,
  hasCommentAsAnswer: import_prop_types24.default.bool.isRequired,
  hasAnswer: import_prop_types24.default.bool.isRequired,
  isCommunityAnswer: import_prop_types24.default.bool.isRequired
};
var QuestionComment_default = QuestionComment;

// app/components/SortQuestionCommentsDropdown/index.js
init_react();

// app/components/SortQuestionCommentsDropdown/SortQuestionCommentsDropdown.jsx
init_react();
var import_react41 = __toESM(require("react")), import_prop_types25 = __toESM(require("prop-types")), import_io = require("react-icons/io"), import_react42 = require("@remix-run/react");

// app/components/SortQuestionCommentsDropdown/SortQuestionCommentsDropdown.styled.jsx
init_react();
var import_styled_components24 = __toESM(require("styled-components")), Main = import_styled_components24.default.div`
    font-family: sans-serif;
    background: #f0f0f0;
`, DropDownContainer = import_styled_components24.default.div`
    margin: 0;
    position: relative;
`, DropDownHeader = import_styled_components24.default.div`
    font-weight: 700;
    font-size: 1.3rem;
    color: #3faffa;
    cursor: pointer;
    display: flex;
    align-items:center;
`, DropDownListContainer = import_styled_components24.default.div`
    right: 0;
    position: absolute;
    width: 10em;
    z-index: 999;
`, DropDownList = import_styled_components24.default.ul`
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
`, ListItem = import_styled_components24.default.li`
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
    onSortCommentsOptionChange: import_prop_types25.default.func.isRequired,
    defaultSortingOptionText: import_prop_types25.default.string.isRequired
  };
  let { onSortCommentsOptionChange, defaultSortingOptionText } = props, [searchParams, setSearchParams] = (0, import_react42.useSearchParams)(), [isDropdownOpen, setIsDropdownOpen] = (0, import_react41.useState)(!1), [selectedOption, setSelectedOption] = (0, import_react41.useState)(defaultSortingOptionText), sortOptions = [
    {
      displayText: "Most voted",
      value: DEFAULT_QUESTION_COMMENT_SORTING
    },
    {
      displayText: "Recent activity",
      value: ACTIVITY_TIME_QUESTION_COMMENT_SORTING
    }
  ];
  (0, import_react41.useEffect)(() => {
    let order2 = searchParams.get("order"), optionSelected = sortOptions.find((v) => v.value === order2);
    optionSelected && (setSelectedOption(optionSelected.displayText), onSortCommentsOptionChange(optionSelected.value));
  }, []);
  let onSortSelection = (displayText, value) => async () => {
    setSelectedOption(displayText), searchParams.set("order", value), setSearchParams(searchParams), setIsDropdownOpen(!1), onSortCommentsOptionChange(value);
  };
  return /* @__PURE__ */ import_react41.default.createElement(DropDownContainer, null, /* @__PURE__ */ import_react41.default.createElement(DropDownHeader, {
    onClick: () => setIsDropdownOpen((prevState) => !prevState)
  }, selectedOption, /* @__PURE__ */ import_react41.default.createElement(import_io.IoMdArrowDropdown, null)), isDropdownOpen && /* @__PURE__ */ import_react41.default.createElement(DropDownListContainer, null, /* @__PURE__ */ import_react41.default.createElement(DropDownList, null, sortOptions.map((sortOption) => /* @__PURE__ */ import_react41.default.createElement(ListItem, {
    className: "dropdown-option",
    onClick: onSortSelection(sortOption.displayText, sortOption.value),
    key: sortOption.value
  }, sortOption.displayText)))));
}
var SortQuestionCommentsDropdown_default = SortQuestionCommentsDropdown;

// app/components/QuestionCommentList/QuestionCommentList.jsx
function QuestionCommentList(props) {
  let { comments } = (0, import_react44.useLoaderData)();
  QuestionCommentList.propTypes = {
    questionId: import_prop_types26.default.number.isRequired,
    isAdmin: import_prop_types26.default.bool.isRequired,
    hasAnswer: import_prop_types26.default.bool.isRequired,
    children: import_prop_types26.default.node
  }, QuestionCommentList.defaultProps = {
    children: null
  };
  let initialState2 = {
    isLoading: !0,
    sortCommentsOption: "votes"
  }, { isAdmin, hasAnswer } = props, [, setState] = (0, import_react43.useState)(initialState2), renderCommentsList = (_comments) => {
    let [
      communityAnswerCommentId,
      reorderedByPriorityComments
    ] = commentUtils_default(_comments);
    return reorderedByPriorityComments.map((comment) => /* @__PURE__ */ import_react43.default.createElement(QuestionComment_default, __spreadProps(__spreadValues({}, comment), {
      key: comment.id,
      commentData: comment,
      isAdmin,
      hasCommentAsAnswer: comments.some((_comment) => _comment.approvedBy !== null),
      hasAnswer,
      isCommunityAnswer: comment.id === communityAnswerCommentId
    })));
  }, sortCommentsOptionChangeHandler = (sortCommentsOption) => {
    setState((prevState) => ({
      isLoading: prevState.isLoading,
      sortCommentsOption
    }));
  }, sortCommentsDropdown = /* @__PURE__ */ import_react43.default.createElement(SortSelectorContainer, null, /* @__PURE__ */ import_react43.default.createElement(SortSelectorText, null, "Order by:"), /* @__PURE__ */ import_react43.default.createElement(SortQuestionCommentsDropdown_default, {
    questionId: props.questionId,
    onSortCommentsOptionChange: sortCommentsOptionChangeHandler,
    defaultSortingOptionText: "Most voted"
  }));
  return /* @__PURE__ */ import_react43.default.createElement(CommentListContainer, null, /* @__PURE__ */ import_react43.default.createElement(CommentListHeader, null, props.children, comments.length > 0 && sortCommentsDropdown), renderCommentsList(comments));
}
var QuestionCommentList_default = QuestionCommentList;

// app/components/Modals/AssignAnswerModal/AssignAnswerModal.jsx
init_react();
var import_react45 = __toESM(require("react")), import_react46 = require("@remix-run/react"), import_prop_types27 = __toESM(require("prop-types")), import_react_bootstrap8 = require("react-bootstrap");

// app/components/Modals/AssignAnswerModal/AssignAnswerModal.Styled.jsx
init_react();
var import_styled_components25 = __toESM(require("styled-components")), import_react_bootstrap7 = require("react-bootstrap"), AssignModal = import_styled_components25.default.div`
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
`, AssignModalDialog = import_styled_components25.default.div`
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
`, ModalHeader2 = import_styled_components25.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? `
        border-bottom: 1px solid #e5e5e5;
        padding: 15px;` : `
        border-bottom: none;`}
`, ModalBody2 = import_styled_components25.default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
`, ModalFooter2 = import_styled_components25.default.div`
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
`, ModalTitle2 = import_styled_components25.default.div`
    font-family: "Nunito";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`, SelectContainer = import_styled_components25.default.div`
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
`, CustDropDownButton = (0, import_styled_components25.default)(import_react_bootstrap7.DropdownButton)`
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
  let {
    question,
    onClose
  } = props, [departmentsDropdownSelected, setDeparmentsDropdownSelected] = (0, import_react45.useState)(null), [department, setDepartment] = (0, import_react45.useState)({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 }), { departments: departmentData } = (0, import_react46.useLoaderData)(), submit = (0, import_react46.useSubmit)(), transition = (0, import_react46.useTransition)(), assignQuestionForm = (0, import_react45.useRef)(), resetModal = () => {
    setDeparmentsDropdownSelected(null), setDepartment({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 }), onClose();
  }, onDepartmentAssigned = () => {
    if (resetModal(), transition.state !== "idle")
      return;
    let data = new FormData(assignQuestionForm.current);
    data.set("action", actions_default.ASSIGN_QUESTION), data.set("questionId", question.question_id), data.set("assigned_department", department.department_id), submit(data, { method: "post", action: `/questions/${question.question_id}`, replace: !0 }), setDepartment({ name: DEPARTMENT_PLACEHOLDER, department_id: 0 });
  }, selectDepartmentIndex = (selectedDepartment) => departmentData.findIndex((department1) => selectedDepartment.department_id === department1.department_id), handleDepartmentSelectChange = (selectedDepartment) => {
    let selectedDepartmentIndex = selectDepartmentIndex(selectedDepartment);
    setDeparmentsDropdownSelected(departmentData[selectedDepartmentIndex]), setDepartment(departmentData[selectedDepartmentIndex]);
  }, isSubmitEnabled = () => departmentsDropdownSelected, renderDepartmentOptions = () => departmentData.map((department2) => /* @__PURE__ */ import_react45.default.createElement(import_react_bootstrap8.MenuItem, {
    eventKey: department2,
    key: department2.department_id
  }, department2.name)), renderDepartmentSelectBox = () => /* @__PURE__ */ import_react45.default.createElement(import_react_bootstrap8.FormGroup, {
    controlId: "formControlsSelectMultiple"
  }, /* @__PURE__ */ import_react45.default.createElement(import_react_bootstrap8.ControlLabel, null, "Specify which department you think your question should be addressed to:"), /* @__PURE__ */ import_react45.default.createElement(SelectContainer, null, /* @__PURE__ */ import_react45.default.createElement(CustDropDownButton, {
    bsStyle: "default",
    title: department.name,
    onSelect: handleDepartmentSelectChange,
    id: "dropdown"
  }, renderDepartmentOptions())));
  return question ? /* @__PURE__ */ import_react45.default.createElement("div", {
    id: "main",
    onClick: resetModal
  }, /* @__PURE__ */ import_react45.default.createElement(AssignModal, {
    show: !0
  }, /* @__PURE__ */ import_react45.default.createElement(AssignModalDialog, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react45.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: resetModal
  }), /* @__PURE__ */ import_react45.default.createElement(ModalHeader2, null, /* @__PURE__ */ import_react45.default.createElement(ModalTitle2, null, "Reassign question Q", question.question_id)), /* @__PURE__ */ import_react45.default.createElement(ModalBody2, null, renderDepartmentSelectBox()), /* @__PURE__ */ import_react45.default.createElement(ModalFooter2, null, /* @__PURE__ */ import_react45.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: resetModal
  }, "Cancel"), /* @__PURE__ */ import_react45.default.createElement(Button_default, {
    category: DISABLED_BUTTON,
    value: "Submit",
    disabled: !isSubmitEnabled(),
    onClick: onDepartmentAssigned
  }, "Reassign Question"))))) : null;
}
AssignAnswerModal.propTypes = {
  question: import_prop_types27.default.shape(),
  onClose: import_prop_types27.default.func.isRequired
};
AssignAnswerModal.defaultProps = {
  question: null
};
var AssignAnswerModal_default = AssignAnswerModal;

// app/components/CommentInput/CommentInput.jsx
init_react();
var import_react48 = __toESM(require("react")), import_prop_types29 = __toESM(require("prop-types")), import_react49 = require("@remix-run/react");

// app/components/CommentInput/CommentInputAuthor.jsx
init_react();
var import_react47 = __toESM(require("react")), import_prop_types28 = __toESM(require("prop-types")), import_react_bootstrap9 = require("react-bootstrap");
function CommentInputAuthor2(props) {
  let {
    anonymousUsername,
    anonymousProfilePicture,
    profilePicture,
    selectPostingAs
  } = props, profile = useUser_default(), renderUserProfile = ({ full_name, profile_picture }) => full_name && /* @__PURE__ */ import_react47.default.createElement(import_react_bootstrap9.MenuItem, {
    eventKey: full_name
  }, /* @__PURE__ */ import_react47.default.createElement(AuthorImg, {
    variant: "dropdown",
    src: profile_picture
  }), full_name);
  return /* @__PURE__ */ import_react47.default.createElement(CommentInputAuthor, null, /* @__PURE__ */ import_react47.default.createElement(DropdownButtonStyled, {
    bsStyle: "default",
    title: (() => /* @__PURE__ */ import_react47.default.createElement("div", null, /* @__PURE__ */ import_react47.default.createElement(CommentInputAuthorPictureDiv, null, /* @__PURE__ */ import_react47.default.createElement(AuthorImg, {
      src: profilePicture
    })), /* @__PURE__ */ import_react47.default.createElement(AuthorNameContainer, null, /* @__PURE__ */ import_react47.default.createElement(AuthorNameContainerCaret, null))))(),
    onSelect: selectPostingAs,
    noCaret: !0,
    dropup: !0
  }, renderUserProfile(profile), /* @__PURE__ */ import_react47.default.createElement(import_react_bootstrap9.MenuItem, {
    eventKey: anonymousUsername
  }, /* @__PURE__ */ import_react47.default.createElement(AuthorImg, {
    variant: "dropdown",
    src: anonymousProfilePicture
  }), "Anonymous")));
}
CommentInputAuthor2.propTypes = {
  anonymousUsername: import_prop_types28.default.string,
  anonymousProfilePicture: import_prop_types28.default.string,
  profilePicture: import_prop_types28.default.string.isRequired,
  selectPostingAs: import_prop_types28.default.func.isRequired
};
CommentInputAuthor2.defaultProps = {
  anonymousUsername: ANONYMOUS_USER.username,
  anonymousProfilePicture: ANONYMOUS_USER.profilePicture
};
var CommentInputAuthor_default = CommentInputAuthor2;

// app/components/CommentInput/CommentInput.jsx
function CommentInput(props) {
  let submit = (0, import_react49.useSubmit)(), { setWritingCommentOnMobile } = props, profile = useUser_default(), initialState2 = {
    comment: "",
    isCommenting: !1,
    isCommentingError: !1,
    isCommentingSuccess: !1,
    isCommentingWarning: !1,
    isAnonymous: !1,
    warnings: [],
    profilePicture: profile.profile_picture,
    inputValue: "",
    isShowPreview: !1
  }, [comment, setComment] = (0, import_react48.useState)(initialState2), [searchParams] = (0, import_react49.useSearchParams)(), openSubmitWithModal = (warning) => {
    setComment((state) => ({
      warnings: [
        ...state.warnings,
        warning
      ]
    }));
  }, CommentInputTextRef = (0, import_react48.useRef)(), resetForm = () => {
    setComment((state) => __spreadProps(__spreadValues({}, state), {
      isCommenting: !1,
      isCommentingError: !1,
      isCommentingSuccess: !1,
      isCommentingWarning: !1,
      isAnonymous: !1,
      profilePicture: profile.profile_picture,
      warnings: [],
      inputValue: "",
      isShowPreview: !1
    })), CommentInputTextRef.current.resetInputText();
  }, onSubmit = async (event) => {
    let { questionId } = props;
    event.preventDefault();
    let inputValue = comment.inputValue.trim(), sanitizedInput = deleteNoMarkupFormatHTML(inputValue);
    inputValue !== sanitizedInput && openSubmitWithModal(HTML_CODE_WARNING);
    let commentToSubmit = {
      comment: sanitizedInput,
      questionId,
      user: {
        accessToken: profile.accessToken,
        userEmail: profile.email,
        userName: profile.full_name
      },
      isAnonymous: comment.isAnonymous
    }, data = new FormData();
    data.set("action", actions_default.CREATE_COMMENT), data.set("commentToSubmit", JSON.stringify(commentToSubmit));
    let url = `/questions/${questionId}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 }), resetForm(), setWritingCommentOnMobile(!1);
  }, onInputChange = (inputValue) => {
    setComment((state) => __spreadProps(__spreadValues({}, state), {
      inputValue
    }));
  }, getAuthor = () => {
    if (comment.isAnonymous)
      return ` as ${ANONYMOUS_USER.username}`;
    let name = profile.full_name.split(" ")[0];
    return name ? ` as ${name}` : "";
  }, selectPostingAs = (username) => {
    let isAnonymous = username === ANONYMOUS_USER.username, profilePicture2 = isAnonymous ? ANONYMOUS_USER.profilePicture : profile.profile_picture;
    setComment((state) => __spreadProps(__spreadValues({}, state), {
      isAnonymous,
      profilePicture: profilePicture2
    }));
  }, renderButtons = () => ((comment.inputValue ? comment.inputValue.length : 0) >= MIN_SHOW_COMMENT_BTN_LENGTH || props.isWritingCommentMobile) && /* @__PURE__ */ import_react48.default.createElement(CommentInputButtonsContainer, null, /* @__PURE__ */ import_react48.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: () => {
      resetForm(), setWritingCommentOnMobile(!1);
    }
  }, "Cancel"), /* @__PURE__ */ import_react48.default.createElement(Button_default, {
    type: "submit",
    category: PRIMARY_BUTTON,
    form: "comment-form"
  }, "Post", getAuthor())), { profilePicture } = comment;
  return /* @__PURE__ */ import_react48.default.createElement(CommentInputMainContainer, {
    className: `${props.isWritingCommentMobile ? "writing-mobile" : ""}`
  }, /* @__PURE__ */ import_react48.default.createElement(CommentInputForm, {
    id: "comment-form",
    onSubmit
  }, /* @__PURE__ */ import_react48.default.createElement(CommentInputTextAreaForm, null, /* @__PURE__ */ import_react48.default.createElement(CommentInputAuthor_default, {
    profilePicture,
    selectPostingAs
  }), /* @__PURE__ */ import_react48.default.createElement(CommentInputText_default, {
    ref: CommentInputTextRef,
    onInputChange,
    resetInputText: resetForm,
    isNewComment: !0
  })), renderButtons()));
}
CommentInput.propTypes = {
  questionId: import_prop_types29.default.number,
  isWritingCommentMobile: import_prop_types29.default.bool,
  setWritingCommentOnMobile: import_prop_types29.default.func
};
CommentInput.defaultProps = {
  questionId: null,
  isWritingCommentMobile: !1,
  setWritingCommentOnMobile: () => {
  }
};
var CommentInput_default = CommentInput;

// app/components/QuestionRow/index.js
init_react();

// app/components/QuestionRow/QuestionRow.jsx
init_react();
var import_prop_types31 = __toESM(require("prop-types")), import_react51 = require("@remix-run/react"), import_react52 = __toESM(require("react"));

// app/components/QuestionRow/QuestionRow.Styled.jsx
init_react();
var import_styled_components26 = __toESM(require("styled-components")), import_bs3 = require("react-icons/bs"), QuestionRowContainer = import_styled_components26.default.div`
    align-items: flex-start;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    padding-botton: 8px;
    width: 100%;
    position: relative;
    ${(props) => props.isQuestionModalOpen && import_styled_components26.css`
        @media screen and (max-width: 480px) {
          padding: 0 10px;
        }
    `}
`, QuestionRowMetadataTop = import_styled_components26.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 17px;
  width: 100%;
`, QuestionRowOptions = import_styled_components26.default.div`
  align-items: flex-end;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 10px;
  > span:first-child {
    color: #a2abaf;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    margin-bottom: 2px;
  }
`, PinQuestionIconHolder = import_styled_components26.default.span`
  float: right;
  display: block;
  position: relative;
  > img:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    margin: 0px 8px;
  }
`, PinActionableIconHolder = (0, import_styled_components26.default)(import_bs3.BsPinFill)`
  font-size: 15px;
  color: var(--color-dark-25);

  &:hover {
    cursor: pointer;
  }
`, PinTooltipMessage = import_styled_components26.default.span`
  display: none;
  width: 210px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0px;
  position: absolute;
  z-index: 1000;
  right: 25px;
  top: -25px;
  font-size: 11px;
  letter-spacing: 0.5px;

  ${PinQuestionIconHolder}:hover & {
    display: block;
  }
`, UnpinActionableIconHolder = (0, import_styled_components26.default)(import_bs3.BsPinFill)`
  font-size: 15px;
  color: var(--color-secondary);

  &:hover {
    cursor: pointer;
  }
`, PinnedIndicator = import_styled_components26.default.span`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: fit-content;

  > span {
    min-width: 80px;
    color: var(--color-dark-metadata);
    font-family: "Nunito", sans-serif;
    font-size: 11px;
    letter-spacing: 0.7px;
    @media screen and (max-width: 480px) {
      font-size: 9px;
      letter-spacing: 0.7px;
    }
`, PinnedIcon = (0, import_styled_components26.default)(import_bs3.BsFillPinAngleFill)`
  color: var(--color-dark-metadata);
  margin-left: 4px;
  font-size: 12px;
`, QuestionRowWrapper = import_styled_components26.default.div`
    width: 100%;
`, QuestionRowContent = import_styled_components26.default.div`
  cursor: pointer;
  width: 100%;
  padding: 0;
`, QuestionRowMetadataBottom = import_styled_components26.default.div`
  color: var(--color-dark-25);
  display: flex;
  align-items: flex-end;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: space-between;
  letter-spacing: 0.7px;
  margin-top: 20px;
  margin-bottom: 8px;
  width: 100%;
`, QuestionRowBorderBottom = import_styled_components26.default.div`
  border-bottom: var(--color-dark-25) solid 1px;
  width: 100%;
`, QuestionRowLine = import_styled_components26.default.div`
    display: none;
    border-right: 1px solid var(--color-dark-25);
    height: 95%;
    left: 22px;
    top: 70px;
    position: absolute;
    width: 1px;
    @media screen and (max-width: 480px) {
        left: 42px;    
        top: 90px;
    }
    ${(props) => (!props.hasAnswer || props.isQuestionModalOpen) && import_styled_components26.css`
        display: none
    `}
`, QuestionRowDate = import_styled_components26.default.div`
    display: flex;
    height: fit-content;
    color: var(--color-dark-metadata);
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    letter-spacing: 0.7px;
`, RightWrapper = import_styled_components26.default.div`
    display: flex;
    padding-top: 5px;
    gap:10px;
`, QuestionRowMetadataSectionOne = import_styled_components26.default.div`
    display: flex;
    align-items: center;
`, QuestionId = import_styled_components26.default.span`
  font-size: 12px;
  color: var(--color-dark-metadata);
  font-weight: 500;
`, DisableControls = import_styled_components26.default.div`
    display:flex;
    margin
`, ButtonTooltipMessage = import_styled_components26.default.span`
  display: none;
  width: 210px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0px;
  position: absolute;
  z-index: 1000;
  right: 25px;
  top: -25px;
  font-size: 11px;
  letter-spacing: 0.5px;

  ${DisableControls}:hover & {
    display: block;
  }
`;

// app/components/Switch/index.js
init_react();

// app/components/Switch/Switch.jsx
init_react();
var import_react50 = __toESM(require("react")), import_prop_types30 = __toESM(require("prop-types"));

// app/components/Switch/Switch.Styled.jsx
init_react();
var import_styled_components27 = __toESM(require("styled-components")), Switch = import_styled_components27.default.label`
position: relative;
display: inline-block;
width: 36px;
height: 20px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input + span:before {
    transform: translate(1px, -1px);
  }
  input:checked + span {
    background-color: var(--toastify-color-progress-success);
  }
  
  input:focus + span {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + span:before {
    -webkit-transform: translate(17px, -1px);
    -ms-transform: translate(17px, -1px);
    transform: translate(17px, -1px);
  }
`, Slider = import_styled_components27.default.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
border-radius: 20px;
&:before {  
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
`;

// app/components/Switch/Switch.jsx
function Switch2({ id, checked, onChange }) {
  return /* @__PURE__ */ import_react50.default.createElement(Switch, {
    htmlFor: id || "react-switch-new"
  }, /* @__PURE__ */ import_react50.default.createElement("input", {
    type: "checkbox",
    checked,
    onChange,
    id: id || "react-switch-new"
  }), /* @__PURE__ */ import_react50.default.createElement(Slider, null));
}
var Switch_default = Switch2;
Switch2.propTypes = {
  id: import_prop_types30.default.string,
  checked: import_prop_types30.default.bool.isRequired,
  onChange: import_prop_types30.default.func.isRequired
};
Switch2.defaultProps = {
  id: "react-switch-new"
};

// app/components/QuestionRow/QuestionRow.jsx
var renderLocation = (location, locations) => locations.length === 0 ? "..." : locations.find((loc) => loc.code === location).name;
function QuestionRow(props) {
  let {
    question,
    isQuestionModalOpen,
    hasAnswer,
    shouldCollapse,
    collapsed,
    children,
    isFromList
  } = props, profile = useUser_default(), { locations } = (0, import_react51.useLoaderData)(), isUpdated = !1, pinForm = (0, import_react52.useRef)(), enabledForm = (0, import_react52.useRef)(), submit = (0, import_react51.useSubmit)(), [searchParams] = (0, import_react51.useSearchParams)(), handleStatusClick = () => {
    let url = "/?index";
    if (isFromList)
      searchParams.forEach((value, key) => {
        url += value ? `&${key}=${value}` : "";
      });
    else {
      url = `/questions/${question.question_id}`;
      let urlSearchParam = searchParams.get("order");
      url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    }
    let data = new FormData(enabledForm.current);
    data.set("action", actions_default.ENABLED_ACTION), data.set("questionId", question.question_id), data.set("enabledValue", !question.is_enabled), submit(data, { method: "post", action: url, replace: !0 });
  }, onPinChange = () => {
    let url = "/?index";
    if (isFromList)
      searchParams.forEach((value, key) => {
        url += value ? `&${key}=${value}` : "";
      });
    else {
      url = `/questions/${question.question_id}`;
      let urlSearchParam = searchParams.get("order");
      url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url;
    }
    let newPinStatusValue = question.is_pinned ? "false" : "true", data = new FormData(pinForm.current);
    data.set("action", actions_default.PINNIN), data.set("questionId", question.question_id), data.set("value", newPinStatusValue), submit(data, { method: "post", action: url, replace: !0 });
  }, adminPinButton = profile.is_admin && !question.is_pinned ? /* @__PURE__ */ import_react52.default.createElement(PinQuestionIconHolder, {
    onClick: onPinChange
  }, /* @__PURE__ */ import_react52.default.createElement(PinActionableIconHolder, null), /* @__PURE__ */ import_react52.default.createElement(PinTooltipMessage, null, "Pin question to the top of the list")) : /* @__PURE__ */ import_react52.default.createElement(PinQuestionIconHolder, {
    onClick: onPinChange,
    className: "pin-tooltip"
  }, /* @__PURE__ */ import_react52.default.createElement(UnpinActionableIconHolder, null), /* @__PURE__ */ import_react52.default.createElement(PinTooltipMessage, null, "Unpin question from top of the list")), nonAdminPinIndicator = !profile.is_admin && question.is_pinned && /* @__PURE__ */ import_react52.default.createElement(PinnedIndicator, null, /* @__PURE__ */ import_react52.default.createElement("span", null, "Pinned by admin"), " ", /* @__PURE__ */ import_react52.default.createElement(PinnedIcon, null));
  return /* @__PURE__ */ import_react52.default.createElement(QuestionRowContainer, {
    isQuestionModalOpen
  }, /* @__PURE__ */ import_react52.default.createElement(QuestionRowMetadataTop, null, /* @__PURE__ */ import_react52.default.createElement(ConditionalLinkTo_default, {
    to: `/questions/${question.question_id}`,
    condition: isFromList
  }, /* @__PURE__ */ import_react52.default.createElement(QuestionResponder_default, {
    createdBy: question.created_by
  }, /* @__PURE__ */ import_react52.default.createElement(DateContainer, {
    hasJobTitle: hasJobTitle(question.created_by)
  }, /* @__PURE__ */ import_react52.default.createElement(CircleIcon, null), /* @__PURE__ */ import_react52.default.createElement(QuestionRowDate, null, /* @__PURE__ */ import_react52.default.createElement("em", null, isUpdated && " (edited)"), getDateData(question.createdAt))))), /* @__PURE__ */ import_react52.default.createElement(QuestionRowLine, {
    isQuestionModalOpen,
    hasAnswer
  }), /* @__PURE__ */ import_react52.default.createElement(RightWrapper, null, profile.is_admin ? adminPinButton : nonAdminPinIndicator, profile.is_admin && /* @__PURE__ */ import_react52.default.createElement(DisableControls, null, /* @__PURE__ */ import_react52.default.createElement(ButtonTooltipMessage, null, "Click to", " ", question.is_enabled ? "disable" : "enable", " ", "this question"), /* @__PURE__ */ import_react52.default.createElement(Switch_default, {
    id: `question-${question.question_id}`,
    checked: question.is_enabled,
    onChange: handleStatusClick
  })))), /* @__PURE__ */ import_react52.default.createElement(QuestionRowWrapper, {
    hasAnswer,
    isQuestionModalOpen
  }, /* @__PURE__ */ import_react52.default.createElement(ConditionalLinkTo_default, {
    to: `/questions/${question.question_id}`,
    condition: isFromList
  }, /* @__PURE__ */ import_react52.default.createElement(QuestionRowContent, null, /* @__PURE__ */ import_react52.default.createElement(QuestionMarkdown_default, {
    source: formatCollapsingText(question.question, shouldCollapse && !isQuestionModalOpen, collapsed, COLLAPSED_QUESTION_MIN_LENGTH)
  }))), children, /* @__PURE__ */ import_react52.default.createElement(QuestionRowMetadataBottom, null, /* @__PURE__ */ import_react52.default.createElement(QuestionRowMetadataSectionOne, null, isFromList && /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, null, /* @__PURE__ */ import_react52.default.createElement(Label_default, {
    text: renderLocation(question.location, locations),
    type: "Location"
  }), /* @__PURE__ */ import_react52.default.createElement(Label_default, {
    text: renderDepartment(question.Department),
    type: "Department"
  }), question.assigned_to && /* @__PURE__ */ import_react52.default.createElement(Label_default, {
    text: question.assigned_to.full_name,
    type: "Employee"
  }))), /* @__PURE__ */ import_react52.default.createElement(QuestionId, null, `Question ID: Q${question.question_id}`)), /* @__PURE__ */ import_react52.default.createElement(QuestionRowBorderBottom, null)));
}
QuestionRow.propTypes = {
  question: import_prop_types31.default.shape({
    question_id: import_prop_types31.default.number.isRequired,
    question: import_prop_types31.default.string.isRequired,
    is_anonymous: import_prop_types31.default.bool.isRequired,
    is_pinned: import_prop_types31.default.bool.isRequired,
    is_enabled: import_prop_types31.default.bool.isRequired,
    user_hash: import_prop_types31.default.string,
    can_edit: import_prop_types31.default.bool,
    Department: import_prop_types31.default.string,
    assigned_to: import_prop_types31.default.shape({
      full_name: import_prop_types31.default.string
    }),
    created_by: import_prop_types31.default.shape({
      email: import_prop_types31.default.string,
      employee_id: import_prop_types31.default.number,
      full_name: import_prop_types31.default.string,
      is_admin: import_prop_types31.default.bool,
      job_title: import_prop_types31.default.string,
      profile_picture: import_prop_types31.default.string
    }),
    createdAt: import_prop_types31.default.string.isRequired,
    location: import_prop_types31.default.string.isRequired,
    numComments: import_prop_types31.default.number.isRequired,
    hasVoted: import_prop_types31.default.bool.isRequired,
    Answer: import_prop_types31.default.shape({
      answer: import_prop_types31.default.string,
      answer_id: import_prop_types31.default.number,
      answered_at: import_prop_types31.default.string,
      answered_by_id: import_prop_types31.default.number,
      hasScored: import_prop_types31.default.bool,
      canUndoNps: import_prop_types31.default.bool
    }),
    mostUpvoted: import_prop_types31.default.bool
  }).isRequired,
  isQuestionModalOpen: import_prop_types31.default.bool.isRequired,
  hasAnswer: import_prop_types31.default.bool,
  shouldCollapse: import_prop_types31.default.bool,
  collapsed: import_prop_types31.default.bool,
  children: import_prop_types31.default.node,
  isFromList: import_prop_types31.default.bool
};
QuestionRow.defaultProps = {
  children: null,
  hasAnswer: !1,
  shouldCollapse: !1,
  collapsed: !1,
  isFromList: !0
};
var QuestionRow_default = QuestionRow;

// app/components/Modals/AnswerModal/AnswerModal.jsx
init_react();
var import_react55 = __toESM(require("react")), import_react56 = require("@remix-run/react"), import_prop_types34 = __toESM(require("prop-types"));

// app/components/AnswerInputText/AnswerInputText.jsx
init_react();
var import_react54 = __toESM(require("react")), import_prop_types33 = __toESM(require("prop-types"));

// app/components/AnswerInputText/AnswerTextArea.jsx
init_react();
var import_react53 = __toESM(require("react")), import_prop_types32 = __toESM(require("prop-types"));

// app/components/AnswerInputText/AnswerInputText.Styled.jsx
init_react();
var import_styled_components28 = __toESM(require("styled-components")), CommentInputText3 = import_styled_components28.default.div`
    display: flex;
    flex: 85%;
    flex-direction: column;

    @media (max-width: 500px) {
        flex-direction: column-reverse;
    }
`, CommentInputTextArea2 = import_styled_components28.default.div`
    display: block;
    position: relative;
    width: 100%;
`, CommentInputOptions2 = import_styled_components28.default.div`
    padding-bottom: 1%;

    @media (max-width: 500px) {
        display: none;
    }
`;

// app/components/AnswerInputText/AnswerTextArea.jsx
function AnswerTextArea(props) {
  return /* @__PURE__ */ import_react53.default.createElement(CommentInputTextArea2, null, /* @__PURE__ */ import_react53.default.createElement(Input_default, {
    type: "text-area",
    rows: props.textAreaRows,
    maxLength: 3e3,
    placeholder: inputPlaceholder(14),
    value: props.inputValue,
    onChange: props.onAnswerChange,
    form: "question-submit-form",
    ref: props.inputRef,
    inputRightElement: /* @__PURE__ */ import_react53.default.createElement(InputCounter_default, {
      currentLength: props.answerLength,
      maxLength: 3e3
    })
  }), /* @__PURE__ */ import_react53.default.createElement(CommentInputOptions2, null, /* @__PURE__ */ import_react53.default.createElement(MarkdownFormattingNote_default, {
    visible: shouldShowMarkdownSuggestions(props.answerLength, MINIMUM_INPUT_LENGTH_TO_SHOW_MARKDOWN, window.innerWidth, MINIMUM_WIDTH_TO_SHOW_MARKDOWN)
  })));
}
AnswerTextArea.propTypes = {
  inputValue: import_prop_types32.default.string.isRequired,
  onAnswerChange: import_prop_types32.default.func.isRequired,
  answerLength: import_prop_types32.default.number,
  textAreaRows: import_prop_types32.default.number,
  inputRef: import_prop_types32.default.func
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
    minRows: import_prop_types33.default.number,
    inputValue: import_prop_types33.default.string,
    answerLength: import_prop_types33.default.number,
    onInputChange: import_prop_types33.default.func.isRequired
  }, AnswerInputText.defaultProps = {
    minRows: MIN_TEXTAREA_ROWS,
    inputValue: "",
    answerLength: 0
  };
  let initialAnswerState = {
    inputValue: props.inputValue,
    answerLength: props.answerLength,
    textAreaRows: props.minRows
  }, [answerState, setAnswerState] = (0, import_react54.useState)(initialAnswerState), onAnswerChange = (event) => {
    let rawText = event.target.value, answerLength = rawText.trim().length, inputValue = rawText.replace(/^\s+/, "");
    setAnswerState({
      inputValue,
      answerLength,
      textAreaRows: answerLength > 0 ? answerLength : props.minRows
    }), props.onInputChange(inputValue);
  }, setTextInputRef = (element) => {
    this.textInput = element;
  }, handlePreviewChange = () => {
    setAnswerState(__spreadProps(__spreadValues({}, answerState), { isShowPreview: !answerState.isShowPreview }));
  }, renderPreviewButton = ({
    answerLength,
    isShowPreview
  }) => answerLength > 14 && /* @__PURE__ */ import_react54.default.createElement("div", null, /* @__PURE__ */ import_react54.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "preview-button",
    onClick: handlePreviewChange
  }, isShowPreview ? "Edit answer" : "Show preview")), renderAnswerPreview = (inputValue) => /* @__PURE__ */ import_react54.default.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react54.default.createElement(QuestionMarkdown_default, {
    source: inputValue
  })), renderInputArea = () => {
    let { inputValue, answerLength, isShowPreview } = answerState;
    return isShowPreview && answerLength > 14 ? renderAnswerPreview(inputValue) : /* @__PURE__ */ import_react54.default.createElement(AnswerTextArea_default, {
      inputValue,
      onAnswerChange,
      setTextInputRef,
      textAreaRows: answerState.minRows,
      answerLength
    });
  };
  return /* @__PURE__ */ import_react54.default.createElement(CommentInputText3, null, renderPreviewButton(answerState), renderInputArea(answerState));
}
var AnswerInputText_default = AnswerInputText;

// app/components/Modals/AnswerModal/AnswerModal.Styled.jsx
init_react();
var import_styled_components29 = __toESM(require("styled-components")), Modal = import_styled_components29.default.div`
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
`, ModalDialog = import_styled_components29.default.div`
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
`, ModalBody3 = import_styled_components29.default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
`, ModalFooter3 = import_styled_components29.default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-top: 1px solid #e5e5e5;padding: 15px;text-align: right;" : "border-bottom: none;"}
`, ModalHeader3 = import_styled_components29.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`, ModalTitle3 = import_styled_components29.default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`, ModalSubtitle = import_styled_components29.default.div`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`;

// app/components/Modals/AnswerModal/AnswerModal.jsx
function AnswerModal(props) {
  AnswerModal.propTypes = {
    question: import_prop_types34.default.shape(),
    onClose: import_prop_types34.default.func.isRequired,
    openAssignAnswerModal: import_prop_types34.default.func.isRequired
  }, AnswerModal.defaultProps = {
    question: null
  };
  let submit = (0, import_react56.useSubmit)(), transition = (0, import_react56.useTransition)(), submitAnswerForm = (0, import_react55.useRef)(), profile = useUser_default(), [searchParams] = (0, import_react56.useSearchParams)(), initialState2 = {
    Answer: props.question.Answer ? props.question.Answer : "",
    isAnswering: !1,
    sanitizedInput: props.question.Answer ? deleteNoMarkupFormatHTML(props.question.Answer.answer_text) : ""
  }, [answerData, setAnswerData] = (0, import_react55.useState)(initialState2), onAnswerChange = (answer) => {
    setAnswerData(__spreadProps(__spreadValues({}, answerData), {
      sanitizedInput: deleteNoMarkupFormatHTML(answer)
    }));
  }, getQuestionAuthor = (question2) => !question2.is_anonymous && question2.created_by ? question2.created_by.full_name : ANONYMOUS_USER.username, onSubmitAnswer = () => {
    if (transition.state !== "idle")
      return;
    let {
      question: question2,
      onClose
    } = props, answerValue = answerData.sanitizedInput, answerValueNoHTML = deleteNoMarkupFormatHTML(answerValue);
    if (answerValue !== answerValueNoHTML)
      return;
    let action7 = question2.Answer ? actions_default.UPDATE_QUESTION_ANSWER : actions_default.CREATE_QUESTION_ANSWER, data = new FormData(submitAnswerForm.current);
    data.set("action", action7), question2.Answer ? data.set("answerId", question2.Answer.answer_id) : (data.set("employee_id", profile.employee_id), data.set("questionId", question2.question_id)), data.set("answer", answerValueNoHTML), onClose();
    let url = `/questions/${question2.question_id}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, {
      method: "post",
      action: url,
      replace: !0
    });
  }, renderSecondaryButton = () => props.question.Answer ? /* @__PURE__ */ import_react55.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: props.onClose
  }, CANCEL) : null, renderAnswerSubtitle = ({ question: question2, question: { Answer: Answer2 } }) => Answer2 ? editAnswerInfo(Answer2.AnsweredBy.full_name, getTimeDiff(Answer2.answered_at)) : addAnswerInfo(getQuestionAuthor(question2), getTimeDiff(question2.createdAt)), {
    question,
    question: { question_id }
  } = props, { Answer } = question, sanitizedInputLength = answerData.sanitizedInput.length;
  return /* @__PURE__ */ import_react55.default.createElement("div", {
    onClick: props.onClose
  }, /* @__PURE__ */ import_react55.default.createElement(Modal, {
    show: !0,
    hide: props.onClose
  }, /* @__PURE__ */ import_react55.default.createElement(ModalDialog, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react55.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: props.onClose
  }), /* @__PURE__ */ import_react55.default.createElement(ModalHeader3, null, /* @__PURE__ */ import_react55.default.createElement(ModalTitle3, null, Answer ? editAnswerMessage(question_id) : addAnswerMessage(question_id)), /* @__PURE__ */ import_react55.default.createElement(QuestionMarkdown_default, {
    source: question.question
  }), /* @__PURE__ */ import_react55.default.createElement(ModalSubtitle, null, renderAnswerSubtitle(props))), /* @__PURE__ */ import_react55.default.createElement(ModalBody3, null, /* @__PURE__ */ import_react55.default.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ import_react55.default.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ import_react55.default.createElement(AnswerInputText_default, {
    inputValue: Answer ? Answer.answer : "",
    onInputChange: onAnswerChange
  })))), /* @__PURE__ */ import_react55.default.createElement(ModalFooter3, null, renderSecondaryButton(), /* @__PURE__ */ import_react55.default.createElement(Button_default, {
    id: "submitAnswerBtn",
    category: DISABLED_BUTTON,
    onClick: onSubmitAnswer,
    value: SUBMIT,
    disabled: !validTextLength(sanitizedInputLength, 14, 3e3)
  }, props.question.Answer ? UPDATE_ANSWER : SUBMIT_ANSWER)))));
}
var AnswerModal_default = AnswerModal;

// app/components/Modals/DeleteAnswerModal/DeleteAnswerModal.jsx
init_react();
var import_react57 = __toESM(require("react")), import_react58 = require("@remix-run/react"), import_prop_types35 = __toESM(require("prop-types"));

// app/components/Modals/DeleteAnswerModal/DeleteAnswerModal.Styled.jsx
init_react();
var import_styled_components30 = __toESM(require("styled-components")), Modal2 = import_styled_components30.default.div` 
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
`, ModalDialog2 = import_styled_components30.default.div`
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
`, ModalHeader4 = import_styled_components30.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`, ModalInfo = import_styled_components30.default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #4e5154;
`, ModalTitle4 = import_styled_components30.default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`, ModalSubtitle2 = import_styled_components30.default.div`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`, ModalFooter4 = import_styled_components30.default.div`
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
  let submit = (0, import_react58.useSubmit)(), transition = (0, import_react58.useTransition)(), deleteAnswerForm = (0, import_react57.useRef)(), [searchParams] = (0, import_react58.useSearchParams)(), onDeleteAnswer = () => {
    if (transition.state !== "idle")
      return;
    let data = new FormData(deleteAnswerForm.current);
    data.set("action", actions_default.DELETE_ANSWER), data.set("answerId", question.Answer.answer_id), onClose();
    let url = `/questions/${question.question_id}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, {
      method: "post",
      action: url,
      replace: !0
    });
  };
  return /* @__PURE__ */ import_react57.default.createElement("div", {
    onClick: onClose
  }, /* @__PURE__ */ import_react57.default.createElement(Modal2, {
    show: !0
  }, /* @__PURE__ */ import_react57.default.createElement(ModalDialog2, {
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react57.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: onClose
  }), /* @__PURE__ */ import_react57.default.createElement(ModalHeader4, null, /* @__PURE__ */ import_react57.default.createElement(ModalInfo, null, /* @__PURE__ */ import_react57.default.createElement(ModalTitle4, null, answerDeleteWarning(question.question_id)), /* @__PURE__ */ import_react57.default.createElement(ModalSubtitle2, null, ANSWER_DELETE_WARNING_SUBTITLE))), /* @__PURE__ */ import_react57.default.createElement(ModalFooter4, null, /* @__PURE__ */ import_react57.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, CANCEL), /* @__PURE__ */ import_react57.default.createElement(Button_default, {
    type: "button",
    category: DANGER_BUTTON,
    onClick: onDeleteAnswer
  }, DELETE_ANSWER)))));
}
DeleteAnswerModal.propTypes = {
  question: import_prop_types35.default.shape(),
  onClose: import_prop_types35.default.func.isRequired
};
DeleteAnswerModal.defaultProps = {
  question: null
};
var DeleteAnswerModal_default = DeleteAnswerModal;

// app/components/NetPromoterScoreRow/NetPromoterScoreRow.jsx
init_react();
var import_react59 = __toESM(require("react")), import_prop_types36 = __toESM(require("prop-types"));

// app/components/NetPromoterScoreRow/NetPromoterScoreRow.styled.jsx
init_react();
var import_styled_components31 = __toESM(require("styled-components")), NpsRowContainer = import_styled_components31.default.div`
  background-color: var(--color-secondary);
  border-radius: 15px; 
  border: solid 1px rgba(80, 165, 231, 0.8);
  box-shadow: 0 3px 6px 0 rgba(225, 229, 233, 0.8);
  padding: 20px 24px 16px;
  width: 100%;

  > div {
    display: inline-block;
  }
`, NpsRowDisplayText = import_styled_components31.default.div`
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
`, NpsRowOptionsContainer = import_styled_components31.default.div`
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
  let {
    answer_id,
    hasScored,
    canUndoNps,
    scoreAnswer,
    deleteScore
  } = props, [scored, setScored] = (0, import_react59.useState)(hasScored), [selectedOption, setSelectedOption] = (0, import_react59.useState)(void 0), [undoNps, setUndoNps] = (0, import_react59.useState)(canUndoNps), [selected, setSelected] = (0, import_react59.useState)(!1), sendScore = () => {
    selected && (scoreAnswer(selectedOption, answer_id), setScored(!0));
  }, handleOptionsClick = (score) => {
    setSelectedOption(score), setUndoNps(!0), setSelected(!0);
  }, handleUndoClick = () => {
    deleteScore(answer_id), setScored(!1), setSelected(!1), setSelectedOption("");
  }, generateSendButton = () => /* @__PURE__ */ import_react59.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "send-button",
    onClick: () => sendScore()
  }, "Send"), generateUndoButton = (canUndoNps_) => canUndoNps_ && /* @__PURE__ */ import_react59.default.createElement(Button_default, {
    id: "nps-undo-btn",
    type: "button",
    category: TEXT_BUTTON,
    className: "undo-button",
    onClick: () => handleUndoClick()
  }, UNDO_BUTTON_TEXT);
  function NpsRating() {
    return /* @__PURE__ */ import_react59.default.createElement(NpsRowOptionsContainer, null, SCORES.map((score) => /* @__PURE__ */ import_react59.default.createElement("label", {
      key: score.name,
      className: "nps-row__option--container",
      htmlFor: `choice${score.value}`
    }, /* @__PURE__ */ import_react59.default.createElement("p", null, score.name), /* @__PURE__ */ import_react59.default.createElement("input", {
      type: "radio",
      name: "score",
      checked: selectedOption === score.value,
      onClick: () => handleOptionsClick(score.value)
    }))), generateSendButton());
  }
  return /* @__PURE__ */ import_react59.default.createElement(NpsRowContainer, null, /* @__PURE__ */ import_react59.default.createElement(NpsRowDisplayText, null, /* @__PURE__ */ import_react59.default.createElement("p", null, scored ? DISPLAY_TEXT_AFTER_SCORING : DISPLAY_TEXT_BEFORE_SCORING)), "\b", scored ? generateUndoButton(undoNps) : NpsRating());
}
NetPromoterScoreRow.propTypes = {
  answer_id: import_prop_types36.default.number.isRequired,
  hasScored: import_prop_types36.default.bool.isRequired,
  canUndoNps: import_prop_types36.default.bool.isRequired,
  scoreAnswer: import_prop_types36.default.func.isRequired,
  deleteScore: import_prop_types36.default.func.isRequired
};
var NetPromoterScoreRow_default = NetPromoterScoreRow;

// app/components/QuestionCard/QuestionCard.Styled.jsx
init_react();
var import_styled_components32 = __toESM(require("styled-components")), QuestionCardContainer = import_styled_components32.default.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(225, 229, 233, 0.8);

  > div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`, QuestionCardWrapper = import_styled_components32.default.div`
  width: 100%;
  padding: 15px 20px 10px;

  @media screen and (max-width: 480px) {
    padding: 15px 12px 5px;
  }
`, QuestionCardBorder = import_styled_components32.default.div`
  width: 100%;

  ${(props) => props.hasAnswer && import_styled_components32.css`
    margin-bottom: 15px;
  `}

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`, QuestionCardActions = import_styled_components32.default.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.hasDetail && import_styled_components32.css`
    padding-bottom: 8px;
    background-color: #fff;
  `}

  @media screen and (max-width: 480px) {
    padding-bottom: 8px;
  }
`, CounterButtonsWrapper = import_styled_components32.default.div`
  justify-content: space-between;
  width: 100%;

  ${(props) => props.isAdmin && !props.hasAnswer && import_styled_components32.css`
    justify-content: flex-start;
  `}
  
`;

// app/components/QuestionDetail/QuestionDetail.Styled.jsx
init_react();
var import_styled_components33 = __toESM(require("styled-components")), Container3 = import_styled_components33.default.div`
display: flex;
justify-content: center;
`, QuestionDetail2 = import_styled_components33.default.div`
border-radius: 15px;
width: 100%;
margin-bottom: 30px

`, CounterButtonsWrapper2 = import_styled_components33.default.div`
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        padding-left: 10px;
    }
`, NumComments = import_styled_components33.default.div`
    color: var(--color-dark-50);
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        padding-left: 20px;
    }
`, QuestionDetailHeader = import_styled_components33.default.div`
    padding: 24px 20px 0;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`, QuestionDetailBody = import_styled_components33.default.div`
    padding: 24px 20px 0;

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`, QuestionDetailFooter = import_styled_components33.default.div`
    padding: 24px 20px 0;
`;

// app/components/Loader.jsx
init_react();
var import_react60 = __toESM(require("react")), import_prop_types37 = __toESM(require("prop-types"));

// app/styles/Loader.Styled.jsx
init_react();
var import_styled_components34 = __toESM(require("styled-components"));
var LoaderWrapper = import_styled_components34.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
`, LoaderText = import_styled_components34.default.span`
  font-family: "Nunito";
  font-size: 18px;
  margin: 15px 0;
  text-align: center;

  ${(props) => props.size === LSPIN_SMALL && import_styled_components34.css`
      font-size: 14px;
      margin: 10px 0;
    `}

  ${(props) => props.size === LSPIN_LARGE && import_styled_components34.css`
      font-size: 20px;
      margin: 20px 0;
    `}
`, rotate = import_styled_components34.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, Spinner = import_styled_components34.default.img`
  animation: ${rotate} 0.8s linear infinite;
  display: inline-block;
  margin: 20px 0;

  ${(props) => props.size === LSPIN_SMALL && import_styled_components34.css`
      width: 43px;
      height: 30px;
      margin: 15px 0;
    `}

  ${(props) => props.size === LSPIN_MEDIUM && import_styled_components34.css`
      width: 95px;
      height: 60px;
    `}

  ${(props) => props.size === LSPIN_LARGE && import_styled_components34.css`
      width: 122px;
      height: 82px;
    `}
`;

// app/components/Loader.jsx
function Loader({ src, size }) {
  return /* @__PURE__ */ import_react60.default.createElement(LoaderWrapper, null, /* @__PURE__ */ import_react60.default.createElement(Spinner, {
    src,
    alt: "Wizeline logo",
    size
  }), /* @__PURE__ */ import_react60.default.createElement(LoaderText, {
    size
  }, "Loading..."));
}
Loader.propTypes = {
  src: import_prop_types37.default.string.isRequired,
  size: import_prop_types37.default.string.isRequired
};
var Loader_default = Loader;

// app/images/logomark_small.png
var logomark_small_default = "/build/_assets/logomark_small-AOD5XB2M.png";

// app/components/QuestionDetail/QuestionDetail.jsx
function QuestionDetails(props) {
  let submit = (0, import_react62.useSubmit)(), transition = (0, import_react62.useTransition)(), voteQuestionForm = (0, import_react61.useRef)(), profile = useUser_default(), isAdmin = profile.is_admin, currentUserEmail = profile.email, { question } = props, initialState2 = {
    showAnswerModal: !1,
    showAssignAnswerModal: !1,
    showDeleteAnswerModal: !1
  }, [state, setState] = (0, import_react61.useState)(initialState2), [writingCommentOnMobile, setWritingCommentOnMobile] = (0, import_react61.useState)(!1), [searchParams] = (0, import_react62.useSearchParams)(), { questionId } = (0, import_react_router_dom.useParams)(), addComment = () => {
    setWritingCommentOnMobile(!0);
  }, renderQuestionButtons = () => {
    let onLikeButtonClick = (isUpVote) => {
      if (transition.state !== "idle")
        return;
      let data = new FormData(voteQuestionForm.current);
      data.set("action", actions_default.VOTE_QUESTION), data.set("questionId", question.question_id), data.set("user", JSON.stringify(profile)), data.set("isUpVote", isUpVote);
      let url = `/questions/${question.question_id}`, urlSearchParam = searchParams.get("order");
      url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, {
        method: "post",
        action: url,
        replace: !0
      });
    }, icon = question.hasLike ? ic_like_pressed_default : ic_like_default, dislikeicon = question.hasDislike ? ic_dislike_pressed_default : ic_dislike_default;
    return /* @__PURE__ */ import_react61.default.createElement(CounterButtonsWrapper2, {
      isAdmin,
      hasAnswer: question.Answer
    }, /* @__PURE__ */ import_react61.default.createElement(CounterButton_default, {
      selected: question.hasLike,
      icon,
      count: question.numLikes,
      processingFormSubmission: transition.state !== "idle",
      onClick: () => {
        onLikeButtonClick(!0);
      },
      isDisabled: question.hasDislike
    }), /* @__PURE__ */ import_react61.default.createElement(CounterButton_default, {
      selected: question.hasDislike,
      icon: dislikeicon,
      count: question.numDisklike,
      processingFormSubmission: transition.state !== "idle",
      onClick: () => {
        onLikeButtonClick(!1);
      },
      isDisabled: question.hasLike
    }));
  }, renderNumCommentsRow = () => /* @__PURE__ */ import_react61.default.createElement(NumComments, null, question.numComments, " ", addS("Comment", question.numComments)), openAssignAnswerModal = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showAssignAnswerModal: !0
    }));
  }, openAnswerModal = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showAnswerModal: !0
    }));
  }, openDeleteAnswerModal = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showDeleteAnswerModal: !0
    }));
  }, handleAnswerModalClose = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showAnswerModal: !1
    }));
  }, handleDeleteAnswerModalClose = () => {
    setState(__spreadProps(__spreadValues({}, state), { showDeleteAnswerModal: !1 }));
  }, answerModal = state.showAnswerModal ? /* @__PURE__ */ import_react61.default.createElement(AnswerModal_default, {
    question,
    onClose: handleAnswerModalClose,
    openAssignAnswerModal
  }) : null, deleteAnswerModal = state.showDeleteAnswerModal ? /* @__PURE__ */ import_react61.default.createElement(DeleteAnswerModal_default, {
    question,
    onClose: handleDeleteAnswerModalClose
  }) : null, scoreAnswer = (score, answer_id) => {
    let data = new FormData();
    data.set("score", score), data.set("answer_id", answer_id), data.set("action", actions_default.SCORE_ANSWER);
    let url = `/questions/${question.question_id}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 });
  }, deleteScore = (answer_id) => {
    let data = new FormData();
    data.set("answer_id", answer_id), data.set("action", actions_default.DELETE_SCORE);
    let url = `/questions/${question.question_id}`, urlSearchParam = searchParams.get("order");
    url = urlSearchParam !== null ? `${url}?order=${urlSearchParam}` : url, submit(data, { method: "post", action: url, replace: !0 });
  }, renderNPS = (answer) => answer && answer.AnsweredBy.email !== currentUserEmail && /* @__PURE__ */ import_react61.default.createElement("div", null, /* @__PURE__ */ import_react61.default.createElement(NetPromoterScoreRow_default, {
    answer_id: answer.answer_id,
    hasScored: !!answer.hasScored,
    canUndoNps: !!answer.canUndoNps,
    scoreAnswer,
    deleteScore
  })), isEmpty = (obj) => Object.keys(obj).length === 0, handleAssignAnswerModalClose = () => {
    setState(__spreadProps(__spreadValues({}, state), { showAssignAnswerModal: !1 }));
  }, handleAssignAnswerModalSubmitSuccess = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showAssignAnswerModal: !1,
      showAnswerModal: !1
    }));
  }, assignAnswerModal = state.showAssignAnswerModal ? /* @__PURE__ */ import_react61.default.createElement(AssignAnswerModal_default, {
    question,
    onClose: handleAssignAnswerModalClose,
    onSubmitSuccess: handleAssignAnswerModalSubmitSuccess
  }) : null;
  return /* @__PURE__ */ import_react61.default.createElement(Container3, null, !isEmpty(question) && question.question_id === parseInt(questionId, 10) && isAdmin !== void 0 ? /* @__PURE__ */ import_react61.default.createElement(QuestionDetail2, null, /* @__PURE__ */ import_react61.default.createElement(QuestionDetailHeader, null, /* @__PURE__ */ import_react61.default.createElement(QuestionCardContainer, null, /* @__PURE__ */ import_react61.default.createElement(QuestionCardWrapper, null, /* @__PURE__ */ import_react61.default.createElement(QuestionCardBorder, null, /* @__PURE__ */ import_react61.default.createElement(QuestionRow_default, {
    question,
    isFromList: !1
  }), /* @__PURE__ */ import_react61.default.createElement(QuestionCardActions, {
    hasDetail: !0,
    hasAnswer: question.Answer,
    isQuestionModalOpen: !0
  }, renderQuestionButtons(), shouldRenderAdminButtons(question, isAdmin) && renderAdminButtons({
    question,
    onAnswerClick: () => {
      setState(__spreadProps(__spreadValues({}, state), { showAnswerModal: !0 }));
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
    isQuestionModalOpen: !0,
    isFromList: !1
  })), renderNPS(question.Answer)), /* @__PURE__ */ import_react61.default.createElement(QuestionDetailBody, null, /* @__PURE__ */ import_react61.default.createElement(QuestionCommentList_default, {
    questionId: parseInt(questionId, 10),
    isAdmin,
    hasAnswer: question.Answer !== null
  }, renderNumCommentsRow())), /* @__PURE__ */ import_react61.default.createElement(QuestionDetailFooter, {
    className: writingCommentOnMobile ? "writing-mobile" : ""
  }, /* @__PURE__ */ import_react61.default.createElement(Button_default, {
    type: "button",
    category: PRIMARY_BUTTON,
    className: writingCommentOnMobile ? "writing-mobile" : "add-comment-button",
    onClick: addComment
  }, "Add Comment"), /* @__PURE__ */ import_react61.default.createElement(CommentInput_default, {
    isWritingCommentMobile: writingCommentOnMobile,
    setWritingCommentOnMobile,
    questionId: parseInt(questionId, 10)
  }))) : /* @__PURE__ */ import_react61.default.createElement(Loader_default, {
    src: logomark_small_default,
    size: LSPIN_SMALL
  }), answerModal, deleteAnswerModal, assignAnswerModal);
}
QuestionDetails.propTypes = {
  question: import_prop_types38.default.shape({
    question_id: import_prop_types38.default.number.isRequired,
    question: import_prop_types38.default.string.isRequired,
    user_hash: import_prop_types38.default.string,
    can_edit: import_prop_types38.default.bool,
    AnsweredBy: import_prop_types38.default.shape({
      email: import_prop_types38.default.string,
      employee_id: import_prop_types38.default.number,
      full_name: import_prop_types38.default.string,
      is_admin: import_prop_types38.default.bool,
      job_title: import_prop_types38.default.string,
      profile_picture: import_prop_types38.default.string
    }),
    createdAt: import_prop_types38.default.string.isRequired,
    location: import_prop_types38.default.string.isRequired,
    numComments: import_prop_types38.default.number.isRequired,
    hasVoted: import_prop_types38.default.bool.isRequired,
    Answer: import_prop_types38.default.shape({
      answer: import_prop_types38.default.string,
      answer_id: import_prop_types38.default.number.isRequired,
      answered_at: import_prop_types38.default.string,
      answered_by_id: import_prop_types38.default.number,
      hasScored: import_prop_types38.default.bool,
      canUndoNps: import_prop_types38.default.bool
    }),
    mostUpvoted: import_prop_types38.default.bool,
    numLikes: import_prop_types38.default.number.isRequired,
    numDisklike: import_prop_types38.default.number.isRequired,
    hasLike: import_prop_types38.default.bool.isRequired,
    hasDislike: import_prop_types38.default.bool.isRequired
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
var import_react63 = __toESM(require("react")), import_prop_types39 = __toESM(require("prop-types")), import_react64 = require("@remix-run/react");

// app/components/QuestionDetailInfo/QuestionDetailInfo.Styled.jsx
init_react();
var import_styled_components35 = __toESM(require("styled-components")), QuestionDetailInfoContainer = import_styled_components35.default.div`
  padding: 0 50px;
  margin-top: 10px;
  margin-left: 10px;
`, QuestionDetailInfoSection = import_styled_components35.default.div`
  border-bottom: 1px solid var(--color-dark-25);
  padding: 15px 10px;
`, QuestionDetailInfoTitle = import_styled_components35.default.span`
  display: flex;
  margin-bottom: 15px;
  color: var(--color-dark-50);
  font-weight: 600;
  font-size: 12px;
`, NotAssigned = import_styled_components35.default.span`
  font-size: 12px;
  color: var(--color-dark-25);
`;

// app/components/QuestionDetailInfo/QuestionDetailInfo.jsx
function QuestionDetailInfo({ location, department, employeeName }) {
  let { locations } = (0, import_react64.useLoaderData)();
  return /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoContainer, null, /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoTitle, null, "Location"), /* @__PURE__ */ import_react63.default.createElement(Label_default, {
    text: ((_location, _locations) => _locations.length === 0 ? "..." : _locations.find((loc) => loc.code === location).name)(location, locations),
    type: "Location"
  })), /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoTitle, null, "Department"), department ? /* @__PURE__ */ import_react63.default.createElement(Label_default, {
    text: renderDepartment(department),
    type: "Department"
  }) : /* @__PURE__ */ import_react63.default.createElement(NotAssigned, null, "Not Assigned")), employeeName && /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoSection, null, /* @__PURE__ */ import_react63.default.createElement(QuestionDetailInfoTitle, null, "Assigned to"), /* @__PURE__ */ import_react63.default.createElement(Label_default, {
    text: employeeName,
    type: "Employee"
  })));
}
QuestionDetailInfo.propTypes = {
  location: import_prop_types39.default.string.isRequired,
  department: import_prop_types39.default.string.isRequired,
  employeeName: import_prop_types39.default.string.isRequired
};
var QuestionDetailInfo_default = QuestionDetailInfo;

// app/components/Notifications/index.js
init_react();

// app/components/Notifications/Notifications.jsx
init_react();
var import_react65 = require("@remix-run/react"), import_react66 = __toESM(require("react")), import_react_toastify = require("react-toastify");
var import_constants31 = __toESM(require_constants());

// app/utils/hooks/useGlobalSuccessMessage.js
init_react();
function useGlobalSuccessMessage() {
  let loader14 = useFindLoaderMatch_default("root");
  if (!(!loader14 || !loader14.data))
    return loader14.data.globalSuccess;
}
var useGlobalSuccessMessage_default = useGlobalSuccessMessage;

// app/components/Notifications/Notifications.jsx
function Notifications() {
  let globalSuccess = useGlobalSuccessMessage_default(), data = (0, import_react65.useActionData)();
  return (0, import_react66.useEffect)(() => {
    if (globalSuccess && globalSuccess !== CREATED_ANSWEBOT && globalSuccess !== POSITIVE_FEEDBACK_ANSWEBOT && globalSuccess !== NEGATIVE_FEEDBACK_ANSWEBOT && globalSuccess !== POSTED_ANSWEBOT && import_react_toastify.toast.success(globalSuccess, DEFAULT_TOAST_CONFIG), !data)
      return;
    let {
      error,
      errors,
      successMessage,
      warnings
    } = data;
    error && error.message !== import_constants31.DEFAULT_ERROR_MESSAGE_CREATE_BOT && error.message !== import_constants31.DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT && error.message !== import_constants31.DEFAULT_ERROR_MESSAGE_POST_BOT && import_react_toastify.toast.error(error.message, DEFAULT_TOAST_CONFIG), errors && Array.isArray(errors) && errors.forEach((_error) => {
      _error.message !== import_constants31.DEFAULT_ERROR_MESSAGE_BOT && import_react_toastify.toast.error(_error.message, DEFAULT_TOAST_CONFIG);
    }), warnings && Array.isArray(warnings) && warnings.forEach((warning) => {
      import_react_toastify.toast.warning(warning, DEFAULT_TOAST_CONFIG);
    }), successMessage && import_react_toastify.toast.success(successMessage, DEFAULT_TOAST_CONFIG);
  }, [data, globalSuccess]), /* @__PURE__ */ import_react66.default.createElement(import_react_toastify.ToastContainer, null);
}
var Notifications_default = Notifications;

// app/controllers/questions/getQuestionById.js
init_react();

// app/utils/backend/crypto.js
init_react();
var import_md5 = __toESM(require("md5")), generateSessionIdHash = (session, id) => (0, import_md5.default)(`${session}${id}`), crypto_default = generateSessionIdHash;

// app/controllers/questions/getQuestionById.js
var getQuestionById = async (questionId, user) => {
  if (!questionId || typeof questionId != "number" || parseInt(questionId, 10) < 1)
    return {
      error: {
        message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
        detail: "The question id must be an integer not minor to 1"
      }
    };
  if (!user)
    return {
      error: {
        message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
        detail: "Please provide the user object"
      }
    };
  try {
    let unmappedQuestion = await db.Questions.findUnique({
      where: { question_id: questionId },
      include: {
        _count: {
          select: {
            Comments: !0,
            Votes: !0
          }
        },
        Votes: !0,
        Answers: {
          include: {
            Nps: !0,
            AnsweredBy: !0
          }
        },
        created_by: !0,
        assigned_to: { select: { full_name: !0 } },
        Department: !0
      }
    }), hasUserData = user && user.id, hasAnswer = unmappedQuestion.Answers.length > 0, canUndoNps = !1;
    if (unmappedQuestion.Answers.length > 0) {
      let npsSessionHash = crypto_default(user.id, unmappedQuestion.Answers[0].answer_id);
      canUndoNps = unmappedQuestion.Answers[0].Nps.some((nps) => nps.session_hash === npsSessionHash);
    }
    let Answer = unmappedQuestion.Answers.length < 1 ? null : __spreadProps(__spreadValues({}, unmappedQuestion.Answers[0]), {
      canUndoNps,
      hasScored: (hasUserData && hasAnswer && unmappedQuestion.Answers[0].Nps.some((nps) => nps.user === user.id)) ?? !1
    }), can_edit, numLikes = unmappedQuestion.Votes.filter((vote) => {
      if (vote.is_upvote || vote.is_upvote === null)
        return __spreadValues({}, vote);
    }).length, numDisklike = unmappedQuestion.Votes.filter((vote) => {
      if (!vote.is_upvote && vote.is_upvote !== null)
        return __spreadValues({}, vote);
    }).length, hasLike = (hasUserData && unmappedQuestion.Votes.some((vote) => (vote.is_upvote || vote.is_upvote === null) && vote.user === user.id)) ?? !1, hasDislike = (hasUserData && unmappedQuestion.Votes.some((vote) => !vote.is_upvote && vote.is_upvote !== null && vote.user === user.id)) ?? !1;
    return unmappedQuestion.created_by && (can_edit = user && user.email && user.email === unmappedQuestion.created_by.email), {
      question: __spreadProps(__spreadValues({}, unmappedQuestion), {
        hasVoted: unmappedQuestion.Votes.some((vote) => vote.user === user.id) ?? !1,
        num_votes: unmappedQuestion._count.Votes,
        numComments: unmappedQuestion._count.Comments,
        Answer,
        can_edit,
        numLikes,
        numDisklike,
        hasLike,
        hasDislike
      })
    };
  } catch {
    return {
      error: {
        message: QUESTION_NOT_FOUND_ERROR_MESSAGE,
        detail: QUESTION_NOT_FOUND_ERROR_MESSAGE
      }
    };
  }
}, getQuestionById_default = getQuestionById;

// app/controllers/locations/list.js
init_react();
var listLocations = async () => await db.Locations.findMany({
  orderBy: {
    name: "asc"
  }
}), list_default3 = listLocations;

// app/controllers/questions/modifyPinStatus.js
init_react();

// app/utils/backend/validators/question.js
init_react();
var import_joi = __toESM(require("joi")), import_constants33 = __toESM(require_constants()), import_joiConstants = __toESM(require_joiConstants()), createQuestionSchema = import_joi.default.object().keys({
  username: import_joi.default.string().allow(null),
  accessToken: import_joi.default.string().required(),
  question: import_joi.default.string().min(import_constants33.MINIMUM_QUESTION_LENGTH).max(import_constants33.MAXIMUM_QUESTION_LENGTH).required(),
  is_anonymous: import_joi.default.boolean().required(),
  location: import_joi.default.string().required(),
  created_by_employee_id: import_joi.default.number().integer().min(1).allow(null),
  assigned_department: import_joi.default.number().integer().min(1).allow(null),
  assigned_to_employee_id: import_joi.default.number().integer().min(1).allow(null),
  botEnabled: import_joi.default.boolean()
}), modifyQuestionPinStatusParams = import_joi.default.object().keys({
  questionId: import_joi.default.number().integer().required().min(1),
  newPinStatus: import_joi.default.boolean().required()
}), assignQuestionSchema = import_joi.default.object().keys({
  question_id: import_joiConstants.JOI_ID_VALIDATION,
  assigned_department: import_joiConstants.JOI_ID_VALIDATION
}), modifyQuestionEnabledValueParams = import_joi.default.object().keys({
  questionId: import_joi.default.number().integer().required().min(1),
  enabledValue: import_joi.default.boolean().required()
});

// app/controllers/questions/modifyPinStatus.js
var modifyPinStatus = async (questionId, newPinStatus) => {
  let { error, value } = modifyQuestionPinStatusParams.validate({
    questionId,
    newPinStatus
  });
  if (error)
    return {
      error: {
        message: PIN_QUESTION_ERROR_MESSAGE,
        detail: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE
      }
    };
  try {
    let updatedQuestion = await db.Questions.update({
      where: { question_id: value.questionId },
      data: { is_pinned: value.newPinStatus }
    });
    return {
      successMessage: `The question has been ${updatedQuestion.is_pinned ? "pinned" : "unpinned"}.`,
      question: updatedQuestion
    };
  } catch {
    return {
      error: {
        message: PIN_QUESTION_ERROR_MESSAGE,
        detail: QUESTION_NOT_FOUND_ERROR_MESSAGE
      }
    };
  }
}, modifyPinStatus_default = modifyPinStatus;

// app/controllers/questionVotes/voteQuestion.js
init_react();
var voteQuestion = async (questionId, user, isUpVote) => {
  if (!questionId || typeof questionId != "number" || parseInt(questionId, 10) < 1)
    return {
      error: {
        message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
        detail: "The question id must be an integer not minor to 1"
      }
    };
  if (!user)
    return {
      error: {
        message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
        detail: "Please provide the user object"
      }
    };
  try {
    let targetQuestion = await db.Questions.findUniqueOrThrow({
      where: { question_id: questionId },
      include: {
        _count: {
          select: {
            Votes: !0
          }
        }
      }
    }), voteByUser = await db.Votes.findFirst({
      where: {
        question_id: questionId,
        user: user.id
      }
    });
    if (voteByUser === null)
      return {
        response: {
          vote: await db.Votes.create({
            data: {
              question_id: targetQuestion.question_id,
              user: user.id,
              is_upvote: isUpVote
            }
          }),
          upVoteCount: targetQuestion._count.Votes + 1
        }
      };
    try {
      let deletedVote = await db.Votes.delete({ where: { id: voteByUser.id } });
      return {
        response: {
          voteSuccessfullyDeleted: !0,
          deletedVote,
          upVoteCount: targetQuestion._count.Votes - 1
        }
      };
    } catch {
      return {
        error: {
          message: INVALIDATE_VOTE_ERROR_MESSAGE,
          detail: INVALIDATE_VOTE_ERROR_MESSAGE
        }
      };
    }
  } catch {
    return {
      error: {
        message: QUESTION_NOT_FOUND_ERROR_MESSAGE,
        detail: QUESTION_NOT_FOUND_ERROR_MESSAGE
      }
    };
  }
}, voteQuestion_default = voteQuestion;

// app/controllers/answers/create.js
init_react();
var import_moment3 = __toESM(require("moment")), import_constants37 = __toESM(require_constants());

// app/utils/backend/validators/answer.js
init_react();
var import_joi2 = __toESM(require("joi")), import_constants36 = __toESM(require_constants()), import_joiConstants2 = __toESM(require_joiConstants()), createAnswerSchema = import_joi2.default.object().keys({
  answer_text: import_joi2.default.string().min(import_constants36.MINIMUM_ANSWER_LENGTH).max(import_constants36.MAXIMUM_ANSWER_LENGTH).required(),
  answered_by_employee_id: import_joiConstants2.JOI_ID_VALIDATION,
  answered_question_id: import_joiConstants2.JOI_ID_VALIDATION
}), updateAnswerSchema = import_joi2.default.object().keys({
  answer_id: import_joiConstants2.JOI_ID_VALIDATION,
  answer_text: import_joi2.default.string().min(import_constants36.MINIMUM_ANSWER_LENGTH).max(import_constants36.MAXIMUM_ANSWER_LENGTH).required()
}), deleteAnswerSchema = import_joi2.default.object().keys({
  answer_id: import_joiConstants2.JOI_ID_VALIDATION
}), npsSchema = import_joi2.default.object().keys({
  id: import_joiConstants2.JOI_ID_VALIDATION,
  score: import_joi2.default.number().integer().required().min(1).max(5)
});

// app/utils/backend/sanitizer.js
init_react();
var XSS2 = require("xss");
function sanitizeHTML(content3) {
  let token = "`", options = {
    whiteList: [],
    stripIgnoreTag: !0,
    stripIgnoreTagBody: ["script"],
    escapeHtml: (html4) => html4
  }, splitContent = content3.split(token), contentLength = splitContent.length, finalContent = "";
  for (let i = 1; i < contentLength; i += 2)
    finalContent += XSS2(splitContent[i - 1], options), finalContent += token + splitContent[i] + token;
  return contentLength % 2 === 1 && (finalContent += XSS2(splitContent[contentLength - 1], options)), finalContent;
}
var sanitizer_default = sanitizeHTML;

// app/utils/backend/slackNotifications.js
init_react();
var import_slack_notify = __toESM(require("slack-notify")), import_slackConstants = __toESM(require_slackConstants());

// app/utils/backend/stringUtils.js
init_react();
var import_utilConstants = __toESM(require_utilConstants());
function stripNewLines(str) {
  return str.replace(/[\r\n]+/g, " ");
}
function truncate(str, maxLength) {
  if (str.length <= maxLength)
    return str;
  let indexOfLastSpace = str.lastIndexOf(" ", maxLength);
  return indexOfLastSpace !== -1 ? `${str.substring(0, indexOfLastSpace)} ${import_utilConstants.TRUNCATE_ENDING}` : maxLength > import_utilConstants.HTTP_PREFIX.length && str.substring(0, import_utilConstants.HTTP_PREFIX.length) === import_utilConstants.HTTP_PREFIX ? import_utilConstants.TRUNCATE_ENDING : `${str.substring(0, maxLength)} ${import_utilConstants.TRUNCATE_ENDING}`;
}
function getStringSizeInBytes(str) {
  if (typeof str != "string")
    throw new TypeError(`'str' value of (${str}) must be a string, not ${typeof str}.`);
  return Buffer.from(str).length;
}
function truncateStringByBytes(str, maxSizeInBytes, suffix = "...") {
  let buffer2 = Buffer.from(str);
  return buffer2.length <= maxSizeInBytes ? buffer2.toString() : `${buffer2.subarray(0, maxSizeInBytes - suffix.length)}${suffix}`;
}

// app/utils/backend/slackNotifications.js
var slack = (0, import_slack_notify.default)(process.env.SLACK_WEBHOOK_URL);
async function send(options) {
  let { icon_emoji, attachments } = options, defaults = {
    icon_emoji,
    username: import_slackConstants.DEFAULT_SLACK_NAME,
    attachments: [
      {
        fallback: import_slackConstants.SLACK_FALLBACK_STRING,
        mrkdwn_in: ["text"],
        text: attachments.text,
        color: attachments.color,
        pretext: attachments.pretext,
        footer: attachments.footer
      }
    ]
  };
  await slack.send(defaults);
}
function buildUrl(questionId) {
  return `https://${process.env.SLACK_WIZEQ_DOMAIN || import_slackConstants.DEFAULT_DOMAIN}/questions/${questionId}`;
}
async function createAnswerNotification({ questionId, questionBody, answerBody }) {
  if (!process.env.SLACK_WEBHOOK_URL)
    return;
  let url = buildUrl(questionId), limit = import_slackConstants.SLACK_MAX_MESSAGE_SIZE_IN_BYTES, footerBody = import_slackConstants.SLACK_QUESTION_DETAILS;
  if (getStringSizeInBytes(questionBody + answerBody) > limit) {
    footerBody = import_slackConstants.SLACK_QUESTION_SEE_MORE;
    let maxQuestionSizeInBytes = Math.max(limit * 0.2, limit - getStringSizeInBytes(answerBody));
    if (questionBody = truncateStringByBytes(questionBody, maxQuestionSizeInBytes), getStringSizeInBytes(questionBody + answerBody) > limit) {
      let maxAnswerSizeInBytes = limit - getStringSizeInBytes(questionBody);
      answerBody = truncateStringByBytes(questionBody, maxAnswerSizeInBytes);
    }
  }
  let text5 = `*Q*: _<${url}|${questionBody}>_ 
*A*: ${answerBody}`, footer2 = `<${url}|${footerBody}>`;
  await send({
    icon_emoji: import_slackConstants.SLACK_ANSWER_EMOJI,
    attachments: {
      text: text5,
      footer: footer2,
      color: import_slackConstants.SLACK_ANSWER_COLOR,
      pretext: import_slackConstants.SLACK_ANSWER_HEADER
    }
  });
}
async function createQuestionNotification({ questionBody, questionId }) {
  if (!process.env.SLACK_WEBHOOK_URL)
    return;
  let url = buildUrl(questionId), footerBody = import_slackConstants.SLACK_QUESTION_DETAILS;
  getStringSizeInBytes(questionBody) > import_slackConstants.SLACK_MAX_MESSAGE_SIZE_IN_BYTES && (questionBody = truncateStringByBytes(questionBody, import_slackConstants.SLACK_MAX_MESSAGE_SIZE_IN_BYTES), footerBody = import_slackConstants.SLACK_QUESTION_SEE_MORE);
  let text5 = `*Q*: _<${url}|${questionBody}>_`, footer2 = `<${url}|${footerBody}>`;
  await send({
    icon_emoji: import_slackConstants.SLACK_QUESTION_EMOJI,
    attachments: {
      text: text5,
      footer: footer2,
      color: import_slackConstants.SLACK_QUESTION_COLOR,
      pretext: import_slackConstants.SLACK_QUESTION_HEADER
    }
  });
}
var slackNotifications_default = {
  createQuestionNotification,
  createAnswerNotification
};

// app/controllers/answers/create.js
var createAnswer = async (body) => {
  let { error, value } = createAnswerSchema.validate(body);
  if (error)
    return {
      error: { message: import_constants37.DEFAULT_ERROR_MESSAGE, detail: error.message }
    };
  let _a = value, { answered_by_employee_id, answered_question_id } = _a, rest = __objRest(_a, ["answered_by_employee_id", "answered_question_id"]), answer = await db.Answers.create({
    data: __spreadProps(__spreadValues({}, rest), {
      answer_text: sanitizer_default(value.answer_text),
      answer_date: import_moment3.default.utc().format(import_constants37.DATE_TIME_FORMAT),
      AnsweredBy: {
        connect: {
          employee_id: answered_by_employee_id
        }
      },
      Question: {
        connect: {
          question_id: answered_question_id
        }
      }
    })
  }), relatedQuestion = await db.Questions.findUnique({
    where: {
      question_id: answer.answered_question_id
    }
  });
  return await slackNotifications_default.createAnswerNotification({
    questionId: relatedQuestion.question_id,
    questionBody: stripNewLines(relatedQuestion.question),
    answerBody: answer.answer_text
  }), {
    successMessage: "The answer was submitted successfully.",
    answer
  };
}, create_default = createAnswer;

// app/controllers/answers/update.js
init_react();
var import_moment4 = __toESM(require("moment")), import_constants38 = __toESM(require_constants());
var updateAnswer = async (query) => {
  let { error, value } = updateAnswerSchema.validate(query), { answer_id, answer_text } = value;
  if (error)
    return {
      error: { message: import_constants38.DEFAULT_ERROR_MESSAGE, detail: error.details }
    };
  let updatedAnswer = await db.Answers.update({
    where: {
      answer_id
    },
    data: {
      answer_text,
      answer_date: import_moment4.default.utc().format(import_constants38.DATE_TIME_FORMAT),
      updatedAt: import_moment4.default.utc().format(import_constants38.DATE_TIME_FORMAT)
    }
  });
  return {
    successMessage: "The answer has been updated succesfully.",
    updatedAnswer
  };
}, update_default = updateAnswer;

// app/controllers/answers/delete.js
init_react();
var import_constants39 = __toESM(require_constants());
var deleteAnswer = async (query) => {
  let { error, value } = deleteAnswerSchema.validate(query), { answer_id } = value;
  return error ? {
    error: { message: import_constants39.DEFAULT_ERROR_MESSAGE, detail: error.details }
  } : (await db.Nps.deleteMany({
    where: {
      answer_id
    }
  }), await db.Answers.delete({
    where: {
      answer_id
    }
  }), {
    successMessage: "The answer was deleted succesfully."
  });
}, delete_default = deleteAnswer;

// app/controllers/comments/list.js
init_react();
var import_client2 = require("@prisma/client");

// app/utils/backend/comments.js
init_react();
var import_moment5 = __toESM(require("moment"));
function generateMinMaxDates() {
  let DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";
  return {
    minDate: import_moment5.default.utc().subtract(24, "hours").format(DATE_FORMAT),
    maxDate: import_moment5.default.utc().format(DATE_FORMAT)
  };
}
function canEditComment(comment, userEmail, sessionToken) {
  if (comment.userEmail)
    return userEmail === comment.userEmail;
  let { minDate, maxDate } = generateMinMaxDates(), sessionHash = crypto_default(sessionToken, comment.id), isValidDateRangeForEdit = (0, import_moment5.default)(comment.createdAt).isBetween(minDate, maxDate);
  return comment.sessionHash === sessionHash && isValidDateRangeForEdit;
}

// app/controllers/comments/list.js
var listComments = async (params) => {
  let {
    questionId,
    userEmail,
    userId,
    sortBy,
    sessionToken
  } = params;
  return !questionId || questionId < 1 || typeof questionId != "number" ? {
    error: {
      message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
      details: "The question id must be an integer not minor to 1"
    }
  } : { comments: (await db.$queryRaw`
SELECT c.id,
c.comment,
c.createdAt,
(SELECT CASE WHEN ISNULL(updatedAt) THEN createdAt WHEN updatedAt > createdAt THEN updatedAt ELSE createdAt END) as recent_activity,
c.questionId, 
c.sessionHash,
c.userName,
c.userEmail,
c.approvedBy,
(SELECT IFNULL(SUM(CommentVote.value), 0) FROM CommentVote WHERE CommentVote.comment_id = c.id) as votes,
(SELECT IF (EXISTS(SELECT * FROM CommentVote WHERE CommentVote.comment_id = c.id AND CommentVote.user = ${userId} AND CommentVote.value = 1), true, false)) as has_upvoted, 
(SELECT IF (EXISTS(SELECT * FROM CommentVote WHERE CommentVote.comment_id = c.id AND CommentVote.user = ${userId} AND CommentVote.value = -1), true, false)) as has_downvoted, 
User.employee_id as 'UserEmployee_id',
User.full_name as 'UserFull_name',
User.is_admin as 'UserIs_admin',
User.profile_picture as 'UserProfile_picture',
User.job_title as 'UserJob_title',
Approver.employee_id as 'ApproverEmployee_id',
Approver.full_name as 'ApproverFull_name',
Approver.is_admin as 'ApproverIs_admin',
Approver.profile_picture as 'ApproverProfile_picture',
Approver.job_title as 'ApproverJob_title'
FROM Comments  as c 
LEFT JOIN users as User
ON c.userEmail = User.email
LEFT JOIN users as Approver
ON c.approvedBy = Approver.employee_id
WHERE c.questionId = ${questionId}
${sortBy === "votes" ? import_client2.Prisma.sql`ORDER BY approvedBy DESC, votes DESC, recent_activity DESC` : import_client2.Prisma.sql`ORDER BY approvedBy DESC, recent_activity DESC`}`).map((comment) => {
    comment.canEdit = canEditComment(comment, userEmail, sessionToken), delete comment.sessionHash;
    let User2 = {
      employee_id: comment.UserEmployee_id,
      full_name: comment.UserFull_name,
      is_admin: comment.UserIs_admin,
      profile_picture: comment.UserProfile_picture,
      job_title: comment.UserJob_title
    };
    comment.User = User2;
    let Approver = {
      employee_id: comment.ApproverEmployee_id,
      full_name: comment.ApproverFull_name,
      is_admin: comment.ApproverIs_admin,
      profile_picture: comment.ApproverProfile_picture,
      job_title: comment.ApproverJob_title
    };
    return comment.Approver = Approver, comment.has_downvoted = comment.has_downvoted === 1, comment.has_upvoted = comment.has_upvoted === 1, delete comment.UserEmployee_id, delete comment.UserFull_name, delete comment.UserIs_admin, delete comment.UserProfile_picture, delete comment.UserJob_title, delete comment.ApproverEmployee_id, delete comment.ApproverFull_name, delete comment.ApproverIs_admin, delete comment.ApproverProfile_picture, delete comment.ApproverJob_title, comment;
  }) };
}, list_default4 = listComments;

// app/controllers/comments/create.js
init_react();
var import_constants42 = __toESM(require_constants());

// app/utils/backend/validators/comment.js
init_react();
var import_joi3 = __toESM(require("joi")), import_constants41 = __toESM(require_constants()), import_joiConstants3 = __toESM(require_joiConstants());
var COMMENT_VALIDATION = import_joi3.default.string().min(import_constants41.MINIMUM_COMMENT_LENGTH).max(3e3).required(), createCommentSchema = import_joi3.default.object().keys({
  questionId: import_joiConstants3.JOI_ID_VALIDATION,
  comment: COMMENT_VALIDATION,
  isAnonymous: import_joi3.default.boolean(),
  user: import_joi3.default.object({
    accessToken: import_joi3.default.string().required(),
    userEmail: import_joiConstants3.JOI_EMAIL_VALIDATION,
    userName: import_joi3.default.string()
  })
}), comment_default = createCommentSchema;

// app/controllers/comments/create.js
var createComment = async (data) => {
  let { error, value } = comment_default.validate(data);
  if (error)
    return {
      error: {
        message: import_constants42.DEFAULT_ERROR_MESSAGE,
        detail: error
      }
    };
  if (!value.isAnonymous && !value.user.userEmail)
    return {
      error: {
        message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
        detail: "The comment is not anonymous but no user email was provided in the user object"
      }
    };
  let commentData = {
    Questions: {
      connect: {
        question_id: value.questionId
      }
    },
    comment: value.comment
  };
  value.isAnonymous || (commentData.User = {
    connect: {
      email: value.user.userEmail
    }
  }, commentData.userName = value.user.userName);
  let created = await db.Comments.create({
    data: commentData
  }), commentResponse = created;
  if (value.isAnonymous) {
    let sessionHash = crypto_default(value.user.accessToken, created.id);
    commentResponse = await db.Comments.update({
      where: {
        id: created.id
      },
      data: {
        sessionHash
      }
    });
  }
  return {
    successMessage: "The comment was created succesfully.",
    comment: commentResponse
  };
}, create_default2 = createComment;

// app/controllers/comments/update.js
init_react();
var import_constants45 = __toESM(require_constants());

// app/utils/backend/validators/comments.js
init_react();
var import_joi4 = __toESM(require("joi")), import_joiConstants4 = __toESM(require_joiConstants()), import_constants44 = __toESM(require_constants()), EMAIL_VALIDATION = import_joi4.default.string().email().allow(null), SIMPLE_INTEGER_VALIDATION = import_joi4.default.number().integer(), getCommentsSchema = import_joi4.default.object().keys({
  questionId: import_joiConstants4.JOI_ID_VALIDATION,
  limit: SIMPLE_INTEGER_VALIDATION,
  offset: SIMPLE_INTEGER_VALIDATION,
  userEmail: EMAIL_VALIDATION,
  sessionToken: import_joiConstants4.JOI_SIMPLE_STRING_VALIDATION,
  userId: import_joiConstants4.JOI_SIMPLE_STRING_VALIDATION,
  sortBy: import_joiConstants4.JOI_SIMPLE_STRING_VALIDATION
}), updateCommentSchema = import_joi4.default.object().keys({
  commentId: import_joiConstants4.JOI_ID_VALIDATION,
  comment: import_joi4.default.string().min(import_constants44.MINIMUM_COMMENT_LENGTH).max(import_constants44.MAXIMUM_COMMENT_LENGTH).required(),
  accessToken: import_joi4.default.string().required(),
  userEmail: EMAIL_VALIDATION
}), deleteCommentSchema = import_joi4.default.object().keys({
  commentId: import_joiConstants4.JOI_ID_VALIDATION,
  accessToken: import_joi4.default.string().required(),
  userEmail: EMAIL_VALIDATION
}), approvedByCommentSchema = import_joi4.default.object().keys({
  commentId: import_joiConstants4.JOI_ID_VALIDATION.required(),
  questionId: SIMPLE_INTEGER_VALIDATION.required(),
  employeeId: SIMPLE_INTEGER_VALIDATION.required(),
  checked: import_joi4.default.boolean().required()
}), questionCommentedSchema = import_joi4.default.object().keys({
  userEmail: EMAIL_VALIDATION
});

// app/controllers/comments/update.js
var updateComment = async (body) => {
  let { error, value } = updateCommentSchema.validate(body);
  if (error)
    return {
      errors: [
        {
          message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
          detail: error
        }
      ]
    };
  let {
    commentId: id,
    comment,
    accessToken,
    userEmail
  } = value, sessionHash = crypto_default(accessToken, id), { minDate, maxDate } = generateMinMaxDates(), updateCommentResponse = await db.Comments.updateMany({
    data: { comment },
    where: {
      id,
      OR: [
        {
          userEmail
        },
        {
          AND: [
            {
              sessionHash
            },
            {
              createdAt: { lte: new Date(maxDate) }
            },
            {
              createdAt: { gte: new Date(minDate) }
            }
          ]
        }
      ]
    }
  });
  return updateCommentResponse.count === void 0 || typeof updateCommentResponse.count != "number" ? {
    error: {
      message: import_constants45.DEFAULT_ERROR_MESSAGE,
      detail: "Something went wrong trying to update the comment"
    }
  } : updateCommentResponse.count === 0 ? {
    error: {
      message: UPDATE_COMMENT_ERROR_MESSAGE,
      detail: "Comment not found or user does not have edit rights over the comment"
    }
  } : updateCommentResponse.count === 1 ? {
    successMessage: "The comment was updated successfully!"
  } : {
    error: {
      message: UPDATE_COMMENT_ERROR_MESSAGE,
      detail: `More than one comment was updated, which should not have happened, number of affected comments: ${updateCommentResponse.count}`
    }
  };
}, update_default2 = updateComment;

// app/controllers/commentVotes/voteComment.js
init_react();
var import_constants47 = __toESM(require_constants());

// app/utils/backend/validators/commentVote.js
init_react();
var import_joi5 = __toESM(require("joi")), import_joiConstants5 = __toESM(require_joiConstants()), commentVoteExistsSchema = import_joi5.default.object().keys({
  comment_id: import_joiConstants5.JOI_ID_VALIDATION,
  user: import_joi5.default.string().required()
}), commentVoteSchema = import_joi5.default.object().keys({
  comment_id: import_joiConstants5.JOI_ID_VALIDATION,
  user: import_joi5.default.string().required(),
  value: import_joi5.default.number().integer().required().min(-1).max(1)
});

// app/controllers/commentVotes/voteComment.js
var transformValue = (value) => {
  let transformedValue = 0;
  return value >= 1 ? transformedValue = 1 : value <= -1 && (transformedValue = -1), transformedValue;
}, findCommentVote = async (query) => {
  let { error, value } = commentVoteExistsSchema.validate(query), { comment_id, user } = value;
  return error ? {
    error: { message: import_constants47.DEFAULT_ERROR_MESSAGE, detail: error.details }
  } : await db.CommentVote.findFirst({
    where: {
      comment_id,
      user
    }
  });
}, upsertCommentVote = async (query) => {
  let { error, value } = commentVoteSchema.validate(query), { comment_id, user, value: newValue } = value;
  if (error)
    return {
      error: { message: import_constants47.DEFAULT_ERROR_MESSAGE, detail: error.details }
    };
  let foundCommentVote = await findCommentVote({ comment_id, user });
  if (foundCommentVote) {
    let alreadyUpvoted = foundCommentVote.value >= 1 && newValue >= 1, alreadyDownvoted = foundCommentVote.value <= -1 && newValue <= -1, temp;
    return alreadyUpvoted || alreadyDownvoted ? temp = 0 : temp = newValue, {
      commentVote: await db.CommentVote.update({
        where: {
          id: foundCommentVote.id
        },
        data: {
          value: transformValue(temp)
        }
      })
    };
  }
  return { commentVote: await db.CommentVote.create({
    data: {
      user,
      comment_id,
      value: transformValue(newValue)
    }
  }) };
}, voteComment_default = upsertCommentVote;

// app/controllers/comments/delete.js
init_react();
var import_constants48 = __toESM(require_constants());
var deleteComment = async (body) => {
  let { error, value } = deleteCommentSchema.validate(body);
  if (error)
    return {
      errors: [
        {
          message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
          detail: error
        }
      ]
    };
  let { commentId: id, accessToken, userEmail } = value, sessionHash = crypto_default(accessToken, id), { minDate, maxDate } = generateMinMaxDates(), deleteCommentResponse = await db.Comments.deleteMany({
    where: {
      id,
      OR: [
        {
          userEmail
        },
        {
          AND: [
            {
              sessionHash
            },
            {
              createdAt: { lte: new Date(maxDate) }
            },
            {
              createdAt: { gte: new Date(minDate) }
            }
          ]
        }
      ]
    }
  });
  return deleteCommentResponse.count === void 0 || typeof deleteCommentResponse.count != "number" ? {
    error: {
      message: import_constants48.DEFAULT_ERROR_MESSAGE,
      detail: "Something went wrong trying to delete the comment"
    }
  } : deleteCommentResponse.count === 0 ? {
    error: {
      message: DELETE_COMMENT_ERROR_MESSAGE,
      detail: `Comment not found or user does not have deletion rights over the comment. Comment id: ${id}`
    }
  } : deleteCommentResponse.count === 1 ? {
    successMessage: "The comment was deleted successfully"
  } : {
    error: {
      message: DELETE_COMMENT_ERROR_MESSAGE,
      detail: `Multiple comments were deleted, which should not have happened, number of affected comments: ${deleteCommentResponse.count}`
    }
  };
}, delete_default2 = deleteComment;

// app/controllers/answers/nps/create.js
init_react();

// app/utils/backend/objectUtils.js
init_react();
function isEmptyObject(object) {
  return Object.keys(object).length === 0;
}

// app/utils/backend/validators/nps.js
init_react();
var import_joi6 = __toESM(require("joi")), import_joiConstants6 = __toESM(require_joiConstants()), createNPSSchema = import_joi6.default.object({
  answer_id: import_joiConstants6.JOI_ID_VALIDATION,
  score: import_joi6.default.number().integer(),
  user: import_joi6.default.object(),
  accessToken: import_joi6.default.string()
}), deleteNPSSchema = import_joi6.default.object({
  id: import_joi6.default.number().integer(),
  user: import_joi6.default.object()
});

// app/controllers/answers/nps/create.js
var import_constants50 = __toESM(require_constants());
var createNPS = async (params) => {
  let { error, value } = createNPSSchema.validate(params);
  if (error)
    return {
      errors: [{ message: import_constants50.DEFAULT_ERROR_MESSAGE, detail: error.details }]
    };
  try {
    let { score, answer_id, user } = value, npmCreated = await db.Nps.create({
      data: {
        answer_id,
        user: user.id,
        score,
        session_hash: crypto_default(user.id, answer_id)
      }
    });
    return isEmptyObject(npmCreated) ? {
      errors: [
        {
          message: "something went wrong at created the netscore",
          detail: "something went wrong at created the netscore"
        }
      ]
    } : {
      npmCreated
    };
  } catch (errorCatch) {
    return {
      errors: [
        {
          message: "Something went wrong at created the netscore",
          detail: errorCatch
        }
      ]
    };
  }
}, create_default3 = createNPS;

// app/controllers/comments/approvedBy.js
init_react();
var import_constants52 = __toESM(require_constants());
var approvedByComment = async (params) => {
  let { error, value } = approvedByCommentSchema.validate(params);
  if (error)
    return {
      errors: [
        {
          message: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE,
          detail: error
        }
      ]
    };
  let {
    questionId,
    commentId,
    employeeId,
    checked
  } = value;
  if ((await db.Comments.findMany({
    where: {
      AND: [{
        questionId
      }, {
        id: {
          not: commentId
        }
      }, {
        approvedBy: {
          not: null
        }
      }]
    }
  })).length > 0)
    return {
      errors: [
        {
          message: import_constants52.COMMENT_AS_AN_ANSWER,
          detail: import_constants52.COMMENT_AS_AN_ANSWER
        }
      ]
    };
  let commentUpdated = await db.Comments.update({
    where: { id: commentId },
    data: { approvedBy: checked ? employeeId : null }
  });
  return isEmptyObject(commentUpdated) ? {
    error: {
      message: import_constants52.DEFAULT_ERROR_MESSAGE,
      detail: "Something went wrong trying to update the comment"
    }
  } : {
    successMessage: `Comment ${checked ? "marked" : "unmarked"} as an approved answer successfully`,
    response: `Comment ${checked ? "marked" : "unmarked"} as an approved answer successfully`
  };
}, approvedBy_default = approvedByComment;

// app/controllers/questions/assignQuestion.js
init_react();
var import_constants53 = __toESM(require_constants());
var assignQuestion = async (query) => {
  let { error, value } = assignQuestionSchema.validate(query), { question_id, assigned_department } = value;
  if (error)
    return { errors: [{ message: import_constants53.DEFAULT_ERROR_MESSAGE, detail: error.details }] };
  try {
    let assignedQuestion = await db.Questions.update({
      where: { question_id },
      data: {
        assigned_department
      }
    });
    return {
      successMessage: "The question department has been reassigned successfully",
      assignedQuestion
    };
  } catch {
    return {
      error: {
        message: QUESTION_NOT_FOUND_ERROR_MESSAGE,
        detail: QUESTION_NOT_FOUND_ERROR_MESSAGE
      }
    };
  }
}, assignQuestion_default = assignQuestion;

// app/controllers/departments/list.js
init_react();
var listDepartments = async () => await db.Departments.findMany({}), list_default5 = listDepartments;

// app/controllers/answers/nps/delete.js
init_react();
var import_constants55 = __toESM(require_constants());
var deleteNPS = async (params) => {
  let { error, value } = deleteNPSSchema.validate(params);
  if (error)
    return {
      errors: [{ message: import_constants55.DEFAULT_ERROR_MESSAGE, detail: error.details }]
    };
  let { id, user } = value;
  try {
    return await db.Nps.delete({
      where: {
        answer_id_user: {
          answer_id: id,
          user: user.id
        }
      }
    }), {
      successMessage: "Your answer score was cleared."
    };
  } catch (errorCatch) {
    return {
      errors: [
        {
          message: "Something went wrong when resetting the answer score",
          detail: errorCatch
        }
      ]
    };
  }
}, delete_default3 = deleteNPS;

// app/controllers/questions/modifyEnableStatus.js
init_react();
var modifyEnabledValue = async (questionId, enabledValue) => {
  let { error, value } = modifyQuestionEnabledValueParams.validate({
    questionId,
    enabledValue
  });
  if (error)
    return {
      error: {
        message: ENABLE_DISABLE_ERROR_MESSAGE,
        detail: INVALID_PARAMS_FOR_OPERATION_ERROR_MESSAGE
      }
    };
  try {
    let updatedQuestion = await db.Questions.update({
      where: { question_id: value.questionId },
      data: { is_enabled: value.enabledValue }
    });
    return {
      successMessage: `The question has been ${enabledValue ? "enabled" : "disabled"}.`,
      question: updatedQuestion
    };
  } catch {
    return {
      error: {
        message: ENABLE_DISABLE_ERROR_MESSAGE,
        detail: QUESTION_NOT_FOUND_ERROR_MESSAGE
      }
    };
  }
}, modifyEnableStatus_default = modifyEnabledValue;

// app/routes/questions/$questionId.jsx
var replacer = (key, value) => typeof value == "bigint" ? value.toString() : value, jsonCustom = (data, init = {}) => {
  let responseInit = typeof init == "number" ? {
    status: init
  } : init, headers = new Headers(responseInit.headers);
  return headers.has("Content-Type") || headers.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(data, replacer), __spreadProps(__spreadValues({}, responseInit), {
    headers
  }));
}, loader3 = async ({ request, params }) => {
  await requireAuth(request);
  let user = await getAuthenticatedUser(request), order2 = new URL(request.url).searchParams.get("order"), { questionId } = params, { question } = await getQuestionById_default(parseInt(questionId, 10), user);
  if (!question)
    return (0, import_node3.redirect)("/404");
  let locations = await list_default3(), departments = await list_default5(), parametros = {
    questionId: parseInt(questionId, 10),
    userEmail: user.email,
    userId: user.id,
    sortBy: order2 ?? DEFAULT_QUESTION_COMMENT_SORTING,
    sessionToken: user.accessToken
  }, { comments } = await list_default4(parametros);
  return jsonCustom({
    question,
    locations,
    departments,
    comments
  });
}, action = async ({ request }) => {
  let formData = await request.formData(), action7 = formData.get("action"), response, answer_id, questionId, user = await getAuthenticatedUser(request);
  switch (action7) {
    case actions_default.PINNIN:
      questionId = parseInt(formData.get("questionId"), 10);
      let value = formData.get("value") !== "false";
      response = await modifyPinStatus_default(questionId, value);
      break;
    case actions_default.ENABLED_ACTION:
      questionId = parseInt(formData.get("questionId"), 10);
      let enabledValue = formData.get("enabledValue") !== "false";
      response = await modifyEnableStatus_default(questionId, enabledValue);
      break;
    case actions_default.VOTE_QUESTION:
      let voteQuestionId = parseInt(formData.get("questionId"), 10), voteQuestionUser = JSON.parse(formData.get("user")), isUpVote = formData.get("isUpVote") === "true";
      response = await voteQuestion_default(voteQuestionId, voteQuestionUser, isUpVote);
      break;
    case actions_default.CREATE_QUESTION_ANSWER:
      let createAnswerBody = {
        answered_question_id: parseInt(formData.get("questionId"), 10),
        answered_by_employee_id: parseInt(formData.get("employee_id"), 10),
        answer_text: formData.get("answer")
      };
      response = await create_default(createAnswerBody);
      break;
    case actions_default.UPDATE_QUESTION_ANSWER:
      let updateAnswerBody = {
        answer_id: parseInt(formData.get("answerId"), 10),
        answer_text: formData.get("answer")
      };
      response = await update_default(updateAnswerBody);
      break;
    case actions_default.DELETE_ANSWER:
      let deleteAnswerBody = {
        answer_id: parseInt(formData.get("answerId"), 10)
      };
      response = await delete_default(deleteAnswerBody);
      break;
    case actions_default.ASSIGN_QUESTION:
      let assignQuestionBody = {
        question_id: parseInt(formData.get("questionId"), 10),
        assigned_department: parseInt(formData.get("assigned_department"), 10)
      };
      response = await assignQuestion_default(assignQuestionBody);
      break;
    case actions_default.CREATE_COMMENT:
      let commentToSubmit = JSON.parse(formData.get("commentToSubmit"));
      response = await create_default2(commentToSubmit);
      break;
    case actions_default.UPDATE_COMMENT:
      let newCommentData = JSON.parse(formData.get("newCommentData"));
      response = await update_default2(newCommentData);
      break;
    case actions_default.VOTE_COMMENT:
      let comment_id = parseInt(formData.get("comment_id"), 10), vote = parseInt(formData.get("value"), 10);
      response = await voteComment_default({ comment_id, value: vote, user: user.id });
      break;
    case actions_default.DELETE_COMMENT:
      let commentId = parseInt(formData.get("comment_id"), 10), { accessToken } = user, userEmail = user.email;
      response = await delete_default2({ commentId, accessToken, userEmail });
      break;
    case actions_default.SCORE_ANSWER:
      answer_id = parseInt(formData.get("answer_id"), 10);
      let score = parseInt(formData.get("score"), 10);
      response = await create_default3({
        score,
        answer_id,
        user,
        accessToken: user.accessToken
      });
      break;
    case actions_default.DELETE_SCORE:
      answer_id = parseInt(formData.get("answer_id"), 10), response = await delete_default3({ id: answer_id, user });
      break;
    case actions_default.APPROVED_COMMENT:
      let params = JSON.parse(formData.get("params"));
      params.employeeId = user.employee_id, response = await approvedBy_default(params);
      break;
    default:
      break;
  }
  return (0, import_node3.json)(response);
};
function QuestionDetailPage() {
  var _a;
  let { question } = (0, import_react68.useLoaderData)(), navigate = (0, import_react_router_dom2.useNavigate)(), renderBulletPoint = () => {
    import_bs4.BsCircleFill;
  };
  return /* @__PURE__ */ import_react67.default.createElement(Container2, null, /* @__PURE__ */ import_react67.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react67.default.createElement(BackToHomeQuestion, null, /* @__PURE__ */ import_react67.default.createElement(Button_default, {
    onClick: () => {
      navigate(-1);
    }
  }, /* @__PURE__ */ import_react67.default.createElement("strong", null, /* @__PURE__ */ import_react67.default.createElement(import_md3.MdArrowBackIosNew, {
    style: { verticalAlign: "middle" }
  }), " ", "Back", " ")), /* @__PURE__ */ import_react67.default.createElement(QuestionDetailInfo_default, {
    location: question.location,
    department: question.Department,
    employeeName: (_a = question.assigned_to) == null ? void 0 : _a.full_name
  })), /* @__PURE__ */ import_react67.default.createElement(QuestionDetail, null, /* @__PURE__ */ import_react67.default.createElement(QuestionDetail_default, {
    question
  })), /* @__PURE__ */ import_react67.default.createElement(QuestionRecommendations, null, /* @__PURE__ */ import_react67.default.createElement(RecommendationsContainer, null, /* @__PURE__ */ import_react67.default.createElement(Recommendations, null, /* @__PURE__ */ import_react67.default.createElement("span", null, " Things to keep in mind"), /* @__PURE__ */ import_react67.default.createElement("span", null, renderBulletPoint(), COMMENT_INPUT_PLACEHOLDER), RECOMMENDATIONS_QUESTION.map((text5, index2) => /* @__PURE__ */ import_react67.default.createElement("span", {
    key: index2
  }, renderBulletPoint(), text5))))));
}
var questionId_default = QuestionDetailPage;

// app/routes/questions/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => new_default,
  loader: () => loader4
});
init_react();
var import_react81 = __toESM(require("react")), import_bs5 = require("react-icons/bs"), import_node4 = require("@remix-run/node"), import_react82 = require("@remix-run/react");

// app/styles/CreateQuestion.Styled.jsx
init_react();
var import_styled_components36 = __toESM(require("styled-components")), QuestionDiv = import_styled_components36.default.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #f4f7f9;
    padding-top: 40px;
    @media (max-width: 1025px) {
      flex-direction: column-reverse;
    }
    @media (max-width: 768px) {
      padding-top: 20px;
    }
`, QuestionSlogan = import_styled_components36.default.div`
  flex: 1;
  @media (max-width: 1025px) {
    display: none;
  }
`, QuestionInput = import_styled_components36.default.div`
  flex: 2;
  height: 100%;
`, QuestionRecommendations2 = import_styled_components36.default.div`
  flex: 1;
`, RecommendationsContainer2 = import_styled_components36.default.div`
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 25px 0 20px;
  }
`, Recommendations2 = import_styled_components36.default.div`
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
    margin-bottom: 10px; 
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin-bottom: 10px;
    }
  }
`;

// app/components/Slogan/index.js
init_react();

// app/components/Slogan/Slogan.jsx
init_react();
var import_react69 = __toESM(require("react"));

// app/components/Slogan/Slogan.Styled.jsx
init_react();
var import_styled_components37 = __toESM(require("styled-components")), SloganContainer = import_styled_components37.default.div`
  p {
    font-weight: 100;
    width: fit-content;
    font-size: 15px;
    padding: 0 40px;
    span:first-child {
      color: var(--color-secondary);
      font-weight: 600;
    }
    span:last-child {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`;

// app/components/Slogan/Slogan.jsx
function Slogan() {
  return /* @__PURE__ */ import_react69.default.createElement(SloganContainer, null, /* @__PURE__ */ import_react69.default.createElement("p", null, "Your", " ", /* @__PURE__ */ import_react69.default.createElement("span", null, "safespace"), " ", "to search answers, ask questions, and learn about", /* @__PURE__ */ import_react69.default.createElement("span", null, "Wizeline")));
}
var Slogan_default = Slogan;

// app/routes/questions/new.jsx
var import_constants73 = __toESM(require_constants());

// app/components/QuestionForm/index.js
init_react();

// app/components/QuestionForm/QuestionForm.jsx
init_react();
var import_react76 = __toESM(require("react")), import_react77 = require("@remix-run/react"), import_prop_types46 = __toESM(require("prop-types")), import_draft_js3 = require("draft-js"), import_markdown_draft_js2 = __toESM(require_lib()), import_ri = require("react-icons/ri");

// app/components/QuestionForm/QuestionForm.Styled.jsx
init_react();
var import_styled_components38 = __toESM(require("styled-components")), InputForm = import_styled_components38.default.div`
  background-color: #f4f7f9;
  color: var(--color-dark-50);
  font-size: 14px;
  padding: 4% 0;
  text-align: center;
  .open ul {
    border: none;
    border-radius: 10px;
    box-shadow: 0 3px 4px 0 rgba(156, 156, 156, 0.5);
    letter-spacing: 0.6px;
    width: 304px;
    background-color: #eee;
  }
  .dropdown-menu a {
    color: var(--color-dark-50);
    padding-right: 16px;
  }
`, InputContainer2 = import_styled_components38.default.div`
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(225, 229, 233, 0.8);
  color: var(--color-dark-50);
  float: none;
  margin: auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px 15px 0 15px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-width: 700px;
  }
  @media screen and (max-width: 767px) {
    max-width: 680px;
    width: 100%;
  }
`, InputTopWrapper = import_styled_components38.default.div`
  align-items: center;
  display: flex;
  svg:nth-child(2) {
    margin: 0 5px;
  }
`, Submit = import_styled_components38.default.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
  position: absolute;
  right: 0;
  text-align: center;
  @media screen and (min-width: 1025px) {
    text-align: right;
  }
  @media screen and (max-width: 767px) {
    position: static;
    width: 100%;
    flex-wrap: wrap;
  }
  p {
    display: flex;
    margin: 0;
    align-items: center;
    // Switch
    label {
      margin: 0;
      margin-left: 5px;
    }
  }
  button {
    background: var(--color-secondary);
    border: none;
    border-radius: 3px;
    color: #fff;
    height: 33px;
    @media screen and (min-width: 1025px){
      width: 77px;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 248px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    &:disabled {
      background: #d8d8d8;
    }
    &:hover:enabled {
      background-color: white;
      border: solid 1px var(--color-secondary);
      color: var(--color-secondary);
    }
  }
`, Options = import_styled_components38.default.div`
  display: flex;
  align-items: center;
  gap:10px;
  width: fit-content;
  .btn-group {
    width: 100%;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

`, SubmitTooltipText = import_styled_components38.default.span`
  background-color: #31425a;
  border-radius: 2px;
  bottom: 135%;
  color: #fff;
  display: block;
  font-weight: normal;
  letter-spacing: 0.6px;
  padding: 12px;
  position: absolute;
  text-align: left;
  visibility: hidden;
  width: 168px;
  z-index: 100;
  @media screen and (min-width: 1025px) {
    left: -58%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
  span {
    font-family: "Nunito";
    font-weight: bold;
  }
  &:after {
    border: 5px solid transparent;
    border-top-color: #31425a;
    content: "";
    left: 50%;
    margin-left: -5px;
    position: absolute;
    top: 100%;
  }
`, SubmitTooltip = import_styled_components38.default.button`
  position: relative;
  &:hover ${SubmitTooltipText} {
    visibility: visible;
  }
`;

// app/components/InputAuthor/index.js
init_react();

// app/components/InputAuthor/InputAuthor.jsx
init_react();
var import_react70 = __toESM(require("react")), import_prop_types40 = __toESM(require("prop-types"));
function InputAuthor(props) {
  return props.isAnonymous ? /* @__PURE__ */ import_react70.default.createElement(UserImage_default, {
    size: "big",
    src: props.anonymousProfilePicture
  }) : /* @__PURE__ */ import_react70.default.createElement(UserImage_default, {
    src: props.profilePicture,
    size: "big"
  });
}
InputAuthor.propTypes = {
  anonymousProfilePicture: import_prop_types40.default.string,
  profilePicture: import_prop_types40.default.string,
  isAnonymous: import_prop_types40.default.bool.isRequired
};
InputAuthor.defaultProps = {
  anonymousProfilePicture: ANONYMOUS_USER.profilePicture,
  profilePicture: ""
};
var InputAuthor_default = InputAuthor;

// app/components/SubmitWithModal/index.js
init_react();

// app/components/SubmitWithModal/SubmitWithModal.jsx
init_react();
var import_react71 = __toESM(require("react")), import_prop_types41 = __toESM(require("prop-types"));

// app/components/SubmitWithModal/SubmitWithModal.Styled.jsx
init_react();
var import_styled_components39 = __toESM(require("styled-components")), import_md4 = require("react-icons/md"), Modal3 = import_styled_components39.default.div` 
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
`, ModalDialog3 = import_styled_components39.default.div`
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
        max-width: 80vw;
    }
    @media (max-width: 576px) {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
    }
`, ModalFooter5 = import_styled_components39.default.div`
    border-top: none;
    background-color: #fff;
    border-bottom: none;
    padding: 15px;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-top: 1px solid #e5e5e5;padding: 15px;text-align: right;" : "border-bottom: none;"}
`, ModalHeader5 = import_styled_components39.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? "border-bottom: 1px solid #e5e5e5;padding: 15px;" : "border-bottom: none;"}
`, ModalBody4 = import_styled_components39.default.div`
    display: block;
    font-size: 14px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
`, ProfileContainer = import_styled_components39.default.div`
    border: 1px solid var(--color-secondary);
    float: left;
    height: 50px;
    overflow: hidden;
    text-align: center;
    width: 50px;
`, ProfileImg = import_styled_components39.default.img`
    height: 48px;
    width: 48px;
`, IdentityWarning = import_styled_components39.default.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2vh;
  span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
  }
`, WarningsHeader = import_styled_components39.default.div`
  padding-bottom: 20px;
  span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    padding-left: 8px;
  }
`, List = import_styled_components39.default.ul`
  list-style: none;
  padding-top: 12px;
  padding-inline-start: 0;
  li {
    margin-bottom: 20px;
  }
`, WarningIcon = (0, import_styled_components39.default)(import_md4.MdErrorOutline)`
  font-size: 5rem;
`, UserInfoContainer = import_styled_components39.default.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30rem;
`, IdentityMessage = import_styled_components39.default.div`
  font-size: 2.5rem;
  text-align: center;
  line-height: 1;
`, UserName = import_styled_components39.default.p`
  font-size: 2rem;
  text-align: center;
`, WarningContainer = import_styled_components39.default.div`
  display: flex;
  gap: 10px;
  border-radius: 5px;
  background-color: #F8E9B7;
  color: #9f640b;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  padding: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`, Warnings = import_styled_components39.default.div`
  list-style-type: none;
  margin: 0;
  text-align: left;
  padding: 3px;
  p {
    margin: 0;
    font-size: 1.5rem;
  }
`;

// app/components/SubmitWithModal/SubmitWithModal.jsx
function SubmitWithModal(props) {
  let { isAnonymous, warnings } = props, { picture, full_name } = useUser_default(), renderProfilePicture = () => props.isAnonymous ? null : /* @__PURE__ */ import_react71.default.createElement(UserImage_default, {
    src: picture,
    size: "big"
  }), renderIdentityWarning = () => {
    let identityMessage = IDENTITY_MESSAGE, usernameTag = "";
    return isAnonymous || (identityMessage += " as:", usernameTag = /* @__PURE__ */ import_react71.default.createElement(UserName, null, full_name)), /* @__PURE__ */ import_react71.default.createElement(IdentityWarning, null, /* @__PURE__ */ import_react71.default.createElement(IdentityMessage, null, identityMessage), /* @__PURE__ */ import_react71.default.createElement("br", null), /* @__PURE__ */ import_react71.default.createElement(UserInfoContainer, null, renderProfilePicture(), usernameTag));
  }, renderWarnings = () => {
    let messages;
    return warnings.length ? (warnings.length === 1 ? messages = warnings[0] : messages = warnings.map((warning) => /* @__PURE__ */ import_react71.default.createElement("p", {
      key: warning
    }, "-", warning)), /* @__PURE__ */ import_react71.default.createElement(WarningContainer, null, /* @__PURE__ */ import_react71.default.createElement(WarningIcon, null), /* @__PURE__ */ import_react71.default.createElement(Warnings, null, messages))) : null;
  };
  return props.show ? /* @__PURE__ */ import_react71.default.createElement("div", {
    onClick: props.onClose
  }, /* @__PURE__ */ import_react71.default.createElement(Modal3, {
    show: !0
  }, /* @__PURE__ */ import_react71.default.createElement(ModalDialog3, {
    variant: "submit",
    onClick: (e) => e.stopPropagation()
  }, /* @__PURE__ */ import_react71.default.createElement(ModalHeader5, null, /* @__PURE__ */ import_react71.default.createElement(Button_default, {
    category: CLOSE_BUTTON,
    onClick: props.onClose
  })), /* @__PURE__ */ import_react71.default.createElement(ModalBody4, null, renderIdentityWarning(), renderWarnings()), /* @__PURE__ */ import_react71.default.createElement(ModalFooter5, null, /* @__PURE__ */ import_react71.default.createElement(Button_default, {
    type: "button",
    category: SECONDARY_BUTTON,
    onClick: props.onClose
  }, "Cancel"), /* @__PURE__ */ import_react71.default.createElement(Button_default, {
    type: "button",
    category: DANGER_BUTTON,
    onClick: props.onSubmitSuccess
  }, "Submit"))))) : null;
}
SubmitWithModal.propTypes = {
  show: import_prop_types41.default.bool.isRequired,
  onClose: import_prop_types41.default.func.isRequired,
  onSubmitSuccess: import_prop_types41.default.func.isRequired,
  warnings: import_prop_types41.default.arrayOf(import_prop_types41.default.string).isRequired,
  isAnonymous: import_prop_types41.default.bool.isRequired
};
var SubmitWithModal_default = SubmitWithModal;

// app/components/QuestionInputText/index.js
init_react();

// app/components/QuestionInputText/QuestionInputText.jsx
init_react();
var import_react73 = __toESM(require("react")), import_prop_types43 = __toESM(require("prop-types")), import_markdown_draft_js = __toESM(require_lib()), import_draft_js2 = require("draft-js");

// app/components/QuestionInputText/QuestionInputText.Styled.jsx
init_react();
var import_styled_components40 = __toESM(require("styled-components")), PreviewButton = import_styled_components40.default.div`
  letter-spacing: 0.6px;
  line-height: 1.5;
  padding-bottom: 1%;
  text-align: right;
`, PreviewText = import_styled_components40.default.div`
  padding: 13px 9px;
  text-align: left;
  word-wrap: break-word;
  width: 100%;
  letter-spacing: 0.6px;
  line-height: 1.71;
  word-wrap: break-word;
`, QuestionInputText = import_styled_components40.default.div`
  clear: both;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  overflow-wrap: break-word;
  position: relative;
  width: 100%;
`;

// app/components/QuestionTextArea/index.js
init_react();

// app/components/QuestionTextArea/QuestionTextArea.jsx
init_react();
var import_react72 = __toESM(require("react")), import_prop_types42 = __toESM(require("prop-types")), import_draft_js = require("draft-js"), import_remix_utils = require("remix-utils"), import_react_draft_wysiwyg2 = __toESM(require_react_draft_wysiwyg());

// app/images/react-icons/ri/bold.svg
var bold_default = "/build/_assets/bold-M6H323FJ.svg";

// app/images/react-icons/ri/italic.svg
var italic_default = "/build/_assets/italic-6S2UBE4P.svg";

// app/images/react-icons/ri/strikethrough.svg
var strikethrough_default = "/build/_assets/strikethrough-TFKME6JE.svg";

// app/images/react-icons/ri/code-fill.svg
var code_fill_default = "/build/_assets/code-fill-O2RBBWGS.svg";

// app/components/QuestionTextArea/QuestionTextArea.Styled.jsx
init_react();
var import_styled_components41 = __toESM(require("styled-components"));

// app/images/react-icons/ri/double-quotes-r.svg
var double_quotes_r_default = "/build/_assets/double-quotes-r-HCA7EJDZ.svg";

// app/components/QuestionTextArea/QuestionTextArea.Styled.jsx
var QuestionTextAreaWrapper = import_styled_components41.default.div`
  letter-spacing: 0.6px;
  line-height: 1.71;
  word-wrap: break-word;
  border: none;
  border-bottom: none;
  border-radius: 3px;
  color: var(--color-dark-50);
  font-size: 14px;
  outline: none;
  resize: none;
  width: 100%;
  &:disabled {
    color: grey;
  }
  .public-DraftEditorPlaceholder-inner,
  .public-DraftEditor-content {
    padding-left: 5px;
  }
  .public-DraftEditor-content{
    min-height: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .rdw-editor-wrapper {
    display: flex;
    flex-direction: column-reverse;
    height: 220px;
  }
  .rdw-editor-toolbar {
    padding: 0;
  }
  .toolbar-class{
    border: none;
  }
  .rdw-option-wrapper{
    border: 1px solid transparent;
    padding: 15px 5px;
    border-radius: 5px;
  }
  .rdw-option-wrapper:hover {
    border: 1px solid var(--color-primary);
    box-shadow: none;
    transition-property: border-color;
    transition-duration: 180ms;
    transition-timing-function: ease-in-out;
  }
  .rdw-option-active {
    border: 1px solid #dee0e1;
    box-shadow: none;
    transition-property: border-color;
    transition-duration: 180ms;
    transition-timing-function: ease-in-out;
  }
  /* To show Quotes Icon */
  .rdw-inline-wrapper:last-child {
    position: relative;
    .rdw-option-wrapper {
      width: 35px;
      z-index: 1;
      /* Hide the text. */
      text-indent: 105%;
      white-space: nowrap;
      overflow: hidden;
      // Quotes icon
      background-image: url("${double_quotes_r_default}");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`, QuestionInputTextOptions = import_styled_components41.default.div`
    align-items: baseline;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1%;
    padding-top: 1%;
    float: left;
`, WrapperButton = import_styled_components41.default.div`
  display: flex;
  align-items: center;
`, OptionEditor = import_styled_components41.default.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 20px;
  .option-icon {
    color: #c6c6c6;
  }
`;

// app/components/QuestionTextArea/QuestionTextArea.jsx
var import_constants61 = __toESM(require_constants());
function QuestionTextArea({
  editorState,
  setEditorState,
  onQuestionChange
}) {
  (0, import_react72.useEffect)(() => {
    onQuestionChange(editorState);
  }, [editorState]);
  let styleMap = {
    CODE: {
      color: "#c7254e",
      backgroundColor: "#f9f2f4",
      borderRadius: "4px",
      fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
      padding: "2px 4px",
      fontSize: "90%"
    }
  };
  return /* @__PURE__ */ import_react72.default.createElement(QuestionTextAreaWrapper, null, /* @__PURE__ */ import_react72.default.createElement(import_remix_utils.ClientOnly, null, () => /* @__PURE__ */ import_react72.default.createElement(import_react_draft_wysiwyg2.Editor, {
    placeholder: inputPlaceholder(import_constants61.MINIMUM_QUESTION_LENGTH),
    editorState,
    onEditorStateChange: setEditorState,
    wrapperClassName: "demo-wrapper",
    editorClassName: "editor-class",
    toolbarClassName: "toolbar-class",
    toolbar: {
      options: ["inline", "blockType"],
      inline: {
        inDropdown: !1,
        options: ["bold", "italic", "strikethrough", "monospace"],
        bold: { icon: bold_default },
        italic: { icon: italic_default },
        strikethrough: { icon: strikethrough_default },
        monospace: { icon: code_fill_default }
      },
      blockType: {
        inDropdown: !1,
        options: ["Blockquote"]
      }
    },
    customStyleMap: styleMap
  })));
}
QuestionTextArea.propTypes = {
  editorState: import_prop_types42.default.objectOf(import_draft_js.EditorState).isRequired,
  setEditorState: import_prop_types42.default.func.isRequired,
  onQuestionChange: import_prop_types42.default.func.isRequired
};
var QuestionTextArea_default = QuestionTextArea;

// app/components/QuestionInputText/QuestionInputText.jsx
function QuestionInputText2(props) {
  let {
    inputValue,
    onInputChange,
    editorState,
    setEditorState,
    submitElement
  } = props, onQuestionChange = (_editorState) => {
    let sanitizedInputValue = (0, import_markdown_draft_js.draftToMarkdown)((0, import_draft_js2.convertToRaw)(_editorState.getCurrentContent())).replace(/^\s+/, "");
    onInputChange(sanitizedInputValue);
  };
  return /* @__PURE__ */ import_react73.default.createElement(QuestionInputText, null, (() => /* @__PURE__ */ import_react73.default.createElement(QuestionTextArea_default, {
    inputValue,
    editorState,
    setEditorState,
    onQuestionChange
  }))(), submitElement);
}
QuestionInputText2.propTypes = {
  inputValue: import_prop_types43.default.string,
  onInputChange: import_prop_types43.default.func.isRequired,
  editorState: import_prop_types43.default.objectOf(import_draft_js2.EditorState).isRequired,
  setEditorState: import_prop_types43.default.func.isRequired,
  submitElement: import_prop_types43.default.element
};
QuestionInputText2.defaultProps = {
  inputValue: "",
  submitElement: null
};
var QuestionInputText_default = QuestionInputText2;

// app/components/DropdownMenu/index.js
init_react();

// app/components/DropdownMenu/DropdownMenu.component.jsx
init_react();
var import_react75 = __toESM(require("react")), import_react_bootstrap10 = require("react-bootstrap");

// app/components/DropdownTitle/index.js
init_react();

// app/components/DropdownTitle/DropdownTitle.jsx
init_react();
var import_react74 = __toESM(require("react")), import_prop_types44 = __toESM(require("prop-types")), import_md6 = require("react-icons/md");

// app/components/DropdownTitle/DropdownTitle.Styled.jsx
init_react();
var import_styled_components42 = __toESM(require("styled-components")), QuestionAssignerToolTipText = import_styled_components42.default.span`
  background-color: var(--color-secondary);
  visibility: hidden;
  width: auto;
  color: #000;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  top: 80%;
  left: 45%;
  margin-left: -60px;
  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 45%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #86cfeb transparent;
  }
`, QuestionAssignerToolTipContainer = import_styled_components42.default.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  &:hover ${QuestionAssignerToolTipText} {
    visibility: visible;
  }
`;

// app/components/DropdownTitle/DropdownTitle.jsx
function DropdownTitle({ children, title, type }) {
  return /* @__PURE__ */ import_react74.default.createElement(QuestionAssignerToolTipContainer, {
    title
  }, children, /* @__PURE__ */ import_react74.default.createElement("div", {
    style: { display: "flex", marginLeft: "10px", marginRight: "5px" }
  }, title || type), /* @__PURE__ */ import_react74.default.createElement(import_md6.MdOutlineKeyboardArrowDown, {
    color: title ? "white" : "black"
  }));
}
DropdownTitle.propTypes = {
  children: import_prop_types44.default.node.isRequired,
  title: import_prop_types44.default.node.isRequired,
  type: import_prop_types44.default.string.isRequired
};
var DropdownTitle_default = DropdownTitle;

// app/components/DropdownMenu/DropdownMenu.component.jsx
var import_fa = require("react-icons/fa"), import_im = require("react-icons/im"), import_prop_types45 = __toESM(require("prop-types"));

// app/components/DropdownMenu/DropdownMenu.Styled.js
init_react();
var import_styled_components43 = __toESM(require("styled-components")), StyledMenu = import_styled_components43.default.div`
    display:flex;
    background-color: #f1f1f1;
    border-radius: 20px;
    box-shadow: none;
    display: flex;
    font-family: "Nunito", sans-serif;
    width: 100%;
    color: black;
    margin-right:10px;

    @media screen and (max-width: 767px) {
      min-width: 250px;
    }

    & svg{
        color:inherit !important;
    }

    & button{
    background-color: #f1f1f1;
    border: none;
    border-radius: 20px;
    box-shadow: none;
    display: flex;
    font-size: 13px;
    letter-spacing: 0.4px;
    min-width: 150px;
    width: 100%; 
    }

    & button{
      background-color: ${(props) => props.item === null ? "#f1f1f1" : "var(--color-secondary)"};
      color: ${(props) => props.item === null ? "var(--color-dark-50)" : "#fff"};
    }

    & button:focus{
      background-color: ${(props) => props.item === null ? "#f1f1f1" : "var(--color-secondary)"};
      color: ${(props) => props.item === null ? "var(--color-dark-50)" : "#fff"};
    }

    & button:hover{
      background-color: ${(props) => props.item === null ? "#f1f1f1" : "var(--color-secondary)"};
      color: ${(props) => props.item === null ? "var(--color-dark-50)" : "#fff"};
    }
     
`;

// app/components/DropdownMenu/DropdownMenu.component.jsx
function DropdownMenu({
  name,
  handler,
  type,
  selectedOption,
  options
}) {
  let [option, setSelectedOption] = (0, import_react75.useState)(selectedOption);
  (0, import_react75.useEffect)(() => {
    setSelectedOption(selectedOption);
  }, [options]);
  let handleSelect = (select) => {
    setSelectedOption(select), handler(select);
  }, renderOptions = () => {
    let values = [];
    switch (type) {
      case "Build":
        values = options.map((dep) => /* @__PURE__ */ import_react75.default.createElement(import_react_bootstrap10.MenuItem, {
          eventKey: dep,
          key: dep.department_id,
          onClick: () => handleSelect(dep)
        }, dep.name));
        break;
      case "People":
        values = options.map((item) => /* @__PURE__ */ import_react75.default.createElement(import_react_bootstrap10.MenuItem, {
          eventKey: item,
          key: item.id,
          onClick: () => handleSelect(item)
        }, item.name));
        break;
      case "Location":
        values = options.map((loc) => /* @__PURE__ */ import_react75.default.createElement(import_react_bootstrap10.MenuItem, {
          eventKey: loc.code,
          key: loc.code,
          onClick: () => handleSelect(loc)
        }, loc.name));
        break;
      default:
        return values;
    }
    return values;
  }, getIcon = () => {
    switch (type) {
      case "Build":
        return /* @__PURE__ */ import_react75.default.createElement(import_fa.FaBuilding, {
          color: option ? "white" : "black"
        });
      case "People":
        return /* @__PURE__ */ import_react75.default.createElement(import_fa.FaUser, {
          color: option ? "white" : "black"
        });
      case "Location":
        return /* @__PURE__ */ import_react75.default.createElement(import_im.ImLocation, {
          color: option ? "white" : "black"
        });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ import_react75.default.createElement(StyledMenu, {
    item: option
  }, /* @__PURE__ */ import_react75.default.createElement(import_react_bootstrap10.DropdownButton, {
    bsStyle: "default",
    title: /* @__PURE__ */ import_react75.default.createElement(DropdownTitle_default, {
      title: option ? option.name : name
    }, getIcon()),
    noCaret: !0
  }, options.length === 0 ? /* @__PURE__ */ import_react75.default.createElement(import_react_bootstrap10.MenuItem, null, "Not options avaiable") : renderOptions()));
}
DropdownMenu.propTypes = {
  name: import_prop_types45.default.string.isRequired,
  type: import_prop_types45.default.string.isRequired,
  selectedOption: import_prop_types45.default.oneOfType([
    import_prop_types45.default.shape([
      {
        department_id: import_prop_types45.default.string,
        name: import_prop_types45.default.string
      }
    ]),
    import_prop_types45.default.shape([
      {
        id: import_prop_types45.default.string,
        name: import_prop_types45.default.string
      }
    ])
  ]).isRequired,
  options: import_prop_types45.default.oneOfType([
    import_prop_types45.default.arrayOf(import_prop_types45.default.shape([
      {
        department_id: import_prop_types45.default.string,
        name: import_prop_types45.default.string
      }
    ]).isRequired),
    import_prop_types45.default.arrayOf(import_prop_types45.default.shape([
      {
        id: import_prop_types45.default.string,
        name: import_prop_types45.default.string
      }
    ]).isRequired),
    import_prop_types45.default.arrayOf(import_prop_types45.default.shape([
      {
        code: import_prop_types45.default.string,
        name: import_prop_types45.default.string
      }
    ]))
  ]).isRequired,
  handler: import_prop_types45.default.func.isRequired
};
var DropdownMenu_component_default = DropdownMenu;

// app/components/QuestionForm/QuestionForm.jsx
function QuestionForm({
  postQuestion,
  locations,
  departments,
  initialValue,
  initialDepartment,
  initialIsAnonymous
}) {
  let { full_name, picture } = useUser_default(), fetcher = (0, import_react77.useFetcher)(), initialState2 = {
    inputValue: initialValue,
    isAnonymous: initialIsAnonymous,
    showSubmitWithModal: !1,
    dropDownTitle: postQuestion,
    warnings: [],
    location: NONE_LOCATION,
    closed: !1,
    isAsking: !1,
    profilePicture: picture,
    assignedDepartment: initialDepartment,
    fullLocation: "",
    isShowPreview: !1,
    askBtbEnabled: !1,
    assignedEmployee: void 0,
    employeesByDepartment: []
  }, [state, setState] = (0, import_react76.useState)(initialState2), [editorState, setEditorState] = (0, import_react76.useState)(() => import_draft_js3.EditorState.createWithContent((0, import_draft_js3.convertFromRaw)((0, import_markdown_draft_js2.markdownToDraft)(state.inputValue)))), selectPostingAs = (username) => {
    let isAnonymous = username === ANONYMOUS_USER.username, profilePicture = isAnonymous ? ANONYMOUS_USER.profilePicture : picture;
    setState(__spreadProps(__spreadValues({}, state), {
      dropDownTitle: username,
      profilePicture,
      isAnonymous
    }));
  };
  (0, import_react76.useEffect)(() => {
    (async () => {
      state.assignedDepartment.department_id !== -1 && (fetcher.load(`/employees/getByDeparment/${state.assignedDepartment.department_id}`), setState(__spreadProps(__spreadValues({}, state), {
        assignedEmployee: void 0
      })));
    })();
  }, [state.assignedDepartment]), (0, import_react76.useEffect)(() => {
    setState(__spreadProps(__spreadValues({}, state), {
      employeesByDepartment: fetcher.data
    }));
  }, [fetcher.data]), (0, import_react76.useEffect)(() => {
    selectPostingAs(full_name);
  }, [full_name]);
  let clearTextArea = () => {
    setEditorState(() => import_draft_js3.EditorState.push(editorState, import_draft_js3.ContentState.createFromText(""), "remove-range"));
  }, onSubmitWithModalSuccess = async () => {
    let {
      location,
      isAnonymous,
      inputValue,
      assignedDepartment
    } = state;
    setState(__spreadProps(__spreadValues({}, state), { showSubmitWithModal: !1 }));
    let question = {
      isAnonymous,
      question: deleteNoMarkupFormatHTML(inputValue.trim()),
      location: location === NONE_LOCATION ? DEFAULT_LOCATION : location,
      assignedDepartment: assignedDepartment.department_id || "wizeq",
      assigned_to_employee_id: state.assignedEmployee ? state.assignedEmployee.id : void 0
    };
    try {
      await postQuestion(question), setState(initialState2), clearTextArea();
    } catch (error) {
      throw error;
    }
  }, onSubmit = (event) => {
    event.preventDefault();
    let {
      location,
      isAnonymous,
      inputValue
    } = state, trimmed = inputValue.trim(), sanitizedInput = deleteNoMarkupFormatHTML(trimmed), warningsToShow = [];
    if (setState(__spreadProps(__spreadValues({}, state), {
      isAsking: !0
    })), location === NONE_LOCATION)
      warningsToShow.push(DEFAULT_LOCATION_MESSAGE);
    else if (location === DEFAULT_LOCATION)
      warningsToShow.push(ALL_LOCATIONS_MESSAGE);
    else {
      let prelocation = locations.find((loc) => loc.code === location), fullLocation = prelocation ? prelocation.name : "";
      warningsToShow.push(LOCATION_WARNING + fullLocation);
    }
    if (trimmed !== sanitizedInput && warningsToShow.push(HTML_CODE_WARNING), warningsToShow.length || !isAnonymous) {
      setState(__spreadProps(__spreadValues({}, state), {
        warnings: [...warningsToShow],
        showSubmitWithModal: !0,
        isAsking: !1
      }));
      return;
    }
    onSubmitWithModalSuccess();
  }, onLocationChange = (selectedLocation) => {
    setState(__spreadProps(__spreadValues({}, state), {
      location: selectedLocation.code,
      fullLocation: locations.find((loc) => loc.code === selectedLocation.code).name
    }));
  }, onSubmitWithModalClose = () => {
    setState(__spreadProps(__spreadValues({}, state), {
      showSubmitWithModal: !1,
      warnings: []
    }));
  }, onInputChange = (inputValue) => {
    setState(__spreadProps(__spreadValues({}, state), { inputValue }));
  }, getClasses = (askBtbEnabled2, departmentId) => ({
    askBtnClass: !askBtbEnabled2,
    employeeDropdownClass: departmentId !== NOT_ASSIGNED_DEPARTMENT_ID && departmentId !== NO_DEPARTMENT_SELECTED_ID ? "" : "employee-dropdown--department-assigned",
    locationDropdownClass: departmentId !== NO_DEPARTMENT_SELECTED_ID ? "" : "location-dropdown--department-selected"
  }), handleDepartmentSelectChange = (selectedDepartment) => {
    setState(__spreadProps(__spreadValues({}, state), {
      assignedDepartment: selectedDepartment
    }));
  }, selectEmployeeHandler = (selectedEmployee) => {
    setState(__spreadProps(__spreadValues({}, state), {
      assignedEmployee: selectedEmployee
    }));
  }, isAllowedToSubmitQuestion = () => {
    let {
      assignedDepartment,
      inputValue
    } = state, sanitizedInput = deleteNoMarkupFormatHTML(inputValue.trim()), askBtbEnabled2 = !0, tooltipMessage2 = "";
    return validTextLength(sanitizedInput.length, 14, 500) || (askBtbEnabled2 = !1, tooltipMessage2 = MIN_CHARS_QUESTION_INPUT_TOOLTIP_MESSAGE), assignedDepartment.department_id === NO_DEPARTMENT_SELECTED_ID && (askBtbEnabled2 = !1, tooltipMessage2 = NO_DEPARTMENT_SELECTED_TOOLTIP_MESSAGE), locations.length === 0 && (askBtbEnabled2 = !1, tooltipMessage2 = NO_LOCATIONS_AVAILABLE_TOOLTIP_MESSAGE), {
      askBtbEnabled: askBtbEnabled2,
      tooltipMessage: tooltipMessage2
    };
  }, renderTooltip = (tooltipMessage2) => tooltipMessage2 && /* @__PURE__ */ import_react76.default.createElement(SubmitTooltipText, null, /* @__PURE__ */ import_react76.default.createElement("span", null, tooltipMessage2), " ", /* @__PURE__ */ import_react76.default.createElement("br", null), DEFAULT_MESSAGE_END_QUESTION_INPUT_TOOLTIP), getQuestionLength = (question) => deleteNoMarkupFormatHTML(question.trim()).length, onAnonymousChange = (event) => {
    setState(__spreadProps(__spreadValues({}, state), {
      isAnonymous: event.target.checked
    }));
  }, { tooltipMessage, askBtbEnabled } = isAllowedToSubmitQuestion(), { askBtnClass } = getClasses(askBtbEnabled, state.assignedDepartment.department_id);
  return /* @__PURE__ */ import_react76.default.createElement(InputForm, {
    className: "clearfix"
  }, /* @__PURE__ */ import_react76.default.createElement("form", {
    onSubmit,
    id: "question-submit-form"
  }, /* @__PURE__ */ import_react76.default.createElement(InputContainer2, null, /* @__PURE__ */ import_react76.default.createElement(InputTopWrapper, null, /* @__PURE__ */ import_react76.default.createElement(InputAuthor_default, {
    dropDownTitle: state.dropDownTitle,
    profilePicture: state.profilePicture,
    selectPostingAs,
    isAsking: !0,
    isAnonymous: state.isAnonymous
  }), /* @__PURE__ */ import_react76.default.createElement(import_ri.RiArrowRightSFill, {
    color: "black",
    size: "25px"
  }), /* @__PURE__ */ import_react76.default.createElement(Options, {
    department: state.assignedDepartment.name,
    location: state.fullLocation
  }, /* @__PURE__ */ import_react76.default.createElement(DropdownMenu_component_default, {
    name: "Deparment",
    type: "Build",
    handler: handleDepartmentSelectChange,
    selectedOption: null,
    options: departments
  }), state.assignedDepartment.department_id !== -1 && /* @__PURE__ */ import_react76.default.createElement(DropdownMenu_component_default, {
    name: "People",
    type: "People",
    handler: selectEmployeeHandler,
    selectedOption: null,
    options: state.employeesByDepartment
  }), /* @__PURE__ */ import_react76.default.createElement(DropdownMenu_component_default, {
    name: "Location",
    type: "Location",
    handler: onLocationChange,
    selectedOption: null,
    options: locations
  }))), /* @__PURE__ */ import_react76.default.createElement(QuestionInputText_default, {
    inputValue: state.inputValue,
    editorState,
    setEditorState,
    onInputChange,
    submitElement: /* @__PURE__ */ import_react76.default.createElement(Submit, {
      disabled: askBtnClass
    }, /* @__PURE__ */ import_react76.default.createElement("p", {
      style: { float: "left" }
    }, /* @__PURE__ */ import_react76.default.createElement("span", null, "Ask anonymously"), /* @__PURE__ */ import_react76.default.createElement(Switch_default, {
      checked: state.isAnonymous,
      onChange: onAnonymousChange
    })), /* @__PURE__ */ import_react76.default.createElement(InputCounter_default, {
      currentLength: getQuestionLength(state.inputValue),
      maxLength: 500
    }), /* @__PURE__ */ import_react76.default.createElement(SubmitTooltip, {
      type: "submit",
      id: "submit-btn",
      disabled: !askBtbEnabled
    }, renderTooltip(tooltipMessage), "Ask"))
  })), /* @__PURE__ */ import_react76.default.createElement(SubmitWithModal_default, {
    show: state.showSubmitWithModal,
    onClose: onSubmitWithModalClose,
    onSubmitSuccess: onSubmitWithModalSuccess,
    warnings: state.warnings,
    isAnonymous: state.isAnonymous
  }), /* @__PURE__ */ import_react76.default.createElement("br", null)));
}
QuestionForm.propTypes = {
  postQuestion: import_prop_types46.default.func.isRequired,
  profile: import_prop_types46.default.shape({
    name: import_prop_types46.default.string,
    picture: import_prop_types46.default.string
  }),
  locations: import_prop_types46.default.arrayOf(import_prop_types46.default.shape({
    code: import_prop_types46.default.string.isRequired,
    name: import_prop_types46.default.string.isRequired
  })).isRequired,
  departments: import_prop_types46.default.arrayOf(import_prop_types46.default.shape()),
  initialValue: import_prop_types46.default.string,
  initialDepartment: import_prop_types46.default.shape({
    name: import_prop_types46.default.string.isRequired,
    department_id: import_prop_types46.default.number.isRequired
  }),
  initialIsAnonymous: import_prop_types46.default.bool
};
QuestionForm.defaultProps = {
  profile: {
    name: "",
    picture: ""
  },
  initialValue: "",
  departments: [],
  initialDepartment: { name: "", department_id: NO_DEPARTMENT_SELECTED_ID },
  initialIsAnonymous: !1
};
var QuestionForm_default = QuestionForm;

// app/controllers/questions/create.js
init_react();
var import_constants63 = __toESM(require_constants());
var import_slackConstants2 = __toESM(require_slackConstants());
init_emailConstants();

// app/utils/backend/urlUtils.js
init_react();
var getBaseUrl = () => process.env.BASE_URL || "https://questions.wizeline.com", getQuestionDetailUrl = (id) => `${getBaseUrl()}/questions/${id}`;

// app/controllers/questions/create.js
var import_emailHandler = __toESM(require_emailHandler()), createQuestion = async (body) => {
  let { error, value } = createQuestionSchema.validate(body), _a = value, { botEnabled, accessToken } = _a, rest = __objRest(_a, ["botEnabled", "accessToken"]);
  if (error)
    return {
      errors: [
        {
          message: botEnabled ? import_constants63.DEFAULT_ERROR_MESSAGE_BOT : import_constants63.DEFAULT_ERROR_MESSAGE,
          detail: error
        }
      ]
    };
  let created = await db.Questions.create({
    data: __spreadProps(__spreadValues({}, rest), {
      question: sanitizer_default(value.question),
      bot_enabled: botEnabled
    })
  });
  if (value.is_anonymous) {
    let sessionHash = crypto_default(accessToken, created.question_id);
    if (created = await db.Questions.update({
      where: {
        question_id: created.question_id
      },
      data: {
        user_hash: sessionHash
      }
    }), created.assigned_to_employee_id == null || created.assigned_to_employee_id === void 0) {
      let user = await db.users.findFirst({
        where: {
          email: process.env.EMAIL_AUTH_USER
        }
      });
      user && (created.assigned_to_employee_id = user.employee_id);
    }
    let userAssigned = await db.users.findUnique({
      where: {
        employee_id: created.assigned_to_employee_id
      }
    });
    await (0, import_emailHandler.sendEmail)({
      to: userAssigned.email,
      subject: EMAILS.anonymousQuestionAssigned.subject,
      template: EMAILS.anonymousQuestionAssigned.template,
      context: {
        name: userAssigned.full_name,
        question_url: getQuestionDetailUrl(created.question_id),
        question_text: created.question
      }
    });
  } else
    await slackNotifications_default.createQuestionNotification({
      questionBody: stripNewLines(truncate(value.question), import_slackConstants2.SLACK_QUESTION_LIMIT),
      questionId: created.question_id
    });
  return {
    successMessage: "The question has been created succesfully!",
    question: created
  };
}, create_default4 = createQuestion;

// app/controllers/answerBot/create.js
init_react();
var import_constants65 = __toESM(require_constants());

// app/utils/backend/validators/answerBot.js
init_react();
var import_joi8 = __toESM(require("joi")), import_constants64 = __toESM(require_constants()), createBotSchema = import_joi8.default.object().keys({
  question_by_user: import_joi8.default.string().min(import_constants64.MINIMUM_QUESTION_LENGTH).max(import_constants64.MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: import_joi8.default.string().min(import_constants64.MINIMUM_ANSWER_LENGTH).max(import_constants64.MAXIMUM_ANSWER_LENGTH).required(),
  assigned_department: import_joi8.default.number().integer().min(1).allow(null),
  user_id: import_joi8.default.number().integer().min(1).allow(null)
}), modifyFeedbackBotSchema = import_joi8.default.object().keys({
  question_by_user: import_joi8.default.string().min(import_constants64.MINIMUM_QUESTION_LENGTH).max(import_constants64.MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: import_joi8.default.string().min(import_constants64.MINIMUM_ANSWER_LENGTH).max(import_constants64.MAXIMUM_ANSWER_LENGTH).required(),
  answerFeedback: import_joi8.default.number().integer().min(-1).max(1).required(),
  assigned_department: import_joi8.default.number().integer().min(1).allow(null),
  user_id: import_joi8.default.number().integer().min(1).allow(null)
}), modifyBotPostQuestion = import_joi8.default.object().keys({
  postQuestionID: import_joi8.default.number().integer().min(1).required(),
  question_by_user: import_joi8.default.string().min(import_constants64.MINIMUM_QUESTION_LENGTH).max(import_constants64.MAXIMUM_QUESTION_LENGTH).required(),
  answer_by_bot: import_joi8.default.string().min(import_constants64.MINIMUM_ANSWER_LENGTH).max(import_constants64.MAXIMUM_ANSWER_LENGTH).required(),
  assigned_department: import_joi8.default.number().integer().min(1).allow(null),
  user_id: import_joi8.default.number().integer().min(1).allow(null)
});

// app/controllers/answerBot/create.js
var createAnswerByBot = async (body) => {
  let { error, value } = createBotSchema.validate(body);
  if (error)
    return {
      error: {
        message: import_constants65.DEFAULT_ERROR_MESSAGE_CREATE_BOT,
        detail: error.message
      }
    };
  let rest = __objRest(value, []), created = await db.AnswerBot.create({
    data: __spreadValues({}, rest)
  });
  return {
    successMessage: CREATED_ANSWEBOT,
    question: created
  };
}, create_default5 = createAnswerByBot;

// app/controllers/answerBot/modifyFeedback.js
init_react();
var import_constants67 = __toESM(require_constants());
var updateFeedback = async (body) => {
  let { error, value } = modifyFeedbackBotSchema.validate(body);
  if (error)
    return {
      error: {
        message: import_constants67.DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
        detail: error.message
      }
    };
  let _a = value, { answerFeedback } = _a, rest = __objRest(_a, ["answerFeedback"]), findFeed = await db.AnswerBot.findFirst({
    where: __spreadValues({
      answer_feedback: 0
    }, rest),
    orderBy: {
      date_created: "desc"
    }
  });
  if (!findFeed)
    return {
      error: {
        message: import_constants67.DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
        detail: "The record to update the feedback does not exist."
      }
    };
  let updateFeed = await db.AnswerBot.update({
    where: {
      id: findFeed.id
    },
    data: {
      answer_feedback: answerFeedback
    }
  });
  return {
    successMessage: answerFeedback === 1 ? POSITIVE_FEEDBACK_ANSWEBOT : NEGATIVE_FEEDBACK_ANSWEBOT,
    feedback: updateFeed
  };
}, modifyFeedback_default = updateFeedback;

// app/controllers/answerBot/modifyIDQuestion.js
init_react();
var import_constants69 = __toESM(require_constants());
var updatePost = async (body) => {
  let { error, value } = modifyBotPostQuestion.validate(body);
  if (error)
    return {
      error: {
        message: import_constants69.DEFAULT_ERROR_MESSAGE_POST_BOT,
        detail: error.message
      }
    };
  let _a = value, { postQuestionID } = _a, rest = __objRest(_a, ["postQuestionID"]), findQABot = await db.AnswerBot.findFirst({
    where: __spreadValues({
      post_question_id: null,
      answer_feedback: -1
    }, rest),
    orderBy: {
      date_created: "desc"
    }
  });
  if (!findQABot)
    return {
      error: {
        message: import_constants69.DEFAULT_ERROR_MESSAGE_POST_BOT,
        detail: "The record to update the link between AnswerBot and Question does not exist."
      }
    };
  let upToDate = await db.AnswerBot.update({
    where: {
      id: findQABot.id
    },
    data: {
      post_question_id: postQuestionID
    }
  });
  return {
    successMessage: POSTED_ANSWEBOT,
    detail: upToDate
  };
}, modifyIDQuestion_default = updatePost;

// app/components/AnswerBot/index.js
init_react();

// app/components/AnswerBot/AnswerBot.jsx
init_react();

// app/components/AnswerBot/AnswerBot.Styled.jsx
init_react();
var import_styled_components44 = __toESM(require("styled-components"));

// app/images/logo_answerbot.png
var logo_answerbot_default = "/build/_assets/logo_answerbot-6JNTGKON.png";

// app/images/post-icon.png
var post_icon_default = "/build/_assets/post-icon-N5A7NK2B.png";

// app/images/like.png
var like_default = "/build/_assets/like-6G77RJIC.png";

// app/images/dislike.png
var dislike_default = "/build/_assets/dislike-ZNGYXD5Y.png";

// app/images/likeHover.png
var likeHover_default = "/build/_assets/likeHover-5HAAADIM.png";

// app/images/dislikeHover.png
var dislikeHover_default = "/build/_assets/dislikeHover-TLAFEHHT.png";

// app/components/AnswerBot/AnswerBot.Styled.jsx
var BotButton = import_styled_components44.default.button`
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
    visibility: ${(props) => props.visible ? "visible" : "hidden"};
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
`, BotIcon = import_styled_components44.default.img`
    width: 5.6vw;
    height: 5.6vw;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    background-image: url(${logo_answerbot_default});
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
`, BotMessage = import_styled_components44.default.div`
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

`, ChatbotContainer = import_styled_components44.default.div`
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
    visibility: ${(props) => props.visible ? "visible" : "hidden"};

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (max-height: 450px) {
        display: none;
    }
`, ChatbotHeader = import_styled_components44.default.div`
    background-color: #213246;
    height: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 47.5px;
`, IconBot = import_styled_components44.default.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    background-image: url(${logo_answerbot_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    left: 5%;
    margin: 5px 0px;
`, IconUser = import_styled_components44.default.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    margin: 5px 0px;
`, BotName = import_styled_components44.default.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    padding: 0 85px;

    @media screen and (min-width: 2975px) {
        padding: 0 75px;
    }
`, CloseButton2 = import_styled_components44.default.button`
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    border: none;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.4);
    }
`, ChatbotMessages = import_styled_components44.default.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`, ChatbotRowMessage = import_styled_components44.default.div`
    display: flex;
    alignItems: center;
`, blinkAnimation = import_styled_components44.keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`, Message = import_styled_components44.default.div`
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

        ${(props) => props.isWaiting && import_styled_components44.css`
          position: relative;
          overflow: hidden;

          &:after {
            content: '...';
            animation: ${blinkAnimation} 1s infinite alternate;
            animation-delay: ${props.index * 0.2}s;
          }
        `}
    }
`, ChatbotInput = import_styled_components44.default.form`
    display: flex;
    align-items: center;
    width: 330px;
    background-color: #fff;
`, Input3 = import_styled_components44.default.input`
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    cursor: ${(props) => props.enabled ? "text" : "not-allowed"};
`, SendButton = import_styled_components44.default.button`
    width: 30px;
    height: 30px;
    border-radius: 25%;
    background-color: #fff;
    border: none;
    background-image: url(${post_icon_default});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 5px;
    opacity: ${(props) => props.inputLength > 13 ? 1 : 0.3};
    cursor: ${(props) => props.inputLength > 13 ? "pointer" : "not-allowed"};
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.inputLength > 13 ? "#F2F2F1" : "#fff"};
    }
`, LikeButton = import_styled_components44.default.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${like_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 2.5% 12.5%;
    padding: 0 5px;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${likeHover_default});
    }
`, DislikeButton = import_styled_components44.default.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${dislike_default});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${dislikeHover_default});
    }
`, TextFeedback = import_styled_components44.default.span`
    padding: ${(props) => props.padding === "na" ? "0px 0px" : "5px 31px"};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
`, PublishButton = import_styled_components44.default.button`
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
`;

// app/components/AnswerBot/AnswerBot.jsx
var import_react78 = __toESM(require("react"));

// app/controllers/answerBot/pdfConv.js
init_react();
var pdfConv = async (conversation) => fetch("http://3.213.188.151:4000/api/pdf_conversation_gpt", {
  method: "POST",
  body: JSON.stringify(conversation),
  headers: {
    "Content-Type": "application/json"
  }
}).then((response) => response.json()).then((data) => ({
  text: data.conversation[data.conversation.length - 1].content,
  department: data.department
})).catch((error) => {
  throw new Error(`There was an error making the API call: ${error.message}`);
}), pdfConv_default = pdfConv;

// app/components/AnswerBot/AnswerBot.jsx
var import_prop_types47 = __toESM(require("prop-types"));
var import_constants72 = __toESM(require_constants());
var import_react79 = require("@remix-run/react");
function AnswerBot({
  postAnswerBotQuestion,
  updateAnswerBotFeedback,
  updateAnswerBotPostID,
  departments
}) {
  let instructions = INSTRUCTIONS_ANSWERBOT, [messages, setMessages] = (0, import_react78.useState)([{ role: "system", content: instructions }, { role: "system", content: WELCOME_MESSAGE }]), [messagesID, setMessagesID] = (0, import_react78.useState)([{ role: "system", content: instructions, depa: null }, { role: "system", content: WELCOME_MESSAGE, depa: null }]), messagesEndRef = (0, import_react78.useRef)(null), [inputValue, setInputValue] = (0, import_react78.useState)(""), [isWaitingForResponse, setIsWaitingForResponse] = (0, import_react78.useState)(!1), handleInput = async (e) => {
    e.preventDefault();
    let input = e.target.querySelector("input"), message = input.value;
    if (message.length > 13) {
      input.value = "", setInputValue(input.value), setIsWaitingForResponse(!0), setMessages([...messages, { role: "user", content: message }, { role: "system", content: "" }]);
      let filteredMessages = [...messages, { role: "user", content: message }].filter((mess, index2) => index2 !== 1), response = await pdfConv_default(filteredMessages), answer = response.text;
      setMessages([...messages, { role: "user", content: message }, { role: "system", content: answer }]), setIsWaitingForResponse(!1);
      let depaName = response.department, department = departments.find((c) => c.name === depaName);
      setMessagesID([...messagesID, { role: "user", content: message, depa: (department == null ? void 0 : department.department_id) || "wizeq" }, { role: "system", content: answer, depa: (department == null ? void 0 : department.department_id) || "wizeq" }]);
      let newQuestion = {
        question_by_user: message,
        answer_by_bot: answer,
        assignedDepartment: (department == null ? void 0 : department.department_id) || "wizeq"
      };
      await postAnswerBotQuestion(newQuestion);
    }
  }, handleChange = (e) => {
    setInputValue(e.target.value);
  };
  (0, import_react78.useEffect)(() => {
    (() => {
      messagesEndRef.current && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    })(), messagesEndRef.current && messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  let [chatbotVisible, setChatbotVisible] = (0, import_react78.useState)(!1), handleChatbotToggle = () => {
    setChatbotVisible(!chatbotVisible);
  }, [showThanksMessage, setShowThanksMessage] = (0, import_react78.useState)({}), [indexMessage, setIndexMessage] = (0, import_react78.useState)(null), handleLikeClick = async (index2) => {
    setIndexMessage(index2);
    let updateFeedback2 = {
      question_by_user: messages[index2].content,
      answer_by_bot: messages[index2 + 1].content,
      answerFeedback: 1,
      assignedDepartment: messagesID[index2].depa
    };
    await updateAnswerBotFeedback(updateFeedback2), setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
      [index2]: "Loading..."
    }));
  }, handleDislikeClick = async (index2) => {
    setIndexMessage(index2);
    let updateFeedback2 = {
      question_by_user: messages[index2].content,
      answer_by_bot: messages[index2 + 1].content,
      answerFeedback: -1,
      assignedDepartment: messagesID[index2].depa
    };
    await updateAnswerBotFeedback(updateFeedback2), setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
      [index2]: "Loading..."
    }));
  }, handlePublishQuestion = async (index2) => {
    setIndexMessage(index2);
    let updatePostID = {
      question: messages[index2].content,
      answer: messages[index2 + 1].content,
      assignedDepartment: messagesID[index2].depa
    };
    await updateAnswerBotPostID(updatePostID), setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
      [index2]: "Loading..."
    }));
  }, profile = useUser_default(), globalSuccess = useGlobalSuccessMessage_default(), data = (0, import_react79.useActionData)();
  return (0, import_react78.useEffect)(() => {
    if (globalSuccess) {
      switch (globalSuccess) {
        case POSITIVE_FEEDBACK_ANSWEBOT:
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: !0
          })), setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
              [indexMessage]: "na"
            }));
          }, 2500);
          break;
        case NEGATIVE_FEEDBACK_ANSWEBOT:
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: !0
          })), setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
              [indexMessage]: "Would you like to share your question with the community?"
            }));
          }, 1500);
          break;
        case POSTED_ANSWEBOT:
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: "Your question has been published successfully."
          })), setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
              [indexMessage]: "na"
            }));
          }, 2500);
          break;
        default:
          break;
      }
      setIndexMessage(null);
    }
  }, [globalSuccess]), (0, import_react78.useEffect)(() => {
    if (!data)
      return;
    let { error, errors } = data;
    if (errors && Array.isArray(errors)) {
      errors.forEach((_error) => {
        _error.message === import_constants72.DEFAULT_ERROR_MESSAGE_BOT && (setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
          [indexMessage]: import_constants72.DEFAULT_ERROR_MESSAGE_POST_BOT
        })), setTimeout(() => {
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: "Would you like to share your question with the community?"
          }));
        }, 3e3));
      }), setIndexMessage(null);
      return;
    }
    if (error) {
      switch (error.message) {
        case import_constants72.DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT:
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: import_constants72.DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT
          })), setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
              [indexMessage]: !1
            }));
          }, 2500);
          break;
        case import_constants72.DEFAULT_ERROR_MESSAGE_POST_BOT:
          setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
            [indexMessage]: import_constants72.DEFAULT_ERROR_MESSAGE_POST_BOT
          })), setTimeout(() => {
            setShowThanksMessage((prevShowThanksMessage) => __spreadProps(__spreadValues({}, prevShowThanksMessage), {
              [indexMessage]: "na"
            }));
          }, 2500);
          break;
        default:
          break;
      }
      setIndexMessage(null);
    }
  }, [data]), /* @__PURE__ */ import_react78.default.createElement("div", null, /* @__PURE__ */ import_react78.default.createElement(BotButton, {
    id: "answerbotbutton",
    visible: !chatbotVisible,
    onClick: handleChatbotToggle
  }, /* @__PURE__ */ import_react78.default.createElement(BotIcon, null), /* @__PURE__ */ import_react78.default.createElement(BotMessage, {
    className: "message"
  }, "Hi, I'm AnswerBot!", /* @__PURE__ */ import_react78.default.createElement("br", null), "Ask me anything!")), /* @__PURE__ */ import_react78.default.createElement(ChatbotContainer, {
    visible: chatbotVisible
  }, /* @__PURE__ */ import_react78.default.createElement(ChatbotHeader, null, /* @__PURE__ */ import_react78.default.createElement(IconBot, {
    style: { position: "absolute" }
  }), /* @__PURE__ */ import_react78.default.createElement(BotName, {
    id: "openchat"
  }, " AnswerBot "), /* @__PURE__ */ import_react78.default.createElement(CloseButton2, {
    id: "closechat",
    onClick: handleChatbotToggle
  }, " \u2715 ")), /* @__PURE__ */ import_react78.default.createElement(ChatbotMessages, null, messages.slice(1).map((message, index2) => message.role === "user" ? /* @__PURE__ */ import_react78.default.createElement(ChatbotRowMessage, {
    id: `msg-${index2}`,
    style: { justifyContent: "flex-end" }
  }, /* @__PURE__ */ import_react78.default.createElement(Message, {
    key: `message-${message.id}`,
    className: "user",
    ref: messagesEndRef
  }, message.content), /* @__PURE__ */ import_react78.default.createElement(IconUser, {
    src: profile.profile_picture
  })) : /* @__PURE__ */ import_react78.default.createElement("div", null, /* @__PURE__ */ import_react78.default.createElement(ChatbotRowMessage, {
    id: `msg-${index2}`,
    style: { justifyContent: "flex-start" }
  }, /* @__PURE__ */ import_react78.default.createElement(IconBot, null), /* @__PURE__ */ import_react78.default.createElement(Message, {
    key: `message-${message.id}`,
    className: "bot",
    ref: messagesEndRef,
    isWaiting: isWaitingForResponse && index2 + 2 === messages.length
  }, message.content)), index2 !== 0 && /* @__PURE__ */ import_react78.default.createElement("div", null, !showThanksMessage[index2] && (index2 !== messages.length - 2 || !isWaitingForResponse) && /* @__PURE__ */ import_react78.default.createElement(import_react78.default.Fragment, null, /* @__PURE__ */ import_react78.default.createElement(LikeButton, {
    key: `like-${message.id}`,
    onClick: () => handleLikeClick(index2)
  }), /* @__PURE__ */ import_react78.default.createElement(DislikeButton, {
    key: `dislike-${message.id}`,
    onClick: () => handleDislikeClick(index2)
  })), showThanksMessage[index2] && /* @__PURE__ */ import_react78.default.createElement(TextFeedback, {
    padding: showThanksMessage[index2]
  }, showThanksMessage[index2] === !0 && "Thanks for the feedback!", showThanksMessage[index2] === "na" && "", !(showThanksMessage[index2] === "Thanks for the feedback!" || showThanksMessage[index2] === "na") && showThanksMessage[index2]), showThanksMessage[index2] === "Would you like to share your question with the community?" && /* @__PURE__ */ import_react78.default.createElement(PublishButton, {
    onClick: () => handlePublishQuestion(index2)
  }, "Post question"))))), /* @__PURE__ */ import_react78.default.createElement(ChatbotInput, {
    onSubmit: handleInput
  }, /* @__PURE__ */ import_react78.default.createElement(Input3, {
    id: "chatbotinput",
    type: "text",
    placeholder: "Enter your question...",
    onChange: handleChange,
    disabled: isWaitingForResponse,
    enabled: !isWaitingForResponse,
    title: "Type at least 14 characters"
  }), /* @__PURE__ */ import_react78.default.createElement(SendButton, {
    type: "submit",
    inputLength: inputValue.length,
    disabled: isWaitingForResponse
  }))));
}
AnswerBot.propTypes = {
  postAnswerBotQuestion: import_prop_types47.default.func.isRequired,
  updateAnswerBotFeedback: import_prop_types47.default.func.isRequired,
  updateAnswerBotPostID: import_prop_types47.default.func.isRequired,
  departments: import_prop_types47.default.arrayOf(import_prop_types47.default.shape())
};
AnswerBot.defaultProps = {
  departments: []
};
var AnswerBot_default = AnswerBot;

// app/components/FAQs/FAQs.jsx
init_react();

// app/components/FAQs/FAQs.Styled.jsx
init_react();
var import_styled_components45 = __toESM(require("styled-components")), FAQContainer = import_styled_components45.default.div`
  margin: 30px 40px 0;
  width: 17vw;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  flex-direction: column;
`, FAQHeader = import_styled_components45.default.div`
  background-color: #f5f5f5;
  font-size: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`, FAQList = import_styled_components45.default.div`
  padding: 10px 25px 10px 25px;
  border: 1px solid #f5f5f5;

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`, Question = import_styled_components45.default.a`
  font-size: 15px;
  color: #555555;
  text-decoration: none;
  transition: color 0.2s;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: #213246;
  }
`;

// app/components/FAQs/FAQs.jsx
var import_prop_types48 = __toESM(require("prop-types")), import_react80 = __toESM(require("react"));
function FAQs({ questionsFAQ }) {
  return /* @__PURE__ */ import_react80.default.createElement(FAQContainer, null, /* @__PURE__ */ import_react80.default.createElement(FAQHeader, null, "FAQ's"), questionsFAQ.map((faq) => /* @__PURE__ */ import_react80.default.createElement(FAQList, null, /* @__PURE__ */ import_react80.default.createElement(Question, {
    href: `/questions/${faq.question_id}`,
    key: faq.id,
    title: faq.question
  }, faq.question))));
}
FAQs.propTypes = {
  questionsFAQ: import_prop_types48.default.arrayOf(import_prop_types48.default.shape())
};
FAQs.defaultProps = {
  questionsFAQ: []
};
var FAQs_default = FAQs;

// app/routes/questions/new.jsx
var loader4 = async ({ request }) => {
  await requireAuth(request);
  let locations = await list_default3(), departments = await list_default5(), questionsFAQ = await list_default({
    orderBy: "popular",
    dateRange: "this_week",
    limit: 10
  });
  return (0, import_node4.json)({
    locations,
    departments,
    questionsFAQ
  });
}, action2 = async ({ request }) => {
  let formData = await request.formData(), formAction = formData.get("action"), user = await getAuthenticatedUser(request), form = Object.fromEntries(formData.entries()), { assignedDepartment } = form, parsedDepartment = parseInt(assignedDepartment, 10), response, payload;
  switch (formAction) {
    case actions_default.CREATE_QUESTION_ANSWER:
      let { assigned_to_employee_id: assignedEmployeeId } = form, assignedEmployeeValue = assignedEmployeeId !== "undefined" ? parseInt(assignedEmployeeId, 10) : void 0;
      if (payload = {
        question: form.question,
        created_by_employee_id: form.isAnonymous === "true" ? null : user.employee_id,
        is_anonymous: form.isAnonymous === "true",
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        assigned_to_employee_id: Number.isNaN(assignedEmployeeValue) ? null : assignedEmployeeValue,
        location: form.location,
        accessToken: user.accessToken
      }, response = await create_default4(payload), response.successMessage) {
        let session = await getSession(request), { question, successMessage } = response;
        session.flash("globalSuccess", successMessage);
        let destination = `/questions/${question.question_id}`;
        return (0, import_node4.redirect)(destination, {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    case actions_default.CREATE_QUESTION_ANSWERBOT:
      if (payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await create_default5(payload), response.successMessage) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node4.redirect)("/questions/new", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    case actions_default.UPDATE_FEEDBACK_ANSWERBOT:
      if (payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        answerFeedback: form.answerFeedback,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await modifyFeedback_default(payload), response.successMessage) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node4.redirect)("/questions/new", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    case actions_default.UPDATE_POST_ANSWERBOT:
      if (payload = {
        question: form.question,
        created_by_employee_id: user.employee_id,
        is_anonymous: !1,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        assigned_to_employee_id: null,
        botEnabled: !0,
        location: DEFAULT_LOCATION,
        accessToken: user.accessToken
      }, response = await create_default4(payload), response.successMessage && (payload = {
        postQuestionID: response.question.question_id,
        question_by_user: form.question,
        answer_by_bot: form.answer,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await modifyIDQuestion_default(payload), response.successMessage)) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node4.redirect)("/questions/new", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    default:
      break;
  }
  return (0, import_node4.json)(response);
};
function CreateQuestion() {
  let { questionsFAQ, locations, departments } = (0, import_react82.useLoaderData)(), submit = (0, import_react82.useSubmit)(), formRef = (0, import_react81.useRef)();
  (0, import_react81.useEffect)(() => {
    departments.unshift({ name: "I don't know whom to assign it.", department_id: import_constants73.NOT_ASSIGNED_DEPARTMENT_ID });
  }, []);
  let renderBulletPoint = () => /* @__PURE__ */ import_react81.default.createElement("div", null, /* @__PURE__ */ import_react81.default.createElement(import_bs5.BsCircleFill, {
    color: "var(--color-secondary)",
    size: "7px",
    style: { marginTop: "3px", marginRight: "10px" }
  })), postQuestion = (question) => {
    let data = new FormData(formRef.current);
    data.set("action", actions_default.CREATE_QUESTION_ANSWER);
    for (let [key, value] of Object.entries(question))
      data.set(key, value);
    submit(data, { method: "post", action: "/questions/new" });
  }, postAnswerBotQuestion = (question) => {
    let data = new FormData(formRef.current);
    data.set("action", actions_default.CREATE_QUESTION_ANSWERBOT);
    for (let [key, value] of Object.entries(question))
      data.set(key, value);
    submit(data, { method: "post", action: "/questions/new" });
  }, updateAnswerBotFeedback = (question) => {
    let data = new FormData(formRef.current);
    data.set("action", actions_default.UPDATE_FEEDBACK_ANSWERBOT);
    for (let [key, value] of Object.entries(question))
      data.set(key, value);
    submit(data, { method: "post", action: "/questions/new" });
  }, updateAnswerBotPostID = (question) => {
    let data = new FormData(formRef.current);
    data.set("action", actions_default.UPDATE_POST_ANSWERBOT);
    for (let [key, value] of Object.entries(question))
      data.set(key, value);
    submit(data, { method: "post", action: "/questions/new" });
  };
  return /* @__PURE__ */ import_react81.default.createElement(import_react81.default.Fragment, null, /* @__PURE__ */ import_react81.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react81.default.createElement(QuestionDiv, null, /* @__PURE__ */ import_react81.default.createElement(QuestionSlogan, null, /* @__PURE__ */ import_react81.default.createElement(Slogan_default, null), /* @__PURE__ */ import_react81.default.createElement(FAQs_default, {
    questionsFAQ
  })), /* @__PURE__ */ import_react81.default.createElement(QuestionInput, null, /* @__PURE__ */ import_react81.default.createElement(QuestionForm_default, {
    maximumQuestionLength: import_constants73.MAXIMUM_QUESTION_LENGTH,
    minimumQuestionLength: import_constants73.MINIMUM_ANSWER_LENGTH,
    postQuestion,
    locations,
    departments
  })), /* @__PURE__ */ import_react81.default.createElement(QuestionRecommendations2, null, /* @__PURE__ */ import_react81.default.createElement(RecommendationsContainer2, null, /* @__PURE__ */ import_react81.default.createElement(Recommendations2, null, /* @__PURE__ */ import_react81.default.createElement("span", null, "Things to keep in mind"), RECOMMENDATIONS_QUESTION.map((text5) => /* @__PURE__ */ import_react81.default.createElement("span", {
    key: text5
  }, renderBulletPoint(), text5)))), /* @__PURE__ */ import_react81.default.createElement(AnswerBot_default, {
    postAnswerBotQuestion,
    updateAnswerBotFeedback,
    updateAnswerBotPostID,
    departments
  }))));
}
var new_default = CreateQuestion;

// app/routes/auth/auth0.jsx
var auth0_exports = {};
__export(auth0_exports, {
  action: () => action3,
  loader: () => loader5
});
init_react();
var import_node5 = require("@remix-run/node");

// app/auth.server.js
init_react();
var import_remix_auth = require("remix-auth"), import_remix_auth_auth0 = require("remix-auth-auth0");

// app/controllers/users/find.js
init_react();
var findOrCreateUser = async ({ email, profile_picture, full_name }) => {
  let user = await db.users.findUnique({
    where: {
      email
    }
  });
  return user || await db.users.create({
    data: {
      email,
      profile_picture,
      full_name
    }
  });
};

// app/auth.server.js
var callbackURL = `${process.env.BASE_URL}/auth/auth0/callback`, clientID = process.env.AUTH0_CLIENT_ID || "AUTH0_CLIENT_ID must be set", clientSecret = process.env.AUTH0_CLIENT_SECRET || "AUTH0_CLIENT_SECRET must be set", domain2 = process.env.AUTH0_DOMAIN || "AUTH0_DOMAIN must be set", authenticator = new import_remix_auth.Authenticator(sessionStorage), strategyConfig = {
  callbackURL,
  clientID,
  clientSecret,
  domain: domain2
}, auth0Strategy = new import_remix_auth_auth0.Auth0Strategy(strategyConfig, async ({
  accessToken,
  refreshToken,
  extraParams,
  profile
}) => {
  try {
    let fullName = `${profile.name.givenName} ${profile.name.familyName}`, email = profile.emails.length > 0 ? profile.emails[0].value : void 0, profilePic = profile.photos.length > 0 ? profile.photos[0].value : void 0, user = await findOrCreateUser({
      full_name: fullName,
      email,
      profile_picture: profilePic
    });
    return __spreadProps(__spreadValues({}, user), {
      accessToken,
      id: profile.id
    });
  } catch (e) {
    return console.error(e), {};
  }
});
authenticator.use(auth0Strategy);
var auth_server_default = authenticator;

// app/routes/auth/auth0.jsx
var loader5 = () => (0, import_node5.redirect)("/login"), action3 = async ({ request }) => auth_server_default.authenticate("auth0", request);

// app/routes/auth/auth0/callback.jsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader6
});
init_react();
var loader6 = async ({ request }) => {
  let user = await auth_server_default.authenticate("auth0", request, {
    failureRedirect: "/login"
  });
  return createUserSession({
    request,
    userData: user,
    remember: !1,
    redirectTo: "/"
  });
};

// app/routes/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader7
});
init_react();
var import_react84 = __toESM(require("react")), import_node6 = require("@remix-run/node"), import_react85 = require("@remix-run/react");

// app/styles/Dashboard.Styled.jsx
init_react();
var import_styled_components46 = __toESM(require("styled-components")), MainContainer = import_styled_components46.default.div`
height: 115vh;
background-color: #f7fafc; /* Slate-100 */
margin: 0;
margin-left: 18%;
@media (min-width: 1536px) {
margin-left: 40px; /* 2xl:ml-40 */
}

padding-top: 8px; /* Pt-8 */
align-content: stretch; /* Content-stretch */
`, NextContainer = import_styled_components46.default.div`
margin-left: 1%;

height: 100vh;
padding-top: 8px;
display: grid;

grid-template-columns: repeat(1, minmax(0, 1fr));
gap: 3.5rem;
padding-left: 2.5rem;
padding-right: 2.5rem;

margin-right: 1px;
`, DividerContainer = import_styled_components46.default.div`
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
grid-template-rows: minmax(0, 1fr);
column-gap: 3%;
margin-left: 2px;
`, TopContainers = import_styled_components46.default.div`
display: inline-block;
overflow-y: scroll;
align-items: center;
justify-content: center;
margin-top: 20px;
width: 11/12;
height: 380px;
border-radius: 0.5rem;
background-color: white;
border: 1px solid #d1d5db;
box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
&:focus {
outline: none;
box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
}
`, BottomContainer = import_styled_components46.default.div`
overflow-y: scroll;
align-items: center;
justify-content: center;
background-color: white;
margin-top: 15px;
border: 1px solid #d1d5db; /* ring-gray-200 */
box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
&:focus {
outline: none;
box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
}
border-radius: 0.375rem; /* rounded-md */
margin-left: 2px; /* ml-2 */
margin-right: 1px; /* mr-1 */
height: 300px;
`, ContMargin = import_styled_components46.default.div`
margin-left: 25px;
margin-right: 25px;
margin-top: 10px;
`, UList = import_styled_components46.default.ul`
list-style-type: none;
margin: 0;
padding: 0;
`, ButtonText = import_styled_components46.default.a`
 background-color: #304966;
 border: 1px solid #304966;
 color: white;
 padding: 5px;
 text-align: center;
 text-decoration: none;
 letter-spacing: 0.5px;
 display: inline-block;
 height: 30px;
 width: 100px;
 border-radius: 20px;
 font-weight: 400;

 &:hover {
  background-color: #fff;
  color: #304966;
  text-decoration: none;
 }
`, Title = import_styled_components46.default.h2`
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 margin-bottom: 15px;
 background-color: white;

`, Text = import_styled_components46.default.td`
 color: #17202a;

 font-weight: 400;
 letter-spacing: 1px;
`, TextBold = import_styled_components46.default.th`
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 font-size: medium;
 position: sticky;
 top: 0;
 background-color: white;
`, TextBoldList = import_styled_components46.default.li`
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 font-size: large;
 margin-top: 30px;
`, TextU = import_styled_components46.default.td`
 color: #c64927;
 font-weight: 400;
 letter-spacing: 1px;
`, TextUBorder = import_styled_components46.default.span`
  display: inline-block;
  background-color: #FFE6DE;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`, TextA = import_styled_components46.default.td`
 color: #83bb2b;
 font-weight: 400;
 letter-spacing: 1px;
`, TextABorder = import_styled_components46.default.span`
  display: inline-block;
  background-color: #F0F4E6;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`, TextB = import_styled_components46.default.td`
 color: #DE9A34;
 font-weight: 400;
 letter-spacing: 1px;
`, TextBBorder = import_styled_components46.default.span`
  display: inline-block;
  background-color: #FFEFD6;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`;

// app/components/AdminSideBar/index.js
init_react();

// app/components/AdminSideBar/AdminSideBar.jsx
init_react();

// app/components/AdminSideBar/AdminSideBar.Styled.jsx
init_react();
var import_styled_components47 = __toESM(require("styled-components")), MainContainer2 = import_styled_components47.default.div`
 background-color: red;
 margin-top: 1px;
 height: 115vh;
 width: 265px;
 position: absolute;
 inset-y: 0;
 display: flex;
 overflow-y: scroll;
 padding-right: 5px;
 background-color: white;


`, DepContainer = import_styled_components47.default.div`
 position: relative;
 display: inline-block;
 padding-left: 25px;
 padding-right: 15px;
 margin-right: 10px;

`, TitleDep = import_styled_components47.default.div`
 color: #17202a; /* Indigo-800 */
 font-weight: bold;
 font-size: large;
 margin-left: 8px;
 margin-right: 8px;
 margin-top: 18%;
`, ListDep = import_styled_components47.default.ul`
 list-style-type: none;
 padding: 0;
 padding-left: 10px;
 margin-top: 20%;
`, DepSelect = import_styled_components47.default.li`
 text-align: left;
 margin-top: 10px;
 margin-bottom: 10px;
 padding-top: 10px;
 padding-bottom: 10px;
 padding-left: 5px;
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 word-break: break-all;

 &.selected,
 &:hover {
  background-color: #213246; /* Gray-700 */
  color: white;
  border-radius: 0.375rem; /* Rounded-md */
  cursor: pointer;
 }
`;

// app/components/AdminSideBar/AdminSideBar.jsx
var import_prop_types49 = __toESM(require("prop-types")), import_react83 = __toESM(require("react"));
function SideBar({ departments, selectedDepartment, handleSelectDepartment }) {
  return /* @__PURE__ */ import_react83.default.createElement(MainContainer2, null, /* @__PURE__ */ import_react83.default.createElement(DepContainer, null, /* @__PURE__ */ import_react83.default.createElement(TitleDep, null, "Departaments"), /* @__PURE__ */ import_react83.default.createElement(ListDep, null, departments.map((item) => /* @__PURE__ */ import_react83.default.createElement(DepSelect, {
    key: item.name,
    "aria-current": item.current ? "page" : void 0,
    onClick: () => handleSelectDepartment(item.department_id),
    selected: item.department_id === selectedDepartment,
    className: item.department_id === selectedDepartment ? "selected" : ""
  }, item.name)))));
}
SideBar.propTypes = {
  departments: import_prop_types49.default.arrayOf(import_prop_types49.default.shape()),
  selectedDepartment: import_prop_types49.default.number,
  handleSelectDepartment: import_prop_types49.default.func.isRequired
};
SideBar.defaultProps = {
  departments: [],
  selectedDepartment: void 0
};
var AdminSideBar_default = SideBar;

// app/routes/dashboard.jsx
var import_react_bootstrap11 = require("react-bootstrap"), import_react86 = require("@remix-run/react");

// app/utils/dateRangeConversion.js
init_react();
var dateRangeConversion = (range2) => {
  let startDate, endDate;
  switch (range2) {
    case "today":
      return startDate = new Date(), startDate.setHours(0, 0, 0, 0), {
        startDate,
        endDate: new Date()
      };
    case "this_week":
      let curr = new Date(), first = curr.getDate() - curr.getDay();
      return startDate = new Date(curr.setDate(first)), startDate.setHours(0, 0, 0, 0), endDate = new Date(), {
        startDate,
        endDate
      };
    case "this_month":
      let now = new Date();
      return startDate = new Date(now.getFullYear(), now.getMonth(), 1), endDate = new Date(), {
        startDate,
        endDate
      };
    default:
      return;
  }
}, dateRangeConversion_default = dateRangeConversion;

// app/controllers/answerBot/list.js
init_react();
var import_filterConstants2 = __toESM(require_filterConstants()), buildWhereDepartment2 = (department) => department === void 0 || department === import_filterConstants2.ALL_DEPARTMENTS ? {} : department === import_filterConstants2.NOT_ASSIGNED_DEPARTMENT_ID ? {
  assigned_department: null
} : { assigned_department: department }, buildWhereDateRange2 = (dateRange) => dateRange && dateRange.startDate && dateRange.endDate ? {
  date_created: {
    lte: new Date(dateRange.endDate),
    gte: new Date(dateRange.startDate)
  }
} : {}, listAnswerBot = async (params) => {
  try {
    let { department, dateRange } = params;
    return await db.AnswerBot.findMany({
      where: __spreadValues(__spreadValues({}, buildWhereDepartment2(department)), buildWhereDateRange2(dateRange))
    });
  } catch {
    throw new Error("An error occurred while getting the responses from the bot.");
  }
}, list_default6 = listAnswerBot;

// app/routes/dashboard.jsx
var loader7 = async ({ request }) => {
  await requireAuth(request);
  let url = new URL(request.url), department = Number.parseInt(url.searchParams.get("department"), 10), dateRange = dateRangeConversion_default("this_month"), questionsFAQ = await list_default({
    department: Number.isNaN(department) ? void 0 : department,
    dateRange
  }), questionsOF = await list_default({
    department: Number.isNaN(department) ? void 0 : department,
    status: "not_answered",
    commentStatus: "not_approved",
    commentVote: "not_approved",
    dateRange
  }), questionsBot = await list_default6({
    department: Number.isNaN(department) ? void 0 : department,
    dateRange
  }), departments = await list_default5();
  return departments.unshift({ department_id: 0, name: "Not Assigned" }), departments.unshift({ department_id: void 0, name: "All" }), (0, import_node6.json)({
    questionsFAQ,
    questionsOF,
    questionsBot,
    departments
  });
}, months = [
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
], formatDate = (dateString) => {
  let date = new Date(dateString), month = months[date.getMonth()], day = date.getDate();
  return `${month} ${day}`;
};
function Dashboard() {
  let {
    questionsFAQ,
    questionsOF,
    questionsBot,
    departments
  } = (0, import_react86.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react85.useSearchParams)(), [selectedDepartment, setSelectedDepartment] = (0, import_react84.useState)(departments[0].department_id);
  return /* @__PURE__ */ import_react84.default.createElement(import_react84.default.Fragment, null, /* @__PURE__ */ import_react84.default.createElement(AdminSideBar_default, {
    departments,
    selectedDepartment,
    handleSelectDepartment: (department) => {
      setSelectedDepartment(department), searchParams.set("department", department), setSearchParams(searchParams);
    }
  }), /* @__PURE__ */ import_react84.default.createElement(MainContainer, null, /* @__PURE__ */ import_react84.default.createElement(NextContainer, null, /* @__PURE__ */ import_react84.default.createElement(DividerContainer, null, /* @__PURE__ */ import_react84.default.createElement(TopContainers, null, /* @__PURE__ */ import_react84.default.createElement(ContMargin, null, /* @__PURE__ */ import_react84.default.createElement(Title, null, "Open Forums"), /* @__PURE__ */ import_react84.default.createElement(import_react_bootstrap11.Table, {
    hover: !0
  }, /* @__PURE__ */ import_react84.default.createElement("tbody", null, questionsOF.map((question) => /* @__PURE__ */ import_react84.default.createElement("tr", null, /* @__PURE__ */ import_react84.default.createElement(Text, {
    key: `questionOP-${question.id}`,
    title: question.question
  }, question.question.length > 100 ? `${question.question.substring(0, 100)}...` : question.question), /* @__PURE__ */ import_react84.default.createElement("td", null, /* @__PURE__ */ import_react84.default.createElement(ButtonText, {
    href: `/questions/${question.question_id}`,
    key: question.id,
    title: question.question
  }, "Answer it \u2192")))))))), /* @__PURE__ */ import_react84.default.createElement(TopContainers, null, /* @__PURE__ */ import_react84.default.createElement(ContMargin, null, /* @__PURE__ */ import_react84.default.createElement(Title, null, "Answerbot Feedback"), /* @__PURE__ */ import_react84.default.createElement(import_react_bootstrap11.Table, {
    stripped: !0,
    hover: !0
  }, /* @__PURE__ */ import_react84.default.createElement("thead", null, /* @__PURE__ */ import_react84.default.createElement("tr", null, /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "250"
  }, "Question"), /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "250"
  }, "Answer"), /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "170"
  }, "Feedback"))), /* @__PURE__ */ import_react84.default.createElement("tbody", null, questionsBot.map((question) => /* @__PURE__ */ import_react84.default.createElement("tr", null, /* @__PURE__ */ import_react84.default.createElement(Text, {
    key: `questionAB-${question.id}`,
    title: question.question_by_user
  }, question.question_by_user.length > 50 ? `${question.question_by_user.substring(0, 50)}...` : question.question_by_user), /* @__PURE__ */ import_react84.default.createElement(Text, {
    key: `answerAB-${question.id}`,
    title: question.answer_by_bot
  }, question.answer_by_bot.length > 50 ? `${question.answer_by_bot.substring(0, 50)}...` : question.answer_by_bot), question.answer_feedback === -1 && /* @__PURE__ */ import_react84.default.createElement(TextU, {
    key: `feedbackAB-${question.id}`
  }, /* @__PURE__ */ import_react84.default.createElement(TextUBorder, null, " Bad ")), question.answer_feedback === 0 && /* @__PURE__ */ import_react84.default.createElement(TextB, {
    key: `feedbackAB-${question.id}`
  }, /* @__PURE__ */ import_react84.default.createElement(TextBBorder, null, " N/A ")), question.answer_feedback === 1 && /* @__PURE__ */ import_react84.default.createElement(TextA, {
    key: `feedbackAB-${question.id}`
  }, /* @__PURE__ */ import_react84.default.createElement(TextABorder, null, " Good "))))))))), /* @__PURE__ */ import_react84.default.createElement(BottomContainer, null, /* @__PURE__ */ import_react84.default.createElement(ContMargin, null, /* @__PURE__ */ import_react84.default.createElement(Title, null, "FAQs"), /* @__PURE__ */ import_react84.default.createElement(import_react_bootstrap11.Table, {
    stripped: !0,
    hover: !0
  }, /* @__PURE__ */ import_react84.default.createElement("thead", null, /* @__PURE__ */ import_react84.default.createElement("tr", null, /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "330"
  }, "Question"), /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "170"
  }, "Department"), /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "170"
  }, "Date"), /* @__PURE__ */ import_react84.default.createElement(TextBold, {
    width: "170"
  }, "Status"))), /* @__PURE__ */ import_react84.default.createElement("tbody", null, questionsFAQ.map((question) => {
    var _a;
    return /* @__PURE__ */ import_react84.default.createElement("tr", null, /* @__PURE__ */ import_react84.default.createElement(Text, {
      key: `questionFAQ-${question.id}`,
      title: question.question
    }, question.question.length > 50 ? `${question.question.substring(0, 50)}...` : question.question), /* @__PURE__ */ import_react84.default.createElement(Text, {
      key: `department-${question.id}`
    }, " ", question.assigned_department !== null ? (_a = departments.find((depa) => depa.department_id === question.assigned_department)) == null ? void 0 : _a.name : "Not Assigned", " "), /* @__PURE__ */ import_react84.default.createElement(Text, {
      key: `date-${question.id}`
    }, " ", formatDate(question.createdAt), " "), (question.Answers.length > 0 || question.Comments.some((comment) => comment.approvedBy !== null)) && /* @__PURE__ */ import_react84.default.createElement(TextA, {
      key: `statusFAQ-${question.id}`
    }, /* @__PURE__ */ import_react84.default.createElement(TextABorder, null, " Answered ")), question.Answers.length <= 0 && question.Comments.every((comment) => comment.approvedBy === null) && question.Comments.some((comment) => comment.CommentVote.length > 0 && comment.CommentVote.some((vote) => vote.value >= 10)) && /* @__PURE__ */ import_react84.default.createElement(TextB, {
      key: `statusFAQ-${question.id}`
    }, /* @__PURE__ */ import_react84.default.createElement(TextBBorder, null, " Answered by Community ")), question.Answers.length <= 0 && (question.Comments.length === 0 || question.Comments.every((comment) => comment.approvedBy === null) && question.Comments.some((comment) => comment.CommentVote.length > 0 && comment.CommentVote.every((vote) => vote.value < 10))) && /* @__PURE__ */ import_react84.default.createElement(TextU, {
      key: `statusFAQ-${question.id}`
    }, /* @__PURE__ */ import_react84.default.createElement(TextUBorder, null, " Unanswered ")));
  }))))))));
}
var dashboard_default = Dashboard;

// app/routes/contact.jsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  loader: () => loader8
});
init_react();
var import_react89 = __toESM(require("react")), import_prop_types51 = __toESM(require("prop-types")), import_node7 = require("@remix-run/node");

// app/components/Footer.jsx
init_react();
var import_react87 = __toESM(require("react"));

// app/styles/Contact.Styled.jsx
init_react();
var import_styled_components48 = __toESM(require("styled-components"));

// app/images/caret-down-solid.svg
var caret_down_solid_default = "/build/_assets/caret-down-solid-VHSOYTMP.svg";

// app/styles/Contact.Styled.jsx
var FooterDiv = import_styled_components48.default.div`
    background-color: #f4f7f9;
    color: #a2abaf;
    font-size: 12px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 15px 70px;

    @media (max-width: 400px) {
        padding: 0 15px 20px;
    }
`, FooterContainer = import_styled_components48.default.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;

    @media (min-width: 1200px) {
        width: 1170px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 970px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 750px;
    }
`, FooterLink = import_styled_components48.default.a`
    color: #666;

    &:hover {
        text-decoration: underline;
    }
`, ContactInputDiv = import_styled_components48.default.div`
    background-color: #f4f7f9;
    box-sizing: border-box;
    min-height: 64.8752vh;
    padding: 2% 0 7%;
    position: relative;
    text-align: center;
`, ContactForm = import_styled_components48.default.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    max-width: 390px;
    width: 100%;
`, ContactFormP = import_styled_components48.default.p`
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
    color: var(--color-dark-50);
    line-height: 24px;
`, ContactSelect = import_styled_components48.default.select`
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    background: #fff url(${caret_down_solid_default}) no-repeat;
    background-position-x: calc(100% - 16px);
    background-position-y: 6px;
    background-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: #222;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
`, ContactTextArea = import_styled_components48.default.textarea`
    border: 1px solid #ccc;
    height: 150px;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    padding: 12px 16px;
    width: 100%;
    resize: none;
    overflow: auto;
    border-radius: 4px;
    box-sizing: border-box;
`, BtnContainer = import_styled_components48.default.div`
    padding: 12px 0;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    margin: 10px 0;
    max-width: 390px;
    width: 100%;
`, SubmitBtn = import_styled_components48.default.button`
    background-color: var(--color-secondary);
    border-radius: 3px;
    border: none;
    color: #fff;
    cursor: pointer;
    margin: 4px 2px;
    padding: 12px 32px;
    text-decoration: none;
    width: 100%;
    text-transform: none;
    overflow: visible;

    &:hover {
        background-color: #00a7e587;
    }
`, SuccessDiv = import_styled_components48.default.div`
    background-color: white;
    color: var(--color-dark-50);
    margin-top: 50px;
    max-width: 500px;
    padding: 30px 20px;
    margin-right: auto;
    margin-left: auto;  

    @media (min-width: 1200px) {
        width: 1170px;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        width: 970px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        width: 750px;
    }
`, ContactCardDiv = import_styled_components48.default.div`
    background-color: #1c1c1c;
`, ContactInputHeader = import_styled_components48.default.div`
    background-color: #fff;
    text-align: center;
    font-size: 14px;
    margin: 0 auto;
    box-sizing: border-box;
`, ContactInputHeaderH1 = import_styled_components48.default.h1`
    color: #a2abaf;
    letter-spacing: 1.5px;
    padding: 72px 0 12px;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 auto;
    max-width: 390px;
`, ContactInputHeaderH2 = import_styled_components48.default.h2`
    color: var(--color-dark-50);
    font-size: 24px;
    font-weight: 600;
    padding: 12px 0 8px;
    margin: 0 auto;
    max-width: 390px;
`, ContactInputHeaderP = import_styled_components48.default.p`
    color: var(--color-dark-50);
    letter-spacing: 0.6px;
    line-height: 1.71;
    padding: 8px 10px 28px;
    font-size: 14px;
    margin: 0 auto;
    max-width: 390px;
`, ContactInputSitesDiv = import_styled_components48.default.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 390px;
`, ContactInputGoTo = import_styled_components48.default.div`
    margin: 20px 40px 40px;
    max-width: 390px;
`, ContactInputGoToP = import_styled_components48.default.p`
    font-size: 16px;
    margin: 8px 0 4px;
    padding: 0;
    max-width: 390px;
`, ContactInputGoToA = import_styled_components48.default.a`
    padding: 4px 0;
    white-space: nowrap;
    color: var(--color-secondary);
    margin: 0 auto;
    max-width: 390px;
`, ContactInputGoToImg = import_styled_components48.default.img`
    background-color: #f4f7f9;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #f4f7f9;
    height: 28px;
    margin: 18px;
    width: 28px;
    max-width: 390px;
`;

// app/components/Footer.jsx
var Footer = class extends import_react87.Component {
  constructor(props) {
    super(props);
    this.state = {
      wizeQTeamUrl: "https://wizeline.atlassian.net/wiki/spaces/WIZEQ/overview"
    };
  }
  render() {
    return /* @__PURE__ */ import_react87.default.createElement(FooterDiv, null, /* @__PURE__ */ import_react87.default.createElement(FooterContainer, null, /* @__PURE__ */ import_react87.default.createElement(FooterLink, {
      href: this.state.wizeQTeamUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    }, FOOTER_MESSAGE)));
  }
}, Footer_default = Footer;

// app/images/ic_email.svg
var ic_email_default = "/build/_assets/ic_email-7QFLTJKH.svg";

// app/images/ic_slack.svg
var ic_slack_default = "/build/_assets/ic_slack-AAKJHCWL.svg";

// app/components/ContactGoto.jsx
init_react();
var import_react88 = __toESM(require("react")), import_prop_types50 = __toESM(require("prop-types"));
function ContactGoto(props) {
  let {
    icon,
    text: text5,
    goto,
    dir
  } = props;
  return /* @__PURE__ */ import_react88.default.createElement(ContactInputGoTo, null, /* @__PURE__ */ import_react88.default.createElement(ContactInputGoToImg, {
    src: icon
  }), /* @__PURE__ */ import_react88.default.createElement(ContactInputGoToP, null, text5), /* @__PURE__ */ import_react88.default.createElement(ContactInputGoToA, {
    href: dir,
    target: "_blank",
    rel: "noopener noreferrer"
  }, goto));
}
ContactGoto.propTypes = {
  icon: import_prop_types50.default.string.isRequired,
  text: import_prop_types50.default.string.isRequired,
  goto: import_prop_types50.default.string.isRequired,
  dir: import_prop_types50.default.string.isRequired
};
var ContactGoto_default = ContactGoto;

// app/routes/contact.jsx
var loader8 = async ({ request }) => (await requireAuth(request), (0, import_node7.json)({})), initialState = {
  reason: "",
  message: "",
  placeholders: {
    message: "Your message"
  },
  isSubmitted: !1
};
function Contact(props) {
  let { full_name: name, email } = useUser_default(), [state, setState] = (0, import_react89.useState)(initialState), resetForm = () => {
    setState(initialState);
  }, handleContactClick = () => {
    resetForm();
  }, renderSuccessMessage = () => /* @__PURE__ */ import_react89.default.createElement(SuccessDiv, null, /* @__PURE__ */ import_react89.default.createElement("p", null, "Thanks for contacting us! We will review your feedback shortly."), /* @__PURE__ */ import_react89.default.createElement("p", null, "Click", " ", /* @__PURE__ */ import_react89.default.createElement("button", {
    type: "button",
    onClick: handleContactClick
  }, " here "), " ", "to contact us again."), /* @__PURE__ */ import_react89.default.createElement("p", null, "Cheers,", /* @__PURE__ */ import_react89.default.createElement("br", null), " ", "The WizeQ team!")), renderOptionsList = () => CONTACT_REASONS_LIST.map((options) => /* @__PURE__ */ import_react89.default.createElement("option", {
    value: options.value,
    key: options.value
  }, options.reason)), onInputChange = (event) => {
    setState((prevState) => __spreadProps(__spreadValues({}, prevState), {
      [event.target.name]: event.target.value
    }));
  }, handleEmailSent = () => {
    setState((prevState) => __spreadProps(__spreadValues({}, prevState), {
      isSubmitted: !0
    }));
  }, createEmailContent = () => {
    let emailObj = {};
    return emailObj.fullName = name, emailObj.email = email, emailObj.reason = CONTACT_REASONS_MAP[state.reason], emailObj.message = state.message, emailObj;
  }, onSubmitWithSuccess = () => {
    let emailBody = createEmailContent();
    props.sendContact(emailBody), handleEmailSent();
  }, inputLengthIsValid = (input, maxLength) => input.length > 0 && input.length <= maxLength, onSubmit = (event) => {
    if (event.preventDefault(), !state.isSubmitted) {
      if (!inputLengthIsValid(name, 50)) {
        props.warningAlert(CONTACT_WARNING);
        return;
      }
      if (!inputLengthIsValid(email, 320)) {
        props.warningAlert(CONTACT_WARNING);
        return;
      }
      if (!inputLengthIsValid(state.reason, 7)) {
        props.warningAlert(CONTACT_WARNING);
        return;
      }
      if (!inputLengthIsValid(state.message, 3e3)) {
        props.warningAlert(CONTACT_WARNING);
        return;
      }
      onSubmitWithSuccess();
    }
  }, renderContactForm = () => {
    let firstName = name ? name.split(" ")[0] : "";
    return /* @__PURE__ */ import_react89.default.createElement(ContactForm, {
      onSubmit
    }, /* @__PURE__ */ import_react89.default.createElement(ContactFormP, null, "Hi\xA0", /* @__PURE__ */ import_react89.default.createElement("strong", null, firstName), "!", /* @__PURE__ */ import_react89.default.createElement("br", null), "Send us a message!"), /* @__PURE__ */ import_react89.default.createElement(ContactSelect, {
      name: "reason",
      onChange: onInputChange
    }, renderOptionsList()), /* @__PURE__ */ import_react89.default.createElement(ContactTextArea, {
      name: "message",
      placeholder: state.placeholders.message,
      onChange: onInputChange
    }), /* @__PURE__ */ import_react89.default.createElement(BtnContainer, null, /* @__PURE__ */ import_react89.default.createElement(SubmitBtn, {
      type: "submit"
    }, "Submit")));
  };
  return /* @__PURE__ */ import_react89.default.createElement(ContactCardDiv, null, /* @__PURE__ */ import_react89.default.createElement(ContactInputHeader, null, /* @__PURE__ */ import_react89.default.createElement(ContactInputHeaderH1, null, "Contact Us"), /* @__PURE__ */ import_react89.default.createElement(ContactInputHeaderH2, null, "We are here for you!"), /* @__PURE__ */ import_react89.default.createElement(ContactInputHeaderP, null, "We\u2019d love to hear from you, please let us know what you think and get in touch with us.", " "), /* @__PURE__ */ import_react89.default.createElement(ContactInputSitesDiv, null, /* @__PURE__ */ import_react89.default.createElement(ContactGoto_default, {
    icon: ic_email_default,
    text: "Email us at",
    goto: "wizeq@wizeline.com",
    dir: "mailto:wizeq@wizeline.com"
  }), /* @__PURE__ */ import_react89.default.createElement(ContactGoto_default, {
    icon: ic_slack_default,
    text: "Slack us at",
    goto: "#wize-q-support",
    dir: "https://wizeline.slack.com/messages/C6M652THT"
  }))), /* @__PURE__ */ import_react89.default.createElement(ContactInputDiv, null, (() => state.isSubmitted ? state.isSubmitted ? renderSuccessMessage() : null : renderContactForm())()), /* @__PURE__ */ import_react89.default.createElement(Footer_default, null));
}
Contact.propTypes = {
  sendContact: import_prop_types51.default.func.isRequired,
  warningAlert: import_prop_types51.default.func.isRequired
};
var contact_default = Contact;

// app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action4,
  loader: () => loader9
});
init_react();
var import_node8 = require("@remix-run/node");
var action4 = async ({ request }) => logout(request), loader9 = async () => (0, import_node8.redirect)("/logout");

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader10
});
init_react();
var import_react90 = __toESM(require("react")), import_node9 = require("@remix-run/node");

// app/styles/About.Styled.jsx
init_react();
var import_styled_components49 = __toESM(require("styled-components")), colorDark50 = "#4E5154", colorSecondary = "#00A7E5", About = import_styled_components49.default.div`
  background-color: #fff;
  color: ${colorDark50};
  line-height: 1.71;
  text-align: center;
`, AboutBody = import_styled_components49.default.div`
  margin: auto;
  max-width: 65%;
  padding: 0 20px;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  h1 {
    color: #a2abaf;
    font-size: 14px;
    letter-spacing: 1.5px;
    margin: auto;
    padding: 72px 0 12px;
    text-transform: uppercase;
  }

  h2 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    padding: 8px 10px;
  }

  h3 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: left;
  }

  p {
    color: ${colorDark50};
    letter-spacing: 0.6px;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: justify;
  }

  span ul {
    list-style: none;

    @media (max-width: 767px) {
      padding-left: 20px;
    }
  }

  span ul li {
    padding-top: 10px;
    width: 60%;

    @media (max-width: 767px) {
      width: 100%;
    }

    &:before {
      display: inline-block;
      content: "\\2022";
      font-size: 30px;
      font-weight: bold;
      left: 6px;
      line-height: 0;
      margin-left: -1em;
      margin-top: 12px;
      position: relative;
      top: 4px;
      width: 1em;
      color: ${colorSecondary};

      @media (max-width: 767px) {
        left: 6px;
      }
    }
  }

  span ul.inside-list li::before {
    content: "\00b0";
    font-weight: unset;
    left: 22px;
    top: 23px;

    @media (max-width: 767px) {
      left: 32px;
    }
  }
`, BoxWrapper = import_styled_components49.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`, BoxContainer = import_styled_components49.default.div`
    padding: 16px;
    
    @media screen and (min-width: 1025px){
      max-width: 50%;
    }

    @media (max-width: 767px) {
      left: 32px;
    }
`, BoxImageContainer = import_styled_components49.default.div`
display: inline-block;
height: 48px;
margin-right: 8px;
`, BoxImage = import_styled_components49.default.img`
  float: left;
  margin: 28px;

  @media (max-width: 767px) {
    margin-top: 0px;
  }
`, BoxBoldText = import_styled_components49.default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;

  @media (max-width: 767px)  {
    margin-top: 0px;
  }
`, BoxMetadata = import_styled_components49.default.div`
  margin: 28px;
  text-align: left;
`, AboutMetadata = import_styled_components49.default.div`
  @media (max-width: 767px)  {
    margin-top: 24px;
  }
`, AboutWhatElseContainer = import_styled_components49.default.div`
  margin-bottom: 28px;
  margin-top: 28px;
`, AboutWhatElseImg = import_styled_components49.default.img`
  float: right;
  margin-left: 100px;
  margin-right: 28px;

  @media (max-width: 767px) {
    float: none;
    margin: auto;
  }
`, AboutWHatElseText = import_styled_components49.default.div`
  margin-top: 44px;
  text-align: left;
  width: 70%;

  @media (max-width: 767px) {
    width: 100%;
  }
`, AboutWHatElseBold = import_styled_components49.default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;
`, AboutWhatElseMetadata = import_styled_components49.default.div`
  margin: 28px;
  text-align: left;
`, AboutFooter = import_styled_components49.default.div`
  padding: 50px 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 50px 0 100px;
  }

  @media (max-width: 767px) {
    padding: 50px 0 100px;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: auto;
    max-width: 800px;
    padding: 0 20px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;

// app/images/ic_meeting.svg
var ic_meeting_default = "/build/_assets/ic_meeting-V5Q4K7AR.svg";

// app/images/ic_saving_fund.svg
var ic_saving_fund_default = "/build/_assets/ic_saving_fund-YK7RIPNT.svg";

// app/images/ic_dialogue.svg
var ic_dialogue_default = "/build/_assets/ic_dialogue-F4DV3F2V.svg";

// app/images/ic_anonymous.svg
var ic_anonymous_default = "/build/_assets/ic_anonymous-HNXSZBQM.svg";

// app/routes/about.jsx
var loader10 = async ({ request }) => (await requireAuth(request), (0, import_node9.json)({}));
function About2() {
  return /* @__PURE__ */ import_react90.default.createElement(About, null, /* @__PURE__ */ import_react90.default.createElement(AboutBody, null, /* @__PURE__ */ import_react90.default.createElement("h1", null, "About Us"), /* @__PURE__ */ import_react90.default.createElement("h2", null, "This is Wizeline Questions"), /* @__PURE__ */ import_react90.default.createElement("p", null, /* @__PURE__ */ import_react90.default.createElement("strong", null, "Wizeline Questions (WizeQ)"), " ", "is a communication space where you can express your ideas, learn more about Wizeline, and ask all kinds of questions."), /* @__PURE__ */ import_react90.default.createElement("p", null, "Wizeline Questions is a knowledge base where you can ask for information to a specific department and allow other Wizeliners to benefit from it. For example:"), /* @__PURE__ */ import_react90.default.createElement(BoxWrapper, null, /* @__PURE__ */ import_react90.default.createElement(BoxContainer, null, /* @__PURE__ */ import_react90.default.createElement(BoxImageContainer, null, /* @__PURE__ */ import_react90.default.createElement(BoxImage, {
    src: ic_meeting_default
  }), /* @__PURE__ */ import_react90.default.createElement(BoxBoldText, null, "Are you still having problems with Zoom for your next meeting?")), /* @__PURE__ */ import_react90.default.createElement(BoxMetadata, null, "Check Wizeline Questions, someone might have already asked IT the same question. If that is not the case, this is your chance to shine!")), /* @__PURE__ */ import_react90.default.createElement(BoxContainer, null, /* @__PURE__ */ import_react90.default.createElement(BoxImageContainer, null, /* @__PURE__ */ import_react90.default.createElement(BoxImage, {
    src: ic_saving_fund_default
  }), /* @__PURE__ */ import_react90.default.createElement(BoxBoldText, null, "Do you want to know more about the savings fund?")), /* @__PURE__ */ import_react90.default.createElement(BoxMetadata, null, "Tag People Ops in your question, other Wizeliners will be glad to learn about that same topic, for sure!"))), /* @__PURE__ */ import_react90.default.createElement(AboutMetadata, null, /* @__PURE__ */ import_react90.default.createElement("p", null, "Information can be easily lost in the flood of comments and pinged posts on Slack. Do you need information to persist?", " ", /* @__PURE__ */ import_react90.default.createElement("strong", null, "Use Wizeline Questions instead!"))), /* @__PURE__ */ import_react90.default.createElement("h3", null, "What else?"), /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseContainer, null, /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseImg, {
    src: ic_dialogue_default
  }), /* @__PURE__ */ import_react90.default.createElement(AboutWHatElseText, null, /* @__PURE__ */ import_react90.default.createElement(AboutWHatElseBold, null, "Start a conversation. Is there a topic you want to discuss with other Wizeliners?"), /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseMetadata, null, "This is the place!. You can reply to a question and also hold interesting conversations with other Wizeliners.  Use it as a discussion forum, suggestion what-else, or simply visit to say hello! Help us to keep Wizeline an amazing place!"))), /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseContainer, null, /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseImg, {
    src: ic_anonymous_default
  }), /* @__PURE__ */ import_react90.default.createElement(AboutWHatElseText, null, /* @__PURE__ */ import_react90.default.createElement(AboutWHatElseBold, null, "Is there a sensitive question you want to ask anonymously?"), /* @__PURE__ */ import_react90.default.createElement(AboutWhatElseMetadata, null, "Ask on Wizeline Questions! To promote ownership and open communication, it displays your user name by default when you post a new question. But you can always opt for anonymity."))), /* @__PURE__ */ import_react90.default.createElement("h3", null, "Things to Keep in Mind When Asking a Question"), /* @__PURE__ */ import_react90.default.createElement("span", null, /* @__PURE__ */ import_react90.default.createElement("p", null, "We value your ideas, questions, suggestions, and comments. Therefore, we encourage you to use this communication space. Please, when writing a new question or a comment follow these recommendations:"), /* @__PURE__ */ import_react90.default.createElement("div", {
    style: { textAlign: "justify" }
  }, /* @__PURE__ */ import_react90.default.createElement("ul", null, /* @__PURE__ */ import_react90.default.createElement("li", null, "Strive for constructive open communication. Avoid vagueness."), /* @__PURE__ */ import_react90.default.createElement("li", null, "Do not demean or degrade others because of their gender, race, age, religion, etc."), /* @__PURE__ */ import_react90.default.createElement("li", null, "Avoid posting questions that include sexually explicit comments, hate speech, prejudicial remarks, and profanity."), /* @__PURE__ */ import_react90.default.createElement("li", null, "Do not mock other members, their comments, profiles, threads, or experiences. Remember, what is funny for you may be offensive to others."))))), /* @__PURE__ */ import_react90.default.createElement(AboutFooter, null, /* @__PURE__ */ import_react90.default.createElement("p", null, /* @__PURE__ */ import_react90.default.createElement("strong", null, "We need your help!"), " ", "Wizeline Questions is an internal project and everyone can contribute. Come aboard and meet the team at", /* @__PURE__ */ import_react90.default.createElement("a", {
    href: "https://wizeline.slack.com/archives/C031D9DP7C2",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "#wize-q-2022"), ". You can take a look at our", /* @__PURE__ */ import_react90.default.createElement("a", {
    href: "https://github.com/wizeline/wize-q-remix"
  }, "source code"), " ", "on GitHub.")));
}
var about_default = About2;

// app/routes/admin.jsx
var admin_exports = {};
__export(admin_exports, {
  CatchBoundary: () => CatchBoundary,
  action: () => action5,
  default: () => admin_default2,
  loader: () => loader11
});
init_react();
var import_react100 = __toESM(require("react")), import_node10 = require("@remix-run/node"), import_react101 = require("@remix-run/react");

// app/styles/Admin.Styled.jsx
init_react();
var import_styled_components50 = __toESM(require("styled-components")), Container4 = import_styled_components50.default.div`
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
var import_react94 = __toESM(require("react")), import_prop_types53 = __toESM(require("prop-types"));

// app/images/logomark_medium.png
var logomark_medium_default = "/build/_assets/logomark_medium-U2FGMSIX.png";

// app/components/AdminUsersTable/AdminUsersTable.jsx
var import_react95 = require("@remix-run/react");

// app/utils/hooks/usePagination.js
init_react();
var import_react91 = require("react"), DOTS = "...", range = (start, end) => {
  let length = end - start;
  return Array.from({ length }, (_, idx) => idx + start);
};
function usePagination({
  currentPage,
  totalPages
}) {
  return (0, import_react91.useMemo)(() => {
    let totalPageCount = totalPages, sibilingCount = 1;
    if (2 + sibilingCount > totalPageCount)
      return range(1, totalPageCount);
    let leftSiblingIndex = Math.max(currentPage - sibilingCount, 1), rigthSiblingIndex = Math.min(currentPage + sibilingCount, totalPageCount), shouldShowLeftDots = leftSiblingIndex > 2, shouldShowRigthDots = rigthSiblingIndex < totalPageCount - 2, firstPageIndex = 1, lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRigthDots) {
      let leftItemCount = 5 * sibilingCount;
      return [...range(1, leftItemCount), DOTS, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRigthDots) {
      let rigthItemsCount = 5 * sibilingCount, rigthRange = range(totalPageCount - rigthItemsCount, totalPageCount + 1);
      return [firstPageIndex, DOTS, ...rigthRange];
    }
    let middleRange = range(leftSiblingIndex, rigthSiblingIndex + 1);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }, [currentPage, totalPages]);
}

// app/components/AdminUsersTable/AdminUsersTable.Styled.jsx
init_react();
var import_styled_components51 = __toESM(require("styled-components")), import_react_bootstrap12 = require("react-bootstrap"), TableContainer = import_styled_components51.default.div`
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
`, UserTable = import_styled_components51.default.table`
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
`, RowTable = import_styled_components51.default.tr`
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
`, HeaderTable = import_styled_components51.default.tr`
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
`, PaginationContainer = import_styled_components51.default.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 1.5rem 0;
  width: 90vw;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`, FilterDropdown = (0, import_styled_components51.default)(import_react_bootstrap12.DropdownButton)`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #524f4e;
  align-items: center;
  :hover {
    background: transparent;
  }
`, TablePagination = (0, import_styled_components51.default)(import_react_bootstrap12.Pagination)`
 background-color: white;  
`, Alert2 = import_styled_components51.default.div`
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
var import_react92 = __toESM(require("react")), import_prop_types52 = __toESM(require("prop-types")), import_react93 = require("@remix-run/react");

// app/components/Modals/EditUserModal/EditUserModal.Styled.jsx
init_react();
var import_styled_components52 = __toESM(require("styled-components")), Wrapper = import_styled_components52.default.div`
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
`, Container5 = import_styled_components52.default.div`
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
`, User = import_styled_components52.default.div`
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
`, UserInfo = import_styled_components52.default.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 576px) {
    text-align: center;
  }
`, Roles = import_styled_components52.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 25px;
`, RolesTable = import_styled_components52.default.div`
  border-radius: 15px;
  border: 1px solid #d8d8d8;
  margin: 10px 0 0;
`, TableRow = import_styled_components52.default.ul`
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
`, ButtonContainer = import_styled_components52.default.div`
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
  let [uAdmin, setUAdmin] = (0, import_react92.useState)(user.is_admin), [uJobTitle, setUJobTitle] = (0, import_react92.useState)(user.job_title);
  return /* @__PURE__ */ import_react92.default.createElement(Wrapper, null, /* @__PURE__ */ import_react92.default.createElement(import_react93.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react92.default.createElement(Container5, null, /* @__PURE__ */ import_react92.default.createElement(User, null, /* @__PURE__ */ import_react92.default.createElement(UserImage_default, {
    src: user.profile_picture,
    size: "extra big"
  }), /* @__PURE__ */ import_react92.default.createElement(UserInfo, null, /* @__PURE__ */ import_react92.default.createElement("h2", null, user.full_name), /* @__PURE__ */ import_react92.default.createElement("span", null, /* @__PURE__ */ import_react92.default.createElement("b", null, user.job_title !== null ? user.job_title : "")), /* @__PURE__ */ import_react92.default.createElement("span", null, user.email))), /* @__PURE__ */ import_react92.default.createElement(Roles, null, /* @__PURE__ */ import_react92.default.createElement("h3", null, "Roles"), /* @__PURE__ */ import_react92.default.createElement("span", null, "Edit roles for this user"), /* @__PURE__ */ import_react92.default.createElement(RolesTable, null, /* @__PURE__ */ import_react92.default.createElement(TableRow, {
    noBorder: !0
  }, /* @__PURE__ */ import_react92.default.createElement("li", null, /* @__PURE__ */ import_react92.default.createElement("b", null, "Name")), /* @__PURE__ */ import_react92.default.createElement("li", null, /* @__PURE__ */ import_react92.default.createElement("b", null, "Action"))), /* @__PURE__ */ import_react92.default.createElement(TableRow, null, /* @__PURE__ */ import_react92.default.createElement("li", null, "Job Title"), /* @__PURE__ */ import_react92.default.createElement("li", null, /* @__PURE__ */ import_react92.default.createElement("input", {
    name: "job_title",
    type: "text",
    value: uJobTitle,
    onChange: (e) => {
      setUJobTitle(e.target.value);
    }
  }))), /* @__PURE__ */ import_react92.default.createElement(TableRow, null, /* @__PURE__ */ import_react92.default.createElement("li", null, "Role Title"), /* @__PURE__ */ import_react92.default.createElement("li", null, "Employee", user.is_admin && ", Admin")), /* @__PURE__ */ import_react92.default.createElement(TableRow, null, /* @__PURE__ */ import_react92.default.createElement("li", null, "Admin"), /* @__PURE__ */ import_react92.default.createElement("li", null, /* @__PURE__ */ import_react92.default.createElement("input", {
    name: "is_admin",
    type: "checkbox",
    checked: uAdmin,
    onChange: (e) => {
      setUAdmin(e.target.checked);
    },
    disabled: user.is_admin
  })))), /* @__PURE__ */ import_react92.default.createElement(ButtonContainer, null, /* @__PURE__ */ import_react92.default.createElement(Button_default, {
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, "Cancel"), /* @__PURE__ */ import_react92.default.createElement(Button_default, {
    category: PRIMARY_BUTTON,
    type: "submit"
  }, "Save")))), /* @__PURE__ */ import_react92.default.createElement("input", {
    type: "hidden",
    name: "employee_id",
    value: user.employee_id
  })));
}
EditUserModal.propTypes = {
  user: import_prop_types52.default.shape({
    employee_id: import_prop_types52.default.number,
    full_name: import_prop_types52.default.string,
    email: import_prop_types52.default.string,
    job_title: import_prop_types52.default.string,
    is_admin: import_prop_types52.default.bool,
    profile_picture: import_prop_types52.default.node,
    departments: import_prop_types52.default.shape([])
  }),
  onClose: import_prop_types52.default.func
};
EditUserModal.defaultProps = {
  user: {
    employee_id: "",
    full_name: "",
    email: "",
    job_title: "",
    is_admin: !1
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
  let [modal, setModal] = (0, import_react94.useState)(!1), [currentUser, setCurrenUser] = (0, import_react94.useState)({}), quantityRef = (0, import_react94.useRef)(0), paginationRange = usePagination({
    currentPage: currentPage === 0 ? 1 : currentPage + 1,
    totalPages
  }), [, setSearchParams] = (0, import_react95.useSearchParams)(), data = (0, import_react95.useActionData)();
  (0, import_react94.useEffect)(() => {
    data && data.successMessage && setModal(!1);
  }, [users, data]);
  let handleModal = (u2) => {
    modal || setCurrenUser(u2), setModal(!modal);
  }, changePage = (page) => {
    setSearchParams({
      size,
      page
    });
  }, nextPageHandler = () => {
    setSearchParams({
      size,
      page: currentPage + 1
    });
  }, prevPageHandler = () => {
    setSearchParams({
      size,
      page: currentPage - 1
    });
  }, createPaginationItem = (i, idx) => /* @__PURE__ */ import_react94.default.createElement(TablePagination.Item, {
    key: idx,
    onClick: () => changePage(i),
    active: i === currentPage
  }, i), paginationItems = (() => [...paginationRange.map((__page, idx) => __page === DOTS ? /* @__PURE__ */ import_react94.default.createElement(TablePagination.Ellipsis, {
    key: idx
  }) : createPaginationItem(__page, idx))])(), renderHeader = () => /* @__PURE__ */ import_react94.default.createElement("thead", null, /* @__PURE__ */ import_react94.default.createElement(HeaderTable, null, /* @__PURE__ */ import_react94.default.createElement("th", null, "Name"), /* @__PURE__ */ import_react94.default.createElement("th", {
    className: "table-desktop-view"
  }, "Email"), /* @__PURE__ */ import_react94.default.createElement("th", {
    className: "table-desktop-view"
  }, "Job Title"), /* @__PURE__ */ import_react94.default.createElement("th", {
    className: "table-desktop-view"
  }, "Roles"), /* @__PURE__ */ import_react94.default.createElement("th", null, "Action"))), setQTY = (value) => {
    setSearchParams({
      size: value,
      page: currentPage
    });
  };
  return !users.length && !isLoading ? /* @__PURE__ */ import_react94.default.createElement(Alert2, null, /* @__PURE__ */ import_react94.default.createElement("span", {
    className: "message"
  }, "There are no results to show")) : /* @__PURE__ */ import_react94.default.createElement("div", null, /* @__PURE__ */ import_react94.default.createElement(TableContainer, null, "Select the number of results", /* @__PURE__ */ import_react94.default.createElement("select", {
    ref: quantityRef,
    onChange: (e) => setQTY(e.target.value),
    defaultValue: size
  }, /* @__PURE__ */ import_react94.default.createElement("option", {
    value: "5"
  }, "5"), /* @__PURE__ */ import_react94.default.createElement("option", {
    value: "10"
  }, "10"), /* @__PURE__ */ import_react94.default.createElement("option", {
    value: "15"
  }, "15"), /* @__PURE__ */ import_react94.default.createElement("option", {
    value: "20"
  }, "20"), /* @__PURE__ */ import_react94.default.createElement("option", {
    value: "25"
  }, "25")), isLoading ? /* @__PURE__ */ import_react94.default.createElement("div", null, /* @__PURE__ */ import_react94.default.createElement(UserTable, null, renderHeader()), /* @__PURE__ */ import_react94.default.createElement(Loader_default, {
    src: logomark_medium_default,
    size: LSPIN_MEDIUM
  })) : /* @__PURE__ */ import_react94.default.createElement(UserTable, null, renderHeader(), /* @__PURE__ */ import_react94.default.createElement("tbody", null, users.map((user) => /* @__PURE__ */ import_react94.default.createElement(RowTable, {
    key: user.employee_id
  }, /* @__PURE__ */ import_react94.default.createElement("td", null, /* @__PURE__ */ import_react94.default.createElement("div", null, /* @__PURE__ */ import_react94.default.createElement("img", {
    src: user.profile_picture,
    alt: ""
  }), user.full_name)), /* @__PURE__ */ import_react94.default.createElement("td", {
    className: "table-desktop-view"
  }, user.email), /* @__PURE__ */ import_react94.default.createElement("td", {
    className: "table-desktop-view"
  }, user.job_title), /* @__PURE__ */ import_react94.default.createElement("td", {
    className: "table-desktop-view"
  }, "Employee", user.is_admin && ", Admin"), /* @__PURE__ */ import_react94.default.createElement("td", null, /* @__PURE__ */ import_react94.default.createElement(Button_default, {
    category: PRIMARY_BUTTON,
    onClick: () => handleModal(user),
    className: "row-btn"
  }, "Edit roles")))))), !isLoading && /* @__PURE__ */ import_react94.default.createElement(PaginationContainer, null, /* @__PURE__ */ import_react94.default.createElement("div", null, "Page", " ", currentPage, " ", "of", " ", totalPages), /* @__PURE__ */ import_react94.default.createElement(TablePagination, {
    boundarylinks: "true"
  }, currentPage > 1 && /* @__PURE__ */ import_react94.default.createElement(TablePagination.Prev, {
    onClick: prevPageHandler
  }), paginationItems, currentPage < totalPages && /* @__PURE__ */ import_react94.default.createElement(TablePagination.Next, {
    onClick: nextPageHandler
  }))), modal ? /* @__PURE__ */ import_react94.default.createElement(EditUserModal_default, {
    user: currentUser,
    onClose: () => handleModal()
  }) : null));
}
AdminUsersTable.propTypes = {
  users: import_prop_types53.default.arrayOf(import_prop_types53.default.shape()),
  currentPage: import_prop_types53.default.number.isRequired,
  totalPages: import_prop_types53.default.number.isRequired,
  isLoading: import_prop_types53.default.bool.isRequired,
  size: import_prop_types53.default.number.isRequired
};
AdminUsersTable.defaultProps = {
  users: []
};
var AdminUsersTable_default = AdminUsersTable;

// app/components/UserSearchBar/index.js
init_react();

// app/components/UserSearchBar/UserSearchBar.jsx
init_react();
var import_prop_types54 = __toESM(require("prop-types")), import_react96 = __toESM(require("react"));

// app/components/UserSearchBar/UserSearchBar.Styled.jsx
init_react();
var import_styled_components53 = __toESM(require("styled-components")), import_md7 = require("react-icons/md"), import_ai3 = require("react-icons/ai"), SearchField2 = import_styled_components53.default.div`
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
`, IconWrapper3 = import_styled_components53.default.div`
  left: 10px;
  top: auto;
  width: 22px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`, Input4 = import_styled_components53.default.input`
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
`, SearchIcon3 = (0, import_styled_components53.default)(import_ai3.AiOutlineSearch)`
  font-size: 30px;
  color: rgba(78, 81, 84, 0.65);
`, ClearIcon2 = (0, import_styled_components53.default)(import_md7.MdClose)`
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
  let [search2, setSearch] = (0, import_react96.useState)("");
  return /* @__PURE__ */ import_react96.default.createElement(SearchField2, null, /* @__PURE__ */ import_react96.default.createElement(IconWrapper3, null, /* @__PURE__ */ import_react96.default.createElement(SearchIcon3, null)), /* @__PURE__ */ import_react96.default.createElement(Input4, {
    type: "search",
    value: search2,
    onChange: (e) => {
      setSearch(e.target.value);
    },
    placeholder: "Search for\u2026",
    onKeyDown: (event) => {
      search2 && event.key === "Enter" && onSearch(search2);
    }
  }), search2 && /* @__PURE__ */ import_react96.default.createElement(Button_default, {
    type: "button",
    className: "clear-button",
    title: "Clear",
    category: ICON_BUTTON,
    onClick: () => {
      setSearch("");
    }
  }, /* @__PURE__ */ import_react96.default.createElement(ClearIcon2, null)));
}
UserSearchBar.propTypes = {
  onSearch: import_prop_types54.default.func.isRequired
};

// app/components/Atoms/UploadButton/index.js
init_react();

// app/components/Atoms/UploadButton/UploadButton.jsx
init_react();
var import_react97 = __toESM(require("react"));

// app/components/Atoms/UploadButton/UploadButton.Styled.jsx
init_react();
var import_styled_components54 = __toESM(require("styled-components")), import_fi = require("react-icons/fi"), Container6 = import_styled_components54.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15px;
`, UploadButtonWrapper = import_styled_components54.default.div`
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid #d3d3d4;
  text-align: center;
  width: 30vw;
  min-height: 115px;
  margin: 5vh auto;
`, UploadButtonLabel = import_styled_components54.default.div`
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 15px;
`, UploadButtonContainer = import_styled_components54.default.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #213246;
  color: #fff;
  border: 1px solid #213246;
  border-radius: 4px;
  width: 20vw;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 auto;

  &:hover {
    background-color: #fff;
    color: #213246;
  }
`, UploadButtonIcon = (0, import_styled_components54.default)(import_fi.FiUpload)`
  margin-right: 8px;
`, UploadButtonText = import_styled_components54.default.div`
  font-size: 14px;
`, FileList = import_styled_components54.default.ul`
  list-style-type: none;
  margin-top: 10px;
  padding: 0;
`, FileCount = import_styled_components54.default.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
`, FileName = import_styled_components54.default.li`
  font-size: 12px;
  background-color: #f4f7f9;
  width: 20vw;
  margin: 0 auto;
  margin-bottom: 1em;
  padding: 1.1em 1em;
  border-radius: 0.3em;
`, SendButton2 = import_styled_components54.default.button`
  display: ${({ visible }) => visible ? "block" : "none"};
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #213246;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #213246;
  border-radius: 4px;
  width: 20vw;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 40px;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #fff;
    color: #213246;
  }
`;

// app/components/Atoms/UploadButton/UploadButton.jsx
function UploadButton() {
  let fileInputRef = (0, import_react97.useRef)(null), [selectedFiles, setSelectedFiles] = (0, import_react97.useState)([]), handleFileUpload = (event) => {
    let { files } = event.target;
    setSelectedFiles(Array.from(files));
  }, handleClick = () => {
    fileInputRef.current.click();
  }, handleSendClick = () => {
    setSelectedFiles([]);
  };
  return /* @__PURE__ */ import_react97.default.createElement(Container6, null, /* @__PURE__ */ import_react97.default.createElement(UploadButtonWrapper, null, /* @__PURE__ */ import_react97.default.createElement(UploadButtonLabel, null, "Files to be processed by the AnswerBot"), /* @__PURE__ */ import_react97.default.createElement(UploadButtonContainer, {
    onClick: handleClick
  }, /* @__PURE__ */ import_react97.default.createElement(UploadButtonIcon, {
    size: 20
  }), /* @__PURE__ */ import_react97.default.createElement(UploadButtonText, null, " Choose Files To Upload ")), /* @__PURE__ */ import_react97.default.createElement("input", {
    style: { display: "none" },
    type: "file",
    ref: fileInputRef,
    onChange: handleFileUpload,
    accept: ".pdf,.doc,.docx",
    multiple: !0
  }), selectedFiles.length > 0 && /* @__PURE__ */ import_react97.default.createElement(import_react97.default.Fragment, null, /* @__PURE__ */ import_react97.default.createElement(FileList, null, /* @__PURE__ */ import_react97.default.createElement("li", null, /* @__PURE__ */ import_react97.default.createElement(FileCount, null, selectedFiles.length, "\xA0File(s) Selected")), selectedFiles.map((file) => /* @__PURE__ */ import_react97.default.createElement(FileName, {
    key: file.id
  }, file.name))), /* @__PURE__ */ import_react97.default.createElement(SendButton2, {
    visible: selectedFiles.length > 0,
    onClick: handleSendClick
  }, "Save File(s)"))));
}
var UploadButton_default = UploadButton;

// app/controllers/users/list.js
init_react();
var getPagination = (page, size) => {
  let limit = size || 20, offset = page ? (page - 1) * limit : 0;
  return { limit, offset };
}, listUsers = async (query) => {
  let { page, search: search2, size } = query, { limit, offset } = getPagination(Number(page), Number(size)), where = search2 === void 0 ? void 0 : {
    OR: [
      {
        full_name: { contains: search2 }
      },
      {
        email: { contains: search2 }
      }
    ]
  }, count = await db.users.count({
    where
  }), totalPages = Math.floor(count / limit) + 1, users = await db.users.findMany({
    where,
    take: limit,
    skip: offset / limit > totalPages ? 0 : offset
  });
  return {
    totalPages,
    users
  };
}, list_default7 = listUsers;

// app/controllers/users/update.js
init_react();
var import_constants80 = __toESM(require_constants());

// app/utils/backend/validators/admin.js
init_react();
var import_joi9 = __toESM(require("joi")), import_joiConstants7 = __toESM(require_joiConstants()), updateUserSchema = import_joi9.default.object({
  employee_id: import_joiConstants7.JOI_ID_VALIDATION,
  job_title: import_joi9.default.string().max(255).allow(""),
  is_admin: import_joi9.default.boolean()
}), admin_default = updateUserSchema;

// app/controllers/users/update.js
var updateUser = async (query) => {
  let { error, value } = admin_default.validate(query), { employee_id, is_admin, job_title } = value;
  if (error)
    return {
      errors: [
        {
          message: import_constants80.DEFAULT_ERROR_MESSAGE,
          detail: error.details
        }
      ]
    };
  let updatedUser = await db.users.update({
    where: {
      employee_id
    },
    data: {
      is_admin,
      job_title
    }
  });
  return {
    successMessage: "The user has been updated succesfully.",
    updatedUser
  };
}, update_default3 = updateUser;

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => __default2
});
init_react();
var import_react99 = __toESM(require("react"));

// app/images/404.svg
var __default = "/build/_assets/404-HJIPXGIH.svg";

// app/styles/NotFound.Styled.jsx
init_react();
var import_styled_components55 = __toESM(require("styled-components")), import_react98 = require("@remix-run/react");

// app/images/header-background-dots-pattern.svg
var header_background_dots_pattern_default = "/build/_assets/header-background-dots-pattern-4BTNNPHR.svg";

// app/styles/NotFound.Styled.jsx
var BackgroundDiv = import_styled_components55.default.div`
    background-image: url(${header_background_dots_pattern_default});
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
`, MainDiv = import_styled_components55.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60rem;
    margin-top: 3.5rem;
    width: 100%;
`, Container7 = import_styled_components55.default.div`
    align-items: center;
    margin: 0 auto;
    width: 70.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 704px;
    }

    @media (max-width: 767px) {
        width: 288px;
    }
`, Img = import_styled_components55.default.img`
    display: block;
    height: 12.5rem;
    margin-bottom: 5rem;
    max-width: 100%
`, Title2 = import_styled_components55.default.h2`
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    margin: 0 0 5rem 0;
`, SLink = (0, import_styled_components55.default)(import_react98.Link)`
    color: #fff;
    background-color: var(--color-secondary);
    border-radius: 5px;
    font-size: 1.6rem;
    padding: 1.5rem 4.1rem;
    text-decoration: none;

    &:hover {
        color: #fff;
        background-color: var(--color-secondary-hover);
        cursor: pointer;
        text-decoration: none;
    }

    &:active {
        background-color: var(--color-secondary-active);
    }
`;

// app/routes/$.jsx
function NotFound() {
  return /* @__PURE__ */ import_react99.default.createElement("div", null, /* @__PURE__ */ import_react99.default.createElement(BackgroundDiv, null), /* @__PURE__ */ import_react99.default.createElement(MainDiv, null, /* @__PURE__ */ import_react99.default.createElement(Container7, null, /* @__PURE__ */ import_react99.default.createElement(Img, {
    src: __default,
    alt: "404"
  }), /* @__PURE__ */ import_react99.default.createElement(Title2, null, "Sorry! The page you were looking for doesn\u2019t exist."), /* @__PURE__ */ import_react99.default.createElement(SLink, {
    to: "/"
  }, "Go back"))));
}
var __default2 = NotFound;

// app/routes/admin.jsx
var loader11 = async ({ request }) => {
  await requireAdminAuth(request);
  let url = new URL(request.url), currentPage = url.searchParams.get("page") ?? 1, size = url.searchParams.get("size") ?? 10, search2 = url.searchParams.get("search") ?? void 0, data = await list_default7({
    page: currentPage,
    search: search2,
    size
  });
  return __spreadProps(__spreadValues({}, data), {
    currentPage: Number(currentPage),
    size
  });
}, action5 = async ({ request }) => {
  let formData = await request.formData(), payload = {
    is_admin: formData.has("is_admin") ? formData.get("is_admin") === "on" : void 0,
    job_title: formData.get("job_title"),
    employee_id: formData.get("employee_id")
  }, result = await update_default3(payload);
  return (0, import_node10.json)(result);
};
function Admin() {
  let {
    users,
    totalPages,
    currentPage,
    size
  } = (0, import_react101.useLoaderData)(), [, setSearchParams] = (0, import_react101.useSearchParams)();
  return /* @__PURE__ */ import_react100.default.createElement("div", null, /* @__PURE__ */ import_react100.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react100.default.createElement(Container4, null, /* @__PURE__ */ import_react100.default.createElement("h2", null, "Admin page"), /* @__PURE__ */ import_react100.default.createElement(UserSearchBar, {
    onSearch: (search2) => {
      setSearchParams({
        search: search2
      });
    }
  })), /* @__PURE__ */ import_react100.default.createElement(AdminUsersTable_default, {
    users,
    currentPage,
    totalPages,
    size
  }), /* @__PURE__ */ import_react100.default.createElement(UploadButton_default, null));
}
function CatchBoundary() {
  return /* @__PURE__ */ import_react100.default.createElement(__default2, null);
}
var admin_default2 = Admin;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action6,
  default: () => Index,
  loader: () => loader12
});
init_react();
var import_node11 = require("@remix-run/node"), import_react113 = require("@remix-run/react"), import_react114 = __toESM(require("react"));

// app/styles/Home.Styled.jsx
init_react();
var import_styled_components56 = __toESM(require("styled-components")), Container8 = import_styled_components56.default.div`
background-color: #f4f7f9;
`;

// app/components/ListQuestions/index.js
init_react();

// app/components/ListQuestions/ListQuestions.jsx
init_react();
var import_react111 = __toESM(require("react")), import_react112 = require("@remix-run/react"), import_prop_types60 = __toESM(require("prop-types"));

// app/components/ListQuestions/ListQuestions.Styled.jsx
init_react();
var import_react102 = require("@remix-run/react"), import_styled_components57 = __toESM(require("styled-components")), Container9 = import_styled_components57.default.div`
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
`, LeftWrapper = import_styled_components57.default.div`
  flex: 1;
`, CenterWrapper = import_styled_components57.default.div`
  flex: 2;
  display: flex;
  justify-content: center;
`, RightWrapper2 = import_styled_components57.default.div`
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
`, SloganWrapper = import_styled_components57.default.div`
  max-width: 425px;
  
  @media (max-width: 1025px) {
    display: none;
  }
`, QuestionsWrapper = import_styled_components57.default.div`
  max-width: 650px;
  width: 100%;
`, AskQuestionButtonWrapper = import_styled_components57.default.div`
  padding-right: 10px;
  padding-left: 10px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`, QuestionsTitle = import_styled_components57.default.div`
  align-items: center;
  display: flex;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  letter-spacing: 0.6px;
`, QuestionList = import_styled_components57.default.div`
  margin: 5px 0 10px;
  padding-left: 0;
`, Alert3 = import_styled_components57.default.div`
  border-radius: 3px;
  margin: 0 auto;
  max-width: 592px;
  width: 94%;
  padding: 15px 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
`, FiltersWrapper = import_styled_components57.default.div`
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
`, AskButton = (0, import_styled_components57.default)(import_react102.Link)`
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
var import_react103 = __toESM(require("react")), import_prop_types55 = __toESM(require("prop-types")), import_react_router_dom3 = require("react-router-dom");

// app/images/ic_comment_non-selected.svg
var ic_comment_non_selected_default = "/build/_assets/ic_comment_non-selected-7NOYX3FA.svg";

// app/components/QuestionCard/QuestionCard.jsx
function QuestionCard(props) {
  let {
    question,
    currentUserEmail,
    question: { Answers },
    onVoteClick,
    searchTerm,
    processingFormSubmission
  } = props, renderAnswerProps = {
    Answers,
    isAdmin: !1,
    currentUserEmail,
    onAnswerClick: () => {
    },
    openDeleteAnswerModal: () => {
    },
    question,
    searchTerm,
    isPreview: !0,
    isFromList: !0,
    questionId: question.question_id,
    isAnswer: !0
  }, hasAnswer = question.Answers.length > 0, navigate = (0, import_react_router_dom3.useNavigate)(), renderButtons = () => {
    let icon = question.hasLike ? ic_like_pressed_default : ic_like_default, dislikeicon = question.hasDislike ? ic_dislike_pressed_default : ic_dislike_default;
    return /* @__PURE__ */ import_react103.default.createElement(CounterButtonsWrapper, {
      isAdmin: !1,
      hasAnswer
    }, /* @__PURE__ */ import_react103.default.createElement(CounterButton_default, {
      id: `like-button-${question.question_id}`,
      selected: question.hasLike,
      icon,
      count: question.numLikes,
      onClick: () => onVoteClick(!0),
      processingFormSubmission,
      isDisabled: question.hasDislike
    }), /* @__PURE__ */ import_react103.default.createElement(CounterButton_default, {
      id: `like-button-${question.question_id}`,
      selected: question.hasDislike,
      icon: dislikeicon,
      count: question.numDisklike,
      onClick: () => onVoteClick(!1),
      processingFormSubmission,
      isDisabled: question.hasLike
    }), /* @__PURE__ */ import_react103.default.createElement(CounterButton_default, {
      id: `comments-button-${question.question_id}`,
      icon: ic_comment_non_selected_default,
      count: question.numComments,
      onClick: () => navigate(`/questions/${question.question_id}`)
    }));
  }, renderCommentAnswer = () => {
    if (!question.hasCommentApproved && !question.hasCommunityAnswer || question.Answers.length > 0)
      return null;
    let commentAsAnswer = {};
    if (question.hasCommentApproved)
      commentAsAnswer = question.Comments.find((comment) => comment.approvedBy !== null);
    else if (question.hasCommunityAnswer) {
      let [communityAnswerCommentId] = commentUtils_default(question.Comments);
      commentAsAnswer = question.Comments.find((comment) => comment.id === communityAnswerCommentId);
    }
    if (commentAsAnswer)
      return /* @__PURE__ */ import_react103.default.createElement(AnswerRow_default, {
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
  };
  return /* @__PURE__ */ import_react103.default.createElement(QuestionCardContainer, null, /* @__PURE__ */ import_react103.default.createElement(QuestionCardWrapper, null, /* @__PURE__ */ import_react103.default.createElement(QuestionCardBorder, null, /* @__PURE__ */ import_react103.default.createElement(QuestionRow_default, {
    question,
    isQuestionModalOpen: !1,
    hasAnswer
  }), /* @__PURE__ */ import_react103.default.createElement(QuestionCardActions, {
    hasAnswer,
    isQuestionModalOpen: !1
  }, renderButtons()))), renderAnswer(renderAnswerProps), renderCommentAnswer());
}
QuestionCard.propTypes = {
  question: import_prop_types55.default.shape({
    question_id: import_prop_types55.default.number.isRequired,
    question: import_prop_types55.default.string.isRequired,
    user_hash: import_prop_types55.default.string,
    can_edit: import_prop_types55.default.bool,
    created_by_user: import_prop_types55.default.shape({
      email: import_prop_types55.default.string,
      employee_id: import_prop_types55.default.number,
      full_name: import_prop_types55.default.string,
      is_admin: import_prop_types55.default.bool,
      job_title: import_prop_types55.default.string,
      profile_picture: import_prop_types55.default.string
    }),
    Answers: import_prop_types55.default.arrayOf(import_prop_types55.default.shape()),
    createdAt: import_prop_types55.default.string.isRequired,
    location: import_prop_types55.default.string.isRequired,
    numComments: import_prop_types55.default.number.isRequired,
    hasVoted: import_prop_types55.default.bool.isRequired,
    hasCommentApproved: import_prop_types55.default.bool.isRequired,
    hasCommunityAnswer: import_prop_types55.default.bool.isRequired,
    Comments: import_prop_types55.default.arrayOf(import_prop_types55.default.shape()),
    numLikes: import_prop_types55.default.number.isRequired,
    numDisklike: import_prop_types55.default.number.isRequired,
    hasLike: import_prop_types55.default.bool.isRequired,
    hasDislike: import_prop_types55.default.bool.isRequired
  }).isRequired,
  onVoteClick: import_prop_types55.default.func.isRequired,
  currentUserEmail: import_prop_types55.default.string,
  searchTerm: import_prop_types55.default.string,
  processingFormSubmission: import_prop_types55.default.bool
};
QuestionCard.defaultProps = {
  currentUserEmail: "",
  searchTerm: "",
  processingFormSubmission: !1
};
var QuestionCard_default = QuestionCard;

// app/components/GoToTopButton/index.js
init_react();

// app/components/GoToTopButton/GoToTopButton.jsx
init_react();
var import_react105 = __toESM(require("react"));

// app/components/GoToTopButton/GoToTopButton.Styled.jsx
init_react();
var import_styled_components58 = __toESM(require("styled-components")), Button3 = import_styled_components58.default.button`
  all: unset;
  align-items: center;
  background-color: var(--color-secondary);
  border-radius: 4px 0 0 4px;
  bottom: 45px;
  box-shadow: 0 2px 4px 0 #c7c6c6;
  display: flex;
  height: 40px;
  justify-content: center;
  opacity: ${(props) => props.display === !0 ? 0.9 : 0};
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
`, Span = import_styled_components58.default.span`
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
var import_react104 = __toESM(require("react"));
function ArrowIcon(props) {
  return /* @__PURE__ */ import_react104.default.createElement("svg", __spreadValues({
    color: "white",
    fill: "currentColor",
    fillRule: "nonzero",
    height: 12,
    stroke: "currentColor",
    strokeWidth: 1,
    version: "1.1",
    viewBox: "0 0 23 27",
    width: 10,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ import_react104.default.createElement("path", {
    transform: "translate(-18.000000, -17.000000)",
    d: "M30.6301904,20.6966946 C30.6304384,20.705609 30.6305632,20.7145536 30.6305632,20.7235269 L30.6305632,41.9301705 C30.6305632,42.462539 30.1912987,42.8941089 29.6494386,42.8941089 C29.1075784,42.8941089 28.6683139,42.462539 28.6683139,41.9301705 L28.6683139,20.7235269 C28.6683139,20.6823753 28.6709386,20.6418259 28.6760325,20.6020316 L20.2797113,28.5838228 C19.9872058,28.8618871 19.5118845,28.8618871 19.2193791,28.5838228 C18.9268736,28.3057585 18.9268736,27.853904 19.2193791,27.5758396 L29.0731557,18.2085482 C29.3656611,17.9304839 29.8409825,17.9304839 30.1334879,18.2085482 L39.9872645,27.5758396 C40.1335172,27.7148718 40.2066436,27.888662 40.2066436,28.0798312 C40.2066436,28.2710004 40.1335172,28.4447906 39.9872645,28.5838228 C39.6947591,28.8618871 39.2194378,28.8618871 38.9269323,28.5838228 L30.6301904,20.6966946 Z M29.6444293,19.7596009 L29.6033218,19.7205229 L29.5578693,19.7637314 C29.5863864,19.7611383 29.6152573,19.7597442 29.6444293,19.7596009 Z"
  }));
}
var ArrowIcon_default = ArrowIcon;

// app/components/GoToTopButton/GoToTopButton.jsx
function GoToTopButton() {
  let [show, setShow] = (0, import_react105.useState)(!1);
  return (0, import_react105.useEffect)(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShow(!0) : setShow(!1);
    });
  }, []), /* @__PURE__ */ import_react105.default.createElement(Button3, {
    id: "go-to-top-button",
    display: show,
    onClick: () => {
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
    }
  }, /* @__PURE__ */ import_react105.default.createElement(ArrowIcon_default, null), /* @__PURE__ */ import_react105.default.createElement(Span, null, BACK_TO_TOP));
}
var GoToTopButton_default = GoToTopButton;

// app/components/Atoms/InfiniteScrollList/index.js
init_react();

// app/components/Atoms/InfiniteScrollList/InfiniteScrollList.jsx
init_react();
var import_react106 = __toESM(require("react")), import_prop_types56 = __toESM(require("prop-types"));
function InfiniteScrollList({ onFetch, children }) {
  let endOfListRef = (0, import_react106.useRef)(), scrollContainer = null, fetchScrollLimit = 500, onScroll = ([entity]) => {
    entity.isIntersecting && onFetch();
  }, observer = (0, import_react106.useRef)();
  return (0, import_react106.useEffect)(() => (observer.current = new IntersectionObserver(onScroll, {
    root: scrollContainer,
    rootMargin: `${fetchScrollLimit}px`,
    threshold: 0
  }), endOfListRef && endOfListRef.current && observer.current.observe(endOfListRef.current), () => {
    endOfListRef && endOfListRef.current && observer.current.unobserve(endOfListRef.current);
  }), [children.props.children.length]), /* @__PURE__ */ import_react106.default.createElement("div", null, children, /* @__PURE__ */ import_react106.default.createElement("div", {
    ref: endOfListRef
  }));
}
InfiniteScrollList.propTypes = {
  onFetch: import_prop_types56.default.func.isRequired,
  children: import_prop_types56.default.node
};
InfiniteScrollList.defaultProps = {
  children: null
};
var InfiniteScrollList_default = InfiniteScrollList;

// app/components/Filters/index.js
init_react();

// app/components/Filters/Filters.jsx
init_react();
var import_react108 = __toESM(require("react")), import_prop_types58 = __toESM(require("prop-types")), import_react109 = require("@remix-run/react");

// app/images/ic_filter.svg
var ic_filter_default = "/build/_assets/ic_filter-UC4LYVWR.svg";

// app/components/Filters/Filters.Styled.jsx
init_react();
var import_styled_components59 = __toESM(require("styled-components")), Filters = import_styled_components59.default.div`
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
`, Icon = import_styled_components59.default.img`
  height: 20px;
  margin-right: 10px;
  width: 17px;
`, FiltersLine = import_styled_components59.default.hr`
  border-top: 1px solid #e6e6e6;
  margin: 16px 0 24px;
  display: ${(props) => props.visibility};
  ${(props) => props.secondary && import_styled_components59.css`
    margin: 0;
  `}
  
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 767px){
   display: block;
  }
`, FiltersWrapper2 = import_styled_components59.default.div`
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
`, FiltersContainer = import_styled_components59.default.div`
  display: unset;
`, FiltersBlock = import_styled_components59.default.div``, FiltersLabel = import_styled_components59.default.div`
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
`, FiltersField = import_styled_components59.default.div`
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
  ${(props) => props.departments && import_styled_components59.css`
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
var import_react107 = __toESM(require("react")), import_prop_types57 = __toESM(require("prop-types"));

// app/components/CustomDropdown/CustomDropdown.Styled.jsx
init_react();
var import_styled_components60 = __toESM(require("styled-components")), import_react_bootstrap13 = require("react-bootstrap"), CDropdown = (0, import_styled_components60.default)(import_react_bootstrap13.Dropdown)`
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
`, CDropdownText = import_styled_components60.default.p`
  color: var(--color-secondary);
  float: left;
  font-size: 12px;
  padding-left: 5px;
  .first {
    font-size: 14px;
    font-weight: unset;
  }
`, CMenuItem = (0, import_styled_components60.default)(import_react_bootstrap13.MenuItem)`
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
  let { accessValueName, selectedValue } = props, renderElements = (elements) => elements.map((element) => /* @__PURE__ */ import_react107.default.createElement(CMenuItem, {
    eventKey: element,
    key: element[accessValueName]
  }, /* @__PURE__ */ import_react107.default.createElement("label", {
    className: "custom-dropdown",
    htmlFor: element[accessValueName]
  }, element.name, /* @__PURE__ */ import_react107.default.createElement("input", {
    type: "radio",
    className: "custom-dropdown--radio",
    checked: selectedValue === element[accessValueName],
    readOnly: !0,
    id: element[accessValueName]
  }), /* @__PURE__ */ import_react107.default.createElement("span", {
    className: "custom-dropdown--span"
  })))), renderSelected = () => props.showSelected && /* @__PURE__ */ import_react107.default.createElement("p", {
    className: "custom-dropdown-selected"
  }, props.text);
  return /* @__PURE__ */ import_react107.default.createElement(CDropdown, {
    className: props.dropdownClass,
    onSelect: props.onSelectFunc,
    id: props.dropdownClass,
    disabled: props.disabled
  }, /* @__PURE__ */ import_react107.default.createElement(CDropdown.Toggle, {
    onClick: props.onClickFunc,
    className: `toggle ${props.isHighlighted ? "highlighted" : ""}`
  }, /* @__PURE__ */ import_react107.default.createElement("p", {
    className: `dropdown-text ${props.showSelected ? "" : "first"}`
  }, props.label), renderSelected()), /* @__PURE__ */ import_react107.default.createElement(CDropdown.Menu, {
    className: props.menuClass
  }, props.elements.length > 0 && renderElements(props.elements)));
}
CustomDropdown.propTypes = {
  elements: import_prop_types57.default.arrayOf().isRequired,
  text: import_prop_types57.default.string,
  label: import_prop_types57.default.string.isRequired,
  dropdownClass: import_prop_types57.default.string,
  menuClass: import_prop_types57.default.string,
  onClickFunc: import_prop_types57.default.func,
  onSelectFunc: import_prop_types57.default.func,
  selectedValue: import_prop_types57.default.oneOfType([
    import_prop_types57.default.number,
    import_prop_types57.default.string
  ]),
  isHighlighted: import_prop_types57.default.bool,
  showSelected: import_prop_types57.default.bool,
  accessValueName: import_prop_types57.default.string.isRequired,
  disabled: import_prop_types57.default.bool
};
CustomDropdown.defaultProps = {
  text: "",
  dropdownClass: "sort-toggle",
  menuClass: "menu-dropdown",
  onClickFunc: null,
  onSelectFunc: null,
  selectedValue: null,
  isHighlighted: !1,
  showSelected: !0,
  disabled: !1
};
var CustomDropdown_default = CustomDropdown;

// app/components/Filters/Filters.jsx
function Filters2(props) {
  let { modifyQuery, clearFilters } = props, { departments, locations } = (0, import_react109.useLoaderData)(), [searchParams] = (0, import_react109.useSearchParams)(), getDefaultStatus = () => {
    let searchParam = searchParams.get("status");
    if (searchParam) {
      let found = STATUS_OPTIONS.find((status) => status.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_STATUS_OPT;
  }, getDefaultSortOption = () => {
    let searchParam = searchParams.get("order");
    if (searchParam) {
      let found = SORTING_OPTIONS.find((order2) => order2.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_SORTING_OPT;
  }, getDefaultDateRangeOption = () => {
    let searchParam = searchParams.get("dateRange");
    if (searchParam) {
      let found = DATE_RANGE_OPTIONS.find((date) => date.value === searchParam);
      if (found)
        return found;
    }
    return DEFAULT_DATE_RANGE_OPT;
  }, getDefaultDepartmentOption = () => {
    let searchParam = parseInt(searchParams.get("department"), 10);
    if (searchParam !== void 0) {
      let found = DEPARTMENT_OPTIONS.find((option) => option.department_id === searchParam);
      if (found)
        return found;
      let foundInData = departments.find((department) => department.department_id === searchParam);
      if (foundInData)
        return foundInData;
    }
    return DEFAULT_DATE_RANGE_OPT;
  }, getDefaultLocationOption = () => {
    let searchParam = searchParams.get("location");
    if (searchParam) {
      let foundInData = locations.find((location) => location.code === searchParam);
      if (foundInData)
        return foundInData;
    }
    return DEFAULT_LOCATION_OPT;
  }, [selectedOrderBy, setSelectedOrderBy] = (0, import_react108.useState)(getDefaultSortOption()), [selectedDateRange, setSelectedDateRange] = (0, import_react108.useState)(getDefaultDateRangeOption()), [selectedStatus, setSelectedStatus] = (0, import_react108.useState)(getDefaultStatus()), [selectedDepartment, setSelectedDepartment] = (0, import_react108.useState)(getDefaultDepartmentOption()), [selectedLocation, setSelectedLocation] = (0, import_react108.useState)(getDefaultLocationOption()), [showClearButton, setShowClearButton] = (0, import_react108.useState)(!1), [showFilters, setShowFilters] = (0, import_react108.useState)(!1), [filtersButtonName, setFiltersButtonName] = (0, import_react108.useState)("Show filters");
  (0, import_react108.useEffect)(() => {
    selectedLocation != null && (selectedDateRange.name === DEFAULT_DATE_RANGE_OPT.name && selectedDepartment.name === DEFAULT_DEPARTMENT_OPT.name && selectedStatus.name === DEFAULT_STATUS_OPT.name && selectedLocation.code === DEFAULT_LOCATION ? setShowClearButton(!1) : setShowClearButton(!0));
  }, [selectedDateRange, selectedStatus, selectedDepartment, selectedLocation]);
  let selectOrderByFilter = (selectOrderBy) => {
    setSelectedOrderBy(selectOrderBy), modifyQuery("order", selectOrderBy.value);
  }, selectDateRangeFilter = (selectDateRange) => {
    setSelectedDateRange(selectDateRange), selectDateRange.value === "all" ? modifyQuery("dateRange", void 0) : modifyQuery("dateRange", selectDateRange.value);
  }, selectStatusFilter = (selectStatus) => {
    setSelectedStatus(selectStatus), selectStatus.value === "all" ? modifyQuery("status", void 0) : modifyQuery("status", selectStatus.value);
  }, selectDepartmentFilter = (selectDepartment) => {
    setSelectedDepartment(selectDepartment), selectDepartment.department_id === -1 ? modifyQuery("department", void 0) : modifyQuery("department", selectDepartment.department_id);
  }, selectLocationFilter = (selectLocation) => {
    setSelectedLocation(selectLocation), modifyQuery("location", selectLocation.code);
  }, clearAllFilters = () => {
    selectDateRangeFilter(DEFAULT_DATE_RANGE_OPT, !1), selectStatusFilter(DEFAULT_STATUS_OPT, !1), selectDepartmentFilter(DEFAULT_DEPARTMENT_OPT, !1), selectLocationFilter(DEFAULT_LOCATION_OPT, !1), clearFilters([
      "location",
      "department",
      "status",
      "dateRange",
      "location"
    ]);
  }, selectFilters = () => {
    showFilters ? (setFiltersButtonName("Show filters"), setShowFilters(!1)) : (setFiltersButtonName("Hide filters"), setShowFilters(!0));
  }, getLocationFilterConfig = () => {
    let selectedLocationsProps = {};
    return selectedLocation && (selectedLocationsProps = {
      text: selectedLocation.name,
      selectedValue: selectedLocation.code,
      isHihlighted: selectedLocation.code !== DEFAULT_LOCATION
    }), __spreadProps(__spreadValues({}, selectedLocationsProps), {
      elements: locations,
      label: LOCATION_LABEL,
      onSelectFunc: selectLocationFilter,
      accessValueName: LOCATION_ACCESS_VALUE,
      disabled: selectedLocation === void 0
    });
  }, orderByDropdownConfig = {
    elements: SORTING_OPTIONS,
    label: selectedOrderBy.name,
    onSelectFunc: selectOrderByFilter,
    selectedValue: selectedOrderBy.value,
    showSelected: !1,
    accessValueName: SORTING_ACCESS_VALUE
  }, dateRangeFilterConfig = {
    elements: DATE_RANGE_OPTIONS,
    text: selectedDateRange.name,
    label: DATE_RANGE_LABEL,
    onSelectFunc: selectDateRangeFilter,
    selectedValue: selectedDateRange.value,
    isHihlighted: selectedDateRange !== DEFAULT_DATE_RANGE_OPT,
    accessValueName: DATE_RANGE_ACCESS_VALUE
  }, departmentFilterConfig = {
    elements: [...DEPARTMENT_OPTIONS, ...departments],
    text: selectedDepartment.name,
    label: DEPARTMENT_LABEL,
    onSelectFunc: selectDepartmentFilter,
    selectedValue: selectedDepartment.department_id,
    isHihlighted: selectedDepartment !== DEFAULT_DEPARTMENT_OPT,
    accessValueName: DEPARTMENT_ACCESS_VALUE
  }, statusFilterConfig = {
    elements: STATUS_OPTIONS,
    text: selectedStatus.name,
    label: STATUS_LABEL,
    onSelectFunc: selectStatusFilter,
    selectedValue: selectedStatus.value,
    isHihlighted: selectedStatus !== DEFAULT_STATUS_OPT,
    accessValueName: STATUS_ACCESS_VALUE
  };
  return /* @__PURE__ */ import_react108.default.createElement(Filters, null, /* @__PURE__ */ import_react108.default.createElement(Button_default, {
    type: "button",
    category: TEXT_BUTTON,
    className: "show-filters-button",
    onClick: selectFilters
  }, /* @__PURE__ */ import_react108.default.createElement(Icon, {
    src: ic_filter_default,
    alt: "Icon"
  }), /* @__PURE__ */ import_react108.default.createElement("span", null, filtersButtonName)), /* @__PURE__ */ import_react108.default.createElement(FiltersLine, {
    secondary: !0,
    visibility: "none"
  }), /* @__PURE__ */ import_react108.default.createElement(FiltersWrapper2, {
    hideComponent: showFilters ? "block" : "none"
  }, /* @__PURE__ */ import_react108.default.createElement(FiltersContainer, null, /* @__PURE__ */ import_react108.default.createElement(FiltersBlock, null, /* @__PURE__ */ import_react108.default.createElement(FiltersLabel, null, "Order by:"), /* @__PURE__ */ import_react108.default.createElement(FiltersField, null, /* @__PURE__ */ import_react108.default.createElement(CustomDropdown_default, __spreadValues({}, orderByDropdownConfig)))), /* @__PURE__ */ import_react108.default.createElement(FiltersBlock, null, /* @__PURE__ */ import_react108.default.createElement(FiltersLabel, null, "Filter by:", " ", showClearButton && /* @__PURE__ */ import_react108.default.createElement("button", {
    type: "button",
    onClick: clearAllFilters
  }, "Clear All Filters")), /* @__PURE__ */ import_react108.default.createElement(FiltersField, null, /* @__PURE__ */ import_react108.default.createElement(CustomDropdown_default, __spreadValues({}, dateRangeFilterConfig))), /* @__PURE__ */ import_react108.default.createElement(FiltersField, null, /* @__PURE__ */ import_react108.default.createElement(CustomDropdown_default, __spreadValues({}, statusFilterConfig))), /* @__PURE__ */ import_react108.default.createElement(FiltersField, {
    departments: !0
  }, /* @__PURE__ */ import_react108.default.createElement(CustomDropdown_default, __spreadValues({}, departmentFilterConfig))), /* @__PURE__ */ import_react108.default.createElement(FiltersField, null, /* @__PURE__ */ import_react108.default.createElement(CustomDropdown_default, __spreadValues({}, getLocationFilterConfig())))))));
}
Filters2.propTypes = {
  clearFilters: import_prop_types58.default.func.isRequired,
  modifyQuery: import_prop_types58.default.func.isRequired
};
var Filters_default = Filters2;

// app/utils/cookies.js
init_react();
function setCookie(name, value) {
  document.cookie = `${name}=${value}`;
}
function getCookie(name) {
  if (typeof window < "u") {
    let cname = `${name}=`, ca = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      for (; c.charAt(0) === " "; )
        c = c.substring(1);
      if (c.indexOf(cname) === 0)
        return c.substring(cname.length, c.length);
    }
  }
  return "";
}

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.jsx
init_react();
var import_react110 = __toESM(require("react")), import_prop_types59 = __toESM(require("prop-types"));

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.Styled.jsx
init_react();
var import_styled_components61 = __toESM(require("styled-components")), Modal4 = import_styled_components61.default.div`
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
`, ModalDialog4 = import_styled_components61.default.div`
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
`, ModalBody5 = import_styled_components61.default.div`
    display: block;
    font-size: 15px;
    background-color: #fff;
    border-bottom: none;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    text-align: justify;
`, ModalFooter6 = import_styled_components61.default.div`
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
`, ModalHeader6 = import_styled_components61.default.div`
    overflow-y: hidden;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    font-size: 14px;
    ${(props) => props.variant === "logout" ? `border-bottom: 1px solid #e5e5e5;
        padding: 15px;` : "border-bottom: none;"}
`, ModalTitle5 = import_styled_components61.default.div`
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 8px;
`, ModalSubtitle3 = import_styled_components61.default.div`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0.6px;
    line-height: 1.71;
`, ValueText = import_styled_components61.default.span`
    color: ${(props) => props.color};
    font-weight: 600;
    font-size: 16px;
    text-decoration:  ${(props) => props.color} underline overline;
`, ValuesInformation = import_styled_components61.default.div`
    margin: 20px 0 20px 20px;
`;

// app/components/Modals/ValuesMessageModal/ValuesMessageModal.jsx
var import_bs6 = require("react-icons/bs");
function ValuesMessageModal({ show, onClose }) {
  let profile = useUser_default(), renderBulletPoint = (color2) => /* @__PURE__ */ import_react110.default.createElement(import_bs6.BsCircleFill, {
    color: color2,
    size: "7px",
    style: { marginTop: "3px", marginRight: "10px" }
  });
  return show ? /* @__PURE__ */ import_react110.default.createElement("div", {
    onClick: onClose
  }, /* @__PURE__ */ import_react110.default.createElement(Modal4, {
    onClick: onClose
  }, /* @__PURE__ */ import_react110.default.createElement(ModalDialog4, {
    show: !0,
    hide: onClose
  }, /* @__PURE__ */ import_react110.default.createElement(ModalHeader6, null, /* @__PURE__ */ import_react110.default.createElement(ModalTitle5, null, "Hello", " ", profile.full_name, " ", "!"), /* @__PURE__ */ import_react110.default.createElement(ModalSubtitle3, null, "Welcome to Wize Q!")), /* @__PURE__ */ import_react110.default.createElement(ModalBody5, null, /* @__PURE__ */ import_react110.default.createElement("p", null, "We want to share a few simple guidelines before you start. Remember that Wize Q is a space for asking questions and providing answers that are helpful to our community."), /* @__PURE__ */ import_react110.default.createElement("p", null, "Please practice our values when using Wize Q: "), /* @__PURE__ */ import_react110.default.createElement(ValuesInformation, null, /* @__PURE__ */ import_react110.default.createElement("p", null, renderBulletPoint("var(--color-primary)"), /* @__PURE__ */ import_react110.default.createElement(ValueText, {
    color: "var(--color-primary)"
  }, "Ownership"), "\u2013 See if you can find the answer to your question before posting on Wize Q. And if you know the answer to a question or how to find it, be sure to reply \u2014 anyone can!"), /* @__PURE__ */ import_react110.default.createElement("p", null, renderBulletPoint("var(--color-secondary)"), /* @__PURE__ */ import_react110.default.createElement(ValueText, {
    color: "var(--color-secondary)"
  }, "Innovation"), "\u2013 When someone shares a concern or challenge, let\u2019s be innovative \u2014 propose a solution or offer support!"), /* @__PURE__ */ import_react110.default.createElement("p", null, renderBulletPoint("#E5C8A6"), /* @__PURE__ */ import_react110.default.createElement(ValueText, {
    color: "#E5C8A6"
  }, "Community"), "\u2013 Remember to treat everyone with dignity and respect. Assume others have good intentions. Always be honest and constructive. Let\u2019s make Wizeline a community where everyone can thrive.")), /* @__PURE__ */ import_react110.default.createElement("p", null, "Consider that other channels: (ticketing portal, Slack, your manager or people partner) might be more effective for finding the right answer quickly."), /* @__PURE__ */ import_react110.default.createElement("p", null, "Thanks for being a valuable contributor to our community! "), /* @__PURE__ */ import_react110.default.createElement("p", null, "The Wize Q Team")), /* @__PURE__ */ import_react110.default.createElement(ModalFooter6, null, /* @__PURE__ */ import_react110.default.createElement(Button_default, {
    id: "btnAccept",
    category: SECONDARY_BUTTON,
    onClick: onClose
  }, "Accept"))))) : null;
}
ValuesMessageModal.propTypes = {
  onClose: import_prop_types59.default.func.isRequired,
  show: import_prop_types59.default.bool.isRequired
};
var ValuesMessageModal_default = ValuesMessageModal;

// app/components/ListQuestions/ListQuestions.jsx
function ListQuestions({
  questions,
  onFetchMore
}) {
  let submit = (0, import_react112.useSubmit)(), transition = (0, import_react112.useTransition)(), voteQuestionForm = (0, import_react111.useRef)(), profile = useUser_default(), [showValuesMessage, setShowValueMessage] = (0, import_react111.useState)(getCookie("showValueMessage")), [searchParams, setSearchParams] = (0, import_react112.useSearchParams)(), [title, setTitle] = (0, import_react111.useState)("Newest Questions"), valuesMessageModal = showValuesMessage === "true" && /* @__PURE__ */ import_react111.default.createElement(ValuesMessageModal_default, {
    show: showValuesMessage,
    onClose: () => {
      setShowValueMessage(!1), setCookie("showValueMessage", !1);
    }
  }), decorateQuestion = (question) => __spreadProps(__spreadValues({}, question), {
    question: markdownFormatQuestions_default(question.question, void 0),
    hasVoted: !!question.hasVoted
  }), clearFilters = (params) => {
    params.forEach((param) => {
      searchParams.delete(param);
    }), setSearchParams(searchParams);
  }, modifyQuery = (field, value) => {
    field === "order" && (value === "oldest" ? setTitle("Oldest Questions") : value === "newest" ? setTitle("Newest Questions") : value === "popular" ? setTitle("Popular Questions") : value === "most_commented" && setTitle("Most Commented Questions")), value === void 0 ? searchParams.delete(field) : searchParams.set(field, value), setSearchParams(searchParams);
  }, displayUsername = (user) => user ? user.full_name : "Anonymous", displayAnsweredBy = (username) => username ? `Answered by ${username}` : "", renderQuestionsList = () => {
    let onLikeButtonClick = (questionId, isUpVote) => {
      if (transition.state !== "idle")
        return;
      let data = new FormData(voteQuestionForm.current);
      data.set("action", actions_default.VOTE_QUESTION), data.set("questionId", questionId), data.set("user", JSON.stringify(profile)), data.set("isUpVote", isUpVote);
      let actionUrl = "/?index";
      searchParams.forEach((value, key) => {
        actionUrl += value ? `&${key}=${value}` : "";
      }), submit(data, { method: "post", action: actionUrl, replace: !0 });
    };
    return questions.length === 0 ? null : questions.map((question, index2) => /* @__PURE__ */ import_react111.default.createElement(QuestionCard_default, {
      key: question.question_id,
      question: decorateQuestion(question),
      isAdmin: profile.is_admin,
      displayUsername,
      displayAnsweredBy,
      searchTerm: void 0,
      index: index2,
      onVoteClick: (isUpVote) => onLikeButtonClick(question.question_id, isUpVote),
      processingFormSubmission: transition.state !== "idle"
    }));
  }, renderNoResultMessage = () => questions ? "There are no questions yet, how about asking one?" : "Loading questions...";
  return /* @__PURE__ */ import_react111.default.createElement(Container9, null, /* @__PURE__ */ import_react111.default.createElement(LeftWrapper, null, /* @__PURE__ */ import_react111.default.createElement(SloganWrapper, null, /* @__PURE__ */ import_react111.default.createElement(Slogan_default, null))), /* @__PURE__ */ import_react111.default.createElement(CenterWrapper, null, /* @__PURE__ */ import_react111.default.createElement(QuestionsWrapper, null, /* @__PURE__ */ import_react111.default.createElement(AskQuestionButtonWrapper, null, /* @__PURE__ */ import_react111.default.createElement(QuestionsTitle, null, title), (() => /* @__PURE__ */ import_react111.default.createElement(AskButton, {
    to: "/questions/new",
    id: "ask-button"
  }, "Ask Question"))()), questions.length === 0 ? /* @__PURE__ */ import_react111.default.createElement(Alert3, null, renderNoResultMessage()) : /* @__PURE__ */ import_react111.default.createElement(InfiniteScrollList_default, {
    onFetch: onFetchMore
  }, /* @__PURE__ */ import_react111.default.createElement(QuestionList, {
    id: "questions-list"
  }, renderQuestionsList(questions))))), /* @__PURE__ */ import_react111.default.createElement(RightWrapper2, null, /* @__PURE__ */ import_react111.default.createElement(FiltersWrapper, null, /* @__PURE__ */ import_react111.default.createElement(Filters_default, {
    modifyQuery,
    clearFilters
  }))), /* @__PURE__ */ import_react111.default.createElement(GoToTopButton_default, null), valuesMessageModal);
}
ListQuestions.propTypes = {
  questions: import_prop_types60.default.arrayOf(import_prop_types60.default.shape()),
  onFetchMore: import_prop_types60.default.func.isRequired
};
ListQuestions.defaultProps = {
  questions: []
};
var ListQuestions_default = ListQuestions;

// app/routes/index.jsx
var loader12 = async ({ request }) => {
  await requireAuth(request);
  let user = await getAuthenticatedUser(request), url = new URL(request.url), order2 = url.searchParams.get("order"), status = url.searchParams.get("status"), department = Number.parseInt(url.searchParams.get("department"), 10), location = url.searchParams.get("location"), dateRange = dateRangeConversion_default(url.searchParams.get("dateRange")), page = url.searchParams.get("page") ?? 1, questions = await list_default({
    user,
    orderBy: order2,
    status,
    department: Number.isNaN(department) ? void 0 : department,
    location,
    dateRange,
    offset: (page - 1) * PAGE_QUESTIONS_LIMIT
  }), locations = await list_default3(), departments = await list_default5();
  return (0, import_node11.json)({
    questions,
    locations,
    departments
  });
}, action6 = async ({ request }) => {
  let formData = await request.formData(), formAction = formData.get("action"), user = await getAuthenticatedUser(request), form = Object.fromEntries(formData.entries()), { assignedDepartment } = form, parsedDepartment = parseInt(assignedDepartment, 10), response, payload, questionId;
  switch (formAction) {
    case actions_default.PINNIN:
      questionId = parseInt(formData.get("questionId"), 10);
      let value = formData.get("value") !== "false";
      response = await modifyPinStatus_default(questionId, value);
      break;
    case actions_default.VOTE_QUESTION:
      let voteQuestionId = parseInt(formData.get("questionId"), 10), voteQuestionUser = JSON.parse(formData.get("user")), isUpVote = formData.get("isUpVote") === "true";
      response = await voteQuestion_default(voteQuestionId, voteQuestionUser, isUpVote);
      break;
    case actions_default.ENABLED_ACTION:
      questionId = parseInt(formData.get("questionId"), 10);
      let enabledValue = formData.get("enabledValue") !== "false";
      response = await modifyEnableStatus_default(questionId, enabledValue);
      break;
    case actions_default.CREATE_QUESTION_ANSWERBOT:
      if (payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await create_default5(payload), response.successMessage) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node11.redirect)("/?index", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    case actions_default.UPDATE_FEEDBACK_ANSWERBOT:
      if (payload = {
        question_by_user: form.question_by_user,
        answer_by_bot: form.answer_by_bot,
        answerFeedback: form.answerFeedback,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await modifyFeedback_default(payload), response.successMessage) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node11.redirect)("/?index", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    case actions_default.UPDATE_POST_ANSWERBOT:
      if (payload = {
        question: form.question,
        created_by_employee_id: user.employee_id,
        is_anonymous: !1,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        assigned_to_employee_id: null,
        botEnabled: !0,
        location: DEFAULT_LOCATION,
        accessToken: user.accessToken
      }, response = await create_default4(payload), response.successMessage && (payload = {
        postQuestionID: response.question.question_id,
        question_by_user: form.question,
        answer_by_bot: form.answer,
        assigned_department: Number.isNaN(parsedDepartment) ? null : parsedDepartment,
        user_id: user.employee_id
      }, response = await modifyIDQuestion_default(payload), response.successMessage)) {
        let session = await getSession(request), { successMessage } = response;
        return session.flash("globalSuccess", successMessage), (0, import_node11.redirect)("/?index", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
      }
      break;
    default:
      break;
  }
  return (0, import_node11.json)(response);
};
function Index() {
  let { questions: initialQuestions, departments } = (0, import_react113.useLoaderData)(), [questions, setQuestions] = (0, import_react114.useState)(initialQuestions), fetcher = (0, import_react113.useFetcher)(), submit = (0, import_react113.useSubmit)(), formRef = (0, import_react114.useRef)(), [shouldFetch, setShouldFetch] = (0, import_react114.useState)(!0), [page, setPage] = (0, import_react114.useState)(2), [searchParams] = (0, import_react113.useSearchParams)(), onFetchMore = () => {
    !shouldFetch || fetcher.load(`/?index&${searchParams.toString()}&page=${page}`);
  };
  return (0, import_react114.useEffect)(() => {
    if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length === 0) {
      setShouldFetch(!1);
      return;
    }
    fetcher.data && fetcher.data.questions && fetcher.data.questions.length > 0 && (setQuestions((prevQuestions) => [...prevQuestions, ...fetcher.data.questions]), setPage((prevPage) => prevPage + 1), setShouldFetch(!0));
  }, [fetcher.data]), (0, import_react114.useEffect)(() => {
    setQuestions(initialQuestions), setPage(2), setShouldFetch(!0);
  }, [initialQuestions, searchParams]), /* @__PURE__ */ import_react114.default.createElement(import_react114.default.Fragment, null, /* @__PURE__ */ import_react114.default.createElement(Notifications_default, null), /* @__PURE__ */ import_react114.default.createElement(Container8, null, /* @__PURE__ */ import_react114.default.createElement(ListQuestions_default, {
    type: "all",
    questions,
    onFetchMore
  }), /* @__PURE__ */ import_react114.default.createElement(AnswerBot_default, {
    postAnswerBotQuestion: (question) => {
      let data = new FormData(formRef.current);
      data.set("action", actions_default.CREATE_QUESTION_ANSWERBOT);
      for (let [key, value] of Object.entries(question))
        data.set(key, value);
      submit(data, { method: "post", action: "/?index" });
    },
    updateAnswerBotFeedback: (question) => {
      let data = new FormData(formRef.current);
      data.set("action", actions_default.UPDATE_FEEDBACK_ANSWERBOT);
      for (let [key, value] of Object.entries(question))
        data.set(key, value);
      submit(data, { method: "post", action: "/?index" });
    },
    updateAnswerBotPostID: (question) => {
      let data = new FormData(formRef.current);
      data.set("action", actions_default.UPDATE_POST_ANSWERBOT);
      for (let [key, value] of Object.entries(question))
        data.set(key, value);
      submit(data, { method: "post", action: "/?index" });
    },
    departments
  })));
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default,
  loader: () => loader13
});
init_react();
var import_react117 = __toESM(require("react")), import_node12 = require("@remix-run/node");

// app/components/Login/LoginContainer.jsx
init_react();
var import_react115 = __toESM(require("react")), import_react116 = require("@remix-run/react");

// app/components/Login/LoginContainer.Styled.jsx
init_react();
var import_styled_components62 = __toESM(require("styled-components"));
var LoginDiv = import_styled_components62.default.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`, LoginSubDiv = import_styled_components62.default.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`, SH3 = import_styled_components62.default.h3`
  text-align: center;
  color: #646464;
  margin-bottom: 50px;
  font-family: "Nunito";
  font-size: 25px;
  letter-spacing: 0.4px;
  font-weight: 700;
`, Span2 = import_styled_components62.default.span`
  ${(props) => (props.variant === "bold", 'font-family: "Nunito";')}
`, Paragraph = import_styled_components62.default.p`
  text-align: center;
  color: #646464;
  font-family: "Nunito";
  font-size: 18px;
  letter-spacing: 0.7px;
  margin-top: 50px;
  width: 350px;
`, LeftDiv = import_styled_components62.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  padding: 0 40px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`, RightDiv = import_styled_components62.default.div`
  display: flex;
  width: 55%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #203449;
  position: relative;

  img {
    height: fit-content;
    width: 200px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 120px;

    img {
      margin-bottom: 0;
    }
  }
`, Slogan2 = import_styled_components62.default.div`
  width: 320px;

  ${SloganContainer} {
    p {
      padding: 0;
      text-align: center;
      color: white;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`, RedDiv = import_styled_components62.default.div`
  width: 20px;
  background-color: var(--color-primary);
  position: absolute;
  height: 100%;
  left: 0;
`, GoldDiv = import_styled_components62.default.div`
  width: 20px;
  background-color: #e5c8a6;
  position: absolute;
  height: 100%;
  left: 20px;
`, AdviceContainer = import_styled_components62.default.div`
  color: white;
  font-size: 15px;

  p {
    font-weight: 100;
    width: fit-content;
  }
  a {
    text-decoration: none;
    color: var(--color-secondary);
  }
  ul {
    li {
      margin: 10px;
    }
  }
`;

// app/components/Login/LoginContainer.jsx
function LoginContainer() {
  let redirectTo = "/";
  return (0, import_react115.useEffect)(() => {
    setCookie("showValueMessage", !0);
  }, []), /* @__PURE__ */ import_react115.default.createElement(LoginDiv, null, /* @__PURE__ */ import_react115.default.createElement(LoginSubDiv, null, /* @__PURE__ */ import_react115.default.createElement(LeftDiv, null, /* @__PURE__ */ import_react115.default.createElement(SH3, null, "Welcome Wizeliner!"), /* @__PURE__ */ import_react115.default.createElement(import_react116.Form, {
    action: "/auth/auth0",
    method: "POST"
  }, /* @__PURE__ */ import_react115.default.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ import_react115.default.createElement(Button_default, {
    type: "submit",
    category: PRIMARY_BUTTON,
    className: "login-button"
  }, "Log in with your Wizeline account")), /* @__PURE__ */ import_react115.default.createElement(Paragraph, null, /* @__PURE__ */ import_react115.default.createElement(Span2, null, "Wizeline Questions"), /* @__PURE__ */ import_react115.default.createElement(Span2, {
    variant: "bold"
  }, " DOES NOT "), /* @__PURE__ */ import_react115.default.createElement(Span2, null, "store any personal information so that you can ask anything."))), /* @__PURE__ */ import_react115.default.createElement(RightDiv, null, /* @__PURE__ */ import_react115.default.createElement(RedDiv, null), /* @__PURE__ */ import_react115.default.createElement(GoldDiv, null), /* @__PURE__ */ import_react115.default.createElement("img", {
    src: logo_white_default,
    alt: "logo"
  }), /* @__PURE__ */ import_react115.default.createElement(Slogan2, null, /* @__PURE__ */ import_react115.default.createElement(Slogan_default, null), /* @__PURE__ */ import_react115.default.createElement(AdviceContainer, null, /* @__PURE__ */ import_react115.default.createElement("p", null, "Before asking a question verify if you can get the information you need from these resources."), /* @__PURE__ */ import_react115.default.createElement("ul", null, /* @__PURE__ */ import_react115.default.createElement("li", null, /* @__PURE__ */ import_react115.default.createElement("a", {
    href: "https://wizeline.slack.com/archives/C1UDJCL9E"
  }, " #Questions "), "- Slack Channel"), /* @__PURE__ */ import_react115.default.createElement("li", null, /* @__PURE__ */ import_react115.default.createElement("a", {
    href: "https://ticketing.wizeline.com/ticketing.html"
  }, " Ticketing"))))))));
}
var LoginContainer_default = LoginContainer;

// app/routes/login.jsx
var loader13 = async ({ request }) => await getAuthenticatedUser(request) ? (0, import_node12.redirect)("/") : (0, import_node12.json)({});
function Login() {
  return /* @__PURE__ */ import_react117.default.createElement(LoginContainer_default, null);
}
var login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "8e2d813c", entry: { module: "/build/entry.client-UE62V5O4.js", imports: ["/build/_shared/chunk-AOIRIE2A.js", "/build/_shared/chunk-CA4B4QDL.js", "/build/_shared/chunk-3WZ3CGWF.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ECZRH2LR.js", imports: ["/build/_shared/chunk-NPNCWMXA.js", "/build/_shared/chunk-CHRNTAPK.js", "/build/_shared/chunk-KHI65GMO.js", "/build/_shared/chunk-6TCZEOTC.js", "/build/_shared/chunk-TIDFRYFE.js", "/build/_shared/chunk-LOAY3CH6.js", "/build/_shared/chunk-CXIA25NB.js", "/build/_shared/chunk-R6ZOL3IF.js", "/build/_shared/chunk-MTRSEIQJ.js", "/build/_shared/chunk-YT3K4J47.js", "/build/_shared/chunk-TOV5KU52.js", "/build/_shared/chunk-2FVL2P6G.js", "/build/_shared/chunk-DTXDYIFC.js", "/build/_shared/chunk-UPCFJQSK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-T64WQ7D2.js", imports: ["/build/_shared/chunk-6H77JM73.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-FKIM2JZ5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-UCNTPAM6.js", imports: ["/build/_shared/chunk-6H77JM73.js", "/build/_shared/chunk-35OB2BUG.js", "/build/_shared/chunk-6OKKDTE7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/auth/auth0": { id: "routes/auth/auth0", parentId: "root", path: "auth/auth0", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/auth0-ITMSNXEC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/auth0/callback": { id: "routes/auth/auth0/callback", parentId: "routes/auth/auth0", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/auth0/callback-4TNALWYI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-MMAM3N7V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-EXATKZTS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/employees/getByDeparment/$id": { id: "routes/employees/getByDeparment/$id", parentId: "root", path: "employees/getByDeparment/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/employees/getByDeparment/$id-I7VIXFAC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DTEDT2DQ.js", imports: ["/build/_shared/chunk-PNOSEPO2.js", "/build/_shared/chunk-O5ML77LV.js", "/build/_shared/chunk-72PTRUKW.js", "/build/_shared/chunk-LKOJQBOU.js", "/build/_shared/chunk-DMHBAV2X.js", "/build/_shared/chunk-6OKKDTE7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-USZNUW5H.js", imports: ["/build/_shared/chunk-PNOSEPO2.js", "/build/_shared/chunk-LKOJQBOU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-XHWZMWF6.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questions/$questionId": { id: "routes/questions/$questionId", parentId: "root", path: "questions/:questionId", index: void 0, caseSensitive: void 0, module: "/build/routes/questions/$questionId-QTR5MHYA.js", imports: ["/build/_shared/chunk-35OB2BUG.js", "/build/_shared/chunk-O5ML77LV.js", "/build/_shared/chunk-DQMYHA6A.js", "/build/_shared/chunk-DMHBAV2X.js", "/build/_shared/chunk-6OKKDTE7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/questions/new": { id: "routes/questions/new", parentId: "root", path: "questions/new", index: void 0, caseSensitive: void 0, module: "/build/routes/questions/new-FSAYYYK5.js", imports: ["/build/_shared/chunk-72PTRUKW.js", "/build/_shared/chunk-LKOJQBOU.js", "/build/_shared/chunk-DQMYHA6A.js", "/build/_shared/chunk-DMHBAV2X.js", "/build/_shared/chunk-6OKKDTE7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8E2D813C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/employees/getByDeparment/$id": {
    id: "routes/employees/getByDeparment/$id",
    parentId: "root",
    path: "employees/getByDeparment/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/questions/$questionId": {
    id: "routes/questions/$questionId",
    parentId: "root",
    path: "questions/:questionId",
    index: void 0,
    caseSensitive: void 0,
    module: questionId_exports
  },
  "routes/questions/new": {
    id: "routes/questions/new",
    parentId: "root",
    path: "questions/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/auth/auth0": {
    id: "routes/auth/auth0",
    parentId: "root",
    path: "auth/auth0",
    index: void 0,
    caseSensitive: void 0,
    module: auth0_exports
  },
  "routes/auth/auth0/callback": {
    id: "routes/auth/auth0/callback",
    parentId: "routes/auth/auth0",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
