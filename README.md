# JuneTrial

A 4x4 / automotive content website built with Jekyll, designed to run for free on GitHub Pages.

You add content by adding a text file with some fields filled in at the top. You never need to touch the website's design or code to publish a new blog, vehicle, news article or product.

---

# JUNE TRIAL — BEGINNER WEBSITE GUIDE

You don't need to know how to code to run this website. Everything below assumes you know nothing about programming.

## How the website works, in plain terms

- Every blog, vehicle, news article and product is one text file (a `.md` file), living in one of these folders:
  - `/_blogs/`
  - `/_vehicles/`
  - `/_news/`
  - `/_products/`
- Every image lives in a matching folder under `/images/` (e.g. `/images/blogs/`).
- When you push a change to GitHub, **GitHub automatically rebuilds the whole website for you** — you don't need to run anything on your own computer. Wait 1–3 minutes after pushing, then refresh the site.
- You never edit the homepage, the listing pages, or any HTML/CSS file to add content. Adding a file to `/_blogs/` is enough — the blog listing page and homepage "Latest Blogs" section pick it up automatically.

---

## A. How to add a new blog (example: Blog #11)

1. On GitHub, open the folder `/_blogs/`.
2. Click `blog-example.md` to open it, then click the **copy raw contents** or download it, and use **Add file → Create new file** to make a new file.
3. Name the new file something short and web-friendly, all lowercase, words separated by hyphens, ending in `.md` — for example: `winter-tyre-guide.md`.
4. At the top of the file between the `---` lines, fill in:
   - `title:` — your blog's headline
   - `category:` — e.g. `Guide`, `Engineering`, `Trip Report`, or `Gear`
   - `date:` — today's date, in the format `2026-09-01`
   - `author:` — your name
   - `image:` — the path to your image, e.g. `/images/blogs/winter-tyre-guide.jpg`
   - `image_alt:` — a short description of the image (for accessibility and SEO)
   - `excerpt:` — one or two sentences that show on the blog listing card
