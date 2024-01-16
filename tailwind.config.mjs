/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'spotify': '#00cf74',
				'github': '#0d1117',
				'github-squeares': '#39d353',
				'discord': {
					light: '#5865f2',
					dark: '#5a74d2',
				},
				'linkedin': {
					light: '#0a66c2',
					dark: '#2c6cab',
				},
				'behance': {
					light: '#3278ff',
					dark: '#1e293b',
				},
				'twitter': {
					light: '#179cf0',
					dark: '#0d68a1',
				}
			},
			backgroundImage: {
				'pattern': "url('/src/assets/images/pattern.png')",
				'github-card': "url('/src/assets/images/github.webp')",
				'projects-card': "url('/src/assets/images/projects.webp')",
			},
		},
	},
	plugins: [],
}
