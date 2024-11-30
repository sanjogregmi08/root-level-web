/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        displayLarge: "3.5625rem", // 57px
        displayMedium: "2.8125rem", // 45px
        displaySmall: "2.25rem", // 36px
        headlineLarge: "2rem", // 32px
        headlineMedium: "1.75rem", // 28px
        headlineSmall: "1.5rem", // 24px
        titleLarge: "1.5rem", // 24px
        titleMediumLarge: "1.125rem", // 18px
        titleMedium: "1rem", // 16px
        titleSmall: "0.875rem", // 14px
        labelLarge: "0.875rem", // 14px
        labelMedium: "0.75rem", // 12px
        labelSmall: "0.625rem", // 10px
        bodyLarge: "1rem", // 16px
        bodyMedium: "0.875rem", // 14px
        bodyMediumSmall: "0.813rem", // 13px
        bodySmall: "0.75rem", // 12px
        bodyExtraSmall: "0.5rem", // 8px
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        custom: {
          primary: "#383D3B",
          primaryDark: "#012868",
          secondary30: "#3A4666",
          neutral20: "#303034",
          neutral50: "#77777A",
          neutral60: "#919094",
          neutral90: "#E4E2E6",
          neutral95: "#F2F0F4",
          variant90: "#E1E2EC",
          danger: "#C83200",
          darkHigh: "#F8F8F8",
          darkMedium: "#202224",
          darkLight: "#FBFBFB",
          blueLight: "#9DC4FC",
          blueLighter: "#EBF2FC",
          outlineVariant: "#C2C6D8",
          error: "#BA1A1A",
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
