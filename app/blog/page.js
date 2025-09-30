import { getArticles } from "../components/Articles";
import contentsData from "@/data/contents.json";

export const metadata = {
  title: "Blog - MJAJC",
  description: "Read our latest insights, tutorials, and thoughts on web development, design trends, and technology.",
};

export default function BlogPage() {
  // Get blog posts from JSON (they're stored in the same structure as articles)
  const blogPosts = contentsData.blogs;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Blog</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--hue-text-secondary)' }}>
        Insights, tutorials, and industry trends from our team of experts.
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            style={{ 
              padding: '1.5rem', 
              background: 'var(--hue-surface)', 
              borderRadius: '8px', 
              border: '1px solid var(--hue-border)' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span 
                style={{ 
                  background: 'var(--hue-primary)', 
                  color: 'white', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '4px', 
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                {post.category}
              </span>
              <span style={{ color: 'var(--hue-text-secondary)', fontSize: '0.875rem' }}>
                {post.readingTime} min read
              </span>
              {post.featured && (
                <span 
                  style={{ 
                    background: 'var(--hue-accent)', 
                    color: 'white', 
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            <h2 style={{ marginBottom: '0.5rem' }}>
              <a 
                href={`/blog/${post.slug}`}
                style={{ 
                  color: 'var(--hue-text-primary)', 
                  textDecoration: 'none',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                {post.title}
              </a>
            </h2>

            <p style={{ color: 'var(--hue-text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>
                    {post.author.name}
                  </div>
                  <div style={{ color: 'var(--hue-text-secondary)', fontSize: '0.75rem' }}>
                    {formatDate(post.publishedAt)}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    style={{ 
                      background: 'rgba(112, 158, 24, 0.1)', 
                      color: 'var(--hue-primary)', 
                      padding: '0.125rem 0.5rem', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}