5. **Delete the line `published: false`** at the very top — that line is what makes the example template invisible on the live site. Every real article should NOT have this line.
6. Write your article below the second `---` line, in plain text. Use a blank line between paragraphs. See "Formatting your content" below for headings, images and tables.
7. Add your image to `/images/blogs/` (see section E below) — the filename must exactly match what you put in the `image:` field.
8. Commit the new file directly on GitHub (there's a "Commit changes" button at the bottom of the file editor), or commit it from your computer if you're using GitHub Desktop or git.
9. Wait 1–3 minutes, then refresh `yoursite.github.io/blogs/` — your new article will be listed automatically, newest first.

Your article will automatically get a clean URL like `/blog/winter-tyre-guide/` — you don't set this yourself.

---

## B. How to add a new product (example: Product #11)

1. Open `/_products/`, copy `product-example.md`, and create a new file — e.g. `arb-fridge-slide.md`.
2. Fill in the front matter fields:
   - `title:` — the product name
   - `category:` — `Recovery`, `Camping`, `Accessories`, or `Tools`
   - `date:` — today's date
   - `image:` — path to your image, e.g. `/images/products/arb-fridge-slide.jpg`
   - `image_alt:` — short image description
   - `price:` — a plain text price, e.g. `"$249.00"` — you type this manually, it's not connected to Amazon
   - `rating:` — a number out of 5, e.g. `4.5`
   - `amazon_url:` — **your Amazon affiliate link goes here.** This is the ONLY place you need to paste it for this product — the "Check Price on Amazon" button reads this one field.
   - `button_text:` — optional, defaults to "Check Price on Amazon"
3. Delete the `published: false` line.
4. Write a short description and a bullet list of features below the second `---`.
5. Add your product image to `/images/products/`.
6. Commit the file. Your product will appear on `/products/` automatically, with the button linking straight to your `amazon_url`.

**Because the Amazon link lives inside each product's own file, you never have to hunt through website code to update it later** — open the product's file, change `amazon_url:`, commit.

---

## C. How to add a new vehicle (example: Vehicle #11)

1. Open `/_vehicles/`, copy `vehicle-example.md`, create a new file — e.g. `toyota-prado.md`.
2. Fill in `title`, `category` (`Ute`, `Wagon`, or `SUV`), `year`, `date`, `image`, `image_alt`, `tagline`, and `key_spec` (a short spec shown on the card, e.g. `2.8L Turbo-Diesel · 150kW`).
3. Fill in the `specs:` list — each line is one row in the "Key Specifications" box, e.g.:
   ```
   specs:
     - { label: "Engine", value: "2.8L Turbo-Diesel I4" }
     - { label: "Power", value: "150kW / 500Nm" }
   ```
4. Delete the `published: false` line.
5. Write the full review below the second `---`.
6. Add the vehicle image to `/images/vehicles/`.
7. Commit. It'll appear on `/vehicles/` automatically.

---

## D. How to add news (example: News #11)

Same process as blogs: copy `/_news/news-example.md`, fill in `title`, `category` (`Industry`, `Regulation`, `Model Release`, or `Event`), `date`, `author`, `image`, `image_alt`, `excerpt`, delete `published: false`, write the article, add the image to `/images/news/`, commit.

---

## E. How to add or replace an image

1. Find the correct folder: `/images/blogs/`, `/images/vehicles/`, `/images/news/`, or `/images/products/`.
2. On GitHub, click **Add file → Upload files** in that folder, and upload your image (`.jpg`, `.png`, or `.webp` all work — `.jpg` is usually the smallest file size for photos).
3. Note the exact filename (it's case-sensitive — `Patrol.jpg` and `patrol.jpg` are different files).
4. Open the matching content file (in `/_blogs/`, `/_vehicles/`, `/_news/`, or `/_products/`) and set the `image:` field to `/images/<folder>/<your-filename>` — for example:
   ```
   image: /images/vehicles/toyota-prado.jpg
   ```
5. Commit both the image and the content file change.

**To replace an existing image** with a new photo but keep the same filename: just upload the new file with the exact same name — GitHub will ask "replace this file?" — confirm, and commit. Nothing else needs to change.

**Image tips:**
- Resize large photos to roughly 1200px wide before uploading — huge camera-resolution photos slow the site down.
- Always fill in `image_alt` with a real description — it helps accessibility and search engines.
- Images use `loading="lazy"` automatically, so you don't need to do anything extra for performance.

---

## F. How to delete an article, vehicle, news item or product

1. Open the file in `/_blogs/`, `/_vehicles/`, `/_news/`, or `/_products/`.
2. Click the trash/delete icon (or delete the file if working locally).
3. Commit the change. The item disappears from its listing page, the homepage, and search automatically. (Its image file is not deleted automatically — delete it separately from `/images/...` if you want to fully remove it.)

---

## G. How to edit an existing article, vehicle, news item or product

1. Open the relevant file.
2. To change the **title, category, date, or Amazon link** — edit the matching line between the `---` marks at the top of the file.
3. To change the **image** — see section E above.
4. To change the **body text** — edit the Markdown text below the second `---` line directly.
5. Commit the change. The live page updates within a couple of minutes.

---

## Formatting your content (Markdown basics)

```
## This is a subheading
### This is a smaller subheading

Regular paragraph text. Leave a blank line between paragraphs.

- Bullet point
- Another bullet point

**Bold text** and *italic text*

![Alt text](/images/blogs/your-image.jpg)

| Column A | Column B |
|---|---|
| Row 1 A  | Row 1 B  |

[Link text](https://example.com)
```

To link to another page on your own site, use a relative path like `[read our tyre guide](/blog/tyre-pressure-guide/)`.

---

# GitHub setup

1. Create a new repository on GitHub. If you want the site at `https://yourusername.github.io`, name the repo exactly `yourusername.github.io`. If you want it at a sub-path instead (`https://yourusername.github.io/junetrial`), name it whatever you like (e.g. `junetrial`) and set `baseurl: "/junetrial"` in `_config.yml`.
2. Upload every file and folder from this project into that repository (drag-and-drop works fine on GitHub's web interface for a first upload, or use GitHub Desktop / git if you're comfortable with it).
3. Open `_config.yml` and update:
   - `url:` to your actual GitHub Pages URL
   - `baseurl:` (leave blank unless using a sub-path, see step 1)
   - `email:` and any social links you want to show

# GitHub Pages setup

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch".
3. Choose the `main` branch and the `/ (root)` folder, then save.
4. GitHub will build the site automatically (this takes a minute or two the first time). Your URL will be shown at the top of the Pages settings once it's live.
5. Every time you commit a change to `main` from now on, the site rebuilds automatically — no extra steps needed.

# Custom domain

1. Buy your domain from any registrar (e.g. Namecheap, GoDaddy, Google Domains).
2. In your repository's **Settings → Pages**, enter your domain under "Custom domain" and save — GitHub will create a `CNAME` file in your repo automatically.
3. At your domain registrar, add the DNS records GitHub shows you (usually a few `A` records for an apex domain, or a `CNAME` record if you're using a `www` subdomain).
4. Wait for DNS to propagate (can take a few hours), then tick "Enforce HTTPS" in the Pages settings once it's available.
5. Update `url:` in `_config.yml` to your new custom domain and commit.

# Testing checklist before you tell people about the site

- [ ] Homepage loads and all sections (Featured Vehicles, Latest Blogs, Latest News, Featured Products) show content
- [ ] Vehicle, Blog, News and Products listing pages all show their 10 sample items
- [ ] Clicking a "Read More" / "View Product" button opens the correct individual page
- [ ] Mobile menu (hamburger icon) opens and closes correctly on a phone-sized screen
- [ ] Search (magnifying glass icon) returns results when you type a real word from your content
- [ ] Every sample Amazon button currently points at a placeholder URL — replace these with real affiliate links before publishing, or clearly mark them as inactive
- [ ] `_config.yml` has your real site `url`, `email`, and social links filled in
- [ ] About Us, Privacy Policy, Affiliate Disclosure and Terms pages have your real content instead of placeholders
- [ ] Every image has meaningful `image_alt` text
- [ ] Try adding one real test blog following section A above, end-to-end, before adding all your real content

---

# For developers: file structure reference

```
/
├── _config.yml          site settings (title, url, collections)
├── Gemfile               tells GitHub which Jekyll plugins to use
├── index.html            homepage
├── about.md, contact.md, privacy-policy.md, affiliate-disclosure.md, terms.md
├── vehicles/index.html   vehicle listing page
├── blogs/index.html      blog listing page
├── news/index.html       news listing page
├── products/index.html   product listing page
├── search.json           auto-generated search index (do not edit)
├── _vehicles/            one .md file per vehicle (content)
├── _blogs/                one .md file per blog article (content)
├── _news/                 one .md file per news article (content)
├── _products/             one .md file per product (content)
├── images/
│   ├── vehicles/ blogs/ news/ products/    (your uploaded images)
├── _layouts/             page templates — DO NOT need editing to add content
├── _includes/            reusable header/footer/card snippets
└── assets/
    ├── css/style.css      site styling
    └── js/main.js         mobile menu + search behaviour
```

This structure was chosen because GitHub Pages runs Jekyll natively — no build step, no npm, no React. Content lives in "collections" (`_vehicles`, `_blogs`, `_news`, `_products`), and every listing page, the homepage, and search all read from those collections automatically. Adding a file is the entire publishing step.
