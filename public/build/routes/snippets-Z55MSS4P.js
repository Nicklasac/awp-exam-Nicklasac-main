import { Link, Outlet } from "/build/_shared/chunk-SW6QLKHY.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-3CPB4T5C.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/posts.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function posts() {
  let postList = ["my post 1", "my post 2", "my post 3"];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/",
            children: "Home",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 8,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h1",
          {
            children: "Posts",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 9,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "p",
          {
            children: "Here is my posts:",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 10,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "ul",
          {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "li",
              {},
              void 0,
              false,
              {
                fileName: "app/routes/posts.jsx",
                lineNumber: 12,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 11,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Outlet,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/posts.jsx",
            lineNumber: 14,
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
      lineNumber: 7,
      columnNumber: 5,
    },
    this
  );
}
export { posts as default };
//# sourceMappingURL=/build/routes/posts-Z55MSS4P.js.map
