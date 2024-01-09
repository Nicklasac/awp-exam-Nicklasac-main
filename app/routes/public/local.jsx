import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PostCard from "~/components/PostCard";
import connectDb from "~/db/connectDb.server";
import { requireUserSession } from "~/sessions";

export async function loader() {
  const db = await connectDb();
  const data = await db.models.Post.find().sort({ createdAt: -1 });
  const postWithUsers = await Promise.all(
    data.map(async (post) => {
      const user = await db.models.User.findById(post.userId);
      return { ...post.toObject(), user };
    })
  );
  return { data: postWithUsers };
}

export async function action({ request }) {
  const formData = await request.formData();
  const session = await requireUserSession(request);
  const userId = session.get("userId");
  if (formData.get("_action") === "like") {
    const db = await connectDb();
    const post = await db.models.Post.findById(formData.get("postId"));
    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter((id) => id != userId);
    } else {
      post.likes.push(userId);
    }
    await post.save();
    return json(post);
  }
  return null;
}

export default function Index() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <div className="grid p-2 pt-20">
      {loaderData?.data?.map((post) => (
        <PostCard key={post._id} post={post} user={post.user} />
      ))}
    </div>
  );
}
