import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Tem pedido mínimo?",
    answer: "Sim, trabalhamos com pedido mínimo de 20 unidades para garantir a melhor qualidade e preço para nossos clientes.",
  },
  {
    question: "Como funciona o prazo de fabricação?",
    answer: "O prazo de fabricação varia de 7 a 15 dias úteis após aprovação do esboço e pagamento. Para pedidos urgentes, consulte-nos sobre opções de prioridade.",
  },
  {
    question: "Como funciona o prazo de envio?",
    answer: "Após a produção, o envio é feito de acordo com a opção selecionada. Trabalhamos com transportadoras parceiras e Correios, com rastreamento completo.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos PIX (5% de desconto), cartão de crédito em até 12x, boleto bancário e transferência bancária. Parcelamento sujeito a análise.",
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer: "Sim! Enviamos para todos os estados brasileiros através de transportadoras parceiras e Correios, com frete calculado no orçamento.",
  },
  {
    question: "Não tenho a arte, como devo fazer?",
    answer: "Não se preocupe! Nossa equipe de design cria a arte para você gratuitamente. Basta nos passar as ideias, referências e cores desejadas.",
  },
  {
    question: "Qual o tecido do abadá?",
    answer: "Nossos abadás são feitos em Poliéster Esportivo Dryfit, material leve, confortável, que seca rapidamente e não desbota.",
  },
  {
    question: "Posso lavar o abadá na máquina?",
    answer: "Sim! A sublimação é de alta qualidade e durabilidade. Pode lavar normalmente sem perder cor ou qualidade da estampa.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="duvidas" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-bold">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
