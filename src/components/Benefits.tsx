import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock, Palette, Truck } from "lucide-react";
import abadaDetail from "@/assets/abada-detail.png";

const benefitsLeft = [
  {
    icon: Palette,
    title: "Esboço Grátis",
    description: "Nossa equipe cria sua arte sem custo adicional. 3 alterações incluídas!",
    color: "from-carnival-pink to-carnival-magenta",
  },
  {
    icon: Truck,
    title: "Frete Brasil",
    description: "Enviamos para todo o país com rastreamento completo.",
    color: "from-carnival-green to-carnival-teal",
  },
];

const benefitsRight = [
  {
    icon: CheckCircle2,
    title: "Qualidade Premium",
    description: "Materiais de primeira linha e acabamento impecável em cada peça.",
    color: "from-primary to-carnival-magenta",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "A partir de 15 dias úteis ou peça sua antecipação!",
    color: "from-carnival-teal to-secondary",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Por que escolher a{" "}
            <span className="text-gradient">Arte Arena?</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto">
            Somos referência em produtos personalizados e já distribuímos mais de 40 mil produtos para todo o Brasil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left side - Esboço Grátis & Frete Brasil */}
          {benefitsLeft.map((benefit, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg md:text-xl">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Right side - Qualidade Premium & Entrega Rápida */}
          {benefitsRight.map((benefit, index) => (
            <motion.div
              key={`right-${index}`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: (index + 2) * 0.15, type: "spring" }}
              className="group"
            >
              <div className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg md:text-xl">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Abadá Detail Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center px-4"
        >
          <img
            src={abadaDetail}
            alt="Detalhes do Abadá - Gola redonda, viés na gola e mangas, opções com e sem mangas, feito em poliéster esportivo dryfit"
            className="w-full max-w-6xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
