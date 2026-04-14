"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Participate in scroll-snap. Defaults to true. */
  snap?: boolean;
  id?: string;
};

/**
 * A full-viewport section that animates children IN when it enters the
 * viewport and animates them back OUT when it leaves. The staggered
 * entrance/exit is driven by the `data-reveal-active` attribute which
 * toggles the CSS transitions defined in globals.css.
 */
export function SectionReveal({ children, className = "", snap = true, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.15) {
            el.setAttribute("data-reveal-active", "true");
          } else if (entry.intersectionRatio < 0.05) {
            el.removeAttribute("data-reveal-active");
          }
        }
      },
      { threshold: [0, 0.05, 0.15, 0.3] }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      data-section=""
      className={`relative flex min-h-svh w-full flex-col items-center px-5 sm:px-8 ${
        snap ? "snap-start" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
