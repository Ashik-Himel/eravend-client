import machine from "../../assets/machine2.png";

export default function JoinSection() {
  return (
    <section className="mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 [&>*]:flex-1">
          <div data-aos="fade-right">
            <h2 className="text-3xl xl:text-5xl font-medium mb-4 !leading-[1.3]">Treten Sie noch heute der Eravend-Familie bei</h2>
            <p>Eine Investition in die intelligenten Verkaufsautomaten von Eravend bedeutet eine Investition in eine profitable und nachhaltige Zukunft. Unsere Maschinen sind mehr als nur Spender; Es handelt sich um anspruchsvolle Einzelhandelslösungen, die auf den modernen Verbraucher zugeschnitten sind.</p>
          </div>
          <div>
            <img src={machine} alt="Machine Bild" className="w-full max-w-[400px] mx-auto md:ml-auto md:mr-0" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </section>
  );
}