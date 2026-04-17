import React from 'react';
import { motion } from 'framer-motion';
import { MoveDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="px-4 py-1 glass-panel text-xs font-bold tracking-widest text-accent-cyan mb-6 inline-block">
          ZERO-FRICTION RETAIL FABRIC
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          Defy the Gravity of <br />
          <span className="gradient-text">Physical Limits</span>
        </h1>
        <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          LUMINANCE collapses the distance between intent and possession into a single point of light. Powered by Google Anti-Gravity Principles.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 bg-white text-black font-black flex items-center gap-2 hover:scale-105 transition-transform rounded-2xl">
            ENTER THE ORBIT
          </button>
          <button className="px-10 py-5 glass-panel font-bold hover:bg-white/5 transition-all rounded-2xl">
            VIEW THE BLUEPRINT
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="mt-20 relative w-full aspect-video rounded-3xl overflow-hidden glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img 
          src="/assets/hero.png" 
          alt="LUMINANCE Ecosystem" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-left p-8 glass-panel border-white/5 bg-black/40 backdrop-blur-md max-w-sm">
            <h3 className="font-bold mb-2">Real-time Synthesis</h3>
            <p className="text-sm text-text-secondary">Trillions of data points fueling anticipatory logistics in zero-latency.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <MoveDown className="text-text-secondary" />
      </motion.div>
    </div>
  );
};

export default Hero;
