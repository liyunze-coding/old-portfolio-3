/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				animateBlink: {
					"50%": { opacity: 0 },
				},
				gradient: {
					"0%": {
						"background-position": "0% 50%",
					},
					"50%": {
						"background-position": "100% 50%",
					},
					"100%": {
						"background-position": "0% 50%",
					},
				},
			},
			animation: {
				blink: "animateBlink 1s linear infinite",
				gradient: "gradient 15s ease infinite",
			},
			colors: {
				primary: "#191919",
			},
		},
	},
	plugins: [],
};
