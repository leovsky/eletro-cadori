import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import { produtos, contato } from "@/lib/cadori";

const Produtos = () => {
  const cats = ["Todos", ...Array.from(new Set(produtos.map((p) => p.categoria)))];
  const [cat, setCat] = useState("Todos");
  const lista = cat === "Todos" ? produtos : produtos.filter((p) => p.categoria === cat);
  return (
    <Layout>
      <PageHeader titulo="Nossos" destaque="Produtos" sub="Motores, motobombas, lavadoras, compressores e equipamentos para jardim." />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-cream text-navy-900 hover:bg-cream-dark"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lista.map((p) => (
              <div key={p.nome} className="bg-cream rounded-xl p-6 flex flex-col">
                {p.img && <div className="bg-background rounded-lg mb-4 aspect-[3/4] flex items-center justify-center overflow-hidden"><img src={p.img} alt={p.nome} loading="lazy" className="w-full h-full object-contain" /></div>}
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{p.marca} · {p.categoria}</span>
                <h3 className="font-display uppercase text-2xl font-bold text-navy-900 mt-1 mb-2">{p.nome}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.desc}</p>
                <a href={`${contato.whatsappHref}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento: ${p.nome}`)}`} target="_blank" rel="noreferrer"
                  className="mt-5 self-start text-sm font-semibold text-navy-900 hover:text-primary">Pedir orçamento →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
