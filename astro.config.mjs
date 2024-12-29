// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config

export default defineConfig({
	site: 'https://genrique98.github.io',
	base: 'genrique98.github.io',
	integrations: [mdx(), sitemap()],
  })