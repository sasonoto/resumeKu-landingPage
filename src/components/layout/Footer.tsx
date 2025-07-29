import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 to-purple-200/60 border-t border-purple-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-gray-800">ResumeKu</span>
            </div>
            <p className="text-gray-700">
              Platform terdepan untuk membuat CV profesional dengan bantuan AI. 
              Telah membantu ribuan pencari kerja mendapatkan pekerjaan impian.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Produk</h3>
            <div className="space-y-3">
              <Link href="/cara-membuat-cv" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Cara Membuat CV
              </Link>
              <Link href="/harga" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Harga & Paket
              </Link>
              <a href="https://app.resumeku.id" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Template CV
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Dukungan</h3>
            <div className="space-y-3">
              <Link href="/kontak" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Hubungi Kami
              </Link>
              <a href="mailto:shf.niagautama@gmail.com" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Email Support
              </a>
              <Link href="/faq" className="block text-gray-600 hover:text-purple-700 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Perusahaan</h3>
            <div className="space-y-3">
              <Link href="/tentang" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Tentang Kami
              </Link>
              <Link href="/karir" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Karir
              </Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-purple-700 transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-300/40 mt-6 pt-6">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Informasi Perusahaan</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p className="font-medium">PT SHF NIAGA UTAMA</p>
              <p>Jl. Raya Bogor - Sukabumi, Kel. Cigombong, Kec. Cigombong</p>
              <p>Kabupaten Bogor, Jawa Barat 16110</p>
              <p>Email: shf.niagautama@gmail.com</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs">
            <p>&copy; 2025 PT SHF NIAGA UTAMA. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};