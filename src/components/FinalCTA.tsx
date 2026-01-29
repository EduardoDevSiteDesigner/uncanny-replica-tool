import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import abadasCollection from "@/assets/abadas-collection.png";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-carnival-yellow" />
              <span className="text-primary-foreground text-sm font-medium">
                Oferta especial de Carnaval
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Pronto para fazer seu bloco{" "}
              <span className="text-carnival-yellow">brilhar</span>?
            </h2>

            <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
              Peça seu orçamento agora e garanta os melhores abadás do mercado. 
              Qualidade premium, preço justo e entrega garantida!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                className="text-lg font-bold px-8 py-6 animate-pulse-glow group"
                asChild
              >
                <a href="https://wa.me/5511958339942?text=Olá!%20Quero%20fazer%20um%20orçamento%20grátis%20para%20meu%20bloco%20de%20Carnaval." target="_blank" rel="noopener noreferrer">
                  Fazer Orçamento Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-primary-foreground/70 text-sm">
              <span>✓ Orçamento grátis</span>
              <span>✓ Sem compromisso</span>
              <span>✓ Resposta rápida</span>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.img
              src={abadasCollection}
              alt="Coleção de Abadás"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
