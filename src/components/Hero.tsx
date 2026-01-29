import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-carnival.jpg";
import carnivalBadge from "@/assets/carnaval-2026-badge.png";

const Hero = () => {
  const stats = [
    { icon: Users, value: "10.000+", label: "Clientes satisfeitos" },
    { icon: Star, value: "4.9", label: "Avaliação média" },
    { icon: Clock, value: "7 dias", label: "Prazo de entrega" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-accent/20 blur-xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-carnival-pink/20 blur-xl animate-float-slow" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">
                Promoção Carnaval 2026 - Tempo Limitado!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight"
            >
              Os Melhores{" "}
              <span className="text-accent text-shadow-glow">Abadás</span>
              <br />
              do Brasil!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Qualidade premium, entrega rápida e preços imbatíveis.
              Faça seu bloco brilhar neste Carnaval!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                variant="cta"
                size="lg"
                className="text-lg font-bold px-8 py-6 animate-pulse-glow group"
                asChild
              >
                <a href="https://wa.me/5511958339942" target="_blank" rel="noopener noreferrer">
                  Fazer Orçamento Grátis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg font-semibold px-8 py-6 border-primary-foreground/30 text-accent hover:bg-primary-foreground/10 hover:text-accent"
                asChild
              >
                <a href="#produtos">Ver Produtos</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary-foreground mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70 text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Badge Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <motion.img
                src={carnivalBadge}
                alt="Arte Arena Carnaval 2026"
                className="w-80 lg:w-[450px] drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10 scale-75" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80C360 150 720 30 1080 80C1260 105 1380 90 1440 80V150H0V80Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
