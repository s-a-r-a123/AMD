import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Orbit } from 'lucide-react';

const FinalCTA = () => {
  return (
    <div className="section mb-32">
      <div className="container">
        <div className="system-card bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-cyan/10 p-20 text-center relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.1)_0%,transparent_70%)] pointer-events-none"></div>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10"
           >
              <div className="w-20 h-20 bg-white rounded-3xl mx-auto flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                 <Rocket className="text-black" size={40} />
              </div>
              <h2 className="text-6xl font-black mb-8 leading-tight">Ready to Enter the <br /><span className="gradient-text">Zero-Friction Era?</span></h2>
              <p className="description mx-auto mb-16 text-xl">Join the elite retailers already operating in a state of stable orbit.</p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-12 py-6 bg-white text-black font-black flex items-center gap-3 hover:scale-105 transition-all rounded-2xl shadow-[0_20px_40px_rgba(255,255,255,0.2)]">
                  RUN LIVE DEMO
                  <Sparkles size={20} />
                </button>
                <button className="px-12 py-6 glass-panel font-black hover:bg-white/5 transition-all rounded-2xl flex items-center gap-3">
                  VIEW PERSONALIZED FEED
                  <Orbit size={20} />
                </button>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
