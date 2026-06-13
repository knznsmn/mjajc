'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import contents from '@/data/contents.json';
import styles from './Navigation.module.css';

function isActive(pathname, candidate) {
  return candidate === '/'
    ? pathname === candidate
    : pathname === candidate || pathname.startsWith(`${candidate}/`);
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav className={styles.navigation} aria-label="Primary navigation">
      <div className={styles.brandWrap}>
        <Link href="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <Image
            src="/img/logo.png"
            alt="MJAJC Logo"
            width={32}
            height={32}
            className={styles.logo}
          />
          MJAJC
        </Link>
      </div>

      <button
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <div className={styles.desktopNav}>
        <ul className={styles.desktopList}>
          {contents.navigation.map((item) => {
            const active = isActive(pathname, item.url);
            return (
              <li key={item.url}>
                <Link
                  href={item.url}
                  className={`${styles.desktopLink} ${active ? styles.activeLink : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelLabel}>Navigation</p>
              <p className={styles.panelDescription}>Choose a section to explore.</p>
            </div>
            <button
              type="button"
              className={styles.panelClose}
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
            >
              <span />
              <span />
            </button>
          </div>

          <ul className={styles.panelList}>
            {contents.navigation.map((item) => {
              const active = isActive(pathname, item.url);
              return (
                <li key={item.url} className={styles.panelItem}>
                  <Link
                    href={item.url}
                    className={`${styles.panelLink} ${active ? styles.activePanelLink : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
