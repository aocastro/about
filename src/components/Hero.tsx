import { ArrowUpRight, BookOpen, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface HeroProps {
  repoCount: number;
}

export function Hero({ repoCount }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono">Mestre em Computação (UNESP) • Professor CPS</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-50">
              {PROFILE.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {PROFILE.bio}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {PROFILE.location}
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Github className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                {repoCount} repositórios públicos
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.links.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Currículo Lattes
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-sky-500/60 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-sky-400/60 dark:hover:text-sky-400"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-emerald-500/60 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-emerald-500/60 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contato
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-4 lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-sky-500/30 to-transparent blur-md"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <img
                  src={PROFILE.avatarUrl}
                  alt="Foto de perfil de Adriano Oliveira Castro"
                  width={260}
                  height={260}
                  className="h-56 w-56 rounded-2xl object-cover sm:h-64 sm:w-64"
                />
                <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs font-mono text-slate-700 dark:bg-slate-800/80 dark:text-slate-300">
                  <span>{PROFILE.handle}</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Lattes • GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
