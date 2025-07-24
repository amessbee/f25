# Social Network Analysis I (SNA-I) Course Materials

This repository contains course materials for the Social Network Analysis I course (Fall 2025).

## Course Outline

The main course outline is available at `misc/outline.html` and is automatically deployed to Netlify.

## Deployment

This site is configured for deployment on Netlify:

- The main page (`outline.html`) is served from the `misc/` directory
- Static assets (CSS, images) are cached for optimal performance
- Security headers are configured for safe browsing

## Local Development

To view the course outline locally:

1. Open `misc/outline.html` in your web browser
2. Or serve the files using a local web server:
   ```bash
   cd misc
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/outline.html`

## Structure

- `misc/` - Course outline and assets
  - `outline.html` - Main course outline (HTML version)
  - `styles.css` - Stylesheet for the course outline
  - `outline.tex` - LaTeX version of the outline
- `lec/` - Lecture materials and notebooks
