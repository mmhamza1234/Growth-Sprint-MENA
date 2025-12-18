import { Building2, TrendingUp, AlertTriangle } from "lucide-react";

const criteria = [
  {
    icon: Building2,
    text: "15-70 Employees needing structure to scale"
  },
  {
    icon: TrendingUp,
    text: "Entering new markets or segments"
  },
  {
    icon: AlertTriangle,
    text: "Strategy is clear but execution is chaotic"
  }
];

export function Audience() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Built For Growing B2B Companies at Inflection Points</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-card px-8 py-4 rounded-full border border-white/10 shadow-lg">
              <item.icon className="text-primary w-5 h-5" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {["Post-Funding", "Market Expansion", "Operational Plateau", "Leadership Transition"].map((timing, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Ideal Timing</div>
              <div className="font-bold text-lg">{timing}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
