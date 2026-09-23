"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.scss";

export function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: base, label: dict.nav.home },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/experience`, label: dict.nav.experience },
    { href: `${base}/certificates`, label: dict.nav.certificates },
  ];

  function isActive(href: string) {
    if (href === base) return pathname === base || pathname === `${base}/`;
    return pathname.startsWith(href);
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={base} className={styles.logo}>
          {dict.profile.initials}
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? styles.active : styles.link}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href) ? styles.mobileActive : styles.mobileLink
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
