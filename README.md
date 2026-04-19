# Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Cloudflare Workers](https://workers.cloudflare.com). The site highlights featured work, capabilities, and ways to get in touch.

## Getting Started

Install dependencies:

```sh
npm ci
```

Start the local dev server:

```sh
npm run dev
```

Build the site for production:

```sh
npm run build
```

Remove generated build and tool state:

```sh
npm run clean
```

Serve the production build locally:

```sh
npm run preview
```

## Cloudflare Workers

Run the Cloudflare Workers dev server:

```sh
npm run preview:wrangler
```

Deploy to Cloudflare Workers:

```sh
npm ci && npm run build
npm run deploy 
```