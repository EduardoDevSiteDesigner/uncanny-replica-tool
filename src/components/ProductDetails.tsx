import abadaDetail from "@/assets/abada-detail.png";

const ProductDetails = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 20}
              x2="200"
              y2={i * 20}
              stroke="hsl(var(--carnival-pink))"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Nosso abadá em detalhes:
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side details */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-foreground" />
                <span className="font-bold text-sm uppercase">GOLA REDONDA</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-foreground" />
                <span className="font-bold text-sm uppercase">VIÉS NA GOLA E MANGAS</span>
              </div>
            </div>

            {/* Center image */}
            <div className="flex-shrink-0">
              <img
                src={abadaDetail}
                alt="Abadá em detalhes"
                className="w-64 lg:w-80 drop-shadow-xl"
              />
            </div>

            {/* Right side details */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4 justify-end">
                <span className="font-bold text-sm uppercase text-right">
                  OPÇÕES COM E SEM MANGAS
                </span>
                <div className="w-3 h-3 rounded-full bg-foreground" />
              </div>
              <div className="flex items-center gap-4 justify-end">
                <span className="font-bold text-sm uppercase text-right">
                  FEITO EM POLIÉSTER<br />ESPORTIVO DRYFIT
                </span>
                <div className="w-3 h-3 rounded-full bg-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
