import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-navy/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          {/* Logo */}
          <div className="bg-white/90 p-1 md:p-2 rounded-lg shadow-[0_0_15px_rgba(25,211,255,0.3)]">
             <img src="/logo.png" alt="Hitaksi Computers" className="h-8 md:h-10 object-contain" onError={(e) => {
               e.target.style.display = 'none';
               e.target.nextSibling.style.display = 'flex';
             }} />
             <div className="hidden flex-col px-2" style={{ display: 'none' }}>
               <span className="text-xl font-bold text-dark-navy tracking-wide">HITAKSI</span>
             </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-cyan-accent transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Contact Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white hover:text-cyan-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-dark-navy/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl"
          >
            <div className="flex flex-col px-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-cyan-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-4 flex items-center justify-center gap-2">
                <PhoneCall className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
