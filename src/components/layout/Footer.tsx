import { Link } from "react-router-dom";

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
            <ul className="space-y-2">
              <li>
                <Link to="/cara-membuat-cv" className="text-muted-foreground hover:text-primary transition-colors">
                  Cara Membuat CV
                </Link>
              </li>
              <li>
                <Link to="/harga" className="text-muted-foreground hover:text-primary transition-colors">
                  Harga
                </Link>
              </li>
              <li>
                <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Template CV
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Dukungan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Syarat Layanan
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground">
            © 2024 ResumeKu. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};