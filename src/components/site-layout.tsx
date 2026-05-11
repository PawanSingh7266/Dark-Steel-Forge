import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/technical", label: "Technical" },
  { to: "/industries", label: "Industries" },
  { to: "/certifications", label: "Certifications" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative h-9 w-9 rounded-md bg-gradient-to-br from-[oklch(0.85_0.02_235)] to-[oklch(0.4_0.04_240)] grid place-items-center shadow-glow">
        <span className="font-display font-bold text-[oklch(0.14_0.005_240)] text-sm">B</span>
        <div className="absolute inset-0 rounded-md ring-1 ring-white/20" />
      </div>
      <div className="leading-tight">
        <div className="font-display font-semibold text-sm tracking-wide">BHANDARI</div>
        <div className="text-[10px] text-muted-foreground tracking-[0.25em] uppercase">Metals & Alloys</div>
      </div>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "px-3 py-2 text-[13px] text-foreground relative" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className="group inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white shadow-glow hover:shadow-[0_0_60px_oklch(0.62_0.14_235/0.5)] transition-shadow">
            Send Inquiry <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-steel overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "px-3 py-2.5 text-sm text-foreground" }} activeOptions={{ exact: n.to === "/" }}>
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-24 border-t border-steel">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.14_235)] to-transparent opacity-60" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A legacy of stainless steel excellence since 1983. Authorized distributor of JSL and SAIL.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(1, 5).map((n) => <li key={n.to}><Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(5).map((n) => <li key={n.to}><Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /><span>CP Tank, Mumbai, India</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>+91 98XXX XXXXX</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>info@bhandarimetals.com</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bhandari Metals & Alloys. All rights reserved.</p>
          <p className="tracking-wide">Crafted with precision · Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const loc = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={loc.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
