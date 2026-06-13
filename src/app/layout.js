import localFont from 'next/font/local';
import Darkmode from '@/components/Darkmode';
import contents from '@/data/contents.json';
import '@/styles/globals.css';

const crimson = localFont({
  src: [
    {
      path: '../fonts/crimson-pro-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/crimson-pro-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/crimson-pro-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/crimson-pro-latin-600-italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/crimson-pro-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/crimson-pro-latin-800-italic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-crimson',
});

const sourcepro = localFont({
  src: [
    {
      path: '../fonts/source-sans-3-latin-200-normal.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/source-sans-3-latin-200-italic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../fonts/source-sans-3-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/source-sans-3-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/source-sans-3-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/source-sans-3-latin-600-italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/source-sans-3-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/source-sans-3-latin-800-italic.woff2',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-sourcepro',
});
export const metadata = {
  title: contents.website.title,
  description: contents.website.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${crimson.variable} ${sourcepro.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="MJAJC" />
      </head>
      <body>{children}</body>
    </html>
  );
}
