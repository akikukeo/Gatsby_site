"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 1770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8766);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5902);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7037);
/* provided dependency */ var fetch = __webpack_require__(3492);

 // CSSをインポート
 // GatsbyのLinkコンポーネントを使用
 // markedをインポート

 // DOMPurifyをインポート

const MinecraftWikiPage = () => {
  const {
    0: readmeContent,
    1: setReadmeContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Loading...'); // 型をstringに明示

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchAndDisplayReadme() {
      const url = 'https://raw.githubusercontent.com/akikukeo/minecraft-server/refs/heads/main/docs/README.md';
      try {
        const response = await fetch(url);
        if (response.ok) {
          const markdown = await response.text();
          const htmlContent = marked__WEBPACK_IMPORTED_MODULE_2__/* .marked */ .xI.parse(markdown); // markdownをHTMLに変換

          // sanitizeの戻り値が確実にstringであると明示
          // @ts-ignore(どうしても治らない（泣）
          const sanitizedContent = dompurify__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.sanitize(htmlContent);
          setReadmeContent(sanitizedContent); // サニタイズされたHTMLをセット
        } else {
          console.error('Failed to fetch README:', response.status);
          setReadmeContent('READMEの取得に失敗しました。');
        }
      } catch (error) {
        console.error('Error fetching README:', error);
        setReadmeContent('エラーが発生しました。');
      }
    }
    fetchAndDisplayReadme();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_4__/* .Helmet */ .mg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "MinecraftServer Wiki")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "body-margin-LR"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "#page-top",
    id: "page-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "blogicon-chevron-up"
  }), "TOP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    id: "home-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "blogicon-home"
  }), "HOME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "MinecraftServer Wiki"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "GitHub Document Viewer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Links are not supported!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "readme-content",
    className: "markdown-body",
    dangerouslySetInnerHTML: {
      __html: readmeContent
    } // dangerouslySetInnerHTMLの使い方
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinecraftWikiPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-minecraft-tsx.js.map