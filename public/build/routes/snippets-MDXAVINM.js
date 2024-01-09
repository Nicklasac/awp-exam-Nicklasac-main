import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useSubmit,
} from "/build/_shared/chunk-A6RLLCOD.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/posts.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const posts = useLoaderData();
  const submit = useSubmit();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "sm:flex:none md:flex w-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className:
              "shadow-lg bg-gray-100 mr-5 rounded-2xl p-10  sm:w-full md:w-1/4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h1",
                {
                  className: "text-2xl mb-4",
                  children: "Code posts",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts.jsx",
                  lineNumber: 44,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "h2",
                {
                  className: "text-lg mb-3",
                  children: "Select code post:",
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts.jsx",
                  lineNumber: 45,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "ul",
                {
                  className: "",
                  children: posts.map((post) => {
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "li",
                      {
                        className:
                          "text-blue-600 hover:underline  py-2 text-xl",
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime.jsxDEV)(
                          Link,
                          {
                            to: `/posts/${post._id}${location.search}`,
                            className: "focus:font-bold p-1",
                            children: post.title,
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/routes/posts.jsx",
                            lineNumber: 54,
                            columnNumber: 17,
                          },
                          this
                        ),
                      },
                      post._id,
                      false,
                      {
                        fileName: "app/routes/posts.jsx",
                        lineNumber: 50,
                        columnNumber: 15,
                      },
                      this
                    );
                  }),
                },
                void 0,
                false,
                {
                  fileName: "app/routes/posts.jsx",
                  lineNumber: 47,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 43,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className:
              "shadow-lg bg-gray-100 rounded-2xl p-10 sm:w-full md:w-3/4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Outlet,
              {},
              void 0,
              false,
              {
                fileName: "app/routes/posts.jsx",
                lineNumber: 66,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 65,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Form,
          {
            name: "",
            id: "",
            method: "post",
            action: "/logout",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                className:
                  "w-20 inline-block font-bold bg-gray-200 rounded p-2 text-sm text-red-500 hover:text-red-800",
                children: "Logout",
              },
              void 0,
              false,
              {
                fileName: "app/routes/posts.jsx",
                lineNumber: 69,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 68,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts.jsx",
      lineNumber: 42,
      columnNumber: 5,
    },
    this
  );
}
export { Index as default };
//# sourceMappingURL=/build/routes/posts-MDXAVINM.js.map
