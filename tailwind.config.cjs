const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		animation: {
			shift: 'shift 3s linear infinite',
		  },
		  keyframes: {
			shift: {
			  '0%': { backgroundColor: 'white' },
			  '50%': { backgroundColor: colors.red[600] },
			  '100%': { backgroundColor: 'white' },
			}
		  }},
	},
	plugins: [],
}
