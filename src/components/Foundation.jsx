import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Activity, Globe } from 'lucide-react';

const Foundation = () => {
  return (
    <div className="max-w-7xl w-full">
      <div className="text-center mb-16">
        <span className="text-accent-cyan font-bold tracking-widest text-xs mb-4 block uppercase">2. FOUNDATION</span>
        <h2 className="text-5xl font-black mb-6">Low-Latency <span className="text-accent-cyan">Awareness</span></h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          The fuel of LUMINANCE. BigQuery & Dataflow process trillions of external signals to create a real-time pulse of human desire.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Database />, title: "BigQuery Streaming", val: "1.2 PB/s", desc: "Real-time ingestion of IoT shelf sensors and weather patterns." },
          { icon: <Activity />, title: "Sentiment Synthesis", val: "99.8%", desc: "Direct mapping of social trends to localized inventory needs." },
          { icon: <Globe />, title: "Geospatial Nodes", val: "42,000+", desc: "Micro-fulfillment coordination across urban orbits." }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            className="p-8 glass-panel group hover:border-accent-cyan transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-accent-cyan mb-6 group-hover:scale-110 transition-transform inline-block">
              {React.cloneElement(stat.icon, { size: 40 })}
            </div>
            <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
            <p className="text-4xl font-black text-white mb-4 tracking-tighter">{stat.val}</p>
            <p className="text-sm text-text-secondary line-height-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-1 glass-panel overflow-hidden relative">
        <div className="h-64 bg-black/50 relative overflow-hidden flex items-center justify-center">
            {/* Simulated Data Streams */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute h-px bg-accent-cyan"
                  style={{ 
                    top: `${Math.random() * 100}%`, 
                    left: 0, 
                    width: '100%',
                    opacity: Math.random()
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2 + Math.random() * 5, repeat: Infinity, ease: 'linear' }}
                />
              ))}
            </div>
            
            <div className="z-10 text-center">
              <Zap className="text-accent-cyan mb-4 animate-pulse mx-auto" size={48} />
              <p className="font-mono text-xs tracking-widest text-accent-cyan italic">LIVE_DATA_STREAM_AUTH_SUCCESS</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
