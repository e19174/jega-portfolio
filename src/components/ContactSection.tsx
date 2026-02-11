import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "e19174@eng.pdn.ac.lk", href: "mailto:e19174@eng.pdn.ac.lk" },
  { icon: Phone, label: "0766290193", href: "tel:0766290193" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/JegatheesanShanthakumar" },
  { icon: Github, label: "GitHub", href: "https://github.com/Jegatheesan" },
];

const ContactSection = () => (
  <section id="contact" className="relative px-6 py-28 overflow-hidden">

    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-4xl text-center">

      {/* Header */}
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        Contact
      </p>

      <h2 className="section-title gradient-text">
        Get In Touch
      </h2>

      <div className="mx-auto mt-6 mb-14 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 rounded-xl px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-4px]"
          >
            <c.icon className="h-5 w-5 text-primary" />
            {c.label}
          </a>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="mt-20 text-center text-sm text-muted-foreground/70">
      © {new Date().getFullYear()} Jegatheesan Shanthakumar. All rights reserved.
    </footer>
  </section>
);

export default ContactSection;

