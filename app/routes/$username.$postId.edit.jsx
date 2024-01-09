import { Link, useActionData, useLoaderData } from "@remix-run/react";
import connectDb from "~/db/connectDb.server";
import PostForm from "~/components/PostForm";
import { redirect } from "@remix-run/node";
import { getSession } from "~/sessions";

export async function loader({ params, request }) {
  const db = await connectDb();
  // Check if user is admin. If not, redirect to home page.
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (userId) {
    const user = await db.models.User.findById(userId);
    if (user.isAdmin) {
      const data = await db.models.Post.findById(params.postId);
      return { data };
    }
  }

  // If we reach this code, the user is not admin. Redirect to home page.
  return redirect("/");
}

export default function Edit() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  return (
    <div className="page">
      <PostForm
        errors={actionData?.errors}
        action={`/${loaderData.data._id}/edit`}
        post={loaderData?.data}
        error={actionData?.error}
      />
      <Link to={`/${loaderData?.data._id}`}>
        <button className="buttonPrimary">Go back</button>
      </Link>
    </div>
  );
}

export async function action({ request, params }) {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const image = form.get("image");
  const size = form.get("size");
  const price = form.get("price");
  const category = form.get("category");
  try {
    const db = await connectDb();
    // Update the post with the new data
    const post = await db.models.Post.findById(params.postId);
    post.title = title;
    post.description = description;
    post.image = image;
    post.size = size;
    post.price = price;
    post.category = category;
    post.updatedAt = new Date();
    await post.save();

    // Return a redirect to the new post
    return redirect(`/${post._id}`);
  } catch (error) {
    console.log("error", error);
    return error;
  }
}

// TODO: Catchboundary
