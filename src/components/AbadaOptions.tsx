import { Button } from "@/components/ui/button";
import abadasCollection from "@/assets/abadas-collection.png";

const AbadaOptions = () => {
  return (
    <section id="sobre" className="relative py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg viewBox="0 0 400 800" className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M0 0C100 100 200 50 300 100C400 150 350 300 400 400C350 500 400 600 300 700C200 800 100 750 0 800"
              className="fill-carnival-pink/20"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Opções de Abadás:{" "}
              <span className="text-accent">
                Regata, regata sem viés, com manga e muito mais!
              </span>
            </h2>

            <p className="text-muted-foreground text-lg">
              Aproveite toda a liberdade criativa de uma infinidade de opções e
              cores para criar algo único e memorável para seu bloquinho!
            </p>

            <Button variant="cta" size="lg" asChild>
              <a href="#orcamento">Quero fazer o meu!</a>
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <img
              src={abadasCollection}
              alt="Coleção de Abadás"
              className="w-full max-w-lg mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbadaOptions;
