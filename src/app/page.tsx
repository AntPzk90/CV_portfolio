"use client";

import { useEffect } from "react";
import { locales, defaultLocale, isLocale, type Locale } from "@/dictionaries";
import { withBasePath } from "@/lib/basePath";

const LOCALE_COOKIE = "NEXT_LOCALE";

function detectLocale(): Locale {
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]+)`)
  );
  const cookieLocale = match ? decodeURIComponent(match[1]) : undefined;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const browserLanguages = navigator.languages ?? [navigator.language];
  if (browserLanguages.some((lang) => lang.toLowerCase().startsWith("uk"))) {
    return "uk";
  }

  return defaultLocale;
}

export default function RootRedirect() {
  useEffect(() => {
    const locale = detectLocale();
    window.location.replace(withBasePath(`/${locale}/`));
  }, []);

  return (
    <noscript>
      <p>
        JavaScript is required to redirect automatically. Choose a language:{" "}
        {locales.map((locale) => (
          <a key={locale} href={withBasePath(`/${locale}/`)}>
            {locale}
          </a>
        ))}
      </p>
    </noscript>
  );
}
