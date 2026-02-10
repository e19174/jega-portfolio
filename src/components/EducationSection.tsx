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
  <section id="education" className="px-6 py-24">
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Education</h2>
        <h3 className="text-3xl font-bold text-foreground">Academic Background</h3>
      </div>
      <div className="space-y-6">
        {education.map((e, i) => (
          <Card key={i} className="border-border/50 bg-card transition-colors hover:border-primary/30">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">{e.institution}</h4>
                <p className="text-muted-foreground">{e.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground/70">{e.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
