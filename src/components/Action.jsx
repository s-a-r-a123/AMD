import React from 'react';
import { motion } from 'framer-motion';
import { Ship, TrendingUp, RefreshCcw, MoveRight, ArrowRightCircle, Cpu } from 'lucide-react';

const Action = () => {
  const steps = [
    { 
      icon: <TrendingUp />, 
      title: "Predict Demand", 
      desc: "Vertex AI Forecast calculates behavior patterns to predict next-hour node demand.",
      data: "98.2% Accuracy" 
    },
    { 
      icon: <Ship />, 
      title: "Smart Fulfillment", 
      desc: "Autonomous micro-fulfillment centers prep inventory 4km from the user.",
      data: "14min S-D" 
    },
    { 
      icon: <Cpu />, 
      title: "Inventory Routing", 
      desc: "Dynamic routing re-aligns stock in-orbit based on live social heatmaps.",
      data: "Zero-Lag" 
    },
    { 
      icon: <RefreshCcw />, 
      title: "Intelligent Returns", 
      desc: "Instant redirection of returns to the nearest high-probability buyer node.",
      data: "Circular Sync" 
    }
  ];

  return (
    <div className="container py-24">
      <div className="text-center mb-20">
        <span className="section-label">04. OPTIMIZE</span>
        <h2 className="font-black">Weightless <span className="gradient-text">Operations</span></h2>
        <p className="description mx-auto">
          The autonomous core. We remove the physical burden of the supply chain by predicting possession before it happens.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            className="system-card flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accent-cyan">
                  {step.icon}
                </div>
                <span className="data-badge">{step.data}</span>
              </div>
              <h4 className="text-lg font-black mb-4 uppercase tracking-wide">{step.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                {step.desc}
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-black uppercase text-accent-cyan group cursor-pointer hover:gap-4 transition-all">
               System Dashboard <MoveRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Action;
