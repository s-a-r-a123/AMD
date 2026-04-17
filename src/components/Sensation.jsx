import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Smartphone, Box, Info, ShoppingCart } from 'lucide-react';

const Sensation = () => {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    { id: 1, top: '40%', left: '50%', title: "Concept-Z Core", price: "$450", desc: "Digital twin of the liquid-cooled processor." },
    { id: 2, top: '25%', left: '30%', title: "Optic Mesh", price: "$120", desc: "Sensory fabric for zero-friction discovery." }
  ];

  return (
    <div className="container">
      <div className="split-layout">
        <div className="text-content">
          <span className="section-label text-accent-magenta">03. IMMERSE</span>
          <h2 className="font-black leading-tight">Spatial Discovery <br /><span className="text-accent-magenta">& Checkout</span></h2>
          <p className="description mb-10">
            Augmented Reality collapses the boundary between digital browsing and physical possession. Checkout is invisible—items are verified via Edge Vision as you pass the portal.
          </p>

          <div className="grid gap-6">
            {[
              { icon: <Smartphone />, title: "Invisible Transaction", desc: "Biometric auth + Vision mapping = zero-friction exit." },
              { icon: <Box />, title: "Digital Twins", desc: "Preview hyper-HD models in your local orbit via ARCore." }
            ].map((f, i) => (
              <div key={i} className="flex gap-6 p-8 system-card group">
                <div className="text-accent-magenta mt-1 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-black mb-2 uppercase tracking-wide text-sm">{f.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="visual-content relative pl-10">
           <div className="relative mx-auto max-w-sm rounded-[50px] border-[10px] border-zinc-900 bg-black aspect-[9/19] overflow-hidden shadow-[0_0_80px_rgba(255,0,200,0.15)] group">
              <img 
                src="/assets/ar.png" 
                alt="AR Shopping View" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Hotspots */}
              {hotspots.map((spot) => (
                <div 
                  key={spot.id}
                  className="hotspot"
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                   <AnimatePresence>
                     {activeHotspot === spot.id && (
                       <motion.div 
                         initial={{ opacity: 0, y: 10, scale: 0.9 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         exit={{ opacity: 0, y: 10, scale: 0.9 }}
                         className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 p-4 glass-panel bg-black/80 backdrop-blur-xl border-accent-cyan/50 z-50 pointer-events-none"
                       >
                          <p className="text-[10px] font-black text-accent-cyan uppercase mb-1">Detected Object</p>
                          <p className="text-sm font-bold mb-1">{spot.title}</p>
                          <p className="text-xs text-text-secondary font-black mb-2">{spot.price}</p>
                          <p className="text-[10px] text-text-secondary leading-tight">{spot.desc}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}

              <div className="absolute inset-0 bg-accent-magenta/5 pointer-events-none group-hover:bg-transparent transition-all"></div>
              
              <div className="absolute bottom-10 left-6 right-6 p-6 glass-panel border-accent-magenta/30 bg-black/60">
                 <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] font-black text-accent-magenta uppercase tracking-[0.2em]">AR_Session_Active</p>
                    <Info size={14} className="text-accent-magenta" />
                 </div>
                 <button className="w-full py-3 bg-accent-magenta text-white text-xs font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all">
                    <ShoppingCart size={16} />
                    Instant Capture
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sensation;
