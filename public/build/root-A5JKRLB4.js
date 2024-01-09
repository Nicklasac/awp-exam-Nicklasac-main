import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-DC6UERZ7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OLA5A3U6.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
function App() {
  const { isAuthenticated } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "",
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
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 40,
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
                              lineNumber: 51,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 50,
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
                              lineNumber: 60,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 59,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/create",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "New Post"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 69,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 68,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/logout",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0 ",
                              children: "Logout"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 77,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 76,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/root.jsx",
                        lineNumber: 49,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Explore"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 88,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 87,
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
                              lineNumber: 97,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 96,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/login",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Login"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 106,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 105,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/signup",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Signup"
                            }, void 0, false, {
                              fileName: "app/root.jsx",
                              lineNumber: 114,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 113,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/root.jsx",
                        lineNumber: 86,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/root.jsx",
                      lineNumber: 47,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 46,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/root.jsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 38,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 129,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 130,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 131,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 132,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 128,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-A5JKRLB4.js.map
