import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Container, FadeIn, Eyebrow } from "@/components/section";
import { ShieldCheck, Award, FileCheck2, Stamp } from "lucide-react";
import jslLogo from "@/assets/jsl-logo.jpeg.asset.json";
import sailLogo from "@/assets/sail-logo.jpeg.asset.json";
import isoCertImg from "@/assets/certs/iso-9001.jpg.asset.json";
import jslCertImg from "@/assets/certs/jsl-mou.jpg.asset.json";
import sailCertImg from "@/assets/certs/sail-mou.jpg.asset.json";
import isoCertPdf from "@/assets/certs/iso-9001.pdf.asset.json";
import jslCertPdf from "@/assets/certs/jsl-mou.pdf.asset.json";
import sailCertPdf from "@/assets/certs/sail-mou.pdf.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ZoomIn, ZoomOut, Eye } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Authorizations — Bhandari Metals & Alloys" },
      {
        name: "description",
        content:
          "Authorized distributor of JSL and SAIL. Quality certifications and trust credentials.",
      },
    ],
  }),
  component: Certs,
});

const NEW_CERTS = [
  {
    id: "iso",
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    desc: "Independently assessed by QRO and certified compliant with ISO 9001:2015 for trading and supply of stainless steel, copper, brass and aluminium. Certificate No. 305026022098Q, valid until February 2029.",
    image: isoCertImg.url,
    pdf: isoCertPdf.url,
    filename: "ISO-9001-2015-Bhandari-Metals-Alloys.pdf",
  },
  {
    id: "jsl",
    title: "JSL Authorized Partner",
    subtitle: "Jindal Stainless Limited — MoU Partnership",
    desc: "Memorandum of Understanding with Jindal Stainless Limited for dealing in stainless steel products of Jindal Stainless. Issued by JSL Sales & Distribution.",
    image: jslCertImg.url,
    pdf: jslCertPdf.url,
    filename: "JSL-MoU-Partnership-Certificate.pdf",
  },
  {
    id: "sail",
    title: "SAIL Authorized Partner",
    subtitle: "Steel Authority of India Limited — MoU Partnership",
    desc: "Memorandum of Understanding with Steel Authority of India Limited for purchase of stainless steel from SAIL Salem Steel Plant. Signed by SAIL leadership.",
    image: sailCertImg.url,
    pdf: sailCertPdf.url,
    filename: "SAIL-MoU-Partnership-Certificate.pdf",
  },
];

function CertificateCard({ cert }: { cert: (typeof NEW_CERTS)[number] }) {
  const [zoom, setZoom] = useState(1);
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all flex flex-col">
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="relative bg-white border-b border-border/50 aspect-[3/4] overflow-hidden flex items-center justify-center">
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          loading="lazy"
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="relative p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] mb-3">
          <Stamp className="h-4 w-4" /> Certified
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
          {cert.title}
        </h3>
        <div className="text-sm text-muted-foreground mb-3">{cert.subtitle}</div>
        <p className="text-foreground/85 leading-relaxed text-sm flex-1">{cert.desc}</p>
        <Dialog onOpenChange={() => setZoom(1)}>
          <DialogTrigger asChild>
            <Button className="mt-5 w-full" variant="default">
              <Eye className="h-4 w-4" /> View Certificate
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 flex flex-col">
            <DialogHeader className="p-4 border-b">
              <DialogTitle>{cert.title}</DialogTitle>
              <DialogDescription>{cert.subtitle}</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-between gap-2 p-3 border-b bg-muted/30">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                >
                  <ZoomOut className="h-4 w-4" /> Zoom Out
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setZoom((z) => Math.min(4, z + 0.25))}
                >
                  <ZoomIn className="h-4 w-4" /> Zoom In
                </Button>
                <span className="text-xs text-muted-foreground ml-2">
                  {Math.round(zoom * 100)}%
                </span>
              </div>
              <Button size="sm" asChild>
                <a href={cert.pdf} download={cert.filename} target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              </Button>
            </div>
            <div className="flex-1 overflow-auto bg-muted/20 p-4">
              <div className="flex items-start justify-center min-h-full">
                <img
                  src={cert.image}
                  alt={`${cert.title} full certificate`}
                  style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
                  className="transition-transform duration-200 max-w-full shadow-lg bg-white"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function Certs() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Authorizations"
        title={
          <>
            Backed by India's most <span className="text-gradient-glow">trusted names.</span>
          </>
        }
        subtitle="Direct partnerships with the makers — and a relentless commitment to documented quality at every step."
      />

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <Eyebrow>Official Certificates</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Verified credentials, <span className="text-gradient-glow">on record.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {NEW_CERTS.map((c, i) => (
              <FadeIn key={c.id} delay={i * 0.08}>
                <CertificateCard cert={c} />
              </FadeIn>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "JSL",
                logo: jslLogo.url,
                full: "Jindal Stainless Limited",
                desc: "Authorized Distributor — direct sourcing of premium stainless steel grades from India's largest stainless producer.",
              },
              {
                name: "SAIL",
                logo: sailLogo.url,
                full: "Steel Authority of India Limited",
                desc: "Authorized Distributor — supply of carbon and specialty steel products from India's national steel maker.",
              },
            ].map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all p-8 md:p-10">
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] mb-6">
                      <Stamp className="h-4 w-4" /> Authorized Distributor
                    </div>
                    <div className="rounded-2xl bg-white border border-border/50 p-8 md:p-10 mb-6 flex items-center justify-center min-h-[160px] md:min-h-[200px]">
                      <img
                        src={p.logo}
                        alt={`${p.full} official logo`}
                        className="max-h-24 md:max-h-32 w-auto object-contain"
                      />
                    </div>
                    <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {p.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">{p.full}</div>
                    <p className="text-foreground/85 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <Eyebrow>Quality Commitment</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Every consignment, <span className="text-gradient-steel">documented.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: FileCheck2,
                t: "Mill Test Certificates",
                d: "Original MTCs accompany every consignment for full traceability.",
              },
              {
                icon: ShieldCheck,
                t: "ASTM / ASME Compliance",
                d: "All material conforms to international specifications.",
              },
              {
                icon: Award,
                t: "Quality Inspection",
                d: "Multi-stage inspection from intake to dispatch.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.08}>
                <div className="p-7 rounded-2xl glass h-full">
                  <v.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
