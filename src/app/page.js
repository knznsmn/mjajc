import contents from '@/data/contents.json';
import styles from './page.module.css';
import Navigation from '@/components/Navigation';
export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <h1 className="gradient-shimmer">{contents.website.title}</h1>
        <p>{contents.website.description}</p>
      </main>
    </>
  );
}
