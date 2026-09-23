import type { Metadata } from "next";
import {
  getDictionary,
  locales,
  defaultLocale,
  isLocale,
} from "@/dictionaries";
import { Header } from "@/components/Header/Header";
import "../globals.scss";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.profile.name} — ${dict.profile.role}`,
    description: dict.profile.lede,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <Header dict={dict} locale={locale} />
        {children}
      </body>
    </html>
  );
}
