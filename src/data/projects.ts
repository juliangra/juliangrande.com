export interface ProjectLink {
  github?: string;
  live?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  tags: string[];
  year: number;
  links: ProjectLink;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    name: 'juliangrande.com',
    description: 'This site — a personal portfolio with a blog, project showcase, and work timeline, built with Astro and Tailwind CSS.',
    longDescription: `A fully static personal website built with Astro 5 and Tailwind CSS v4.
Features MDX-powered blog posts with syntax highlighting, a filterable project grid, animated work timeline, dark mode, RSS feed, and sitemap.
Designed from scratch with a focus on clean typography, generous whitespace, and subtle motion.`,
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX'],
    tags: ['frontend', 'open-source'],
    year: 2025,
    links: {
      github: 'https://github.com/juliangra/portfolio',
      live: 'https://juliangrande.com',
    },
    featured: true,
  },
  {
    slug: 'sendenv',
    name: 'sendenv',
    description: 'A CLI tool to quickly and securely share .env files using 1Password, written in Rust.',
    longDescription: `sendenv is a developer CLI utility that makes sharing \`.env\` files safe and frictionless.
Instead of pasting secrets into Slack or email, it encrypts and stores them in 1Password and generates a shareable reference that recipients can pull directly to their local environment.
Written in Rust for a fast, portable single binary with no runtime dependencies.`,
    stack: ['Rust', '1Password', 'CLI'],
    tags: ['cli', 'developer-tools', 'open-source', 'rust'],
    year: 2024,
    links: {
      github: 'https://github.com/juliangra/sendenv',
    },
    featured: true,
  },
  {
    slug: 'emoj-ai',
    name: 'emoj-ai',
    description: 'An AI-powered web app that recommends emojis for any text using Google Gemini.',
    longDescription: `emoj-ai is a fun, full-stack web application that uses Google Gemini to analyse a piece of text and suggest the most fitting emojis for it. The app is built with Next.js and TypeScript, stores usage data in PostgreSQL, and is deployed on Vercel. A lightweight project exploring AI API integration and product UX around generative outputs.`,
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Google Gemini', 'Vercel'],
    tags: ['fullstack', 'ai', 'react', 'open-source'],
    year: 2024,
    links: {
      github: 'https://github.com/juliangra/emoj-ai',
    },
    featured: true,
  },
  {
    slug: 'trpc-next-formdata-app-router',
    name: 'tRPC FormData App Router',
    description: 'A template demonstrating how to submit FormData with tRPC 11 using the Next.js App Router.',
    longDescription: `A minimal, well-structured template that solves a non-obvious problem: submitting multipart \`FormData\` (including file uploads) via tRPC 11 in a Next.js 14 App Router project.
Published as a public template on GitHub for other developers to clone and build upon.
Includes TypeScript, server actions, and full type safety end-to-end.`,
    stack: ['Next.js', 'TypeScript', 'tRPC', 'React'],
    tags: ['fullstack', 'react', 'developer-tools', 'open-source'],
    year: 2024,
    links: {
      github: 'https://github.com/juliangra/trpc-next-formdata-app-router',
    },
    featured: false,
  },
  {
    slug: 'dotfiles',
    name: 'dotfiles',
    description: 'Personal dotfiles with an install helper script to set up new machines from scratch.',
    longDescription: `A curated collection of configuration files for my development environment — shell, editor (Neovim / LunarVim), Git, and tooling. Includes an install helper script that bootstraps a new machine end-to-end with a single command. 
    Continuously updated as my workflow evolves.`,
    stack: ['Lua', 'Shell', 'Neovim'],
    tags: ['developer-tools', 'open-source'],
    year: 2024,
    links: {
      github: 'https://github.com/juliangra/dotfiles',
    },
    featured: false,
  },
  {
    slug: 'dotcountries',
    name: 'dotCountries',
    description: 'A quick and easy encyclopedia with basic information about countries and territories worldwide.',
    longDescription: `dotCountries is a TypeScript web application that lets users look up key facts about any country or territory — population, capital, region, languages, currencies, and more.
Data is sourced from a public REST API and displayed through a clean, fast interface.`,
    stack: ['TypeScript', 'React'],
    tags: ['frontend', 'open-source'],
    year: 2023,
    links: {
      github: 'https://github.com/juliangra/dotCountries',
    },
    featured: false,
  },
  {
    slug: 'rick-and-morty-wiki-vue',
    name: 'Rick and Morty Wiki (Vue)',
    description: 'A searchable character and episode wiki for Rick and Morty, built with Vue, TypeScript, GraphQL, and PostgreSQL.',
    longDescription: `Built for the IT2810 Web Development course at NTNU in fall 2022. The app allows users to search, filter, and browse characters and episodes from Rick and Morty.
Data is fetched from a custom GraphQL API backed by PostgreSQL, with the frontend written in Vue 3 and TypeScript. Includes pagination, favouriting, and responsive design.`,
    stack: ['Vue 3', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    tags: ['fullstack', 'vue', 'open-source'],
    year: 2022,
    links: {
      github: 'https://github.com/juliangra/rick-and-morty-wiki-vue',
    },
    featured: false,
  },
  {
    slug: 'rick-and-morty-wiki-react',
    name: 'Rick and Morty Wiki (React)',
    description: 'A React + TypeScript take on the same Rick and Morty wiki, with GraphQL and PostgreSQL.',
    longDescription: `A parallel implementation of the NTNU IT2810 course project, this time using React and TypeScript instead of Vue. Exploring how the same product decisions — GraphQL API, PostgreSQL backend, search, filtering, and pagination — feel when expressed in React's component model.`,
    stack: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    tags: ['fullstack', 'react', 'open-source'],
    year: 2022,
    links: {
      github: 'https://github.com/juliangra/rick-and-morty-wiki-react',
    },
    featured: false,
  },
  {
    slug: 'skipctl',
    name: 'skipctl',
    description: 'An open-source CLI tool for network troubleshooting and Kubernetes manifest management, contributed to at Bekk.',
    longDescription: `skipctl is an open-source developer tool maintained by Kartverket (the Norwegian Mapping Authority). 
    It provides a simple client and server for network diagnostics — including ping and port-probe commands that execute against remote API servers — as well as a suite of commands for working with Skiperator Kubernetes manifests (render, validate, format, and diff).  
    Contributed to this project during work at Bekk, where it is used in production CI/CD pipelines.`, stack: ['Go', 'Kubernetes', 'gRPC', 'Docker'],
    tags: ['cli', 'developer-tools', 'open-source', 'backend', 'kubernetes', 'go'],
    year: 2025,
    links: {
      github: 'https://github.com/kartverket/skipctl',
      live: 'https://skip.kartverket.no',
    },
    featured: false,
  },
  {
    slug: 'finance-manager',
    name: 'FinanceManager',
    description: 'An online banking management system with a JavaFX GUI, built as an early university project.',
    longDescription: `FinanceManager is a desktop banking simulation built with Java and JavaFX.
Users can create accounts, make deposits and withdrawals, transfer funds between accounts, and view transaction history. An early exploration of OOP principles, event-driven GUI design, and MVC architecture.`,
    stack: ['Java', 'JavaFX'],
    tags: ['desktop', 'open-source'],
    year: 2021,
    links: {
      github: 'https://github.com/juliangra/FinanceManager',
    },
    featured: false,
  },
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
