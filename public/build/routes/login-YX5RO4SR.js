import {
  require_bcrypt
} from "/build/_shared/chunk-OK6NPHXX.js";
import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/login.jsx
var import_connectDb = __toESM(require_connectDb());
var import_bcryptjs = __toESM(require_bcrypt());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-20",
    children: (loaderData == null ? void 0 : loaderData.user) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "You are logged in as: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
              children: loaderData.user.username
            }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 26,
              columnNumber: 35
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/login.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          to: "/settings",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "buttonPrimary",
            children: "Settings"
          }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          method: "post",
          action: "/logout",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            className: "buttonSecondary",
            children: "Log out"
          }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/login.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center pb-5 font-bold text-xl",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "p-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
              className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  className: "block p-5",
                  htmlFor: "username",
                  children: "Username"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 46,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  id: "username",
                  name: "username"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 49,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 50,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "password",
                  id: "password",
                  name: "password"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 51,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  children: "Login"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 52,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this),
                (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: actionData == null ? void 0 : actionData.errorMessage
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 55,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  style: { textAlign: "center" },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                    children: [
                      "Don't have an account? ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 59,
                        columnNumber: 44
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                        to: "/signup",
                        style: { color: "blue" },
                        children: "Sign up here"
                      }, void 0, false, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 60,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 58,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 57,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/login.jsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/login.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-YX5RO4SR.js.map
