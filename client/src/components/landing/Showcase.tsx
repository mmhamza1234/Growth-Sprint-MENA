import { Badge } from "@/components/ui/badge";

const projects = [
  {
    category: "Service Business (Egypt)",
    title: "Operational Turnaround",
    stats: "45 Employees",
    challenge: "Visa processing company with severe operational bottlenecks and undefined roles.",
    delivered: "Redesigned workflows, role definitions, decision framework.",
    impact: "Reduced process time, clearer accountability structure."
  },
  {
    category: "B2B SaaS (Regional)",
    title: "Market Entry Sprint",
    stats: "Seed Stage",
    challenge: "Tech company expanding into MENA without market intelligence or focus.",
    delivered: "Segment analysis, go-to-market focus, 90-day activation plan.",
    impact: "Clear target segments, prioritized product roadmap."
  }
];

export function Showcase() {
  return (
    <section id="showcase" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Recent Sprints</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-card border border-white/10 p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{project.category}</Badge>
                <span className="text-sm text-muted-foreground font-mono">{project.stats}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Challenge</div>
                  <p className="text-sm">{project.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Delivered</div>
                  <p className="text-sm">{project.delivered}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent mb-1">Impact</div>
                  <p className="text-sm font-medium text-white">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
