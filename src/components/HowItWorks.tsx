import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Palette, CheckCircle, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Entre em contato com a gente!",
      description:
        "Você pode entrar em contato diretamente por telefone, whatsapp ou até e-mail se preferir. O importante é trazer a sua ideia e como gostaria que ela fosse desenvolvida!",
    },
    {
      icon: FileText,
      title: "Orçamento",
      description:
        "Antes de começar o esboço, é importante definir o produto, as medidas e a quantidade que será produzida. Desta forma, iremos elaborar um orçamento especialmente para o seu pedido.",
    },
    {
      icon: Palette,
      title: "Esboço da Arte",
      description:
        "Nossa equipe de design irá trabalhar para transformar sua ideia em realidade! Não será cobrado nenhum valor adicional pelo esboço, e você também tem direito a 3 alterações na arte gratuitas! Demais serão cobradas.",
    },
    {
      icon: CheckCircle,
      title: "Aprovação e produção",
      description:
        "Após o esboço ser aprovado, bem como o orçamento. A última etapa para pedido entrar em produção é pagamento. Após o pagamento, pedido será enviado para a fila de produção.",
    },
    {
      icon: Truck,
      title: "FRETE E ENVIO",
      description:
        "Por fim, após produzido, pedido será enviado de acordo com a opção selecionada durante o orçamento.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0 300Q360 150 720 300T1440 300V600H0Z"
            fill="currentColor"
            className="text-secondary-foreground"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-4 uppercase">
          Como funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* First Row - 3 items */}
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground mb-2 italic">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/80 text-sm">
                  {step.description}
                </p>
              </div>
              {/* Arrow */}
              {index < 2 && (
                <div className="hidden md:block absolute top-10 -right-4 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
          {/* Second Row - 2 items */}
          {steps.slice(3, 5).map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground mb-2 italic">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground/80 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="#orcamento">FAÇA SEU ORÇAMENTO</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
