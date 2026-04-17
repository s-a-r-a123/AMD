import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Globe } from 'lucide-react';

const Foundation = () => {
  return (
    <div className="container">
      <div className="split-layout reversed">
        <div className="visual-content">
          <div className="glass-panel p-2 overflow-hidden aspect-video relative">
            <div className="h-full bg-black/60 rounded-[18px] relative overflow-hidden flex items-center justify-center border border-white/5">
                {/* Data Flow Visualization */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(15)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute h-[1px] bg-accent-cyan"
                      style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: 0, 
                        width: '100%',
                        opacity: Math.random() * 0.5
                      }}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, ease: 'linear' }}
                    />
                  ))}
                </div>
                
                <div className="z-10 text-center">
                  <div className="relative mb-6">
                    <Zap className="text-accent-cyan animate-pulse mx-auto" size={56} />
                    <div className="absolute inset-0 blur-xl bg-accent-cyan/20 animate-pulse"></div>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.4em] text-accent-cyan uppercase font-bold">Live Pulse Authentication</p>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { val: "1.2 PB/s", label: "Throughput" },
              { val: "99.9%", label: "Accuracy" },
              { val: "12ms", label: "Latency" }
            ].map((stat, i) => (
              <div key={i} className="p-4 glass-panel text-center">
                <p className="text-xl font-black mb-1 text-white">{stat.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-content">
          <span className="section-label text-accent-cyan">2. FOUNDATION</span>
          <h2 className="font-black">Low-Latency <br /><span className="text-accent-cyan">Awareness</span></h2>
          <p className="description mb-10">
            Trillions of signals processed in real-time. BigQuery & Dataflow create a predictive fuel that maps global human intent to localized micro-orbits.
          </p>

          <div className="space-y-6">
            {[
              { icon: <Database size={24} aria-hidden="true" />, title: "BigQuery Streaming", desc: "Ingesting signals from IoT sensors and global weather nodes." },
              { icon: <Globe size={24} aria-hidden="true" />, title: "Geospatial Nodes", desc: "Micro-fulfillment coordination across 42,000+ urban fulfillment centers." }
            ].map((node, i) => (
              <div 
                key={i} 
                className="flex gap-6 items-start p-8 glass-panel group transition-all"
                role="article"
                aria-labelledby={`foundation-node-${i}`}
              >
                <div className="text-accent-cyan mt-1 group-hover:scale-110 transition-transform">
                  {node.icon}
                </div>
                <div>
                  <h4 id={`foundation-node-${i}`} className="font-black mb-2 uppercase tracking-wide text-sm">{node.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
