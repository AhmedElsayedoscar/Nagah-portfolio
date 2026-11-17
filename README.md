# Ahmed Nagah — Portfolio

A responsive React and Vite portfolio for Ahmed Nagah, presenting video editing, graphic design, and practical fitness experience in a dark editorial visual system.

## Run locally

```sh
npm install
npm run dev
```

Build for local preview with `npm run build` and `npm run preview`.

## Update the portfolio

- Edit `src/data/profile.js` to update the introduction, experience, and contact details.
- Edit `src/data/projects.js` to add, remove, or update video, design, and fitness portfolio entries.
- Put replacement images in `public/images/` and update each project's `image` field. Keep the `placeholder` flag enabled until the displayed item is Ahmed's actual work; set it to `false` only for real work.
- Video entries accept an optional `videoUrl`. Add a real video URL there to enable playback in the preview dialog.
- Social links are intentionally empty until Ahmed supplies his real profiles.

All bundled portfolio visuals are concept placeholders, not client work or Ahmed's personal images. The contact form opens WhatsApp with the visitor's message prefilled; it does not claim to deliver or store a message before the visitor sends it.

## Deploy

The repository includes a GitHub Actions workflow for GitHub Pages. It builds the site with the `/Nagah-portfolio/` base path and deploys the generated `dist/` directory when code is pushed to `main`.
