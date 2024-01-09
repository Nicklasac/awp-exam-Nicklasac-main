import "/build/_shared/chunk-VKZCZVAU.js";
import {
  Form,
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useSubmit
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// empty-module:~/db/connectDb.server.js
var require_connectDb_server = __commonJS({
  "empty-module:~/db/connectDb.server.js"(exports, module) {
    module.exports = {};
  }
});

// app/routes/explore.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const posts = useLoaderData();
  const submit = useSubmit();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "sm:flex:none md:flex w-full pt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "shadow-lg bg-gray-100 mr-5 rounded-2xl p-10  sm:w-full md:w-3/4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-2xl mb-4",
            children: "Explore"
          }, void 0, false, {
            fileName: "app/routes/explore.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-lg mb-3",
            children: "Den her skal rettes til:"
          }, void 0, false, {
            fileName: "app/routes/explore.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            className: "searchForm",
            method: "get",
            onChange: (e) => {
              submit(e.currentTarget);
            },
            action: "",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              placeholder: "Search...",
              autoComplete: "off",
              type: "search",
              name: "q",
              className: "mb-10 rounded-2xl p-2"
            }, void 0, false, {
              fileName: "app/routes/explore.jsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/explore.jsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            className: "sortForm",
            method: "get",
            onChange: (e) => {
              submit(e.currentTarget);
            },
            action: "",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
              className: "mb-10 rounded-2xl p-2",
              name: "s",
              id: "s",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                  value: "title",
                  children: "Title"
                }, void 0, false, {
                  fileName: "app/routes/explore.jsx",
                  lineNumber: 74,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                  value: "description",
                  children: "Description"
                }, void 0, false, {
                  fileName: "app/routes/explore.jsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                  value: "favorite",
                  children: "Favorite"
                }, void 0, false, {
                  fileName: "app/routes/explore.jsx",
                  lineNumber: 76,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                  value: "timeCreated",
                  children: "Time created"
                }, void 0, false, {
                  fileName: "app/routes/explore.jsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/explore.jsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/explore.jsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "",
            children: posts.map((post) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                className: "text-blue-600 hover:underline  py-2 text-xl",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  to: `/${post._id}${location.search}`,
                  className: "focus:font-bold p-1",
                  children: post.title
                }, void 0, false, {
                  fileName: "app/routes/explore.jsx",
                  lineNumber: 88,
                  columnNumber: 17
                }, this)
              }, post._id, false, {
                fileName: "app/routes/explore.jsx",
                lineNumber: 84,
                columnNumber: 15
              }, this);
            })
          }, void 0, false, {
            fileName: "app/routes/explore.jsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/explore.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "shadow-lg bg-gray-100 rounded-2xl p-10 sm:w-full md:w-1/4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/explore.jsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/explore.jsx",
        lineNumber: 99,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/explore.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/explore-MPOCXWLU.js.map
