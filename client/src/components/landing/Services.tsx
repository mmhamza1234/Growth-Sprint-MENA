import { motion } from "framer-motion";
import { Search, Target, Settings, BarChart3, Rocket } from "lucide-react";

const blocks = [
  {
    week: "Week 1-2",
    title: "Market Study",
    description: "Competitive landscape mapping, segment analysis, and opportunity identification.",
    icon: Search,
    color: "text-blue-400"
  },
  {
    week: "Week 2-3",
    title: "Internal Analysis",
    description: "Capability audit, strengths grid, AI-readiness assessment, and differentiation mapping.",
    icon: BarChart3,
    color: "text-indigo-400"
  },
  {
    week: "Week 3-4",
    title: "Strategic Targeting",
    description: "Segment prioritization, focus statement, and 'no-go' list to stop wasting resources.",
    icon: Target,
    color: "text-purple-400"
  },
  {
    week: "Week 5-6",
    title: "Operating Model",
    description: "Org structure options, role profiles, RACI matrices, and workflow maps for core processes.",
    icon: Settings,
    color: "text-pink-400"
  },
  {
    week: "Week 7-8",
    title: "Activation Roadmap",
    description: "90-day execution plan with quick wins, KPIs, and workstream ownership.",
    icon: Rocket,
    color: "text-accent"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Product</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">5-Block Growth Operations Sprint</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
             A structured, high-velocity engagement designed to get you from chaos to clarity in 8 weeks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-xs font-mono text-muted-foreground mb-4 border-b border-white/5 pb-2">
                  {block.week}
                </div>
                <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 ${block.color}`}>
                  <block.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{block.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {block.description}
                </p>
              </div>
              
              {/* Connector Line (Desktop) */}
              {index < blocks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
