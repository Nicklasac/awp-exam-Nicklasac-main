import { require_connectDb_server } from "/build/_shared/chunk-2RREV2JK.js";
import {
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
            className: "text-blue-600 hover:underline  py-2 text-xl",
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
//# sourceMappingURL=/build/routes/explore-ARVD2H74.js.map
