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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          DEFAULT: '#40FEBB',
          50: '#F7FFFC',
          100: '#E2FFF5',
          200: '#BAFFE6',
          300: '#91FED8',
          400: '#69FEC9',
          500: '#40FEBB',
          600: '#08FEA7',
          700: '#01CD85',
          800: '#019561',
          900: '#005D3C',
          950: '#00412A',
        },
      }
    },
  },
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;
