import {
  PostForm
} from "/build/_shared/chunk-RA5EZQVR.js";
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Create() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: " pt-20",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostForm, {
      errors: actionData == null ? void 0 : actionData.errors,
      action: "/create",
      error: actionData == null ? void 0 : actionData.error
    }, void 0, false, {
      fileName: "app/routes/create.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/create.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  Create as default
};
//# sourceMappingURL=/build/routes/create-Q6OSR2EO.js.map
