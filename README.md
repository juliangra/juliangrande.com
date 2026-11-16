# juliangrande.com 🌊

My personal website. Built from scratch in early 2026 to replace an outdated single-page CV — [juliangrande.com](https://juliangrande.com).

---

## 🏗️ How it's built

| Technology | Role |
|---|---|
| [Astro 5](https://astro.build) | Framework — ships zero JS by default, built-in client-side routing and sitemap |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling — configured entirely in CSS via `@tailwindcss/vite`, no config file needed |
| TypeScript (strict) | Language — end-to-end type safety across data, schemas, and components |
| [astro-icon](https://github.com/natemoo-re/astro-icon) + Lucide | Icons — inline SVGs generated at build time, zero runtime cost |
| [Bun](https://bun.sh) | Runtime & package manager |
| [Vercel](https://vercel.com) | Hosting — static output, automatic preview deployments |

---

## 📁 Project structure

```
src/
├── data/
│   ├── site.ts            ← Global config: name, socials, nav
│   ├── work.ts            ← Work experience and education entries
│   └── projects.ts        ← Project portfolio entries
├── lib/
│   └── work.ts            ← Groups and formats work.ts for / and /work
├── styles/
│   └── global.css         ← Tailwind v4 setup, teal accent palette, CSS variables
├── layouts/
│   └── BaseLayout.astro   ← HTML shell, SEO head, Nav, Footer, theme script
├── components/
│   ├── layout/            ← Nav, Footer, ThemeToggle
│   ├── home/              ← HomeSection (ruled section layout), SelectedProjects, Background
│   └── sections/          ← Hero
└── pages/
    ├── index.astro        ← /
    ├── work.astro         ← /work  (roles grouped by employer, then education)
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

### New work or education entry

Add an entry to the `workEntries` array in `src/data/work.ts` (it appears on `/work`). To control how an employer shows up in the homepage Background list, add `homepage: { title, highlight }` to one of that employer's entries; the row's years span all of that employer's entries:

```ts
{
  company: 'Company Name',
  role: 'Job Title',
  startDate: 'Jan 2026',
  endDate: 'Present',
  location: 'Oslo, Norway',
  summary: 'One-sentence summary shown on /work.',
  bullets: ['Key responsibility', 'Notable achievement'],
  tech: ['React', 'TypeScript'],
  type: 'work',           // 'work' | 'education'
  url: 'https://...',    // optional — links the company name
},
```

### New project

Add an entry to the `projects` array in `src/data/projects.ts`. Set `featured: true` to show it under "Selected projects" on the homepage; the row links to `links.github` (or `links.live` if there is no repo).

```ts
{
  slug: 'my-project',
  name: 'My Project',
  description: 'One-line summary for the homepage list.',
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
- **Work history** — `/work` groups roles by employer, newest first, followed by education
- **Sitemap** — auto-generated at build time by `@astrojs/sitemap`
- **View Transitions** — smooth page navigation via Astro's built-in `<ClientRouter />`
- **SEO** — canonical URLs, OpenGraph tags, and `robots.txt` configured in `BaseLayout.astro`
