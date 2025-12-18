export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-background text-center">
      <div className="container mx-auto px-6">
        <div className="text-2xl font-heading font-bold tracking-tighter text-white mb-6">
            Wakel<span className="text-primary">.io</span>
        </div>
        <div className="text-muted-foreground text-sm max-w-md mx-auto mb-8">
          Growth Operations Sprint for Egypt & MENAT.
          <br />
          Strategy + Execution in 8 Weeks.
        </div>
        <div className="flex justify-center gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="mt-8 text-xs text-white/20">
          © {new Date().getFullYear()} Wakel.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
