import { Droplets, Heart, Palette, Shield, TestTube, Fish } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Droplets,
      title: "Menstabilkan pH Air",
      description: "Daun ketapang membantu menurunkan dan menstabilkan tingkat keasaman (pH) air, menciptakan lingkungan yang lebih sesuai bagi ikan cupang. Air yang terlalu basa dapat menyebabkan stres dan menurunkan daya tahan tubuh ikan.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Menyesuaikan Warna Air dengan Habitat Alami",
      description: "Daun ketapang yang dimasukkan ke dalam air akan mengalami pembusukan secara perlahan, melepaskan zat tanin yang mengubah warna air menjadi kecokelatan. Perubahan ini menyerupai kondisi habitat alami ikan cupang di rawa-rawa dan perairan dengan banyak bahan organik.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: TestTube,
      title: "Mengandung Methanol untuk Penyembuhan Luka",
      description: "Senyawa methanol dalam daun ketapang diketahui memiliki efek penyembuhan pada luka luar ikan cupang. Selain itu, daun ketapang juga membantu mencegah infeksi akibat jamur, bakteri, dan alergi.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Mengurangi Stres pada Ikan",
      description: "Kondisi lingkungan yang tidak stabil dapat menyebabkan stres pada ikan cupang. Air yang mengandung ekstrak daun ketapang membantu ikan merasa lebih nyaman, mempercepat adaptasi, dan mengurangi risiko kematian.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Fish,
      title: "Meningkatkan Warna Ikan Cupang",
      description: "Beberapa studi menunjukkan bahwa pemberian daun ketapang dalam media pemeliharaan dapat memperkuat warna alami ikan cupang, membuatnya tampak lebih cerah dan menarik.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Sifat Antiparasit & Antibakteri",
      description: "Daun ketapang mengandung berbagai senyawa aktif seperti alkaloid, saponin, tanin, dan flavonoid. Senyawa ini memiliki sifat sebagai antiparasit, antibakteri, dan antijamur, yang dapat membantu meningkatkan daya tahan ikan cupang terhadap penyakit.",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Kandungan & <span className="gradient-text">Manfaat Daun Ketapang</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Daun ketapang mengandung berbagai senyawa aktif seperti alkaloid, saponin, tanin, dan flavonoid 
            yang memberikan manfaat luar biasa untuk kesehatan ikan cupang
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 custom-shadow hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scientific Evidence */}
        <div 
          className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Terbukti Secara Ilmiah
              </h3>
              <p className="text-green-100 leading-relaxed mb-8">
                Berbagai penelitian telah membuktikan efektivitas daun ketapang dalam meningkatkan 
                kualitas air dan kesehatan ikan. Kandungan senyawa aktif dalam daun ketapang 
                telah diuji secara laboratorium dan terbukti memberikan manfaat nyata bagi 
                ekosistem akuarium.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-green-100">Mengurangi tingkat mortalitas ikan hingga 40%</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-green-100">Mempercepat penyembuhan luka hingga 60%</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-green-100">Meningkatkan intensitas warna ikan secara signifikan</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-center">
                  <TestTube className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Kandungan Aktif</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-semibold">Alkaloid</p>
                      <p className="text-green-100">Antiparasit</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-semibold">Saponin</p>
                      <p className="text-green-100">Antibakteri</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-semibold">Tanin</p>
                      <p className="text-green-100">pH Buffer</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <p className="font-semibold">Flavonoid</p>
                      <p className="text-green-100">Antijamur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;