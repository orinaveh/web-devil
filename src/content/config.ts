import { z, defineCollection } from 'astro:content';

function parseDMY(value: string) {
  const date = value.split('-');
  const d = parseInt(date[0], 10);
  const m = parseInt(date[1], 10);
  const y = parseInt(date[2], 10);
  return new Date(y, m - 1, d);
}

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    publishDate: z.string().transform((str) => parseDMY(str)),
    description: z.string().optional(),
  }),
});

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  articles: articlesCollection,
};
