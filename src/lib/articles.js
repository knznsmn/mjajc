import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const articlesDirectory = path.join(process.cwd(), 'src', 'content', 'articles');

function getArticleFiles() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  return fs.readdirSync(articlesDirectory).filter((filename) => filename.endsWith('.md'));
}

function formatArticleData(filename, fileContents) {
  const slug = filename.replace(/\.md$/, '');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...(data || {}),
    contentHtml: marked.parse(content),
  };
}

export function getAllArticles() {
  return getArticleFiles()
    .map((filename) => {
      const fullPath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const article = formatArticleData(filename, fileContents);
      return {
        slug: article.slug,
        title: article.title || 'Untitled article',
        summary: article.summary || article.description || '',
        date: article.date || '',
        author: article.author || 'MJAJC',
        ...article,
      };
    })
    .sort((left, right) => new Date(right.date) - new Date(left.date));
}

export function getArticleBySlug(slug) {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const article = formatArticleData(`${slug}.md`, fileContents);
  return {
    slug: article.slug,
    title: article.title || 'Untitled article',
    summary: article.summary || article.description || '',
    date: article.date || '',
    author: article.author || 'MJAJC',
    contentHtml: article.contentHtml,
  };
}

export function getAllArticleSlugs() {
  return getArticleFiles().map((filename) => filename.replace(/\.md$/, ''));
}
