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
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-20 mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.avatar,
            className: "mx-auto  rounded-lg"
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center text-lg p-5 font-bold",
            children: (_b = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _b.username
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center text-lg p-5 font-bold",
            children: (_c = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _c.title
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center p-5",
            children: (_d = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _d.description
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: (_e = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _e.image,
            className: "w-52 mx-auto  rounded-lg"
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      ((_f = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _f.isAdmin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: `/${(_g = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _g._id}/edit`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "buttonPrimary",
              children: "Edit"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 41,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 40,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: `/${(_h = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _h._id}/delete`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "buttonDanger",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 43,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 39,
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
//# sourceMappingURL=/build/routes/$username.$postId-MQS3F2W5.js.map
