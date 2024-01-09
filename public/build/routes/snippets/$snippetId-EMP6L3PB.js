import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import {
  Link,
  useCatch,
  useLoaderData,
} from "/build/_shared/chunk-6VNT3NEL.js";
import "/build/_shared/chunk-HKYE5ESO.js";
import "/build/_shared/chunk-GUQG7DWN.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/$postId.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostPage() {
  const post = useLoaderData();
  const dateTime = new Date(post.timeCreated);
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "h1",
                    {
                      className: "text-2xl font-bold",
                      children: [
                        post.title,
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "div",
                          {
                            className: "float-right",
                            children: /* @__PURE__ */ (0,
                            import_jsx_dev_runtime.jsxDEV)(
                              "form",
                              {
                                method: "POST",
                                children: [
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                    "input",
                                    {
                                      type: "hidden",
                                      name: "_method",
                                      value: "favorite",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/routes/posts/$postId.jsx",
                                      lineNumber: 55,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                    "button",
                                    {
                                      type: "submit",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/routes/posts/$postId.jsx",
                                      lineNumber: 56,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "app/routes/posts/$postId.jsx",
                                lineNumber: 54,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 53,
                            columnNumber: 13,
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "span",
                          {
                            className: "text-xl font-normal",
                            children: [" - ", post.language],
                          },
                          void 0,
                          true,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 59,
                            columnNumber: 13,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/posts/$postId.jsx",
                      lineNumber: 50,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 49,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  children: ["Added ", `${date}/${month}`],
                },
                void 0,
                true,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 62,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  className: "italic",
                  children: ["- ", post.description],
                },
                void 0,
                true,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 63,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "pre",
                {
                  className:
                    "text-green-600 bg-gray-800 p-6 mt-4 whitespace-normal",
                  children: post.post,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 64,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 48,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "flex justify-between items-center mt-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "form",
                {
                  method: "POST",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "input",
                      {
                        type: "hidden",
                        name: "_method",
                        value: "delete",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/$postId.jsx",
                        lineNumber: 75,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "button",
                      {
                        className:
                          "bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded",
                        children: "Delete post",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/$postId.jsx",
                        lineNumber: 76,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 74,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "float-right",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "form",
                    {
                      method: "POST",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "input",
                          {
                            type: "hidden",
                            name: "_method",
                            value: "update",
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 83,
                            columnNumber: 13,
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          Link,
                          {
                            className: "hover:underline",
                            to: `/posts/update/${post._id}`,
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 84,
                            columnNumber: 13,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/routes/posts/$postId.jsx",
                      lineNumber: 82,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 81,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 73,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 47,
      columnNumber: 5,
    },
    this
  );
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h1",
          {
            children: [caught.status, " ", caught.statusText],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 99,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h2",
          {
            children: caught.data,
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts/$postId.jsx",
            lineNumber: 102,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 98,
      columnNumber: 5,
    },
    this
  );
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "h1",
    {
      className: "text-red-500 font-bold",
      children: [error.name, ": ", error.message],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/$postId.jsx",
      lineNumber: 109,
      columnNumber: 5,
    },
    this
  );
}
export { CatchBoundary, ErrorBoundary, PostPage as default };
//# sourceMappingURL=/build/routes/posts/$postId-EMP6L3PB.js.map
