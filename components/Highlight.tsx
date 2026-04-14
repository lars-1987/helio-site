import { ReactNode } from "react";

/**
 * Inline text highlight — a warm peach rectangle behind the text,
 * like a marker pen. Sits slightly below the text baseline so it
 * underlines the bottom portion of the letters.
 */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        className="absolute bottom-[5%] left-[-3%] right-[-3%] h-[35%] rounded-sm"
        style={{ backgroundColor: "#FFA07F" }}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
