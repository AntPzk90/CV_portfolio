import type { Metadata } from "next";
import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { PageIntro } from "@/components/PageIntro/PageIntro";
import { Experience } from "@/components/Experience/Experience";
import { MentorExperience } from "@/components/MentorExperience/MentorExperience";
import { Footer } from "@/components/Footer/Footer";

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
    title: `${dict.pages.experience.title} — ${dict.profile.name}`,
    description: dict.pages.experience.intro,
  };
}

export default async function ExperiencePage({
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
