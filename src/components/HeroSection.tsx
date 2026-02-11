import profilePhoto from "@/assets/profile-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background via-[#0b1f3a] to-[#0a2540] flex min-h-[90vh] items-center justify-center px-6 pt-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-20">

        {/* Profile Image */}
        <div className="relative">
          <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_40px_hsl(var(--primary)/0.35)] transition duration-300 hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] md:h-72 md:w-72">
            <img
              src={profilePhoto}
              alt="Jegatheesan Shanthakumar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Hello, I'm
          </p>

          <h1 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Jegatheesan <br /> Shanthakumar
          </h1>

          <p className="mb-4 text-xl font-semibold text-secondary">
            Computer Engineering Undergraduate
          </p>

          <p className="mb-8 max-w-lg text-muted-foreground">
            Passionate computer engineering undergraduate with hands-on experience
            in full-stack development, IoT systems, machine learning, and cloud
            technologies. Focused on building scalable, real-world software solutions.
          </p>

          <Button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="gap-2 bg-primary px-6 py-3 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-500 hover:shadow-blue-500/40 transition-all duration-300"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
