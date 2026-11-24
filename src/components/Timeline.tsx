import { Briefcase, GraduationCap, Microscope } from 'lucide-react';
import { PROFILE } from '../data/profile';

const ICON_MAP = {
  academic: Microscope,
  teaching: GraduationCap,
  industry: Briefcase,
};

export function Timeline() {
  return (
    <section
      id="trajetoria"
      className="border-t border-slate-200/80 bg-slate-100/60 dark:border-slate-800/80 dark:bg-[#0E1523]/70"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Formação &amp; Carreira
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
            Trajetória Acadêmica e Profissional
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROFILE.timeline.map((item) => {
            const Icon = ICON_MAP[item.type];
            return (
              <div
                key={item.role}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#131B2B]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {item.role}
                </h3>
                <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
