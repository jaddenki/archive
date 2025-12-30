/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'brigends': ['Brigends Expanded', 'sans-serif'],
				'mono': ['IBM Plex Mono', 'monospace'],
			},
			colors: {
				'bone': '#F5F5F0',
				'ink': '#1A1A1A',
			},
		},
	},
	plugins: [],
}

