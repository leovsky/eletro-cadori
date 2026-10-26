# Project conventions

- Use Vite's public base as the BrowserRouter basename and keep route definitions and internal Link destinations unprefixed, so development at the root and production under a subpath share the same routes.
- Keep the production base in Vite aligned with the GitHub Pages workflow; imported assets are resolved by Vite against that base.
- Bundle managed asset pointers into emitted Vite assets during builds, while preserving their managed URLs during development, because external static hosts do not implement Lovable's asset endpoint.
- GitHub Pages deployments copy the generated index.html to 404.html because Pages does not provide SPA fallback for direct visits to internal routes; the fallback renders the app but Pages may retain HTTP status 404 for those visits.