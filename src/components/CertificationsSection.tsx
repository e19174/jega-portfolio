import { Award } from "lucide-react";

const certs = [
  { title: "Programming for Everybody (Python)", issuer: "Coursera" },
  { title: "Full-Stack Web Development Bootcamp", issuer: "Udemy" },
  { title: "Agile Project Management", issuer: "Google (Coursera)" },
  { title: "Front End Development Libraries", issuer: "freeCodeCamp" },
];

const CertificationsSection = () => (
  <section id="certifications" className="px-6 py-24">
    <div className="mx-auto max-w-4xl">

      {/* Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Certifications
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Credentials
        </h2>

        <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-primary/60" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {certs.map((c, i) => (
          <div
            key={i}
            className="glass-card rounded-xl p-5 hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {c.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default CertificationsSection;

