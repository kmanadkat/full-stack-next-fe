import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
