import React from 'react';
import { motion } from 'framer-motion';
import { MoveDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="section pt-48 pb-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <span className="section-label text-accent-cyan">Zero-Friction Retail Fabric</span>
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tight">
              Defy the Gravity of <br />
              <span className="gradient-text">Physical Limits</span>
            </h1>
            <p className="description text-xl mx-auto mb-12 max-w-3xl">
              LUMINANCE is a liquid retail environment that collapses the distance between intent and possession into a single point of light.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                className="px-10 py-5 bg-white text-black font-black flex items-center gap-3 hover:scale-105 transition-transform rounded-2xl group"
                aria-label="Enter the LUMINANCE orbit"
              >
                ENTER THE ORBIT
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button 
                className="px-10 py-5 glass-panel font-bold hover:bg-white/5 transition-all rounded-2xl"
                aria-label="View technical blueprint"
              >
                VIEW THE BLUEPRINT
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-24 w-full aspect-[21/9] rounded-[32px] overflow-hidden glass-panel relative group"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <img 
              src="/assets/hero.png" 
              alt="Futuristic LUMINANCE retail environment overview" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 text-left p-10 glass-panel border-white/5 bg-black/40 backdrop-blur-md max-w-md hidden md:block">
              <h3 className="text-xl font-bold mb-3">Real-time Synthesis</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Trillions of data points fueling anticipatory logistics in zero-latency awareness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
