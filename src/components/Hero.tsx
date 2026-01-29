import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-carnival.jpg";
import carnivalBadge from "@/assets/carnival-badge.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left - Badge */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <img
                src={carnivalBadge}
                alt="Arte Arena Carnaval 2026"
                className="w-72 lg:w-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight text-shadow-lg">
              Prepare-se pro Carnaval com os melhores Abadás do Mercado!
            </h1>

            <div className="space-y-3 mb-8">
              <p className="text-primary-foreground/90 text-lg">
                Qualidade com o melhor prazo do mercado!
              </p>
              <p className="text-primary-foreground/90 text-lg">
                Na quantidade que sua paixão precisa!
              </p>
              <p className="text-primary-foreground/90 text-lg">
                Descontos e preços especiais para pedidos antecipados!
              </p>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#orcamento">Faça seu orçamento!</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            className="fill-primary"
          />
          <path
            d="M0 80C240 20 480 100 720 50C960 0 1200 100 1440 40V120H0V80Z"
            className="fill-carnival-teal"
          />
          <path
            d="M0 100C240 60 480 100 720 80C960 60 1200 100 1440 80V120H0V100Z"
            className="fill-carnival-pink"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
