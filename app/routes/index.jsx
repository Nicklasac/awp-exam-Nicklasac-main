import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/explore");
}
export default function Index() {
  <></>;
}
