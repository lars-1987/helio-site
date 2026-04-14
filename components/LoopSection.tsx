"use client";

import { SectionReveal } from "./SectionReveal";

const STEPS = [
  {
    label: "Plan",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <rect x="6" y="4" width="20" height="24" rx="2.5" />
        <path d="M6 10h20" />
        <path d="M11 3v4M21 3v4" />
        <rect x="10" y="14" width="5" height="4" rx="0.8" fill="currentColor" fillOpacity="0.15" />
        <rect x="17" y="14" width="5" height="4" rx="0.8" fill="currentColor" fillOpacity="0.15" />
        <rect x="10" y="21" width="5" height="4" rx="0.8" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    label: "Focus",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <circle cx="16" cy="16" r="11" />
        <path d="M16 9v7l4.5 4.5" />
      </svg>
    ),
  },
  {
    label: "Capture",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M8 6h16a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <path d="M10 13l3 3 5-5" />
        <path d="M10 20h12M10 24h8" />
      </svg>
    ),
  },
  {
    label: "Repeat",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M23 8H11a5 5 0 00-5 5v1" />
        <path d="M9 24h12a5 5 0 005-5v-1" />
        <path d="M20 5l3 3-3 3" />
        <path d="M12 27l-3-3 3-3" />
      </svg>
    ),
  },
];

export function LoopSection() {
  return (
    <SectionReveal
      id="loop"
      className="justify-center pt-20 pb-10 sm:pt-24 md:pt-28 lg:pt-32 h-lg:pt-16 h-md:pt-14 h-sm:pt-12"
    >
      <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center text-center">
        <h2
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="mb-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl h-md:text-4xl h-sm:text-3xl"
        >
          A simple loop.
        </h2>

        {/* Step icons + labels */}
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="mt-8 flex items-center gap-4 sm:gap-6 md:mt-12 md:gap-10 lg:gap-14"
        >
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14">
              <div className="group flex flex-col items-center gap-3 md:gap-4">
                <div className="flex h-14 w-14 items-center justify-center text-ink/70 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:text-ink sm:h-16 sm:w-16 md:h-20 md:w-20">
                  {step.icon}
                </div>
                <span className="text-[14px] font-bold tracking-tight text-ink sm:text-[16px] md:text-[18px]">
                  {step.label}
                </span>
              </div>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-ink/20 md:h-6 md:w-6"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Local bouncing chevron — not fixed, just centered at the bottom of this section */}
      <div
        data-reveal
        style={{ ["--reveal-order" as string]: 2 }}
        className="mt-10 md:mt-14"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce text-ink/30"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </SectionReveal>
  );
}
