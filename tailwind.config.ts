import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1F5B3A",
        leaf: "#769B55",
        cream: "#F6F0E2",
        mist: "#EDF2E5",
        ink: "#163326",
        lime: "#D9E7AA",
        sun: "#EFD78D",
        mango: "#E7AA38",
        berry: "#9F3446",
        movida: {
          forest: "#1F5B3A",
          leaf: "#769B55",
          cream: "#F6F0E2",
          mist: "#EDF2E5",
          ink: "#163326",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 91, 58, 0.12)",
        card: "0 18px 50px rgba(31, 91, 58, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
