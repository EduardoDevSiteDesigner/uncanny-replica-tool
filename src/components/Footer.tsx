import { Instagram, Facebook, Youtube, Twitter, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Social Bar */}
      <div className="bg-foreground/90 py-4">
        <div className="container mx-auto px-4 flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-background/10 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <path d="M20 5L5 15v20h30V15L20 5zm0 5l10 7v13H10V17l10-7z" />
                </svg>
                <span className="font-bold text-2xl ml-2">
                  arte<br />arena
                </span>
              </div>
            </div>
            <p className="text-background/80">
              Sua paixão, nossa bandeira!
            </p>
          </div>

          {/* Description */}
          <div className="text-center">
            <p className="text-background/80 text-sm">
              Arte Arena empresa líder no seguimento de produtos personalizados.
            </p>
          </div>

          {/* Hours */}
          <div className="text-right">
            <h4 className="font-bold text-accent mb-2">HORÁRIOS DE ATENDIMENTO</h4>
            <p className="text-background/80 text-sm">
              Segunda a quinta-feira 08h às 18h,
            </p>
            <p className="text-background/80 text-sm">
              Sexta-feira 08h às 17h
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            Av. Dr. Luis Arrobas Martins, 335 - Capela do Socorro, São Paulo - SP, 04781-000 - CNPJ: 36.153.457/0001-83
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511934881548"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-carnival-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="WhatsApp"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
      </a>
    </footer>
  );
};

export default Footer;
