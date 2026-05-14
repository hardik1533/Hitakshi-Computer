import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const categories = ["All", "Gaming PCs", "Laptops", "CCTV", "Printers", "Accessories"];

const products = [
  { id: 1, name: "Custom Gaming Rig", category: "Gaming PCs", desc: "Ryzen 5, RTX 3060, 16GB RAM", price: "Contact for Price" },
  { id: 2, name: "Dell Inspiron 15", category: "Laptops", desc: "Intel i5 11th Gen, 8GB RAM, 512GB SSD", price: "Contact for Price" },
  { id: 3, name: "HP OfficeJet Pro", category: "Printers", desc: "All-in-one wireless color printer", price: "Contact for Price" },
  { id: 4, name: "Hikvision 4CH Setup", category: "CCTV", desc: "4 HD Cameras, DVR, 1TB HDD Setup", price: "Contact for Price" },
  { id: 5, name: "Logitech MX Master", category: "Accessories", desc: "Wireless productivity mouse", price: "Contact for Price" },
  { id: 6, name: "Refurbished ThinkPad", category: "Laptops", desc: "Intel i7 8th Gen, 16GB RAM, Business Series", price: "Contact for Price" },
];

export default function Products() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredProducts = activeCat === "All" 
    ? products 
    : products.filter(p => p.category === activeCat);

  return (
    <section id="products" className="py-24 relative bg-dark-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-sm mb-2">Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Products</span></h3>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-dark-navy to-royal-blue/20 relative overflow-hidden flex items-center justify-center">
                <div className="text-gray-500 font-medium tracking-widest uppercase opacity-50 group-hover:scale-110 transition-transform duration-500">{product.category} Image</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 to-transparent"></div>
              </div>
              
              <div className="p-6 relative -mt-8 z-10">
                <div className="bg-dark-navy/80 backdrop-blur-md rounded-xl p-5 border border-white/10 shadow-lg">
                  <h4 className="text-xl font-bold text-white mb-1">{product.name}</h4>
                  <p className="text-sm text-gray-400 mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <span className="text-cyan-accent font-semibold">{product.price}</span>
                    <a 
                      href={`https://wa.me/918108087804?text=Hi, I'm interested in ${product.name}`}
                      target="_blank" rel="noreferrer"
                      className="p-2 bg-white/5 hover:bg-cyan-accent hover:text-dark-navy rounded-lg transition-colors text-white"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
