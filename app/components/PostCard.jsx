import { Link, Form } from "@remix-run/react";

export default function PostCard({ post }) {
  const dateTime = new Date(post.createdAt);
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  console.log(post);
  function handleLike(e) {
    e.stopPropagation();
  }
  return (
    <>
      <div className="mx-auto text-center bg-slate-300 w-2/5 rounded-lg mb-8 drop-shadow-lg">
        <Link to={`/${post.user?.username}/${post._id}`}>
          <img
            src={post.user?.avatar}
            className="w-12 h-12 rounded-full mx-auto mt-5 rounded-full bg-white p-1"
          />
          <p>
            Posted by <span className="font-bold ">{post.user?.username}</span>
          </p>

          <h2 className="font-bold text-lg p-5 pl-10 text-left">
            {post.title}
          </h2>
          <p className="pb-5 text-left pl-10 pr-10">{post.description}</p>
          <img src={post.image} className="w-52 mx-auto  rounded-lg" />

          <p>Posted {`${date}/${month}  ${hours}:${minutes}`}</p>
        </Link>
        <Form method="post">
          <input type="hidden" name="postId" value={post._id} />
          <button
            className="bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7"
            onClick={handleLike}
            type="submit"
            name="_action"
            value="like"
          >
            Likes: {post.likes.length}
          </button>
        </Form>
      </div>
    </>
  );
}
