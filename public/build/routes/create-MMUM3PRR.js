import {
  ProductForm,
  require_sendNotification
} from "/build/_shared/chunk-UWQDXR45.js";
import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  useActionData
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/create.jsx
var import_connectDb = __toESM(require_connectDb());
var import_sendNotification = __toESM(require_sendNotification());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Create() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductForm, {
      errors: actionData == null ? void 0 : actionData.errors,
      action: "/create",
      error: actionData == null ? void 0 : actionData.error
    }, void 0, false, {
      fileName: "app/routes/create.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/create.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  Create as default
};
//# sourceMappingURL=/build/routes/create-MMUM3PRR.js.map