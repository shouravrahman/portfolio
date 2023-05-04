/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["var(--font-raleway)"],
			},
			colors: {
				red: "#b3001b",
				light: "#7ea3cc",
				primary: "#262626",
				accent: "#ccad8f",
			},
		},
	},
	plugins: [],
};
