const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "devicon-react-original" },
      { name: "React Native", icon: "devicon-react-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: "devicon-spring-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Git", icon: "devicon-git-plain" },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain" },
      { name: "CNN", icon: null },
      { name: "RNN", icon: null },
      { name: "LSTM", icon: null },
    ],
  },
  {
    title: "Embedded Systems",
    items: [{ name: "ESP32", icon: null }],
  },
  {
    title: "Development Tools",
    items: [
      { name: "IntelliJ IDEA", icon: "devicon-intellij-plain" },
      { name: "VS Code", icon: "devicon-vscode-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Jira", icon: "devicon-jira-plain" },
    ],
  },
];

const TechStackSection = () => (
  <section id="techstack" className="px-6 py-20">
    <div className="mx-auto max-w-6xl">

      {/* Section Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Tech Stack
        </p>

        <h2 className="text-4xl font-extrabold md:text-5xl">
          <span className="gradient-text">
            Technologies I Work With
          </span>
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="glass-card rounded-2xl p-6"
          >
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-primary">
              {cat.title}
            </h4>

            <div className="flex flex-wrap gap-6">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex w-16 flex-col items-center gap-2 text-center"
                >
                  {item.icon ? (
                    <i
                      className={`${item.icon} colored text-4xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]`}
                    />
                  ) : (
                    <span className="text-xs font-bold text-muted-foreground">
                      {item.name}
                    </span>
                  )}

                  {item.icon && (
                    <span className="text-xs text-muted-foreground/80 group-hover:text-white transition">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;


