import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  const ans = new Date().getFullYear()

  return (
    <footer className={styles.copyright}>
      <p>
        &copy; {ans}&nbsp;
        <Link
          href="/"
          title="Go to MJAJC's homepage."
        >
          Mockingjays Are Just Curious
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}