import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.visual-fonts.com',
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: 'Cantonese Fonts',
			social: {
				github: 'https://github.com/jkwchui/visual-fonts-starlight-docs',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting_started' },
				},
				{
					label: 'How-to Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Explanations',
					autogenerate: { directory: 'explanations' },
				},
			],
		}),
	],
});
