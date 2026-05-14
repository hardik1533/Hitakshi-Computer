import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-royal-blue/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-gradient">Us</span></h3>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card-blue p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              <p className="text-gray-300 mb-8">Feel free to reach out to us for any queries, quotations, or support.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-dark-navy rounded-lg text-cyan-accent group-hover:bg-cyan-accent group-hover:text-dark-navy transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone Numbers</p>
                    <a href="tel:7977556276" className="block text-white font-medium hover:text-cyan-accent transition-colors">+91 7977556276</a>
                    <a href="tel:8108087804" className="block text-white font-medium hover:text-cyan-accent transition-colors">+91 8108087804</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-dark-navy rounded-lg text-cyan-accent group-hover:bg-cyan-accent group-hover:text-dark-navy transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Address</p>
                    <a href="mailto:hitakshicomputer@gmail.com" className="block text-white font-medium hover:text-cyan-accent transition-colors break-all">hitakshicomputer@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-dark-navy rounded-lg text-cyan-accent group-hover:bg-cyan-accent group-hover:text-dark-navy transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Store Address</p>
                    <p className="text-white font-medium">Shop 36, Patel Shopping Center, Near Jalaram Mandir, Una - 362560</p>
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
            <form className="glass-card p-8 md:p-10" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-dark-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Phone</label>
                  <input type="tel" className="w-full bg-dark-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-colors" placeholder="+91 0000000000" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-dark-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-colors" placeholder="john@example.com" />
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea rows="4" className="w-full bg-dark-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
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
