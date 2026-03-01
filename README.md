# juliangrande.com 🌊

My personal website and blog. Built from scratch in early 2026 to replace an outdated single-page CV — [juliangrande.com](https://juliangrande.com).

---

## 🏗️ How it's built

| Technology | Role |
|---|---|
| [Astro 5](https://astro.build) | Framework — ships zero JS by default, first-class MDX, built-in View Transitions and sitemap |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling — configured entirely in CSS via `@tailwindcss/vite`, no config file needed |
| MDX + Content Collections | Blog posts — git-versioned, type-safe frontmatter schemas via Zod, no CMS overhead |
| TypeScript (strict) | Language — end-to-end type safety across data, schemas, and components |
| [astro-icon](https://github.com/natemoo-re/astro-icon) + Lucide | Icons — inline SVGs generated at build time, zero runtime cost |
| [Shiki](https://shiki.style) | Syntax highlighting — built into Astro's MDX integration |
| [Bun](https://bun.sh) | Runtime & package manager |
| [Vercel](https://vercel.com) | Hosting — static output, automatic preview deployments |

---

## 📁 Project structure

```
src/
├── content/
│   ├── config.ts          ← Zod schemas for Content Collections
│   └── blog/              ← MDX blog posts (one file = one post)
├── data/
│   ├── site.ts            ← Global config: name, socials, nav, "now" items
│   ├── work.ts            ← Work experience and education entries
│   └── projects.ts        ← Project portfolio entries
├── lib/
│   └── github.ts          ← Fetches GitHub star counts at build time (no API key)
├── styles/
│   └── global.css         ← Tailwind v4 setup, teal accent palette, CSS variables
├── layouts/
│   ├── BaseLayout.astro   ← HTML shell, SEO head, Nav, Footer, theme script
│   └── BlogLayout.astro   ← Blog post wrapper with prose styles
├── components/
│   ├── ui/                ← Badge, SectionHeading, GitHubIcon
│   ├── layout/            ← Nav, Footer, ThemeToggle
│   ├── illustrations/     ← HeroIllustration, SectionDoodle
│   └── sections/          ← Hero, Timeline, ProjectCard, BlogCard, etc.
└── pages/
    ├── index.astro        ← /
    ├── work.astro         ← /work  (filterable by Work / Education)
    ├── about.astro        ← /about
    ├── contact.astro      ← /contact
    ├── projects/
    │   ├── index.astro    ← /projects  (filterable by tag)
    │   └── [slug].astro   ← /projects/[slug]
    ├── blog/
    │   ├── index.astro    ← /blog  (filterable by tag)
    │   └── [...slug].astro ← /blog/[slug]
    ├── rss.xml.ts         ← /rss.xml
    └── robots.txt.ts      ← /robots.txt
```

---

## 🚀 Running locally

```bash
bun install      # install dependencies
bun run dev      # start dev server at http://localhost:4321
bun run build    # production build → dist/
bun run preview  # preview the built output locally
bun run check    # TypeScript / Astro type checking
bun run lint     # ESLint
bun run format   # Prettier
```

---

## ✍️ Adding content

### New blog post

Create a `.mdx` file in `src/content/blog/`. The filename becomes the URL slug.

```mdx
---
title: "Post title"
description: "One sentence for the list view and SEO."
date: 2026-06-01
tags: ["web", "typescript"]
draft: false   # set true to hide from lists and RSS
---

Post content here. Full MDX supported.
```

### New work or education entry

Add an entry to the `workEntries` array in `src/data/work.ts`:

```ts
{
  company: 'Company Name',
  role: 'Job Title',
  startDate: 'Jan 2026',
  endDate: 'Present',
  location: 'Oslo, Norway',
  summary: 'One-sentence summary shown in the timeline card.',
  bullets: ['Key responsibility', 'Notable achievement'],
  tech: ['React', 'TypeScript'],
  type: 'work',           // 'work' | 'education'
  url: 'https://...',    // optional — links the company name
},
```

### New project

Add an entry to the `projects` array in `src/data/projects.ts`. GitHub star counts are fetched automatically at build time — no configuration needed.

```ts
{
  slug: 'my-project',
  name: 'My Project',
  description: 'One-line summary for the project card.',
  longDescription: `Longer description for the detail page.`,
  stack: ['React', 'TypeScript'],
  tags: ['frontend', 'open-source'],
  year: 2026,
  links: {
    github: 'https://github.com/juliangra/my-project',
    live: 'https://my-project.com',
  },
  featured: false,  // true = shown in the "Featured Work" section on the home page
},
```

---

## ✨ Features

- **Dark / light mode** — defaults to light, persisted in `localStorage`, anti-FOUC script runs before first paint and after every page transition
- **Filterable timeline** — the `/work` page filters by Work / Education
- **Filterable project grid** — the `/projects` page filters by tag
- **GitHub stars** — fetched at build time from the GitHub API, works for repos across different orgs
- **RSS feed** — `/rss.xml` includes all non-draft blog posts
- **Sitemap** — auto-generated at build time by `@astrojs/sitemap`
- **View Transitions** — smooth page navigation via Astro's built-in `<ViewTransitions />`
- **SEO** — canonical URLs, OpenGraph tags, and `robots.txt` configured in `BaseLayout.astro`
