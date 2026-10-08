const PageHeader = ({ titulo, destaque, sub }: { titulo: string; destaque: string; sub?: string }) => (
  <section className="bg-navy-900 text-primary-foreground py-10 md:py-20 border-b-4 border-primary">
    <div className="container mx-auto px-4 md:px-8">
      <h1 className="font-display uppercase text-4xl md:text-6xl font-extrabold">
        {titulo} <span className="italic text-purple-400">{destaque}</span>
      </h1>
      {sub && <p className="mt-3 text-primary-foreground/70 text-base md:text-lg max-w-2xl">{sub}</p>}
    </div>
  </section>
);

export default PageHeader;
