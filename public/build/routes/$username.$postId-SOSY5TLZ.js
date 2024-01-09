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
function Post() {
  var _a, _b, _c, _d, _e;
  const loaderData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: (_a = post.user) == null ? void 0 : _a.avatar,
            className: "w-12 h-12 rounded-full mx-auto mt-5 rounded-full bg-white p-1"
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "Posted by ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-bold ",
                children: (_b = post.user) == null ? void 0 : _b.username
              }, void 0, false, {
                fileName: "app/routes/$username.$postId.jsx",
                lineNumber: 30,
                columnNumber: 21
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "font-bold text-lg p-5 pl-10 text-left",
            children: post.title
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "pb-5 text-left pl-10",
            children: post.description
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: post.image,
            alt: post.title,
            className: "w-52 mx-auto  rounded-lg"
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "Posted ",
              `${date}/${month}  ${hours}:${minutes}`
            ]
          }, void 0, true, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      ((_c = loaderData == null ? void 0 : loaderData.user) == null ? void 0 : _c.isAdmin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            to: `/${(_d = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _d._id}/edit`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "buttonPrimary",
              children: "Edit"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 46,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            method: "post",
            action: `/${(_e = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _e._id}/delete`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "buttonDanger",
              children: "Delete"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/$username.$postId.jsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/$username.$postId.jsx",
        lineNumber: 44,
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
  Post as default
};
//# sourceMappingURL=/build/routes/$username.$postId-SOSY5TLZ.js.map
