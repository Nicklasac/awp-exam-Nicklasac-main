import { redirect } from "@remix-run/node";
import connectDb from "~/db/connectDb.server";
import { getSession } from "~/sessions";

export async function action({ params, request }) {
  const db = await connectDb();
  // Check if user is admin.
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (userId) {
    const user = await db.models.User.findById(userId);
    if (user.isAdmin) {
      await db.models.Post.findByIdAndDelete(params.postId);
    }
  }
  // Redirect to home page.
  return redirect("/");
}

// Catch any unexpected errors and display them to the user.
export function ErrorBoundary({ error }) {
  return (
    <div className="text-red-500 text-center">
      <h1 className="text-2xl font-bold">Error</h1>
      <p>{error.message}</p>
    </div>
  );
}
