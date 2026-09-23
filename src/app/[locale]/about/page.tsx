import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
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
