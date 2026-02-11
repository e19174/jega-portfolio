import profilePhoto from "@/assets/profile-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[95vh] items-center justify-center px-6 pt-24 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-24">

        {/* Profile Image */}
        <div className="relative">
          <div className="h-60 w-60 overflow-hidden rounded-full border-4 border-primary/60 shadow-[0_0_60px_rgba(59,130,246,0.4)] transition duration-500 hover:shadow-[0_0_80px_rgba(59,130,246,0.6)] md:h-72 md:w-72">
            <img
              src={profilePhoto}
              alt="Jegatheesan Shanthakumar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Hello, I'm
          </p>

          {/* Gradient Name */}
          <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="gradient-text">
              Jegatheesan Shanthakumar
            </span>
          </h1>

          <p className="mb-6 text-xl font-semibold text-secondary">
            Computer Engineering Undergraduate
          </p>

          <p className="mb-10 max-w-xl text-lg text-muted-foreground">
            Passionate computer engineering undergraduate with hands-on experience
            in full-stack development, IoT systems, machine learning, and cloud
            technologies. Focused on building scalable, real-world software systems.
          </p>

          <Button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-premium px-8 py-3 text-white rounded-xl font-semibold text-base"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

