export function Metrics() {
  return (
    <section className="py-20 border-y border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">8</div>
            <div className="text-sm md:text-base text-muted-foreground">Weeks Sprint Duration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-heading">5</div>
            <div className="text-sm md:text-base text-muted-foreground">Methodology Blocks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">120+</div>
            <div className="text-sm md:text-base text-muted-foreground">Pages of Strategy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-400 mb-2 font-heading">2</div>
            <div className="text-sm md:text-base text-muted-foreground">Senior Leads Per Sprint</div>
          </div>
        </div>
      </div>
    </section>
  );
}
