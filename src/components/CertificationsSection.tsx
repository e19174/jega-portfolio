import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certs = [
  { title: "Programming for Everybody (Python)", issuer: "Coursera" },
  { title: "Full-Stack Web Development Bootcamp", issuer: "Udemy" },
  { title: "Agile Project Management", issuer: "Google (Coursera)" },
  { title: "Front End Development Libraries", issuer: "freeCodeCamp" },
];

const CertificationsSection = () => (
  <section id="certifications" className="px-6 py-16">
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">Certifications</h2>
        <h3 className="mb-1 text-3xl font-bold text-foreground">Credentials</h3>
        <div className="mx-auto h-1 w-12 rounded-full bg-primary" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <Card key={i} className="border-border/50 bg-card transition-colors hover:border-primary/30">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">{c.title}</h4>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
