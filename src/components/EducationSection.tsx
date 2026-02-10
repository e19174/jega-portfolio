import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    institution: "University of Peradeniya",
    degree: "BSc Eng (Hons), Computer Engineering",
    period: "Feb 2021 – Present",
  },
  {
    institution: "Nelliady Central College",
    degree: "G.C.E Advanced Level – 3A",
    period: "2017 – 2019",
  },
];

const EducationSection = () => (
  <section id="education" className="px-6 py-16">
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">Education</h2>
        <h3 className="mb-1 text-3xl font-bold text-foreground">Academic Background</h3>
        <div className="mx-auto h-1 w-12 rounded-full bg-primary" />
      </div>
      <div className="space-y-4">
        {education.map((e, i) => (
          <Card key={i} className="border-border/50 bg-card transition-colors hover:border-primary/30">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{e.institution}</h4>
                <p className="text-muted-foreground">{e.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground/80">{e.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
