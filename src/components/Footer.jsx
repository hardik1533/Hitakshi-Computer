import { ArrowUp, Globe, Camera, MessageSquare, Briefcase } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center">
              <img src="/logo.png" alt="Hitaksi Computers Sales Service" className="h-10 object-contain" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} />
              <div className="hidden flex-col ml-2" style={{ display: 'none' }}>
                <span className="text-xl font-bold text-brand-black tracking-wide">HITAKSI</span>
                <span className="text-xs text-brand-gray tracking-widest font-medium uppercase">Computer</span>
              </div>
            </a>
            <p className="text-brand-gray text-sm leading-relaxed">
              Trusted computer and laptop store in Una. We provide the best products and professional repair services to keep your digital life running smoothly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-black font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-black"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-brand-gray hover:text-brand-blue transition-colors flex items-center gap-2 text-sm">
                    <span className="text-brand-blue text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-black"></span>
            </h4>
            <ul className="space-y-3">
              {['Laptop Repairing', 'Computer Sales', 'CCTV Installation', 'Printer Repair', 'Custom PC Build', 'Software Setup'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-brand-gray hover:text-brand-blue transition-colors flex items-center gap-2 text-sm">
                    <span className="text-brand-blue text-xs">▹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-black font-bold text-lg mb-6 relative inline-block">
              Business Hours
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-black"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                <span className="text-brand-gray">Monday - Saturday</span>
                <span className="text-brand-black font-medium">9:00 AM - 8:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                <span className="text-brand-gray">Sunday</span>
                <span className="text-brand-black font-medium">9:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
          <p className="text-brand-gray text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hitaksi Computers Sales Service. All rights reserved. <br className="md:hidden" />Designed with <span className="text-red-500">♥</span>
          </p>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300 shadow-sm"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
