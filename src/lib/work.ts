import { workEntries, type WorkEntry } from '@/data/work';

/**
 * Shared views of src/data/work.ts for the homepage Background list and /work.
 * Never mutate workEntries; always sort copies.
 */

const time = (date: string) => (date === 'Present' ? Infinity : new Date(date).getTime());
const year = (date: string) => (date === 'Present' ? 'now' : date.slice(-4));

/** "2022–2025", "2025–now", or a single year. */
export const yearSpan = (from: string, to: string) =>
  year(from) === year(to) ? year(from) : `${year(from)}–${year(to)}`;

/** "Aug 2022–Jun 2023", "Aug 2025–now". */
export const monthSpan = (e: WorkEntry) =>
  `${e.startDate}–${e.endDate === 'Present' ? 'now' : e.endDate}`;

/** Splits "Teaching Assistant — TDT4140 Software Engineering" into title and context. */
export const splitRole = (role: string) => {
  const [title, ...rest] = role.split(/\s+—\s+/);
  return { title, context: rest.join(' — ') || undefined };
};

/** "Trondheim, Norway" → "Trondheim". */
export const city = (location: string) => location.split(',')[0].trim();

const thesisPattern = /^master['’]s thesis:\s*/i;

/** The thesis title, if one of the entry's bullets is "Master's thesis: …". */
export const thesisOf = (e: WorkEntry) =>
  e.bullets.find((b) => thesisPattern.test(b))?.replace(thesisPattern, '');

/** Bullets without the thesis line (shown separately). */
export const bulletsWithoutThesis = (e: WorkEntry) =>
  e.bullets.filter((b) => !thesisPattern.test(b));

const newestFirst = (entries: WorkEntry[]) =>
  [...entries].sort((a, b) => time(b.startDate) - time(a.startDate));

export interface EmployerGroup {
  company: string;
  /** The entry carrying the homepage summary, or the newest role. */
  lead: WorkEntry;
  /** Hand-picked summary title from `homepage.title`, else the newest role. */
  title: string;
  highlight?: string;
  /** Years across every role at this employer. */
  years: string;
  /** Roles, newest first. */
  roles: WorkEntry[];
}

/** Employers ordered by their most recent role, each with its roles newest first. */
export function employerGroups(): EmployerGroup[] {
  const byCompany = new Map<string, WorkEntry[]>();
  for (const entry of newestFirst(workEntries.filter((e) => e.type === 'work'))) {
    byCompany.set(entry.company, [...(byCompany.get(entry.company) ?? []), entry]);
  }
  return [...byCompany.entries()].map(([company, roles]) => {
    const lead = roles.find((e) => e.homepage) ?? roles[0];
    const first = roles.reduce((a, b) => (time(a.startDate) <= time(b.startDate) ? a : b));
    const last = roles.reduce((a, b) => (time(a.endDate) >= time(b.endDate) ? a : b));
    return {
      company,
      lead,
      title: lead.homepage?.title ?? splitRole(lead.role).title,
      highlight: lead.homepage?.highlight,
      years: yearSpan(first.startDate, last.endDate),
      roles,
    };
  });
}

/** Degrees, newest first. */
export const education = () => newestFirst(workEntries.filter((e) => e.type === 'education'));
