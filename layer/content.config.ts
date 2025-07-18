import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { useNuxt } from '@nuxt/kit'
import { joinURL } from 'ufo'

const { options } = useNuxt()
const cwd = joinURL(options.rootDir, 'content')

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: 'index.md',
      },
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: '**',
        exclude: ['index.md'],
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional(),
        })).optional(),
      }),
    }),
  },
})
