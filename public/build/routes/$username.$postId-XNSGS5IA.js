import {
  Form,
  Link
} from "/build/_shared/chunk-DC6UERZ7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/$username.$postId.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostCard({ post }) {
  var _a, _b, _c;
  console.log(post);
  function handleLike(e) {
    e.stopPropagation();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          to: `/${(_a = post.user) == null ? void 0 : _a.username}/${post._id}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: (_b = post.user) == null ? void 0 : _b.avatar,
              className: "w-12 h-12 rounded-full mx-auto mt-5 rounded-full bg-white p-1"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 12,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Posted by ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-bold ",
                  children: (_c = post.user) == null ? void 0 : _c.username
                }, void 0, false, {
                  fileName: "app/routes/$username.$postId.jsx",
                  lineNumber: 17,
                  columnNumber: 23
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 16,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "font-bold text-lg p-5 pl-10 text-left",
              children: post.title
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "pb-5 text-left pl-10",
              children: post.description
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: post.image,
              alt: post.title,
              className: "w-52 mx-auto  rounded-lg"
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 24,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "postId",
              value: post._id
            }, void 0, false, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
              onClick: handleLike,
              type: "submit",
              name: "_action",
              value: "like",
              children: [
                "Likes: ",
                post.likes.length
              ]
            }, void 0, true, {
              fileName: "app/routes/$username.$postId.jsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/$username.$postId.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/$username.$postId.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
export {
  PostCard as default
};
//# sourceMappingURL=/build/routes/$username.$postId-XNSGS5IA.js.map
