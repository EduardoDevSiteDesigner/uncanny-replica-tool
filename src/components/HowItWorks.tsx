import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, Palette, CheckCircle, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp, telefone ou e-mail. Traga sua ideia!",
    color: "from-primary to-carnival-magenta",
  },
  {
    icon: FileText,
    title: "Receba o orçamento",
    description: "Definimos produto, medidas e quantidade. Orçamento personalizado.",
    color: "from-carnival-teal to-secondary",
  },
  {
    icon: Palette,
    title: "Aprovação da arte",
    description: "Nossa equipe cria o esboço grátis. 3 alterações sem custo!",
    color: "from-carnival-pink to-carnival-magenta",
  },
  {
    icon: CheckCircle,
    title: "Produção",
    description: "Após pagamento, seu pedido entra na fila de produção.",
    color: "from-accent to-carnival-yellow",
  },
  {
    icon: Truck,
    title: "Entrega",
    description: "Enviamos para todo o Brasil com rastreamento completo.",
    color: "from-carnival-green to-carnival-teal",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="como-funciona" className="py-20 bg-muted relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Como <span className="text-gradient">funciona?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo simples e transparente. Do orçamento à entrega em poucos passos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-center"
              >
                <div className="flex flex-col items-center text-center flex-1">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center px-2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 w-full absolute -bottom-8 left-0">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
