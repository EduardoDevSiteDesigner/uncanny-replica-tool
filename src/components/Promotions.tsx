import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import promo10Bandanas from "@/assets/promo-10-bandanas.png";
import promo40Bandanas from "@/assets/promo-40-bandanas.png";
import promo70Bandanas from "@/assets/promo-70-bandanas.png";
import promo50Abadas from "@/assets/promo-50-abadas.png";

const promos = [
  {
    quantity: 100,
    reward: "10 BANDANAS",
    highlight: false,
    image: promo10Bandanas,
    whatsappMsg: "Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20promoção%20de%2010%20bandanas%20grátis%20comprando%20100%20abadás.",
  },
  {
    quantity: 300,
    reward: "40 BANDANAS",
    highlight: false,
    image: promo40Bandanas,
    whatsappMsg: "Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20promoção%20de%2040%20bandanas%20grátis%20comprando%20300%20abadás.",
  },
  {
    quantity: 500,
    reward: "70 BANDANAS",
    highlight: true,
    image: promo70Bandanas,
    whatsappMsg: "Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20promoção%20de%2070%20bandanas%20grátis%20comprando%20500%20abadás.",
  },
  {
    quantity: 1000,
    reward: "+50 ABADÁS",
    highlight: true,
    special: true,
    image: promo50Abadas,
    whatsappMsg: "Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20promoção%20de%2050%20abadás%20grátis%20comprando%201000%20abadás.",
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
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg md:text-xl font-bold uppercase">Promoção Exclusiva Carnaval 2026</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase">
            Compre mais,{" "}
            <span className="text-gradient">ganhe mais!</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto">
            Quanto maior seu pedido, maior o brinde. Aproveite estas ofertas por tempo limitado!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promos.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              className="group"
            >
              <div
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover-lift h-full ${
                  promo.special
                    ? "bg-gradient-to-br from-accent to-carnival-yellow"
                    : promo.highlight
                    ? "bg-gradient-to-br from-primary to-carnival-magenta"
                    : "bg-card border border-border"
                }`}
              >
                {/* Badge */}
                {promo.special && (
                  <div className="absolute top-0 left-0 right-0 bg-foreground/20 py-2 text-center">
                    <span className="text-sm font-bold text-accent-foreground uppercase">
                      MELHOR OFERTA
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative pt-10 px-8">
                  <img
                    src={promo.image}
                    alt="Promoção"
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 text-center ${promo.special || promo.highlight ? "text-primary-foreground" : ""}`}>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className={`text-2xl md:text-3xl font-bold uppercase ${promo.special || promo.highlight ? "text-primary-foreground" : "text-accent"}`}>
                      GANHE {promo.reward}
                    </span>
                  </div>
                  <p className={`text-lg md:text-xl uppercase ${promo.special || promo.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    Comprando {promo.quantity}+ abadás
                  </p>

                  <Button
                    variant={promo.special || promo.highlight ? "secondary" : "cta"}
                    size="lg"
                    className="w-full mt-6 font-bold uppercase text-lg py-6"
                    asChild
                  >
                    <a href={`https://wa.me/5511958339942?text=${promo.whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                      APROVEITAR
                    </a>
                  </Button>
                </div>

                {/* Limited time badge */}
                <div className={`absolute top-4 right-4 ${promo.special ? "hidden" : ""}`}>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase ${
                    promo.highlight ? "bg-white/20 text-primary-foreground" : "bg-accent/10 text-accent"
                  }`}>
                    LIMITADO
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
