import { motion } from 'framer-motion';
import { Tag, ShieldCheck, Zap, Cog, UserCheck, HeartHandshake } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Affordable Price", desc: "Best market prices for all products and repair services.", icon: <Tag /> },
    { title: "Trusted Service", desc: "Years of reliable service building trust in Una.", icon: <ShieldCheck /> },
    { title: "Fast Repair", desc: "Quick turnaround time for all urgent repairs.", icon: <Zap /> },
    { title: "Genuine Parts", desc: "100% original and authentic spare parts guaranteed.", icon: <Cog /> },
    { title: "Expert Technician", desc: "Highly skilled professionals handling your devices.", icon: <UserCheck /> },
    { title: "Best Support", desc: "Friendly customer service always ready to help.", icon: <HeartHandshake /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">The Best IT <span className="text-gradient">Solutions</span> in Town</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              At Hitakshi Computer, we prioritize quality, transparency, and customer satisfaction. Our commitment to excellence has made us the preferred choice for all computing and security needs in Una.
            </p>
            
            <div className="space-y-6">
              {reasons.slice(0,3).map((reason, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 p-3 rounded-xl bg-gradient-to-br from-royal-blue to-cyan-accent text-white shadow-[0_0_15px_rgba(10,108,255,0.4)]">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{reason.title}</h4>
                    <p className="text-gray-400">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.slice(3,6).map((reason, idx) => (
              <div key={idx} className="glass-card-blue p-6 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-dark-navy flex items-center justify-center text-cyan-accent border border-cyan-accent/30 mb-4 shadow-[0_0_10px_rgba(25,211,255,0.2)]">
                  {reason.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-sm text-gray-400">{reason.desc}</p>
              </div>
            ))}
            
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-cyan-accent/20 to-royal-blue/20 border-cyan-accent/50">
              <h4 className="text-4xl font-extrabold text-white mb-2">100%</h4>
              <p className="text-sm text-cyan-accent font-medium uppercase tracking-wider">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
