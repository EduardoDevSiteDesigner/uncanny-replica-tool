import { useState } from "react";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Promoção de Carnaval", href: "#promocoes" },
    { label: "Como funciona?", href: "#como-funciona" },
    { label: "Sobre Nós?", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg
                viewBox="0 0 40 40"
                className="w-8 h-8 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M20 5L5 15v20h30V15L20 5zm0 5l10 7v13H10V17l10-7z" />
              </svg>
              <span className="text-primary-foreground font-bold text-xl ml-1">
                arte<br />arena
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Social */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="cta"
              size="sm"
              className="font-semibold"
              asChild
            >
              <a href="#contato">Fale conosco!</a>
            </Button>
            <div className="flex items-center gap-3 text-primary-foreground">
              <a href="https://wa.me/5511934881548" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-primary-foreground/20 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-primary-foreground/20">
                <Button variant="cta" className="w-full" asChild>
                  <a href="#contato">Fale conosco!</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
