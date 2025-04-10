import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'posts/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                tags: z.array(z.string())
            })
        })
    }
})