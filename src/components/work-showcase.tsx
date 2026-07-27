import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Boxes,
  Globe2,
  Layers3,
  MonitorUp,
  Sparkles,
} from 'lucide-react';
import './work-showcase.css';
import { agent_e } from './portfolio-assets/agent-e';
import { thee } from './portfolio-assets/thee';
import { thee_bi } from './portfolio-assets/thee-bi';
import { trudwell } from './portfolio-assets/trudwell';

type WebsiteProject = {
  name: string;
  category: string;
  description: string;
  outcome: string;
  url: string;
  image: string;
  secondaryImage?: string;
  accent: string;
  featured?: boolean;
};

type ProductProject = {
  name: string;
  category: string;
  description: string;
  status: string;
  logo: string;
  fit: 'contain' | 'cover';
};

const screenshotUrl = (url: string) =>
  `https://image.thum.io/get/width/1600/crop/1000/noanimate/${url}`;

const websites: WebsiteProject[] = [
  {
    name: 'SAMT Campaign Platform',
    category: 'SaaS · Campaign Operations',
    description:
      'A focused campaign workspace that brings WhatsApp, SMS and email planning, sending and delivery visibility into one product.',
    outcome: 'Unified multichannel campaign experience',
    url: 'https://samt-project.vercel.app',
    image: screenshotUrl('https://samt-project.vercel.app'),
    accent: '#8ddcff',
    featured: true,
  },
  {
    name: "Rachel's Concrete Kitchens",
    category: 'Interiors · Premium Brand Website',
    description:
      'A refined visual website for custom kitchens and fitted interiors, designed to make the craftsmanship feel considered, local and premium.',
    outcome: 'Editorial product presentation and enquiry journey',
    url: 'https://rachel-s-concrete-kitchens.vercel.app',
    image: screenshotUrl('https://rachel-s-concrete-kitchens.vercel.app'),
    accent: '#f0c55e',
    featured: true,
  },
  {
    name: 'Hybrid Project Solutions',
    category: 'Industrial · Equipment Sourcing',
    description:
      'A bold, high-contrast platform positioning Hybrid as a dependable single sourcing partner for industrial machinery and spare parts across Africa.',
    outcome: 'Clear sourcing proposition and quote pathway',
    url: 'https://hybrid-project-solutions.vercel.app',
    image: screenshotUrl('https://hybrid-project-solutions.vercel.app'),
    accent: '#f0a51e',
    featured: true,
  },
  {
    name: 'JohnBrooks Associates',
    category: 'Engineering & Development',
    description:
      'A structured corporate website presenting multidisciplinary engineering services, delivery capability and a direct path to project enquiries.',
    outcome: 'Corporate credibility and service clarity',
    url: 'https://johnbrooks.co.zw',
    image: screenshotUrl('https://johnbrooks.co.zw'),
    accent: '#d1132f',
  },
  {
    name: 'Manase Utilities',
    category: 'Irrigation & Solar',
    description:
      'A practical service website for irrigation, solar and farm-power solutions with strong trust signals and clear conversion actions.',
    outcome: 'Service discovery and site-visit enquiries',
    url: 'https://manaseutilities.co.zw',
    image: screenshotUrl('https://manaseutilities.co.zw'),
    accent: '#4ed779',
  },
  {
    name: 'Sandgrouse BnB',
    category: 'Hospitality & Direct Booking',
    description:
      'A hospitality experience built around the property, guest confidence and an easy route from discovery to direct booking.',
    outcome: 'Property storytelling and booking intent',
    url: 'https://sandgrouseresort.co.zw',
    image: screenshotUrl('https://sandgrouseresort.co.zw'),
    accent: '#ff8b36',
  },
  {
    name: 'Onicorp Engineers',
    category: 'Built Environment Consulting',
    description:
      'A premium engineering website organising technical expertise, divisions and project delivery into a confident digital presence.',
    outcome: 'Technical positioning and project enquiries',
    url: 'https://onicorpengineers.co.zw',
    image: screenshotUrl('https://onicorpengineers.co.zw'),
    accent: '#0ea58e',
  },
];

