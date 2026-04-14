import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "./DownloadButton";

export function TopBar() {
  return (
    <header className="fixed top-0 z-40 flex w-full flex-col bg-cream-75">
      <div className="flex w-full justify-center px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:py-7 h-lg:py-4 h-md:py-3 h-sm:py-2">
        <div className="flex w-full max-w-[108rem] items-center justify-between">
          {/* App icon + wordmark (left) */}
          <Link
            href="/"
            className="group flex items-center"
            aria-label="Helio home"
          >
            <span className="relative mr-2 h-8 w-8 overflow-hidden rounded-lg border-[2px] border-ink bg-cream-75 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-[-6deg] sm:mr-3 sm:h-10 sm:w-10 sm:rounded-xl sm:border-[2.5px]">
              <Image
                src="/appicon.png"
                alt="Helio"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </span>
            <span className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
              Helio
            </span>
          </Link>

          {/* Right nav — Pricing/FAQs hidden on phones so the Download CTA stays visible */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="#pricing"
              className="hidden rounded-2xl px-4 py-3 text-base font-bold text-ink transition-colors duration-300 hover:bg-ink/5 md:inline-block md:px-5 md:py-4 md:text-lg h-sm:px-3 h-sm:py-2 h-sm:text-sm"
            >
              Pricing
            </Link>
            <Link
              href="#faqs"
              className="hidden rounded-2xl px-4 py-3 text-base font-bold text-ink transition-colors duration-300 hover:bg-ink/5 md:inline-block md:px-5 md:py-4 md:text-lg h-sm:px-3 h-sm:py-2 h-sm:text-sm"
            >
              FAQs
            </Link>
            <DownloadButton size="sm" />
          </nav>
        </div>
      </div>
    </header>
  );
}
