import { Moon, Sun, Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { href: '#pilares', label: 'Atuação' },
  { href: '#pesquisa', label: 'Pesquisa' },
  { href: '#repositorios', label: 'Repositórios' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0B0F17]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:text-emerald-400 dark:group-hover:text-slate-950">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-mono">{PROFILE.shortName}</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500/50 dark:hover:text-emerald-400"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Navegação mobile"
          className="border-t border-slate-200 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-[#0B0F17]"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
