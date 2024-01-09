import { Form, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

// This component is used on the create and update snippet pages.
export default function PostForm({ errors, action, post, error }) {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
      setImage(post.image);
    }
  }, [post]);

  return (
    // The action will be "/update" or "/create" depending on which page the ProductForm is used on.
    <div>
      <h1 className="text-center pb-5 font-bold text-xl">
        {params.postId ? "Update" : "Create"} Post
      </h1>
      <div className="p-2">
        <Form
          method="POST"
          action={action}
          className="mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg"
        >
          <div className="">
            <label htmlFor="title" className="block p-5">
              Title
            </label>
            <input
              className=" border-none rounded p-2 border-2"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors?.title && (
              <p className="errorText">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="description" className="block p-5">
              Description
            </label>
            <textarea
              className="border-none rounded p-2 border-2"
              maxLength={500}
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors?.description && (
              <p className="errorText">{errors.description.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="image" className="block p-5">
              Image
            </label>
            <input
              className="border-none rounded p-2 border-2"
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            {errors?.image && (
              <p className="errorText">{errors.image.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7"
            >
              {params.postId ? "Update" : "Create"}
            </button>
          </div>
          {error && <p className="errorText">{error.message}</p>}
        </Form>
      </div>
    </div>
  );
}
