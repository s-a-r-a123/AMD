import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Activity, Eye, Zap, ArrowRight, Menu, X, Orbit, Move, Search, ShoppingBag } from 'lucide-react';
import Hero from './components/Hero';
import Cognition from './components/Cognition';
import Foundation from './components/Foundation';
import Sensation from './components/Sensation';
import Action from './components/Action';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-t-0 border-x-0 rounded-none' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Orbit className="text-accent-cyan group-hover:rotate-180 transition-transform duration-700" size={32} />
            <h1 className="text-2xl font-bold tracking-tighter">LUMINANCE</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Cognition', 'Foundation', 'Sensation', 'Action'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 glass-panel hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold">
              GET ACCESS
            </button>
          </div>
        </div>
      </nav>

      <main className="scroll-container">
        <section id="hero" className="section">
          <Hero />
        </section>
        
        <section id="cognition" className="section">
          <Cognition />
        </section>

        <section id="foundation" className="section">
          <Foundation />
        </section>

        <section id="sensation" className="section">
          <Sensation />
        </section>

        <section id="action" className="section">
          <Action />
        </section>

        <footer className="py-20 text-center text-text-secondary border-t border-glass">
          <div className="flex justify-center gap-4 mb-8">
            <Orbit className="text-accent-purple" size={32} />
          </div>
          <p>© 2026 LUMINANCE. Powered by Google Anti-Gravity Principles.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
