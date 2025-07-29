import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-foreground">ResumeKu</span>
            </div>
            <p className="text-muted-foreground">
              Platform terdepan untuk membuat CV profesional dengan bantuan AI. 
              Telah membantu ribuan pencari kerja mendapatkan pekerjaan impian.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produk</h3>
            <div className="space-y-3">
              <Link href="/cara-membuat-cv" className="block text-muted-foreground hover:text-foreground transition-colors">
                Cara Membuat CV
              </Link>
              <Link href="/harga" className="block text-muted-foreground hover:text-foreground transition-colors">
                Harga & Paket
              </Link>
              <a href="https://app.resumeku.id" className="block text-muted-foreground hover:text-foreground transition-colors">
                Template CV
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Dukungan</h3>
            <div className="space-y-3">
              <Link href="/kontak" className="block text-muted-foreground hover:text-foreground transition-colors">
                Hubungi Kami
              </Link>
              <a href="mailto:shf.niagautama@gmail.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                Email Support
              </a>
              <Link href="/faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
            <div className="space-y-3">
              <Link href="/tentang-kami" className="block text-muted-foreground hover:text-foreground transition-colors">
                Tentang Kami
              </Link>
              <Link href="/karir" className="block text-muted-foreground hover:text-foreground transition-colors">
                Karir
              </Link>
              <Link href="/kebijakan-privasi" className="block text-muted-foreground hover:text-foreground transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted-foreground/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Informasi Perusahaan</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium">PT SHF NIAGA UTAMA</p>
                <p>Jl. Raya Bogor - Sukabumi</p>
                <p>Kel. Cigombong, Kec. Cigombong</p>
                <p>Kabupaten Bogor, Jawa Barat 16110</p>
                <p>Email: shf.niagautama@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Jam Operasional</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Senin - Jumat: 09:00 - 17:00 WIB</p>
                <p>Sabtu: 09:00 - 15:00 WIB</p>
                <p>Minggu: Tutup</p>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 PT SHF NIAGA UTAMA. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};