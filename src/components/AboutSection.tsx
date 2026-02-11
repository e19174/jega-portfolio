const AboutSection = () => (
  <section
    id="about"
    className="relative px-6 py-24 overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-4xl text-center">

      {/* Section Label */}
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        About Me
      </p>

      {/* Gradient Title */}
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
        <span className="gradient-text">Who I Am</span>
      </h2>

      {/* Gradient Divider */}
      <div className="mx-auto mt-6 mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      {/* Glass Card Content */}
      <div className="glass-card rounded-3xl p-8 md:p-12 text-left md:text-center">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I am a Computer Engineering undergraduate at the University of
          Peradeniya with a strong foundation in full-stack web development,
          cloud computing, IoT, and machine learning. I have built end-to-end
          systems ranging from smart greenhouse automation with ESP32 sensors
          to management information systems using Spring Boot and React.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          My research interests include network security and intrusion
          detection. I thrive on solving complex problems and am actively
          seeking opportunities to contribute to real-world engineering
          projects and software teams.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
