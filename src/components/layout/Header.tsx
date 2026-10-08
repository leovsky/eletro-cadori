import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-cadori.png.asset.json";
import { contato } from "@/lib/cadori";

const links = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Produtos", path: "/produtos" },
  { name: "Assistência", path: "/assistencia" },
  { name: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="bg-navy-900 text-primary-foreground text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <span className="font-semibold tracking-wide">Revenda e Assistência Técnica Autorizada · desde 1982</span>
          <div className="flex items-center gap-5">
            <a href={contato.telefoneHref} className="flex items-center gap-1.5 hover:text-purple-300"><Phone className="w-3.5 h-3.5" />{contato.telefone}</a>
            <a href={contato.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-purple-300"><MessageCircle className="w-3.5 h-3.5" />{contato.whatsapp}</a>
            <a href={`mailto:${contato.email}`} className="flex items-center gap-1.5 hover:text-purple-300"><Mail className="w-3.5 h-3.5" />{contato.email}</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3 gap-6">
        <Link to="/" className="animate-logo">
          <img src={logo.url} alt="Eletromecânica Cadori" className="h-24 md:h-36 lg:h-52 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.path} to={l.path}
              className={`font-display uppercase tracking-wide text-lg font-semibold transition-colors ${pathname === l.path ? "text-primary" : "text-navy-900 hover:text-primary"}`}>
              {l.name}
            </Link>
          ))}
        </nav>

        <a href={contato.whatsappHref} target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-purple-600 transition-colors text-sm font-semibold">
          <MessageCircle className="w-4 h-4" /> Fale no WhatsApp
        </a>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6 text-navy-900" /> : <Menu className="w-6 h-6 text-navy-900" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-3 flex flex-col">
          {links.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setOpen(false)}
              className={`py-3 font-display uppercase text-lg font-semibold ${pathname === l.path ? "text-primary" : "text-navy-900"}`}>
              {l.name}
            </Link>
          ))}
          <a href={contato.telefoneHref} className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold">
            <Phone className="w-4 h-4" /> {contato.telefone}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
