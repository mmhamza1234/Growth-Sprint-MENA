import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueProp } from "@/components/landing/ValueProp";
import { Services } from "@/components/landing/Services";
import { Methodology } from "@/components/landing/Methodology";
import { Metrics } from "@/components/landing/Metrics";
import { Audience } from "@/components/landing/Audience";
import { Showcase } from "@/components/landing/Showcase";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <ValueProp />
      <Services />
      <Methodology />
      <Metrics />
      <Audience />
      <Showcase />
      <Footer />
    </div>
  );
}
