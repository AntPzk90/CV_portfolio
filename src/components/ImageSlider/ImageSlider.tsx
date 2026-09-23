"use client";

import { useState } from "react";
import { withBasePath } from "@/lib/basePath";
import styles from "./ImageSlider.module.scss";

type ImageSliderProps = {
  images: string[];
  alt: string;
};

export function ImageSlider({ images, alt }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  function go(delta: number) {
    setIndex((current) => (current + delta + images.length) % images.length);
  }

  return (
    <div className={styles.slider}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath(images[index])}
        alt={`${alt} — ${index + 1}/${images.length}`}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.prev}`}
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={() => go(1)}
            aria-label="Next screenshot"
          >
            ›
          </button>
          <div className={styles.dots}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === index ? styles.dotActive : styles.dot}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
