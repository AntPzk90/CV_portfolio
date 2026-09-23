import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className={styles.heading}>{title}</h2>;
}
