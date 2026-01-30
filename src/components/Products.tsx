import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import abadaRegata from "@/assets/abada-regata.png";
import abadaSemVies from "@/assets/abada-sem-vies.png";
import abadaManga from "@/assets/abada-manga.png";

const products = [
  {
    id: 1,
    name: "Abadá Regata com Viés",
    image: abadaRegata,
    description: "Modelo clássico com acabamento premium",
    features: ["Gola redonda", "Viés na gola e cavas", "100% personalizável"],
    popular: true,
  },
  {
    id: 2,
    name: "Abadá Regata sem Viés",
    image: abadaSemVies,
    description: "Visual limpo e moderno",
    features: ["Bordas limpas", "Corte diferenciado", "Sublimação total"],
    popular: false,
  },
  {
    id: 3,
    name: "Abadá com Manga",
    image: abadaManga,
    description: "Mais proteção e estilo",
    features: ["Manga curta", "Conforto extra", "Estilo único"],
    popular: false,
  },
];

const specs = [
  { 
    label: "Material", 
    value: "Helanca - 100% sintética",
    details: ["Alta elasticidade", "Durabilidade", "Conforto", "Extremamente versátil"]
  },
  { label: "Gênero", value: "Unissex" },
  { label: "Personalização", value: "Sublimação frente e verso" },
  { label: "Cores", value: "Ilimitadas" },
];

const sizes = [
  { size: "PP", width: "44cm", height: "60cm" },
  { size: "P", width: "50cm", height: "66cm" },
  { size: "M", width: "52cm", height: "68cm" },
  { size: "G", width: "54cm", height: "70cm" },
  { size: "GG", width: "56cm", height: "72cm" },
  { size: "XG", width: "58cm", height: "74cm" },
  { size: "XXG", width: "61cm", height: "78cm" },
  { size: "XXXG", width: "64cm", height: "82cm" },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section id="produtos" className="py-20 bg-gradient-primary relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Nossos Abadás
          </h2>
          <p className="text-primary-foreground/80 text-xl max-w-3xl mx-auto">
            Escolha o modelo perfeito para seu bloco. Todos com qualidade premium e personalização total.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Product Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className={`relative cursor-pointer rounded-3xl p-6 transition-all duration-300 ${
                  selectedProduct.id === product.id
                    ? "bg-white/20 border-2 border-white/50 scale-[1.02]"
                    : "bg-white/5 border-2 border-transparent hover:bg-white/10"
                }`}
              >
                {product.popular && (
                  <span className="absolute -top-3 right-6 bg-accent text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                    + Vendido
                  </span>
                )}
                <div className="flex items-center gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl bg-white/10 p-3"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                      {product.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-base md:text-lg mt-1">
                      {product.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-8 h-8 text-primary-foreground/50 transition-transform ${
                      selectedProduct.id === product.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {selectedProduct.id === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-white/20"
                  >
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground text-sm px-4 py-2 rounded-full"
                        >
                          <Check className="w-4 h-4" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Specs and Sizes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {/* Specs */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-lg font-bold text-primary-foreground mb-4">
                Especificações
              </h4>
              <div className="space-y-3">
                {specs.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="text-primary-foreground/70">{spec.label}</span>
                      <span className="text-primary-foreground font-medium">{spec.value}</span>
                    </div>
                    {spec.details && (
                      <ul className="mt-2 ml-4 space-y-1">
                        {spec.details.map((detail, idx) => (
                          <li key={idx} className="text-primary-foreground/60 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Size Table */}
            <div className="glass rounded-2xl p-6 overflow-hidden">
              <h4 className="text-lg font-bold text-primary-foreground mb-4">
                Tabela de Tamanhos
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="py-2 text-left text-primary-foreground/70">Tam</th>
                      <th className="py-2 text-center text-primary-foreground/70">Larg</th>
                      <th className="py-2 text-center text-primary-foreground/70">Alt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, index) => (
                      <tr key={index} className="border-b border-white/10 last:border-0">
                        <td className="py-2 font-bold text-primary-foreground">{row.size}</td>
                        <td className="py-2 text-center text-primary-foreground/80">{row.width}</td>
                        <td className="py-2 text-center text-primary-foreground/80">{row.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              variant="cta"
              size="lg"
              className="text-lg font-bold py-6 px-12 w-full max-w-md animate-pulse-glow"
              asChild
            >
              <a href="https://wa.me/5511958339942?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20abadás%20personalizados." target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
