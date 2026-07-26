import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  ServerCog,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  shortUrl: string;
  services: string[];
  number: string;
  visualClass: string;
  accentClass: string;
};

type Product = {
  name: string;
  status: string;
  description: string;
  platform: string;
  icon: LucideIcon;
};

type Capability = {
  title: string;
  description: string;
  areas: string[];
  icon: LucideIcon;
};

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Experience', href: '#experience' },
];

const clientProjects: Project[] = [
  {
    name: 'JohnBrooks Engineering',
    category: 'Engineering & Industrial',
    description:
      'A professional corporate website that presents JohnBrooks’ engineering services, sector expertise and project capabilities with a clear path for enquiries.',
    url: 'https://johnbrooks.co.zw',
    shortUrl: 'johnbrooks.co.zw',
    services: ['UX direction', 'Responsive development', 'SEO & deployment'],
    number: '01',
    visualClass: 'from-[#d9ff58] via-[#a7ea45] to-[#17220f]',
    accentClass: 'bg-[#d9ff58] text-[#10140d]',
  },
  {
    name: 'Manase Utilities',
    category: 'Utilities & Infrastructure',
    description:
      'A structured business website built to communicate infrastructure services, company credibility and contact information across desktop and mobile devices.',
    url: 'https://manaseutilities.co.zw',
    shortUrl: 'manaseutilities.co.zw',
    services: ['Information architecture', 'Web development', 'Domain migration'],
    number: '02',
    visualClass: 'from-[#f0c55e] via-[#d88a3d] to-[#2a150c]',
    accentClass: 'bg-[#f0c55e] text-[#18110a]',
  },
  {
    name: 'Sandgrouse BnB',
    category: 'Hospitality & Direct Booking',
    description:
      'A hospitality website designed around property presentation, guest confidence and direct booking enquiries for a self-catering accommodation business.',
    url: 'https://sandgrouseresort.co.zw',
    shortUrl: 'sandgrouseresort.co.zw',
    services: ['Hospitality UX', 'Booking journey', 'Maps & enquiries'],
    number: '03',
    visualClass: 'from-[#f5d8bd] via-[#d59a78] to-[#3f221d]',
    accentClass: 'bg-[#f5d8bd] text-[#2d1915]',
  },
  {
    name: 'Onicorp Engineers',
    category: 'Engineering & Consulting',
    description:
      'A modern engineering company website that organises technical services, business information and contact channels into a credible digital presence.',
    url: 'https://onicorpengineers.co.zw',
    shortUrl: 'onicorpengineers.co.zw',
    services: ['Visual system', 'Frontend engineering', 'Hosting & email setup'],
    number: '04',
    visualClass: 'from-[#8ddcff] via-[#2d79af] to-[#111a2d]',
    accentClass: 'bg-[#8ddcff] text-[#0e1822]',
  },
];

const products: Product[] = [
  {
    name: 'TruDwell',
    status: 'Pre-launch',
    description:
      'A cross-platform property marketplace and rental management product focused on verified listings, trust, communication and end-to-end tenancy workflows.',
    platform: 'Android · iOS · Web platform',
    icon: Smartphone,
  },
  {
    name: 'The E Booking System',
    status: 'Final development',
    description:
      'A booking and property operations system for hotels, BnBs and short-stay operators, covering availability, reservations and administrative workflows.',
    platform: 'Guest booking · Operations dashboard',
    icon: MonitorSmartphone,
  },
  {
    name: 'The E POS',
    status: 'Market-ready build',
    description:
      'An offline-first point-of-sale and retail operations system designed for dependable checkout, stock control, reporting and multi-branch growth.',
    platform: 'Android POS · Web management',
    icon: Layers3,
  },
];

