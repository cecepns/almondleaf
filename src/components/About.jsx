import { Calendar, MapPin, Leaf, Award } from 'lucide-react';
import DaunKatapang from  '../assets/daun-katapang.jpeg';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Berdiri Sejak', value: '2018', desc: '7 tahun pengalaman' },
    { icon: MapPin, label: 'Lokasi', value: 'Manado', desc: 'Sulawesi Utara' },
    { icon: Leaf, label: 'Produk', value: '100%', desc: 'Alami & Organik' },
    { icon: Award, label: 'Kualitas', value: 'Premium', desc: 'Standar tinggi' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 leaf-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tentang <span className="gradient-text">Coastal Almond Leaf</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Perusahaan terpercaya dalam pengelolaan daun ketapang berkualitas tinggi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Komitmen Terhadap Kualitas Premium
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>Coastal Almond Leaf</strong> didirikan pada <strong>24 Februari 2018 {" "}</strong> 
              dengan visi menyediakan daun ketapang berkualitas premium untuk komunitas pecinta ikan cupang. 
              Berlokasi strategis di <strong>Puri Manado Permai, Manado, Sulawesi Utara</strong>, 
              kami memanfaatkan keunggulan geografis untuk menghasilkan produk terbaik.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kami hanya menggunakan daun ketapang dari <strong>pohon ketapang laut</strong> (pohon pinggir pantai) 
              yang telah <strong>matang secara alami</strong> dan jatuh dari pohon, bukan dipetik. 
              Metode ini memastikan kandungan nutrisi dan senyawa aktif dalam kondisi optimal.
            </p>
            <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
              <p className="text-primary-800 font-medium">
                "Kualitas produk adalah prioritas utama kami. Setiap daun ketapang dipilih dengan teliti 
                untuk memberikan manfaat maksimal bagi kesehatan ikan cupang."
              </p>
            </div>
          </div>

          <div 
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="relative rounded-2xl overflow-hidden custom-shadow">
              <img 
                src={DaunKatapang}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              {/* <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Daun Ketapang Premium</p>
                <p className="text-sm text-gray-200">100% Alami dari Pohon Pantai</p>
              </div> */}
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl custom-shadow">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-2xl text-gray-800">7+</p>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl custom-shadow text-center hover:transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-800 mb-1">{stat.value}</h4>
              <p className="font-medium text-gray-700 text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;