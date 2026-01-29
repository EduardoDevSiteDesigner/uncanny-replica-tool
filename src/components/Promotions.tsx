import { Button } from "@/components/ui/button";
import promoBandana from "@/assets/promo-bandana.png";

const Promotions = () => {
  const promos = [
    {
      quantity: 100,
      reward: "10 bandanas de 0,50m x 0,50m",
    },
    {
      quantity: 300,
      reward: "40 bandanas de 0,50m x 0,50m",
    },
    {
      quantity: 500,
      reward: "70 bandanas de 0,50m x 0,50m",
    },
    {
      quantity: 1000,
      reward: "+50 Abadás do mesmo de brinde!",
      highlight: true,
    },
  ];

  return (
    <section id="promocoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
          Promoções
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg ${
                promo.highlight ? "ring-2 ring-accent" : ""
              }`}
            >
              {/* Promo Image */}
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-carnival-yellow/20 p-4 flex items-center justify-center">
                <img
                  src={promoBandana}
                  alt="Promoção"
                  className="w-full h-full object-contain"
                />
                {/* Promo Badge */}
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {promo.highlight ? `+${promo.quantity - 950} abadás` : `+${promo.quantity >= 100 ? (promo.quantity / 10) : promo.quantity} bandanas`}
                </div>
                {/* Limited Time Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-accent/90 text-accent-foreground text-xs font-bold py-1 px-2 rounded italic">
                    promoção por tempo limitado
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-background border-t">
                <p className="text-sm text-center mb-4">
                  Compre de <span className="font-bold">{promo.quantity} Abadás</span> de
                  qualquer modelo e ganhe {promo.reward}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#orcamento">Fazer Orçamento</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
