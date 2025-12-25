import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { BookingModal } from "./BookingModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-heading font-bold tracking-tighter text-white cursor-pointer">
            Wakel<span className="text-primary">.io</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("methodology")} className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Methodology
          </button>
          <button onClick={() => scrollToSection("showcase")} className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Case Studies
          </button>
          <BookingModal>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Book Sprint Assessment
            </Button>
          </BookingModal>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection("services")} className="text-left text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("methodology")} className="text-left text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Methodology
          </button>
          <button onClick={() => scrollToSection("showcase")} className="text-left text-sm font-medium text-white/80 hover:text-primary transition-colors">
            Case Studies
          </button>
          <BookingModal>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Book Sprint Assessment
            </Button>
          </BookingModal>
        </div>
      )}
    </nav>
  );
}
