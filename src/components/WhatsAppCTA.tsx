import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import whatsappHand from "@/assets/whatsapp-hand.png";

const WhatsAppCTA = () => {
  const features = [
    "ATENDIMENTO PERSONALIZADO",
    "ORÇAMENTOS",
    "NOVIDADES E PROMOÇÕES",
    "ESBOÇOS E CRIAÇÃO",
    "DÚVIDAS",
  ];

  return (
    <section id="contato" className="py-20 bg-carnival-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMjBoNDBNMjAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground uppercase">
              Fale com a Arte Arena pelo
            </h2>
            <p className="text-5xl md:text-6xl font-black text-primary-foreground">
              WHATSAPP
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary" fill="currentColor">
                  <path d="M20 5L5 15v20h30V15L20 5zm0 5l10 7v13H10V17l10-7z" />
                </svg>
              </div>
              <span className="text-primary-foreground font-bold text-xl">
                arte arena
              </span>
            </div>
          </div>

          {/* Right - Features & CTA */}
          <div className="space-y-6">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center">
                    <Check className="w-4 h-4 text-carnival-green" />
                  </div>
                  <span className="text-primary-foreground font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-3xl font-bold text-primary-foreground mb-4">
                (11) 93488-1548
              </p>
              <Button
                variant="cta"
                size="lg"
                className="text-lg"
                asChild
              >
                <a
                  href="https://wa.me/5511934881548"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLIQUE AQUI!
                </a>
              </Button>
            </div>

            {/* WhatsApp Hand Image */}
            <div className="absolute right-0 bottom-0 hidden lg:block">
              <img
                src={whatsappHand}
                alt="WhatsApp"
                className="w-48 opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
