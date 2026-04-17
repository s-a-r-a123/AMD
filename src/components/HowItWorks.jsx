import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, ShoppingBag, TrendingUp } from 'lucide-react';

const steps = [
  { id: '01', icon: <Eye />, title: "Sense", desc: "Real-time context analysis via multimodal user signals." },
  { id: '02', icon: <Zap />, title: "Predict", desc: "Vertex AI forecasts intent with 92% confidence." },
  { id: '03', icon: <ShoppingBag />, title: "Deliver", desc: "Digital floor re-aligns to your personal orbit." },
  { id: '04', icon: <TrendingUp />, title: "Optimize", desc: "Stock moves ahead of demand via GDC Edge." }
];

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.id} 
              className="glass-panel p-8 relative flex flex-col gap-6 group hover:translate-y-[-10px] transition-all z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
            >
              <div className="step-number text-accent-cyan opacity-10">{step.id}</div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-all border border-white/5 shadow-[0_0_20px_rgba(0,245,255,0.05)]">
                {step.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
};

export default HowItWorks;
