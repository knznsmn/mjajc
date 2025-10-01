'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import contentsData from '@/data/contents.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigationItems = contentsData.navigation.main;
  const siteName = contentsData.site.name;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles.logoText}>{siteName}</span>
        </Link>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={styles.navLink} title={item.description}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA and Theme Toggle */}
        <div className={styles.headerActions}>
          <button
            className={styles.themeToggle}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              // Sun icon for light mode
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="m12 1-2 2-2-2"/>
                <path d="m12 23-2-2-2 2"/>
                <path d="m20 12 2-2-2-2"/>
                <path d="m1 12 2-2-2-2"/>
                <path d="m16.24 7.76 1.42-1.42-1.42-1.42"/>
                <path d="m6.34 17.66 1.42-1.42-1.42-1.42"/>
                <path d="m16.24 16.24 1.42 1.42-1.42 1.42"/>
                <path d="m6.34 6.34 1.42 1.42-1.42 1.42"/>
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          
          <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}