import {
  require_bcrypt
} from "/build/_shared/chunk-OK6NPHXX.js";
import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/signup.jsx
var import_connectDb = __toESM(require_connectDb());
var import_bcryptjs = __toESM(require_bcrypt());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SignUp() {
  var _a;
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page pt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-center",
        children: "Sign Up"
      }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
          method: "post",
          reloadDocument: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "username",
              children: "Username"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 55,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              id: "username",
              name: "username"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "password",
              id: "password",
              name: "password",
              defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.password
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "confirmPassword",
              children: "Confirm Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: "block",
              type: "password",
              id: "confirmPassword",
              name: "confirmPassword"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 71,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
              type: "submit",
              children: "Sign Up"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 83,
              columnNumber: 11
            }, this),
            actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-red-500",
              children: "User not found or password didn't match"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 85,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 89,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              style: { textAlign: "center" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                children: [
                  "Already have an account? ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 92,
                    columnNumber: 40
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: "/login",
                    style: { color: "blue" },
                    children: "Log in here"
                  }, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 93,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 91,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 90,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-XROMQ3W5.js.map
