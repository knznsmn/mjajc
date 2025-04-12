import Head from 'next/head';
import '@/style/globals.css'
import Footer from '@/components/Footer';
 
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mockingjays Are Just Curious</title>
        <meta name="description"  content="Mockingjays are just curious about everything." />
        <meta name="viewport"     content="width=device-width, initial-scale=1" />
        <meta name="author"       content="Hrafnkell Han" />
        <meta name="theme-color"  content="hsl(191, 38%, 31%)" />
        <meta name="keywords"     content="Science and Philosophy, Bible, Qur'an, Islam, Christianity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}