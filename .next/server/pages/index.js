"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import Head from \"next/head\";\n// import styles from \"../styles/Home.module.css\";\n\n\n\nconst Home = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const httpCall = async ()=>{\n            const client_id = \"zS_58sDUDBeJMf1WLZIa8xa8gMj56zdZAeIpC5oYsB0\";\n            const client_secret = \"JQzByA2MZQsbToeA39tn2-jmnJc-kPNB71moLBjsd1g\";\n            const redirect_uri = \"https://cerulean-salamander-59d321.netlify.app/\";\n            const code = new URLSearchParams(window.location.search).get(\"code\");\n            const grant_type = \"authorization_code\";\n            const authUrl = \"https://accounts.jumpseller.com/oauth/token\";\n            try {\n                const codeRequest = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(authUrl, {\n                    client_id,\n                    client_secret,\n                    redirect_uri,\n                    code,\n                    grant_type\n                });\n                localStorage.setItem(\"tokenData\", JSON.stringify(codeRequest.data));\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        httpCall();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello world!\"\n        }, void 0, false, {\n            fileName: \"/Users/mau/Documents/BCI/Code/Jumpseller App/fe-loyalty-jumpseller-app/pages/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mau/Documents/BCI/Code/Jumpseller App/fe-loyalty-jumpseller-app/pages/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGdDQUFnQztBQUNoQyxrREFBa0Q7QUFDbEQ7QUFBa0M7QUFDUjtBQUVuQixNQUFNRSxPQUFPLElBQU07SUFDeEJGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNRyxXQUFXLFVBQVk7WUFDM0IsTUFBTUMsWUFBWUMsNkNBQWlDO1lBQ25ELE1BQU1HLGdCQUFnQkgsNkNBQXFDO1lBQzNELE1BQU1LLGVBQWVMLGlEQUFvQztZQUN6RCxNQUFNTyxPQUFPLElBQUlDLGdCQUFnQkMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsQ0FBQztZQUM3RCxNQUFNQyxhQUFhO1lBQ25CLE1BQU1DLFVBQVU7WUFFaEIsSUFBSTtnQkFDRixNQUFNQyxjQUFjLE1BQU1uQixrREFBVSxDQUFDa0IsU0FBUztvQkFDNUNmO29CQUNBSTtvQkFDQUU7b0JBQ0FFO29CQUNBTTtnQkFDRjtnQkFDQUksYUFBYUMsT0FBTyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ0wsWUFBWU0sSUFBSTtZQUNuRSxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGO1FBQ0F4QjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDMkI7a0JBQ0MsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdWLEVBQUU7QUFFRixpRUFBZTdCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaHR0cENhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjbGllbnRfaWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQ7XG4gICAgICBjb25zdCBjbGllbnRfc2VjcmV0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVDtcbiAgICAgIGNvbnN0IHJlZGlyZWN0X3VyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSTtcbiAgICAgIGNvbnN0IGNvZGUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImNvZGVcIik7XG4gICAgICBjb25zdCBncmFudF90eXBlID0gXCJhdXRob3JpemF0aW9uX2NvZGVcIjtcbiAgICAgIGNvbnN0IGF1dGhVcmwgPSBcImh0dHBzOi8vYWNjb3VudHMuanVtcHNlbGxlci5jb20vb2F1dGgvdG9rZW5cIjtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29kZVJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KGF1dGhVcmwsIHtcbiAgICAgICAgICBjbGllbnRfaWQsXG4gICAgICAgICAgY2xpZW50X3NlY3JldCxcbiAgICAgICAgICByZWRpcmVjdF91cmksXG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICBncmFudF90eXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlbkRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoY29kZVJlcXVlc3QuZGF0YSkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgaHR0cENhbGwoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyB3b3JsZCE8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJheGlvcyIsIkhvbWUiLCJodHRwQ2FsbCIsImNsaWVudF9pZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjbGllbnRfc2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCIsInJlZGlyZWN0X3VyaSIsIk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSSIsImNvZGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCIsImdyYW50X3R5cGUiLCJhdXRoVXJsIiwiY29kZVJlcXVlc3QiLCJwb3N0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();