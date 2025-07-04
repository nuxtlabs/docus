import { defineContentConfig, defineCollection, z, type DefinedCollection } from '@nuxt/content'

const createDocsSchema = () => z.object({
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional(),
  })).optional(),
})

let collections: Record<string, DefinedCollection>

// @ts-expect-error __LOCALES__ is not defined
if (globalThis.__LOCALES__ && Array.isArray(globalThis.__LOCALES__)) {
  collections = {}
  // @ts-expect-error __LOCALES__ is not defined
  for (const locale of globalThis.__LOCALES__) {
    const code = typeof locale === 'string' ? locale : locale.code

    collections[`landing_${code}`] = defineCollection({
      type: 'page',
      source: {
        // @ts-expect-error __DOCS_DIR__ is not defined
        cwd: globalThis.__DOCS_DIR__,
        include: `${code}/index.md`,
        // prefix: `/${code}`,
      },
    })

    collections[`docs_${code}`] = defineCollection({
      type: 'page',
      source: {
        // @ts-expect-error __DOCS_DIR__ is not defined
        cwd: globalThis.__DOCS_DIR__,
        include: `${code}/**/*.md`,
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
        // @ts-expect-error __DOCS_DIR__ is not defined
        cwd: globalThis.__DOCS_DIR__,
        include: 'index.md',
      },
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        // @ts-expect-error __DOCS_DIR__ is not defined
        cwd: globalThis.__DOCS_DIR__,
        include: '**',
        exclude: ['index.md'],
      },
      schema: createDocsSchema(),
    }),
  }
}

export default defineContentConfig({ collections })
