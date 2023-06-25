import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  // const session = await getAuthSession()

  return (
    <>
      <h1>Your feed</h1>
      <p>Home</p>
      <p>
        Your personal Breadit frontpage. Come here to check in with your
        favorite communities.
      </p>
      <Link href={`/r/create`}>Create Community</Link>
    </>
  );
}
