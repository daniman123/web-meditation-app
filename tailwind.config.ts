import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-screen": "url('/nature-scene_1.png')",
        "meditation-screen": "url('/nature-scene_2.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        gradientShift: {
          "0%, 100%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 1), rgba(133, 235, 255, 1))",
          },
          "5%, 95%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.98), rgba(133, 235, 255, 0.98))",
          },
          "10%, 90%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.96), rgba(133, 235, 255, 0.96))",
          },
          "15%, 85%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.94), rgba(133, 235, 255, 0.94))",
          },
          "20%, 80%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.92), rgba(133, 235, 255, 0.92))",
          },
          "25%, 75%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.90), rgba(133, 235, 255, 0.90))",
          },
          "30%, 70%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.88), rgba(133, 235, 255, 0.88))",
          },
          "35%, 65%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.86), rgba(133, 235, 255, 0.86))",
          },
          "40%, 60%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.84), rgba(133, 235, 255, 0.84))",
          },
          "45%, 55%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.82), rgba(133, 235, 255, 0.82))",
          },
          "50%": {
            backgroundImage: "linear-gradient(rgba(120, 143, 251, 0.80), rgba(133, 235, 255, 0.80))",
          },
        },
      },
      animation: {
        gradientShift: "gradientShift 3s ease-in-out infinite",
      },
      
      
      
    },
  },
  plugins: [],
};
export default config;
