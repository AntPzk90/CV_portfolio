"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/dictionaries";
import styles from "./LanguageSwitcher.module.scss";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const rest = pathname.replace(/^\/(en|uk)/, "");

  function handleClick(target: Locale) {
    document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000`;
  }

  return (
    <div className={styles.switcher}>
      {locales.map((code) => (
        <a
          key={code}
          href={`/${code}${rest}`}
          onClick={() => handleClick(code)}
          className={code === locale ? styles.active : styles.link}
          aria-current={code === locale ? "page" : undefined}
        >
          {LOCALE_LABELS[code]}
        </a>
      ))}
    </div>
  );
}
