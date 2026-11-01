# Triangle Docs

Documentation for the modular Triangle PHP ecosystem built on [Localzet Server](https://github.com/localzet/Server): reusable libraries, the HTTP `Web` track and the WebSocket `WS` track. [Compatibility](/compatibility) summarizes declared Composer requirements and documents known package limitations.

The documentation site is built with [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

Use the committed npm lockfile to install the documentation site dependencies:

```bash
npm ci
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Build and deployment

Create a production build locally with:

```bash
npm run build
```

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the static site and publishes it to GitHub Pages when a commit reaches `main` or `master`. A successful workflow run is the deployment signal; the public site is available at [triangle.localzet.com](https://triangle.localzet.com).
