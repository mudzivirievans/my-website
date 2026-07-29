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
    title: "AI Systems & Automation",
    description:
      "I design intelligent tools that help businesses answer customers, organise information, automate repetitive work and make better use of their data.",
    capabilities: [
      "AI assistants and customer agents",
      "Workflow and process automation",
      "Smart integrations and internal tools",
    ],
  },
  {
    number: "02",
    title: "Websites & Mobile Apps",
    description:
      "I create modern websites and mobile experiences that are clear, responsive and built around what real customers need to accomplish.",
    capabilities: [
      "Business and hospitality websites",
      "Customer portals and booking experiences",
      "Cross-platform mobile applications",
    ],
  },
  {
    number: "03",
    title: "Business Software & Platforms",
    description:
      "I turn operational challenges into dependable software—from dashboards and management systems to platforms that support entire business processes.",
    capabilities: [
      "Dashboards, CRM and management systems",
      "Booking, retail and marketplace platforms",
      "Custom software for internal operations",
    ],
  },
  {
    number: "04",
    title: "IT Systems & Technical Support",
    description:
      "I keep the technology behind daily work reliable, secure and understandable, whether the need is troubleshooting, deployment or ongoing technical support.",
    capabilities: [
      "Technical support and troubleshooting",
      "Domains, DNS, SSL and business email",
      "Cloud deployment, performance and security",
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
      "Selected client websites for Rachel’s Concrete Kitchens, Tshiamo Cloud, Onicorp Engineers and Sandgrouse Resort.",
    href: "https://rachel-s-concrete-kitchens.vercel.app",
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

const menuItems = [["Home", "#top"], ...navItems] as const;

const socialLinks = [
  ["LinkedIn", "https://linkedin.com/in/evans-mudziviri-b9b45a161"],
  ["GitHub", "https://github.com/mudzivirievans"],
  ["Facebook", "https://www.facebook.com/share/19H7qz3KSK/?mibextid=wwXIfr"],
  ["Instagram", "https://www.instagram.com/evansmudziviri?igsh=b3Eyc3NibjNzNDky"],
  ["X / Twitter", "https://x.com/e_mudz"],
  ["Reddit", "https://www.reddit.com/u/Then-Research/s/kYpyBwunti"],
  ["Discord · vans_37", "https://discord.com/app"],
] as const;

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6 18 18 6M9 6h9v9" />
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
    const availabilityDayMonth = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      day: "2-digit",
      month: "short",
    }).format(tomorrowAtNoonUtc).toUpperCase();
    const availabilityYear = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      year: "numeric",
    }).format(tomorrowAtNoonUtc);
    const localTime = new Intl.DateTimeFormat("en-GB", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

    return { availabilityDayMonth, availabilityYear, localTime };
  }, [now]);
}

