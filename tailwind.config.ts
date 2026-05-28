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
        accent:        "#0D47A1",
        "accent-mid":  "#1565C0",
        "accent-light":"#E3F2FD",
        green:         "#1D9E75",
        "green-dark":  "#0F6E56",
        surface:       "#F0F4FF",
        dark:          "#1A1A1A",
        muted:         "#555555",
        whatsapp:      "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
