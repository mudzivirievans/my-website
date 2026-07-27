import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
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
  accent: string;
  featured?: boolean;
};

type ProductProject = {
  name: string;
  category: string;
  description: string;
  status: string;
  logo: string;
  surface: 'midnight' | 'cosmic' | 'paper' | 'electric';
};

const screenshotUrl = (url: string) =>
  `https://image.thum.io/get/width/1600/crop/1000/noanimate/${url}`;

const websites: WebsiteProject[] = [
  {
    name: 'SAMT Campaign Platform',
    category: 'SaaS · Campaign operations',
    description:
      'A focused workspace that brings WhatsApp, SMS and email campaign planning, sending and delivery visibility into one product.',
    outcome: 'Unified multichannel campaign experience',
    url: 'https://samt-project.vercel.app',
    image: screenshotUrl('https://samt-project.vercel.app'),
    accent: '#8ddcff',
    featured: true,
  },
  {
    name: "Rachel's Concrete Kitchens",
    category: 'Interiors · Premium brand website',
    description:
      'A refined visual website for custom kitchens and fitted interiors, designed to make the craftsmanship feel considered, local and premium.',
    outcome: 'Editorial presentation and enquiry journey',
    url: 'https://rachel-s-concrete-kitchens.vercel.app',
    image: screenshotUrl('https://rachel-s-concrete-kitchens.vercel.app'),
    accent: '#f0c55e',
    featured: true,
  },
  {
    name: 'Hybrid Project Solutions',
    category: 'Industrial · Equipment sourcing',
    description:
      'A bold platform positioning Hybrid as a dependable sourcing partner for industrial machinery and spare parts across Africa.',
    outcome: 'Clear sourcing proposition and quote pathway',
    url: 'https://hybrid-project-solutions.vercel.app',
    image: screenshotUrl('https://hybrid-project-solutions.vercel.app'),
    accent: '#f0a51e',
    featured: true,
  },
  {
    name: 'JohnBrooks Associates',
    category: 'Engineering & development',
    description:
      'A structured corporate website presenting multidisciplinary engineering services, delivery capability and direct project enquiries.',
    outcome: 'Corporate credibility and service clarity',
    url: 'https://johnbrooks.co.zw',
    image: screenshotUrl('https://johnbrooks.co.zw'),
    accent: '#d1132f',
  },
  {
    name: 'Manase Utilities',
    category: 'Irrigation & solar',
    description:
      'A practical service website for irrigation, solar and farm-power solutions with strong trust signals and clear conversion actions.',
    outcome: 'Service discovery and site-visit enquiries',
    url: 'https://manaseutilities.co.zw',
    image: screenshotUrl('https://manaseutilities.co.zw'),
    accent: '#4ed779',
  },
  {
    name: 'Sandgrouse BnB',
    category: 'Hospitality & direct booking',
    description:
      'A hospitality experience built around the property, guest confidence and a simple route from discovery to direct booking.',
    outcome: 'Property storytelling and booking intent',
    url: 'https://sandgrouseresort.co.zw',
    image: screenshotUrl('https://sandgrouseresort.co.zw'),
    accent: '#ff8b36',
  },
  {
    name: 'Onicorp Engineers',
    category: 'Built environment consulting',
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
    surface: 'midnight',
  },
  {
    name: 'Agent E',
    category: 'Personal AI desktop assistant',
    description:
      'A Windows assistant for natural-language computer tasks, file organisation, storage checks and approved workflow automation.',
    status: 'Working system',
    logo: agent_e,
    surface: 'cosmic',
  },
  {
    name: 'TruDwell',
    category: 'Property technology',
    description:
      'A verified property marketplace and rental operations platform designed around trust between tenants and property owners.',
    status: 'Pre-launch',
    logo: trudwell,
    surface: 'paper',
  },
  {
    name: 'The E',
    category: 'Digital product ecosystem',
    description:
      'A connected family of intelligent tools and business systems built for the realities of modern African companies.',
    status: 'Evolving platform',
    logo: thee,
    surface: 'electric',
  },
];

const supportingProducts = [
  {
    name: 'The E Booking System',
    status: 'Final development',
    description: 'Guest booking and property operations for hotels, BnBs and short-stay businesses.',
    icon: MonitorUp,
    accent: '#8ddcff',
  },
  {
    name: 'The E POS',
    status: 'Market-ready build',
    description: 'Offline-first checkout, stock control and retail operations for growing businesses.',
    icon: Boxes,
    accent: '#f0c55e',
  },
];