function AppRefined() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const { availabilityDayMonth, availabilityYear, localTime } = useBotswanaTime();

  useRevealAnimations();

  useEffect(() => {
    document.title = "Evans Mudziviri — Software Developer & IT Specialist";
  }, []);

  useEffect(() => {
    const updateNavigationMode = () => {
      const servicesSection = document.getElementById("services");
      if (!servicesSection) return;

      const swapLine = Math.min(118, window.innerHeight * 0.13);
      const isPastHero = servicesSection.getBoundingClientRect().top <= swapLine;
      setShowFloatingMenu(isPastHero);
      document.body.classList.toggle("is-past-hero", isPastHero);
    };

    updateNavigationMode();
    window.addEventListener("scroll", updateNavigationMode, { passive: true });
    window.addEventListener("resize", updateNavigationMode);

    return () => {
      document.body.classList.remove("is-past-hero");
      window.removeEventListener("scroll", updateNavigationMode);
      window.removeEventListener("resize", updateNavigationMode);
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
      { threshold: 0.12, rootMargin: "-24% 0px -50%" },
    );

    servicePanels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
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
    setFormMessage("Opening WhatsApp…");

    const whatsappMessage = encodeURIComponent(
      `Hello Evans, my name is ${name}.\nEmail: ${email}\n\nProject details:\n${message}`,
    );
    window.open(`https://wa.me/26775377360?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      setFormStatus("idle");
      setFormMessage("WhatsApp should now be open. You can also call +267 7537 7360.");
    }, 700);
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

      <aside id="site-menu-overlay" className={`menu-overlay menu-overlay--editorial ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav className="menu-overlay-nav" aria-label="Expanded navigation">
          {menuItems.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              <strong>{label}</strong>
            </a>
          ))}
        </nav>
        <div className="menu-overlay-footer">
          <div className="menu-overlay-note">
            <span>Based in Botswana</span>
            <p>Building intelligent, useful and dependable digital products.</p>
          </div>
          <div className="menu-overlay-contact">
            <span>Start a project</span>
            <a href="tel:+26775377360">+267 7537 7360</a>
          </div>
          <div className="menu-socials">
            {socialLinks.slice(0, 4).map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
            ))}
          </div>
        </div>
      </aside>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-handwritten-intro" aria-label="Hello, I'm">
            <span className="hero-intro-script">Hello, I’m</span>
          </div>
          <h1 className="hero-name" id="hero-title">
            <span>Evans</span>
            <span>Mudziviri</span>
          </h1>

          <div className="hero-lower">
            <div className="hero-copy hero-load hero-load--one">
              <p className="hero-editorial-copy">
                I create <span className="brush-highlight brush-highlight--one">AI-powered systems and software</span>, modern websites, mobile apps and reliable IT solutions designed to help businesses <span className="brush-highlight brush-highlight--two">work smarter and grow</span>.
              </p>
              <a className="pill-link" href="#contact">
                <span>CONTACT</span><ArrowUpRightIcon />
              </a>
            </div>

            <div className="hero-date hero-load hero-load--two">
              <span>AVAILABLE FOR WORK</span>
              <strong>
                <span className="availability-day">{availabilityDayMonth}</span>
                <span className="availability-year">{availabilityYear}</span>
              </strong>
            </div>
          </div>
        </section>

        <section className="hero-transition" aria-hidden="true"><div className="transition-shine" /></section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-intro section-intro--services" data-reveal>
            <div>
              <h2 className="section-display" id="services-title">WHAT I DO /</h2>
              <span className="section-label">(SERVICES)</span>
            </div>
            <p>I create, connect and support the technology businesses depend on—from intelligent automation and customer experiences to operational software and reliable IT systems.</p>
          </div>

          <div className="service-experience">
            <div className="service-sticky-stack">
              {services.map((service, index) => (
                <div className={`sticky-service-title ${index <= activeService ? "is-active" : ""}`} id={`service-title-${service.number}`} key={service.number}>
                  <span>({service.number})</span>
                  <h3>{service.title}</h3>
                </div>
              ))}
            </div>

            <div className="service-details">
              {services.map((service, index) => (
                <article className="service-detail" key={service.number} data-service-index={index} aria-labelledby={`service-title-${service.number}`}>
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
              <article key={project.name} role="listitem" className={`project-row ${activeProject === index ? "is-active" : ""}`} onMouseEnter={() => setActiveProject(index)} onFocusCapture={() => setActiveProject(index)} data-reveal>
                <button type="button" className="project-selector" aria-expanded={activeProject === index} onClick={() => setActiveProject(index)}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-content">
                    <span className="project-meta">{project.category}</span>
                    <strong>{project.name}</strong>
                    <span className="project-description">{project.description}</span>
                  </span>
                  <span className="project-year">{project.year}</span>
                </button>
                {project.href && (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label="Visit Rachel’s Concrete Kitchens">
                    <ArrowUpRightIcon />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section" aria-label="Professional identity">
          <div className="statement-line" data-reveal>SOFTWARE</div>
          <div className="statement-line" data-reveal>DEVELOPER /</div>
          <div className="statement-line statement-line--right" data-reveal><span>IT SPECIALIST</span></div>
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
            <div className="about-copy about-copy--solo">
              <span className="section-label" data-reveal>(About Me)</span>
              <h2 id="about-title" data-reveal>I care about the thinking behind a product as much as the code inside it.</h2>
              <div className="about-body" data-reveal>
                <p>That means asking better questions, understanding how people actually work and turning complex ideas into tools that feel clear, useful and dependable. I work across AI, software, websites, mobile applications and IT systems, choosing the right technology for the problem instead of forcing every project into the same shape.</p>
                <p>Based in Botswana, I build with a long-term view—products that can grow, systems people can trust and digital experiences that respect the people using them. Curiosity, clarity and craftsmanship guide how I approach every project.</p>
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
            <label><span>Your name</span><input name="name" type="text" autoComplete="name" required /></label>
            <label><span>Your email address</span><input name="email" type="email" autoComplete="email" required /></label>
            <label className="message-field"><span>Tell me about your project</span><textarea name="message" rows={3} required /></label>
            <div className="form-actions">
              <button type="submit" disabled={formStatus === "loading"}>
                <span>{formStatus === "loading" ? "Opening WhatsApp…" : "Get a quote"}</span><ArrowUpRightIcon />
              </button>
              <p className={formStatus === "error" ? "form-message is-error" : "form-message"} aria-live="polite">{formMessage}</p>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer site-footer--refined">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Explore</h3>
            {menuItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div className="footer-column footer-socials-column">
            <h3>Connect</h3>
            {socialLinks.map(([label, href]) => (
              <a className="footer-external" key={label} href={href} target="_blank" rel="noreferrer" title={label.startsWith("Discord") ? "Open Discord — username: vans_37" : undefined}>{label}</a>
            ))}
          </div>
          <div className="footer-column footer-contact">
            <h3>Reach me</h3>
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

export default AppRefined;
