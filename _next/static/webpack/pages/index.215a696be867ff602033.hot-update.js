webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/reading.js":
/*!*********************************!*\
  !*** ./src/sections/reading.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Readings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_show_more_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-show-more-list */ \"./node_modules/react-show-more-list/dist/react-show-more-list.min.js\");\n/* harmony import */ var react_show_more_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_show_more_list__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/banner.module.css */ \"./src/styles/banner.module.css\");\n/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/furkan/Developer/resume/src/sections/reading.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Readings() {\n  _s();\n\n  const {\n    0: readingList,\n    1: setReadingList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetch(\"https://express-on-nodejs-1.furkandoganktf1.repl.co/list\").then(res => res.json()).then(result => {\n      setReadingList(result);\n    }, error => {\n      console.log(error);\n    });\n  }, []);\n  return __jsx(\"section\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"containerCont sectionCont\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"reading\",\n    className: \"target\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"header\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Reading List\")), __jsx(react_show_more_list__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: readingList,\n    by: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, _ref => {\n    let {\n      current,\n      onMore\n    } = _ref;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"cardContainer readingContainer\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }, current.map(item => __jsx(\"div\", {\n      key: item.url,\n      className: \"card readingCard\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, __jsx(\"div\", {\n      className: \"readingCardTitle\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }\n    }, __jsx(\"h5\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 23\n      }\n    }, item.title)), __jsx(\"img\", {\n      className: \"readingCardImg\",\n      src: item.image,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      className: \"readingCardDescription\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 23\n      }\n    }, item.description), __jsx(\"button\", {\n      className: `${_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.but} readingCardUrlButton`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      href: item.url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 25\n      }\n    }, \"Read More!\"))))), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, __jsx(\"button\", {\n      disabled: !onMore,\n      onClick: () => {\n        if (!!onMore) onMore();\n      },\n      className: `${_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.but}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, \"Show more!\"))));\n  })));\n}\n\n_s(Readings, \"2xJEQJgdvonn1fOWAzII6rmGRXo=\");\n\n_c = Readings;\n\nvar _c;\n\n$RefreshReg$(_c, \"Readings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3JlYWRpbmcuanM/ZmY4OCJdLCJuYW1lcyI6WyJSZWFkaW5ncyIsInJlYWRpbmdMaXN0Iiwic2V0UmVhZGluZ0xpc3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwib25Nb3JlIiwibWFwIiwiaXRlbSIsInVybCIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInN0eWxlcyIsImJ1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDakMsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLFNBQUssQ0FBQywwREFBRCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFEakIsRUFFR0YsSUFGSCxDQUdLRyxNQUFELElBQVk7QUFDVlAsb0JBQWMsQ0FBQ08sTUFBRCxDQUFkO0FBQ0QsS0FMTCxFQU9LQyxLQUFELElBQVc7QUFDVEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxLQVRMO0FBV0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWFBLFNBQ0U7QUFBUyxhQUFTLEVBQUMsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUZGLEVBS0UsTUFBQywyREFBRDtBQUFVLFNBQUssRUFBRVQsV0FBakI7QUFBOEIsTUFBRSxFQUFFLENBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFBLFFBQUM7QUFBRVksYUFBRjtBQUFXQztBQUFYLEtBQUQ7QUFBQSxXQUNDLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELE9BQU8sQ0FBQ0UsR0FBUixDQUFhQyxJQUFELElBQ1g7QUFBSyxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtBQUFvQixlQUFTLEVBQUMsa0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRCxJQUFJLENBQUNFLEtBQVYsQ0FERixDQURGLEVBS0U7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBRyxFQUFFRixJQUFJLENBQUNHLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU9FO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ILElBQUksQ0FBQ0ksV0FBWixDQURGLEVBR0U7QUFBUSxlQUFTLEVBQUcsR0FBRUMsZ0VBQU0sQ0FBQ0MsR0FBSSx1QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsWUFBTSxFQUFDLFFBQVY7QUFBbUIsVUFBSSxFQUFFTixJQUFJLENBQUNDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FIRixDQVBGLENBREQsQ0FESCxFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxjQUFRLEVBQUUsQ0FBQ0gsTUFEYjtBQUVFLGFBQU8sRUFBRSxNQUFNO0FBQ2IsWUFBSSxDQUFDLENBQUNBLE1BQU4sRUFBY0EsTUFBTTtBQUNyQixPQUpIO0FBS0UsZUFBUyxFQUFHLEdBQUVPLGdFQUFNLENBQUNDLEdBQUksRUFMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQXBCRixDQURGLENBREQ7QUFBQSxHQURILENBTEYsQ0FERixDQURGO0FBZ0REOztHQS9EdUJ0QixROztLQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3JlYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2hvd01vcmUgZnJvbSBcInJlYWN0LXNob3ctbW9yZS1saXN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYmFubmVyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVhZGluZ3MoKSB7XG4gIGNvbnN0IFtyZWFkaW5nTGlzdCwgc2V0UmVhZGluZ0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9leHByZXNzLW9uLW5vZGVqcy0xLmZ1cmthbmRvZ2Fua3RmMS5yZXBsLmNvL2xpc3RcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldFJlYWRpbmdMaXN0KHJlc3VsdCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lckNvbnQgc2VjdGlvbkNvbnRcIj5cbiAgICAgICAgPGRpdiBpZD1cInJlYWRpbmdcIiBjbGFzc05hbWU9XCJ0YXJnZXRcIj48L2Rpdj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDI+UmVhZGluZyBMaXN0PC9oMj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxTaG93TW9yZSBpdGVtcz17cmVhZGluZ0xpc3R9IGJ5PXszfT5cbiAgICAgICAgICB7KHsgY3VycmVudCwgb25Nb3JlIH0pID0+IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkQ29udGFpbmVyIHJlYWRpbmdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLnVybH0gY2xhc3NOYW1lPVwiY2FyZCByZWFkaW5nQ2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRpbmdDYXJkVGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDU+e2l0ZW0udGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyZWFkaW5nQ2FyZEltZ1wiIHNyYz17aXRlbS5pbWFnZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRpbmdDYXJkRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5kZXNjcmlwdGlvbn08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dH0gcmVhZGluZ0NhcmRVcmxCdXR0b25gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBNb3JlIVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshb25Nb3JlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCEhb25Nb3JlKSBvbk1vcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0fWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNob3cgbW9yZSFcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TaG93TW9yZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/reading.js\n");

/***/ })

})