import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const projects = [
  {
    number: "01",
    eyebrow: "AI customer engagement",
    title: "TheE AI",
    description:
      "A WhatsApp-first customer engagement platform designed to help African businesses qualify leads, support customers, automate follow-ups, and turn conversations into structured business operations.",
    outcome: "Product strategy, UX architecture, AI workflows and full-stack development",
    tags: ["Conversational AI", "WhatsApp", "CRM", "Automation"],
    status: "In development",
  },
  {
    number: "02",
    eyebrow: "Property technology",
    title: "truDwell",
    description:
      "A trust-first rental marketplace and property management system for Southern Africa, bringing verified listings, tenant journeys, digital leases, payments, maintenance and reputation into one product.",
    outcome: "Marketplace design, trust systems, product architecture and mobile experience",
    tags: ["Flutter", "Next.js", "PostgreSQL", "Identity"],
    status: "In development",
  },
  {
    number: "03",
    eyebrow: "Client delivery",
    title: "Business platforms",
    description:
      "Professional websites and operational systems delivered for engineering, hospitality and service businesses—covering positioning, responsive design, booking flows, business email, deployment and support.",
    outcome: "End-to-end delivery from requirements to production",
    tags: ["Web design", "Booking", "SEO", "Cloud"],
    status: "Delivered",
  },
];

