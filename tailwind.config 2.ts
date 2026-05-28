import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:    "#0891b2",
        "accent-dark": "#0e7490",
        surface:   "#f0eae2",
        "surface-hover": "#e5dfd6",
        dark:      "#0a0a0a",
        muted:     "#6b7280",
        whatsapp:  "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      borderColor: {
        DEFAULT: "#f3f4f6",
      },
    },
  },
  plugins: [],
};

export default config;
