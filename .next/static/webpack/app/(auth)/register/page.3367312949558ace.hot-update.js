"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register/page",{

/***/ "(app-pages-browser)/./components/Register.jsx":
/*!*********************************!*\
  !*** ./components/Register.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_custom_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/custom/Form */ \"(app-pages-browser)/./components/custom/Form.jsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"(app-pages-browser)/./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/axios */ \"(app-pages-browser)/./utils/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/service */ \"(app-pages-browser)/./utils/service.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Register() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const formFields = [\n        {\n            label: \"Name\",\n            name: \"name\",\n            type: \"name\",\n            id: \"name\",\n            placeholder: \"Type your name\",\n            required: true,\n            error: \"name is required\"\n        },\n        {\n            label: \"Email\",\n            name: \"email\",\n            type: \"email\",\n            id: \"email\",\n            placeholder: \"Type email here\",\n            required: true,\n            error: \"email is required\"\n        },\n        {\n            label: \"Password\",\n            name: \"password\",\n            type: \"password\",\n            id: \"password\",\n            placeholder: \"Type password\",\n            required: true,\n            error: \"password is required\"\n        },\n        {\n            label: \"Confirm Password\",\n            name: \"confirm-password\",\n            type: \"password\",\n            id: \"confirmPassword\",\n            placeholder: \"Type password\",\n            required: true,\n            error: \"please re type password\"\n        }\n    ];\n    const handleFormSubmit = (formData)=>{\n        // Handle form submission logic here based on the form data\n        (async ()=>{\n            try {\n                if (formData.password !== formData.confirmPassword) {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning(\"password doesnt match\");\n                } else if (!(0,_utils_service__WEBPACK_IMPORTED_MODULE_6__.validatePassword)(formData.password)) {\n                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warning(\"Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number\");\n                } else {\n                    // const response = await axiosSecureInstance.post(\"auth/register\", {\n                    //   fullName: formData.name,\n                    //   email: formData.email,\n                    //   password: formData.password,\n                    //   role: \"ADMIN\",\n                    // });\n                    const response = await axiosLocal.post(\"/users\", newUser);\n                    if ((response === null || response === void 0 ? void 0 : response.status) == 201) {\n                        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"admin registered successful. Please check your email to activate your account\");\n                        setTimeout(()=>{\n                            router.push(\"/login\");\n                        }, 2000);\n                    }\n                }\n            } catch (err) {\n                var _err_response;\n                if (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.status) === 401) {\n                    //   setShowToster(true);\n                    const error = err.response.data.message;\n                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);\n                } else {\n                    const error = err.response.data.error;\n                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error);\n                }\n            }\n        })();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_custom_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            formTitle: \"Register\",\n            formFields: formFields,\n            onSubmit: handleFormSubmit,\n            buttonText: \"Submit\"\n        }, void 0, false, {\n            fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/components/Register.jsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/rajon/SSD DATA/Reusable-NextJS-Admin-Dashboard/components/Register.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Register, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDUTtBQUNLO0FBQ1M7QUFDVjtBQUNwQyxTQUFTTTs7SUFDdEIsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU1LLGFBQWE7UUFDakI7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxhQUFhO1lBQ2JDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxhQUFhO1lBQ2JDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxhQUFhO1lBQ2JDLFVBQVU7WUFDVkMsT0FBTztRQUNUO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxhQUFhO1lBQ2JDLFVBQVU7WUFDVkMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEIsMkRBQTJEO1FBQzFEO1lBQ0MsSUFBSTtnQkFDRixJQUFJQSxTQUFTQyxRQUFRLEtBQUtELFNBQVNFLGVBQWUsRUFBRTtvQkFDbERsQixpREFBS0EsQ0FBQ21CLE9BQU8sQ0FBQztnQkFDaEIsT0FBTyxJQUFJLENBQUNmLGdFQUFnQkEsQ0FBQ1ksU0FBU0MsUUFBUSxHQUFHO29CQUMvQ2pCLGlEQUFLQSxDQUFDbUIsT0FBTyxDQUNYO2dCQUVKLE9BQU87b0JBRUwscUVBQXFFO29CQUNyRSw2QkFBNkI7b0JBQzdCLDJCQUEyQjtvQkFDM0IsaUNBQWlDO29CQUNqQyxtQkFBbUI7b0JBQ25CLE1BQU07b0JBRU4sTUFBTUMsV0FBVyxNQUFNQyxXQUFXQyxJQUFJLENBQUMsVUFBVUM7b0JBRWpELElBQUlILENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVUksTUFBTSxLQUFJLEtBQUs7d0JBQzNCeEIsaURBQUtBLENBQUN5QixPQUFPLENBQ1g7d0JBRUZDLFdBQVc7NEJBQ1RwQixPQUFPcUIsSUFBSSxDQUFDO3dCQUNkLEdBQUc7b0JBQ0w7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9DLEtBQUs7b0JBQ1JBO2dCQUFKLElBQUlBLEVBQUFBLGdCQUFBQSxJQUFJUixRQUFRLGNBQVpRLG9DQUFBQSxjQUFjSixNQUFNLE1BQUssS0FBSztvQkFDaEMseUJBQXlCO29CQUN6QixNQUFNVixRQUFRYyxJQUFJUixRQUFRLENBQUNTLElBQUksQ0FBQ0MsT0FBTztvQkFDdkM5QixpREFBS0EsQ0FBQ2MsS0FBSyxDQUFDQTtnQkFDZCxPQUFPO29CQUNMLE1BQU1BLFFBQVFjLElBQUlSLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDZixLQUFLO29CQUNyQ2QsaURBQUtBLENBQUNjLEtBQUssQ0FBQ0E7Z0JBQ2Q7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2lCO2tCQUNDLDRFQUFDaEMsK0RBQUlBO1lBQ0hpQyxXQUFVO1lBQ1Z6QixZQUFZQTtZQUNaMEIsVUFBVWxCO1lBQ1ZtQixZQUFXOzs7Ozs7Ozs7OztBQUluQjtHQTlGd0I3Qjs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/NDQwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9jdXN0b20vRm9ybSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgeyBheGlvc1NlY3VyZUluc3RhbmNlIH0gZnJvbSAnQC91dGlscy9heGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnQC91dGlscy9zZXJ2aWNlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgdHlwZTogJ25hbWUnLFxuICAgICAgaWQ6ICduYW1lJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSB5b3VyIG5hbWUnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlcnJvcjogJ25hbWUgaXMgcmVxdWlyZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgIGlkOiAnZW1haWwnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIGVtYWlsIGhlcmUnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlcnJvcjogJ2VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBpZDogJ3Bhc3N3b3JkJyxcbiAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSBwYXNzd29yZCcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGVycm9yOiAncGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdDb25maXJtIFBhc3N3b3JkJyxcbiAgICAgIG5hbWU6ICdjb25maXJtLXBhc3N3b3JkJyxcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICBpZDogJ2NvbmZpcm1QYXNzd29yZCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ1R5cGUgcGFzc3dvcmQnLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlcnJvcjogJ3BsZWFzZSByZSB0eXBlIHBhc3N3b3JkJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZm9ybURhdGEpID0+IHtcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmUgYmFzZWQgb24gdGhlIGZvcm0gZGF0YVxuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgIHRvYXN0Lndhcm5pbmcoXCJwYXNzd29yZCBkb2VzbnQgbWF0Y2hcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkYXRlUGFzc3dvcmQoZm9ybURhdGEucGFzc3dvcmQpKSB7XG4gICAgICAgICAgdG9hc3Qud2FybmluZyhcbiAgICAgICAgICAgIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBhdCBsZWFzdCAxIHVwcGVyY2FzZSBsZXR0ZXIgYW5kIDEgbnVtYmVyXCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NTZWN1cmVJbnN0YW5jZS5wb3N0KFwiYXV0aC9yZWdpc3RlclwiLCB7XG4gICAgICAgICAgLy8gICBmdWxsTmFtZTogZm9ybURhdGEubmFtZSxcbiAgICAgICAgICAvLyAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICAvLyAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcbiAgICAgICAgICAvLyAgIHJvbGU6IFwiQURNSU5cIixcbiAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NMb2NhbC5wb3N0KFwiL3VzZXJzXCIsIG5ld1VzZXIpO1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlPy5zdGF0dXMgPT0gMjAxKSB7XG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFxuICAgICAgICAgICAgICBcImFkbWluIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgdG8gYWN0aXZhdGUgeW91ciBhY2NvdW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIC8vICAgc2V0U2hvd1Rvc3Rlcih0cnVlKTtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3I7XG4gICAgICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybVxuICAgICAgICBmb3JtVGl0bGU9XCJSZWdpc3RlclwiXG4gICAgICAgIGZvcm1GaWVsZHM9e2Zvcm1GaWVsZHN9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fVxuICAgICAgICBidXR0b25UZXh0PVwiU3VibWl0XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRm9ybSIsInRvYXN0IiwiYXhpb3NTZWN1cmVJbnN0YW5jZSIsInVzZVJvdXRlciIsInVzZVNlYXJjaFBhcmFtcyIsInZhbGlkYXRlUGFzc3dvcmQiLCJSZWdpc3RlciIsInJvdXRlciIsImZvcm1GaWVsZHMiLCJsYWJlbCIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZXJyb3IiLCJoYW5kbGVGb3JtU3VibWl0IiwiZm9ybURhdGEiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsIndhcm5pbmciLCJyZXNwb25zZSIsImF4aW9zTG9jYWwiLCJwb3N0IiwibmV3VXNlciIsInN0YXR1cyIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwicHVzaCIsImVyciIsImRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiZm9ybVRpdGxlIiwib25TdWJtaXQiLCJidXR0b25UZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Register.jsx\n"));

/***/ })

});