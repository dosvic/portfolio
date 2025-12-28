# Portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on [Cloudflare Workers](https://workers.cloudflare.com). The site highlights featured work, capabilities, and ways to get in touch.

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

## Cloudflare Workers

Run the Cloudflare Workers dev server (requires build first):

```sh
npm ci && npm run build
wrangler dev
```

Deploy to Cloudflare Workers (requires build first):

```sh
npm ci && npm run build
wrangler deploy
```

## Project Structure

```
/
├── public/
│   ├── _headers         # Cloudflare headers configuration
│   ├── _redirects       # Cloudflare redirects configuration
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/      # Reusable Astro components
│   ├── i18n/            # Internationalization utilities and translations
│   ├── layouts/         # Shared Astro layouts
│   ├── pages/           # Route files with dynamic [lang] support
│   └── styles/          # Global CSS
├── astro.config.mjs     # Astro configuration
├── tsconfig.json
└── wrangler.toml        # Cloudflare Workers configuration
```
