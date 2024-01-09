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
var tailwind_default = "/build/_assets/tailwind-XP52QL5T.css";

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
              class: "px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                class: "container flex flex-wrap items-center justify-between mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "#",
                    class: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: "https://flowbite.com/docs/images/logo.svg",
                        class: "h-6 mr-3 sm:h-10",
                        alt: "Flowbite Logo"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        class: "self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                        children: "Flowbite"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 44,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/root.jsx",
                    lineNumber: 38,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    "data-collapse-toggle": "navbar-dropdown",
                    type: "button",
                    class: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                    "aria-controls": "navbar-dropdown",
                    "aria-expanded": "false",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        class: "sr-only",
                        children: "Open main menu"
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 55,
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
                          lineNumber: 63,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/root.jsx",
                        lineNumber: 56,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/root.jsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "hidden w-full md:block md:w-auto",
                    id: "navbar-dropdown",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      class: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "#",
                            class: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent",
                            "aria-current": "page",
                            children: "Home"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 76,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 75,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                              id: "dropdownNavbarLink",
                              "data-dropdown-toggle": "dropdownNavbar",
                              class: "flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent",
                              children: [
                                "Dropdown",
                                " ",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                  class: "w-5 h-5 ml-1",
                                  "aria-hidden": "true",
                                  fill: "currentColor",
                                  viewBox: "0 0 20 20",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                    "fill-rule": "evenodd",
                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                    "clip-rule": "evenodd"
                                  }, void 0, false, {
                                    fileName: "app/root.jsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                  }, this)
                                }, void 0, false, {
                                  fileName: "app/root.jsx",
                                  lineNumber: 91,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/root.jsx",
                              lineNumber: 85,
                              columnNumber: 21
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              id: "dropdownNavbar",
                              class: "z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                                  class: "py-1 text-sm text-gray-700 dark:text-gray-400",
                                  "aria-labelledby": "dropdownLargeButton",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                        children: "Dashboard"
                                      }, void 0, false, {
                                        fileName: "app/root.jsx",
                                        lineNumber: 115,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/root.jsx",
                                      lineNumber: 114,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                        children: "Settings"
                                      }, void 0, false, {
                                        fileName: "app/root.jsx",
                                        lineNumber: 123,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/root.jsx",
                                      lineNumber: 122,
                                      columnNumber: 25
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                        href: "#",
                                        class: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                        children: "Earnings"
                                      }, void 0, false, {
                                        fileName: "app/root.jsx",
                                        lineNumber: 131,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/root.jsx",
                                      lineNumber: 130,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/root.jsx",
                                  lineNumber: 110,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  class: "py-1",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                    href: "#",
                                    class: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white",
                                    children: "Sign out"
                                  }, void 0, false, {
                                    fileName: "app/root.jsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                  }, this)
                                }, void 0, false, {
                                  fileName: "app/root.jsx",
                                  lineNumber: 139,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/root.jsx",
                              lineNumber: 106,
                              columnNumber: 21
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/root.jsx",
                          lineNumber: 84,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "#",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Services"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 150,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 149,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "#",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Pricing"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 158,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 157,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                            href: "#",
                            class: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                            children: "Contact"
                          }, void 0, false, {
                            fileName: "app/root.jsx",
                            lineNumber: 166,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/root.jsx",
                          lineNumber: 165,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/root.jsx",
                      lineNumber: 74,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/root.jsx",
                    lineNumber: 70,
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
                lineNumber: 179,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 180,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 181,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 182,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 178,
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
//# sourceMappingURL=/build/root-FXWSTINY.js.map
