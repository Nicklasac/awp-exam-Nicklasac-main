var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_react2 = require("@remix-run/react"), import_node4 = require("@remix-run/node");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-OLA5A3U6.css";

// app/cookies.js
var import_node2 = require("@remix-run/node"), sessionCookie = (0, import_node2.createCookie)("_session", {
  httpOnly: !0,
  maxAge: 60 * 60 * 24 * 7,
  secrets: [process.env.COOKIE_SECRET]
});

// app/sessions.js
var import_node3 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: sessionCookie
});
async function requireUserSession(request) {
  let cookie = request.headers.get("Cookie"), session = await getSession(cookie);
  if (!session.has("userId"))
    throw redirect("/login");
  return session;
}

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
];
async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node4.json)({
    isAuthenticated: session.has("userId")
  });
}
function App() {
  let { isAuthenticated } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
              className: "z-20 fixed top-0 left-0 right-0 z-30 bg-white border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "container flex flex-wrap items-center justify-between mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                    href: "/",
                    className: "flex items-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "self-center text-xl font-semibold whitespace-nowrap",
                      children: "Twitter 2.0"
                    }, void 0, !1, {
                      fileName: "app/root.jsx",
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-auto",
                    id: "navbar-default",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "flex p-4 mt-4 border flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white",
                      children: isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Explore"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 51,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 50,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/public/local",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Local"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 60,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 59,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/create",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "New Post"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 69,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 68,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/logout",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0 ",
                              children: "Logout"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 77,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 76,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.jsx",
                        lineNumber: 49,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Explore"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 88,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 87,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/public/local",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              "aria-current": "page",
                              children: "Local"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 97,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 96,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/login",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Login"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 106,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 105,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              href: "/signup",
                              className: "hover:bg-transparent border-0 hover:text-blue-700 p-0",
                              children: "Signup"
                            }, void 0, !1, {
                              fileName: "app/root.jsx",
                              lineNumber: 114,
                              columnNumber: 25
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.jsx",
                            lineNumber: 113,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.jsx",
                        lineNumber: 86,
                        columnNumber: 21
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.jsx",
                      lineNumber: 47,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 46,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.jsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 38,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            className: "mt-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 129,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 130,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 131,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 132,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 128,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/$username.$postId.delete.jsx
var username_postId_delete_exports = {};
__export(username_postId_delete_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action
});
var import_node5 = require("@remix-run/node");

// app/db/connectDb.server.js
var import_mongoose2 = __toESM(require("mongoose"));

