import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6282291974003';
    const message = 'Halo! Saya tertarik dengan produk daun ketapang Anda. Bisa minta informasi lebih lanjut?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat WhatsApp"
        title="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full whatsapp-pulse opacity-20"></div>
        
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 bg-green-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></div>
      </button>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Chat WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </div>

      {/* Floating notification badge */}
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center whatsapp-bounce">
        <span className="text-xs font-bold">1</span>
      </div>
    </div>
  );
};

export default WhatsAppButton; 