const capabilities: Capability[] = [
  {
    title: 'Product & Software Engineering',
    description:
      'Designing and delivering complete software products from requirements and architecture through implementation, testing and production deployment.',
    areas: [
      'Full-stack web applications',
      'Cross-platform mobile applications',
      'API and integration architecture',
      'Real-time and workflow-driven systems',
    ],
    icon: Code2,
  },
  {
    title: 'Cloud & Platform Engineering',
    description:
      'Building secure, maintainable deployment environments and connecting the infrastructure required to operate modern digital services.',
    areas: [
      'Cloud deployment architecture',
      'Containerised application delivery',
      'Reliability, monitoring and recovery',
      'Domain, SSL and business email infrastructure',
    ],
    icon: CloudCog,
  },
  {
    title: 'Data, AI & Automation',
    description:
      'Applying data engineering, AI services and automation to reduce manual work and create more responsive business systems.',
    areas: [
      'Conversational and language AI',
      'Business workflow automation',
      'Relational data modelling',
      'Operational reporting and analytics',
    ],
    icon: BrainCircuit,
  },
  {
    title: 'Cybersecurity & IT Systems',
    description:
      'Supporting software and infrastructure with practical security, access control, systems administration and structured technical troubleshooting.',
    areas: [
      'Authentication and access control',
      'Secure deployment practices',
      'Networking and systems administration',
      'Technical support and incident diagnosis',
    ],
    icon: ShieldCheck,
  },
];

const technologyGroups = [
  {
    label: 'Application engineering',
    value: 'TypeScript, React, Next.js, Node.js, NestJS, Flutter and Dart',
  },
  {
    label: 'Data and backend systems',
    value: 'PostgreSQL, Supabase, Firebase, REST APIs and event-driven services',
  },
  {
    label: 'Cloud and delivery',
    value: 'Docker, AWS, Vercel, Linux, Nginx and automated deployment pipelines',
  },
  {
    label: 'AI and intelligent systems',
    value: 'LLM integration, NLP, speech workflows, automation and AI-assisted operations',
  },
];

const education = [
  {
    qualification: 'Diploma in Computer Science and Cybersecurity',
    focus: 'Software development, computing systems, networks and cybersecurity foundations.',
  },
  {
    qualification: 'Diploma in Information Technology',
    focus: 'Information systems, technical support, networking, databases and IT operations.',
  },
];

