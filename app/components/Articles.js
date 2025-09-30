import Link from 'next/link';
import Image from 'next/image';
import styles from './Articles.module.css';
import contentsData from '@/data/contents.json';

export default function Articles({ featured = false, limit = null }) {
  // Get articles from JSON data
  let articles = contentsData.articles;

  // Filter for featured articles if requested
  if (featured) {
    articles = articles.filter(article => article.featured);
  }

  // Limit the number of articles if specified
  if (limit) {
    articles = articles.slice(0, limit);
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Helper function to get category color
  const getCategoryColor = (categoryName) => {
    const category = contentsData.categories.find(
      cat => cat.name.toLowerCase() === categoryName.toLowerCase()
    );
    return category ? category.color : '#6b7280';
  };

  return (
    <section className={styles.articlesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {featured ? 'Featured Articles' : 'Latest Articles'}
          </h2>
          <p className={styles.subtitle}>
            {featured 
              ? 'Discover our most popular and insightful content'
              : 'Stay updated with our latest insights and tutorials'
            }
          </p>
        </div>

        {/* Articles Grid */}
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              {/* Article Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className={styles.articleImage}
                />
                {article.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>

              {/* Article Content */}
              <div className={styles.articleContent}>
                {/* Category and Reading Time */}
                <div className={styles.articleMeta}>
                  <span 
                    className={styles.category}
                    style={{ backgroundColor: getCategoryColor(article.category) }}
                  >
                    {article.category}
                  </span>
                  <span className={styles.readingTime}>
                    {article.readingTime} min read
                  </span>
                </div>

                {/* Title */}
                <h3 className={styles.articleTitle}>
                  <Link href={`/articles/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className={styles.articleExcerpt}>
                  {article.excerpt}
                </p>

                {/* Author and Date */}
                <div className={styles.articleFooter}>
                  <div className={styles.authorInfo}>
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className={styles.authorAvatar}
                    />
                    <div className={styles.authorDetails}>
                      <span className={styles.authorName}>
                        {article.author.name}
                      </span>
                      <span className={styles.publishDate}>
                        {formatDate(article.publishedAt)}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className={styles.tags}>
                    {article.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        {(featured || limit) && (
          <div className={styles.viewAllContainer}>
            <Link href="/articles" className={styles.viewAllButton}>
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Export a function to get articles data (useful for other components)
export function getArticles(options = {}) {
  const { featured = false, category = null, limit = null, exclude = [] } = options;
  
  let articles = contentsData.articles;

  // Filter by featured status
  if (featured) {
    articles = articles.filter(article => article.featured);
  }

  // Filter by category
  if (category) {
    articles = articles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Exclude specific articles
  if (exclude.length > 0) {
    articles = articles.filter(article => !exclude.includes(article.id));
  }

  // Limit results
  if (limit) {
    articles = articles.slice(0, limit);
  }

  return articles;
}

// Export function to get single article
export function getArticle(slug) {
  return contentsData.articles.find(article => article.slug === slug);
}

// Export function to get related articles
export function getRelatedArticles(currentArticleId, limit = 3) {
  const currentArticle = contentsData.articles.find(article => article.id === currentArticleId);
  
  if (!currentArticle) return [];

  // Find articles with matching tags or category
  const relatedArticles = contentsData.articles
    .filter(article => article.id !== currentArticleId)
    .filter(article => 
      article.category === currentArticle.category ||
      article.tags.some(tag => currentArticle.tags.includes(tag))
    )
    .slice(0, limit);

  return relatedArticles;
}