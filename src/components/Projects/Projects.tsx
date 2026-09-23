import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { TechTag } from "@/components/TechTag/TechTag";
import { ExpandableText } from "@/components/ExpandableText/ExpandableText";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import styles from "./Projects.module.scss";

export function Projects({ dict }: { dict: Dictionary }) {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading title={dict.sections.projects} />
        <div className={styles.grid}>
          {dict.projects.items.map((project) => (
            <article key={project.title} className={styles.card}>
              {project.images && project.images.length > 0 ? (
                <ImageSlider images={project.images} alt={project.title} />
              ) : (
                <div className={styles.thumb}>{dict.projects.thumbLabel}</div>
              )}
              <h3 className={styles.title}>{project.title}</h3>
              <ExpandableText
                className={styles.description}
                text={project.description}
                readMoreLabel={dict.projects.readMoreLabel}
                showLessLabel={dict.projects.showLessLabel}
              />
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <TechTag key={tag} label={tag} size="sm" />
                ))}
              </div>
              {(project.githubUrl || project.liveUrl || project.videoUrl) && (
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {dict.projects.githubLabel}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      {dict.projects.liveLabel}
                    </a>
                  )}
                  {project.videoUrl && (
                    <a href={project.videoUrl} target="_blank" rel="noreferrer">
                      {dict.projects.videoLabel}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
