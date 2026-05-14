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
    <section id="products" className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Featured Products</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCat === cat 
                  ? 'bg-brand-black text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-brand-gray hover:bg-gray-100'
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
              </div>
              
              <div className="p-6">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-2 block">{product.category}</span>
                <h4 className="text-xl font-bold text-brand-black mb-2">{product.name}</h4>
                <p className="text-sm text-brand-gray mb-4">{product.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-brand-black font-extrabold text-lg">{product.price}</span>
                  <a 
                    href={`https://wa.me/918108087804?text=Hi, I'm interested in ${product.name}`}
                    target="_blank" rel="noreferrer"
                    className="p-2 bg-gray-50 hover:bg-brand-blue hover:text-white rounded-lg transition-colors text-brand-gray"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500">No products available in this category.</p>
        )}
      </div>
    </section>
  );
}
