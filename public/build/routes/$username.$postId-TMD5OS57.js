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
  var _a, _b, _c, _d, _e, _f;
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-20 mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center text-lg p-5 font-bold",
            children: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.title
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center ",
            children: (_b = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _b.description
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "text-center ",
            children: (_c = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _c.image
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      ((_d = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _d.isAdmin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: `/${(_e = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _e._id}/edit`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "buttonPrimary",
              children: "Edit"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 35,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: `/${(_f = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _f._id}/delete`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "buttonDanger",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 38,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/$username.$postId.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  PostCard as default
};
//# sourceMappingURL=/build/routes/$username.$postId-TMD5OS57.js.map
