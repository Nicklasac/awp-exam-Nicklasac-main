import { Link, useParams } from "/build/_shared/chunk-WNHIBIE4.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-3CPB4T5C.js";
import { __toESM } from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/posts/$postId.edit.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostEdit() {
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "h1",
          {
            children: ["Editing a Post: ", params.postId],
          },
          void 0,
          true,
          {
            fileName: "app/routes/posts/$postId.edit.jsx",
            lineNumber: 7,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `../$params.postId}`,
            children: "Cancel",
          },
          void 0,
          false,
          {
            fileName: "app/routes/posts/$postId.edit.jsx",
            lineNumber: 8,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/posts/$postId.edit.jsx",
      lineNumber: 6,
      columnNumber: 5,
    },
    this
  );
}
export { PostEdit as default };
//# sourceMappingURL=/build/routes/posts/$postId.edit-6HPVNXSE.js.map
