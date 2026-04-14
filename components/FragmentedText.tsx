"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

/**
 * Renders a word whose letters start scattered (fragmented) and then
 * animate together on mount — a visual pun for "fragments."
 *
 * Adapted from @codegrid's FancyTextHover (21st.dev) but triggered on
 * page load instead of hover. After assembly, letters gently float in
 * place with randomised delays so they never feel static.
 */

const SCATTER_POSITIONS: { x: number; y: number; rotate: number }[] = [
  { x: -40, y: 50, rotate: 12 },
  { x: -55, y: -35, rotate: -8 },
  { x: -25, y: 60, rotate: 6 },
  { x: 15, y: -50, rotate: -14 },
  { x: 35, y: 45, rotate: 10 },
  { x: -10, y: -60, rotate: -6 },
  { x: 50, y: 30, rotate: 8 },
  { x: 30, y: -40, rotate: -12 },
  { x: -35, y: -25, rotate: 15 },
  { x: 45, y: 55, rotate: -10 },
];

interface Props {
  /** The text to fragment. Keep it short (1 word). */
  text: string;
  /** Extra classes applied to the wrapper <span>. */
  className?: string;
  /** Delay before the assembly animation starts (ms). */
  delay?: number;
}

export function FragmentedText({ text, className = "", delay = 800 }: Props) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLSpanElement>("[data-letter]");
    if (letters.length === 0) return;

    // Start each letter at its scattered position, invisible
    letters.forEach((letter, i) => {
      const pos = SCATTER_POSITIONS[i % SCATTER_POSITIONS.length];
      gsap.set(letter, {
        xPercent: pos.x,
        yPercent: pos.y,
        rotation: pos.rotate,
        opacity: 0,
      });
    });

    setReady(true);

    // Animate letters to their natural position after a delay
    const tl = gsap.timeline({ delay: delay / 1000 });

    // Phase 1: fade in scattered letters
    tl.to(letters, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.03,
      ease: "power2.out",
    });

    // Phase 2: assemble into the word
    tl.to(
      letters,
      {
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        duration: 0.7,
        stagger: 0.04,
        ease: "back.out(1.2)",
      },
      "-=0.1"
    );

    // Phase 3: gentle continuous float after assembly — just enough
    // movement to feel alive without being distracting
    letters.forEach((letter, i) => {
      const randomDelay = 1.2 + Math.random() * 1.5;
      gsap.to(letter, {
        yPercent: -8,
        xPercent: (i % 2 === 0 ? 1 : -1) * 2,
        rotation: (i % 2 === 0 ? 1 : -1) * 1.5,
        duration: 2.0 + Math.random() * 1.0,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: randomDelay + i * 0.12,
      });
    });

    return () => {
      tl.kill();
      letters.forEach((letter) => gsap.killTweensOf(letter));
    };
  }, [delay]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          data-letter=""
          className="inline-block"
          style={{ opacity: ready ? undefined : 0 }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
}
