import Link from "next/link";
import { DownloadButton } from "./DownloadButton";
import { SectionReveal } from "./SectionReveal";

export function Footer() {
  return (
    <SectionReveal
      id="footer"
      className="justify-center pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 h-md:pt-16 h-sm:pt-12"
    >
      <div className="flex w-full max-w-[64rem] flex-col items-center text-center">
        <h2
          data-reveal
          style={{ ["--reveal-order" as string]: 0 }}
          className="text-4xl font-bold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl lg:leading-none h-sm:text-4xl"
        >
          One project at a time.
        </h2>
        <p
          data-reveal
          style={{ ["--reveal-order" as string]: 1 }}
          className="mt-4 max-w-xl text-base text-ink/65 sm:mt-5 md:mt-6 md:text-lg lg:text-xl h-sm:mt-3"
        >
          Helio is a native app, built in Melbourne, Australia. No account required.
        </p>
        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 2 }}
          className="mt-6 sm:mt-8 md:mt-10 h-sm:mt-5"
        >
          <DownloadButton size="lg" />
        </div>
        <a
          data-reveal
          style={{ ["--reveal-order" as string]: 3 }}
          href="https://x.com/larsitodev"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-ink/25 transition-all duration-300 hover:scale-110 hover:text-ink/70 sm:mt-10 md:mt-12 h-sm:mt-6"
          aria-label="X (Twitter)"
        >
          <XIcon />
        </a>

        <div
          data-reveal
          style={{ ["--reveal-order" as string]: 4 }}
          className="mt-10 flex w-full flex-col items-center gap-4 text-[12px] text-ink/40 sm:mt-14 sm:flex-row sm:justify-between sm:text-[13px] md:mt-16 h-sm:mt-8"
        >
          <span>© {new Date().getFullYear()} Helio</span>
          <nav className="flex gap-5 sm:gap-6">
            <Link href="/privacy" className="hover:text-ink/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink/70">
              Terms
            </Link>
            <a href="mailto:hello@gethelio.app" className="hover:text-ink/70">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </SectionReveal>
  );
}

function XIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
