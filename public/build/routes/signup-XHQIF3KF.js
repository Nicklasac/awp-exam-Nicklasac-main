import {
  require_bcrypt
} from "/build/_shared/chunk-OK6NPHXX.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-DC6UERZ7.js";
import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
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
        className: "text-center pb-5 font-bold text-xl",
        children: "Sign Up"
      }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 49,
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
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "text",
              id: "username",
              name: "username"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "password",
              id: "password",
              name: "password",
              defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.password
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "confirmPassword",
              children: "Confirm Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "password",
              id: "confirmPassword",
              name: "confirmPassword"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
                children: "Sign Up"
              }, void 0, false, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 92,
              columnNumber: 11
            }, this),
            actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-red-500",
              children: "User not found or password didn't match"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                className: "pb-5",
                children: [
                  "Already have an account? ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 101,
                    columnNumber: 40
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    className: " text-sky-600",
                    to: "/login",
                    children: "Log in here"
                  }, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 102,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 100,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 99,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
export {
  SignUp as default
};
//# sourceMappingURL=/build/routes/signup-XHQIF3KF.js.map
