import { require_connectDb } from "/build/_shared/chunk-HRYQ3XOG.js";
import { Form, useActionData } from "/build/_shared/chunk-A6RLLCOD.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/new.jsx
var import_connectDb = __toESM(require_connectDb());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CreatePost() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h1",
          {
            className: "text-xl",
            children: "Create code post",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 41,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Form,
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
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 43,
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
                    actionData == null ? void 0 : actionData.values.title,
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
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 46,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "language",
                  className: "block",
                  children: "Programming language",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 55,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "select",
                {
                  defaultValue:
                    actionData == null ? void 0 : actionData.values.language,
                  name: "language",
                  id: "language",
                  className:
                    "form-select form-select-sm\n          appearance-none\n          block\n          px-2\n          py-1\n          text-sm\n          font-normal\n          text-gray-700\n          bg-white bg-clip-padding bg-no-repeat\n          border border-solid border-gray-300\n          rounded\n          transition\n          ease-in-out\n          m-0\n          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "",
                        children: "Select language",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 79,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "HTML",
                        children: "HTML",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 80,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "CSS",
                        children: "CSS",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 81,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "Javascript",
                        children: "Javascript",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 82,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "C#",
                        children: "C#",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 83,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "Python",
                        children: "Python",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 84,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "Php",
                        children: "Php",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 85,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "option",
                      {
                        value: "Other language",
                        children: "Other language",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 86,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 59,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "post",
                  className: "block",
                  children: "Code post",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 88,
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
                    actionData == null ? void 0 : actionData.values.post,
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
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 91,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "description",
                  className: "block",
                  children: "Code description",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 100,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  type: "text",
                  name: "description",
                  defaultValue:
                    actionData == null ? void 0 : actionData.values.description,
                  id: "description",
                  className: `resize-y
            ${
              (actionData == null ? void 0 : actionData.errors.description)
                ? "border-2 border-red-500"
                : null
            }
          `,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 103,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "label",
                {
                  htmlFor: "image",
                  className: "block",
                  children: "Image",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 113,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  type: "file",
                  name: "image",
                  id: "image",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 116,
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
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 119,
                    columnNumber: 11,
                  },
                  this
                ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "br",
                {},
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 121,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  className:
                    "shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mt-10",
                  type: "submit",
                  children: "Create new post",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/new.jsx",
                  lineNumber: 122,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 42,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/new.jsx",
      lineNumber: 40,
      columnNumber: 5,
    },
    this
  );
}
export { CreatePost as default };
//# sourceMappingURL=/build/routes/posts/new-RB6254XP.js.map
