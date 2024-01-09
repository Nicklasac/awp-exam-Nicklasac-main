import {
  useLoaderData
} from "/build/_shared/chunk-JUOXWXKY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BPQL3L3K.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/login.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Login"
      }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: JSON.stringify(data, null, 2)
      }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FORM, {
        method: "POST",
        action: "/login",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            children: [
              "Email",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "email",
                name: "email"
              }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 20,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 18,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            children: [
              "Password",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "password",
                name: "password"
              }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 24,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-24OQUIKO.js.map
