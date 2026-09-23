import type { Metadata } from "next";
import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

type PageParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.pages.about.title} — ${dict.profile.name}`,
    description: dict.pages.about.paragraphs[0],
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <main>
        <PageIntro title={dict.pages.about.title} />
        <section>
          <div className="container">
            <div className={styles.paragraphs}>
              {dict.pages.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
