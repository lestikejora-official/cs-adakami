import { MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285176999928';
    const message = encodeURIComponent('Hallo, CS ADAKAMI');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
              <img
                src="/csadakami.png"
                alt="Adakami Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Pusat Bantuan
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-600">
                Adakami
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Mengalami kendala dengan akun Anda? Kami siap membantu. Klik tombol di bawah untuk terhubung langsung dengan tim kami.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">Hubungi via WhatsApp</span>
            </button>
          </div>
        </div>

        <footer className="text-center mt-8 text-gray-500 text-sm">
          © 2025 Adakami. Seluruh hak cipta dilindungi undang-undang.
        </footer>
      </div>
    </div>
  );
}

export default App;
