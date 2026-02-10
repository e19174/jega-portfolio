import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
  <section id="projects" className="px-6 py-24">
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Projects</h2>
        <h3 className="text-3xl font-bold text-foreground">What I've Built</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card
            key={i}
            className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-[0_0_30px_hsl(174_60%_51%/0.07)]"
          >
            <CardContent className="flex h-full flex-col p-6">
              <div className="mb-2 flex items-start gap-2">
                <h4 className="text-lg font-semibold text-foreground">{p.title}</h4>
                {p.badge && (
                  <Badge variant="outline" className="shrink-0 border-primary/40 text-primary text-[10px]">
                    {p.badge}
                  </Badge>
                )}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <Button key={l.label} variant="outline" size="sm" asChild className="gap-1.5 border-border hover:border-primary hover:bg-primary/10 hover:text-primary">
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      <l.icon className="h-3.5 w-3.5" /> {l.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
