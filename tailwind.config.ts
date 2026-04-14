import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Height-based breakpoints for fitting sections to short Chrome
        // viewports on laptops. Guarded with min-width: 768px so they
        // never fire on phones (where height is fine but width is the
        // constraint and the base/sm: responsive classes handle sizing).
        "h-lg": { raw: "(min-width: 768px) and (max-height: 1100px)" },
        "h-md": { raw: "(min-width: 768px) and (max-height: 920px)" },
        "h-sm": { raw: "(min-width: 768px) and (max-height: 860px)" },
      },
      colors: {
        // Warm peach palette — distinct from Alcove's pale cream
        cream: {
          25: "#FFE8DC", // subtly lighter peach for highlights
          50: "#FFE0D2",
          75: "#FFD8CA", // page background — the brand peach
          100: "#F5C8B5",
          200: "#E5B29C",
        },
        ink: {
          // Near-black stone — pairs with the peach bg for high contrast
          DEFAULT: "#1C1917",
          soft: "#44403C",
          muted: "#78716C",
        },
      },
      fontFamily: {
        // System font stack — feels native on macOS landing pages
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        // Deep warm shadow for the CTA — still warm brown but tuned for the peach bg
        cta: "0 24px 40px -8px rgba(54, 20, 8, 0.32), 0 10px 20px -6px rgba(54, 20, 8, 0.22)",
        "cta-hover":
          "0 32px 60px -10px rgba(54, 20, 8, 0.4), 0 14px 28px -8px rgba(54, 20, 8, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
