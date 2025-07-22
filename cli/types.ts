export interface CLIOptions {
  name: string
  description: string
  setup: {
    defaults: Record<string, never>
  }
}