const experience = [
  {
    role: 'Software Developer',
    organisation: 'VansSoftwareLab',
    period: '2022 — Present',
    summary:
      'Designing, building and deploying websites, mobile applications, business systems and AI-enabled software for organisations and emerging products.',
  },
  {
    role: 'Software Developer',
    organisation: 'Padariro Entertainment Studios',
    period: '2020 — 2022',
    summary:
      'Developed internal software tools, automated business workflows and supported the organisation’s technical operations and digital systems.',
  },
];

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0c0e] text-[#f4f2ea] selection:bg-[#c7ff5b] selection:text-[#11140d]">
      <div className="fixed inset-0 -z-20 bg-[#0b0c0e]" />
      <div className="portfolio-grid fixed inset-0 -z-10 opacity-40" />
      <div className="portfolio-glow fixed -right-48 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0c0e]/82 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Evans Mudziviri home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold transition group-hover:border-[#c7ff5b]/60 group-hover:text-[#c7ff5b]">
              EM
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-white/80 sm:block">Evans Mudziviri</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/58 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:evans@vanssoftwarelab.com"
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.05]"
            >
              Start a conversation
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0b0c0e] px-5 py-6 lg:hidden">
            <nav className="mx-auto flex max-w-[1400px] flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg text-white/75 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:evans@vanssoftwarelab.com"
                className="mt-3 rounded-xl bg-[#c7ff5b] px-4 py-3 text-center font-semibold text-[#11140d]"
              >
                Start a conversation
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-28">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                <span className="h-px w-10 bg-[#c7ff5b]" />
                Software engineering
                <span className="text-white/20">/</span>
                Mobile
                <span className="text-white/20">/</span>
                Cloud & AI systems
              </div>

              <h1 className="max-w-5xl text-balance text-[clamp(3.3rem,8vw,7.8rem)] font-semibold leading-[0.89] tracking-[-0.065em] text-[#f4f2ea]">
                Engineering digital products for the real world.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
                I’m Evans Mudziviri, a software engineer based in Botswana. I design and build web platforms,
                mobile applications, cloud systems and intelligent business software—from early requirements to
                production delivery.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c7ff5b] px-6 py-3.5 font-semibold text-[#10140c] transition hover:-translate-y-0.5 hover:bg-[#d7ff86]"
                >
                  View selected work
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/26775377360"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.04]"
                >
                  Discuss a project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
                <div>
                  <div className="text-2xl font-semibold tracking-tight sm:text-3xl">4</div>
                  <div className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">Live business websites</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight sm:text-3xl">3</div>
                  <div className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">Products nearing launch</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold tracking-tight sm:text-3xl">2</div>
                  <div className="mt-1 text-xs leading-5 text-white/45 sm:text-sm">Technology diplomas</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[500px] lg:justify-self-end"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-[#c7ff5b]/[0.05] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#15171a] p-3 shadow-2xl shadow-black/40">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#21252a]">
                  <img
                    src="/IMG_1985.jpeg"
                    alt="Evans Mudziviri"
                    className="h-full w-full object-cover object-top grayscale-[12%] contrast-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                      <MapPin className="h-4 w-4 text-[#c7ff5b]" />
                      Botswana · Available internationally
                    </div>
                    <p className="mt-3 max-w-sm text-xl font-medium leading-7 text-white sm:text-2xl">
                      Practical engineering, thoughtful design and dependable delivery.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                    <ServerCog className="h-5 w-5 text-[#c7ff5b]" />
                    <div className="mt-4 text-sm font-medium">End-to-end delivery</div>
                    <div className="mt-1 text-xs leading-5 text-white/42">Architecture to deployment</div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                    <Database className="h-5 w-5 text-[#c7ff5b]" />
                    <div className="mt-4 text-sm font-medium">Business systems</div>
                    <div className="mt-1 text-xs leading-5 text-white/42">Data, workflows and operations</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="border-t border-white/10 bg-[#f0eee5] text-[#121411]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">Selected client work</div>
                <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Live work, not placeholder projects.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-black/58 lg:justify-self-end">
                A selection of websites currently serving real organisations. Each project combines information
                architecture, responsive engineering, deployment and the practical infrastructure required to keep a
                business online.
              </p>
            </motion.div>

            <div className="mt-16 space-y-6 lg:mt-24">
              {clientProjects.map((project, index) => (
                <motion.article
                  key={project.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.05 }}
                  className="group grid overflow-hidden rounded-[2rem] border border-black/10 bg-[#e8e5dc] lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`relative min-h-[330px] overflow-hidden bg-gradient-to-br ${project.visualClass} p-6 sm:min-h-[420px] sm:p-10`}
                    aria-label={`Visit ${project.name}`}
                  >
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:40px_40px]" />
                    <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full border border-white/30" />
                    <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-full border border-white/20" />

                    <div className="relative flex items-center justify-between">
                      <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${project.accentClass}`}>
                        Live website
                      </span>
                      <span className="text-sm font-semibold text-white/70">{project.number}</span>
                    </div>

                    <div className="absolute inset-x-6 bottom-6 sm:inset-x-10 sm:bottom-10">
                      <div className="overflow-hidden rounded-2xl border border-white/25 bg-black/55 shadow-2xl backdrop-blur-md transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-0.6deg]">
                        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                          <div className="ml-2 truncate rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/55">
                            {project.shortUrl}
                          </div>
                        </div>
                        <div className="p-6 sm:p-8">
                          <div className="text-xs uppercase tracking-[0.2em] text-white/45">{project.category}</div>
                          <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                            {project.name}
                          </div>
                          <div className="mt-8 h-1.5 w-24 rounded-full bg-white/75" />
                          <div className="mt-3 h-1.5 w-40 rounded-full bg-white/25" />
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">{project.category}</div>
                      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.name}</h3>
                      <p className="mt-5 max-w-xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
                        {project.description}
                      </p>

                      <div className="mt-8 space-y-3 border-t border-black/10 pt-6">
                        {project.services.map((service) => (
                          <div key={service} className="flex items-center gap-3 text-sm text-black/65">
                            <CheckCircle2 className="h-4 w-4" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-10 inline-flex w-fit items-center gap-2 border-b border-black pb-1 text-sm font-semibold transition hover:gap-3"
                    >
                      Visit live website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="border-t border-white/10 bg-[#0b0c0e]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <motion.div {...reveal} className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">Products nearing launch</div>
                <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Software built beyond the brochure website.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/55">
                Active products combining mobile interfaces, operational dashboards, data architecture and complex
                business workflows.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.article
                    key={product.name}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15171a] p-7 sm:p-8"
                  >
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#c7ff5b]/[0.035] transition duration-500 group-hover:bg-[#c7ff5b]/[0.07]" />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-5 w-5 text-[#c7ff5b]" />
                        </div>
                        <span className="rounded-full border border-[#c7ff5b]/25 bg-[#c7ff5b]/[0.07] px-3 py-1.5 text-xs font-medium text-[#d7ff86]">
                          {product.status}
                        </span>
                      </div>

                      <h3 className="mt-14 text-3xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                      <p className="mt-5 text-base leading-7 text-white/52">{product.description}</p>

                      <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/42">{product.platform}</div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="capabilities" className="border-t border-black/10 bg-[#d8d2c5] text-[#11130f]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45">Engineering capabilities</div>
                <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Serious capability, clearly defined.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-black/58 lg:justify-self-end lg:pt-10">
                My work covers the technical lifecycle of modern software: product structure, application engineering,
                data, integrations, infrastructure, security and operational support.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 lg:mt-24 lg:grid-cols-2">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <motion.article
                    key={capability.title}
                    {...reveal}
                    transition={{ ...reveal.transition, delay: index * 0.06 }}
                    className="bg-[#e7e2d7] p-7 sm:p-10 lg:p-12"
                  >
                    <Icon className="h-7 w-7" />
                    <h3 className="mt-9 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{capability.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-black/58">{capability.description}</p>
                    <div className="mt-8 space-y-3 border-t border-black/10 pt-6">
                      {capability.areas.map((area) => (
                        <div key={area} className="flex items-start gap-3 text-sm leading-6 text-black/67">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div {...reveal} className="mt-20 grid gap-8 border-t border-black/15 pt-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">Technology environment</h3>
                <p className="mt-4 max-w-md leading-7 text-black/55">
                  Technologies are selected according to product requirements, reliability, maintainability and deployment context.
                </p>
              </div>
              <div className="divide-y divide-black/10 border-y border-black/10">
                {technologyGroups.map((group) => (
                  <div key={group.label} className="grid gap-2 py-5 sm:grid-cols-[0.38fr_0.62fr] sm:gap-8">
                    <div className="text-sm font-semibold">{group.label}</div>
                    <div className="text-sm leading-6 text-black/58">{group.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10 bg-[#0b0c0e]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
              <motion.div {...reveal}>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Experience
                </div>
                <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Professional work.</h2>

                <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                  {experience.map((item) => (
                    <article key={`${item.organisation}-${item.period}`} className="py-7">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{item.role}</h3>
                          <div className="mt-1 text-sm text-[#c7ff5b]">{item.organisation}</div>
                        </div>
                        <div className="text-sm text-white/40">{item.period}</div>
                      </div>
                      <p className="mt-5 max-w-2xl leading-7 text-white/50">{item.summary}</p>
                    </article>
                  ))}
                </div>
              </motion.div>

              <motion.div {...reveal}>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </div>
                <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">Technical foundation.</h2>

                <div className="mt-12 space-y-4">
                  {education.map((item, index) => (
                    <article key={item.qualification} className="rounded-[1.6rem] border border-white/10 bg-[#15171a] p-7 sm:p-8">
                      <div className="flex gap-5">
                        <div className="text-sm font-semibold text-[#c7ff5b]">0{index + 1}</div>
                        <div>
                          <h3 className="text-xl font-semibold leading-7 sm:text-2xl">{item.qualification}</h3>
                          <p className="mt-4 leading-7 text-white/48">{item.focus}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/10 bg-[#c7ff5b] text-[#10140c]">
          <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-black/50">Contact</div>
                <h2 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[6.7rem]">
                  Have a serious product or technology challenge?
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="text-lg leading-8 text-black/60">
                  I’m available for selected software projects, product development, technical collaboration and professional opportunities.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="mailto:evans@vanssoftwarelab.com"
                    className="inline-flex items-center justify-between rounded-2xl bg-[#10140c] px-5 py-4 font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-3"><Mail className="h-5 w-5" /> evans@vanssoftwarelab.com</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/26775377360"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-2xl border border-black/25 px-5 py-4 font-semibold transition hover:-translate-y-0.5 hover:bg-black/[0.05]"
                  >
                    <span className="flex items-center gap-3"><Phone className="h-5 w-5" /> +267 75 377 360</span>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0c0e]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <div className="text-sm font-medium">Evans Mudziviri</div>
            <div className="mt-1 text-sm text-white/40">Software engineer · Botswana</div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mudzivirievans"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/evans-mudziviri-b9b45a161"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/55 transition hover:border-white/30 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="text-sm text-white/35">© {new Date().getFullYear()} Evans Mudziviri</div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
