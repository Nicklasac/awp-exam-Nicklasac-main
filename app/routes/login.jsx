import { redirect, json } from "@remix-run/node";
import { useLoaderData, Form, useActionData, Link } from "@remix-run/react";
import { getSession, commitSession } from "~/sessions.js";
import dbConnect from "~/db/connectDb.server";
import bcrypt from "bcryptjs";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (userId) {
    const db = await dbConnect();
    const user = await db.models.User.findById(userId);
    return json({ user });
  }
  return null;
}

export default function Login() {
  const actionData = useActionData();
  const loaderData = useLoaderData();
  return (
    <div className="pt-20">
      {loaderData?.user ? (
        <div>
          <p>
            You are logged in as: <strong>{loaderData.user.username}</strong>
          </p>
          <Link to="/settings">
            <button className="buttonPrimary">Settings</button>
          </Link>
          <Form method="post" action="/logout">
            <button type="submit" className="buttonSecondary">
              Log out
            </button>
          </Form>
        </div>
      ) : (
        <>
          <div className="page">
            <h1 className="text-center pb-5 font-bold text-xl">Login</h1>
            <div className="p-2">
              <Form
                className="mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg"
                method="post"
              >
                <label className="block p-5" htmlFor="username">
                  Username
                </label>
                <input
                  className=" border-none rounded p-2 border-2"
                  type="text"
                  id="username"
                  name="username"
                />
                <label className="block p-5" htmlFor="password">
                  Password
                </label>
                <input
                  className=" border-none rounded p-2 border-2"
                  type="password"
                  id="password"
                  name="password"
                />
                <div>
                  <button
                    className="bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <br />
                {actionData?.errorMessage && (
                  <p className="errorText">{actionData?.errorMessage}</p>
                )}
                <div>
                  <h5 className="pb-5">
                    Don't have an account? <br />
                    <Link className=" text-sky-600" to="/signup">
                      Sign up here
                    </Link>
                  </h5>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const FormDataObject = Object.fromEntries(formData);
  const db = await dbConnect();

  const user = await db.models.User.findOne({
    username: formData.get("username").trim(),
  });

  if (!user) {
    return json({ errorMessage: "User not found" }, { status: 401 });
  }

  const passwordIsValid = bcrypt.compareSync(
    formData.get("password").trim(),
    user.password
  );

  if (passwordIsValid) {
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", user._id);
    return redirect("/", {
      headers: {
        "set-cookie": await commitSession(session),
      },
    });
  } else {
    return json(
      { errorMessage: "Password is invalid", values: FormDataObject },
      { status: 401 }
    );
  }
}