const products: ProductProject[] = [
  {
    name: 'The E Business Intelligence System',
    category: 'Business operating system',
    description:
      'An intelligence layer for documents, clients, workflows, reporting and the operational decisions behind a growing company.',
    status: 'Active development',
    logo: thee_bi,
    fit: 'contain',
  },
  {
    name: 'Agent E',
    category: 'Personal AI desktop assistant',
    description:
      'A Windows assistant for natural-language computer tasks, file organisation, storage checks and approved workflow automation.',
    status: 'Working system',
    logo: agent_e,
    fit: 'cover',
  },
  {
    name: 'TruDwell',
    category: 'Property technology',
    description:
      'A verified property marketplace and rental operations platform designed around trust between tenants and property owners.',
    status: 'Pre-launch',
    logo: trudwell,
    fit: 'contain',
  },
  {
    name: 'The E',
    category: 'Digital product ecosystem',
    description:
      'A connected family of intelligent tools and business systems built for the realities of modern African companies.',
    status: 'Evolving platform',
    logo: thee,
    fit: 'cover',
  },
];

const supportingProducts = [
  {
    name: 'The E Booking System',
    status: 'Final development',
    description: 'Guest booking and property operations for hotels, BnBs and short-stay businesses.',
  },
  {
    name: 'The E POS',
    status: 'Market-ready build',
    description: 'Offline-first checkout, stock control and retail operations for growing businesses.',
  },
];

