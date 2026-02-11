import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Green House Automation",
    description:
      "IoT-based smart greenhouse system using ESP32 and multiple sensors to automate irrigation and environmental control. Provides real-time monitoring, analytics, and remote device control through cloud integration.",
    tags: ["ESP32", "IoT", "Cloud", "React"],
    links: [
      { label: "Website", url: "https://cepdnaclk.github.io/e20-3yp-Green-House-Automation/", icon: ExternalLink },
      { label: "GitHub", url: "https://github.com/cepdnaclk/e20-3yp-Green-House-Automation", icon: Github },
    ],
  },
  {
    title: "MIS for Non-Academic Establishment Division",
    description:
      "Web-based Management Information System developed to digitize and streamline non-academic staff administration processes.",
    tags: ["React", "Spring Boot", "MySQL"],
    links: [
      { label: "Frontend", url: "https://github.com/e19174/Non-academic-staff", icon: Github },
      { label: "Backend", url: "https://github.com/e19174/Non-academic-staff-BackEnd", icon: Github },
    ],
  },
  {
    title: "Sign Language Recognition System",
    description:
      "Machine learning system developed to recognize and interpret static and dynamic sign language gestures using deep learning models.",
    tags: ["Python", "TensorFlow", "CNN", "Deep Learning"],
    links: [
      { label: "GitHub", url: "https://github.com/e19174/Sign-Language-Recognition", icon: Github },
    ],
  },
  {
    title: "Hierarchical Hybrid Intrusion Detection System",
    badge: "Research – Ongoing",
    description:
      "Research project focused on designing a multi-stage intrusion detection system integrating network-layer and application-layer analysis to detect zero-day and unknown cyber attacks.",
    tags: ["Machine Learning", "Network Security", "Research"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/cepdnaclk/e20-4yp-A-Hierarchical-Hybrid-Framework-for-Intrusion-Detection-in-Network-and-Application-Layers",
        icon: Github,
      },
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative px-6 py-28 overflow-hidden">

    {/* Background Glow */}
    <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-6xl">

      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Projects
        </p>

        <h2 className="section-title gradient-text">
          What I've Built
        </h2>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-8 transition-all duration-300"
          >
            {/* Title + Badge */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                {p.title}
              </h3>

              {p.badge && (
                <Badge className="bg-primary/20 text-primary border border-primary/40">
                  {p.badge}
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {p.links.map((l) => (
                <Button
                  key={l.label}
                  asChild
                  className="btn-premium text-white px-4 py-2 text-sm rounded-lg"
                >
                  <a href={l.url} target="_blank" rel="noopener noreferrer">
                    <l.icon className="mr-2 h-4 w-4" />
                    {l.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
