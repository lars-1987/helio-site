"use client";

import { useEffect, useState } from "react";

/**
 * A small bouncing down-arrow pinned to the bottom center of the
 * viewport. Has a peach background circle so it reads cleanly over
 * the dark preview card. Fades out once the user scrolls.
 */
export function ScrollChevron() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-30 -translate-x-1/2 transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden="true"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-75 shadow-sm">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce text-ink/50"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
