import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import { require_dist } from "/build/_shared/chunk-HKYE5ESO.js";
import "/build/_shared/chunk-GUQG7DWN.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/update.$postId.jsx.jsx
var import_node = __toESM(require_dist());
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostUpdate() {
  var _a, _b, _c, _d;
  const actionData = (0, import_node.useActionData)();
  const post = (0, import_node.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h1",
          {
            children: "Update current post",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts/update.$postId.jsx.jsx",
            lineNumber: 60,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          import_node.Form,
          {
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "title",
                  className: "block",
                  children: "Title",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 62,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "title",
                  defaultValue:
                    (_a =
                      actionData == null ? void 0 : actionData.values.title) !=
                    null
                      ? _a
                      : post.title,
                  id: "title",
                  className: (
                    actionData == null ? void 0 : actionData.errors.title
                  )
                    ? "border-2 border-red-500"
                    : null,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 65,
                  columnNumber: 9,
                },
                this
              ),
              (actionData == null ? void 0 : actionData.errors.title) &&
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "p",
                  {
                    className: "text-red-500",
                    children: actionData.errors.title.message,
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/posts/update.$postId.jsx.jsx",
                    lineNumber: 75,
                    columnNumber: 11,
                  },
                  this
                ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "language",
                  className: "block",
                  children: "Language",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 78,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "language",
                  defaultValue:
                    (_b =
                      actionData == null
                        ? void 0
                        : actionData.values.language) != null
                      ? _b
                      : post.language,
                  id: "language",
                  className: (
                    actionData == null ? void 0 : actionData.errors.language
                  )
                    ? "border-2 border-red-500"
                    : null,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 81,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "description",
                  className: "block",
                  children: "Description",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 90,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "textarea",
                {
                  type: "text",
                  name: "description",
                  defaultValue:
                    (_c =
                      actionData == null
                        ? void 0
                        : actionData.values.description) != null
                      ? _c
                      : post.description,
                  id: "description",
                  className: (
                    actionData == null ? void 0 : actionData.errors.description
                  )
                    ? "border-2 border-red-500"
                    : null,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 93,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "post",
                  className: "block",
                  children: "Post",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 102,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "textarea",
                {
                  type: "text",
                  name: "post",
                  defaultValue:
                    (_d =
                      actionData == null ? void 0 : actionData.values.post) !=
                    null
                      ? _d
                      : post.post,
                  id: "post",
                  className: (
                    actionData == null ? void 0 : actionData.errors.post
                  )
                    ? "border-2 border-red-500"
                    : null,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 105,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "br",
                {},
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 114,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  className:
                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10",
                  type: "submit",
                  children: "Save",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/update.$postId.jsx.jsx",
                  lineNumber: 115,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/update.$postId.jsx.jsx",
            lineNumber: 61,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/update.$postId.jsx.jsx",
      lineNumber: 59,
      columnNumber: 5,
    },
    this
  );
}
export { PostUpdate as default };
//# sourceMappingURL=/build/routes/posts/update.$postId.jsx-VPR44LFC.js.map
