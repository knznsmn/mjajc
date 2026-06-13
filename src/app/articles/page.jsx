import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import styles from './page.module.css';
import contents from '@/data/contents.json';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Articles | MJAJC',
  description: 'Explore essays, guides, and notes from Mockingjays Are Just Curious.',
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <Navigation />
      <main className={styles.articles}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.label}>Articles</p>
            <h1 className={styles.title}>On rationality and apologetics.</h1>
            <p className={styles.description}>{contents.website.description}</p>
          </div>
        </section>

        <section className={styles.grid}>
          {articles.map((article) => (
            <article key={article.slug} className={styles.card}>
              <Link href={`/articles/${article.slug}`} className={styles.cardLink}>
                <div>
                  <p className={styles.cardMeta}>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <h2 className={styles.cardTitle}>{article.title}</h2>
                  <p className={styles.cardExcerpt}>{article.summary}</p>
                </div>
                <span className={styles.cardArrow}>Read article →</span>
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
