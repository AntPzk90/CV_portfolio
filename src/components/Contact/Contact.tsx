import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { MailIcon, TelegramIcon, LinkedInIcon, GithubIcon } from "./icons";
import styles from "./Contact.module.scss";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading title={dict.sections.contact} />
        <div className={styles.row}>
          <a className={styles.item} href={`mailto:${contact.email}`}>
            <MailIcon className={styles.icon} />
            {contact.email}
          </a>
          <a
            className={`${styles.item} ${styles.telegram}`}
            href={contact.telegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon className={styles.icon} />
            Telegram {contact.telegram}
          </a>
          <a
            className={`${styles.item} ${styles.linkedin}`}
            href={contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={styles.icon} />
            LinkedIn
          </a>
          <a
            className={styles.item}
            href={contact.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className={styles.icon} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
