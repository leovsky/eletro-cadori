import { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import { produtos, contato } from "@/lib/cadori";

const ordemMarcas = ["Kärcher", "Trapp", "Schneider", "WEG", "Schulz", "Garthen", "Dancor", "Famac"];

const Produtos = () => {
  const marcasDisponiveis = useMemo(() => {
    const presentes = new Set(produtos.map((p) => p.marca));
    return ["Todos", ...ordemMarcas, ...Array.from(presentes).filter((marca) => !ordemMarcas.includes(marca))];
  }, []);
  const [marca, setMarca] = useState("Todos");
  const [descricoesExpandidas, setDescricoesExpandidas] = useState<Set<string>>(() => new Set());
  const lista = marca === "Todos" ? produtos : produtos.filter((p) => p.marca === marca);

  return (
    <Layout>
      <PageHeader titulo="Nossos" destaque="Produtos" sub="Motores, motobombas, lavadoras, compressores e equipamentos para jardim." />
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 overflow-x-auto pb-3 md:flex-wrap md:justify-center scrollbar-thin" role="group" aria-label="Filtrar produtos por marca">
              {marcasDisponiveis.map((m) => (
                <button key={m} type="button" onClick={() => setMarca(m)} aria-pressed={marca === m}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap shrink-0 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${marca === m ? "bg-primary text-primary-foreground shadow-sm" : "bg-cream text-navy-900 hover:bg-cream-dark"}`}>
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="font-display uppercase text-xl md:text-2xl font-bold text-navy-900">{marca === "Todos" ? "Todos os produtos" : marca}</h2>
            <span className="text-sm text-muted-foreground whitespace-nowrap">{lista.length} {lista.length === 1 ? "produto" : "produtos"}</span>
          </div>
          {lista.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {lista.map((p) => (
                <article key={p.nome} className="bg-cream rounded-xl p-3 md:p-6 flex flex-col">
                  {p.img && <div className="bg-background rounded-lg mb-4 aspect-[3/4] flex items-center justify-center overflow-hidden"><img src={p.img} alt={p.nome} loading="lazy" className="w-full h-full object-contain" /></div>}
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{p.marca}</span>
                  <h3 className="font-display uppercase text-base md:text-2xl font-bold text-navy-900 mt-1 mb-2 leading-tight">{p.nome}</h3>
                  <div className="flex-1 hidden sm:block">
                    <p
                      className="text-xs md:text-sm text-muted-foreground"
                      style={descricoesExpandidas.has(p.nome) ? undefined : {
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {p.desc}
                    </p>
                    {p.desc.length > 100 && (
                      <button
                        type="button"
                        aria-expanded={descricoesExpandidas.has(p.nome)}
                        onClick={() => setDescricoesExpandidas((atuais) => {
                          const novas = new Set(atuais);
                          if (novas.has(p.nome)) novas.delete(p.nome);
                          else novas.add(p.nome);
                          return novas;
                        })}
                        className="mt-1 text-xs md:text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                      >
                        {descricoesExpandidas.has(p.nome) ? "Ver menos" : "Ver mais..."}
                      </button>
                    )}
                  </div>
                  <a href={`${contato.whatsappHref}?text=${encodeURIComponent(`Olá! Gostaria de um orçamento: ${p.nome}`)}`} target="_blank" rel="noreferrer"
                    className="mt-auto pt-3 self-start text-sm font-semibold text-navy-900 hover:text-primary">Pedir orçamento →</a>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-cream p-8 text-center text-muted-foreground">Não há produtos cadastrados para esta marca no momento. Entre em contato para consultar disponibilidade.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
