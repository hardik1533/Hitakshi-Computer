import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 relative bg-dark-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-cyan-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Find Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Visit Our <span className="text-gradient">Shop</span></h3>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-royal-blue to-cyan-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 md:p-8 h-full flex flex-col justify-center border-l-4 border-l-cyan-accent">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-accent/10 rounded-full flex items-center justify-center text-cyan-accent mb-4 md:mb-6">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Store Address</h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">
                Shop No. 36, Patel Shopping Center,<br/>
                Near Jalaram Mandir,<br/>
                Una, Gir Somnath,<br/>
                Gujarat – 362560
              </p>
              
              <div className="flex flex-col gap-2 md:gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hitakshi+Computer+Una" target="_blank" rel="noreferrer" className="btn-primary w-full text-center flex justify-center items-center gap-2 text-xs md:text-sm">
                  <Navigation className="w-4 h-4" /> Open in Maps
                </a>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <a href="tel:7977556276" className="btn-outline w-full text-center flex justify-center items-center gap-2 px-0 py-2 text-xs md:text-sm">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href="https://wa.me/918108087804" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors rounded-full font-medium w-full text-center flex justify-center items-center gap-2 px-0 py-2 text-xs md:text-sm shadow-lg">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card p-1 md:p-2 rounded-2xl md:rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-full relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.889311696239!2d71.02693895!3d20.82098045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c5a000000001%3A0x0!2zMjDCsDQ5JzE1LjUiTiA3McKwMDInMzcuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                className="w-full h-full rounded-xl md:rounded-2xl border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[85%]" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none rounded-xl md:rounded-2xl shadow-[inset_0_0_50px_rgba(7,27,52,0.8)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
