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
        className: "text-center pb-5 font-bold text-xl",
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
          className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  className: "block p-5",
                  children: "Title"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 32,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: " border-none rounded p-2 border-2 px-20",
                  type: "text",
                  name: "title",
                  id: "title",
                  value: title,
                  onChange: (e) => setTitle(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.title.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "description",
                  className: "block p-5",
                  children: "Description"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 48,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  className: "border-none rounded p-2 border-2 px-20",
                  maxLength: 500,
                  name: "description",
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.description.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 60,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "image",
                  className: "block p-5",
                  children: "Image"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 64,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: "border-none rounded p-2 border-2 px-20",
                  type: "text",
                  name: "image",
                  id: "image",
                  value: image,
                  onChange: (e) => setImage(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.image.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 76,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
                children: params.postId ? "Update" : "Create"
              }, void 0, false, {
                fileName: "app/components/PostForm.jsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "errorText",
              children: error.message
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 88,
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
//# sourceMappingURL=/build/_shared/chunk-5QPXQXPN.js.map
