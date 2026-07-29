type SkillGroup = {
  label: string;
  direction: "normal" | "reverse";
  skills: string[];
};

const refinedSkillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    direction: "normal",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "Dart"],
  },
  {
    label: "Application Development",
    direction: "reverse",
    skills: ["React", "Next.js", "Flutter", "Node.js", "Express"],
  },
  {
    label: "Data & Backend Systems",
    direction: "normal",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "REST APIs", "Firebase"],
  },
  {
    label: "AI & Automation",
    direction: "reverse",
    skills: [
      "AI Integrations",
      "Conversational Agents",
      "Workflow Automation",
      "Speech-to-Text",
      "WhatsApp Automation",
    ],
  },
  {
    label: "Cloud, Infrastructure & IT",
    direction: "normal",
    skills: [
      "Docker",
      "Vercel",
      "DNS & SSL",
      "Business Email",
      "Windows & Linux",
      "Technical Troubleshooting",
    ],
  },
];

const buildSkillBand = (group: SkillGroup) => {
  const band = document.createElement("div");
  band.className = "skill-band";

  const label = document.createElement("span");
  label.className = "skill-label";
  label.textContent = group.label;

  const wrap = document.createElement("div");
  wrap.className = "skill-track-wrap";
  wrap.setAttribute("aria-label", group.skills.join(", "));

  const track = document.createElement("div");
  track.className = `skill-track skill-track--${group.direction}`;
  track.setAttribute("aria-hidden", "true");

  [...group.skills, ...group.skills].forEach((skill) => {
    const item = document.createElement("span");
    item.append(document.createTextNode(skill));

    const separator = document.createElement("i");
    separator.textContent = "•";
    item.append(separator);
    track.append(item);
  });

  wrap.append(track);
  band.append(label, wrap);
  return band;
};

const enhanceSkills = () => {
  const section = document.querySelector<HTMLElement>(".skills-section");
  if (!section || section.dataset.skillsRefined === "true") return;

  section.querySelectorAll(":scope > .skill-band").forEach((band) => band.remove());

  const fragment = document.createDocumentFragment();
  refinedSkillGroups.forEach((group) => fragment.append(buildSkillBand(group)));
  section.append(fragment);

  section.classList.add("skills-section--refined");
  section.dataset.skillsRefined = "true";
};

const enhanceEducation = () => {
  if (document.querySelector(".education-section")) return;

  const aboutSection = document.querySelector<HTMLElement>(".about-section");
  if (!aboutSection) return;

  const education = document.createElement("section");
  education.className = "education-section";
  education.setAttribute("aria-labelledby", "education-title");
  education.innerHTML = `
    <div class="education-intro">
      <span class="section-label">(Education &amp; Learning)</span>
      <div>
        <h2 id="education-title">A strong foundation, sharpened through building.</h2>
        <p>Formal study gives me the foundation; creating real products is where I continue learning how technology behaves outside the classroom.</p>
      </div>
    </div>

    <div class="education-list">
      <article class="education-row">
        <span class="education-number">01</span>
        <div class="education-content">
          <h3>Diploma in Computer Science &amp; Cybersecurity</h3>
          <p>ICM</p>
        </div>
        <span class="education-year">2021</span>
      </article>

      <article class="education-row">
        <span class="education-number">02</span>
        <div class="education-content">
          <h3>Bachelor of Science in Data Science</h3>
          <p>Botho University</p>
        </div>
        <span class="education-year">Ongoing</span>
      </article>
    </div>
  `;

  aboutSection.insertAdjacentElement("afterend", education);
};

const enhanceSkillsAndEducation = () => {
  enhanceSkills();
  enhanceEducation();
};

const root = document.getElementById("root");

if (root) {
  const observer = new MutationObserver(enhanceSkillsAndEducation);
  observer.observe(root, { childList: true, subtree: true });

  queueMicrotask(enhanceSkillsAndEducation);
  window.addEventListener("load", enhanceSkillsAndEducation, { once: true });
}
