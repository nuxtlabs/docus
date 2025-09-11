[![docus](https://docus.dev/__og-image__/static/og.png)](https://docus.dev)

# Docus

> A minimal and beautiful Nuxt layer for documentation websites

[![npm version](https://img.shields.io/npm/v/docus.svg)](https://www.npmjs.com/package/docus)
[![npm downloads](https://img.shields.io/npm/dm/docus.svg)](https://www.npmjs.com/package/docus)

This is the official Nuxt layer for [Docus](https://docus.dev), providing a complete documentation theming. It works with the [Docus CLI](https://github.com/nuxt-content/docus/tree/main/cli) for rapid project setup.

## 🚀 Features

- ✨ **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🌍 **Internationalization** - Native i18n support with automatic routing and language switching
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and customization
- ⚡ **Fast** - Optimized for performance
- 🔧 **TypeScript** - Full TypeScript support
- 🛠️ **CLI Integration** - Works with Docus CLI for quick project setup

## 📦 Installation

```bash
npm install docus
```

## 🏗️ Quick Setup

### Option 1: Docus CLI (Recommended)

The easiest way to get started is using the Docus CLI, which automatically sets up a project with this layer:

```bash
# Create a new documentation project
npx create-docus my-docs

# Navigate to your project
cd my-docs

# Start development
npm run dev
```

This creates a complete documentation project pre-configured with `docus`.

For multi-language documentation, use the i18n template:

```bash
# Create a new i18n documentation project
npx create-docus my-docs -t i18n
```

### Option 2: Manual Setup

#### Option 2a: Nuxt Config (recommended)

Add the layer to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ['docus']
})
```

For internationalization, also add the `@nuxtjs/i18n` module:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ],
  }
})
```

#### Option 2b: CLI Usage 

Use directly with Nuxt CLI:

```bash
# Development
nuxt dev --extends docus

# Build
nuxt build --extends docus
```

## 🔗 Related Packages

- [`create-docus`](https://www.npmjs.com/package/create-docus) - CLI tool to scaffold Docus projects

## 📄 License

[MIT License](./LICENSE)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📖 [Documentation](https://docus.dev)
- 🐛 [Issues](https://github.com/nuxt-content/docus/issues)
- 💬 [Discussions](https://github.com/nuxt-content/docus/discussions)

---

Made with ❤️ for the Nuxt community 