import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

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

const partners = [
  "Amazon", "Globo", "Petrobras", "Heineken", "Adidas", 
  "Tommy Hilfiger", "McDonald's", "Ambev", "Shell", "Nubank"
];

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Milhares de blocos confiam na Arte Arena
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all h-full hover-lift">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-carnival-yellow text-carnival-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-carnival-pink flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-8 uppercase tracking-wider">
            Empresas que confiam na Arte Arena
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="text-lg font-bold text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
