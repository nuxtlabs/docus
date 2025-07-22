import { resolve } from 'node:path'
import { defineCommand, runMain } from 'citty'
import type { CLIOptions } from './types'

export function createCLI(opts: CLIOptions) {
  const main = defineCommand({
    meta: {
      name: opts.name,
      description: opts.description,
    },
    args: {
      dir: {
        type: 'positional',
        description: 'Project directory',
        required: false,
        default: 'docs',
      },
    },
    async setup({ args }) {
      const dir = resolve(args.dir as string)

      const { runCommand } = await import('nuxi')
      await runCommand('init', [dir, '-t', 'gh:nuxtlabs/docus/.starters/default'])
    },
  })

  return {
    runMain: () => runMain(main),
  }
}
