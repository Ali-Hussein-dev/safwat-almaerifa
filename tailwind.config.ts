import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
