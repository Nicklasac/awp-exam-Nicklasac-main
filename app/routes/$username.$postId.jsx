import { Form, Link, useLoaderData } from "@remix-run/react";
import connectDb from "~/db/connectDb.server";
import { getSession } from "~/sessions";

export async function loader({ params, request }) {
  const db = await connectDb();
  const data = await db.models.Post.findById(params.postId);

  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (userId) {
    // Return the data and the user. We need the user to check if the user is admin.
    const user = await db.models.User.findById(userId);
    return { data, user };
  } else {
    return { data };
  }
}

export default function PostCard({ post }) {
  const loaderData = useLoaderData();
  return (
    <div className="">
      <div className="pt-20 mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg">
        <img src={loaderData?.data?.avatar} className="mx-auto rounded-lg" />
        <p className="text-center text-lg p-5 font-bold">
          {loaderData?.data?.username}
        </p>
        <h1 className="text-center text-lg p-5 font-bold">
          {loaderData?.data?.title}
        </h1>
        <p className="text-center p-5">{loaderData?.data?.description}</p>
        <img
          src={loaderData?.data?.image}
          className="w-52 mx-auto  rounded-lg pb-5"
        />
      </div>
    </div>
  );
}
