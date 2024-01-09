import {
  Link
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/PostCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostCard({ post }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: `/${post._id}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "place-content-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: post.image,
          alt: post.title,
          className: "w-20"
        }, void 0, false, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "card-body",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-center card-title",
              children: post.title
            }, void 0, false, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 10,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "card-text",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-bold",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    post.price,
                    " kr."
                  ]
                }, void 0, true, {
                  fileName: "app/components/PostCard.jsx",
                  lineNumber: 13,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/PostCard.jsx",
                lineNumber: 12,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 11,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/PostCard.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/PostCard.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

export {
  PostCard
};
//# sourceMappingURL=/build/_shared/chunk-SLV3CVER.js.map
