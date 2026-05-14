import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, category: "Shop", desc: "Front View of Hitakshi Computer" },
  { id: 2, category: "Repair", desc: "Motherboard Level Repairing" },
  { id: 3, category: "CCTV", desc: "Professional CCTV Installation" },
  { id: 4, category: "Setup", desc: "Custom Gaming PC Build" },
  { id: 5, category: "Products", desc: "New Branded Laptops Stock" },
  { id: 6, category: "Repair", desc: "Laptop Screen Replacement" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-sm mb-2">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Photo <span className="text-gradient">Gallery</span></h3>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-2xl glass-card cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              {/* Dynamic height placeholder */}
              <div className={`w-full ${idx % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]'} bg-gradient-to-br from-dark-navy to-royal-blue/20 flex flex-col items-center justify-center relative`}>
                 <div className="text-white/20 font-bold uppercase tracking-widest">{img.category}</div>
                 <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-cyan-accent drop-shadow-lg" />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-dark-navy/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{img.desc}</p>
                <p className="text-cyan-accent text-xs uppercase mt-1">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-cyan-accent transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video bg-gradient-to-br from-dark-navy to-royal-blue/40 rounded-2xl border border-white/10 flex flex-col items-center justify-center shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl text-white/50 uppercase tracking-[0.5em] font-bold">{selectedImg.category}</h3>
              <p className="absolute bottom-6 left-6 text-xl text-white font-medium bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">
                {selectedImg.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
