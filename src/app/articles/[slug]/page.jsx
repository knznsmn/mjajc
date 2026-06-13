import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import styles from './page.module.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
    <Navigation />
    <main className={styles.post}>
      <section className={styles.header}>
        <p className={styles.meta}>
          {new Date(article.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
          {article.author ? ` · ${article.author}` : ''}
        </p>
        <h1 className={styles.title}>{article.title}</h1>
        {article.summary ? <p className={styles.summary}>{article.summary}</p> : null}
      </section>

      <section
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
    </main>
    <Footer />
    </>
  );
}
