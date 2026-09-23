import { getDictionary, defaultLocale, isLocale } from "@/dictionaries";
import { Hero } from "@/components/Hero/Hero";
import { Skills } from "@/components/Skills/Skills";
import { Experience } from "@/components/Experience/Experience";
import { MentorExperience } from "@/components/MentorExperience/MentorExperience";
import { Projects } from "@/components/Projects/Projects";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default async function Home({
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
        <Hero dict={dict} />
        <Skills dict={dict} />
        <Experience dict={dict} />
        <MentorExperience dict={dict} />
        <Projects dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
