let headerSwapReady = false;
let headerSwapFrame: number | null = null;

const arrowMarkup = `
  <svg class="footer-social-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 18 18 6M9 6h9v9" />
  </svg>
`;

const syncHeaderSwap = () => {
  const servicesSection = document.getElementById("services");

  if (!servicesSection) return;

  const swapLine = Math.min(118, window.innerHeight * 0.13);
  const isPastHero = servicesSection.getBoundingClientRect().top <= swapLine;
  document.body.classList.toggle("is-past-hero", isPastHero);
};

const scheduleHeaderSwap = () => {
  if (headerSwapFrame !== null) return;

  headerSwapFrame = window.requestAnimationFrame(() => {
    headerSwapFrame = null;
    syncHeaderSwap();
  });
};

const setupHeaderSwap = () => {
  const header = document.querySelector<HTMLElement>(".site-header");
  const floatingMenu = document.querySelector<HTMLButtonElement>(".floating-menu-button");

  if (!header || !floatingMenu) return;

  if (!headerSwapReady) {
    headerSwapReady = true;
    window.addEventListener("scroll", scheduleHeaderSwap, { passive: true });
    window.addEventListener("resize", scheduleHeaderSwap);
  }

  scheduleHeaderSwap();
};

const ensureHandwrittenIntro = (heroName: HTMLElement) => {
  const existing = document.querySelector<HTMLElement>(".hero-handwritten-intro");

  if (existing) return;

  const intro = document.createElement("div");
  intro.className = "hero-handwritten-intro";
  intro.setAttribute("aria-label", "Hello, I'm");
  intro.innerHTML = `
    <span class="hero-intro-script">hello,</span>
    <span class="hero-intro-im">I’m</span>
  `;

  heroName.before(intro);
};

const enhanceHeroCopy = () => {
  const heroName = document.querySelector<HTMLElement>(".hero-name");
  const nameParts = document.querySelectorAll<HTMLElement>(".hero-name > span");

  if (heroName) {
    ensureHandwrittenIntro(heroName);
  }

  if (nameParts[0] && nameParts[0].textContent !== "Evans") {
    nameParts[0].textContent = "Evans";
  }

  if (nameParts[1] && nameParts[1].textContent !== "Mudziviri") {
    nameParts[1].textContent = "Mudziviri";
  }

  const paragraph = document.querySelector<HTMLParagraphElement>(".hero-copy p");

  if (paragraph && paragraph.dataset.editorialCopy !== "true") {
    paragraph.innerHTML = [
      "I create ",
      '<span class="brush-highlight brush-highlight--one">AI-powered systems and software</span>',
      ", modern websites, mobile apps and reliable IT solutions designed to help businesses ",
      '<span class="brush-highlight brush-highlight--two">work smarter and grow</span>',
      ".",
    ].join("");

    paragraph.dataset.editorialCopy = "true";
    paragraph.classList.add("hero-editorial-copy");
  }
};

const enhanceWebsitePortfolio = () => {
  const firstProject = document.querySelector<HTMLElement>(".project-row");

  if (!firstProject || firstProject.dataset.portfolioEnhanced === "true") return;

  const description = firstProject.querySelector<HTMLElement>(".project-description");
  const link = firstProject.querySelector<HTMLAnchorElement>(".project-link");

  if (description) {
    description.textContent =
      "Selected client websites for Rachel’s Concrete Kitchens, Tshiamo Cloud, Onicorp Engineers and Sandgrouse Resort.";
  }

  if (link) {
    link.href = "https://rachel-s-concrete-kitchens.vercel.app";
    link.setAttribute("aria-label", "Visit Rachel’s Concrete Kitchens");
  }

  firstProject.dataset.portfolioEnhanced = "true";
};

const enhanceStatement = () => {
  const statement = document.querySelector<HTMLElement>(".statement-section");

  if (!statement || statement.dataset.statementEnhanced === "true") return;

  statement.innerHTML = `
    <div class="statement-line">SOFTWARE</div>
    <div class="statement-line">DEVELOPER /</div>
    <div class="statement-line statement-line--right"><span>IT SPECIALIST</span></div>
  `;
  statement.dataset.statementEnhanced = "true";
};

const enhanceFooterSocials = () => {
  const footerColumns = document.querySelectorAll<HTMLElement>(".site-footer .footer-column");
  const socialColumn = footerColumns[1];

  if (!socialColumn || socialColumn.dataset.socialsEnhanced === "true") return;

  socialColumn.classList.add("footer-socials-column");

  const socials = [
    ["Facebook", "https://www.facebook.com/share/19H7qz3KSK/?mibextid=wwXIfr"],
    ["Instagram", "https://www.instagram.com/evansmudziviri?igsh=b3Eyc3NibjNzNDky"],
    ["X / Twitter", "https://x.com/e_mudz"],
    ["Reddit", "https://www.reddit.com/u/Then-Research/s/kYpyBwunti"],
    ["Discord · vans_37", "https://discord.com/app"],
  ] as const;

  socials.forEach(([label, href]) => {
    const anchor = document.createElement("a");
    anchor.className = "footer-external";
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.innerHTML = `<span>${label}</span>${arrowMarkup}`;

    if (label.startsWith("Discord")) {
      anchor.title = "Open Discord — username: vans_37";
    }

    socialColumn.append(anchor);
  });

  socialColumn.dataset.socialsEnhanced = "true";
};

const enhancePage = () => {
  enhanceHeroCopy();
  enhanceWebsitePortfolio();
  enhanceStatement();
  enhanceFooterSocials();
  setupHeaderSwap();
};

const root = document.getElementById("root");

if (root) {
  const observer = new MutationObserver(enhancePage);
  observer.observe(root, { childList: true, subtree: true });

  queueMicrotask(enhancePage);
  window.addEventListener("load", enhancePage, { once: true });
}
