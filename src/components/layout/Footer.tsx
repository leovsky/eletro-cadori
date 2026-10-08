import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { contato } from "@/lib/cadori";

const Footer = () => (
  <footer className="bg-navy-900 text-primary-foreground">
    <div className="h-1.5 bg-primary" />
    <div className="container mx-auto px-4 md:px-8 py-16 grid md:grid-cols-3 gap-12">
      <div>
        <h2 className="font-display text-4xl font-bold uppercase leading-none mb-3">
          Eletro Mecânica <span className="italic text-purple-400">Cadori</span>
        </h2>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Revenda e assistência técnica autorizada em Brusque-SC desde 1982.
        </p>
      </div>
      <div>
        <h3 className="font-display uppercase tracking-widest text-sm text-purple-300 mb-4">Contato</h3>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>{contato.endereco}<br />{contato.cidade}</span></li>
          <li className="flex gap-2"><Phone className="w-4 h-4 shrink-0" /><a href={contato.telefoneHref}>{contato.telefone}</a></li>
          <li className="flex gap-2"><MessageCircle className="w-4 h-4 shrink-0" /><a href={contato.whatsappHref} target="_blank" rel="noreferrer">{contato.whatsapp}</a></li>
          <li className="flex gap-2"><Mail className="w-4 h-4 shrink-0" /><a href={`mailto:${contato.email}`}>{contato.email}</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-display uppercase tracking-widest text-sm text-purple-300 mb-4">Menu</h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
          <Link to="/" className="hover:text-purple-300">Início</Link>
          <Link to="/quem-somos" className="hover:text-purple-300">Quem Somos</Link>
          <Link to="/produtos" className="hover:text-purple-300">Produtos</Link>
          <Link to="/assistencia" className="hover:text-purple-300">Assistência</Link>
          <Link to="/contato" className="hover:text-purple-300">Contato</Link>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
      © {new Date().getFullYear()} Eletro Mecânica Cadori Ltda. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
