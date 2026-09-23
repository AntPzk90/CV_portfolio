import type { Dictionary } from "@/dictionaries";
import styles from "./Footer.module.scss";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {dict.profile.name}
    </footer>
  );
}
