import {
  require_connectDb_server
} from "/build/_shared/chunk-2RREV2JK.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-A6RLLCOD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/update.$Id.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SnippetUpdate() {
  var _a, _b, _c;
  const actionData = useActionData();
  const snippet = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-xl",
        children: "Update current snippet"
      }, void 0, false, {
        fileName: "app/routes/posts/update.$Id.jsx",
        lineNumber: 55,
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
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "text",
            name: "title",
            defaultValue: (_a = actionData == null ? void 0 : actionData.values.title) != null ? _a : snippet.title,
            id: "title",
            className: (actionData == null ? void 0 : actionData.errors.title) ? "border-2 border-red-500" : null
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          (actionData == null ? void 0 : actionData.errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-red-500",
            children: actionData.errors.title.message
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 70,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            type: "text",
            name: "description",
            defaultValue: (_b = actionData == null ? void 0 : actionData.values.description) != null ? _b : snippet.description,
            id: "description",
            className: (actionData == null ? void 0 : actionData.errors.description) ? "border-2 border-red-500" : null
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "snippet",
            className: "block",
            children: "Tekst"
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            type: "text",
            maxLength: 500,
            name: "snippet",
            defaultValue: (_c = actionData == null ? void 0 : actionData.values.snippet) != null ? _c : snippet.snippet,
            id: "snippet",
            className: (actionData == null ? void 0 : actionData.errors.snippet) ? "border-2 border-red-500" : null
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
            htmlFor: "image",
            className: "block",
            children: "Image"
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "file",
            name: "image",
            id: "image"
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          (actionData == null ? void 0 : actionData.errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-red-500",
            children: actionData.errors.title.message
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 101,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 103,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-10",
            type: "submit",
            children: "Save"
          }, void 0, false, {
            fileName: "app/routes/posts/update.$Id.jsx",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/posts/update.$Id.jsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/posts/update.$Id.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
export {
  SnippetUpdate as default
};
//# sourceMappingURL=/build/routes/posts/update.$Id-2UTK6HNR.js.map
