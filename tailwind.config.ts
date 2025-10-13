// tailwind.config.ts
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      screens: {
        xl: "1200px", // narrower max width for big margins
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        // ✅ Make Outfit the default sans font
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
