"use client";

import { useState } from "react";
import { SectionReveal } from "./SectionReveal";
import { DownloadButton } from "./DownloadButton";

const FREE_FEATURES = [
  "Full session lifecycle (timer, micro-tasks, scratch pad)",
  "Wind-down capture ritual",
  "Task carry-forward between sessions",
  "Session history and logs",
  "Calendar sync (EventKit)",
];

const PLUS_FEATURES = [
  "Unlimited projects",
  "Recurring session schedules",
  "Weekly analytics (time per project, targets, trends)",
  "Weekly rotation targets with progress tracking",
  '"Needs attention" alerts',
  "Data export (JSON)",
];

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plusPrice = annual ? "$9.99" : "$14.99";
  const plusBilled = annual ? "Billed annually at $119.99/yr" : "Billed monthly";

  return (
    <SectionReveal
      id="pricing"
      className="justify-center pt-20 pb-10 sm:pt-24 md:pt-28 lg:pt-32 h-lg:pt-16 h-md:pt-14 h-sm:pt-12"
    >
      <div className="mx-auto flex w-full max-w-[64rem] flex-col items-center">
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-ink/50"
        >
          Pricing
        </div>
        <h2
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="mb-4 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl h-md:text-4xl h-sm:text-3xl"
        >
          Start free. Upgrade when you need&nbsp;it.
        </h2>
        <p
          data-reveal
          style={{ ["--reveal-order" as string]: 2 }}
          className="mb-8 max-w-xl text-center text-base text-ink/60 md:mb-10 md:text-lg h-md:mb-6"
        >
          Available on the Mac App Store. No account required.
        </p>

        {/* Billing toggle */}
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 3 }}
          className="mb-8 flex items-center gap-3 md:mb-10 h-md:mb-6"
        >
          <span
            className={`text-[14px] font-medium ${
              !annual ? "text-ink" : "text-ink/40"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className={`relative h-[28px] w-[50px] rounded-full transition-colors ${
              annual ? "bg-ink" : "bg-ink/30"
            }`}
            aria-label="Toggle annual billing"
          >
            <div
              className={`absolute top-[3px] h-[22px] w-[22px] rounded-full bg-cream-75 shadow-sm transition-transform ${
                annual ? "translate-x-[25px]" : "translate-x-[3px]"
              }`}
            />
          </button>
          <span
            className={`text-[14px] font-medium ${
              annual ? "text-ink" : "text-ink/40"
            }`}
          >
            Yearly
          </span>
        </div>

        {/* Cards */}
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 4 }}
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          {/* Free */}
          <div className="flex flex-col rounded-[28px] bg-ink p-7 text-cream-75 md:rounded-[32px] md:p-10">
            <div className="mb-1 text-[13px] font-medium uppercase tracking-wider text-cream-75/40">
              Free
            </div>
            <div className="mb-1 text-4xl font-bold tracking-tight md:text-5xl">
              $0
            </div>
            <div className="mb-6 text-[14px] text-cream-75/50">
              Up to 3 active projects
            </div>

            <div className="space-y-3">
              {FREE_FEATURES.map((f) => (
                <FeatureRow key={f} label={f} />
              ))}
            </div>
          </div>

          {/* Plus */}
          <div className="relative flex flex-col rounded-[28px] bg-ink p-7 text-cream-75 md:rounded-[32px] md:p-10">
            {/* Save pill — only when yearly */}
            {annual && (
              <div
                className="absolute top-5 right-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink md:top-6 md:right-6"
                style={{ backgroundColor: "#FFA07F" }}
              >
                Save 33%
              </div>
            )}

            <div className="mb-1 text-[13px] font-medium uppercase tracking-wider text-cream-75/40">
              Plus
            </div>
            <div className="mb-1 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight md:text-5xl">
                {plusPrice}
              </span>
              <span className="text-[15px] text-cream-75/40">/mo</span>
            </div>
            <div className="mb-6 text-[14px] text-cream-75/50">
              {plusBilled}
            </div>

            <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-cream-75/30">
              Everything in Free, plus:
            </div>
            <div className="space-y-3">
              {PLUS_FEATURES.map((f) => (
                <FeatureRow key={f} label={f} />
              ))}
            </div>
          </div>
        </div>

        {/* Centered CTA below both cards */}
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 5 }}
          className="mt-8 md:mt-10"
        >
          <DownloadButton size="lg" />
        </div>
      </div>
    </SectionReveal>
  );
}

function FeatureRow({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-3 text-[14px] leading-snug">
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        className="mt-[1px] shrink-0 text-cream-75/40"
      >
        <path
          d="M16 6L8.5 13.5 4 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-cream-75/80">{label}</span>
    </div>
  );
}
