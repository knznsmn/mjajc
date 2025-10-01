import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <article className={styles.page}>
        <section>
          <Image
          className={styles.logo}
          src="/logo.png"
          alt="Mockingjays Are Just Curious' logo"
          width={180}
          height={38}
          priority
        />
        <h1>Mockingjays Are Just Curious</h1>
        </section>
      </article>
    </main>
  );
}
