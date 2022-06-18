import Link from "next/link";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product Id: {id}</p>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
