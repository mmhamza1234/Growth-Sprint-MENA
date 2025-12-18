import { motion } from "framer-motion";
import { Layers, Zap, LayoutTemplate } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Strategy + Execution",
    description: "Most consultancies hand you a PowerPoint and disappear. We deliver org structures, workflow maps, RACI matrices, and 90-day roadmaps."
  },
  {
    icon: LayoutTemplate,
    title: "Operational DNA",
    description: "Led by a business strategist and operations designer who've built and optimized businesses from the inside, not just advised from the outside."
  },
  {
    icon: Zap,
    title: "Execute Immediately",
    description: "We fix the gap between strategy and execution. Walk away with playbooks your team can implement on Day 1."
  }
];

export function ValueProp() {
  return (
    <section className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Fix The Gap Between <span className="text-primary">Strategy</span> & <span className="text-accent">Execution</span></h2>
          <p className="text-muted-foreground text-lg">
            Stop paying for "fluffy decks." Start building the operational muscle to actually grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
