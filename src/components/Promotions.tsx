import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import promoBandana from "@/assets/promo-bandana.png";

const promos = [
  {
    quantity: 100,
    reward: "10 bandanas",
    highlight: false,
  },
  {
    quantity: 300,
    reward: "40 bandanas",
    highlight: false,
  },
  {
    quantity: 500,
    reward: "70 bandanas",
    highlight: true,
  },
  {
    quantity: 1000,
    reward: "+50 abadás",
    highlight: true,
    special: true,
  },
];

const Promotions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="promocoes" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold">Promoção Exclusiva Carnaval 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Compre mais,{" "}
            <span className="text-gradient">ganhe mais!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quanto maior seu pedido, maior o brinde. Aproveite estas ofertas por tempo limitado!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover-lift ${
                  promo.special
                    ? "bg-gradient-to-br from-accent to-carnival-yellow"
                    : promo.highlight
                    ? "bg-gradient-to-br from-primary to-carnival-magenta"
                    : "bg-card border border-border"
                }`}
              >
                {/* Badge */}
                {promo.special && (
                  <div className="absolute top-0 left-0 right-0 bg-foreground/20 py-1 text-center">
                    <span className="text-xs font-bold text-accent-foreground uppercase">
                      Melhor Oferta
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative pt-8 px-6">
                  <img
                    src={promoBandana}
                    alt="Promoção"
                    className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`p-6 text-center ${promo.special || promo.highlight ? "text-primary-foreground" : ""}`}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Gift className={`w-5 h-5 ${promo.special || promo.highlight ? "text-primary-foreground" : "text-accent"}`} />
                    <span className={`font-bold ${promo.special || promo.highlight ? "text-primary-foreground" : "text-accent"}`}>
                      GANHE {promo.reward}
                    </span>
                  </div>
                  <p className={`text-sm ${promo.special || promo.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    Comprando {promo.quantity}+ abadás
                  </p>

                  <Button
                    variant={promo.special || promo.highlight ? "secondary" : "cta"}
                    size="sm"
                    className="w-full mt-4 font-bold"
                    asChild
                  >
                    <a href="https://wa.me/5511958339942" target="_blank" rel="noopener noreferrer">
                      Aproveitar
                    </a>
                  </Button>
                </div>

                {/* Limited time badge */}
                <div className={`absolute top-4 right-4 ${promo.special ? "hidden" : ""}`}>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    promo.highlight ? "bg-white/20 text-primary-foreground" : "bg-accent/10 text-accent"
                  }`}>
                    Limitado
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
