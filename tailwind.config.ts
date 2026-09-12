import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        movida: {
          forest: "#1F5B3A",
          leaf: "#6EA34B",
          cream: "#F8F3E7",
          mist: "#EEF4E7",
          ink: "#173629",
          sun: "#EFD78D",
          berry: "#A72F4E",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 91, 58, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
