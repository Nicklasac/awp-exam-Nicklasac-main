import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "~/tailwind.css";
import { getSession } from "~/sessions.js";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return json({
    isAuthenticated: session.has("userId"),
  });
}

export default function App() {
  const { isAuthenticated } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="">
        <header>
          <nav className="z-20 fixed top-0 left-0 right-0 z-30 bg-white border-gray-200 px-2 sm:px-4 py-2.5 drop-shadow-md">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="/" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap">
                  Twitter 2.0
                </span>
              </a>

              <div className="w-auto" id="navbar-default">
                <ul className="flex p-4 mt-4 border flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
                  {isAuthenticated ? (
                    <>
                      <li>
                        <a
                          href="/"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                          aria-current="page"
                        >
                          Explore
                        </a>
                      </li>
                      <li>
                        <a
                          href="/public/local"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                          aria-current="page"
                        >
                          Local
                        </a>
                      </li>
                      <li>
                        <a
                          href="/create"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                        >
                          New Post
                        </a>
                      </li>
                      <li>
                        <a
                          href="/logout"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0 "
                        >
                          Logout
                        </a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          href="/"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                          aria-current="page"
                        >
                          Explore
                        </a>
                      </li>
                      <li>
                        <a
                          href="/public/local"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                          aria-current="page"
                        >
                          Local
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a
                          href="/signup"
                          className="hover:bg-transparent border-0 hover:text-blue-700 p-0"
                        >
                          Signup
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="mt-5">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
