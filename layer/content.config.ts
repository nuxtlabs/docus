import type { DefinedCollection } from '@nuxt/content'
import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { useNuxt } from '@nuxt/kit'
import { joinURL } from 'ufo'

const { options } = useNuxt()
const cwd = joinURL(options.rootDir, 'content')
const locales = options.i18n?.locales

const createLandingSchema = () => z.object({
  layout: z.string().optional(),
})
const createDocsSchema = () => z.object({
  layout: z.string().optional(),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional(),
  })).optional(),
})

let collections: Record<string, DefinedCollection>

if (locales && Array.isArray(locales)) {
  collections = {}
  for (const locale of locales) {
    const code = typeof locale === 'string' ? locale : locale.code

    collections[`landing_${code}`] = defineCollection({
      type: 'page',
      source: {
        cwd,
        include: `${code}/index.md`,
      },
      schema: createLandingSchema(),
    })

    collections[`docs_${code}`] = defineCollection({
      type: 'page',
      source: {
        cwd,
        include: `${code}/**/*`,
        prefix: `/${code}`,
        exclude: [`${code}/index.md`],
      },
      schema: createDocsSchema(),
    })
  }
}
else {
  collections = {
    landing: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: 'index.md',
      },
      schema: createLandingSchema(),
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: '**',
        exclude: ['index.md'],
      },
      schema: createDocsSchema(),
    }),
  }
}

export default defineContentConfig({ collections })
