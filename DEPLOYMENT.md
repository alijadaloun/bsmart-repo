# GitHub Pages Deployment Guide

This guide will help you deploy your B-Smart Astro site to GitHub Pages.

## Prerequisites

- A GitHub account
- Your repository pushed to GitHub

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Update Site URL (if needed)

If your repository is named something other than your username/organization, you'll need to update the site URL:

1. Your GitHub Pages URL will be: `https://[username].github.io/[repository-name]/`
2. Update `src/config.yaml`:
   ```yaml
   site:
     site: 'https://[username].github.io/[repository-name]'
     base: '/[repository-name]/'  # Only if not deploying from root
   ```

   **Note:** If your repository is named `[username].github.io`, use:
   ```yaml
   site:
     site: 'https://[username].github.io'
     base: '/'
   ```

### 3. Push to GitHub

The GitHub Actions workflow will automatically:
- Build your site when you push to `main` or `master` branch
- Deploy it to GitHub Pages

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once it completes, your site will be live at your GitHub Pages URL

## Custom Domain (Optional)

If you have a custom domain (like `bsmart.com`):

1. Add a `CNAME` file in the `public/` folder with your domain:
   ```
   bsmart.com
   ```

2. Update `src/config.yaml`:
   ```yaml
   site:
     site: 'https://bsmart.com'
     base: '/'
   ```

3. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `[username].github.io`

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Site Not Loading
- Wait a few minutes after deployment (GitHub Pages can take time to update)
- Check the Actions tab to ensure deployment succeeded
- Verify the site URL in `config.yaml` matches your GitHub Pages URL

### Assets Not Loading
- Ensure `base` path in `config.yaml` is correct
- Check that all assets are in the `public/` folder
- Verify paths use relative URLs

## Manual Deployment

You can also trigger the workflow manually:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

