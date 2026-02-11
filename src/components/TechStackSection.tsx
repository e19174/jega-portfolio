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
  <section id="techstack" className="px-6 py-16">
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">
          Tech Stack
        </h2>
        <h3 className="mb-1 text-3xl font-bold text-foreground">
          Technologies I Work With
        </h3>
        <div className="mx-auto h-1 w-12 rounded-full bg-primary" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-border/50 bg-card p-5 transition-colors hover:border-primary/30"
          >
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
              {cat.title}
            </h4>

            <div className="flex flex-wrap gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col items-center gap-1.5"
                  title={item.name}
                >
                  {item.icon ? (
                    <i
                      className={`${item.icon} colored text-3xl transition-transform duration-300 group-hover:scale-110`}
                    />
                  ) : (
                    <span className="flex h-8 items-center text-xs font-bold text-muted-foreground">
                      {item.name}
                    </span>
                  )}

                  {item.icon && (
                    <span className="text-[10px] text-muted-foreground/80">
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

