import {
  require_connectDb_server
} from "/build/_shared/chunk-2RREV2JK.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-MZG4UU3W.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/signup.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SignUp() {
  var _a, _b;
  const dataAction = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "mb-1 text-lg font-bold",
        children: "SignUp"
      }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            htmlFor: "username",
            children: "Username"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            type: "text",
            name: "username",
            id: "username",
            placeholder: "Username"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Password",
            defaultValue: (_a = dataAction == null ? void 0 : dataAction.values) == null ? void 0 : _a.password
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            htmlFor: "passwordConfirm",
            children: "Confirm Password"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            type: "password",
            name: "passwordConfirm",
            id: "passwordConfirm",
            placeholder: "Repeat Password",
            defaultValue: (_b = dataAction == null ? void 0 : dataAction.values) == null ? void 0 : _b.passwordConfirm
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            children: dataAction == null ? void 0 : dataAction.errorMessage
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(void 0, {
            type: "submit",
            children: "Sign Up"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-X33PNAKZ.js.map
