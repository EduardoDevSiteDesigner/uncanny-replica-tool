import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logoArteArena from "@/assets/logo-arte-arena-branco.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/arte_arena/", label: "Instagram" },
    { icon: Facebook, href: "https://www.instagram.com/arte_arena/", label: "Facebook" },
    { icon: Youtube, href: "https://www.instagram.com/arte_arena/", label: "Youtube" },
  ];

  const quickLinks = [
    { label: "Promoções", href: "#promocoes" },
    { label: "Produtos", href: "#produtos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoArteArena}
                alt="Arte Arena"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-background/70 max-w-md">
              Empresa líder em produtos personalizados no Brasil transformando ideias em realidade para blocos, empresas e eventos.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background">(11) 95833-9942</p>
                  <p className="text-background/60 text-sm">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-background/70">contato@artearena.com.br</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-background/70 text-sm">
                  Av. Dr. Luis Arrobas Martins, 335<br />
                  Capela do Socorro, São Paulo - SP<br />
                  CEP: 04781-000
                </p>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-background/10">
              <p className="text-accent font-semibold text-sm mb-2">
                Horário de Atendimento
              </p>
              <p className="text-background/70 text-sm">
                Segunda a quinta: 08h às 18h<br />
                Sexta-feira: 08h às 17h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>
              © {currentYear} Arte Arena. CNPJ: 36.153.457/0001-83. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-background transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511958339942?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20abadás."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-carnival-green rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce-subtle"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-carnival-green animate-ping opacity-30" />
      </a>
    </footer>
  );
};

export default Footer;
