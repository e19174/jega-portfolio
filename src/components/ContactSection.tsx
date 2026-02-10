import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "e19174@eng.pdn.ac.lk", href: "mailto:e19174@eng.pdn.ac.lk" },
  { icon: Phone, label: "0766290193", href: "tel:0766290193" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/JegatheesanShanthakumar" },
  { icon: Github, label: "GitHub", href: "https://github.com/Jegatheesan" },
];

const ContactSection = () => (
  <section id="contact" className="px-6 py-24">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Contact</h2>
      <h3 className="mb-8 text-3xl font-bold text-foreground">Get In Touch</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border/50 px-5 py-3 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
          >
            <c.icon className="h-4 w-4" />
            <span className="text-sm">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
    <footer className="mt-16 text-center text-xs text-muted-foreground/50">
      © {new Date().getFullYear()} Jegatheesan Shanthakumar. All rights reserved.
    </footer>
  </section>
);

export default ContactSection;
