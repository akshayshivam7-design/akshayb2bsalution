# GitHub Pages Deployment Guide

To deploy this project to GitHub Pages and resolve blank white page issues:

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push this repository to GitHub on branch `main`.
2. Go to your repository on GitHub:
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Under the **Actions** tab, the automated `Deploy to GitHub Pages` workflow in `.github/workflows/deploy.yml` will automatically build and publish your site with the correct asset paths.

---

### Method 2: Manual `gh-pages` Branch Deployment

If deploying manually or using `gh-pages`:
1. Run:
   ```bash
   npm run build
   ```
2. Deploy the contents of the generated `dist/` directory (NOT the root directory) to the `gh-pages` branch.
