import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-foreground">ResumeKu</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/cara-membuat-cv" className="text-foreground hover:text-primary transition-colors">
                Cara Membuat CV
              </Link>
              <Link to="/harga" className="text-foreground hover:text-primary transition-colors">
                Harga
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                Masuk
              </a>
            </Button>
            <Button asChild className="gradient-primary text-white">
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                Coba Gratis
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/cara-membuat-cv"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cara Membuat CV
              </Link>
              <Link
                to="/harga"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Harga
              </Link>
              <div className="pt-4 pb-3 border-t">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" asChild>
                    <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                      Masuk
                    </a>
                  </Button>
                  <Button asChild className="gradient-primary text-white">
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