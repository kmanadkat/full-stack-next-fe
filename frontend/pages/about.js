import Link from "next/link";
import styles from "../styles/About.module.css";

export default function Home() {
  return (
    <div className={styles.about}>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
      </ul>
    </div>
  );
}
