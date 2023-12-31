import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            sm: "0.750rem",
            base: "1rem",
            xl: "1.333rem",
            "2xl": "1.777rem",
            "3xl": "2.369rem",
            "4xl": "3.158rem",
            "5xl": "4.210rem",
        },

        fontFamily: {
            heading: "var(--font-tiltWarp)",
            body: "var(--font-notoSans)",
        },

        fontWeight: {
            normal: "400",
            bold: "700",
        },

        colors: {
            ...colors,
            black: "rgb(var(--color-black) / <alpha-value>)",
            grey: "rgb(var(--color-grey) / <alpha-value>)",
            transparent: "transparent",
            current: "currentColor",
            text: "rgb(var(--color-text) / <alpha-value>)",
            background: "rgb(var(--color-background)) / <alpha-value>",
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            accent: "rgb(var(--color-accent) / <alpha-value>)",
        },
    },
    plugins: [],
}
export default config
