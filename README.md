# Focal Loom — photography field notes

A static, English-language photography education website with 25 original guides and two useful tools. It is ready to upload to GitHub and deploy on Vercel. No database, account system, API key, or external package is required.

## What's included

- 25 independently accessible, search-engine-readable articles covering camera settings, light, composition, real-world shoots, and image delivery. Each has relevant further reading.
- Exposure Match estimates shutter time when aperture or ISO changes, with assumptions explained on the page.
- Crop Calculator estimates a maximum centered crop and pixel retention. Both tools run locally in the visitor's browser.
- Contact, about, privacy, terms, custom 404, accessible navigation, responsive design, metadata, robots.txt and conditional sitemap.
- The supplied AdSense script (`ca-pub-2936167858814999`) is installed on content pages; the matching `ads.txt` is generated at the site root during the build. Administrative pages and the tools directory do not load the ad script.

## GitHub and Vercel

1. Extract the ZIP. Upload the **contents** of the extracted folder to the root of a GitHub repository: `package.json`, `build.mjs`, `vercel.json`, `assets/`, and `src/` should be at the top level.
2. In Vercel, choose **Add New → Project**, import that repository, and use the **Other** framework preset if asked. `vercel.json` sets the build command and output folder.
3. Deploy. Vercel assigns the production address, such as `your-project.vercel.app`; the actual name depends on the project settings and availability.
4. After the production address exists, add a `SITE_URL` environment variable with the full URL, for example `https://your-project.vercel.app`, then redeploy. Alternatively, enable **Automatically expose System Environment Variables** in Vercel so the build can use `VERCEL_PROJECT_PRODUCTION_URL`. `SITE_URL` takes priority. No deployment-specific preview URL is used as the canonical domain.
5. Check the homepage, several articles and tools, `/ads.txt`, `/robots.txt` and `/sitemap.xml` on the public production URL. If the production URL is unavailable at build time, the build still works but intentionally omits canonical URLs and the sitemap instead of inventing a domain.
6. Add the actual public URL in AdSense Sites, complete ownership verification, and request review. Ensure the AdSense crawler can reach the website without a login. The script and ads.txt support connection, but they do **not** guarantee eligibility, ad delivery, or approval.
7. Review **Privacy & messaging** in AdSense and configure consent as needed. For personalized ads to users in the EEA, UK, or Switzerland, Google requires a certified CMP integrated with IAB TCF; this project does not install a CMP independently.

If you change domains, update `SITE_URL`, redeploy, and review the site's URL in AdSense.

## Local build

Install Node.js 20 or newer and run:

```bash
npm run build
```

The website is generated in `dist/`. To test canonical URLs and the sitemap locally:

```bash
SITE_URL=https://example.vercel.app npm run build
```

Serve the `dist/` folder with a static file server. No `npm install` is needed for the project itself.

## Editing

- `src/articles.mjs` contains all 25 articles and their references.
- `build.mjs` renders pages, metadata, sitemap, ads.txt, and the AdSense code.
- `assets/site.css`, `assets/site.js`, and the original SVG graphics control design and interactions.
- The contact address is `chinachen05@gmail.com`.

The initial publication date is November 15, 2026. If an article is substantively updated, update its visible date and structured-data modification date. Review the privacy policy, terms, consent settings and ad behavior whenever you add third-party services or change how data is processed.

## Helpful references

- [Google: prepare your pages for AdSense](https://support.google.com/adsense/answer/7299563?hl=en)
- [Google: site management and review](https://support.google.com/adsense/answer/12131223?hl=en)
- [Google: consent requirements for EEA, UK, and Switzerland](https://support.google.com/adsense/answer/13554116?hl=en)
- [Vercel: system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
