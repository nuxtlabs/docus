import { defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { inferSiteURL, getPackageJsonMetadata } from '../app/utils/meta'
import { getGitBranch, getGitEnv, getLocalGitInfo } from '../app/utils/git'

export default defineNuxtModule({
  meta: {
    name: 'default-configs',
  },
  async setup(_options, nuxt) {
    const dir = nuxt.options.rootDir
    const url = inferSiteURL()
    const meta = await getPackageJsonMetadata(dir)
    const gitInfo = await getLocalGitInfo(dir) || getGitEnv()
    const siteName = nuxt.options?.site?.name || meta.name || gitInfo?.name || ''

    nuxt.options.llms = defu(nuxt.options.llms, {
      domain: url,
      title: siteName,
      description: meta.description || '',
      full: {
        title: siteName,
        description: meta.description || '',
      },
    })

    nuxt.options.site = defu(nuxt.options.site, {
      url,
      name: siteName,
      debug: false,
    })

    nuxt.options.appConfig = defu(nuxt.options.appConfig, {
      header: {
        title: siteName,
      },
      github: {
        owner: gitInfo?.owner,
        name: gitInfo?.name,
        url: gitInfo?.url,
        branch: getGitBranch(),
      },
      seo: {
        titleTemplate: `%s - ${siteName}`,
        title: siteName,
        description: meta.description || '',
      },
      toc: {},
    })

    if (nuxt.options.i18n) {
      nuxt.options.i18n = defu(nuxt.options.i18n, {
        strategy: 'prefix',
      })
    }
  },
})
