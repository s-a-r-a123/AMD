import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, MapPin } from 'lucide-react';

const recommendations = [
  { name: "Nebula Core Jacket", tag: "Based on Activity", price: "$299", img: "hero.png", stat: "98% Match" },
  { name: "Orbital Sync Pods", tag: "Trending Near You", price: "$180", img: "hero.png", stat: "Live Availability" },
  { name: "Lytic Flux Hydrator", tag: "Low-Latency Supply", price: "$45", img: "hero.png", stat: "MFC-Express" }
];

const Personalization = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="section-label text-accent-cyan">02. DELIVER</span>
          <h2 className="font-black mb-0">Recommended <br />for Your <span className="text-accent-cyan">Orbit</span></h2>
        </div>
        <p className="description text-right hidden md:block">
          Dynamic results synthesized from 42+ internal points <br /> of behavior and environmental context.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {recommendations.map((item, i) => (
          <motion.div 
            key={item.name}
            className="system-card group overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="aspect-video mb-8 rounded-xl overflow-hidden glass-panel relative">
               <img src={`/assets/${item.img}`} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute top-4 left-4">
                  <span className="data-badge bg-black/60 backdrop-blur-md">{item.tag}</span>
               </div>
            </div>
            
            <div className="flex justify-between items-start mb-4">
               <h4 className="text-xl font-bold">{item.name}</h4>
               <p className="font-black text-accent-cyan">{item.price}</p>
            </div>
            
            <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-text-secondary">
                   <Zap size={14} className="text-accent-cyan" />
                   {item.stat}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-text-secondary">
                   <MapPin size={14} className="text-accent-magenta" />
                   1.2km
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Personalization;
