import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  PostCard
} from "/build/_shared/chunk-WZQA4SV6.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid p-2 pt-20",
    children: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostCard, {
      post
    }, post._id, false, {
      fileName: "app/routes/public/local.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: "app/routes/public/local.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/public/local-4HSYREU2.js.map
