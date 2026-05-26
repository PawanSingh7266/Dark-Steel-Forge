import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Bhandari Metals & Alloys" }, { name: "description", content: "Get in touch for inquiries, quotes and partnership discussions." }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient-glow">talk steel.</span></>}
        subtitle="Whether you need a single coil or a full project consignment — our team is ready to respond."
      />
      <Container>
        <FadeIn className="-mt-6 mb-10 flex justify-center">
          <div className="bg-white rounded-2xl px-6 py-4 shadow-[0_10px_40px_-12px_oklch(0.55_0.18_245/0.35)] ring-1 ring-white/40">
            <img src={logoUrl} alt="Bhandari Metals & Alloys" className="h-16 md:h-20 w-auto" />
          </div>
        </FadeIn>
      </Container>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-5 gap-6">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-3 h-full">
                {[
                  { icon: MapPin, t: "Office", d: "95 Manickkam Pillai Street, Mannurpet, Chennai – 600050", href: "https://www.google.com/maps?q=95+Manickkam+Pillai+Street+Mannurpet+Chennai+600050" },
                  { icon: Phone, t: "Phone", d: "+91 98840 50538", href: "tel:+919884050538" },
                  { icon: Phone, t: "Phone", d: "+91 98841 18783", href: "tel:+919884118783" },
                  { icon: Mail, t: "Email", d: "info@bhandarimetalloys.com", href: "mailto:info@bhandarimetalloys.com" },
                  { icon: Clock, t: "Business Hours", d: "Mon – Sat · 10:00 AM – 7:00 PM" },
                  { icon: MessageCircle, t: "WhatsApp", d: "Quick response on +91 98840 50538", href: "https://wa.me/919884050538" },
                ].map((c) => (
                  <div key={c.t} className="p-5 rounded-xl glass flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 ring-1 ring-primary/20 grid place-items-center shrink-0">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{c.t}</div>
                      {c.href ? (
                        <a href={c.href} className="text-sm hover:text-primary transition-colors">{c.d}</a>
                      ) : (
                        <div className="text-sm">{c.d}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-3">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="p-8 md:p-10 rounded-2xl glass space-y-5"
              >
                <Eyebrow>Send an inquiry</Eyebrow>
                <h2 className="text-3xl font-semibold">We typically respond within one business day.</h2>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <Field label="Full Name" name="name" />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" />
                </div>
                <Field label="Subject" name="subject" />
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                  <textarea required rows={5} className="mt-2 w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none" placeholder="Tell us about grades, dimensions and quantities required..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[oklch(0.62_0.14_235)] to-[oklch(0.5_0.18_250)] text-white text-sm font-medium shadow-glow hover:shadow-[0_0_60px_oklch(0.62_0.14_235/0.5)] transition-all">
                  Send Inquiry <Send className="h-4 w-4" />
                </button>
                {sent && <p className="text-sm text-primary">Thank you — your inquiry has been received. Our team will be in touch shortly.</p>}
              </form>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <div className="rounded-2xl overflow-hidden glass aspect-[16/7]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=95+Manickkam+Pillai+Street+Mannurpet+Chennai+600050&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6) brightness(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all" />
    </div>
  );
}