// app/db/models.js
var import_mongoose = require("mongoose"), { Schema } = import_mongoose.mongoose, postSchema = new Schema({
  title: {
    type: String,
    required: [!0, "Please enter a title"]
  },
  description: {
    type: String,
    required: [!0, "Please enter a description"]
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
}), userSchema = new Schema({
  username: {
    type: String,
    required: !0,
    trim: !0,
    minLength: [1, "Username must be at least 1 character long"]
  },
  password: {
    type: String,
    required: !0,
    trim: !0,
    minLength: [1, "Password must be at least 1 character"]
  },
  avatar: {
    type: String
  }
}), models = [
  {
    name: "Post",
    schema: postSchema,
    collection: "posts"
  },
  {
    name: "User",
    schema: userSchema,
    collection: "users"
  }
];

// app/db/connectDb.server.js
var { MONGODB_URL, NODE_ENV } = process.env;
if (!MONGODB_URL)
  throw NODE_ENV === "production" ? new Error(
    "Please define the MONGODB_URL environment variable \u2014 pointing to your full connection string, including database name."
  ) : new Error(
    "Please define the MONGODB_URL environment variable inside an .env file \u2014 pointing to your full connection string, including database name."
  );
async function connectDb() {
  if (import_mongoose2.default.connection.readyState > 0) {
    if (NODE_ENV === "development")
      for (let model of models)
        import_mongoose2.default.connection.models[model.name] && import_mongoose2.default.connection.deleteModel(model.name), import_mongoose2.default.connection.model(model.name, model.schema, model.collection);
    return import_mongoose2.default.connection;
  }
  import_mongoose2.default.connection.on("connected", () => {
    console.log("Mongoose connected, NODE_ENV=%s", NODE_ENV);
  }), import_mongoose2.default.connection.on("disconnected", () => {
    console.log("Mongoose DISCONNECTED, NODE_ENV=%s", NODE_ENV);
  }), await import_mongoose2.default.connect(MONGODB_URL, {
    useUnifiedTopology: !0,
    useNewUrlParser: !0
  });
  for (let model of models)
    import_mongoose2.default.connection.model(model.name, model.schema, model.collection);
  return import_mongoose2.default.connection;
}

// app/routes/$username.$postId.delete.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action({ params, request }) {
  let db = await connectDb(), userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  return userId && (await db.models.User.findById(userId)).isAdmin && await db.models.Post.findByIdAndDelete(params.postId), (0, import_node5.redirect)("/");
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "text-red-500 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-2xl font-bold",
        children: "Error"
      }, void 0, !1, {
        fileName: "app/routes/$username.$postId.delete.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: error.message
      }, void 0, !1, {
        fileName: "app/routes/$username.$postId.delete.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/$username.$postId.delete.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/$username.$postId.edit.jsx
var username_postId_edit_exports = {};
__export(username_postId_edit_exports, {
  action: () => action2,
  default: () => Edit,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/components/PostForm.jsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PostForm({ errors, action: action9, post, error }) {
  let params = (0, import_react3.useParams)(), [title, setTitle] = (0, import_react4.useState)(""), [description, setDescription] = (0, import_react4.useState)(""), [image, setImage] = (0, import_react4.useState)("");
  return (0, import_react4.useEffect)(() => {
    post && (setTitle(post.title), setDescription(post.description), setImage(post.image));
  }, [post]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-center pb-5 font-bold text-xl",
        children: [
          params.postId ? "Update" : "Create",
          " Post"
        ]
      }, void 0, !0, {
        fileName: "app/components/PostForm.jsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Form, {
          method: "POST",
          action: action9,
          className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  className: "block p-5",
                  children: "Title"
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 32,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: " border-none rounded p-2 border-2",
                  type: "text",
                  name: "title",
                  id: "title",
                  value: title,
                  onChange: (e) => setTitle(e.target.value)
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.title.message
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 48,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                  className: "border-none rounded p-2 border-2",
                  maxLength: 500,
                  name: "description",
                  id: "description",
                  value: description,
                  onChange: (e) => setDescription(e.target.value)
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.description) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.description.message
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 60,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
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
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 64,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: "border-none rounded p-2 border-2",
                  type: "text",
                  name: "image",
                  id: "image",
                  value: image,
                  onChange: (e) => setImage(e.target.value)
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 67,
                  columnNumber: 13
                }, this),
                (errors == null ? void 0 : errors.image) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: errors.image.message
                }, void 0, !1, {
                  fileName: "app/components/PostForm.jsx",
                  lineNumber: 76,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 63,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
                children: params.postId ? "Update" : "Create"
              }, void 0, !1, {
                fileName: "app/components/PostForm.jsx",
                lineNumber: 81,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "errorText",
              children: error.message
            }, void 0, !1, {
              fileName: "app/components/PostForm.jsx",
              lineNumber: 88,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/PostForm.jsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PostForm.jsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/PostForm.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/$username.$postId.edit.jsx
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader2({ params, request }) {
  let db = await connectDb(), userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  return userId && (await db.models.User.findById(userId)).isAdmin ? { data: await db.models.Post.findById(params.postId) } : (0, import_node6.redirect)("/");
}
function Edit() {
  let loaderData = (0, import_react5.useLoaderData)(), actionData = (0, import_react5.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostForm, {
        errors: actionData == null ? void 0 : actionData.errors,
        action: `/${loaderData.data._id}/edit`,
        post: loaderData == null ? void 0 : loaderData.data,
        error: actionData == null ? void 0 : actionData.error
      }, void 0, !1, {
        fileName: "app/routes/$username.$postId.edit.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Link, {
        to: `/${loaderData == null ? void 0 : loaderData.data._id}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "buttonPrimary",
          children: "Go back"
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.edit.jsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/$username.$postId.edit.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/$username.$postId.edit.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
async function action2({ request, params }) {
  let form = await request.formData(), title = form.get("title"), description = form.get("description"), image = form.get("image"), size = form.get("size"), price = form.get("price"), category = form.get("category");
  try {
    let post = await (await connectDb()).models.Post.findById(params.postId);
    return post.title = title, post.description = description, post.image = image, post.size = size, post.price = price, post.category = category, post.updatedAt = new Date(), await post.save(), (0, import_node6.redirect)(`/${post._id}`);
  } catch (error) {
    return console.log("error", error), error;
  }
}

// app/routes/$username.$postId.jsx
var username_postId_exports = {};
__export(username_postId_exports, {
  default: () => PostCard,
  loader: () => loader3
});
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader3({ params, request }) {
  let db = await connectDb(), data = await db.models.Post.findById(params.postId), userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  if (userId) {
    let user = await db.models.User.findById(userId);
    return { data, user };
  } else
    return { data };
}
function PostCard({ post }) {
  var _a, _b, _c, _d, _e;
  let loaderData = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "pt-20 mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.avatar,
          className: "mx-auto rounded-lg"
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-center text-lg p-5 font-bold",
          children: (_b = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _b.username
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "text-center text-lg p-5 font-bold",
          children: (_c = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _c.title
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-center p-5",
          children: (_d = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _d.description
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: (_e = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _e.image,
          className: "w-52 mx-auto  rounded-lg pb-5"
        }, void 0, !1, {
          fileName: "app/routes/$username.$postId.jsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/$username.$postId.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/$username.$postId.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/public/local.jsx
var local_exports = {};
__export(local_exports, {
  action: () => action3,
  default: () => Index,
  loader: () => loader4
});
var import_node7 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/PostCard.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PostCard2({ post }) {
  var _a, _b, _c;
  let dateTime = new Date(post.createdAt), date = dateTime.getDate(), month = dateTime.getMonth() + 1, hours = dateTime.getHours(), minutes = dateTime.getMinutes();
  console.log(post);
  function handleLike(e) {
    e.stopPropagation();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
          to: `/${(_a = post.user) == null ? void 0 : _a.username}/${post._id}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: (_b = post.user) == null ? void 0 : _b.avatar,
              className: "w-12 h-12 rounded-full mx-auto mt-5 rounded-full bg-white p-1"
            }, void 0, !1, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 17,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Posted by ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-bold ",
                  children: (_c = post.user) == null ? void 0 : _c.username
                }, void 0, !1, {
                  fileName: "app/components/PostCard.jsx",
                  lineNumber: 22,
                  columnNumber: 23
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "font-bold text-lg p-5 pl-10 text-left",
              children: post.title
            }, void 0, !1, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "pb-5 text-left pl-10 pr-10",
              children: post.description
            }, void 0, !1, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 28,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: post.image,
              className: "w-52 mx-auto  rounded-lg"
            }, void 0, !1, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Posted ",
                `${date}/${month}  ${hours}:${minutes}`
              ]
            }, void 0, !0, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 31,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Form, {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "postId",
              value: post._id
            }, void 0, !1, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 34,
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
            }, void 0, !0, {
              fileName: "app/components/PostCard.jsx",
              lineNumber: 35,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/PostCard.jsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/PostCard.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/PostCard.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/public/local.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader4() {
  let db = await connectDb(), data = await db.models.Post.find().sort({ createdAt: -1 });
  return { data: await Promise.all(
    data.map(async (post) => {
      let user = await db.models.User.findById(post.userId);
      return { ...post.toObject(), user };
    })
  ) };
}
async function action3({ request }) {
  let formData = await request.formData(), userId = (await requireUserSession(request)).get("userId");
  if (formData.get("_action") === "like") {
    let post = await (await connectDb()).models.Post.findById(formData.get("postId"));
    return post.likes.includes(userId) ? post.likes = post.likes.filter((id) => id != userId) : post.likes.push(userId), await post.save(), (0, import_node7.json)(post);
  }
  return null;
}
function Index() {
  var _a;
  let loaderData = (0, import_react8.useLoaderData)();
  return console.log(loaderData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid p-2 pt-20",
    children: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostCard2, {
      post,
      user: post.user
    }, post._id, !1, {
      fileName: "app/routes/public/local.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/public/local.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/explore.jsx
var explore_exports = {};
__export(explore_exports, {
  action: () => action4,
  default: () => Index2,
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader5() {
  let db = await connectDb(), data = await db.models.Post.find().sort({ likes: -1 });
  return { data: await Promise.all(
    data.map(async (post) => {
      let user = await db.models.User.findById(post.userId);
      return { ...post.toObject(), user };
    })
  ) };
}
async function action4({ request }) {
  let formData = await request.formData(), userId = (await requireUserSession(request)).get("userId");
  if (formData.get("_action") === "like") {
    let post = await (await connectDb()).models.Post.findById(formData.get("postId"));
    return post.likes.includes(userId) ? post.likes = post.likes.filter((id) => id != userId) : post.likes.push(userId), await post.save(), (0, import_node8.json)(post);
  }
  return null;
}
function Index2() {
  var _a;
  let loaderData = (0, import_react9.useLoaderData)();
  return console.log(loaderData), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid p-2 pt-20",
    children: (_a = loaderData == null ? void 0 : loaderData.data) == null ? void 0 : _a.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostCard2, {
      post,
      user: post.user
    }, post._id, !1, {
      fileName: "app/routes/explore.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/explore.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/profile.jsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function profile() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
    children: "PROFILE PAGE"
  }, void 0, !1, {
    fileName: "app/routes/profile.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/create.jsx
var create_exports = {};
__export(create_exports, {
  action: () => action5,
  default: () => Create,
  loader: () => loader6
});
var import_react10 = require("@remix-run/react");
var import_node9 = require("@remix-run/node");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  let db = await connectDb(), userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  return {};
}
function Create() {
  let actionData = (0, import_react10.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: " pt-20",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PostForm, {
      errors: actionData == null ? void 0 : actionData.errors,
      action: "/create",
      error: actionData == null ? void 0 : actionData.error
    }, void 0, !1, {
      fileName: "app/routes/create.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/create.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function action5({ request }) {
  var _a;
  let form = await request.formData(), title = form.get("title"), description = form.get("description"), image = form.get("image"), userId = (await requireUserSession(request)).get("userId");
  try {
    let post = await (await connectDb()).models.Post.create({
      title,
      description,
      image,
      userId
    });
    return (0, import_node9.redirect)(`/${(_a = post.user) == null ? void 0 : _a.username}/${post._id}`);
  } catch (error) {
    return error;
  }
}

// app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  loader: () => loader7
});
var import_node10 = require("@remix-run/node");
async function action6({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node10.redirect)("/login", {
    headers: { "Set-Cookie": await destroySession(session) }
  });
}
function loader7() {
  return (0, import_node10.redirect)("/login");
}

// app/routes/signup.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action7,
  default: () => SignUp
});
var import_node11 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_bcryptjs = __toESM(require("bcryptjs")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action7({ request }) {
  let db = await connectDb(), formData = await request.formData(), user = db.models.User, data = Object.fromEntries(formData);
  if (await user.findOne({
    username: data.username
  }))
    return (0, import_node11.json)({ errorMessage: "User already exists" }, { status: 401 });
  if (data.password == "" || data.username == "")
    return (0, import_node11.json)(
      { errorMessage: "Please fill out all fields" },
      { status: 401 }
    );
  if (data.password !== data.confirmPassword)
    return (0, import_node11.json)({ errorMessage: "Passwords do not match" }, { status: 401 });
  {
    let hashedPassword = import_bcryptjs.default.hashSync(data.password, 10).trim();
    return await new user({
      username: data.username,
      password: hashedPassword,
      avatar: `https://avatars.dicebear.com/api/bottts/${data.username}.svg`
    }).save(), (0, import_node11.redirect)("/login");
  }
}
function SignUp() {
  var _a;
  let actionData = (0, import_react11.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page pt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: "text-center pb-5 font-bold text-xl",
        children: "Sign Up"
      }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Form, {
          className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
          method: "post",
          reloadDocument: !0,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "username",
              children: "Username"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 56,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "text",
              id: "username",
              name: "username"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 59,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "password",
              children: "Password"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 65,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "password",
              id: "password",
              name: "password",
              defaultValue: (_a = actionData == null ? void 0 : actionData.values) == null ? void 0 : _a.password
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 68,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              className: "block p-5",
              htmlFor: "confirmPassword",
              children: "Confirm Password"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              className: " border-none rounded p-2 border-2",
              type: "password",
              id: "confirmPassword",
              name: "confirmPassword"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 78,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
                children: "Sign Up"
              }, void 0, !1, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 85,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 92,
              columnNumber: 11
            }, this),
            actionData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-red-500",
              children: "User not found or password didn't match"
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 94,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 98,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                className: "pb-5",
                children: [
                  "Already have an account? ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 101,
                    columnNumber: 40
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
                    className: " text-sky-600",
                    to: "/login",
                    children: "Log in here"
                  }, void 0, !1, {
                    fileName: "app/routes/signup.jsx",
                    lineNumber: 102,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/signup.jsx",
                lineNumber: 100,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/signup.jsx",
              lineNumber: 99,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function about() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
    children: "ABOUT PAGE"
  }, void 0, !1, {
    fileName: "app/routes/about.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader8() {
  return (0, import_node12.redirect)("/explore");
}
function Index3() {
  import_jsx_dev_runtime.Fragment;
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => Login,
  loader: () => loader9
});
var import_node13 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_bcryptjs2 = __toESM(require("bcryptjs")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader9({ request }) {
  let userId = (await getSession(request.headers.get("Cookie"))).get("userId");
  if (userId) {
    let user = await (await connectDb()).models.User.findById(userId);
    return (0, import_node13.json)({ user });
  }
  return null;
}
function Login() {
  let actionData = (0, import_react12.useActionData)(), loaderData = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "pt-20",
    children: loaderData != null && loaderData.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: [
            "You are logged in as: ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
              children: loaderData.user.username
            }, void 0, !1, {
              fileName: "app/routes/login.jsx",
              lineNumber: 26,
              columnNumber: 35
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
          to: "/settings",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "buttonPrimary",
            children: "Settings"
          }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Form, {
          method: "post",
          action: "/logout",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "submit",
            className: "buttonSecondary",
            children: "Log out"
          }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/login.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/login.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-center pb-5 font-bold text-xl",
            children: "Login"
          }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "p-2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Form, {
              className: "mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  className: "block p-5",
                  htmlFor: "username",
                  children: "Username"
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 46,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: " border-none rounded p-2 border-2",
                  type: "text",
                  id: "username",
                  name: "username"
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 49,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  className: "block p-5",
                  htmlFor: "password",
                  children: "Password"
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 55,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  className: " border-none rounded p-2 border-2",
                  type: "password",
                  id: "password",
                  name: "password"
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 58,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7",
                    type: "submit",
                    children: "Login"
                  }, void 0, !1, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 65,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 72,
                  columnNumber: 17
                }, this),
                (actionData == null ? void 0 : actionData.errorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "errorText",
                  children: actionData == null ? void 0 : actionData.errorMessage
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 74,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                    className: "pb-5",
                    children: [
                      "Don't have an account? ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 78,
                        columnNumber: 44
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
                        className: " text-sky-600",
                        to: "/signup",
                        children: "Sign up here"
                      }, void 0, !1, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 79,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 77,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 76,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.jsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/login.jsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/login.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/login.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
async function action8({ request }) {
  let formData = await request.formData(), FormDataObject = Object.fromEntries(formData), user = await (await connectDb()).models.User.findOne({
    username: formData.get("username").trim()
  });
  if (!user)
    return (0, import_node13.json)({ errorMessage: "User not found" }, { status: 401 });
  if (import_bcryptjs2.default.compareSync(
    formData.get("password").trim(),
    user.password
  )) {
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("userId", user._id), (0, import_node13.redirect)("/", {
      headers: {
        "set-cookie": await commitSession(session)
      }
    });
  } else
    return (0, import_node13.json)(
      { errorMessage: "Password is invalid", values: FormDataObject },
      { status: 401 }
    );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e210fd77", entry: { module: "/build/entry.client-FPK6H5SV.js", imports: ["/build/_shared/chunk-DC6UERZ7.js", "/build/_shared/chunk-GDSG6XVO.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-A5JKRLB4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$username.$postId": { id: "routes/$username.$postId", parentId: "root", path: ":username/:postId", index: void 0, caseSensitive: void 0, module: "/build/routes/$username.$postId-AZBIHRZJ.js", imports: ["/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$username.$postId.delete": { id: "routes/$username.$postId.delete", parentId: "root", path: ":username/:postId/delete", index: void 0, caseSensitive: void 0, module: "/build/routes/$username.$postId.delete-PDIAGFWL.js", imports: ["/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$username.$postId.edit": { id: "routes/$username.$postId.edit", parentId: "root", path: ":username/:postId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/$username.$postId.edit-LDLYQDML.js", imports: ["/build/_shared/chunk-P2T26IGR.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-L2HRMKZC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/create": { id: "routes/create", parentId: "root", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/create-5HR64HJX.js", imports: ["/build/_shared/chunk-P2T26IGR.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/explore": { id: "routes/explore", parentId: "root", path: "explore", index: void 0, caseSensitive: void 0, module: "/build/routes/explore-LFC2XX2T.js", imports: ["/build/_shared/chunk-4QI223U6.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JWGTYS3S.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-XTQ7O3J6.js", imports: ["/build/_shared/chunk-OK6NPHXX.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-QS7GB4OI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/profile-25CIUILJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/public/local": { id: "routes/public/local", parentId: "root", path: "public/local", index: void 0, caseSensitive: void 0, module: "/build/routes/public/local-IOR7G4XS.js", imports: ["/build/_shared/chunk-4QI223U6.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-XHQIF3KF.js", imports: ["/build/_shared/chunk-OK6NPHXX.js", "/build/_shared/chunk-HRYQ3XOG.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-E210FD77.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$username.$postId.delete": {
    id: "routes/$username.$postId.delete",
    parentId: "root",
    path: ":username/:postId/delete",
    index: void 0,
    caseSensitive: void 0,
    module: username_postId_delete_exports
  },
  "routes/$username.$postId.edit": {
    id: "routes/$username.$postId.edit",
    parentId: "root",
    path: ":username/:postId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: username_postId_edit_exports
  },
  "routes/$username.$postId": {
    id: "routes/$username.$postId",
    parentId: "root",
    path: ":username/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: username_postId_exports
  },
  "routes/public/local": {
    id: "routes/public/local",
    parentId: "root",
    path: "public/local",
    index: void 0,
    caseSensitive: void 0,
    module: local_exports
  },
  "routes/explore": {
    id: "routes/explore",
    parentId: "root",
    path: "explore",
    index: void 0,
    caseSensitive: void 0,
    module: explore_exports
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/create": {
    id: "routes/create",
    parentId: "root",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
