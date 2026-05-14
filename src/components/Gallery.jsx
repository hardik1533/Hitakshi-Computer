import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function Gallery() {
  const { gallery } = useContext(AppContext);
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Photo Gallery</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img.url} alt={img.desc} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">{img.desc}</p>
                <p className="text-gray-300 text-xs uppercase mt-1">{img.category}</p>
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
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImg.url} alt={selectedImg.desc} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              <div className="mt-4 text-center">
                <p className="text-xl text-white font-medium">{selectedImg.desc}</p>
                <span className="text-sm text-gray-400 uppercase tracking-widest">{selectedImg.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
