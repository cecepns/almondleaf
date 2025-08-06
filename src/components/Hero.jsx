import { ArrowDown, Phone, Mail } from "lucide-react";
import Background from "../assets/bg.jpeg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      
      {/* Green Overlay Layer */}
      <div className="absolute inset-0 hero-overlay z-10"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Premium <span className="text-yellow-300">Coastal Almond Leaf</span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl font-normal text-green-100">
              Daun Ketapang Berkualitas Tinggi
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Daun ketapang premium dari pohon pinggir pantai yang telah matang
            secara alami, khusus untuk kesehatan dan keindahan ikan cupang Anda.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <button
              onClick={() => scrollToSection("products")}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Lihat Produk Kami
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Contact Info */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-green-100"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+62 822-9197-4003</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>almondleaf.com</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">Scroll untuk lebih</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
