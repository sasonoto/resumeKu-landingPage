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
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
                Template CV
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Dukungan</h3>
            <div className="space-y-3">
              <a href="mailto:support@resumeku.id" className="block text-muted-foreground hover:text-foreground transition-colors">
                Kontak Support
              </a>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
                WhatsApp
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
        
        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 ResumeKu. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};