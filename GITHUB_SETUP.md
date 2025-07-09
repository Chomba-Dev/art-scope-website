# Instructions for Creating GitHub Repository

## Option 1: Using GitHub CLI (if you have it installed)

1. Install GitHub CLI if you haven't: https://cli.github.com/
2. Login to GitHub: `gh auth login`
3. Create repository: `gh repo create art-scope-website --public --description "Official website for Art Scope Enterprises Limited - Kitwe, Zambia"`
4. Push code: `git push -u origin master`

## Option 2: Using GitHub Web Interface (Recommended)

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `art-scope-website`
   - **Description**: `Official website for Art Scope Enterprises Limited - Kitwe, Zambia`
   - **Visibility**: Public (or Private if you prefer)
   - **DON'T** initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/art-scope-website.git`)

## After Creating the Repository on GitHub:

Run these commands in your terminal:

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/art-scope-website.git

# Push your code to GitHub
git push -u origin master
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Repository Features to Enable (Optional):

After pushing to GitHub, you can:
1. Enable GitHub Pages for free hosting
2. Add topics/tags like: `nextjs`, `tailwindcss`, `zambia`, `business-website`
3. Set up branch protection rules
4. Configure automated deployments to Vercel/Netlify

## Your Repository is Ready! 🎉

Your Art Scope Enterprises website is now ready for GitHub with:
- ✅ All pages using only navy/yellow brand colors
- ✅ Updated contact info (Jambo Drive Riverside, Kitwe)
- ✅ Updated phone number (+260 97 3577060)
- ✅ All buttons styled in yellow
- ✅ Complete Next.js application
- ✅ Professional README
- ✅ Clean git history
