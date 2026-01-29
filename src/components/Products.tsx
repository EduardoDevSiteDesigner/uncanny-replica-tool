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
  { label: "Personalização", value: "Sublimação 100% frente e verso" },
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Nossos Abadás
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Escolha o modelo perfeito para seu bloco. Todos com qualidade premium e personalização total.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Product Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-8"
          >
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`relative cursor-pointer rounded-2xl p-4 transition-all duration-300 ${
                  selectedProduct.id === product.id
                    ? "bg-white/20 border-2 border-white/50"
                    : "bg-white/5 border-2 border-transparent hover:bg-white/10"
                }`}
              >
                {product.popular && (
                  <span className="absolute -top-2 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    + Vendido
                  </span>
                )}
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary-foreground">
                      {product.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      {product.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-primary-foreground/50 transition-transform ${
                      selectedProduct.id === product.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {selectedProduct.id === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-white/10 text-primary-foreground text-xs px-3 py-1 rounded-full"
                        >
                          <Check className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
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
