const Hero: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <section className="bg-muted/30 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mb-8 text-xl text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
