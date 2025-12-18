import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroAvatar from "@assets/generated_images/futuristic_3d_business_avatar_for_hero_section.png";
import heroBg from "@assets/generated_images/abstract_tech_workflow_background_texture.png";
import { BookingModal } from "./BookingModal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now Accepting Q1 Sprints
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Growth Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Sprint
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
            Strategy + Execution in 8 Weeks. We don't do fluffy decks. Get executable strategy, operational workflows, and activation roadmaps.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <BookingModal>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg h-14 px-8 shadow-[0_0_20px_-5px_hsl(var(--primary))]">
                Start Your Sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </BookingModal>
            <Button variant="outline" size="lg" className="h-14 px-8 border-white/10 hover:bg-white/5 text-foreground">
              See How It Works
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No Retainers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Implementation-Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Senior Leads Only</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10">
            <img 
              src={heroAvatar} 
              alt="Growth Operations Avatar" 
              className="w-full max-w-[600px] mx-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Decorative glowing elements behind avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
