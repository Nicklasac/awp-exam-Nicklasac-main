import {
  PostForm
} from "/build/_shared/chunk-5QPXQXPN.js";
import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
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

// app/routes/$postId.edit.jsx
var import_connectDb = __toESM(require_connectDb());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Edit() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostForm, {
        errors: actionData == null ? void 0 : actionData.errors,
        action: `/${loaderData.data._id}/edit`,
        post: loaderData == null ? void 0 : loaderData.data,
        error: actionData == null ? void 0 : actionData.error
      }, void 0, false, {
        fileName: "app/routes/$postId.edit.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: `/${loaderData == null ? void 0 : loaderData.data._id}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "buttonPrimary",
          children: "Go back"
        }, void 0, false, {
          fileName: "app/routes/$postId.edit.jsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/$postId.edit.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/$postId.edit.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
export {
  Edit as default
};
//# sourceMappingURL=/build/routes/$postId.edit-URLZGTO5.js.map
