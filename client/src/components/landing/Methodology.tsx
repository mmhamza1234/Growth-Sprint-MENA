import { motion } from "framer-motion";
import { Check } from "lucide-react";

const phases = [
  {
    title: "Phase 1: Market & Internal Reality",
    weeks: "Weeks 1-3",
    description: "We start outside-in (market, competitors, segments) then flip inside-out (your capabilities, strengths, operational DNA). Most firms skip the internal audit—that's why strategies fail in execution."
  },
  {
    title: "Phase 2: Focus & Structure",
    weeks: "Weeks 4-6",
    description: "Once we know where you can win, we design the operating model to execute. Org charts, role definitions, workflows, decision rights—all aligned to your target segments."
  },
  {
    title: "Phase 3: Activation",
    weeks: "Weeks 7-8",
    description: "We package everything into a consolidated strategy document and 90-day roadmap with quick wins ranked by impact/effort. You get senior leads throughout—no junior analysts."
  }
];

export function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Sprint-Based. Senior-Led. <span className="text-destructive">Zero Fluff.</span></h2>
          <p className="text-lg text-muted-foreground mb-8">
            Single fixed-scope engagement. No retainers, no scope creep. You walk away with everything you need to execute.
          </p>
          
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl font-bold">{phase.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded">{phase.weeks}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-30" />
          <div className="relative glass-card p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Deliverable Package</h3>
            <ul className="space-y-4">
              {[
                "Consolidated Strategy Document (120+ Pages)",
                "Org Structure & Role Profiles",
                "Workflow Maps & RACI Matrices",
                "90-Day Execution Roadmap",
                "KPI Dashboards & Templates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <Check className="text-accent w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
