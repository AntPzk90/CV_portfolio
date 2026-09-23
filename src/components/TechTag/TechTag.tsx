import { getTechIcon } from "@/lib/techIcons";
import styles from "./TechTag.module.scss";

type TechTagProps = {
  label: string;
  size?: "md" | "sm";
};

export function TechTag({ label, size = "md" }: TechTagProps) {
  const icon = getTechIcon(label);

  const classNames = [styles.tag, size === "sm" ? styles.sm : styles.md]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames}>
      {icon && (
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill={icon.color}
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      )}
      {label}
    </span>
  );
}
