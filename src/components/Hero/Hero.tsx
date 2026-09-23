import type { Dictionary } from "@/dictionaries";
import styles from "./Hero.module.scss";

export function Hero({ dict }: { dict: Dictionary }) {
  const { profile, cta } = dict;

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <picture className={styles.avatar}>
          <source
            srcSet="/avatar-1x.jpg 1x, /avatar-2x.jpg 2x, /avatar-3x.jpg 3x"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/avatar-2x.jpg" alt={profile.name} />
        </picture>
        <div className={styles.content}>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.lede}>{profile.lede}</p>
          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="#projects">
              {cta.viewProjects}
            </a>
            <a className={styles.btnGhost} href="#contact">
              {cta.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
