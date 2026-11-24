import { BentoPillars } from './components/BentoPillars';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Repositories } from './components/Repositories';
import { ResearchSection } from './components/ResearchSection';
import { Timeline } from './components/Timeline';
import { useGitHubRepos } from './hooks/useGitHubRepos';
import { useTheme } from './hooks/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const { repos, loading, isLive, lastSync } = useGitHubRepos('aocastro');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#0B0F17] dark:text-slate-50">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero repoCount={repos.length} />
        <BentoPillars />
        <ResearchSection />
        <Repositories repos={repos} loading={loading} isLive={isLive} lastSync={lastSync} />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
