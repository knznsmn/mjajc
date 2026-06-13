import contents from '@/data/contents.json';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>{`© ${new Date().getFullYear()} ${contents.website.title}. All rights reserved.`}
        </p>
    </footer>
  );
}
