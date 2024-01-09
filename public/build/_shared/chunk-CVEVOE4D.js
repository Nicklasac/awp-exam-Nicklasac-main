import {
  Form,
  useParams
} from "/build/_shared/chunk-N35YS357.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GDSG6XVO.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/PostForm.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PostForm({ errors, action, post, error }) {
  const params = useParams();
  const [title, setTitle] = (0, import_react2.useState)("");
  const [description, setDescription] = (0, import_react2.useState)("");
  const [image, setImage] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setImage(post.image);
    }
  }, [post]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-center",
        children: [
          params.postId ? "Update" : "Create",
          " Post"
        ]
      }, void 0, true, {
        fileName: "app/components/PostForm.jsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
          method: "POST",
          action,
          className: "postForm",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "pb-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  className: "",
                  children: "Title"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 28,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: " border-cyan-700 rounded p-2 border-2",
                  type: "text",
                  name: "title",
                  id: "title",
                  value: title,
                  onChange: (e) => setTitle(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.title.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "description",
                  className: "",
                  children: "Description"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 44,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  className: "border-cyan-700 rounded p-2 border-2",
                  name: "description",
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.description.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 55,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 43,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "image",
                  className: "label",
                  children: "Image"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "image",
                  id: "image",
                  value: image,
                  onChange: (e) => setImage(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.image.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 70,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "rounded bg-blue-600 py-2 px-3 text-white transition-colors hover:bg-blue-700",
                children: params.postId ? "Update" : "Create"
              }, void 0, false, {
                fileName: "app/components/PostForm.jsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 74,
              columnNumber: 11
            }, this),
            error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "errorText",
              children: error.message
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 82,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/PostForm.jsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/PostForm.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/PostForm.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

export {
  PostForm
};
//# sourceMappingURL=/build/_shared/chunk-CVEVOE4D.js.map
