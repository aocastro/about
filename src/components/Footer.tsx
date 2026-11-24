import { BookOpen, Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0B0F17]"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">
              Vamos conversar?
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-slate-600 dark:text-slate-400">
              Aberto a parcerias em pesquisa científica, palestras, consultoria em arquitetura de software e projetos acadêmicos.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-emerald-600 hover:underline dark:text-emerald-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs">
                <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
                {PROFILE.location}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.links.lattes}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Currículo Lattes"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Lattes
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-sky-400"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={PROFILE.links.company}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A&D Soluções em Tecnologia"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              A&amp;D Soluções
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row dark:border-slate-800/80 dark:text-slate-500">
          <p>
            © {year} {PROFILE.name}. Construído com React, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="font-mono">Hospedado via GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
