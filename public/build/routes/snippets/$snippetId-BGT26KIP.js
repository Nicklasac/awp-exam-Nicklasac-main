import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import {
  Link,
  useCatch,
  useLoaderData,
} from "/build/_shared/chunk-A6RLLCOD.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts/$postId.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostPage() {
  const post = useLoaderData();
  const dateTime = new Date(post.createdAt);
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const timeCreated = dateTime.toLocaleTimeString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h1",
                {
                  className: "text-2xl font-bold",
                  children: loaderData.user.username,
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 50,
                  columnNumber: 9,
                },
                this
              ),
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
                                      lineNumber: 57,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime.jsxDEV)(
                                    "button",
                                    {
                                      type: "submit",
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                        "svg",
                                        {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          className: "h-6 w-6",
                                          fill: post.favorite ? "red" : "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: 2,
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime.jsxDEV)(
                                            "path",
                                            {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "app/routes/posts/$postId.jsx",
                                              lineNumber: 67,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "app/routes/posts/$postId.jsx",
                                          lineNumber: 59,
                                          columnNumber: 19,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/routes/posts/$postId.jsx",
                                      lineNumber: 58,
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
                                lineNumber: 56,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 55,
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
                            lineNumber: 76,
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
                      lineNumber: 53,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 52,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "p",
                {
                  children: ["Added ", `${date}/${month}/${timeCreated}`],
                },
                void 0,
                true,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 79,
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
                  lineNumber: 80,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "pre",
                {
                  className:
                    "text-blue-600 rounded-2xl bg-gray-800 p-6 mt-4 whitespace-normal",
                  children: post.post,
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
            lineNumber: 49,
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
                        lineNumber: 92,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "button",
                      {
                        className:
                          "shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded",
                        children: "Delete post",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/routes/posts/$postId.jsx",
                        lineNumber: 93,
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
                  lineNumber: 91,
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
                            lineNumber: 100,
                            columnNumber: 13,
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          Link,
                          {
                            className: "hover:underline",
                            to: `/posts/update/${post._id}`,
                            children: /* @__PURE__ */ (0,
                            import_jsx_dev_runtime.jsxDEV)(
                              "button",
                              {
                                className:
                                  "shadow-lg bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded",
                                children: "Update post",
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/posts/$postId.jsx",
                                lineNumber: 105,
                                columnNumber: 15,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts/$postId.jsx",
                            lineNumber: 101,
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
                      lineNumber: 99,
                      columnNumber: 11,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts/$postId.jsx",
                  lineNumber: 98,
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
            lineNumber: 90,
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
      lineNumber: 48,
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
            lineNumber: 120,
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
            lineNumber: 123,
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
      lineNumber: 119,
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
      lineNumber: 130,
      columnNumber: 5,
    },
    this
  );
}
export { CatchBoundary, ErrorBoundary, PostPage as default };
//# sourceMappingURL=/build/routes/posts/$postId-BGT26KIP.js.map
