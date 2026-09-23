import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Footer } from "@/components/Footer/Footer";
import { withBasePath } from "@/lib/basePath";
import styles from "./page.module.scss";

export default async function CertificatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const { items } = dict.pages.certificates;

  return (
    <>
      <main>
        <PageIntro title={dict.pages.certificates.title} />
        <section>
          <div className="container">
            {items.length > 0 ? (
              <div className={styles.grid}>
                {items.map((cert) => (
                  <a
                    key={cert.title}
                    className={styles.card}
                    href={withBasePath(cert.image)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.thumb}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={withBasePath(cert.image)} alt={cert.title} />
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.title}>{cert.title}</h3>
                      <p className={styles.issuer}>{cert.issuer}</p>
                      <p className={styles.period}>{cert.period}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <p className={styles.emptyTitle}>
                  {dict.pages.certificates.emptyTitle}
                </p>
                <p className={styles.emptyText}>
                  {dict.pages.certificates.emptyText}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer dict={dict} />
    </>
  );
}
