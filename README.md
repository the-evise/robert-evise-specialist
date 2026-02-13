# Structural Execution Landing Page

Single-page static site for structural execution diagnostics, built with Astro.

## Up and Running

```bash
npm install
npm run dev
```

Open the local URL from Astro (usually `http://localhost:4321`).

Quick validation:

```bash
npm run build
npm run check
```

## GitHub Pages

Deployment is configured via `.github/workflows/deploy.yml` and runs on pushes to `main`.
In repository settings, set **Pages** source to **GitHub Actions**.
