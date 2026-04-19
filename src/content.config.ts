import { glob } from 'astro/loaders';
import { defineCollection, z, reference } from 'astro:content';

const log = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/log', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		isDraft: z.boolean().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		relatedPosts: z.array(reference('log')).optional()
	}),
});

export const collections = { log };
