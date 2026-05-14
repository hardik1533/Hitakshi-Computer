import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, MonitorPlay, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full border border-gray-200 mb-2 shadow-sm">
            <span className="text-brand-blue font-medium text-sm tracking-wider uppercase">Trusted IT Solutions in Una</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-black leading-tight">
            Premium <br/>
            Computers & Services
          </h1>
          
          <p className="text-lg md:text-xl text-brand-gray max-w-xl leading-relaxed">
            Hitaksi Computers Sales Service provides the best new and refurbished systems, laptops, CCTV cameras, and expert repair services.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="tel:7977556276" className="btn-primary flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Call Now
            </a>
            <a href="https://wa.me/918108087804" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 bg-white">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-brand-black mb-1">500+</h4>
              <p className="text-xs text-brand-gray uppercase tracking-wider font-medium">Happy Customers</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <h4 className="text-3xl font-bold text-brand-black mb-1">1K+</h4>
              <p className="text-xs text-brand-gray uppercase tracking-wider font-medium">Repairs Done</p>
            </div>
            <div className="text-center border-l border-gray-200">
              <h4 className="text-3xl font-bold text-brand-black mb-1">5+</h4>
              <p className="text-xs text-brand-gray uppercase tracking-wider font-medium">Years Active</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
             <div className="absolute inset-0 bg-blue-50 rounded-full blur-[100px]"></div>
             
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 bg-white p-4 rounded-3xl w-4/5 h-4/5 flex items-center justify-center border border-gray-100 shadow-xl"
             >
                <MonitorPlay className="w-48 h-48 text-brand-black" />
             </motion.div>

             <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 bg-white p-4 rounded-xl flex items-center gap-3 shadow-lg border border-gray-100 z-20"
             >
               <div className="bg-blue-50 p-2 rounded-lg"><ShieldCheck className="w-6 h-6 text-brand-blue"/></div>
               <div>
                 <p className="text-xs text-brand-gray font-medium">100% Genuine</p>
                 <p className="font-bold text-brand-black">Products</p>
               </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
