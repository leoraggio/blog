// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    hero: z.string(),
    youtube: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
};
