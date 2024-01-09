import {
  require_bcrypt
} from "/build/_shared/chunk-OK6NPHXX.js";
import {
  require_connectDb_server
} from "/build/_shared/chunk-2RREV2JK.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-A6RLLCOD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// empty-module:../sessions.server
var require_sessions = __commonJS({
  "empty-module:../sessions.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/Login.jsx
var import_sessions = __toESM(require_sessions());
var import_connectDb_server = __toESM(require_connectDb_server());
var import_bcryptjs = __toESM(require_bcrypt());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const { userId } = useLoaderData();
  console.log(userId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
        children: JSON.stringify(userId)
      }, void 0, false, {
        fileName: "app/routes/Login.jsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/routes/Login.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      !userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        name: "",
        id: "",
        className: "flex flex-col w-1/3",
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            children: "Email"
          }, void 0, false, {
            fileName: "app/routes/Login.jsx",
            lineNumber: 53,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            name: "email",
            id: "email",
            type: "text"
          }, void 0, false, {
            fileName: "app/routes/Login.jsx",
            lineNumber: 54,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            children: "Password"
          }, void 0, false, {
            fileName: "app/routes/Login.jsx",
            lineNumber: 55,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            name: "password",
            id: "password",
            type: "password"
          }, void 0, false, {
            fileName: "app/routes/Login.jsx",
            lineNumber: 56,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            className: "w-20 inline-block align-baseline font-bold bg-gray-200 rounded p-2 text-sm text-blue-500 hover:text-blue-800",
            children: "Login"
          }, void 0, false, {
            fileName: "app/routes/Login.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/Login.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        name: "",
        id: "",
        method: "post",
        action: "/logout",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "w-20 inline-block align-baseline font-bold bg-gray-200 rounded p-2 text-sm text-red-500 hover:text-red-800",
          children: "Logout"
        }, void 0, false, {
          fileName: "app/routes/Login.jsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/Login.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/Login.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
export {
  Login as default
};
//# sourceMappingURL=/build/routes/Login-43QC5RUB.js.map
