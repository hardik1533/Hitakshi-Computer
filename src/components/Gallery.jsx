import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function Gallery() {
  const { gallery } = useContext(AppContext);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Photo <span className="text-gradient">Gallery</span></h3>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative group overflow-hidden rounded-2xl glass-card cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.url} alt={img.desc} className="w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 mix-blend-lighten" />
              <div className="absolute inset-0 bg-dark-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <ZoomIn className="w-8 h-8 md:w-10 md:h-10 text-cyan-accent drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 bg-gradient-to-t from-dark-navy/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm md:text-base">{img.desc}</p>
                <p className="text-cyan-accent text-[10px] md:text-xs uppercase mt-1">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {gallery.length === 0 && (
          <p className="text-center text-gray-500">No photos available.</p>
        )}
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
            <button className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-cyan-accent transition-colors">
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
               <div className="relative glass-card p-2 md:p-4 rounded-2xl">
                 <img src={selectedImg.url} alt={selectedImg.desc} className="w-full h-auto max-h-[75vh] object-contain rounded-xl" />
                 <div className="mt-4 text-center pb-2">
                   <p className="text-lg md:text-xl text-white font-medium">{selectedImg.desc}</p>
                   <span className="text-xs md:text-sm text-cyan-accent uppercase tracking-widest">{selectedImg.category}</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
