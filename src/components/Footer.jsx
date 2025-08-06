import { Leaf, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">
                  PT. Coastal Almond Leaf
                </h3>
                <p className="text-green-300 text-sm">Premium Natural Leaves</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Menyediakan daun ketapang berkualitas premium untuk kesehatan optimal ikan cupang Anda. 
              Berdiri sejak 2018 dengan komitmen terhadap kualitas dan kepuasan pelanggan.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <span>+62 822-9197-4003</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <span>almondleaf.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <span>Puri Manado Permai, Manado, Sulawesi Utara</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Menu Utama</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Benefits', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                  >
                    {item === 'Home' ? 'Beranda' : 
                     item === 'About' ? 'Tentang Kami' :
                     item === 'Products' ? 'Produk' :
                     item === 'Benefits' ? 'Manfaat' :
                     item === 'Contact' ? 'Kontak' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Informasi Perusahaan</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="text-primary-400 font-medium">Didirikan:</span> 24 Februari 2018
              </li>
              <li>
                <span className="text-primary-400 font-medium">Produk:</span> Daun Ketapang Kering
              </li>
              <li>
                <span className="text-primary-400 font-medium">Spesialisasi:</span> Ikan Cupang
              </li>
              <li>
                <span className="text-primary-400 font-medium">Kualitas:</span> 100% Premium
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PT. Coastal Almond Leaf. All rights reserved.
            </div>
            
            {/* <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for Betta Fish Lovers</span>
            </div> */}
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              🌿 Daun ketapang premium dari pohon pinggir pantai Sulawesi Utara 
              - Untuk kesehatan dan keindahan ikan cupang Anda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;