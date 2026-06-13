'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import contents from '@/data/contents.json';
import { DarkmodeToggle } from '@/components/Darkmode';
import styles from './Navigation.module.css';

export function Navigation() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const toggleRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setMenuOpen = (open: boolean) => {
    const details = detailsRef.current;
    const nav = navRef.current;

    if (!details || details.open === open) {
      return;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (nav) {
      nav.removeAttribute('data-closing');
    }

    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      details.open = true;
      return;
    }

    if (nav) {
      nav.setAttribute('data-closing', 'true');
    }

    closeTimerRef.current = setTimeout(() => {
      details.open = false;
      nav?.removeAttribute('data-closing');
      document.body.style.overflow = '';
      closeTimerRef.current = null;
    }, 1000);
  };

  // Update reveal origin from burger position
  useEffect(() => {
    const updateRevealOrigin = () => {
      if (!toggleRef.current || !navRef.current) return;

      const rect = toggleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      navRef.current.style.setProperty('--reveal-x', `${centerX}px`);
      navRef.current.style.setProperty('--reveal-y', `${centerY}px`);
    };

    updateRevealOrigin();
    window.addEventListener('resize', updateRevealOrigin);
    return () => window.removeEventListener('resize', updateRevealOrigin);
  }, []);

  // Handle menu toggle with explicit click logic for mobile reliability
  const handleToggleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const isOpen = detailsRef.current?.open ?? false;
    setMenuOpen(!isOpen);
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Close menu on scroll
  useEffect(() => {
    const closeOnScroll = () => {
      if (detailsRef.current?.open) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && detailsRef.current?.open) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav ref={navRef} className={styles.siteNav} aria-label="Main">
      <details ref={detailsRef} className={styles.menuDetails}>
        <summary
          ref={toggleRef}
          className={styles.menuToggle}
          aria-label="Toggle navigation menu"
          onClick={handleToggleClick}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </summary>

        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            {/* Logo */}
            <div className={styles.logoWrap}>
              <i className="icon-logo"></i>
              <p>{contents.website.metadata.defaultTitle}</p>
            </div>

            {/* Navigation Links */}
            <ul className={styles.menuLinks}>
              {contents.navigation.map((item, index) => {
                const isActive =
                  item.link === '/'
                    ? pathname === item.link
                    : pathname === item.link || pathname.startsWith(`${item.link}/`);

                return (
                  <li key={item.link} style={{ '--link-index': index } as React.CSSProperties}>
                    <Link
                      href={item.link}
                      className={`${styles.menuLink}${isActive ? ` ${styles.menuLinkActive}` : ''}`}
                      onClick={handleLinkClick}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className={styles.darkmodeWrap}>
              <DarkmodeToggle />
            </div>
          </div>
        </div>
      </details>
    </nav>
  );
}
