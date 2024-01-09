import { useActionData } from "@remix-run/react";
import connectDb from "~/db/connectDb.server";
import PostForm from "~/components/PostForm";
import { redirect } from "@remix-run/node";
import { getSession, requireUserSession } from "~/sessions";

export async function loader({ request }) {
  const db = await connectDb();
  // Check if user is admin. If not, redirect to home page.
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  return {};
}

export default function Create() {
  const actionData = useActionData();
  return (
    <div className=" pt-20">
      <PostForm
        errors={actionData?.errors}
        action="/create"
        error={actionData?.error}
      />
    </div>
  );
}

export async function action({ request }) {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const image = form.get("image");

  const session = await requireUserSession(request);
  const userId = session.get("userId");
  try {
    const db = await connectDb();
    const post = await db.models.Post.create({
      title,
      description,
      image,
      userId,
    });

    // Return a redirect to the new post
    return redirect(`/${post.user?.username}/${post._id}`);
  } catch (error) {
    return error;
  }
}

// TODO: Catchboundary
