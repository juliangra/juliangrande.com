import type { Project } from '@/data/projects';

export type StarMap = Record<string, number>;

const HEADERS = { Accept: 'application/vnd.github.v3+json' };

/**
 * Extracts { owner, repo } from a GitHub URL.
 * e.g. "https://github.com/juliangra/sendenv" → { owner: "juliangra", repo: "sendenv" }
 */
export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    const parts = new URL(url).pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], repo: parts[1] };
  } catch {
    return null;
  }
}

/** Convenience: returns just the repo name from a GitHub URL. */
export function repoNameFromUrl(url: string): string | null {
  return parseGitHubUrl(url)?.repo ?? null;
}

/**
 * Builds a star map for a list of projects.
 *
 * - Fetches all repos for `defaultOwner` in one bulk call.
 * - For any project whose GitHub URL belongs to a different org, fetches that
 *   individual repo separately.
 * - Always returns gracefully — missing/failed lookups just return 0.
 */
export async function buildProjectStarMap(
  projects: Project[],
  defaultOwner: string,
): Promise<StarMap> {
  const map: StarMap = {};

  // Collect repos from other orgs that we need to fetch individually.
  const extraRepos: Array<{ owner: string; repo: string }> = [];
  for (const project of projects) {
    if (!project.links.github) continue;
    const parsed = parseGitHubUrl(project.links.github);
    if (parsed && parsed.owner !== defaultOwner) {
      extraRepos.push(parsed);
    }
  }

  // Fetch all repos for the default owner in one call.
  const bulkFetch = fetch(
    `https://api.github.com/users/${defaultOwner}/repos?per_page=100`,
    { headers: HEADERS },
  )
    .then(async (res) => {
      if (!res.ok) return;
      const repos = (await res.json()) as Array<{ name: string; stargazers_count: number }>;
      for (const r of repos) map[r.name] = r.stargazers_count;
    })
    .catch(() => {});

  // Fetch individual repos from other orgs in parallel.
  const extraFetches = extraRepos.map(({ owner, repo }) =>
    fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: HEADERS })
      .then(async (res) => {
        if (!res.ok) return;
        const data = (await res.json()) as { name: string; stargazers_count: number };
        map[data.name] = data.stargazers_count;
      })
      .catch(() => {}),
  );

  await Promise.all([bulkFetch, ...extraFetches]);
  return map;
}
