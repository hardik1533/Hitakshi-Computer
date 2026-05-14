import { ArrowUp, Globe, Camera, MessageSquare, Briefcase } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040f1c] pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <a href="#home" className="flex items-center">
              <div className="bg-white/90 p-1 md:p-2 rounded-lg">
                <img src="/logo.png" alt="Hitaksi Computers Sales Service" className="h-8 md:h-10 object-contain" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} />
                <div className="hidden flex-col px-2" style={{ display: 'none' }}>
                  <span className="text-xl font-bold text-dark-navy tracking-wide">HITAKSI</span>
                </div>
              </div>
            </a>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Trusted computer and laptop store in Una. We provide the best products and professional repair services to keep your digital life running smoothly.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-accent hover:text-dark-navy transition-all duration-300">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-accent hover:text-dark-navy transition-all duration-300">
                <Camera className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-accent hover:text-dark-navy transition-all duration-300">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-accent hover:text-dark-navy transition-all duration-300">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 md:-bottom-2 left-0 w-1/2 h-0.5 bg-cyan-accent"></span>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-accent transition-colors flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-cyan-accent text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1.5 md:-bottom-2 left-0 w-1/2 h-0.5 bg-cyan-accent"></span>
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Laptop Repairing', 'Computer Sales', 'CCTV Installation', 'Printer Repair', 'Custom PC Build', 'Software Setup'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-cyan-accent transition-colors flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-cyan-accent text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 relative inline-block">
              Business Hours
              <span className="absolute -bottom-1.5 md:-bottom-2 left-0 w-1/2 h-0.5 bg-cyan-accent"></span>
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex justify-between items-center text-xs md:text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-white font-medium">9:00 AM - 8:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-xs md:text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hitaksi Computers Sales Service. All rights reserved. <br className="md:hidden" />Designed with <span className="text-cyan-accent">♥</span>
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-accent hover:bg-cyan-accent hover:text-dark-navy transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
