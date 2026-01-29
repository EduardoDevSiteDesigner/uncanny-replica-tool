import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock, Palette, Truck } from "lucide-react";

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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-gradient">Arte Arena?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Somos referência em produtos personalizados e já distribuímos mais de 40 mil produtos para todo o Brasil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Left side - Esboço Grátis & Frete Brasil */}
          {benefitsLeft.map((benefit, index) => (
            <motion.div
              key={`left-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover-lift h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
