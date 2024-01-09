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

// app/components/formElements.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Label({ htmlFor, className, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
    htmlFor,
    className: ["pointer mb-1 block font-semibold", className != null ? className : ""].join(
      " "
    ),
    children
  }, void 0, false, {
    fileName: "app/components/formElements.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
function Input({
  type = "text",
  name,
  id = name,
  placeholder,
  className,
  defaultValue,
  defaultChecked,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
    type,
    name,
    id,
    placeholder,
    defaultValue,
    defaultChecked,
    ...rest,
    className: [
      "rounded border border-slate-200 py-2 px-3",
      className != null ? className : ""
    ].join(" ")
  }, void 0, false, {
    fileName: "app/components/formElements.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function Button({ type = "submit", children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    type,
    className: "rounded bg-blue-600 py-2 px-3 text-white transition-colors hover:bg-blue-700",
    children
  }, void 0, false, {
    fileName: "app/components/formElements.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function ErrorMessage({ children }) {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-3 rounded border border-amber-500 bg-amber-50 p-2 text-sm  text-amber-500",
    children
  }, void 0, false, {
    fileName: "app/components/formElements.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

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
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
            type: "text",
            name: "email",
            id: "email",
            placeholder: "Email"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
            htmlFor: "password",
            children: "Password"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Password",
            defaultValue: (_a = dataAction == null ? void 0 : dataAction.values) == null ? void 0 : _a.password
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
            htmlFor: "passwordConfirm",
            children: "Confirm Password"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
            type: "password",
            name: "passwordConfirm",
            id: "passwordConfirm",
            placeholder: "Repeat Password",
            defaultValue: (_b = dataAction == null ? void 0 : dataAction.values) == null ? void 0 : _b.passwordConfirm
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ErrorMessage, {
            children: dataAction == null ? void 0 : dataAction.errorMessage
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 69,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
            type: "submit",
            children: "Sign Up"
          }, void 0, false, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 70,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-3FW4A2TT.js.map
