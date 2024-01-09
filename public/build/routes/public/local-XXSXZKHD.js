import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  PostCard
} from "/build/_shared/chunk-L4HQBVVG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/public/local.jsx
var import_connectDb = __toESM(require_connectDb());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  var _a;
  const loaderData = useLoaderData();
  const sortedPosts = posts.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid p-2 pt-20",
    children: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostCard, {
          post
        }, post._id, false, {
          fileName: "app/routes/public/local.jsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          children: sortedPosts.map((post2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: [
              post2.title,
              " - ",
              post2.date
            ]
          }, post2.id, true, {
            fileName: "app/routes/public/local.jsx",
            lineNumber: 24,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: "app/routes/public/local.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/public/local.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: "app/routes/public/local.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/public/local-XXSXZKHD.js.map
