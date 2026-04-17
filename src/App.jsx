import React, { useState, useEffect } from 'react';
import { Orbit } from 'lucide-react';
const Hero = React.lazy(() => import('./components/Hero'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Cognition = React.lazy(() => import('./components/Cognition'));
const Personalization = React.lazy(() => import('./components/Personalization'));
const Sensation = React.lazy(() => import('./components/Sensation'));
const Action = React.lazy(() => import('./components/Action'));
const FeedbackLoop = React.lazy(() => import('./components/FeedbackLoop'));
const FinalCTA = React.lazy(() => import('./components/FinalCTA'));

/**
 * Main Application Component for LUMINANCE
 * @returns {JSX.Element} The LUMINANCE retail fabric experience
 */
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Cognition', 'Foundation', 'Sensation', 'Action'];

  return (
    <div className="app-wrapper">
      <div className="bg-blobs" role="presentation" aria-hidden="true">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-t-0 border-x-0 rounded-none bg-black/50 backdrop-blur-xl' : 'py-10'}`}
        aria-label="Main Navigation"
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" aria-label="LUMINANCE - Home">
            <Orbit className="text-accent-cyan group-hover:rotate-180 transition-transform duration-1000" size={32} aria-hidden="true" />
            <h1 className="text-2xl font-black tracking-tighter">LUMINANCE</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="nav-link text-sm font-semibold relative group"
                aria-label={`Go to ${item} section`}
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent-cyan transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="px-8 py-3 glass-panel hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-wider" aria-label="Request access to LUMINANCE">
            Get Access
          </button>
        </div>
      </nav>

      <main>
        <React.Suspense fallback={<div className="h-screen flex items-center justify-center bg-black text-accent-cyan font-black tracking-widest animate-pulse">LOADING_FABRIC...</div>}>
          <Hero />
          
          <div className="divider opacity-20"></div>
          <section id="how-it-works" className="section relative z-10">
            <HowItWorks />
          </section>

          <div className="divider opacity-20"></div>
          <section id="cognition" className="section">
            <Cognition />
          </section>

          <div className="divider opacity-20"></div>
          <section id="personalization" className="section">
            <Personalization />
          </section>

          <div className="divider opacity-20"></div>
          <section id="sensation" className="section">
            <Sensation />
          </section>

          <div className="divider"></div>
          <section id="action" className="section">
            <Action />
          </section>

          <div className="divider"></div>
          <FeedbackLoop />

          <div className="divider"></div>
          <FinalCTA />
        </React.Suspense>

        <footer className="py-24 border-t border-glass">
          <div className="container text-center">
            <Orbit className="text-accent-purple mx-auto mb-8 opacity-50" size={40} />
            <p className="text-sm text-text-secondary tracking-widest uppercase">
              Powered by Google Anti-Gravity Principles
            </p>
            <p className="mt-4 text-xs text-text-secondary/50">© 2026 LUMINANCE. All Orbits Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
