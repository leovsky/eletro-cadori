import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contato } from "@/lib/cadori";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Sou ${form.nome} (${form.telefone}). ${form.mensagem}`;
    window.open(`${contato.whatsappHref}?text=${encodeURIComponent(texto)}`, "_blank");
  };
  const input = "w-full rounded-lg border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <Layout>
      <PageHeader titulo="Fale" destaque="Conosco" sub="Envie sua mensagem ou venha nos visitar." />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-14">
          <form onSubmit={enviar} className="space-y-4">
            <h2 className="font-display uppercase text-3xl font-bold text-navy-900">Envie sua <span className="italic text-primary">mensagem</span></h2>
            <input required placeholder="Seu nome" className={input} value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            <input required placeholder="Telefone" className={input} value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
            <textarea required rows={5} placeholder="Como podemos ajudar?" className={input} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
            <button className="bg-primary hover:bg-purple-600 text-primary-foreground font-semibold px-7 py-3 rounded-full flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Enviar pelo WhatsApp
            </button>
          </form>
          <div className="bg-navy-900 text-primary-foreground rounded-2xl p-8 space-y-6">
            <h2 className="font-display uppercase text-3xl font-bold">Contatos</h2>
            <a href={contato.telefoneHref} className="flex gap-3"><Phone className="text-purple-400" />{contato.telefone}</a>
            <a href={contato.whatsappHref} target="_blank" rel="noreferrer" className="flex gap-3"><MessageCircle className="text-purple-400" />{contato.whatsapp}</a>
            <a href={`mailto:${contato.email}`} className="flex gap-3"><Mail className="text-purple-400" />{contato.email}</a>
            <div className="flex gap-3"><MapPin className="text-purple-400 shrink-0" /><span>{contato.endereco}<br />{contato.cidade}</span></div>
            <iframe title="Mapa" className="w-full h-56 rounded-lg border-0" loading="lazy"
              src="https://www.google.com/maps?q=Rua+Joaquim+Reis,+125,+Brusque+SC&output=embed" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
