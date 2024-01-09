import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import {
  Link,
  useLoaderData,
  useLocation,
  useSubmit,
} from "/build/_shared/chunk-A6RLLCOD.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-GDSG6XVO.js";
import { __toESM } from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/explore.jsx
var import_connectDb_server = __toESM(require_connectDb_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const posts = useLoaderData();
  const submit = useSubmit();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "ul",
    {
      className: "",
      children: posts.map((post) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "li",
          {
            className: "mb-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `/posts/${post._id}`,
                children: post.title,
              },
              void 0,
              false,
              {
                fileName: "app/routes/explore.jsx",
                lineNumber: 46,
                columnNumber: 13,
              },
              this
            ),
          },
          post._id,
          false,
          {
            fileName: "app/routes/explore.jsx",
            lineNumber: 45,
            columnNumber: 11,
          },
          this
        );
      }),
    },
    void 0,
    false,
    {
      fileName: "app/routes/explore.jsx",
      lineNumber: 42,
      columnNumber: 5,
    },
    this
  );
}
export { Index as default };
//# sourceMappingURL=/build/routes/explore-Q7HSJVS2.js.map
