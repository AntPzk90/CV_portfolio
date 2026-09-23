import fs from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { getCompanyLogo } from "@/lib/companyLogos";
import { withBasePath } from "@/lib/basePath";
import styles from "./CompanyLogo.module.scss";

const LOGO_DIR = path.join(process.cwd(), "public", "logos");
const EXTENSIONS = ["svg", "png", "webp", "jpg", "jpeg"];

function findLogoFile(slug: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const file = `${slug}.${ext}`;
    if (fs.existsSync(path.join(LOGO_DIR, file))) {
      return withBasePath(`/logos/${file}`);
    }
  }
  return undefined;
}

export function CompanyLogo({ company }: { company: string }) {
  const meta = getCompanyLogo(company);
  if (!meta) return null;

  const logoSrc = findLogoFile(meta.slug);

  if (logoSrc) {
    return (
      <span className={styles.badge}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={company}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </span>
    );
  }

  const style = { "--logo-color": meta.color } as CSSProperties;
  const longAbbr = meta.abbr.length > 3;

  return (
    <span
      className={`${styles.badge} ${styles.mono} ${longAbbr ? styles.long : ""}`}
      style={style}
      role="img"
      aria-label={company}
      title={company}
    >
      {meta.abbr}
    </span>
  );
}
