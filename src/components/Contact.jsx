import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    pesan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const message = `*Pesan dari Website Almond Leaf*

*Nama:* ${formData.nama}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}

*Pesan:*
${formData.pesan}

---
Pesan ini dikirim melalui website Almond Leaf`;

    // Create WhatsApp URL
    const phoneNumber = '6282291974003';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      nama: '',
      email: '',
      whatsapp: '',
      pesan: ''
    });
    
    // Show success message and reset loading state
    setShowSuccess(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(false);
    }, 2000);
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      details: "+62 822-9197-4003",
      subtitle: "Siap melayani Anda",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: "almondleaf.com",
      subtitle: "Kirim pertanyaan Anda",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      details: "Puri Manado Permai",
      subtitle: "Manado, Sulawesi Utara",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: "08:00 - 17:00 WIT",
      subtitle: "Senin - Sabtu",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Siap membantu Anda dengan produk daun ketapang berkualitas premium
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 text-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{contact.title}</h3>
              <p className="font-semibold text-primary-600 mb-1">{contact.details}</p>
              <p className="text-sm text-gray-500">{contact.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div 
            className="bg-gray-50 rounded-3xl p-8 lg:p-12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Pesan Langsung
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="+62 812-xxxx-xxxx"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tulis pesan atau pertanyaan Anda..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </button>
                          </form>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl animate-fade-in">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">Pesan berhasil dikirim! WhatsApp akan terbuka dalam beberapa detik.</span>
                  </div>
                </div>
              )}
            </div>

          {/* Contact Info & CTA */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Dapatkan Penawaran Terbaik
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Kami siap memberikan konsultasi gratis tentang penggunaan daun ketapang 
                  untuk ikan cupang Anda. Tim berpengalaman kami akan membantu Anda 
                  memilih produk yang tepat sesuai kebutuhan.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <MessageCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span>Konsultasi gratis via WhatsApp</span>
                  </div>
                  {/* <div className="flex items-center text-gray-700">
                    <Send className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span>Pengiriman ke seluruh Indonesia</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span>Respon cepat dalam 1 jam</span>
                  </div> */}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 mr-3" />
                  <div>
                    <h4 className="font-bold text-lg">Chat WhatsApp</h4>
                    <p className="text-green-100">Respons cepat & ramah</p>
                  </div>
                </div>
                <p className="text-green-100 mb-6">
                  Hubungi kami langsung untuk informasi produk, harga, dan cara pemesanan. 
                  Tim kami siap membantu Anda 24/7.
                </p>
                <a
                  href="https://wa.me/6282291974003?text=Halo! Saya tertarik dengan produk daun ketapang Anda. Bisa minta informasi lebih lanjut?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Sekarang
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Puri Manado Permai</p>
                  <p className="text-sm">Manado, Sulawesi Utara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;