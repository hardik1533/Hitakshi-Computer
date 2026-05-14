import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, MonitorPlay, Users, Wrench, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-blue/20 via-dark-navy/90 to-dark-navy z-0"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjUsIDIxMSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] z-0"></div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 glass-card-blue rounded-full border border-cyan-accent/30 mb-2">
            <span className="text-cyan-accent font-medium text-sm tracking-wider uppercase">Trusted Computer & Laptop Solutions in Una</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Welcome to <br/>
            <span className="text-gradient font-extrabold block mt-2">Hitakshi Computer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
            Your one-stop destination for Buy & Sale of New & Old Computers, Laptops & CCTV Cameras. Expert repair services with guaranteed satisfaction.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="tel:7977556276" className="btn-primary flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Call Now
            </a>
            <a href="https://wa.me/918108087804" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 bg-dark-navy/50">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-cyan-accent mb-1">500+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Happy Customers</p>
            </div>
            <div className="text-center border-l border-white/10">
              <h4 className="text-3xl font-bold text-cyan-accent mb-1">1K+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Systems Repaired</p>
            </div>
            <div className="text-center border-l border-white/10">
              <h4 className="text-3xl font-bold text-cyan-accent mb-1">5+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Main floating image placeholder (Using an abstract laptop/tech shape if we don't have images) */}
          <div className="relative w-full aspect-square flex items-center justify-center">
             {/* Glow effect behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-royal-blue/30 blur-[100px] rounded-full"></div>
             
             {/* Main Graphic */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 glass-card p-4 rounded-3xl w-4/5 h-4/5 flex items-center justify-center border-white/20 bg-white/5"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/20 to-cyan-accent/10 rounded-3xl"></div>
                <MonitorPlay className="w-48 h-48 text-cyan-accent drop-shadow-[0_0_30px_rgba(25,211,255,0.6)]" />
             </motion.div>

             {/* Floating elements */}
             <motion.div 
                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 glass-card-blue p-4 rounded-xl flex items-center gap-3"
             >
               <div className="bg-cyan-accent/20 p-2 rounded-lg"><Users className="w-6 h-6 text-cyan-accent"/></div>
               <div>
                 <p className="text-xs text-gray-400">Trusted by</p>
                 <p className="font-bold text-white">Locals</p>
               </div>
             </motion.div>

             <motion.div 
                animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-0 glass-card-blue p-4 rounded-xl flex items-center gap-3"
             >
               <div className="bg-royal-blue/30 p-2 rounded-lg"><Wrench className="w-6 h-6 text-white"/></div>
               <div>
                 <p className="text-xs text-gray-400">Expert</p>
                 <p className="font-bold text-white">Repairing</p>
               </div>
             </motion.div>

             <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 bg-cyan-accent text-dark-navy p-3 rounded-full shadow-[0_0_20px_rgba(25,211,255,0.5)]"
             >
               <Clock className="w-6 h-6"/>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-dark-navy/50"></path>
        </svg>
      </div>
    </section>
  );
}
