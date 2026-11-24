import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FolderGit2,
  GitFork,
  RefreshCw,
  Search,
  Star,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { GitHubRepo, RepoCategory } from '../types/github';

interface RepositoriesProps {
  repos: GitHubRepo[];
  loading: boolean;
  isLive: boolean;
  lastSync: string | null;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-amber-400',
  PHP: 'bg-indigo-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-sky-400',
  Hack: 'bg-emerald-500',
};

const CATEGORY_LABELS: { id: RepoCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'apps', label: 'Aplicações & Sistemas' },
  { id: 'education', label: 'Ensino & ETEC' },
  { id: 'research', label: 'Pesquisa & Portfólio' },
];

const INITIAL_LIMIT = 9;

export function Repositories({ repos, loading, isLive, lastSync }: RepositoriesProps) {
  const [category, setCategory] = useState<RepoCategory>('all');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const counts = useMemo(() => {
    const map: Record<RepoCategory, number> = {
      all: repos.length,
      apps: 0,
      education: 0,
      research: 0,
    };
    for (const r of repos) {
      if (r.category) map[r.category] += 1;
    }
    return map;
  }, [repos]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter((repo) => {
      if (category !== 'all' && repo.category !== category) return false;
      if (!q) return true;
      return (
        repo.name.toLowerCase().includes(q) ||
        (repo.description ?? '').toLowerCase().includes(q) ||
        (repo.language ?? '').toLowerCase().includes(q)
      );
    });
  }, [repos, category, query]);

  const visibleRepos = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);

  return (
    <section id="repositorios" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Código Aberto &amp; Materiais Didáticos
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            Repositórios &amp; Atividades no GitHub
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Projetos públicos desenvolvidos para pesquisa, aulas técnicas no Centro Paula Souza e soluções web modernas.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600 sm:self-auto dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
          <RefreshCw
            className={`h-3.5 w-3.5 ${loading ? 'animate-spin text-emerald-500' : isLive ? 'text-emerald-500' : 'text-slate-400'}`}
            aria-hidden="true"
          />
          <span>
            {loading
              ? 'Sincronizando GitHub...'
              : isLive
                ? `API GitHub ao vivo${lastSync ? ` (${lastSync})` : ''}`
                : 'Catálogo offline sincronizado'}
          </span>
        </div>
      </div>

      {/* Filters + Search Bar */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar repositórios por categoria">
          {CATEGORY_LABELS.map((tab) => {
            const active = category === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setCategory(tab.id);
                  setShowAll(false);
                }}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'border-emerald-500 bg-emerald-600 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:text-emerald-400'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-md px-1.5 py-0.5 font-mono text-[11px] ${
                    active
                      ? 'bg-black/15 text-current'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {counts[tab.id]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowAll(false);
            }}
            placeholder="Buscar projeto ou linguagem..."
            aria-label="Buscar repositório por nome, descrição ou linguagem"
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pr-9 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpar busca"
              className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer rounded p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Repository Grid */}
      {visibleRepos.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900/40">
          <FolderGit2 className="mx-auto h-10 w-10 text-slate-400" aria-hidden="true" />
          <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            Nenhum repositório encontrado para o filtro selecionado.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory('all');
              setQuery('');
            }}
            className="mt-4 cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950"
          >
            Restaurar filtros
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleRepos.map((repo) => {
            const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] ?? 'bg-slate-400') : null;
            const formattedDate = new Date(repo.pushed_at).toLocaleDateString('pt-BR', {
              month: 'short',
              year: 'numeric',
            });

            return (
              <article
                key={repo.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md dark:border-slate-800 dark:bg-[#131B2B]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <FolderGit2
                        className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <h3 className="truncate font-mono text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {repo.name}
                      </h3>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir repositório ${repo.name} no GitHub`}
                      className="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-emerald-600 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-3 line-clamp-2 min-h-[2.5rem] text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {repo.description || 'Repositório de estudo, laboratório ou desenvolvimento técnico em código aberto.'}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3.5 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px]">
                        <span className={`h-2.5 w-2.5 rounded-full ${langColor}`} aria-hidden="true" />
                        {repo.language}
                      </span>
                    )}

                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                        <Star className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                    )}

                    {repo.forks_count > 0 && (
                      <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                        <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-700 transition-colors hover:bg-emerald-500/20 dark:text-emerald-300"
                      >
                        Demo
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    )}
                    <span className="font-mono text-[11px] capitalize">{formattedDate}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Expand / Collapse button */}
      {filtered.length > INITIAL_LIMIT && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-emerald-500/60 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
          >
            {showAll ? (
              <>
                Mostrar menos
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              </>
            ) : (
              <>
                Ver todos os {filtered.length} repositórios
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
