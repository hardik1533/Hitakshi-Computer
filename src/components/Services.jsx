import { motion } from 'framer-motion';
import { Monitor, Laptop, Camera, Wrench, HardDrive, Cpu, Download, Printer, Cable, RefreshCw } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "New Computer Sales", desc: "Top branded PCs for office and home use.", icon: <Monitor className="w-8 h-8" /> },
    { title: "Old Computer Sales", desc: "Refurbished systems in excellent condition.", icon: <RefreshCw className="w-8 h-8" /> },
    { title: "Laptop Buy & Sale", desc: "Best deals on new and used laptops.", icon: <Laptop className="w-8 h-8" /> },
    { title: "CCTV Installation", desc: "Complete security solutions for home & office.", icon: <Camera className="w-8 h-8" /> },
    { title: "Computer Repairing", desc: "Hardware & software troubleshooting.", icon: <HardDrive className="w-8 h-8" /> },
    { title: "Laptop Repairing", desc: "Screen, battery, motherboard repairs.", icon: <Wrench className="w-8 h-8" /> },
    { title: "Printer Repairing", desc: "Inkjet and LaserJet printer servicing.", icon: <Printer className="w-8 h-8" /> },
    { title: "Accessories & Parts", desc: "Keyboards, mouse, RAM, SSD, cables.", icon: <Cable className="w-8 h-8" /> },
    { title: "Custom PC Build", desc: "High-performance gaming and editing rigs.", icon: <Cpu className="w-8 h-8" /> },
    { title: "Software Installation", desc: "OS, Antivirus, and essential applications.", icon: <Download className="w-8 h-8" /> }
  ];

  return (
    <section id="services" className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Premium Services</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.1 }}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-black mb-6 group-hover:bg-brand-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-brand-black mb-2">{service.title}</h4>
              <p className="text-sm text-brand-gray">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
