import { motion } from 'framer-motion';
import { Monitor, Laptop, Camera, Wrench, HardDrive, Cpu, Download, Printer, Cable, RefreshCw } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "New Computer Sales", desc: "Top branded PCs for office and home use.", icon: <Monitor className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Old Computer Sales", desc: "Refurbished systems in excellent condition.", icon: <RefreshCw className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Laptop Buy & Sale", desc: "Best deals on new and used laptops.", icon: <Laptop className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "CCTV Installation", desc: "Complete security solutions for home & office.", icon: <Camera className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Computer Repairing", desc: "Hardware & software troubleshooting.", icon: <HardDrive className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Laptop Repairing", desc: "Screen, battery, motherboard repairs.", icon: <Wrench className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Printer Repairing", desc: "Inkjet and LaserJet printer servicing.", icon: <Printer className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Accessories & Parts", desc: "Keyboards, mouse, RAM, SSD, cables.", icon: <Cable className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Custom PC Build", desc: "High-performance gaming and editing rigs.", icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" /> },
    { title: "Software Installation", desc: "OS, Antivirus, and essential applications.", icon: <Download className="w-6 h-6 md:w-8 md:h-8" /> }
  ];

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-royal-blue/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-cyan-accent/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Premium <span className="text-gradient">Services</span> We Offer</h3>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
              className="glass-card p-5 md:p-6 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-dark-navy/50 border border-white/10 flex items-center justify-center text-cyan-accent mb-4 md:mb-6 group-hover:bg-gradient-to-br group-hover:from-royal-blue group-hover:to-cyan-accent group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(25,211,255,0.1)] group-hover:shadow-[0_0_20px_rgba(25,211,255,0.4)]">
                {service.icon}
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors">{service.title}</h4>
              <p className="text-xs md:text-sm text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
