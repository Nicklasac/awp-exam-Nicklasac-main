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
} from "/build/_shared/chunk-A6RLLCOD.js";
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
    className: "page",
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
          className: "signup-form",
          method: "post",
          reloadDocument: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "username",
              children: "Username"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "text",
              id: "username",
              name: "username"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 52,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "password",
              children: "Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "password",
              id: "password",
              name: "password",
              defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.password
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "confirmPassword",
              children: "Confirm Password"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "password",
              id: "confirmPassword",
              name: "confirmPassword"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              children: "Sign Up"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-red-500",
              children: "User not found or password didn't match"
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 69,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              style: { textAlign: "center" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                children: [
                  "Already have an account? ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 72,
                    columnNumber: 40
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    to: "/login",
                    style: { color: "blue" },
                    children: "Log in here"
                  }, void 0, false, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 73,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 70,
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
//# sourceMappingURL=/build/routes/signup-OM4O5VCP.js.map
