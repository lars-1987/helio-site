import { ReactNode } from "react";
import { SectionReveal } from "./SectionReveal";

type Props = {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  subheading: ReactNode;
  preview: ReactNode;
};

/**
 * Shared layout for every feature section: eyebrow tag, headline,
 * subheadline, then the large preview. Each element is a reveal target
 * with a staggered order so they cascade in when the section enters view.
 *
 * Responsive ladder matches Hero — scales typography and padding down
 * for phone/tablet widths AND short Chrome viewports.
 */
export function FeatureSection({
  id,
  eyebrow,
  heading,
  subheading,
  preview,
}: Props) {
  return (
    <SectionReveal
      id={id}
      className="justify-center pt-14 pb-4 sm:pt-16 md:pt-20 md:pb-8 lg:pt-24 lg:pb-10 xl:pt-28 h-lg:pt-14 h-lg:pb-4 h-md:pt-12 h-sm:pt-10"
    >
      <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center">
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink/50 md:mb-3 md:text-[12px]"
        >
          {eyebrow}
        </div>
        <h2
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="max-w-4xl text-center text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl md:leading-[1.02] lg:text-6xl h-lg:text-5xl h-md:text-4xl h-sm:text-3xl"
        >
          {heading}
        </h2>
        <p
          data-reveal
          style={{ ["--reveal-order" as string]: 2 }}
          className="mt-3 max-w-2xl text-center text-base text-ink/65 sm:mt-4 md:mt-4 md:text-lg lg:mt-5 lg:text-xl h-lg:mt-3 h-lg:text-base h-md:mt-2 h-sm:mt-1"
        >
          {subheading}
        </p>
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 3 }}
          className="mt-4 w-full sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 h-lg:mt-4 h-md:mt-3 h-sm:mt-2"
        >
          {preview}
        </div>
      </div>
    </SectionReveal>
  );
}
