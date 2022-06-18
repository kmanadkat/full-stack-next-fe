import Link from "next/link";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>User Page</h1>
      <p>User Id: {id}</p>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
