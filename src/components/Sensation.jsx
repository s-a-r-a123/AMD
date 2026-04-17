import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Smartphone, MapPin, Box } from 'lucide-react';

const Sensation = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
      <div className="order-2 md:order-1 relative">
         <div className="rounded-[40px] border-[8px] border-zinc-800 bg-zinc-900 aspect-[9/19] w-72 mx-auto relative overflow-hidden shadow-2xl">
            <img 
              src="/assets/ar.png" 
              alt="AR Shopping" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent-cyan/10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring' }}
                  className="w-24 h-24 rounded-full border-2 border-dashed border-white/50 animate-spin-slow"
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Box className="text-white" size={32} />
                </div>
            </div>
            
            <div className="absolute bottom-10 left-6 right-6 p-4 glass-panel bg-black/60">
               <p className="text-[10px] font-bold text-accent-cyan mb-1">GEOSPATIAL ANCHOR</p>
               <h4 className="text-sm font-bold">Concept-Z Prototype</h4>
               <p className="text-[10px] text-text-secondary">Floating 1.2m above sidewalk</p>
            </div>
         </div>
         
         <motion.div 
           className="absolute -bottom-10 -left-10 p-6 glass-panel z-10 hidden lg:block"
           animate={{ x: [0, 10, 0] }}
           transition={{ duration: 5, repeat: Infinity }}
         >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent-cyan/20 rounded-xl">
                 <Eye className="text-accent-cyan" />
              </div>
              <div>
                <p className="font-bold">Vision Auth</p>
                <p className="text-xs text-text-secondary">Identity Verified (Edge)</p>
              </div>
            </div>
         </motion.div>
      </div>

      <div className="order-1 md:order-2 text-left">
        <span className="text-accent-magenta font-bold tracking-widest text-xs mb-4 block uppercase">3. SENSATION</span>
        <h2 className="text-5xl font-black mb-6">Immersive <span className="text-accent-magenta">Spatial</span> Commerce</h2>
        <p className="text-lg text-text-secondary mb-10">
          The city is your storefront. Digital twins orbit the physical world via ARCore and Geospatial API. Checkout is invisible—items are registered as you pass through vision-aware edges.
        </p>

        <div className="space-y-6">
          {[
            { title: "Invisible Checkout", desc: "Vertex AI Vision identifies items and IDs without physical friction.", icon: <Smartphone size={20} /> },
            { title: "Stable Orbit Rewards", desc: "Gamified urban quests that turn the city into a playground.", icon: <MapPin size={20} /> }
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 p-6 glass-panel hover:bg-white/5 transition-all">
              <div className="text-accent-magenta">{feature.icon}</div>
              <div>
                <h4 className="font-bold mb-1">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sensation;
