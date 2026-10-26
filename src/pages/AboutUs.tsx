import { useState } from "react";
import { X } from "lucide-react";
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
  const [imagemAberta, setImagemAberta] = useState<(typeof galeria)[number] | null>(null);

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
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {galeria.map((imagem) => (
              <button key={imagem.src} type="button" onClick={() => setImagemAberta(imagem)}
                aria-label={`Ampliar imagem: ${imagem.alt}`}
                className="group overflow-hidden rounded-xl bg-background shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <img src={imagem.src} alt={imagem.alt} loading="lazy"
                  className="w-full h-32 sm:h-40 md:h-36 lg:h-44 object-cover transition-transform duration-300 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {imagemAberta && (
        <div role="dialog" aria-modal="true" aria-label={imagemAberta.alt}
          onClick={() => setImagemAberta(null)}
          onKeyDown={(event) => { if (event.key === "Escape") setImagemAberta(null); }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8">
          <button type="button" onClick={() => setImagemAberta(null)} aria-label="Fechar imagem"
            className="absolute right-4 top-4 rounded-full bg-white/15 p-3 text-white hover:bg-white/25">
            <X className="h-6 w-6" />
          </button>
          <img src={imagemAberta.src} alt={imagemAberta.alt} onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
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
