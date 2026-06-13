import Navigation from '@/components/Navigation';
import styles from './about.module.css';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <article>
          <h1>About MJAJC</h1>
        </article>
        <article>
          <p>
            We humans love to understand how beliefs
            are formed, how they are justified, and how we can distinguish genuine knowledge from
            mere opinion.
          </p>
          <p>
            Following the philosophy of Charles Sanders Peirce, this blog approaches these questions
            through the practice of inquiry. For Peirce, truth is not whatever an individual happens
            to believe, nor is it something we possess with absolute certainty. Truth is the opinion
            that inquiry would ultimately converge upon if investigation were carried far enough
            under ideal conditions. Our beliefs may always be revised, but reality constrains
            inquiry in such a way that persistent investigation tends toward truth.
          </p>
          <p>
            From this perspective, knowledge is not a finished possession but an ongoing, communal,
            and self-correcting endeavor.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
