import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-A6RLLCOD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7KBRURYB.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function meta() {
  return {
    charset: "utf-8",
    title: "awp-exam",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          class: "flex flex-col h-screen",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
              class: "py-5 bg-gray-700 text-white",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/",
                  className: "hover:underline focus:font-bold text-blue-600",
                  children: [
                    " ",
                    "Explore"
                  ]
                }, void 0, true, {
                  fileName: "app/root.jsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/explore/new",
                  className: "ml-3 hover:underline focus:font-bold text-blue-600",
                  children: [
                    " ",
                    "Add new"
                  ]
                }, void 0, true, {
                  fileName: "app/root.jsx",
                  lineNumber: 44,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/login",
                  className: "li-icon"
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: "/login",
                  className: "li-a",
                  children: [
                    " ",
                    "Login"
                  ]
                }, void 0, true, {
                  fileName: "app/root.jsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 36,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
              className: "mt-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 60,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 59,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-RCQS76SJ.js.map
