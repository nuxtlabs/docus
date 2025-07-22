#!/usr/bin/env node
import { createCLI } from './cli'

const cli = createCLI({
  name: 'create-docus',
  description: 'Create a new Docus documentation project',
  setup: {
    defaults: {},
  },
})

cli.runMain()
