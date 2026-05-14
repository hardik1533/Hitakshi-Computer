import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: "Rahul Patel", role: "Local Guide", text: "Fast laptop repair service at a very reasonable price. The owner is very polite.", rating: 5 },
  { id: 2, name: "Suresh Bhai", role: "Business Owner", text: "Got CCTV cameras installed for my shop. Excellent work and neat cabling.", rating: 5 },
  { id: 3, name: "Amit Shah", role: "Student", text: "Bought a refurbished Dell laptop from here. It's working perfectly without any issues.", rating: 4 },
  { id: 4, name: "Kiran Desai", role: "Customer", text: "Friendly behavior and they use genuine parts for repairing. Highly recommended.", rating: 5 },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 relative bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">What Our Customers Say</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button onClick={prevReview} className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-brand-black hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button onClick={nextReview} className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-brand-black hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-100 p-8 md:p-12 text-center relative rounded-2xl shadow-sm"
              >
                <Quote className="w-16 h-16 text-gray-100 absolute top-4 right-4" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < reviews[index].rating ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-8 relative z-10">
                  "{reviews[index].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-brand-black flex items-center justify-center text-white text-xl font-bold mb-4">
                    {reviews[index].name.charAt(0)}
                  </div>
                  <h5 className="text-lg font-bold text-brand-black">{reviews[index].name}</h5>
                  <span className="text-sm text-brand-gray">{reviews[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-2">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === index ? 'bg-brand-black w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
