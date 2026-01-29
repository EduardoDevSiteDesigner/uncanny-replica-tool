const Partners = () => {
  const partners = [
    "Amazon",
    "Nubank",
    "Globo",
    "Petrobras",
    "Heineken",
    "Adidas",
    "Tommy Hilfiger",
    "McDonald's",
    "São Paulo FC",
    "Corinthians",
    "Palmeiras",
    "Senac",
    "Ambev",
    "Shell",
    "F1",
    "CBF",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Quem já vestiu Arte Arena:
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center opacity-70">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-lg flex items-center justify-center p-2"
            >
              <span className="text-xs font-bold text-muted-foreground text-center">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary-foreground bg-foreground py-8">
            QUEM CONFIA NA ARTE ARENA:
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-video bg-muted rounded-lg overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-carnival-pink/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Foto Cliente</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
