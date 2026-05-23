import { FadeIn } from "./FadeIn";

const SERVICES = [
  { n: "01", name: "Web Development", desc: "Building modern, responsive, and high-performance websites and web applications using cutting-edge technologies like React, Next.js, and TypeScript." },
  { n: "02", name: "Marketing & Sales", desc: "Strategic marketing campaigns and sales funnels that drive growth, increase conversions, and build lasting customer relationships." },
  { n: "03", name: "Machine Learning", desc: "Implementing AI and machine learning solutions to automate processes, analyze data, and create intelligent applications." },
  { n: "04", name: "Product Strategy", desc: "As co-creator of IMOS and Connect AI, i bring hands-on experience in building and scaling innovative digital products from concept to launch." },
  { n: "05", name: "Business Tools", desc: "Expert proficiency in PowerPoint, Excel, Access, and Spreadsheets for data analysis, presentations, and business automation solutions." },
];

export function ServicesSection() {
  return (
    <section id="price" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-[5]">
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-t"
              style={{ borderColor: "rgba(12, 12, 12, 0.15)", borderBottomWidth: i === SERVICES.length - 1 ? 1 : 0, borderBottomStyle: "solid", borderBottomColor: "rgba(12, 12, 12, 0.15)" }}
            >
              <span className="font-black shrink-0" style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}>
                {s.n}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <h3 className="font-medium uppercase" style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}>
                  {s.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl" style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}