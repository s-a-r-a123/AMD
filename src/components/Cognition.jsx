import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, User, Dumbbell, Coffee } from 'lucide-react';

const Cognition = () => {
  const [context, setContext] = useState('gym');

  const themes = {
    gym: {
      title: "Active Orbit",
      desc: "Detecting high-performance activity. Re-aligning inventory to surface recovery fuel and hydration.",
      items: ["Iso-Whey Pro", "SmartHydrate 2.0", "Fast-Absorb Towels"],
      color: "#00f5ff"
    },
    office: {
      title: "Focus Orbit",
      desc: "Analyzing cognitive strain. Prioritizing nootropics, ergonomic support, and low-acid caffeine.",
      items: ["Focus+ Nootropic", "Vertebra-X Cushion", "Dark Roast Concentrate"],
      color: "#9d4edd"
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
      <div className="text-left">
        <span className="text-accent-purple font-bold tracking-widest text-xs mb-4 block">1. COGNITION</span>
        <h2 className="text-5xl font-black mb-6">Magnetic Field of <span className="text-accent-purple">Context</span></h2>
        <p className="text-lg text-text-secondary mb-8">
          Powered by Gemini 1.5 Pro. We don't just search; we understand your "Vibe." The digital floor re-aligns itself based on your environment.
        </p>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setContext('gym')}
            className={`p-4 rounded-2xl flex items-center gap-2 transition-all ${context === 'gym' ? 'bg-white text-black' : 'glass-panel text-text-secondary'}`}
          >
            <Dumbbell size={20} />
            <span className="font-bold">GYM</span>
          </button>
          <button 
            onClick={() => setContext('office')}
            className={`p-4 rounded-2xl flex items-center gap-2 transition-all ${context === 'office' ? 'bg-white text-black' : 'glass-panel text-text-secondary'}`}
          >
            <Coffee size={20} />
            <span className="font-bold">OFFICE</span>
          </button>
        </div>

        <motion.div 
          key={context}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 glass-panel border-l-4"
          style={{ borderLeftColor: themes[context].color }}
        >
          <h3 className="text-2xl font-bold mb-2">{themes[context].title}</h3>
          <p className="text-text-secondary mb-6">{themes[context].desc}</p>
          <div className="flex flex-wrap gap-2">
            {themes[context].items.map(item => (
              <span key={item} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/5">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="aspect-square glass-panel p-4 flex items-center justify-center overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full h-full rounded-2xl bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden"
          >
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <Camera size={64} className="text-accent-cyan opacity-40" />
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-50">Multimodal Input</p>
                  <div className="h-1 w-24 bg-accent-cyan mx-auto mt-2 blur-sm"></div>
                </div>
             </div>
             
             {/* Simulated Scanning Lines */}
             <motion.div 
               className="absolute top-0 left-0 w-full h-1 bg-accent-cyan/30 blur-sm z-10"
               animate={{ top: ['0%', '100%', '0%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
             />
          </motion.div>
        </div>
        
        {/* Floating Product Cards */}
        <motion.div 
          className="absolute -top-6 -right-6 p-4 glass-panel shadow-2xl z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-12 h-12 bg-accent-magenta rounded-lg mb-2 flex items-center justify-center">
             <Sparkles className="text-white" size={24} />
          </div>
          <p className="text-[10px] font-bold">VIBE MATCHED</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cognition;
