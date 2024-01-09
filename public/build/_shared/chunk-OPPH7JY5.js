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
  const dateTime = new Date(post.createdAt);
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const hours = dateTime.getHours();
  const minuts = dateTime.getMinuts();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: `/${post._id}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto text-center bg-stone-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "font-bold text-lg p-5 pl-10 text-left",
          children: post.title
        }, void 0, false, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 12,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "pb-5 text-left pl-10",
          children: post.description
        }, void 0, false, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: post.image,
          alt: post.title,
          className: "w-52 mx-auto pb-8 rounded-lg"
        }, void 0, false, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "Added ",
            `${date}/${month}${hours}${minuts}`
          ]
        }, void 0, true, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/PostCard.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/PostCard.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

export {
  PostCard
};
//# sourceMappingURL=/build/_shared/chunk-OPPH7JY5.js.map
