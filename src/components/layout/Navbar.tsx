import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-background/95 via-primary/5 to-background/95 backdrop-blur-xl border-b border-primary/20 z-50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] via-transparent to-black/[0.02] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-purple-600 flex items-center justify-center shadow-[0_4px_20px_rgba(139,92,246,0.4)] group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] transition-all duration-300 group-hover:scale-110 border border-white/20">
                  <div className="relative flex items-center justify-center">
                    <span className="text-white font-bold text-xl mr-1 drop-shadow-sm">R</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-foreground via-primary to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                ResumeKu
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link 
                to="/" 
                className="relative px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm tracking-wide group"
              >
                <span className="relative z-10">Beranda</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/cara-membuat-cv" 
                className="relative px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm tracking-wide group"
              >
                <span className="relative z-10">Cara Membuat CV</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
              <Link 
                to="/harga" 
                className="relative px-6 py-3 text-foreground hover:text-primary transition-all duration-300 font-semibold text-sm tracking-wide group"
              >
                <span className="relative z-10">Harga</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="relative px-6 py-3 text-foreground hover:text-primary border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 font-semibold text-sm tracking-wide" 
              asChild
            >
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                Masuk
              </a>
            </Button>
            <Button 
              className="relative px-8 py-3 bg-gradient-to-r from-primary via-primary/90 to-purple-600 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300 border border-white/20 overflow-hidden group" 
              asChild
            >
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Coba Gratis</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-12 h-12 rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              <Link
                to="/"
                className="block px-6 py-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-semibold text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/cara-membuat-cv"
                className="block px-6 py-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-semibold text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Cara Membuat CV
              </Link>
              <Link
                to="/harga"
                className="block px-6 py-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-semibold text-sm tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Harga
              </Link>
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-col space-y-3">
                  <Button 
                    variant="ghost" 
                    className="justify-start px-6 py-4 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-semibold text-sm tracking-wide" 
                    asChild
                  >
                    <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                      Masuk
                    </a>
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-primary via-primary/90 to-purple-600 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300 py-4 border border-white/20" 
                    asChild
                  >
                    <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                      Coba Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};