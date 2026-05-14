import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2">Find Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-black">Visit Our Shop</h3>
          <div className="w-24 h-1 bg-brand-black mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full flex flex-col justify-center shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-black mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-4">Store Address</h4>
              <p className="text-brand-gray leading-relaxed mb-6">
                Shop No. 36, Patel Shopping Center,<br/>
                Near Jalaram Mandir,<br/>
                Una, Gir Somnath,<br/>
                Gujarat – 362560
              </p>
              
              <div className="flex flex-col gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hitakshi+Computer+Una" target="_blank" rel="noreferrer" className="btn-primary w-full text-center flex justify-center items-center gap-2">
                  <Navigation className="w-4 h-4" /> Open in Maps
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:7977556276" className="btn-outline w-full text-center flex justify-center items-center gap-2 px-0 py-2 text-sm bg-white">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href="https://wa.me/918108087804" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors rounded-lg font-medium w-full text-center flex justify-center items-center gap-2 px-0 py-2 text-sm shadow">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 border border-gray-100 p-2 rounded-3xl overflow-hidden h-[400px] lg:h-full relative shadow-sm">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.889311696239!2d71.02693895!3d20.82098045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be2c5a000000001%3A0x0!2zMjDCsDQ5JzE1LjUiTiA3McKwMDInMzcuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                className="w-full h-full rounded-2xl border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
