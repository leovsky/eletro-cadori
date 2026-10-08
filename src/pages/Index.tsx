import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle, ChevronRight, Wrench, Zap, Droplets, Wind } from "lucide-react";
import hero from "@/assets/hero-oficina.jpg";
import { marcas, produtos } from "@/lib/cadori";

const servicos = [
  { icon: Zap, titulo: "Motores elétricos", desc: "Recuperação, rebobinagem e manutenção de motores." },
  { icon: Droplets, titulo: "Motobombas", desc: "Reparo e venda de bombas centrífugas, submersas e autoaspirantes." },
  { icon: Wind, titulo: "Compressores", desc: "Assistência em compressores de ar e pistolas de pintura." },
  { icon: Wrench, titulo: "Lavadoras e jardim", desc: "Lavadoras de alta pressão, aparadores e roçadeiras." },
];

const Index = () => (
  <Layout>
    <section className="bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-purple-100 text-primary font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5">Brusque-SC · desde 1982</span>
          <h1 className="font-display uppercase text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 leading-[0.95] mb-6">
            Seu equipamento<br />parado? <span className="italic text-primary">A gente resolve.</span>
          </h1>
          <ul className="space-y-3 mb-8">
            {["Assistência técnica autorizada de grandes marcas", "Revenda de motores, motobombas e compressores", "Peças de reposição originais"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground text-lg">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />{item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link to="/contato" className="bg-primary hover:bg-purple-600 text-primary-foreground font-semibold px-7 py-3 rounded-full transition-colors">Solicitar orçamento</Link>
            <Link to="/produtos" className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-primary-foreground font-semibold px-7 py-3 rounded-full transition-colors">Ver produtos</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-full h-full bg-primary rounded-tl-[80px]" />
          <img src={hero} alt="Técnico realizando manutenção em motor elétrico" width={1280} height={960} className="relative w-full rounded-tl-[80px] object-cover shadow-xl" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-navy-900 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-display uppercase text-4xl md:text-5xl font-bold mb-12">O que <span className="italic text-purple-400">fazemos</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map(({ icon: Icon, titulo, desc }) => (
            <div key={titulo} className="bg-navy-800 rounded-xl p-6 border-b-4 border-primary">
              <Icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="font-display uppercase text-2xl font-bold mb-2">{titulo}</h3>
              <p className="text-primary-foreground/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-navy-900">Produtos em <span className="italic text-primary">destaque</span></h2>
          <Link to="/produtos" className="text-navy-900 hover:text-primary font-semibold text-sm hidden sm:block">Ver todos →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.slice(0, 8).map((p) => (
            <div key={p.nome} className="bg-cream rounded-xl p-6 hover:shadow-lg transition-shadow">
              {p.img && <div className="bg-background rounded-lg mb-4 aspect-[3/4] flex items-center justify-center overflow-hidden"><img src={p.img} alt={p.nome} loading="lazy" className="w-full h-full object-contain" /></div>}
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{p.marca}</span>
              <h3 className="font-display uppercase text-xl font-bold text-navy-900 mt-1 mb-2">{p.nome}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display uppercase text-4xl md:text-5xl font-bold text-navy-900 mb-4">Mais de 40 anos <span className="italic text-primary">de confiança</span></h2>
          <div className="w-16 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Fundada em outubro de 1982 em Brusque-SC, a Eletro Mecânica Cadori começou com serviços de elétrica e reparo de motores. Hoje atende principalmente a indústria, com revenda e assistência técnica autorizada das principais marcas do mercado.
          </p>
          <Link to="/quem-somos" className="inline-block border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-primary-foreground font-semibold px-6 py-2.5 rounded-full transition-colors">Quem somos</Link>
        </div>
        <div>
          <h3 className="font-display uppercase tracking-widest text-sm text-navy-600 mb-4">Assistência autorizada</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {marcas.map((m) => (
              <Link key={m.nome} to="/assistencia" className="bg-background rounded-lg h-20 flex items-center justify-center font-display uppercase text-xl font-extrabold text-navy-900 hover:text-primary hover:shadow-md transition-all">
                {m.nome}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-display uppercase text-3xl md:text-4xl font-bold">Precisa de conserto ou orçamento?</h2>
        <Link to="/contato" className="bg-background text-primary font-semibold px-7 py-3 rounded-full hover:bg-cream transition-colors flex items-center gap-1">Fale conosco <ChevronRight className="w-4 h-4" /></Link>
      </div>
    </section>
  </Layout>
);

export default Index;
