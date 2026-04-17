import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Dumbbell, Coffee, Plus, CheckCircle } from 'lucide-react';

const Cognition = () => {
  const [context, setContext] = useState('gym');

  const themes = {
    gym: {
      intent: "High-Performance Athletic Recovery",
      confidence: "94%",
      suggestion: "Electrolyte Infusion + Carbon Fiber Runners",
      items: [
        { name: "Iso-Whey Pro", price: "$42", tag: "Post-Workout" },
        { name: "SmartHydrate 2.0", price: "$12", tag: "In-Orbit" }
      ],
      color: "var(--accent-cyan)"
    },
    office: {
      intent: "Cognitive Focus & Ergonomic Support",
      confidence: "88%",
      suggestion: "Slow-Release Caffeine + Vertebral Realignment",
      items: [
        { name: "Focus+ Nootropic", price: "$35", tag: "Deep Work" },
        { name: "Vertebra-X Cushion", price: "$85", tag: "Ego-Fix" }
      ],
      color: "var(--accent-purple)"
    }
  };

  return (
    <div className="container">
      <div className="split-layout">
        <div className="text-content">
          <span className="section-label text-accent-purple">01. SENSE & PREDICT</span>
          <h2 className="font-black leading-tight">Intelligent Context <br /><span className="text-accent-purple">Synthesis</span></h2>
          <p className="description mb-8">
            The Gemini 1.5 Pro core analyzes your environment to eliminate the "Search" phase entirely. Possession starts with awareness.
          </p>

          <div className="flex gap-4 mb-10" role="tablist" aria-label="Context Simulator">
            {['gym', 'office'].map((t) => (
              <button 
                key={t}
                onClick={() => setContext(t)}
                className={`px-8 py-4 rounded-2xl flex items-center gap-3 transition-all font-bold ${context === t ? 'bg-white text-black' : 'glass-panel text-text-secondary hover:text-white'}`}
                aria-label={`Simulate ${t} environment`}
              >
                {t === 'gym' ? <Dumbbell size={20} /> : <Coffee size={20} />}
                <span className="uppercase tracking-widest text-[10px]">{t}</span>
              </button>
            ))}
          </div>

          <div className="p-8 glass-panel bg-black/40 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
                <CheckCircle className="text-accent-cyan opacity-20" size={40} />
             </div>
             <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                   <p className="text-[10px] font-black tracking-widest text-text-secondary uppercase">Analysis Result</p>
                   <span className="data-badge">Target: {context}</span>
                </div>
                <div>
                   <p className="text-xs text-text-secondary mb-1 uppercase tracking-wider">Detected Intent</p>
                   <p className="text-lg font-bold">{themes[context].intent}</p>
                </div>
                <div className="flex gap-8">
                   <div>
                      <p className="text-[10px] text-text-secondary uppercase mb-1">Confidence</p>
                      <p className="text-accent-cyan font-black">{themes[context].confidence}</p>
                   </div>
                   <div>
                      <p className="text-[10px] text-text-secondary uppercase mb-1">Latency</p>
                      <p className="text-white font-black">12ms</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="visual-content relative">
          <div className="glass-panel p-6 flex flex-col gap-6 overflow-hidden min-h-[600px]">
             <div className="flex-1 rounded-[20px] bg-black/60 relative overflow-hidden border border-white/5 group">
                {/* Simulated Camera Feed Overlay */}
                <div className="absolute inset-0 border-[20px] border-black/40 pointer-events-none"></div>
                {/* Scanning Interaction Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)', backgroundSize: '10% 10%' }}></div>
                
                <div className="absolute top-6 left-6 flex items-center gap-3">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                   <p className="text-[10px] font-black tracking-widest uppercase text-white/40">Neural_Flow_Active</p>
                </div>

                <div className="absolute top-6 right-6 flex flex-col items-end gap-1">
                   <span className="text-[8px] font-bold text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded">GCloud_Edge: Connected</span>
                   <span className="text-[8px] font-bold text-white/40">Region: us-central1</span>
                </div>
                
                {/* Detection Frame with Dynamic Labels */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-accent-cyan/40 rounded-lg flex items-start justify-end p-2"
                  animate={{ scale: [1, 1.02, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                   <div className="flex flex-col gap-1">
                      <div className="h-1 w-12 bg-accent-cyan animate-pulse"></div>
                      <div className="h-1 w-8 bg-accent-cyan/40"></div>
                   </div>
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div
                     animate={{ opacity: [0.1, 0.2, 0.1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <Camera size={64} className="text-white" />
                   </motion.div>
                </div>

                {/* Vertical Scanning Line */}
                <motion.div 
                  className="absolute left-0 top-0 w-full h-px bg-accent-cyan shadow-[0_0_15px_var(--accent-cyan)] z-10"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                {themes[context].items.map((item, i) => (
                   <motion.div 
                     key={item.name}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="p-4 glass-panel bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                   >
                     <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] font-black text-accent-cyan uppercase">{item.tag}</span>
                        <Plus size={14} className="text-white/30 group-hover:text-white" />
                     </div>
                     <p className="text-xs font-bold leading-tight mb-1">{item.name}</p>
                     <p className="text-xs font-black">{item.price}</p>
                   </motion.div>
                ))}
             </div>
          </div>
          
          {/* AI Decision Node */}
          <motion.div 
            className="absolute -bottom-6 -right-6 p-6 glass-panel shadow-2xl z-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
             <Sparkles className="text-accent-magenta mb-2" />
             <p className="text-[10px] font-black tracking-widest text-text-secondary uppercase">Vertex_Decision_Logic</p>
             <div className="mt-2 h-1 w-20 bg-accent-magenta/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent-magenta"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cognition;
