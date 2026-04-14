import { AppleIcon, DownloadIcon } from "./icons";

type Size = "sm" | "lg";

type Props = {
  size?: Size;
  href?: string;
};

const sizes: Record<
  Size,
  {
    wrapper: string;
    gap: string;
    appleSize: string;
    arrowSize: string;
    rightCls: string;
    textShift: string;
  }
> = {
  // Topbar variant — ghost button, no shadow
  sm: {
    wrapper: "px-5 py-3 text-[15px] rounded-xl bg-ink/5 text-ink",
    gap: "gap-[6px]",
    appleSize: "h-[17px] w-[17px]",
    arrowSize: "h-[15px] w-[15px]",
    rightCls: "right-4",
    textShift: "group-hover:-translate-x-[23px]",
  },
  // Hero CTA — dark filled with dramatic layered shadow
  lg: {
    wrapper:
      "px-5 py-4 text-lg max-h-[60px] rounded-2xl bg-ink text-cream-75 " +
      // Layered dual shadow via ::after for real depth
      "shadow-[0_20px_25px_-5px_rgba(62,30,12,0.25),0_8px_10px_-6px_rgba(62,30,12,0.25)] " +
      "after:absolute after:inset-0 after:rounded-2xl after:content-[''] after:pointer-events-none " +
      "after:shadow-[0_25px_50px_-12px_rgba(62,30,12,0.28)] " +
      "hover:shadow-[0_24px_32px_-6px_rgba(62,30,12,0.3),0_10px_14px_-6px_rgba(62,30,12,0.28)]",
    gap: "gap-2",
    appleSize: "h-[22px] w-[22px]",
    arrowSize: "h-[20px] w-[20px]",
    rightCls: "right-5",
    textShift: "group-hover:-translate-x-[30px]",
  },
};

export function DownloadButton({ size = "lg", href = "#download" }: Props) {
  const s = sizes[size];

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center font-bold transition-shadow duration-300 ${s.wrapper} ${s.gap}`}
    >
      {/* Apple icon — in flex flow, fades out on hover */}
      <AppleIcon
        className={`relative z-10 shrink-0 ${s.appleSize} transition-opacity duration-200 ease-out group-hover:opacity-0`}
      />

      {/* Text — shifts left on hover to cover apple's slot */}
      <span
        className={`relative z-10 transition-transform duration-200 ease-out ${s.textShift}`}
      >
        Download for Mac
      </span>

      {/* Download tray — absolute on right, reveals on hover */}
      <DownloadIcon
        className={`absolute ${s.rightCls} top-1/2 z-10 -translate-y-1/2 ${s.arrowSize} -translate-x-2 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100`}
      />
    </a>
  );
}
