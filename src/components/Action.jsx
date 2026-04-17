import React from 'react';
import { motion } from 'framer-motion';
import { Ship, TrendingUp, RefreshCcw, MoveRight } from 'lucide-react';

const Action = () => {
  return (
    <div className="max-w-6xl w-full text-center">
      <div className="mb-16">
        <span className="text-white font-bold tracking-widest text-xs mb-4 block uppercase opacity-50">4. ACTION</span>
        <h2 className="text-5xl font-black mb-6">Weightless <span className="gradient-text">Operations</span></h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Propulsion ahead of demand. We move inventory before you know you need it. A "Return" is just a "Redirect" to the next customer's orbit.
        </p>
      </div>

      <div className="relative p-12 glass-panel border-dashed border-2 border-white/20 mb-20 overflow-hidden">
         <div className="absolute top-0 right-0 p-4">
            <TrendingUp className="text-accent-cyan" size={32} />
         </div>
         
         <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
            <div className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-accent-purple/20 transition-all">
                  <Ship className="text-white" size={40} />
               </div>
               <p className="font-bold">MFC Node A</p>
               <p className="text-xs text-text-secondary">Stock Sent (Predicted)</p>
            </div>

            <div className="flex-1 h-px bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-magenta relative">
               <motion.div 
                 className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px]"
                 animate={{ left: ['0%', '100%'] }}
                 transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
               />
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.2em] whitespace-nowrap">
                  ANTICIPATORY_LOGISTICS_PATH
               </div>
            </div>

            <div className="flex flex-col items-center">
               <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                  <RefreshCcw className="text-white animate-spin-slow" size={40} />
               </div>
               <p className="font-bold">Next Orbit</p>
               <p className="text-xs text-text-secondary">Instant Redirect</p>
            </div>
         </div>
         
         {/* Background Map Placeholder Pattern */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-left">
         <div className="p-8 glass-panel border-l-4 border-accent-cyan">
            <h3 className="text-2xl font-bold mb-4">The Circular Vortex</h3>
            <p className="text-text-secondary mb-6">Returns never hit the warehouse. AI identifies high-probability buyers nearby and redirects the item instantly.</p>
            <a href="#" className="flex items-center gap-2 text-white font-bold group">
               EXPLORE LOGISTICS <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </a>
         </div>
         <div className="p-8 glass-panel border-l-4 border-accent-magenta">
            <h3 className="text-2xl font-bold mb-4">Edge Fulfillment</h3>
            <p className="text-text-secondary mb-6">Google Distributed Cloud moves the heavy lifting of processing to the edge, where the customer live.</p>
            <a href="#" className="flex items-center gap-2 text-white font-bold group">
               VIEW EDGE STATS <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </a>
         </div>
      </div>
    </div>
  );
};

export default Action;
