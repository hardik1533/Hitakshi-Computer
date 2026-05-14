import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { MessageCircle, Phone } from 'lucide-react'

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative selection:bg-cyan-accent selection:text-dark-navy">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        <a 
          href="https://wa.me/918108087804" 
          target="_blank" 
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a 
          href="tel:7977556276" 
          className="w-14 h-14 bg-royal-blue text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(10,108,255,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default App
