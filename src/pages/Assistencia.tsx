import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import { marcas } from "@/lib/cadori";

const Assistencia = () => (
  <Layout>
    <PageHeader titulo="Assistência" destaque="Técnica" sub="Somos assistência técnica autorizada das principais marcas, com peças de reposição." />
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {marcas.map((m) => (
          <div key={m.nome} className="rounded-xl border border-border p-6 border-t-4 border-t-primary">
            <h3 className="font-display uppercase text-3xl font-extrabold text-navy-900 mb-4">{m.nome}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Revenda</p>
            <p className="text-sm text-muted-foreground mb-3">{m.revenda}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Reparo</p>
            <p className="text-sm text-muted-foreground">{m.reparo}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Assistencia;
