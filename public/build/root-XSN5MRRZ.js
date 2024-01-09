import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QWBIZWPI.css";

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
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
              className: "z-20 fixed top-0 left-0 right-0 z-30 bg-white border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "container flex flex-wrap items-center justify-between mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "/",
                    className: "flex items-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "self-center text-xl font-semibold whitespace-nowrap",
                      children: "Twitter 2.0"
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 44,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 43,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    className: "hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                      className: "w-6 h-6",
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
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-auto",
                    id: "navbar-default",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "flex p-4 mt-4 border flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white",
                      children: isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Explore"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 74,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 73,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/public/local",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Local"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 83,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 82,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/create",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "New Post"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 92,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 91,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/logout",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0 ",
                              children: "Logout"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 100,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 99,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/root.jsx",
                        lineNumber: 72,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/login",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Login"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 111,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 110,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/signup",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Signup"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 119,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 118,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/root.jsx",
                        lineNumber: 109,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
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
                lineNumber: 42,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 41,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 134,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 135,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 136,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 137,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 133,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-XSN5MRRZ.js.map
