import { ArrowUpRight, BookMarked, Database, LineChart } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function ResearchSection() {
  const { research } = PROFILE;

  return (
    <section
      id="pesquisa"
      className="border-y border-slate-200/80 bg-slate-100/60 dark:border-slate-800/80 dark:bg-[#0E1523]/70"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Pesquisa Científica • Lattes CNPq
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
              {research.thesisTitle}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              {research.degree} • {research.institution} ({research.year})
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {research.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {research.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-sky-500/20 bg-sky-500/10 px-3 py-1 font-mono text-xs font-medium text-sky-700 dark:text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href={PROFILE.links.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-500/60 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-400/60 dark:hover:text-sky-400"
              >
                <BookMarked className="h-4 w-4" aria-hidden="true" />
                Acessar Currículo Lattes Completo
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#131B2B]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <LineChart className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Plataforma {research.project}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Painéis visuais customizados por perfil
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Visualizações adaptadas para equipes de saúde, educação e assistência social acompanharem indicadores da primeira infância.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#131B2B]">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Database className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Integração e-SUS &amp; KDD
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Coleta e mineração de dados antropométricos
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Pipeline estruturado desde a coleta em campo até a consolidação analítica em indicadores nutricionais públicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
