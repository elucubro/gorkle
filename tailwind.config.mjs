/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#07130f',
				'background': '#faf5e7',
				'primary': '#5dc6a8',
				'secondary': '#c6ebe1',
				'accent': '#3caa8b',
			   },
		},
	},
	plugins: [],
}
