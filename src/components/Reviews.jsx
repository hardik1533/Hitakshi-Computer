import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: "Rahul Patel", role: "Local Guide", text: "Fast laptop repair service at a very reasonable price. The owner is very polite.", rating: 5 },
  { id: 2, name: "Suresh Bhai", role: "Business Owner", text: "Got CCTV cameras installed for my shop. Excellent work and neat cabling.", rating: 5 },
  { id: 3, name: "Amit Shah", role: "Student", text: "Bought a refurbished Dell laptop from here. It's working perfectly without any issues.", rating: 4 },
  { id: 4, name: "Kiran Desai", role: "Customer", text: "Friendly behavior and they use genuine parts for repairing. Highly recommended in Una.", rating: 5 },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 relative bg-dark-navy/80">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-gradient">Customers</span> Say</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button onClick={prevReview} className="p-3 rounded-full glass-card-blue text-white hover:text-cyan-accent transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button onClick={nextReview} className="p-3 rounded-full glass-card-blue text-white hover:text-cyan-accent transition-colors">
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
                className="glass-card p-8 md:p-12 text-center relative"
              >
                <Quote className="w-16 h-16 text-white/5 absolute top-4 right-4" />
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < reviews[index].rating ? 'fill-cyan-accent text-cyan-accent' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-200 italic mb-8 relative z-10">
                  "{reviews[index].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal-blue to-cyan-accent p-[2px] mb-4">
                    <div className="w-full h-full rounded-full bg-dark-navy flex items-center justify-center text-xl font-bold">
                      {reviews[index].name.charAt(0)}
                    </div>
                  </div>
                  <h5 className="text-lg font-bold text-white">{reviews[index].name}</h5>
                  <span className="text-sm text-cyan-accent">{reviews[index].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === index ? 'bg-cyan-accent w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
