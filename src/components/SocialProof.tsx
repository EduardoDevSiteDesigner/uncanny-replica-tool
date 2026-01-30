import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

import partnerPetrobras from "@/assets/partner-petrobras.png";
import partnerAdidas from "@/assets/partner-adidas.png";
import partnerPuma from "@/assets/partner-puma.png";
import partnerAmbev from "@/assets/partner-ambev.png";
import partnerSpfc from "@/assets/partner-spfc.png";
import partnerCorinthians from "@/assets/partner-corinthians.png";
import partnerPalmeiras from "@/assets/partner-palmeiras.png";
import partnerNubank from "@/assets/partner-nubank.png";
import partnerHeineken from "@/assets/partner-heineken.png";
import partnerF1 from "@/assets/partner-f1.png";
import partnerEudora from "@/assets/partner-eudora.png";
import partnerSantos from "@/assets/partner-santos.png";
import partnerMcdonalds from "@/assets/partner-mcdonalds.png";
import partnerTommy from "@/assets/partner-tommy.png";
import partnerAmazon from "@/assets/partner-amazon.png";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Organizador do Bloco Só Alegria",
    content: "Melhor qualidade que já vi! Os abadás ficaram incríveis e chegaram super rápido. Já fechamos para o próximo ano!",
    rating: 5,
    image: "CS",
  },
  {
    name: "Ana Paula",
    role: "Bloco das Amigas - SP",
    content: "Atendimento impecável do início ao fim. A arte ficou exatamente como imaginamos. Super recomendo!",
    rating: 5,
    image: "AP",
  },
  {
    name: "Ricardo Santos",
    role: "Bloco União - RJ",
    content: "Preço justo, qualidade top e prazo cumprido. Fechamos 500 peças e ainda ganhamos brindes. Nota 10!",
    rating: 5,
    image: "RS",
  },
];

// 15 partners organized in 3 rows of 5
const partnersRow1 = [
  { image: partnerPetrobras, alt: "Petrobras" },
  { image: partnerAdidas, alt: "Adidas" },
  { image: partnerPuma, alt: "Puma" },
  { image: partnerAmbev, alt: "Ambev" },
  { image: partnerSpfc, alt: "São Paulo FC" },
];

const partnersRow2 = [
  { image: partnerCorinthians, alt: "Corinthians" },
  { image: partnerPalmeiras, alt: "Palmeiras" },
  { image: partnerNubank, alt: "Nubank" },
  { image: partnerHeineken, alt: "Heineken" },
  { image: partnerF1, alt: "F1" },
];

const partnersRow3 = [
  { image: partnerEudora, alt: "Eudora" },
  { image: partnerSantos, alt: "Santos FC" },
  { image: partnerMcdonalds, alt: "McDonald's" },
  { image: partnerTommy, alt: "Tommy Hilfiger" },
  { image: partnerAmazon, alt: "Amazon" },
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderPartnerRow = (partners: typeof partnersRow1, rowIndex: number) => (
    <div className="flex justify-center items-center gap-6 md:gap-10">
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: 0.4 + (rowIndex * 0.15) + (index * 0.08),
            type: "spring"
          }}
          className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white overflow-hidden shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center p-2 md:p-5"
        >
          <img
            src={partner.image}
            alt={partner.alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl">
            Milhares de blocos confiam na Arte Arena
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              className="group"
            >
              <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all h-full hover-lift">
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-carnival-yellow text-carnival-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-lg mb-8">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-carnival-pink flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-base">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-base mb-12 uppercase tracking-wider font-medium">
            Empresas que confiam na Arte Arena
          </p>
          <div className="flex flex-col gap-8">
            {renderPartnerRow(partnersRow1, 0)}
            {renderPartnerRow(partnersRow2, 1)}
            {renderPartnerRow(partnersRow3, 2)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
