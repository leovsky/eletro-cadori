import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { MessageCircle } from "lucide-react";
import { contato } from "@/lib/cadori";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ScrollToTop />
    <Header />
    <main>{children}</main>
    <Footer />
    <a href={contato.whatsappHref} target="_blank" rel="noreferrer" aria-label="Fale no WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center">
      <MessageCircle className="w-7 h-7" />
    </a>
  </>
);

export default Layout;
