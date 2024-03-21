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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/react-label */ \"(app-pages-browser)/./node_modules/@radix-ui/react-label/dist/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var _components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/custom/Loading */ \"(app-pages-browser)/./components/custom/Loading.jsx\");\n/* harmony import */ var _constants_capacity_details_questions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/capacity_details_questions */ \"(app-pages-browser)/./constants/capacity_details_questions.json\");\n/* harmony import */ var _constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constants/apiConstants */ \"(app-pages-browser)/./constants/apiConstants.js\");\n/* harmony import */ var _components_EditUserForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/EditUserForm */ \"(app-pages-browser)/./components/EditUserForm.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst page = (param)=>{\n    let { params: { id } } = param;\n    _s();\n    const [details, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const getDetails = async ()=>{\n        try {\n            // Assuming the `id` passed corresponds to a user._id in your db.json\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_4__.axiosSecureInstance.get((0,_constants_apiConstants__WEBPACK_IMPORTED_MODULE_7__.ADMIN_DETAILS_SLUG)(id));\n            if (response && response.data) {\n                // Since you're getting user details, simply store the user object.\n                setDetails(response.data);\n                console.log(response.data);\n            }\n        } catch (error) {\n            console.error(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[40px] mb-[40px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col justify-center items-center h-[calc(100vh-160px)]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"headline-small mb-[50px]\",\n                    children: \" User Details \"\n                }, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) : details && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-9/12 mx-auto relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                    className: \"label-large\",\n                                    children: \"Full Name\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.fullName\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.email\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: \"User Id\"\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"body-medium\",\n                                    children: details.id\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_12__.Label, {\n                                    className: \"label-large block pt-5\",\n                                    children: [\n                                        \"His Role: \",\n                                        details.role\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end gap-3 absolute bottom-[-50px] right-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            className: \"transparent-btn\",\n                                            children: \"Go back\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-end gap-3 absolute top-[10px] right-[10px]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/edit-user\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            className: \"transparent-btn\",\n                                            children: \"Eidt User\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        variant: \"outline\",\n                                        children: \"Edit Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogContent, {\n                                    className: \"sm:max-w-[425px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogHeader, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogTitle, {\n                                                    children: \"Edit profile\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogDescription, {\n                                                    children: \"Make changes to your profile here. Click save when you're done.\"\n                                                }, void 0, false, {\n                                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid gap-4 py-4\"\n                                        }, void 0, false, {\n                                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/app/(admin)/details/[id]/page.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"B3DF7WybNxEctf9AQbkSPOhHmXA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYWRtaW4pL2RldGFpbHMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNMO0FBQ0U7QUFDbkI7QUFDdUI7QUFDRjtBQUNXO0FBQ0M7QUFDVDtBQUNMO0FBQ0Q7QUFTZjtBQUVoQyxNQUFNbUIsT0FBTztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsRUFBRSxFQUFFLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHckIsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ3NCLFNBQVNDLFdBQVcsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU13QixhQUFhO1FBQ2pCLElBQUk7WUFDRixxRUFBcUU7WUFDckUsTUFBTUMsV0FBVyxNQUFNckIsNkRBQW1CQSxDQUFDc0IsR0FBRyxDQUFDbkIsMkVBQWtCQSxDQUFDWTtZQUVsRSxJQUFJTSxZQUFZQSxTQUFTRSxJQUFJLEVBQUU7Z0JBQzdCLG1FQUFtRTtnQkFDbkVOLFdBQVdJLFNBQVNFLElBQUk7Z0JBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLFNBQVNFLElBQUk7WUFDM0I7UUFDRixFQUFFLE9BQU9HLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNoQixTQUFVO1lBQ1JQLFdBQVc7UUFDYjtJQUNGO0lBRUF4QixnREFBU0EsQ0FBQztRQUNSeUI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUEyQjs7Ozs7O2dCQUN4Q1Ysd0JBQ0MsOERBQUNqQixrRUFBT0E7Ozs7Z0NBRVJlLHlCQUNFOztzQ0FDRSw4REFBQ1c7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDL0IseURBQUtBO29DQUFDK0IsV0FBVTs4Q0FBYzs7Ozs7OzhDQUMvQiw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQWVaLFFBQVFlLFFBQVE7Ozs7Ozs4Q0FFNUMsOERBQUNsQyx5REFBS0E7b0NBQUMrQixXQUFVOzhDQUF5Qjs7Ozs7OzhDQUMxQyw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQWVaLFFBQVFnQixLQUFLOzs7Ozs7OENBRXpDLDhEQUFDbkMseURBQUtBO29DQUFDK0IsV0FBVTs4Q0FBeUI7Ozs7Ozs4Q0FDMUMsOERBQUNFO29DQUFFRixXQUFVOzhDQUFlWixRQUFRRCxFQUFFOzs7Ozs7OENBRXRDLDhEQUFDbEIseURBQUtBO29DQUFDK0IsV0FBVTs7d0NBQXlCO3dDQUM3QlosUUFBUWlCLElBQUk7Ozs7Ozs7OENBSXpCLDhEQUFDTjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzdCLGlEQUFJQTt3Q0FBQ21DLE1BQUs7a0RBQ1QsNEVBQUNwQyx5REFBTUE7NENBQUM4QixXQUFVO3NEQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHeEMsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDN0IsaURBQUlBO3dDQUFDbUMsTUFBSztrREFDVCw0RUFBQ3BDLHlEQUFNQTs0Q0FBQzhCLFdBQVU7c0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxQyw4REFBQ3RCLDBEQUFNQTs7OENBQ0wsOERBQUNNLGlFQUFhQTtvQ0FBQ3VCLE9BQU87OENBQ3BCLDRFQUFDckMseURBQU1BO3dDQUFDc0MsU0FBUTtrREFBVTs7Ozs7Ozs7Ozs7OENBRTVCLDhEQUFDN0IsaUVBQWFBO29DQUFDcUIsV0FBVTs7c0RBQ3ZCLDhEQUFDbEIsZ0VBQVlBOzs4REFDWCw4REFBQ0MsK0RBQVdBOzhEQUFDOzs7Ozs7OERBQ2IsOERBQUNILHFFQUFpQkE7OERBQUM7Ozs7Ozs7Ozs7OztzREFLckIsOERBQUNtQjs0Q0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQztHQXBGTWY7QUFzRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhhZG1pbikvZGV0YWlscy9baWRdL3BhZ2UuanN4P2E4YmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWxhYmVsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgYXhpb3NTZWN1cmVJbnN0YW5jZSB9IGZyb20gXCJAL3V0aWxzL2F4aW9zXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL2N1c3RvbS9Mb2FkaW5nXCI7XG5pbXBvcnQgZGF0YXNldCBmcm9tIFwiQC9jb25zdGFudHMvY2FwYWNpdHlfZGV0YWlsc19xdWVzdGlvbnNcIjtcbmltcG9ydCB7IEFETUlOX0RFVEFJTFNfU0xVRyB9IGZyb20gXCJAL2NvbnN0YW50cy9hcGlDb25zdGFudHNcIjtcbmltcG9ydCBFZGl0VXNlckZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9FZGl0VXNlckZvcm1cIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG4gIERpYWxvZ0Zvb3RlcixcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcblxuY29uc3QgcGFnZSA9ICh7IHBhcmFtczogeyBpZCB9IH0pID0+IHtcbiAgY29uc3QgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZ2V0RGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gQXNzdW1pbmcgdGhlIGBpZGAgcGFzc2VkIGNvcnJlc3BvbmRzIHRvIGEgdXNlci5faWQgaW4geW91ciBkYi5qc29uXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zU2VjdXJlSW5zdGFuY2UuZ2V0KEFETUlOX0RFVEFJTFNfU0xVRyhpZCkpO1xuXG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAvLyBTaW5jZSB5b3UncmUgZ2V0dGluZyB1c2VyIGRldGFpbHMsIHNpbXBseSBzdG9yZSB0aGUgdXNlciBvYmplY3QuXG4gICAgICAgIHNldERldGFpbHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGV0YWlscygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs0MHB4XSBtYi1bNDBweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtW2NhbGMoMTAwdmgtMTYwcHgpXVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGxpbmUtc21hbGwgbWItWzUwcHhdXCI+IFVzZXIgRGV0YWlscyA8L2gyPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGRldGFpbHMgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS0xMDAgcm91bmRlZC14bCBwLTggZGFyazpiZy1zbGF0ZS04MDAgdy05LzEyIG14LWF1dG8gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2VcIj5GdWxsIE5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHktbWVkaXVtXCI+e2RldGFpbHMuZnVsbE5hbWV9PC9wPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWxhcmdlIGJsb2NrIHB0LTVcIj5FbWFpbDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keS1tZWRpdW1cIj57ZGV0YWlscy5lbWFpbH08L3A+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtbGFyZ2UgYmxvY2sgcHQtNVwiPlVzZXIgSWQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHktbWVkaXVtXCI+e2RldGFpbHMuaWR9PC9wPlxuXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWxhcmdlIGJsb2NrIHB0LTVcIj5cbiAgICAgICAgICAgICAgICAgIEhpcyBSb2xlOiB7ZGV0YWlscy5yb2xlfVxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgICB7LyogUmVuZGVyIG90aGVyIHVzZXIgZGV0YWlscyBzaW1pbGFybHkgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIGFic29sdXRlIGJvdHRvbS1bLTUwcHhdIHJpZ2h0LTBcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtYnRuXCI+R28gYmFjazwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtMyBhYnNvbHV0ZSB0b3AtWzEwcHhdIHJpZ2h0LVsxMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lZGl0LXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0cmFuc3BhcmVudC1idG5cIj5FaWR0IFVzZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxEaWFsb2c+XG4gICAgICAgICAgICAgICAgPERpYWxvZ1RyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIj5FZGl0IFByb2ZpbGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0RpYWxvZ1RyaWdnZXI+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XVwiPlxuICAgICAgICAgICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPkVkaXQgcHJvZmlsZTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICBNYWtlIGNoYW5nZXMgdG8geW91ciBwcm9maWxlIGhlcmUuIENsaWNrIHNhdmUgd2hlbiB5b3UncmVcbiAgICAgICAgICAgICAgICAgICAgICBkb25lLlxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGFiZWwiLCJCdXR0b24iLCJMaW5rIiwiYXhpb3NTZWN1cmVJbnN0YW5jZSIsIkxvYWRpbmciLCJkYXRhc2V0IiwiQURNSU5fREVUQUlMU19TTFVHIiwiRWRpdFVzZXJGb3JtIiwiVG9hc3RDb250YWluZXIiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJwYWdlIiwicGFyYW1zIiwiaWQiLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0RGV0YWlscyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImZ1bGxOYW1lIiwiZW1haWwiLCJyb2xlIiwiaHJlZiIsImFzQ2hpbGQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(admin)/details/[id]/page.jsx\n"));

/***/ })

});