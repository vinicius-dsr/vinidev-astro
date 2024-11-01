/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#679FB4", // Secondary color for light mode
					DEFAULT: "#004F6D", // Primary color
					dark: "#004F6D", // Same primary color for dark mode
				},
				secondary: {
					light: "#004F6D", // Primary color for light mode
					DEFAULT: "#679FB4", // Secondary color
					dark: "#679FB4", // Same secondary color for dark mode
				},
				background: {
					light: "#FFFFFF", // White background for light mode
					dark: "#121212", // Dark background for dark mode
				},
				text: {
					light: "#000000", // Black text for light mode
					dark: "#FFFFFF", // White text for dark mode
				},
			},
		},
		fontFamily: {
			sans: ["Outfit", "sans-serif"],
			mono: ["Jetbrains Mono", "monospace"],
		},
	},
	plugins: [],
};
