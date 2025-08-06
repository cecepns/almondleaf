import { Leaf, Shield, Star, CheckCircle } from 'lucide-react';
import AlmondLeaf1 from '../assets/almond-leaf-1.jpeg';
import DaunKetapang from '../assets/daun-katapang.jpeg';
import DaunKatapang2 from '../assets/daun-katapang-2.jpeg';

const Products = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Alami",
      description: "Daun ketapang dari pohon pinggir pantai yang matang secara alami"
    },
    {
      icon: Shield,
      title: "Bebas Pestisida",
      description: "Tidak menggunakan bahan kimia berbahaya, aman untuk ikan"
    },
    {
      icon: Star,
      title: "Kualitas Premium",
      description: "Dipilih dengan teliti untuk memberikan manfaat maksimal"
    },
    {
      icon: CheckCircle,
      title: "Teruji Kualitas",
      description: "Telah digunakan oleh ribuan pecinta ikan cupang"
    }
  ];

  const productImages = [
    {
      url: DaunKetapang,
      // title: "Daun Ketapang Kering Premium",
      // description: "Ukuran besar, warna coklat sempurna"
    },
    {
      url: AlmondLeaf1,
      // title: "Kemasan Siap Pakai",
      // description: "Dikemas dengan rapi dan higienis"
    },
    {
      url: DaunKatapang2,
      // title: "Hasil Akhir di Akuarium",
      // description: "Air berwarna amber alami"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Produk <span className="gradient-text">Unggulan Kami</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Daun ketapang kering berkualitas premium untuk kesehatan optimal ikan cupang Anda
          </p>
        </div>

        {/* Main Product */}
        <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/30 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-200/30 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="inline-flex items-center bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Produk Unggulan
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                Coastal Almond Leaf Premium
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Daun ketapang kering premium yang diambil langsung dari pohon ketapang laut 
                di pesisir pantai Sulawesi Utara. Setiap daun dipilih dengan teliti untuk 
                memastikan kualitas dan kandungan nutrisi yang optimal bagi ikan cupang Anda.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span>Daun matang alami yang jatuh dari pohon</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span>Kaya tanin, alkaloid, dan senyawa aktif lainnya</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span>Membantu menstabilkan pH dan warna air</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span>Meningkatkan daya tahan dan warna ikan</span>
                </div>
              </div>

              <button className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Pesan Sekarang
              </button>
            </div>

            <div 
              className="relative"
              data-aos="fade-left" 
              data-aos-duration="1000"
            >
              <div className="relative rounded-2xl overflow-hidden custom-shadow">
                <img 
                  src={AlmondLeaf1}
                  alt="Daun Ketapang Premium"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              {/* Price Tag */}
              {/* <div className="absolute -top-4 -right-4 bg-secondary-500 text-white p-6 rounded-2xl custom-shadow">
                <div className="text-center">
                  <p className="text-sm font-medium">Mulai dari</p>
                  <p className="text-2xl font-bold">Rp 15K</p>
                  <p className="text-xs opacity-90">per pack</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl custom-shadow hover:shadow-2xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-semibold mb-1">{image.title}</h4>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;