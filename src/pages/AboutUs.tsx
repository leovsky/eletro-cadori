import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import { marcas } from "@/lib/cadori";
import fachadaFrontal from "@/assets/quem-somos/fachada-frontal.jpg";
import fachadaLateral from "@/assets/quem-somos/fachada-lateral.jpg";
import oficina from "@/assets/quem-somos/oficina.jpg";
import letreiro from "@/assets/quem-somos/letreiro.jpg";

const galeria = [
  { src: fachadaFrontal, alt: "Fachada frontal da Eletro Mecânica Cadori" },
  { src: fachadaLateral, alt: "Fachada lateral da Eletro Mecânica Cadori" },
  { src: oficina, alt: "Interior da oficina da Eletro Mecânica Cadori" },
  { src: letreiro, alt: "Letreiro da Eletro Mecânica Cadori" },
];

const AboutUs = () => {
  const [indice, setIndice] = useState(0);
  const anterior = () => setIndice((atual) => (atual - 1 + galeria.length) % galeria.length);
  const proximo = () => setIndice((atual) => (atual + 1) % galeria.length);

  return (
    <Layout>
      <PageHeader titulo="Quem" destaque="Somos" sub="Uma história de competência e dedicação aos clientes desde 1982." />
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-navy-900">Nossa <span className="italic text-primary">história</span></h2>
            <p>A Eletro Mecânica Cadori foi fundada em outubro de 1982, na cidade de Brusque-SC, com o propósito de atuar na prestação de serviços de elétrica em geral, industrial e residencial, reparos de aparelhos domésticos, recuperação de motores elétricos e equipamentos industriais diversos.</p>
            <p>Com o passar dos anos, a empresa conquistou espaço no mercado e o reconhecimento pela competência, qualidade dos serviços e dedicação aos clientes.</p>
            <p>Hoje, a Eletro Mecânica Cadori tem foco principalmente na área industrial. Atua também como revenda de produtos, motores elétricos e peças para reposição, além de assistência técnica dos fabricantes {marcas.map((m) => m.nome).join(", ")}.</p>
          </div>
        </div>
      </section>
      <section className="bg-cream py-14 md:py-18">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-navy-900">Nossa <span className="italic text-primary">estrutura</span></h2>
            <p className="mt-3 text-muted-foreground">Conheça um pouco da nossa história e do nosso espaço.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-background shadow-lg">
              <img key={galeria[indice].src} src={galeria[indice].src} alt={galeria[indice].alt} loading="lazy" className="w-full h-[260px] sm:h-[380px] md:h-[500px] object-contain md:object-cover" />
              <button type="button" onClick={anterior} aria-label="Imagem anterior" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 text-navy-900 p-2 md:p-3 shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button type="button" onClick={proximo} aria-label="Próxima imagem" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/90 text-navy-900 p-2 md:p-3 shadow-md hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            <div className="mt-5 flex justify-center gap-3" role="group" aria-label="Selecionar imagem da galeria">
              {galeria.map((imagem, i) => (
                <button key={imagem.src} type="button" onClick={() => setIndice(i)} aria-label={`Mostrar imagem ${i + 1}: ${imagem.alt}`} aria-pressed={indice === i}
                  className={`h-2.5 rounded-full transition-all ${indice === i ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-primary/60"}`} />
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">{indice + 1} de {galeria.length}</p>
          </div>
        </div>
      </section>
      <section className="py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 text-center">
          {[[ "1982", "Ano de fundação" ], [ "40+", "Anos de experiência" ], [ String(marcas.length), "Marcas atendidas" ]].map(([n, l]) => (
            <div key={l} className="bg-cream rounded-xl p-7 md:p-8 border-b-4 border-primary">
              <p className="font-display text-5xl md:text-6xl font-extrabold text-navy-900">{n}</p>
              <p className="text-muted-foreground uppercase tracking-widest text-xs md:text-sm mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
