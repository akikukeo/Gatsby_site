"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 6873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(123);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5902);
/* provided dependency */ var fetch = __webpack_require__(3492);


 // CSSのインポート



const CreditsPage = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // marked_md READMEの表示
    fetchAndDisplayReadme('https://raw.githubusercontent.com/taisukef/marked_md/refs/heads/master/LICENSE.md', 'readme-content');

    // github-markdown-css ライセンスの表示
    fetchAndDisplayReadme('https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/license', 'content');
  }, []);
  async function fetchAndDisplayReadme(url, elementId) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const markdown = await response.text();
        const htmlContent = await marked__WEBPACK_IMPORTED_MODULE_1__/* .marked */ .xI.parse(markdown);
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = htmlContent;
        }
      } else {
        console.error(`Failed to fetch ${elementId}:`, response.status);
        const element = document.getElementById(elementId);
        if (element) {
          element.innerText = 'コンテンツの取得に失敗しました。';
        }
      }
    } catch (error) {
      console.error(`Error fetching ${elementId}:`, error);
      const element = document.getElementById(elementId);
      if (element) {
        element.innerText = 'エラーが発生しました。';
      }
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body-margin-LR"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_3__/* .Helmet */ .mg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "#page-top",
    id: "page-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "blogicon-chevron-up"
  }), "TOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    id: "home-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "blogicon-home"
  }), "HOME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\u4EE5\u4E0B\u306E\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\uFF0F\u30E9\u30A4\u30D6\u30E9\u30EA\uFF0F\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftMargin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "https://github.com/taisukef/marked_md",
    className: "links"
  }, "marked_md")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bordered",
    id: "readme-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftMargin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "https://github.com/sindresorhus/github-markdown-css",
    className: "links"
  }, "github-markdown-css")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bordered",
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreditsPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-credits-tsx.js.map