import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, Palette, CheckCircle, Truck } from "lucide-react";

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
          {/* Connection line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary via-carnival-pink to-accent rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-xs font-bold text-muted-foreground px-2 py-1 rounded-full border border-border z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg relative z-20`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-muted-foreground/50 rotate-90 lg:rotate-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
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
