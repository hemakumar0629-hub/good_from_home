# Good From Home

A static website for finding meal ideas from household ingredients, exploring cuisines, and looking up food products.

## Files

- `index.html` — website content
- `styles.css` — layout and visual styles
- `script.js` — ingredient matching, cuisine filters, and search behavior

## Open in Visual Studio Code

Open `GoodFromHome.code-workspace` in Visual Studio Code. To preview the site with automatic refresh, install the recommended **Live Server** extension, open `index.html`, then choose **Go Live**. You can also open `index.html` directly in a browser. Product and country searches need an internet connection.

## Vercel hosting

This is a static site and is ready to deploy to Vercel. The `vercel.json` file configures clean URLs, and `.vercelignore` keeps project notes and editor settings out of the deployed site.

For a free personal deployment, use Vercel's Hobby plan. Import this folder as a project, choose **Other** as the framework preset, leave the build command empty, and deploy from the folder root. Vercel's Hobby plan is free for personal projects; see the [Hobby plan details](https://vercel.com/docs/plans/hobby).
