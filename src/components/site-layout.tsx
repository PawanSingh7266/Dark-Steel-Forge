import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import logoUrl from "@/assets/logo.png";

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

const ADDRESS =
  "95, Manikkam Pillai Street, Periyar Nagar, Mannurpet, Chennai, Tamil Nadu 600058, India";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Bhandari+Metals+%26+Alloys+452C%2BG66+Manikkam+Pillai+St+Periyar+Nagar+Mannurpet+Chennai+Tamil+Nadu+600058";

function Logo({ size = "default" }: { size?: "default" | "lg" }) {
  const h = size === "lg" ? "h-14" : "h-[42px] md:h-[55px]";
  return (
    <Link to="/" className="flex items-center group" aria-label="Bhandari Metals & Alloys — Home">
      <div className="bg-white rounded-md px-2.5 py-1.5 shadow-[0_2px_18px_-6px_oklch(0.55_0.18_245/0.35)] ring-1 ring-white/40 transition-transform group-hover:scale-[1.02]">
        <img
          src={logoUrl}
          alt="Bhandari Metals & Alloys"
          className={`${h} w-auto object-contain`}
          loading="eager"
          decoding="async"
        />
      </div>
    </Link>
  );
}

export { Logo as BrandLogo };

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
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong" : "bg-transparent"}`}
    >
      <div className="hidden md:block border-b border-steel/60 bg-[oklch(0.2_0.04_250/0.55)]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-8 flex items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors truncate"
          >
            <MapPin className="h-3 w-3 text-primary shrink-0" />
            <span className="truncate">{ADDRESS}</span>
          </a>
          <div className="flex items-center gap-4 shrink-0">
            <a href="tel:+917200822500" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="h-3 w-3 text-primary" /> +91 72008 22500
            </a>
            <a href="mailto:sales.bma@gmail.com" className="hidden lg:flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="h-3 w-3 text-primary" /> sales.bma@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-[13px] font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "px-3 py-2 text-[13px] font-semibold tracking-wide text-foreground relative" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white shadow-glow hover:shadow-[0_0_60px_oklch(0.62_0.14_235/0.5)] transition-shadow"
          >
            Send Inquiry{" "}
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
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
                <Link
                  key={n.to}
                  to={n.to}
                  className="px-3 py-2.5 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "px-3 py-2.5 text-sm font-semibold tracking-wide text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-steel space-y-2.5 px-3 pb-2 text-xs text-muted-foreground">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-foreground transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" />
                  <span>{ADDRESS}</span>
                </a>
                <a href="tel:+917200822500" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-3.5 w-3.5 text-primary" /> +91 72008 22500
                </a>
              </div>
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
            A legacy of stainless steel excellence since 1983. Authorized distributor of JSL and
            SAIL.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(1, 5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV.slice(5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>
                95, Manikkam Pillai Street, Periyar Nagar, Mannurpet, Chennai, Tamil Nadu 600058,
                India
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+917200822500" className="hover:text-primary transition-colors">
                +91 72008 22500
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919884118783" className="hover:text-primary transition-colors">
                +91 98841 18783
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:sales.bma@gmail.com"
                className="hover:text-primary transition-colors"
              >
                sales.bma@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bhandari Metals & Alloys. All rights reserved.</p>
          <p className="tracking-wide">Crafted with precision · Chennai, India</p>
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
      <main className="flex-1 pt-20 md:pt-28">
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
      <WhatsAppButton />
    </div>
  );
}