function WebsiteCard({
  project,
  large = false,
  index,
}: {
  project: WebsiteProject;
  large?: boolean;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.72, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      className={`work-visual-card group relative overflow-hidden rounded-[1.8rem] bg-[#111315] ${
        large ? 'min-h-[520px] lg:row-span-2' : 'min-h-[360px]'
      }`}
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
        aria-label={`Visit ${project.name}`}
      >
        <img
          src={project.image}
          alt={`${project.name} website screenshot`}
          className="work-primary-image absolute inset-0 h-full w-full object-cover object-top"
        />
        {project.secondaryImage && (
          <img
            src={project.secondaryImage}
            alt=""
            aria-hidden="true"
            className="work-secondary-image absolute inset-0 h-full w-full object-cover object-top"
          />
        )}

        <div className="work-card-shade absolute inset-0" />
        <div className="work-card-grid absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
          <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            Live project
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:border-white/45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/58">{project.category}</div>
          <h3 className={`mt-3 max-w-2xl font-semibold leading-[0.98] tracking-[-0.045em] text-white ${large ? 'text-4xl sm:text-6xl' : 'text-3xl sm:text-4xl'}`}>
            {project.name}
          </h3>
          <p className={`mt-4 max-w-2xl leading-7 text-white/66 ${large ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
            {project.description}
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-white/18 pt-5 text-sm text-white/72">
            <span className="h-2 w-2 rounded-full bg-[var(--project-accent)] shadow-[0_0_18px_var(--project-accent)]" />
            {project.outcome}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

function ProductCard({ product, index }: { product: ProductProject; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.68, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="product-system-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#15171a] p-4 sm:p-5"
    >
      <div className="product-system-glow absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#090b11]">
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src={product.logo}
            alt={`${product.name} logo`}
            className={`h-full w-full transition duration-700 group-hover:scale-[1.035] ${
              product.fit === 'contain' ? 'object-contain p-7 sm:p-10' : 'object-cover'
            }`}
          />
        </div>
      </div>
      <div className="relative px-2 pb-3 pt-7 sm:px-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.19em] text-[#8ddcff]">{product.category}</span>
          <span className="rounded-full border border-[#c7ff5b]/22 bg-[#c7ff5b]/[0.06] px-3 py-1 text-[11px] font-medium text-[#d7ff86]">
            {product.status}
          </span>
        </div>
        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white">{product.name}</h3>
        <p className="mt-4 leading-7 text-white/52">{product.description}</p>
      </div>
    </motion.article>
  );
}

function WorkShowcase() {
  const featured = websites.filter((project) => project.featured);
  const clientWork = websites.filter((project) => !project.featured);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-70px' },
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <>
      <section id="work" className="scroll-mt-20 border-t border-black/10 bg-[#f0eee5] text-[#121411]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div {...reveal} className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
                <Globe2 className="h-4 w-4" />
                Selected work
              </div>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Websites, platforms and systems I’ve built.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/58 lg:justify-self-end">
              Real client websites and working products—shown through the interfaces themselves, not placeholder mockups.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
            <WebsiteCard project={featured[0]} large index={0} />
            <div className="grid gap-5">
              <WebsiteCard project={featured[1]} index={1} />
              <WebsiteCard project={featured[2]} index={2} />
            </div>
          </div>

          <motion.div {...reveal} className="mt-20 flex flex-col gap-5 border-t border-black/12 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/42">Live client websites</div>
              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">More work in production.</h3>
            </div>
            <div className="text-sm text-black/48">Engineering · Utilities · Hospitality · Built environment</div>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clientWork.map((project, index) => (
              <WebsiteCard key={project.name} project={project} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 border-t border-white/10 bg-[#0b0c0e] text-[#f4f2ea]">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="product-orbit pointer-events-none absolute -right-48 top-10 h-[34rem] w-[34rem] rounded-full border border-[#8ddcff]/10" />
          <motion.div {...reveal} className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c7ff5b]">
                <Sparkles className="h-4 w-4" />
                Products & systems
              </div>
              <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Products I’m bringing to life.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/54 lg:justify-self-end">
              Systems shaped by practical problems: business administration, property trust, unreliable connectivity and useful AI automation.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:mt-20">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>

          <motion.div
            {...reveal}
            className="relative mt-6 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] md:grid-cols-2"
          >
            {supportingProducts.map((product, index) => (
              <article
                key={product.name}
                className={`p-7 sm:p-9 ${index === 1 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                    {index === 0 ? <MonitorUp className="h-5 w-5 text-[#8ddcff]" /> : <Boxes className="h-5 w-5 text-[#f0c55e]" />}
                  </span>
                  <span className="text-xs font-medium text-[#d7ff86]">{product.status}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{product.name}</h3>
                <p className="mt-4 max-w-xl leading-7 text-white/50">{product.description}</p>
              </article>
            ))}
          </motion.div>

          <motion.div {...reveal} className="relative mt-12 flex flex-wrap items-center gap-3 text-sm text-white/42">
            <Layers3 className="h-4 w-4 text-[#c7ff5b]" />
            Product strategy, interface design, software engineering, deployment and continuous improvement.
          </motion.div>
        </div>
      </section>
    </>
  );
}

function WorkShowcasePortal() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const legacyWork = document.getElementById('work');
    const legacyProducts = document.getElementById('products');
    const capabilities = document.getElementById('capabilities');

    if (!capabilities?.parentElement) {
      return;
    }

    const mount = document.createElement('div');
    mount.id = 'enhanced-work-showcase';

    if (legacyWork) {
      legacyWork.id = 'legacy-work';
      legacyWork.setAttribute('hidden', '');
    }

    if (legacyProducts) {
      legacyProducts.id = 'legacy-products';
      legacyProducts.setAttribute('hidden', '');
    }

    capabilities.parentElement.insertBefore(mount, capabilities);
    setHost(mount);

    return () => {
      setHost(null);
      mount.remove();

      if (legacyWork) {
        legacyWork.id = 'work';
        legacyWork.removeAttribute('hidden');
      }

      if (legacyProducts) {
        legacyProducts.id = 'products';
        legacyProducts.removeAttribute('hidden');
      }
    };
  }, []);

  return host ? createPortal(<WorkShowcase />, host) : null;
}

export default WorkShowcasePortal;
