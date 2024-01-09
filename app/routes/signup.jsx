import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import dbConnect from "~/db/connectDb.server";
import bcrypt from "bcryptjs";

export async function action({ request }) {
  const db = await dbConnect();
  const formData = await request.formData();
  const user = db.models.User;
  let data = Object.fromEntries(formData);

  // Check if user already exists in the database and return an error if it does. Otherwise, create a new user.
  const userExists = await user.findOne({
    username: data.username,
  });

  if (userExists) {
    return json({ errorMessage: "User already exists" }, { status: 401 });
  }

  if (data.password == "" || data.username == "") {
    return json(
      { errorMessage: "Please fill out all fields" },
      { status: 401 }
    );
  }

  if (data.password !== data.confirmPassword) {
    return json({ errorMessage: "Passwords do not match" }, { status: 401 });
  } else {
    // Hash the password before saving it to the database and then create a new user.
    // We use a salt of 10 to make the hashing process more secure.
    // The higher the number, the more secure the hashing process. However, it will also take longer to hash the password.
    const hashedPassword = bcrypt.hashSync(data.password, 10).trim();
    const newUser = new user({
      username: data.username,
      password: hashedPassword,
      avatar: `https://avatars.dicebear.com/api/bottts/${data.username}.svg`,
    });
    await newUser.save();
    return redirect("/login");
  }
}

export default function SignUp() {
  const actionData = useActionData();
  return (
    <div className="page pt-20">
      <h1 className="text-center pb-5 font-bold text-xl">Sign Up</h1>
      <div className="p-2">
        <Form
          className="mx-auto text-center bg-slate-200 w-2/5 rounded-lg drop-shadow-lg"
          method="post"
          reloadDocument
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
            defaultValue={actionData?.values?.password}
          />
          <label className="block p-5" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className=" border-none rounded p-2 border-2"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <div>
            <button
              type="submit"
              className="bg-sky-600 rounded py-3 px-5 text-white transition-colors hover:bg-sky-700 m-7"
            >
              Sign Up
            </button>
          </div>
          <br />
          {actionData && (
            <div className="text-red-500">
              User not found or password didn't match
            </div>
          )}
          <br />
          <div>
            <h5 className="pb-5">
              Already have an account? <br />
              <Link className=" text-sky-600" to="/login">
                Log in here
              </Link>
            </h5>
          </div>
        </Form>
      </div>
    </div>
  );
}
