import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import Logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-16 bg-primary-500 rounded-full flex items-center justify-center">
              <img src={Logo} className="w-full h-auto"/>
            </div>
            {/* <div>
              <h1 className={`font-bold text-lg ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Coastal Almond
              </h1>
              <p className={`text-xs ${
                isScrolled ? 'text-gray-600' : 'text-green-100'
              }`}>
                Natural Leaves
              </p>
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Benefits', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Products', 'Benefits', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;