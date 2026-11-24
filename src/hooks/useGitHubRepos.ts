import { useEffect, useState } from 'react';
import { GitHubRepo } from '../types/github';
import { REPOS_FALLBACK, categorizeRepo } from '../data/reposFallback';

interface UseGitHubReposState {
  repos: GitHubRepo[];
  loading: boolean;
  isLive: boolean;
  lastSync: string | null;
}

const CACHE_KEY = 'aocastro_repos_cache_v1';
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutes

function enrichRepos(list: GitHubRepo[]): GitHubRepo[] {
  return list
    .filter((repo) => !repo.fork)
    .map((repo) => ({
      ...repo,
      category: categorizeRepo(repo),
    }))
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
}

export function useGitHubRepos(username = 'aocastro'): UseGitHubReposState {
  const [state, setState] = useState<UseGitHubReposState>(() => ({
    repos: enrichRepos(REPOS_FALLBACK),
    loading: true,
    isLive: false,
    lastSync: null,
  }));

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const cachedRaw = window.sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw) as { timestamp: number; data: GitHubRepo[] };
          if (Date.now() - cached.timestamp < CACHE_TTL_MS && Array.isArray(cached.data)) {
            if (!cancelled) {
              setState({
                repos: enrichRepos(cached.data),
                loading: false,
                isLive: true,
                lastSync: new Date(cached.timestamp).toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              });
            }
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
          {
            headers: { Accept: 'application/vnd.github+json' },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = (await response.json()) as GitHubRepo[];
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Empty repository payload');
        }

        const now = Date.now();
        window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: now, data }));

        if (!cancelled) {
          setState({
            repos: enrichRepos(data),
            loading: false,
            isLive: true,
            lastSync: new Date(now).toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });
        }
      } catch {
        if (!cancelled) {
          setState({
            repos: enrichRepos(REPOS_FALLBACK),
            loading: false,
            isLive: false,
            lastSync: null,
          });
        }
      }
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
