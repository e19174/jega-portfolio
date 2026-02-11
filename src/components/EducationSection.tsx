import { GraduationCap } from "lucide-react";

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
  <section id="education" className="relative px-6 py-24 overflow-hidden">

    {/* Background Glow */}
    <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-5xl">

      {/* Section Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Education
        </p>

        <h2 className="section-title gradient-text">
          Academic Background
        </h2>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      </div>

      {/* Timeline Cards */}
      <div className="space-y-8">
        {education.map((e, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-8 transition-all duration-300"
          >
            <div className="flex items-start gap-6">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <GraduationCap className="h-6 w-6" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-bold text-white">
                  {e.institution}
                </h3>

                <p className="mt-1 text-muted-foreground text-base">
                  {e.degree}
                </p>

                <p className="mt-2 text-sm text-muted-foreground/70">
                  {e.period}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

