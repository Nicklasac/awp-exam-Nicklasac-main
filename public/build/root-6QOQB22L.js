import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "/build/_shared/chunk-A6RLLCOD.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WUYDMLJP.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default,
  },
];
function meta() {
  return {
    charset: "utf-8",
    title: "awp-exam",
    viewport: "width=device-width,initial-scale=1",
  };
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "html",
    {
      lang: "en",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "head",
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Meta,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 31,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Links,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 32,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/root.jsx",
            lineNumber: 30,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "body",
          {
            className: " text-slate-800 font-sans p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "header",
                {
                  className: "pb-3 mb-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Link,
                      {
                        to: "/",
                        className:
                          "hover:underline focus:font-bold text-blue-600",
                        children: "Posts |",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/root.jsx",
                        lineNumber: 36,
                        columnNumber: 11,
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      Link,
                      {
                        to: "/posts/new",
                        className:
                          "ml-3 hover:underline focus:font-bold text-blue-600",
                        children: "Add new",
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/root.jsx",
                        lineNumber: 43,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 35,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Outlet,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 50,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                ScrollRestoration,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 51,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                Scripts,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 52,
                  columnNumber: 9,
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                LiveReload,
                {},
                void 0,
                false,
                {
                  fileName: "app/root.jsx",
                  lineNumber: 53,
                  columnNumber: 9,
                },
                this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 5,
    },
    this
  );
}
export { App as default, links, meta };
//# sourceMappingURL=/build/root-6QOQB22L.js.map
