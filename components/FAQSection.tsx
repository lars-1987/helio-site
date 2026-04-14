"use client";

import { useState } from "react";
import { SectionReveal } from "./SectionReveal";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Helio?",
    a: "Helio is a project rotation system for people who juggle multiple projects. It schedules dedicated time blocks for each project, runs a focused session with a timer and task list, and captures context at the end so you can pick up where you left off — even if it's been weeks.",
  },
  {
    q: "How is this different from a Pomodoro timer?",
    a: "Pomodoro timers help you focus on one task. Helio helps you manage attention across many projects. The timer is just the engine — the real value is the wind-down ritual that captures what you did, what's unfinished, and what to do next, then auto-loads that context when you return to the project.",
  },
  {
    q: "How is this different from Sunsama or Motion?",
    a: "Those are daily planners — they help you organise your day across tasks. Helio is project-first. It tracks weekly time targets per project, captures session-level context (not just end-of-day), and carries tasks forward between sessions on the same project. Different problem, different tool.",
  },
  {
    q: "What happens when I hit 3 projects on Free?",
    a: "Everything keeps working for your existing projects. You just can't create a fourth until you upgrade to Plus or archive one. No features are locked on Free — the full session lifecycle, wind-down, and task carry-forward all work without restrictions.",
  },
  {
    q: "Does Helio require an account?",
    a: "No. No sign-up, no email, no backend. Everything is stored locally on your device. Download from the Mac App Store and start using it immediately.",
  },
  {
    q: "Does it sync across devices?",
    a: "Helio works on Mac, iPhone, and iPad. Your subscription syncs automatically across all devices via your Apple ID through the App Store.",
  },
  {
    q: "Can I export my data?",
    a: "Plus subscribers can export all session logs and project data as JSON at any time. Your data is yours.",
  },
  {
    q: "Does it work with my calendar?",
    a: "Yes. Helio syncs sessions to your Mac's Calendar app via EventKit. If you have Google Calendar, Outlook, or any other calendar connected in System Settings, your Helio sessions appear there automatically.",
  },
  {
    q: "Is my data private?",
    a: "Completely. No data leaves your device. No analytics that identify you. No cloud storage. No third-party tracking.",
  },
  {
    q: "What if I cancel Plus?",
    a: "Your projects and all session history stay intact. You keep full access to 3 projects. Any projects beyond 3 become read-only until you re-subscribe or archive down to 3.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionReveal
      id="faqs"
      snap={false}
      className="pt-20 pb-10 sm:pt-24 md:pt-28 lg:pt-32 h-lg:pt-16 h-md:pt-14 h-sm:pt-12"
    >
      <div className="mx-auto flex w-full max-w-[48rem] flex-col items-center">
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-ink/50"
        >
          FAQs
        </div>
        <h2
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="mb-10 text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl md:mb-14 md:text-5xl lg:text-6xl h-md:mb-10 h-md:text-4xl h-sm:text-3xl"
        >
          Questions? Answers.
        </h2>

        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 2 }}
          className="flex w-full flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-ink md:rounded-3xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
              >
                <span className="text-[15px] font-bold text-cream-75 md:text-[17px]">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 text-cream-75/40 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[14px] leading-relaxed text-cream-75/60 md:px-8 md:pb-6 md:text-[15px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
