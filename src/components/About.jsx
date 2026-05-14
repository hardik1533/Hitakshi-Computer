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
    <section id="about" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Trusted IT Partner in Una</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gray-50 p-1 rounded-3xl overflow-hidden aspect-video lg:aspect-square border border-gray-100 shadow-md">
              <div className="w-full h-full rounded-[20px] bg-white flex flex-col items-center justify-center p-8 text-center">
                <Cpu className="w-24 h-24 text-brand-black mb-6" />
                <h4 className="text-2xl font-bold text-brand-black">Hitaksi Computers Sales Service</h4>
                <p className="text-brand-gray mt-2">Owned by <span className="text-brand-black font-semibold">Haresh Vanja</span></p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-brand-blue">5+</div>
                <div className="text-sm text-brand-gray font-medium leading-tight">Years of<br/>Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-brand-blue mb-4">
              <ShieldCheck className="w-8 h-8" />
              <h4 className="text-xl font-bold text-brand-black">Quality Service Guaranteed</h4>
            </div>
            
            <p className="text-brand-gray leading-relaxed text-lg">
              Hitaksi Computers Sales Service is a trusted computer and laptop store dedicated to providing high-quality IT solutions. We specialize in dealing with new and refurbished systems, professional repairing, and top-notch CCTV surveillance setups.
            </p>
            
            <p className="text-brand-gray leading-relaxed">
              Whether you are looking to build a custom gaming PC, upgrade your office setup, or need urgent repairs, our expert technicians ensure the best service at affordable prices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span className="text-brand-black font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a href="#services" className="btn-primary inline-block">Explore Our Services</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
