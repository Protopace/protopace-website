import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/themes/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-quicksand)"]
      },
      colors: {
        'primary': '#001D66',
        'secondary': '#0070E0',
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
