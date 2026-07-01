import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#071227",
          800: "#0d1e3d",
          700: "#152d5a",
          600: "#1e3d78",
          500: "#233465",
        },
        surface: {
          default: "#f7f5f2",
          inverse: "#071227",
        },
        text: {
          primary: "#1a1a2e",
          inverse: "#e8ecf4",
          muted: "#c3cddb",
          light: "#fbfaf8",
        },
        border: {
          default: "#d4dae2",
        },
        accent: {
          blue: "#233465",
        },
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["56px", { lineHeight: "1.2" }],
        "display": ["38px", { lineHeight: "1.05" }],
        "section-head": ["36px", { lineHeight: "1.2" }],
        "card-title": ["24px", { lineHeight: "1.3" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        container: "80px",
      },
      screens: {
        xs: "30rem",
        sm: "39rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
