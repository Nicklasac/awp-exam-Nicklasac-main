import {
  require_connectDb
} from "/build/_shared/chunk-HRYQ3XOG.js";
import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/$username.$postId.jsx
var import_connectDb = __toESM(require_connectDb());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostCard({ post }) {
  var _a, _b, _c;
  const loaderData = useLoaderData();
  console.log(post);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-20 mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "font-bold text-lg p-5 pl-10 text-left",
          children: post.title
        }, void 0, false, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      ((_a = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _a.isAdmin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: `/${(_b = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _b._id}/edit`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "buttonPrimary",
              children: "Edit"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 16,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: `/${(_c = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _c._id}/delete`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "buttonDanger",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 19,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/$username.$postId.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  PostCard as default
};
//# sourceMappingURL=/build/routes/$username.$postId-BEEVK3GV.js.map
