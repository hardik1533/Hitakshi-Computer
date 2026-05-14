import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Contact Us</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl h-full">
              <h4 className="text-2xl font-bold text-brand-black mb-6">Contact Information</h4>
              <p className="text-brand-gray mb-8">Feel free to reach out to us for any queries, quotations, or support.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-brand-black group-hover:bg-brand-black group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Phone Numbers</p>
                    <a href="tel:7977556276" className="block text-brand-black font-medium hover:text-brand-blue transition-colors">+91 7977556276</a>
                    <a href="tel:8108087804" className="block text-brand-black font-medium hover:text-brand-blue transition-colors">+91 8108087804</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-brand-black group-hover:bg-brand-black group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Email Address</p>
                    <a href="mailto:hitakshicomputer@gmail.com" className="block text-brand-black font-medium hover:text-brand-blue transition-colors break-all">hitakshicomputer@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-brand-black group-hover:bg-brand-black group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-gray mb-1">Store Address</p>
                    <p className="text-brand-black font-medium">Shop 36, Patel Shopping Center, Near Jalaram Mandir, Una - 362560</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="bg-white border border-gray-100 shadow-sm p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h4 className="text-2xl font-bold text-brand-black mb-6">Send an Inquiry</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">Your Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray mb-2">Your Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-colors" placeholder="+91 0000000000" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-brand-gray mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-colors" placeholder="john@example.com" />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-brand-gray mb-2">Your Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-black focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-4">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
