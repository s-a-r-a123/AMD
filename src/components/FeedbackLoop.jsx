import React from 'react';
import { motion } from 'framer-motion';
import { User, Database, Cpu, Zap, ArrowRight } from 'lucide-react';

const FeedbackLoop = () => {
  const nodes = [
    { icon: <User />, label: "Shopper Behavior" },
    { icon: <Database />, label: "Synthesized Data" },
    { icon: <Cpu />, label: "AI Decision Core" },
    { icon: <Zap />, label: "Personalized Action" }
  ];

  return (
    <div className="container py-32 overflow-hidden">
      <div className="text-center mb-20">
        <span className="section-label text-accent-cyan">The Engine</span>
        <h2 className="font-black">The Continuous <span className="text-accent-cyan">Feedback Orbit</span></h2>
        <p className="description mx-auto">A closed-loop system where every interaction fuels the next predictive model.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden md:block z-0"></div>
         
         {nodes.map((node, i) => (
           <div key={i} className="flex flex-col items-center gap-6 relative z-10 w-full md:w-auto">
              <motion.div 
                className="w-24 h-24 rounded-full glass-panel bg-black/80 border-accent-cyan/30 flex items-center justify-center relative group"
                animate={{ boxShadow: ['0 0 20px rgba(0,245,255,0.1)', '0 0 40px rgba(0,245,255,0.3)', '0 0 20px rgba(0,245,255,0.1)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                 <div className="text-accent-cyan group-hover:scale-125 transition-transform duration-500">
                    {node.icon}
                 </div>
                 
                 {i < nodes.length - 1 && (
                   <motion.div 
                     className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block"
                     animate={{ x: [0, 10, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity }}
                   >
                     <ArrowRight size={20} className="text-white/20" />
                   </motion.div>
                 )}
              </motion.div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-center max-w-[100px] leading-relaxed">
                 {node.label}
              </p>
           </div>
         ))}
      </div>
    </div>
  );
};

export default FeedbackLoop;
