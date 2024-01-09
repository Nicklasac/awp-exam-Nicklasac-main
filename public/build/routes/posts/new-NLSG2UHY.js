import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-A6RLLCOD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/new.jsx
var import_connectDb = __toESM(require_connectDb());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CreatePost() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-xl",
        children: "Create code post"
      }, void 0, false, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "title",
            className: "block",
            children: "Title"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "text",
            name: "title",
            defaultValue: actionData == null ? void 0 : actionData.values.title,
            id: "title",
            className: (actionData == null ? void 0 : actionData.errors.title) ? "border-2 border-red-500" : null
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "tekst",
            className: "block",
            children: "Text"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            type: "text",
            maxLength: 500,
            name: "tekst",
            defaultValue: actionData == null ? void 0 : actionData.values.post,
            id: "tekst",
            className: (actionData == null ? void 0 : actionData.errors.post) ? "border-2 border-red-500" : null
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "image",
            className: "block",
            children: "Image"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "text",
            name: "image",
            id: "image",
            value: image,
            onChange: (e) => setImage(e.target.value)
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          (errors == null ? void 0 : errors.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "errorText",
            children: errors.image.message
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 78,
            columnNumber: 27
          }, this),
          (actionData == null ? void 0 : actionData.errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-red-500",
            children: actionData.errors.title.message
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 81,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-10",
            type: "submit",
            children: "Create new post"
          }, void 0, false, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/new.jsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/new.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  CreatePost as default
};
//# sourceMappingURL=/build/routes/posts/new-NLSG2UHY.js.map
