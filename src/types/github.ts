export type RepoCategory = 'all' | 'research' | 'education' | 'apps';

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics: string[];
  homepage: string | null;
  fork: boolean;
  category?: Exclude<RepoCategory, 'all'>;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  blog: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}
