#!/usr/bin/env node

import * as dotenv from 'dotenv'
import { createCLI } from './cli'

dotenv.config()

const cli = createCLI({
  name: 'create-docus',
  description: 'Create a new Docus documentation project',
  setup: {
    defaults: {},
  },
})

cli.runMain()
