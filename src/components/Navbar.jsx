import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          {/* Logo replacement */}
          <img src="/logo.png" alt="Hitaksi Computers Sales Service" className="h-10 md:h-12 object-contain" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }} />
          <div className="hidden flex-col ml-2" style={{ display: 'none' }}>
            <span className="text-xl font-bold text-brand-black tracking-wide">HITAKSI</span>
            <span className="text-xs text-brand-gray tracking-widest font-medium uppercase">Computer</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-brand-blue ${scrolled ? 'text-gray-700' : 'text-gray-900'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
             <Link to="/admin" className="text-sm font-medium text-brand-gray hover:text-brand-blue">Admin</Link>
             <a href="#contact" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
               <PhoneCall className="w-4 h-4" />
               Contact Us
             </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 py-4 shadow-lg"
          >
            <div className="flex flex-col px-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link to="/admin" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-brand-blue">Admin Panel</Link>
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
