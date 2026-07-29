const enhanceHero = () => {
  const nameParts = document.querySelectorAll<HTMLElement>(".hero-name > span");

  if (nameParts[0] && nameParts[0].textContent !== "Evans") {
    nameParts[0].textContent = "Evans";
  }

  if (nameParts[1] && nameParts[1].textContent !== "Mudziviri") {
    nameParts[1].textContent = "Mudziviri";
  }

  const paragraph = document.querySelector<HTMLParagraphElement>(".hero-copy p");

  if (!paragraph || paragraph.dataset.editorialCopy === "true") {
    return;
  }

  paragraph.innerHTML = [
    "I create ",
    '<span class="brush-highlight brush-highlight--one">AI-powered systems and software</span>',
    ", modern websites, mobile apps and reliable IT solutions designed to help businesses ",
    '<span class="brush-highlight brush-highlight--two">work smarter and grow</span>',
    ".",
  ].join("");

  paragraph.dataset.editorialCopy = "true";
  paragraph.classList.add("hero-editorial-copy");
};

const root = document.getElementById("root");

if (root) {
  const observer = new MutationObserver(enhanceHero);
  observer.observe(root, { childList: true, subtree: true });

  queueMicrotask(enhanceHero);
  window.addEventListener("load", enhanceHero, { once: true });
}
