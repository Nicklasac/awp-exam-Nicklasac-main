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
var tailwind_default = "/build/_assets/tailwind-C7WA53GR.css";

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
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
            className: "py-5 bg-gray-700",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "#",
                class: "flex items-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                  children: "Flowbite"
                }, void 0, false, {
                  fileName: "app/root.jsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 36,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                className: "flex justify-end",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/",
                      className: "hover:underline focus:font-bold text-white",
                      children: "Explore"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 43,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 42,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/new",
                      className: "hover:underline focus:font-bold text-white",
                      children: "Add Post"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 51,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 50,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/logout",
                      className: "hover:underline focus:font-bold text-white",
                      children: "Logout"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 58,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/login",
                      className: "hover:underline focus:font-bold text-white",
                      children: "Login"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 67,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 66,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/singup",
                      className: "hover:underline focus:font-bold text-white",
                      children: "Signup"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 75,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 74,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 41,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 85,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 87,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 88,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 84,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
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
//# sourceMappingURL=/build/root-3QNGNC5W.js.map
