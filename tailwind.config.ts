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
        red: "#ff0000",
        orange: "#ff7e00",
        gradientOrange: "linear-gradient(270deg, #ff5c00 0%, #e21b00 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
