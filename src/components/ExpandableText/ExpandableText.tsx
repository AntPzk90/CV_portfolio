"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExpandableText.module.scss";

type ExpandableTextProps = {
  text: string;
  readMoreLabel: string;
  showLessLabel: string;
  className?: string;
};

export function ExpandableText({
  text,
  readMoreLabel,
  showLessLabel,
  className,
}: ExpandableTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, [text]);

  return (
    <div className={className}>
      <p
        ref={ref}
        className={`${styles.text} ${expanded ? styles.expanded : styles.clamped}`}
      >
        {text}
      </p>
      {overflowing && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? showLessLabel : readMoreLabel}
        </button>
      )}
    </div>
  );
}
