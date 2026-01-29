import { Button } from "@/components/ui/button";
import abadasCollection from "@/assets/abadas-collection.png";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-carnival-magenta relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Uma infinidade de produtos personalizados, sem limites de cores e ideias!
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Desde copos, faixas, até uniformes profissionais, cangas e muito mais!
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="#orcamento">Confira aqui nosso catálogo completo!</a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={abadasCollection}
              alt="Produtos Arte Arena"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
