"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin)/details/[id]/page",{

/***/ "(app-pages-browser)/./app/(admin)/details/[id]/page.jsx":
/*!*******************************************!*\
  !*** ./app/(admin)/details/[id]/page.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var _components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/custom/Loading */ \"(app-pages-browser)/./components/custom/Loading.jsx\");\n/* harmony import */ var _constants_capacity_details_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/capacity_details_questions */ \"(app-pages-browser)/./constants/capacity_details_questions.json\");\n/* harmony import */ var _constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants/apiConstants */ \"(app-pages-browser)/./constants/apiConstants.js\");\n/* harmony import */ var _components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/EditUserForm */ \"(app-pages-browser)/./components/EditUserForm.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getDetails = async ()=>{\n        try {\n            // Assuming the `id` passed corresponds to a user._id in your db.json\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_4__.axiosSecureInstance.get((0,_constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__.ADMIN_DETAILS_SLUG)(id));\n            if (response && response.data) {\n                // Since you're getting user details, simply store the user object.\n                setDetails(response.data);\n                console.log(response.data);\n            }\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[40px] mb-[40px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col justify-center items-center h-[calc(100vh-160px)]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"headline-small mb-[50px]\",\n                    children: \" User Details \"\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) : details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-9/12 mx-auto relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large\",\n                                children: \"Full Name\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.fullName\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.email\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: \"User Id\"\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"body-medium\",\n                                children: details.id\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                className: \"label-large block pt-5\",\n                                children: [\n                                    \"His Role: \",\n                                    details.role\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end gap-3 absolute bottom-[-50px] right-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        className: \"transparent-btn\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-end gap-3 absolute top-[10px] right-[10px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/edit-user\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        className: \"transparent-btn\",\n                                        children: \"Eidt User\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"B3DF7WybNxEctf9AQbkSPOhHmXA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ0U7QUFDbkI7QUFDdUI7QUFDRjtBQUNXO0FBQ0M7QUFDVDtBQUNMO0FBQ0Q7QUFTZjtBQUVoQyxNQUFNbUIsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsRUFBRSxFQUFFLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHckIsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ3NCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU13QixhQUFhO1FBQ2pCLElBQUk7WUFDRixxRUFBcUU7WUFDckUsTUFBTUMsV0FBVyxNQUFNckIsNkRBQW1CQSxDQUFDc0IsR0FBRyxDQUFDbkIsMkVBQWtCQSxDQUFDWTtZQUVsRSxJQUFJTSxZQUFZQSxTQUFTRSxJQUFJLEVBQUU7Z0JBQzdCLG1FQUFtRTtnQkFDbkVOLFdBQVdJLFNBQVNFLElBQUk7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLElBQUk7WUFDM0I7UUFDRixFQUFFLE9BQU9HLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JQLFdBQVc7UUFDYjtJQUNGO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSeUI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEyQjs7Ozs7O2dCQUN4Q1Ysd0JBQ0MsOERBQUNqQixrRUFBT0E7Ozs7Z0NBRVJlLHlCQUNFOzhCQUNFLDRFQUFDVzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMvQix5REFBS0E7Z0NBQUMrQixXQUFVOzBDQUFjOzs7Ozs7MENBQy9CLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBZVosUUFBUWUsUUFBUTs7Ozs7OzBDQUU1Qyw4REFBQ2xDLHlEQUFLQTtnQ0FBQytCLFdBQVU7MENBQXlCOzs7Ozs7MENBQzFDLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBZVosUUFBUWdCLEtBQUs7Ozs7OzswQ0FFekMsOERBQUNuQyx5REFBS0E7Z0NBQUMrQixXQUFVOzBDQUF5Qjs7Ozs7OzBDQUMxQyw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQWVaLFFBQVFELEVBQUU7Ozs7OzswQ0FFdEMsOERBQUNsQix5REFBS0E7Z0NBQUMrQixXQUFVOztvQ0FBeUI7b0NBQzdCWixRQUFRaUIsSUFBSTs7Ozs7OzswQ0FJekIsOERBQUNOO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDN0IsaURBQUlBO29DQUFDbUMsTUFBSzs4Q0FDVCw0RUFBQ3BDLHlEQUFNQTt3Q0FBQzhCLFdBQVU7a0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUd4Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUM3QixpREFBSUE7b0NBQUNtQyxNQUFLOzhDQUNULDRFQUFDcEMseURBQU1BO3dDQUFDOEIsV0FBVTtrREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXeEQ7R0FuRU1mO0FBcUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeD9hOGJjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1sYWJlbFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGF4aW9zU2VjdXJlSW5zdGFuY2UgfSBmcm9tIFwiQC91dGlscy9heGlvc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9jdXN0b20vTG9hZGluZ1wiO1xuaW1wb3J0IGRhdGFzZXQgZnJvbSBcIkAvY29uc3RhbnRzL2NhcGFjaXR5X2RldGFpbHNfcXVlc3Rpb25zXCI7XG5pbXBvcnQgeyBBRE1JTl9ERVRBSUxTX1NMVUcgfSBmcm9tIFwiQC9jb25zdGFudHMvYXBpQ29uc3RhbnRzXCI7XG5pbXBvcnQgRWRpdFVzZXJGb3JtIGZyb20gXCJAL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxuICBEaWFsb2dGb290ZXIsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ1RyaWdnZXIsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCI7XG5cbmNvbnN0IHBhZ2UgPSAoeyBwYXJhbXM6IHsgaWQgfSB9KSA9PiB7XG4gIGNvbnN0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGdldERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSBgaWRgIHBhc3NlZCBjb3JyZXNwb25kcyB0byBhIHVzZXIuX2lkIGluIHlvdXIgZGIuanNvblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1NlY3VyZUluc3RhbmNlLmdldChBRE1JTl9ERVRBSUxTX1NMVUcoaWQpKTtcblxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgLy8gU2luY2UgeW91J3JlIGdldHRpbmcgdXNlciBkZXRhaWxzLCBzaW1wbHkgc3RvcmUgdGhlIHVzZXIgb2JqZWN0LlxuICAgICAgICBzZXREZXRhaWxzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERldGFpbHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bNDBweF0gbWItWzQwcHhdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVtjYWxjKDEwMHZoLTE2MHB4KV1cIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRsaW5lLXNtYWxsIG1iLVs1MHB4XVwiPiBVc2VyIERldGFpbHMgPC9oMj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXRhaWxzICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHJvdW5kZWQteGwgcC04IGRhcms6Ymctc2xhdGUtODAwIHctOS8xMiBteC1hdXRvIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWxhcmdlXCI+RnVsbCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LW1lZGl1bVwiPntkZXRhaWxzLmZ1bGxOYW1lfTwvcD5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZSBibG9jayBwdC01XCI+RW1haWw8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHktbWVkaXVtXCI+e2RldGFpbHMuZW1haWx9PC9wPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWxhcmdlIGJsb2NrIHB0LTVcIj5Vc2VyIElkPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5LW1lZGl1bVwiPntkZXRhaWxzLmlkfTwvcD5cblxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1sYXJnZSBibG9jayBwdC01XCI+XG4gICAgICAgICAgICAgICAgICBIaXMgUm9sZToge2RldGFpbHMucm9sZX1cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgey8qIFJlbmRlciBvdGhlciB1c2VyIGRldGFpbHMgc2ltaWxhcmx5ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtMyBhYnNvbHV0ZSBib3R0b20tWy01MHB4XSByaWdodC0wXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50LWJ0blwiPkdvIGJhY2s8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTMgYWJzb2x1dGUgdG9wLVsxMHB4XSByaWdodC1bMTBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWRpdC11c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtYnRuXCI+RWlkdCBVc2VyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGFiZWwiLCJCdXR0b24iLCJMaW5rIiwiYXhpb3NTZWN1cmVJbnN0YW5jZSIsIkxvYWRpbmciLCJkYXRhc2V0IiwiQURNSU5fREVUQUlMU19TTFVHIiwiRWRpdFVzZXJGb3JtIiwiVG9hc3RDb250YWluZXIiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJwYWdlIiwicGFyYW1zIiwiaWQiLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0RGV0YWlscyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZ1bGxOYW1lIiwiZW1haWwiLCJyb2xlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/details/[id]/page.jsx\n"));

/***/ })

});