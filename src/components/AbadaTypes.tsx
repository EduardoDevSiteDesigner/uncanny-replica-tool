import abadaRegata from "@/assets/abada-regata.png";
import abadaSemVies from "@/assets/abada-sem-vies.png";
import abadaManga from "@/assets/abada-manga.png";

const AbadaTypes = () => {
  const types = [
    {
      image: abadaRegata,
      label: "ABADÁ COM VIÉS",
    },
    {
      image: abadaSemVies,
      label: "ABADÁ SEM VIÉS",
    },
    {
      image: abadaManga,
      label: "ABADÁ COM MANGA",
    },
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

  const info = [
    { label: "Material", value: "Poliéster Esportivo Dryfit" },
    { label: "Gênero", value: "Unissex" },
    { label: "Tipo de gola", value: "Redonda" },
    {
      label: "Personalização",
      value:
        "Personalizado no sistema de sublimação, sem limite de cores e escrita, frente e verso 100% do produto.",
    },
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Abada Types */}
          <div className="space-y-8">
            {types.map((type, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {type.label}
                  </span>
                  <img
                    src={type.image}
                    alt={type.label}
                    className="w-48 rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right - Info & Table */}
          <div className="space-y-8">
            {/* Info Box */}
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-primary-foreground italic">
                Informações
              </h3>
              {info.map((item, index) => (
                <p key={index} className="text-primary-foreground">
                  <span className="font-semibold">{item.label}:</span> {item.value}
                </p>
              ))}
            </div>

            {/* Size Table */}
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground italic text-center mb-4">
                Tabela de tamanhos:
              </h3>
              <div className="bg-background rounded-xl overflow-hidden shadow-xl">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted">
                      <th className="py-3 px-4 text-left font-bold">TAMANHO</th>
                      <th className="py-3 px-4 text-center font-bold">LARGURA</th>
                      <th className="py-3 px-4 text-center font-bold">ALTURA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}
                      >
                        <td className="py-2 px-4 font-semibold">{row.size}</td>
                        <td className="py-2 px-4 text-center">{row.width}</td>
                        <td className="py-2 px-4 text-center">{row.height}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-accent mb-4">GARANTA SEU BRINDE!</h3>
        </div>
      </div>
    </section>
  );
};

export default AbadaTypes;
