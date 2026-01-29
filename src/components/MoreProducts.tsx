import abadaRegata from "@/assets/abada-regata.png";
import abadaSemVies from "@/assets/abada-sem-vies.png";
import abadaManga from "@/assets/abada-manga.png";

const MoreProducts = () => {
  const products = [
    { name: "ABADÁ COM VIÉS", image: abadaRegata },
    { name: "ABADÁ SEM VIÉS", image: abadaSemVies },
    { name: "ABADÁ COM MANGA", image: abadaManga },
    { name: "BANDEIRAS PERSONALIZADAS", image: abadaRegata },
    { name: "ESTANDARTES PERSONALIZADAS", image: abadaSemVies },
    { name: "CHINELOS PERSONALIZADOS", image: abadaManga },
    { name: "CANECAS E TIRANTES PERSONALIZADAS", image: abadaRegata },
    { name: "BANDANAS E FAIXAS DE MÃO PERSONALIZADAS", image: abadaSemVies },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 uppercase">
          Conheça mais de nossos produtos:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square bg-muted rounded-xl overflow-hidden mb-3 transition-transform group-hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-bold text-center uppercase text-muted-foreground">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProducts;
