import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { CompanyLogo } from "@/components/CompanyLogo/CompanyLogo";
import { CompanyLink } from "@/components/CompanyLink/CompanyLink";
import styles from "./Experience.module.scss";

export function Experience({
  dict,
  detailed = false,
}: {
  dict: Dictionary;
  detailed?: boolean;
}) {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading title={dict.sections.experience} />
        <div className={styles.timeline}>
          {dict.experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className={styles.job}>
              <div className={styles.period}>{item.period}</div>
              <div>
                <p className={styles.role}>{item.role}</p>
                <div className={styles.companyRow}>
                  <CompanyLogo company={item.company} />
                  <CompanyLink company={item.company} className={styles.company} />
                </div>
                <p className={styles.description}>{item.description}</p>
                {detailed &&
                  item.fullDescription?.map((paragraph, i) => (
                    <p key={i} className={styles.description}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