const capabilities = [
  {
    icon: Layers3,
    title: "Product strategy & UX",
    description:
      "Turning an idea or business problem into a clear product direction, user journey, feature system and build plan.",
    items: ["Discovery", "Information architecture", "Mobile-first UX", "Product roadmaps"],
  },
  {
    icon: Globe2,
    title: "Web platforms",
    description:
      "High-quality websites, dashboards and web applications designed for speed, trust, conversion and maintainability.",
    items: ["React & Next.js", "Admin dashboards", "APIs & databases", "Cloud deployment"],
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    description:
      "Cross-platform products built around the real conditions users face, including mobile-first and low-connectivity markets.",
    items: ["Flutter", "Android & iOS", "Offline-first flows", "Push notifications"],
  },
  {
    icon: Bot,
    title: "AI & automation",
    description:
      "Practical AI systems that reduce repetitive work, improve response speed and connect customer conversations to operations.",
    items: ["AI agents", "Workflow automation", "System integrations", "Business intelligence"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Clarify the real business problem, users, constraints and success criteria before choosing technology.",
  },
  {
    number: "02",
    title: "Shape",
    description: "Define the product structure, experience, visual direction and smallest valuable release.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the product in focused stages with practical feedback, quality checks and visible progress.",
  },
  {
    number: "04",
    title: "Launch & improve",
    description: "Deploy, observe real usage, support the team and keep improving what creates the most value.",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-[#080a0f] text-white">
      <SiteHeader />

      <main>
        <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:pb-36 lg:pt-44">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="portfolio-grid absolute inset-0 opacity-35" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/60 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                Independent software developer & product builder
              </div>

              <h1 className="max-w-5xl text-[clamp(3.25rem,11vw,8rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white">
                I build digital products that move
                <span className="block bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  businesses forward.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                I help ambitious founders and businesses turn complex ideas into clear, useful web platforms, mobile apps, AI systems and operational software.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:evans@vanssoftwarelab.com?subject=Project%20enquiry"
                  className="button-primary"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="#work" className="button-secondary">
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-7">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent" />
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/35">Currently</p>
                  <p className="mt-2 text-sm font-medium text-white">Building TheE AI & selected client products</p>
                </div>
                <Sparkles className="h-5 w-5 text-indigo-300" />
              </div>

              <div className="grid gap-5 py-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">5+</p>
                  <p className="mt-1 text-sm text-white/40">Years building and supporting digital products</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-white">End-to-end</p>
                  <p className="mt-1 text-sm text-white/40">From product thinking and UX to deployment</p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-300" />
                Based in Botswana · Working across Southern Africa and remotely
              </div>
            </aside>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-4">
            {["Web platforms", "Mobile products", "AI systems", "Business automation"].map((item) => (
              <div key={item} className="bg-[#0a0c11] px-4 py-4 text-center text-xs font-medium text-white/40 sm:py-5 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="scroll-mt-28 border-t border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="section-title">Products built around real problems.</h2>
              </div>
              <p className="section-copy">
                A mix of original products and client delivery, shaped for the way businesses and users actually operate.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.number} className="project-card group">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-white/25">{project.number}</span>
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${project.status === "Delivered" ? "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-200" : "border-indigo-300/20 bg-indigo-300/[0.08] text-indigo-200"}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-16">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-200/65">{project.eyebrow}</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white">{project.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/48">{project.description}</p>
                  </div>
                  <div className="mt-8 border-t border-white/[0.08] pt-5">
                    <p className="text-xs leading-5 text-white/35">{project.outcome}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-lg bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-white/45">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 sm:p-8 lg:p-12">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2 className="section-title">One partner from idea to launch.</h2>
              </div>
              <p className="section-copy">
                Strategy, experience design and engineering stay connected, so the final product feels coherent instead of assembled from separate pieces.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <article key={capability.title} className="bg-[#0c0e14] p-6 sm:p-8">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-indigo-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{capability.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">{capability.description}</p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {capability.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <Check className="h-3.5 w-3.5 text-emerald-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-28 border-y border-white/[0.07] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Working process</p>
                <h2 className="section-title">Clarity before complexity.</h2>
              </div>
              <p className="section-copy">
                The goal is not to add more technology. It is to create the simplest strong system that solves the right problem and can grow responsibly.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <article key={step.number} className="border-l border-white/10 pl-5">
                  <span className="text-xs font-semibold tracking-[0.2em] text-indigo-200/55">{step.number}</span>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/42">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#10131a]">
              <img
                src="/IMG_1985.jpeg"
                alt="Evans Mudziviri"
                className="absolute inset-0 h-full w-full object-cover object-center grayscale transition duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Behind the work</p>
                <p className="mt-2 text-lg font-medium text-white">A builder focused on useful technology, long-term systems and African business realities.</p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-indigo-400/[0.1] via-white/[0.025] to-emerald-300/[0.06] p-6 sm:p-10 lg:p-12">
              <div>
                <p className="eyebrow">About Evans</p>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl">
                  I care about the thinking behind the interface.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
                  My work sits between software engineering, product design and business problem-solving. I am especially interested in systems that make modern technology practical for businesses in Africa—not just impressive in a demo.
                </p>
              </div>
              <Link to="/about" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-200">
                Read my full story
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white px-6 py-12 text-black sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="contact-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">Have a serious idea?</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Let’s turn it into something people can use.
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-6 text-black/55 sm:text-base">
                  Share the problem, the users and what success should look like. I will help you shape the strongest practical path forward.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href="mailto:evans@vanssoftwarelab.com?subject=Project%20enquiry" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                  <Mail className="h-4 w-4" />
                  evans@vanssoftwarelab.com
                </a>
                <a href="https://wa.me/26775377360" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-black/15 px-5 text-sm font-semibold text-black transition-colors hover:bg-black/[0.04]">
                  WhatsApp me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-[#0b0d12]/85 p-1.5 shadow-2xl backdrop-blur-xl md:flex">
        <a href="#work" className="rounded-full px-3 py-2 text-xs text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white">Work</a>
        <a href="#services" className="rounded-full px-3 py-2 text-xs text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white">Services</a>
        <a href="#process" className="rounded-full px-3 py-2 text-xs text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white">Process</a>
        <Link to="/about" className="rounded-full px-3 py-2 text-xs text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white">About</Link>
        <a href="#contact" className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-black">Contact</a>
      </div>

      <SiteFooter />
    </div>
  );
}
