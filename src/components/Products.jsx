import { useState, useEffect } from 'react';
import { Leaf, Shield, Star, CheckCircle, X } from 'lucide-react';
import AlmondLeaf1 from '../assets/almond-leaf-1.jpeg';
import DaunKetapang from '../assets/daun-katapang.jpeg';
import DaunKatapang2 from '../assets/daun-katapang-2.jpeg';
import Product1 from '../assets/product-1.jpeg';
import Product2 from '../assets/product-2.jpeg';


const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Add event listener for escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

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
      url: Product1,
      title: "Daun Ketapang Kering Premium",
      description: "Ukuran besar, warna coklat sempurna untuk hasil optimal"
    },
    {
      url: Product2,
      title: "Kemasan Produk Berkualitas",
      description: "Dikemas dengan rapi dan higienis untuk menjaga kualitas"
    },
    {
      url: DaunKetapang,
      title: "Daun Ketapang Segar",
      description: "Dipilih langsung dari pohon ketapang laut yang matang"
    },
    {
      url: AlmondLeaf1,
      title: "Produk Siap Pakai",
      description: "Daun ketapang kering siap digunakan untuk akuarium"
    },
    {
      url: DaunKatapang2,
      title: "Hasil Akhir di Akuarium",
      description: "Air berwarna amber alami yang sehat untuk ikan cupang"
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
              
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Daun ketapang memiliki banyak sifat baik dan menawarkan solusi yang sepenuhnya alami 
                untuk masalah kulit dan sirip pada ikan. Daun ketapang ini juga memiliki efek pencegahan 
                terhadap telur yang berjamur dan mencegah stres pada ikan dan udang.
              </p>
              
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Ukuran Tersedia:</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>S = kurang lebih 12 sampai 17 cm</p>
                  <p>M = kurang lebih 17 sampai 23 cm</p>
                  <p>L = kurang lebih 23 sampai 27 cm</p>
                </div>
              </div>
              
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
              className="relative group overflow-hidden rounded-xl custom-shadow hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
              onClick={() => openModal(image)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* <h4 className="font-semibold mb-1">{image.title}</h4> */}
                {/* <p className="text-sm text-gray-200">{image.description}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              {/* {selectedImage.title && (
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-gray-300">{selectedImage.description}</p>
                  )}
                </div>
              )} */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;