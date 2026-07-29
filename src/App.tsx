import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
};

type Project = {
  number: string;
  name: string;
  category: string;
  year: string;
  description: string;
  href?: string;
};

type FormStatus = "idle" | "loading" | "error";

const services: Service[] = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "From polished frontend interfaces to databases, APIs and backend services, I build complete digital products that are responsive, maintainable and ready for real users.",
    capabilities: [
      "React, Next.js, Tailwind CSS",
      "Node.js, APIs, Firebase",
      "PostgreSQL, MySQL, MongoDB",
    ],
  },
  {
    number: "02",
    title: "UI/UX & Frontend",
    description:
      "I design and develop clear, responsive interfaces that feel natural to use across phones, tablets and desktop screens, with careful attention to accessibility and performance.",
    capabilities: [
      "Responsive interface development",
      "Interaction design and motion",
      "Accessible, performance-focused UI",
    ],
  },
  {
    number: "03",
    title: "Optimisation & IT Systems",
    description:
      "I improve and support the systems behind daily business operations, from application performance and technical troubleshooting to domains, business email, security and cloud deployment.",
    capabilities: [
      "Technical support and troubleshooting",
      "Domains, DNS, SSL and business email",
      "Cloud deployment, Docker and Vercel",
    ],
  },
];

const projects: Project[] = [
  {
    number: "01",
    name: "Business Website Portfolio",
    category: "Website Design & Development",
    year: "2026",
    description:
      "Responsive business websites created for Sandgrouse Resort, John Brooks Associates Engineers, Onicorp Engineers and other growing organisations.",
    href: "https://johnbrooks.co.zw",
  },
  {
    number: "02",
    name: "TheE Agent",
    category: "AI Customer Engagement Platform",
    year: "2026",
    description:
      "A WhatsApp-first AI customer engagement system designed to answer enquiries, qualify leads, automate conversations and connect customers with businesses.",
  },
  {
    number: "03",
    name: "TheE POS",
    category: "Retail Management System",
    year: "2026",
    description:
      "An offline-first point-of-sale and business management platform for African retailers, covering checkout, stock, customers, suppliers, reporting and multi-branch operations.",
  },
  {
    number: "04",
    name: "TruDwell",
    category: "Verified Rental Marketplace",
    year: "2026",
    description:
      "A Southern African rental platform designed to connect tenants with verified accommodation while giving landlords tools for property management, payments and communication.",
  },
  {
    number: "05",
    name: "TheE Booking Desk",
    category: "Hospitality Management Platform",
    year: "2026",
    description:
      "A booking and property-management platform for hotels, lodges, guest houses and short-term accommodation businesses.",
  },
];

const skillGroups = [
  {
    label: "Languages & Core Technologies",
    direction: "normal",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Dart", "HTML", "CSS", "Git"],
  },
  {
    label: "Frameworks & Platforms",
    direction: "reverse",
    skills: ["React", "Next.js", "Flutter", "Node.js", "Express", "Tailwind CSS", "Firebase", "Docker"],
  },
  {
    label: "Systems & Infrastructure",
    direction: "normal",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Vercel", "Cloud Platforms", "DNS and SSL", "IT Troubleshooting"],
  },
];

const navItems = [
  ["Services", "#services"],
  ["Works", "#works"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 18 18 6M9 6h9v9" />
    </svg>
  );
}

function ArrowDownRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m6 6 12 12M18 9v9H9" />
    </svg>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span className={`menu-glyph ${open ? "is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

function useRevealAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "-4% 0px -8%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useBotswanaTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return useMemo(() => {
    const timezone = "Africa/Gaborone";
    const dateParts = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(now);

    const part = (type: "year" | "month" | "day") =>
      Number(dateParts.find((item) => item.type === type)?.value ?? 0);

    const tomorrowAtNoonUtc = new Date(Date.UTC(part("year"), part("month") - 1, part("day") + 1, 12));
    const availabilityDate = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .format(tomorrowAtNoonUtc)
      .replace(/ /g, " ")
      .toUpperCase();

    const localTime = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

    return { availabilityDate, localTime };
  }, [now]);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const { availabilityDate, localTime } = useBotswanaTime();

  useRevealAnimations();

  useEffect(() => {
    document.title = "Evans Mudziviri — Software Developer & IT Specialist";
  }, []);

  useEffect(() => {
    const updateMenuVisibility = () => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection) return;
      const revealPoint = servicesSection.offsetTop - window.innerHeight * 0.28;
      setShowFloatingMenu(window.scrollY >= revealPoint);
    };

    updateMenuVisibility();
    window.addEventListener("scroll", updateMenuVisibility, { passive: true });
    window.addEventListener("resize", updateMenuVisibility);
    return () => {
      window.removeEventListener("scroll", updateMenuVisibility);
      window.removeEventListener("resize", updateMenuVisibility);
    };
  }, []);

  useEffect(() => {
    const servicePanels = Array.from(document.querySelectorAll<HTMLElement>("[data-service-index]"));
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible[0]) {
          const index = Number((visible[0].target as HTMLElement).dataset.serviceIndex ?? 0);
          setActiveService(index);
        }
      },
      { threshold: 0.12, rootMargin: "-28% 0px -52%" },
    );

    servicePanels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setFormStatus("error");
      setFormMessage("Please complete all three fields.");
      return;
    }

    setFormStatus("loading");
    setFormMessage("Opening your email application…");

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`);
    window.location.href = `mailto:info@vanssoftwarelab.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      setFormStatus("idle");
      setFormMessage("Your email application should now be open. You can also write directly to info@vanssoftwarelab.com.");
    }, 900);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-identity" href="#top" aria-label="Evans Mudziviri home">
          Software Developer<br />&amp; IT Specialist
        </a>

        <nav className="hero-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              <span>{label}</span><span aria-hidden="true">{label}</span>
            </a>
          ))}
        </nav>
      </header>

      <button
        className={`floating-menu-button ${showFloatingMenu || menuOpen ? "is-visible" : ""}`}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-menu-overlay"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuGlyph open={menuOpen} />
      </button>

      <aside id="site-menu-overlay" className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Expanded navigation">
          <a href="#top" onClick={closeMenu}>Home</a>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <div className="menu-overlay-footer">
          <div>
            <span>Email address</span>
            <a href="mailto:info@vanssoftwarelab.com">info@vanssoftwarelab.com</a>
          </div>
          <div className="menu-socials">
            <a href="https://linkedin.com/in/evans-mudziviri-b9b45a161" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/mudzivirievans" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </aside>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <h1 className="hero-name" id="hero-title">
            <span>EVANS</span>
            <span>MUDZIVIRI</span>
          </h1>

          <div className="hero-lower">
            <div className="hero-copy hero-load hero-load--one">
              <ArrowDownRightIcon className="hero-direction" />
              <p>I build modern websites, mobile applications, AI-powered products and reliable business systems that help organisations work better and grow.</p>
              <a className="pill-link" href="#contact">
                <span>CONTACT</span><ArrowUpRightIcon />
              </a>
            </div>

            <div className="hero-date hero-load hero-load--two">
              <span>AVAILABLE FOR WORK</span>
              <strong>{availabilityDate}</strong>
            </div>
          </div>
        </section>

        <section className="hero-transition" aria-hidden="true">
          <div className="transition-shine" />
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-intro section-intro--services" data-reveal>
            <div>
              <h2 className="section-display" id="services-title">WHAT I DO /</h2>
              <span className="section-label">(SERVICES)</span>
            </div>
            <p>I design and build reliable digital products for businesses, startups and organisations. My work covers modern websites, mobile applications, AI automation, business software and the technical systems needed to keep them running.</p>
          </div>

          <div className="service-experience">
            <div className="service-sticky-stack">
              {services.map((service, index) => (
                <div
                  className={`sticky-service-title ${index <= activeService ? "is-active" : ""}`}
                  id={`service-title-${service.number}`}
                  key={service.number}
                >
                  <span>({service.number})</span>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>

            <div className="service-details">
              {services.map((service, index) => (
                <article
                  className="service-detail"
                  key={service.number}
                  data-service-index={index}
                  aria-labelledby={`service-title-${service.number}`}
                >
                  <div className="service-detail-content">
                    <p>{service.description}</p>
                    <ol>
                      {service.capabilities.map((capability, capabilityIndex) => (
                        <li key={capability}><span>0{capabilityIndex + 1}</span><strong>{capability}</strong></li>
                      ))}
                    </ol>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section works-section" id="works" aria-labelledby="works-title">
          <div className="section-intro section-intro--dark" data-reveal>
            <div>
              <h2 className="section-display" id="works-title">SELECTED WORKS /</h2>
              <span className="section-label">(PROJECTS)</span>
            </div>
            <p>Digital products and business systems created to solve practical problems, improve operations and help African businesses grow.</p>
          </div>

          <div className="project-list" role="list">
            {projects.map((project, index) => (
              <article
                key={project.name}
                role="listitem"
                className={`project-row ${activeProject === index ? "is-active" : ""}`}
                onMouseEnter={() => setActiveProject(index)}
                onFocusCapture={() => setActiveProject(index)}
                data-reveal
              >
                <button
                  type="button"
                  className="project-selector"
                  aria-expanded={activeProject === index}
                  onClick={() => setActiveProject(index)}
                >
                  <span className="project-number">{project.number}</span>
                  <span className="project-content">
                    <span className="project-meta">{project.category}</span>
                    <strong>{project.name}</strong>
                    <span className="project-description">{project.description}</span>
                  </span>
                  <span className="project-year">{project.year}</span>
                </button>
                {project.href && (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
                    <ArrowUpRightIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section" aria-label="Professional identity">
          <div className="statement-line" data-reveal>DEVELOPER</div>
          <div className="statement-line statement-line--right" data-reveal>IT SPECIALIST</div>
          <div className="statement-line" data-reveal>CREATOR /</div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="skills-heading">
            <span>(Capabilities)</span>
            <h2 id="skills-title">Skills</h2>
          </div>
          {skillGroups.map((group) => {
            const words = [...group.skills, ...group.skills];
            return (
              <div className="skill-band" key={group.label}>
                <span className="skill-label">{group.label}</span>
                <div className="skill-track-wrap" aria-label={group.skills.join(", ")}>
                  <div className={`skill-track skill-track--${group.direction}`} aria-hidden="true">
                    {words.map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i>•</i></span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-portrait" data-reveal>
              <img src="/IMG_1985.jpeg" alt="Evans Mudziviri" loading="lazy" />
            </div>
            <div className="about-copy">
              <span className="section-label" data-reveal>(About Me)</span>
              <h2 id="about-title" data-reveal>I’m a Southern African software developer and IT specialist at VansSoftwareLab, driven by a desire to turn ambitious ideas into practical digital products.</h2>
              <div className="about-body" data-reveal>
                <p>I work across websites, mobile applications, AI automation, business platforms and IT systems. My focus is not only making software work, but making it clear, useful and reliable for the people and organisations using it.</p>
                <p>I believe Africa should not only consume technology. We should build it, shape it and use it to solve the problems around us. That belief guides the products and businesses I am working to create.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-heading" data-reveal>
            <h2 id="contact-title">Let’s Make It Happen</h2>
            <p>Have a project in mind?</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <label>
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Your email address</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="message-field">
              <span>Tell me about your project</span>
              <textarea name="message" rows={3} required />
            </label>
            <div className="form-actions">
              <button type="submit" disabled={formStatus === "loading"}>
                <span>{formStatus === "loading" ? "Opening email…" : "Get a quote"}</span><ArrowUpRightIcon />
              </button>
              <p className={formStatus === "error" ? "form-message is-error" : "form-message"} aria-live="polite">{formMessage}</p>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Menu</h3>
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h3>Socials</h3>
            <a className="footer-external" href="https://linkedin.com/in/evans-mudziviri-b9b45a161" target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRightIcon /></a>
            <a className="footer-external" href="https://github.com/mudzivirievans" target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRightIcon /></a>
            <a className="footer-external" href="mailto:info@vanssoftwarelab.com"><span>VansSoftwareLab</span><ArrowUpRightIcon /></a>
          </div>
          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <a href="mailto:info@vanssoftwarelab.com">info@vanssoftwarelab.com</a>
            <a href="tel:+26775377360">+267 7537 7360</a>
            <a href="tel:+2675750201">+267 5750 201</a>
            <span>Pilane, Botswana</span>
          </div>
          <div className="local-time">
            <span>Local time · Botswana</span>
            <strong>{localTime}</strong>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Evans Mudziviri</span>
          <a className="scroll-top" href="#top" aria-label="Scroll to top">↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
