import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { thee_booking } from './portfolio-assets/thee-booking';
import { thee_pos } from './portfolio-assets/thee-pos';
import './portfolio-content-adjustments.css';

const supportingSystems = [
  {
    name: 'The E Booking System',
    category: 'Booking & reservations platform',
    status: 'Final development',
    description: 'Guest booking and property operations for hotels, BnBs and short-stay businesses.',
    logo: thee_booking,
    className: 'supporting-logo-card--booking',
  },
  {
    name: 'The E POS',
    category: 'Point of sale software',
    status: 'Market-ready build',
    description: 'Offline-first checkout, stock control and retail operations for growing businesses.',
    logo: thee_pos,
    className: 'supporting-logo-card--pos',
  },
];

function PortfolioContentAdjustments() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let aboutParagraph: HTMLParagraphElement | null = null;
    let educationCard: HTMLElement | null = null;
    let supportingGrid: HTMLElement | null = null;
    let logoMount: HTMLDivElement | null = null;
    const hiddenSupportingCards: HTMLElement[] = [];

    const applyAdjustments = () => {
      if (!aboutParagraph) {
        aboutParagraph = Array.from(document.querySelectorAll<HTMLParagraphElement>('#about p')).find((paragraph) =>
          paragraph.textContent?.trim().startsWith('Technology is the work I do'),
        ) ?? null;

        if (aboutParagraph) {
          aboutParagraph.hidden = true;
          aboutParagraph.setAttribute('aria-hidden', 'true');
        }
      }

      if (!educationCard) {
        const educationCards = document.querySelectorAll<HTMLElement>('#education article');
        educationCard = educationCards.item(1);

        if (educationCard) {
          educationCard.hidden = true;
          educationCard.setAttribute('aria-hidden', 'true');
        }
      }

      if (!logoMount) {
        supportingGrid = document.querySelector<HTMLElement>('.supporting-product-grid');

        if (supportingGrid) {
          supportingGrid.querySelectorAll<HTMLElement>(':scope > article').forEach((card) => {
            card.hidden = true;
            card.setAttribute('aria-hidden', 'true');
            hiddenSupportingCards.push(card);
          });

          logoMount = document.createElement('div');
          logoMount.className = 'supporting-product-logo-grid';
          supportingGrid.classList.add('is-logo-upgraded');
          supportingGrid.appendChild(logoMount);
          setHost(logoMount);
        }
      }
    };

    applyAdjustments();

    const observer = new MutationObserver(applyAdjustments);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      setHost(null);

      if (aboutParagraph) {
        aboutParagraph.hidden = false;
        aboutParagraph.removeAttribute('aria-hidden');
      }

      if (educationCard) {
        educationCard.hidden = false;
        educationCard.removeAttribute('aria-hidden');
      }

      hiddenSupportingCards.forEach((card) => {
        card.hidden = false;
        card.removeAttribute('aria-hidden');
      });

      supportingGrid?.classList.remove('is-logo-upgraded');
      logoMount?.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(
    <>
      {supportingSystems.map((system) => (
        <article key={system.name} className={`supporting-logo-card ${system.className}`}>
          <div className="supporting-logo-stage">
            <div className="supporting-logo-grid" aria-hidden="true" />
            <img src={system.logo} alt={`${system.name} logo`} />
          </div>
          <div className="supporting-logo-content">
            <div className="supporting-logo-meta">
              <span>{system.category}</span>
              <strong>{system.status}</strong>
            </div>
            <h3>{system.name}</h3>
            <p>{system.description}</p>
          </div>
        </article>
      ))}
    </>,
    host,
  );
}

export default PortfolioContentAdjustments;
