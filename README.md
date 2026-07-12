# Portfolio

Dependency-free personal portfolio built with static HTML, CSS, and JavaScript. The deployable site lives in `public/` and is served directly through Cloudflare Static Assets without Worker code.

## Edit and preview

Edit the checked-in files directly. There is no package installation or build step.

Serve the site locally with Python's standard library:

```sh
python3 -m http.server 8000 --directory public
```

Then open [http://localhost:8000/en/](http://localhost:8000/en/) or [http://localhost:8000/de/](http://localhost:8000/de/).

The local static server does not emulate Cloudflare `_redirects` or `_headers` behavior.

## Verify

After a deployment, verify the live redirects, headers, content types, and cache policies:

```sh
bash scripts/verify_deployment.sh https://denizosmanovic.com
```

## Routing

- `/` permanently redirects to `/en/`.
- `/index.html`, `/en/index.html`, and `/de/index.html` permanently redirect to their canonical language URLs.
- Valid files are served directly from `public/` without invoking Worker code.
- Unmatched paths return Cloudflare's generic `404`; no custom error page or Worker code executes.

## Deployment

Pushes to `main` deploy `public/` to Cloudflare Static Assets, then test the live deployment. The repository has no Worker code, application dependencies, dependency lockfile, or build output.
