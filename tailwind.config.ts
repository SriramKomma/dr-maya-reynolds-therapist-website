import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color palette - warm, earthy tones for therapy practice
        primary: {
          50: "#f0f4f3",
          100: "#d9e5e3",
          200: "#b3cbc7",
          300: "#8db1ab",
          400: "#67978f",
          500: "#4a7d76", // Main primary color - sage green
          600: "#3a6259",
          700: "#2a4842",
          800: "#1a2e2b",
          900: "#0a1414",
        },
        secondary: {
          50: "#faf7f5",
          100: "#f2ebe5",
          200: "#e5d7cb",
          300: "#d8c3b1",
          400: "#cbaf97",
          500: "#b89b7d", // Warm beige
          600: "#927c64",
          700: "#6d5d4b",
          800: "#483e32",
          900: "#241f19",
        },
        accent: {
          50: "#fff8f3",
          100: "#ffeee0",
          200: "#ffdcc1",
          300: "#ffcba2",
          400: "#ffb983",
          500: "#ffa764", // Soft coral/peach
          600: "#cc8650",
          700: "#99643c",
          800: "#664328",
          900: "#332114",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
