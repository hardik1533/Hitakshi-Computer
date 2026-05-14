import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function About() {
  const features = [
    "New & Old Computers",
    "Laptop Buy & Sale",
    "CCTV Camera Installation",
    "Printer Sales & Repair",
    "Computer Accessories",
    "Expert Repairing Services"
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative bg-dark-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Trusted IT Partner in <span className="text-gradient">Una</span></h3>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-royal-blue/20 to-transparent rounded-3xl blur-xl"></div>
            <div className="relative glass-card p-1 rounded-3xl overflow-hidden aspect-video lg:aspect-square">
              <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-dark-navy via-royal-blue/40 to-dark-navy flex flex-col items-center justify-center p-6 md:p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]"></div>
                <img src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80" alt="Hitakshi Computers Store" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
                <Cpu className="w-16 h-16 md:w-24 md:h-24 text-cyan-accent mb-4 md:mb-6 relative z-10 drop-shadow-lg" />
                <h4 className="text-xl md:text-2xl font-bold text-white relative z-10">Hitakshi Computers Sales Service</h4>
                <p className="text-sm md:text-base text-gray-300 mt-2 relative z-10">Owned by <span className="text-cyan-accent font-semibold">Haresh Vanja</span></p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card-blue p-4 md:p-6 rounded-2xl border-cyan-accent/30 shadow-[0_0_30px_rgba(10,108,255,0.3)]">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="text-3xl md:text-4xl font-extrabold text-cyan-accent">5+</div>
                <div className="text-xs md:text-sm text-gray-300 leading-tight">Years of<br/>Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 text-cyan-accent mb-2 md:mb-4">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
              <h4 className="text-lg md:text-xl font-semibold text-white">Quality Service Guaranteed</h4>
            </div>
            
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              Hitakshi Computers Sales Service is a trusted computer and laptop store dedicated to providing high-quality IT solutions. We specialize in dealing with new and refurbished systems, professional repairing, and top-notch CCTV surveillance setups.
            </p>
            
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Whether you are looking to build a custom gaming PC, upgrade your office setup, or need urgent repairs, our expert technicians ensure the best service at affordable prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4 md:pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-accent flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8 text-center sm:text-left">
              <a href="#services" className="btn-primary inline-block">Explore Our Services</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
