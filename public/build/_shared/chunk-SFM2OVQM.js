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
  const [size, setSize] = (0, import_react2.useState)("");
  const [price, setPrice] = (0, import_react2.useState)("");
  const [category, setCategory] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setImage(post.image);
      setSize(post.size);
      setPrice(post.price);
      setCategory(post.category);
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
        lineNumber: 28,
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
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  className: "label",
                  children: "Title"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "title",
                  id: "title",
                  value: title,
                  onChange: (e) => setTitle(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 37,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.title.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 45,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "description",
                  className: "label",
                  children: "Description"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  name: "description",
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 52,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.description.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 59,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 48,
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
                  lineNumber: 63,
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
                  lineNumber: 66,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.image.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 74,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 62,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "size",
                  className: "label",
                  children: "Size"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "size",
                  id: "size",
                  value: size,
                  onChange: (e) => setSize(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 81,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.size) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.size.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 88,
                  columnNumber: 30
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 77,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "price",
                  className: "label",
                  children: "Price"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 91,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "price",
                  id: "price",
                  value: price,
                  onChange: (e) => setPrice(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 94,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.price) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.price.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 102,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 90,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "category",
                  className: "label",
                  children: "Category"
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 106,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "category",
                  id: "category",
                  value: category,
                  onChange: (e) => setCategory(e.target.value)
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 109,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.category) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.category.message
                }, void 0, false, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 117,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "buttonPrimary",
                children: params.postId ? "Update" : "Create"
              }, void 0, false, {
                fileName: "app/components/PostForm.jsx",
                lineNumber: 121,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 120,
              columnNumber: 11
            }, this),
            error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "errorText",
              children: error.message
            }, void 0, false, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 125,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/PostForm.jsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/PostForm.jsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/PostForm.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

export {
  PostForm
};
//# sourceMappingURL=/build/_shared/chunk-SFM2OVQM.js.map
