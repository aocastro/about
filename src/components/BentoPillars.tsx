import { Building2, Code2, GraduationCap, Layers, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function BentoPillars() {
  return (
    <section id="pilares" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Atuação Multidisciplinar
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
          Academia, Ensino & Arquitetura de Software
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
        {/* Card 1: Pesquisa & Mestrado UNESP (Large 7 cols) */}
        <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md lg:col-span-7 dark:border-slate-800 dark:bg-[#131B2B]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
                UNESP • Mestrado 2025
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">
              Visualização da Informação & Saúde Pública
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Mestre em Ciência da Computação pela UNESP Bauru. Pesquisador focado em transformar bases de dados complexas (como o e-SUS) em painéis interativos acessíveis para tomada de decisão entre profissionais da saúde, educação e assistência social.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Data Visualization', 'KDD', 'ArticulaTIS', 'Saúde Infantil'].map((item) => (
              <span
                key={item}
                className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800/90 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        {/* Card 2: Docência CPS (5 cols) */}
        <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-md lg:col-span-5 dark:border-slate-800 dark:bg-[#131B2B]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-xs font-medium text-sky-700 dark:text-sky-300">
                Centro Paula Souza
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">
              Docência em Tecnologia da Informação
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Professor na ETEC de Lins formando novos desenvolvedores em Programação Web II, Arquitetura MVC, Banco de Dados, Git/GitHub e orientação de TCCs com projetos reais.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {['ETIM-DS / AMS', 'PW II', 'Orientação de TCC'].map((item) => (
              <span
                key={item}
                className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800/90 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        {/* Card 3: A&D Soluções (5 cols) */}
        <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md lg:col-span-5 dark:border-slate-800 dark:bg-[#131B2B]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-medium text-indigo-700 dark:text-indigo-300">
                Sócio & Consultor
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">
              A&amp;D Soluções em Tecnologia
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Atuação empreendedora e consultiva no desenvolvimento de sistemas web sob medida, modernização de plataformas (refactoring) e engenharia de software orientada a resultados.
            </p>
          </div>

          <div className="mt-6">
            <a
              href={PROFILE.links.company}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-600 transition-colors hover:text-emerald-500 dark:text-emerald-400"
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              adsolucoestecnologia.com.br
            </a>
          </div>
        </article>

        {/* Card 4: Tech Stack (7 cols) */}
        <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md lg:col-span-7 dark:border-slate-800 dark:bg-[#131B2B]">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Code2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                Stack Principal
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-slate-50">
              Tecnologias &amp; Competências Técnicas
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Ecossistema utilizado em pesquisa, sala de aula e desenvolvimento de produtos digitais.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {PROFILE.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900/80"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {tech.group}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