const initialsFor = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

function WebsiteCard({
  project,
  index,
  lead = false,
}: {
  project: WebsiteProject;
  index: number;
  lead?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.68, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className={`project-case-card ${lead ? 'project-case-card--lead' : ''}`}
      style={{ '--project-accent': project.accent } as CSSProperties}
    >
      <a href={project.url} target="_blank" rel="noreferrer" className="project-case-link">
        <div className="project-preview-frame">
          <div className="project-browser-bar" aria-hidden="true">
            <span className="project-browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="project-browser-domain">{domain}</span>
          </div>

          <div className="project-preview-canvas">
            <div className="project-preview-placeholder" aria-hidden="true">
              <span>{initialsFor(project.name)}</span>
              <small>{imageFailed ? 'Live website' : 'Loading live preview'}</small>
            </div>
            {!imageFailed && (
              <img
                src={project.image}
                alt={`${project.name} website interface`}
                className={`project-preview-image ${imageLoaded ? 'is-loaded' : ''}`}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageFailed(true)}
              />
            )}
            <div className="project-preview-topline">
              <span>Live project</span>
              <span className="project-open-button" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>

        <div className="project-case-content">
          <div className="project-case-category">{project.category}</div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-case-outcome">
            <span />
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
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.66, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="product-editorial-card"
    >
      <div className={`product-logo-stage product-logo-stage--${product.surface}`}>
        <div className="product-logo-orbit" aria-hidden="true" />
        <img src={product.logo} alt={`${product.name} logo`} className="product-editorial-logo" />
      </div>

      <div className="product-editorial-content">
        <div className="product-editorial-meta">
          <span>{product.category}</span>
          <strong>{product.status}</strong>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </motion.article>
  );
}

function WorkShowcase() {
  const featured = websites.filter((project) => project.featured);
  const clientWork = websites.filter((project) => !project.featured);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-70px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <>
      <section id="work" className="work-showcase-section">
        <div className="showcase-shell">
          <motion.div {...reveal} className="showcase-intro showcase-intro--light">
            <div>
              <div className="showcase-kicker">
                <Globe2 />
                Selected work
              </div>
              <h2 className="showcase-title">Digital work built for real organisations.</h2>
            </div>
            <p className="showcase-copy">
              Live websites and working platforms, presented as clear case studies instead of text layered over busy screenshots.
            </p>
          </motion.div>

          <div className="featured-projects-stack">
            <WebsiteCard project={featured[0]} index={0} lead />
            <div className="featured-projects-pair">
              <WebsiteCard project={featured[1]} index={1} />
              <WebsiteCard project={featured[2]} index={2} />
            </div>
          </div>

          <motion.div {...reveal} className="client-work-heading">
            <div>
              <span>Live client websites</span>
              <h3>More work in production.</h3>
            </div>
            <p>Engineering · Utilities · Hospitality · Built environment</p>
          </motion.div>

          <div className="client-project-grid">
            {clientWork.map((project, index) => (
              <WebsiteCard key={project.name} project={project} index={index + 3} />
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="products-showcase-section">
        <div className="showcase-shell products-showcase-shell">
          <div className="products-atmosphere" aria-hidden="true" />
          <motion.div {...reveal} className="showcase-intro showcase-intro--dark">
            <div>
              <div className="showcase-kicker showcase-kicker--lime">
                <Sparkles />
                Products & systems
              </div>
              <h2 className="showcase-title">Products shaped by practical problems.</h2>
            </div>
            <p className="showcase-copy">
              Business administration, property trust, unreliable connectivity and useful AI automation—each product begins with a problem worth solving.
            </p>
          </motion.div>

          <div className="product-editorial-grid">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>

          <motion.div {...reveal} className="supporting-product-grid">
            {supportingProducts.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className="supporting-product-card">
                  <div className="supporting-product-topline">
                    <span className="supporting-product-icon" style={{ color: product.accent }}>
                      <Icon />
                    </span>
                    <strong>{product.status}</strong>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </article>
              );
            })}
          </motion.div>

          <motion.div {...reveal} className="product-delivery-note">
            <Layers3 />
            <span>Product strategy, interface design, engineering, deployment and continuous improvement.</span>
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
