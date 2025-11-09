# GitHub Pages Deployment Guide

## ✅ Fixed Issues

1. **Added `.nojekyll` file creation** - This prevents GitHub Pages from using Jekyll, which can interfere with your React app's file structure.

## 🚀 Deployment Steps

### 1. Verify Your Configuration

- ✅ **Base path**: Set to `/Wedding/` in `vite.config.js` (matches your repository name)
- ✅ **Homepage**: Set to `https://rr20260410.github.io/Wedding/` in `package.json`
- ✅ **Deploy script**: Configured to use `gh-pages -d dist`

### 2. Deploy to GitHub Pages

Run the following command in your terminal:

```bash
npm run deploy
```

This will:
1. Build your site (`npm run build`)
2. Create a `.nojekyll` file in the `dist` folder
3. Deploy the `dist` folder to the `gh-pages` branch

### 3. Configure GitHub Pages Settings

After running the deploy command, you need to enable GitHub Pages in your repository:

1. Go to your repository on GitHub: `https://github.com/rr20260410/Wedding`
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

### 4. Wait for Deployment

- GitHub Pages may take a few minutes to deploy your site
- You can check the deployment status in the **Actions** tab (if enabled) or in the **Pages** settings
- Your site should be available at: `https://rr20260410.github.io/Wedding/`

## 🔍 Troubleshooting

### Issue: Site shows 404 or blank page

**Solution:**
1. Verify the base path in `vite.config.js` matches your repository name exactly (case-sensitive)
2. Check that GitHub Pages is enabled and set to the `gh-pages` branch
3. Ensure the `.nojekyll` file exists in the `gh-pages` branch
4. Wait 5-10 minutes for GitHub to propagate changes

### Issue: Assets (CSS/JS) not loading

**Solution:**
1. Check that the `base` path in `vite.config.js` starts and ends with `/` (e.g., `/Wedding/`)
2. Verify the built `dist/index.html` has correct asset paths (should start with `/Wedding/assets/`)
3. Clear your browser cache and try again

### Issue: Deploy command fails

**Possible causes:**
1. **Authentication**: Make sure you're authenticated with GitHub (check with `gh auth status`)
2. **Repository access**: Verify you have write access to the repository
3. **Git not in PATH**: Ensure Git is installed and accessible from your terminal

**Solution:**
```bash
# Install gh CLI if not already installed
# Then authenticate:
gh auth login

# Or use a personal access token with gh-pages:
# Set GITHUB_TOKEN environment variable
```

### Issue: Changes not appearing after deployment

**Solution:**
1. Wait 5-10 minutes for GitHub Pages to rebuild
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check the `gh-pages` branch to verify files were deployed
4. Verify the deployment was successful in repository Settings > Pages

## 📝 Verification Checklist

- [ ] Repository name matches base path (`/Wedding/`)
- [ ] `vite.config.js` has correct `base` configuration
- [ ] `package.json` has correct `homepage` URL
- [ ] `.nojekyll` file is created during build (in `dist` folder)
- [ ] GitHub Pages is enabled in repository settings
- [ ] GitHub Pages source is set to `gh-pages` branch
- [ ] Deploy command runs without errors
- [ ] `gh-pages` branch exists and contains your built files

## 🔗 Useful Links

- Your site URL: `https://rr20260410.github.io/Wedding/`
- GitHub Pages documentation: https://docs.github.com/en/pages
- gh-pages package: https://github.com/tschaub/gh-pages

