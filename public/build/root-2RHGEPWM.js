import {
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
var tailwind_default = "/build/_assets/tailwind-EGDEPC2T.css";

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
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
              class: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                class: "container flex flex-wrap items-center justify-between mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "/",
                    class: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: "https://flowbite.com/docs/images/logo.svg",
                        class: "h-6 mr-3 sm:h-9"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                        children: "Twitter 2.0"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/root.jsx",
                    lineNumber: 38,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    class: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        class: "sr-only",
                        children: "Open main menu"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 54,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                        class: "w-6 h-6",
                        "aria-hidden": "true",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                          "fill-rule": "evenodd",
                          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                          "clip-rule": "evenodd"
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 62,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/root.jsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "hidden w-full md:block md:w-auto",
                    id: "navbar-default",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      class: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "/",
                            class: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white",
                            "aria-current": "page",
                            children: "Explore"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 72,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 71,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "posts/new",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "New Post"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 81,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 80,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "/logout",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Logout"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 88,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "/login",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Login"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 97,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 96,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "/signup",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Signup"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 105,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 104,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/root.jsx",
                      lineNumber: 70,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 69,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 37,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 118,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 119,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 120,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 121,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 117,
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
//# sourceMappingURL=/build/root-2RHGEPWM.js.map
