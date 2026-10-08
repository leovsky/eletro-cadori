import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import hero from "@/assets/hero-oficina.jpg";
import { marcas } from "@/lib/cadori";

const AboutUs = () => (
  <Layout>
    <PageHeader titulo="Quem" destaque="Somos" sub="Uma história de competência e dedicação aos clientes desde 1982." />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <h2 className="font-display uppercase text-4xl font-bold text-navy-900">Nossa <span className="italic text-primary">história</span></h2>
          <p>A Eletro Mecânica Cadori foi fundada em outubro de 1982, em Brusque-SC, para prestar serviços de elétrica industrial e residencial, consertar aparelhos domésticos e recuperar motores elétricos e equipamentos industriais.</p>
          <p>Com o passar dos anos, a empresa conquistou espaço no mercado e foi reconhecida pela competência, pela qualidade dos serviços e pela dedicação aos clientes.</p>
          <p>Hoje o foco principal é a área industrial. A Cadori também revende produtos, motores elétricos e peças de reposição, e é assistência técnica autorizada de {marcas.map((m) => m.nome).join(", ")}.</p>
        </div>
        <img src={hero} alt="Oficina da Eletro Mecânica Cadori" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-xl w-full object-cover" />
      </div>
    </section>
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[["1982", "Ano de fundação"], ["40+", "Anos de experiência"], [String(marcas.length), "Marcas autorizadas"]].map(([n, l]) => (
          <div key={l} className="bg-background rounded-xl p-8 border-b-4 border-primary">
            <p className="font-display text-6xl font-extrabold text-navy-900">{n}</p>
            <p className="text-muted-foreground uppercase tracking-widest text-sm mt-2">{l}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default AboutUs;
