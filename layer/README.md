# @larbish/docus-layer

> A minimal and beautiful Nuxt layer for documentation websites

[![npm version](https://img.shields.io/npm/v/@larbish/docus-layer.svg)](https://www.npmjs.com/package/@larbish/docus-layer)
[![npm downloads](https://img.shields.io/npm/dm/@larbish/docus-layer.svg)](https://www.npmjs.com/package/@larbish/docus-layer)

This is the official Nuxt layer for [Docus](https://docus.dev), providing a complete documentation theming. It works with the Docus CLI for rapid project setup.

## 🚀 Features

- ✨ **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and customization
- ⚡ **Fast** - Optimized for performance
- 🔧 **TypeScript** - Full TypeScript support
- 🛠️ **CLI Integration** - Works with Docus CLI for quick project setup

## 📦 Installation

```bash
npm install @larbish/docus-layer
```

## 🏗️ Quick Setup

### Option 1: Docus CLI (Recommended)

The easiest way to get started is using the Docus CLI, which automatically sets up a project with this layer:

```bash
# Create a new documentation project
npx @larbish/docus init my-docs

# Navigate to your project
cd my-docs

# Start development
npm run dev
```

This creates a complete documentation project pre-configured with `@larbish/docus-layer`.

### Option 2: Manual Setup

#### Option 2a: Nuxt Config

Add the layer to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  extends: ['@larbish/docus-layer']
})
```

#### Option 2b: CLI Usage

Use directly with Nuxt CLI:

```bash
# Development
nuxt dev --extends @larbish/docus-layer

# Build
nuxt build --extends @larbish/docus-layer
```

## 🔗 Related Packages

- [`@larbish/docus`](https://www.npmjs.com/package/@larbish/docus) - CLI tools for Docus

## 📄 License

[MIT License](./LICENSE)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- 📖 [Documentation](https://docus.dev)
- 🐛 [Issues](https://github.com/nuxtlabs/docus/issues)
- 💬 [Discussions](https://github.com/nuxtlabs/docus/discussions)

---

Made with ❤️ for the Nuxt community 