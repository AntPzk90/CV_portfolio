import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { TechTag } from "@/components/TechTag/TechTag";
import styles from "./Skills.module.scss";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading title={dict.sections.skills} />
        <div className={styles.groups}>
          {dict.skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <p className={styles.groupTitle}>{group.title}</p>
              <div className={styles.grid}>
                {group.items.map((item) => (
                  <TechTag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
