let headerSwapReady = false;
let headerSwapFrame: number | null = null;

const syncHeaderSwap = () => {
  const servicesSection = document.getElementById("services");

  if (!servicesSection) return;

  const swapLine = Math.min(128, window.innerHeight * 0.14);
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
  intro.setAttribute("aria-label", "Hey, I'm");
  intro.innerHTML = `
    <svg viewBox="0 0 230 76" aria-hidden="true" focusable="false">
      <text class="hero-script-text" x="5" y="53">Hey, I’m</text>
      <path class="hero-script-flourish" d="M126 62C151 60 178 58 221 51" />
    </svg>
  `;

  heroName.before(intro);
};

const enhanceHero = () => {
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

  setupHeaderSwap();
};

const root = document.getElementById("root");

if (root) {
  const observer = new MutationObserver(enhanceHero);
  observer.observe(root, { childList: true, subtree: true });

  queueMicrotask(enhanceHero);
  window.addEventListener("load", enhanceHero, { once: true });
}
