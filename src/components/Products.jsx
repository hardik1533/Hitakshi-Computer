import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { AppContext } from '../context/AppContext';

export default function Products() {
  const { products } = useContext(AppContext);
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [activeCat, setActiveCat] = useState("All");

  const filteredProducts = activeCat === "All" 
    ? products 
    : products.filter(p => p.category === activeCat);

  return (
    <section id="products" className="py-16 md:py-24 relative bg-dark-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Products</span></h3>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCat === cat 
                  ? 'bg-gradient-to-r from-royal-blue to-cyan-accent text-white shadow-[0_0_15px_rgba(25,211,255,0.4)]' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-dark-navy to-royal-blue/20">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-lighten" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 uppercase tracking-widest text-xs font-bold opacity-50">
                    {product.category} Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="p-4 md:p-6 relative -mt-10 z-10">
                <div className="bg-dark-navy/90 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/10 shadow-lg">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">{product.name}</h4>
                  <p className="text-xs md:text-sm text-gray-400 mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-cyan-accent font-semibold">{product.price}</span>
                    <a 
                      href={`https://wa.me/918108087804?text=Hi, I'm interested in ${product.name}`}
                      target="_blank" rel="noreferrer"
                      className="p-2 bg-white/5 hover:bg-cyan-accent hover:text-dark-navy rounded-lg transition-colors text-white"
                    >
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 py-10">No products available in this category.</p>
        )}
      </div>
    </section>
  );
}
