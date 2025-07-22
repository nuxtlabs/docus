// This file is kept for potential future use but is currently not needed
// for the simplified CLI that only handles project creation

export interface DocsOptions {
  dev?: boolean
  defaults?: {
    name?: string
    description?: string
    dir?: string
    url?: string
    github?: string
    branch?: string
  }
}
