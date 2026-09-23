import styles from "./PageIntro.module.scss";

export function PageIntro({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className={styles.intro}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.text}>{intro}</p>}
      </div>
    </section>
  );
}
