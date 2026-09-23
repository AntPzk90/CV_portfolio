import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Experience } from "@/components/Experience/Experience";
import { MentorExperience } from "@/components/MentorExperience/MentorExperience";
import { Footer } from "@/components/Footer/Footer";

export default async function ExperiencePage({
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
        <PageIntro
          title={dict.pages.experience.title}
          intro={dict.pages.experience.intro}
        />
        <Experience dict={dict} detailed />
        <MentorExperience dict={dict} detailed />
      </main>
      <Footer dict={dict} />
    </>
  );
}
