import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
      },
      colors: {
        primary: {
          DEFAULT: '#40FEBB',
          50: '#CEFFEE',
          100: '#BAFFE6',
          200: '#91FED8',
          300: '#69FEC9',
          400: '#40FEBB',
          500: '#08FEA7',
          600: '#01CD85',
          700: '#019561',
          800: '#005D3C',
          900: '#002518',
          950: '#000906',
        },
      },
    },
  },
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
