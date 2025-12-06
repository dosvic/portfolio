# Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The site highlights featured work, capabilities, and ways to get in touch.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

Build the site for production:

```sh
npm run build
```

Serve the production build locally:

```sh
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, images, etc.)
├── src/
│   ├── layouts/         # Shared Astro layouts
│   ├── pages/           # Route files (index.astro)
│   └── styles/          # Global Tailwind entrypoint
├── astro.config.mjs     # Astro configuration with Tailwind plugin
├── package.json
└── tsconfig.json
```