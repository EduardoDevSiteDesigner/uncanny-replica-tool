import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Tem pedido mínimo?",
      answer:
        "Sim, trabalhamos com pedido mínimo de 20 unidades para garantir a melhor qualidade e preço para nossos clientes.",
    },
    {
      question: "Como funciona o prazo de fabricação?",
      answer:
        "O prazo de fabricação varia de acordo com a quantidade e complexidade do pedido. Em média, trabalhamos com prazo de 7 a 15 dias úteis após aprovação do esboço e pagamento.",
    },
    {
      question: "Como funciona o prazo de envio?",
      answer:
        "Após a produção, o envio é feito de acordo com a opção selecionada durante o orçamento. Trabalhamos com transportadoras parceiras e Correios.",
    },
    {
      question: "Formas de pagamento",
      answer:
        "Aceitamos diversas formas de pagamento: PIX, cartão de crédito (em até 12x), boleto bancário e transferência bancária.",
    },
    {
      question: "Vocês enviam para todo o Brasil?",
      answer:
        "Sim! Enviamos para todo o Brasil através de transportadoras parceiras e Correios.",
    },
    {
      question: "Não tenho a arte, como devo fazer?",
      answer:
        "Não se preocupe! Nossa equipe de design pode criar a arte para você. Basta nos passar as ideias e referências que você deseja.",
    },
    {
      question: "Qual o tecido do abadá?",
      answer:
        "Nossos abadás são feitos em Poliéster Esportivo Dryfit, material leve, confortável e que seca rapidamente.",
    },
    {
      question: "Posso lavar o abadá?",
      answer:
        "Sim! Nossos produtos são feitos com sublimação de alta qualidade, podendo ser lavados normalmente sem perder a cor ou qualidade da estampa.",
    },
    {
      question: "Fazem para qualquer público?",
      answer:
        "Sim! Trabalhamos com tamanhos que vão do PP ao XXXG, atendendo todos os públicos.",
    },
  ];

  return (
    <section id="duvidas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary-foreground mb-12">
          Dúvidas comuns:
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
