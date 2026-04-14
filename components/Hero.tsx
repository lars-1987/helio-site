import { DownloadButton } from "./DownloadButton";
import { FragmentedText } from "./FragmentedText";
import { Highlight } from "./Highlight";
import { ScrollChevron } from "./ScrollChevron";
import { SectionReveal } from "./SectionReveal";
import { CalendarPreview } from "./previews/CalendarPreview";

export function Hero() {
  return (
    <SectionReveal
      id="hero"
      className="pt-16 pb-4 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-36 h-lg:pt-24 h-md:pt-20 h-sm:pt-20"
    >
      <div className="flex w-full max-w-[80rem] flex-col items-center">
        <h1
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="relative text-center text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl md:leading-[1] lg:text-7xl xl:text-8xl xl:leading-none h-lg:text-6xl h-lg:leading-[1] h-md:text-5xl h-sm:text-4xl"
        >
          Work in <Highlight>sessions.</Highlight>
          <br />
          Not <FragmentedText text="fragments." delay={0} />
        </h1>

        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="mt-6 flex items-center justify-center sm:mt-8 md:mt-6 lg:mt-8 xl:mt-12 h-lg:mt-5 h-md:mt-4 h-sm:mt-3"
        >
          <DownloadButton size="lg" />
        </div>

        <p
          data-reveal
          style={{ ["--reveal-order" as string]: 2 }}
          className="mt-4 text-center text-[12px] font-medium text-ink/55 sm:mt-5 md:text-[13px] lg:mt-6 xl:mt-8 h-lg:mt-3 h-md:mt-2 h-sm:mt-1"
        >
          Scattered work → focused sessions → real progress
        </p>

        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 3 }}
          className="mt-3 w-full sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 h-lg:mt-3 h-md:mt-2 h-sm:mt-1"
        >
          <CalendarPreview />
        </div>
      </div>
      <ScrollChevron />
    </SectionReveal>
  );
}
