import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;