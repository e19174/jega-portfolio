import profilePhoto from "@/assets/profile-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:gap-16">
        <div className="relative">
          <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-primary/30 shadow-[0_0_40px_hsl(174_60%_51%/0.15)] md:h-72 md:w-72">
            <img src={profilePhoto} alt="Jegatheesan Shanthakumar" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Hello, I'm</p>
          <h1 className="mb-2 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Jegatheesan<br />Shanthakumar
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">Computer Engineering Undergraduate</p>
          <p className="mb-8 max-w-lg text-muted-foreground">
            Passionate computer engineering undergraduate with hands-on experience in full-stack development, IoT systems, machine learning, and cloud technologies. Eager to contribute to impactful real-world software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="gap-2"
            >
              View Projects <ArrowDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" asChild className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10">
              <a href="/Jegatheesan_CV.pdf" download>
                Download CV <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
