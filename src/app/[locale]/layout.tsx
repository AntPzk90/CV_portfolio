import type { Metadata } from "next";
import {
  getDictionary,
  locales,
  defaultLocale,
  isLocale,
} from "@/dictionaries";
import { Header } from "@/components/Header/Header";
import { HtmlLangSetter } from "@/components/HtmlLangSetter/HtmlLangSetter";
import { siteUrl } from "@/lib/site";

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
  const title = `${dict.profile.name} — ${dict.profile.role}`;
  const ogImage = `${siteUrl}/avatar-2x.jpg`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: dict.profile.lede,
    alternates: {
      languages: {
        en: `${siteUrl}/en/`,
        uk: `${siteUrl}/uk/`,
      },
    },
    openGraph: {
      title,
      description: dict.profile.lede,
      url: `${siteUrl}/${locale}/`,
      siteName: dict.profile.name,
      images: [{ url: ogImage }],
      locale: locale === "uk" ? "uk_UA" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.profile.lede,
      images: [ogImage],
    },
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
    <>
      <HtmlLangSetter lang={locale} />
      <Header dict={dict} locale={locale} />
      {children}
    </>
  );
}
