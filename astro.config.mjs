import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.visual-fonts.com',
	integrations: [
		starlight({
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
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'How-to Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
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
