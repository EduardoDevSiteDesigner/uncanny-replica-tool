import { CheckCircle2, Clock, Pencil, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "QUALIDADE SUPERIOR",
    description: "Os melhores Materiais com os melhores especialistas do mercado!",
  },
  {
    icon: Clock,
    title: "O MELHOR PRAZO!",
    description:
      "A Arte Arena trabalha com o melhor prazo de entrega de todo o mercado de personalizados!",
  },
  {
    icon: Pencil,
    title: "ESBOÇO GRÁTIS!",
    description: "Ajudamos você a tornar a sua ideia realidade.",
  },
  {
    icon: CreditCard,
    title: "FLEXIBILIDADE E OPÇÕES",
    description:
      "Além de flexibilidade, a Arte Arena aceita diversas formas de pagamento!",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
