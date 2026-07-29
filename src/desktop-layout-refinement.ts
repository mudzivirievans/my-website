const enhanceDesktopServices = () => {
  const experience = document.querySelector<HTMLElement>(".service-experience");
  if (!experience || experience.dataset.desktopStructured === "true") return;

  const titles = Array.from(experience.querySelectorAll<HTMLElement>(".sticky-service-title"));
  const details = Array.from(experience.querySelectorAll<HTMLElement>(".service-detail"));

  if (!titles.length || titles.length !== details.length) return;

  details.forEach((detail, index) => {
    if (detail.querySelector(":scope > .desktop-service-heading")) return;

    const source = titles[index];
    const number = source.querySelector(":scope > span")?.textContent?.trim() ?? `0${index + 1}`;
    const title = source.querySelector("h3")?.textContent?.trim() ?? "Service";

    const heading = document.createElement("div");
    heading.className = "desktop-service-heading";

    const numberElement = document.createElement("span");
    numberElement.textContent = number;

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    heading.append(numberElement, titleElement);
    detail.prepend(heading);
  });

  experience.dataset.desktopStructured = "true";
};

const root = document.getElementById("root");

if (root) {
  const observer = new MutationObserver(enhanceDesktopServices);
  observer.observe(root, { childList: true, subtree: true });

  queueMicrotask(enhanceDesktopServices);
  window.addEventListener("load", enhanceDesktopServices, { once: true });
}
