// ============================================================
// Script principal del portafolio
// - Contiene datos (perfil, proyectos, habilidades)
// - Renderiza contenido dinámico en el DOM
// - Gestiona navegación móvil y scroll suave
// ============================================================

// ===== Datos del perfil (edítalos) =====
const profile = {
  name: "Ricardo Verjan Marroquin",
  role: "Desarrollo Full Stack| Análisis de Datos| Marketing Digital",
  bio: "Apasionado por el desarrollo web y el análisis de datos.",
  email: "rverjanmarroquin@gmail.com",
  cv: "https://drive.google.com/file/d/1PiqWTCjBVvhieKUoz4BE0Mx5KWstMg2P/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ricardo-verján-marroquín-22b839218",
  github: "https://github.com/ricardoverjan", // Reemplaza con tu perfil de GitHub
};

// Traducciones ES/EN para textos de interfaz
const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
    },
    hero: {
      role: "Desarrollo Full Stack| Análisis de Datos| Marketing Digital",
      bio: "Apasionado por el desarrollo web y el análisis de datos.",
      contact: "Contactar",
      cv: "Ver CV",
    },
    sections: {
      projectsTitle: "Proyectos",
      projectsDesc: "",
      skillsTitle: "Habilidades",
      skillsDesc: "Tecnologías y herramientas que utilizo.",
    },
    buttons: {
      demo: "Demo",
      code: "Código",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
    },
    hero: {
      role: "Full Stack Development | Data Analysis | Digital Marketing",
      bio: "Passionate about web development and data analysis.",
      contact: "Contact",
      cv: "View CV",
    },
    sections: {
      projectsTitle: "Projects",
      projectsDesc: "",
      skillsTitle: "Skills",
      skillsDesc: "Technologies and tools I use.",
    },
    buttons: {
      demo: "Live",
      code: "Code",
    },
    footer: "All rights reserved.",
  },
};

let currentLang = localStorage.getItem("lang") || "es";

// ===== Proyectos de ejemplo (reemplázalos) =====
// Cada objeto incluye: title, description, tags, demo y code
// Opcional: `image` para mostrar una previsualización arriba de la tarjeta.
// Si existe `demo`, la imagen se enlaza hacia la demo.
const projects = [
  {
    title: "Portafolio Personal",
    titleEn: "Personal Portfolio",
    description:
      "Portafolio web interactivo con sistema de temas, multiidioma y diseño responsive.",
    descriptionEn:
      "Interactive web portfolio with theme system, multilanguage and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    tagsEn: ["HTML", "CSS", "JavaScript"],
    demo: "",
    code: "",
    image: "assets/img/portafolio.jpg",
  },
  {
    title: "Dashboard de análisis de datos Marketing Digital",
    titleEn: "Digital Marketing Analytics Dashboard",
    description: "Análisis y visualización de datos para marketing digital.",
    descriptionEn: "Analytics and visualization for digital marketing data.",
    tags: ["Looker Studio", "Google Sheets", "Google Data Studio"],
    tagsEn: ["Looker Studio", "Google Sheets", "Google Data Studio"],
    demo: "https://lookerstudio.google.com/reporting/13438749-203a-4e01-b28e-618bf0757002",
    code: "#",
    image: "assets/img/ANALISIS DE DATOS.jpg",
  },
  {
    title: "Dashboard Power BI - Recursos Humanos",
    titleEn: "Power BI Dashboard - Human Resources",
    description:
      "Dashboard de Recursos Humanos con análisis de KPIs y métricas empresariales.",
    descriptionEn: "HR Dashboard with KPIs analysis and business metrics.",
    tags: ["Power BI", "DAX", "Data Analytics", "Excel"],
    tagsEn: ["Power BI", "DAX", "Data Analytics", "Excel"],
    demo: "https://app.powerbi.com/reportEmbed?reportId=ec8223ac-a7dd-44f9-bbbc-0288c0a55210&autoAuth=true&ctid=07da67a0-1f43-4e8c-977f-5f88b6470ee6",
    code: "#",
    image: "assets/img/powerbi.jpg",
  },
];

// ===== Habilidades de ejemplo =====
// Cada habilidad tiene: name (nombre), icon (clase Font Awesome) y skill (nombre único para colores)
// Iconos disponibles: https://fontawesome.com/icons
const skills = [
  { name: "HTML", icon: "fab fa-html5", skill: "html" },
  { name: "CSS", icon: "fab fa-css3-alt", skill: "css" },
  { name: "JavaScript", icon: "fab fa-js-square", skill: "javascript" },
  { name: "Git", icon: "fab fa-git-alt", skill: "git" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt", skill: "responsive" },
  { name: "Looker Studio", icon: "fas fa-chart-bar", skill: "looker" },
  { name: "Python", icon: "fab fa-python", skill: "python" },
  { name: "SQL", icon: "fas fa-database", skill: "sql" },
  { name: "Power BI", icon: "fas fa-chart-pie", skill: "powerbi" },
];

// Iconos y colores por tecnología (para los chips de proyectos)
const tagMeta = {
  HTML: { icon: "fab fa-html5", color: "#E34C26" },
  CSS: { icon: "fab fa-css3-alt", color: "#1572B6" },
  JavaScript: { icon: "fab fa-js", color: "#F7DF1E" },
  JS: { icon: "fab fa-js", color: "#F7DF1E" },
  "Looker Studio": { icon: "fas fa-chart-area", color: "#FF6D00" },
  "Google Sheets": { icon: "fas fa-table", color: "#34A853" },
  "Google Data Studio": { icon: "fas fa-chart-line", color: "#1DA1F2" },
  "Power BI": { icon: "fas fa-chart-pie", color: "#FDB71A" },
  DAX: { icon: "fas fa-calculator", color: "#F97316" },
  Excel: { icon: "fas fa-file-excel", color: "#107C41" },
  "Data Analytics": { icon: "fas fa-chart-bar", color: "#22c55e" },
};

// ===== Render helpers =====
// Efecto typewriter cíclico para el nombre
function typewriterCyclic(element, text, speed = 100, cycleDelay = 7000) {
  let isTyping = false;

  const type = () => {
    if (isTyping) return;
    isTyping = true;
    element.textContent = "";
    let i = 0;

    const typeChar = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      } else {
        // Termina de escribir, espera 7 segundos y repite
        isTyping = false;
        setTimeout(type, cycleDelay);
      }
    };

    typeChar();
  };

  // Inicia el efecto
  type();
}

function typewriterOnce(element, text, speed = 80, cycleDelay = 7000) {
  if (!element) return;
  if (element.dataset.typewriterInit === "true") {
    element.textContent = text;
    return;
  }
  element.dataset.typewriterInit = "true";
  typewriterCyclic(element, text, speed, cycleDelay);
}

function getTranslations() {
  return translations[currentLang] || translations.es;
}

// Renderiza datos del perfil en la sección "Sobre mí"
function renderProfile() {
  const t = getTranslations();

  // Aplicar efecto typewriter cíclico al nombre (cada 7 segundos)
  typewriterOnce(
    document.getElementById("profile-name"),
    profile.name,
    80,
    7000,
  );

  document.getElementById("profile-role").textContent =
    t.hero.role || profile.role;
  document.getElementById("profile-bio").textContent =
    t.hero.bio || profile.bio;
  const emailLink = document.getElementById("profile-email");
  emailLink.href = `mailto:${profile.email}`;
  emailLink.textContent = t.hero.contact;
  const cvLink = document.getElementById("profile-cv");
  cvLink.href = profile.cv || "#";
  cvLink.textContent = t.hero.cv;

  // Configurar redes sociales
  const linkedinLink = document.getElementById("profile-linkedin");
  linkedinLink.href = profile.linkedin || "#";
  const githubLink = document.getElementById("profile-github");
  githubLink.href = profile.github || "#";
}

// Ajusta el contenedor de la foto al ratio real de la imagen para evitar bandas
function setupProfileImageFit() {
  const img = document.getElementById("profile-image");
  const frame = img ? img.closest(".hero-image") : null;
  if (!img || !frame) return;

  const applyRatio = () => {
    if (img.naturalWidth && img.naturalHeight) {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      // Ajusta el aspect-ratio del contenedor al de la imagen
      frame.style.aspectRatio = `${w} / ${h}`;
    }
  };

  if (img.complete) {
    applyRatio();
  } else {
    img.addEventListener("load", applyRatio, { once: true });
  }
}

// Genera tarjetas de proyectos dentro del contenedor #projects-grid
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  const t = getTranslations();

  // Aplicar efecto typewriter al h2 de Proyectos
  const projectsTitle = document.querySelector("#proyectos h2");
  if (projectsTitle) {
    typewriterOnce(projectsTitle, t.sections.projectsTitle, 80, 7000);
  }
  const projectsDesc = document.querySelector("#proyectos .section-desc");
  if (projectsDesc) {
    projectsDesc.textContent = t.sections.projectsDesc;
  }

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    // Imagen de previsualización (opcional)
    // - Si `p.image` está definido y no es "#", se inserta arriba.
    // - Si además hay `p.demo`, la imagen actúa como enlace a la demo.
    if (p.image && p.image !== "#") {
      const img = document.createElement("img");
      img.className = "card-img";
      img.src = p.image;
      img.alt = p.title || "Previsualización del proyecto";
      img.loading = "lazy";

      if (p.demo && p.demo !== "") {
        const link = document.createElement("a");
        link.className = "card-img-link";
        link.href = p.demo;
        link.target = "_blank";
        link.rel = "noopener";
        link.appendChild(img);
        card.appendChild(link);
      } else {
        card.appendChild(img);
      }
    }
    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.className = "card-title";
    const titleText = currentLang === "en" && p.titleEn ? p.titleEn : p.title;
    title.textContent = titleText;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    const descText =
      currentLang === "en" && p.descriptionEn ? p.descriptionEn : p.description;
    desc.textContent = descText;

    const chips = document.createElement("div");
    chips.className = "chips";
    const tagsLocalized = currentLang === "en" && p.tagsEn ? p.tagsEn : p.tags;
    (tagsLocalized || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      const meta = tagMeta[tag];
      if (meta && meta.icon) {
        const iconEl = document.createElement("i");
        iconEl.className = `chip-icon ${meta.icon}`;
        if (meta.color) iconEl.style.color = meta.color;
        chip.appendChild(iconEl);
      }
      const label = document.createElement("span");
      label.textContent = tag;
      chip.appendChild(label);
      chips.appendChild(chip);
    });

    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(chips);

    const actions = document.createElement("div");
    actions.className = "card-actions";
    // Enlace a demo (si existe y no es placeholder)
    if (p.demo && p.demo !== "#") {
      const demo = document.createElement("a");
      demo.className = "btn btn-outline";
      demo.href = p.demo;
      demo.target = "_blank";
      demo.rel = "noopener";
      demo.textContent = t.buttons.demo;
      actions.appendChild(demo);
    }
    // Enlace a repositorio de código (si existe)
    if (p.code && p.code !== "#") {
      const code = document.createElement("a");
      code.className = "btn";
      code.href = p.code;
      code.target = "_blank";
      code.rel = "noopener";
      code.textContent = t.buttons.code;
      actions.appendChild(code);
    }

    card.appendChild(body);
    card.appendChild(actions);
    grid.appendChild(card);
  });
}

// Pinta chips de habilidades en #skills-list
function renderSkills() {
  const list = document.getElementById("skills-list");
  list.innerHTML = "";

  const t = getTranslations();

  // Aplicar efecto typewriter al h2 de Habilidades
  const skillsTitle = document.querySelector("#habilidades h2");
  if (skillsTitle) {
    typewriterOnce(skillsTitle, t.sections.skillsTitle, 80, 7000);
  }

  const skillsDesc = document.querySelector("#habilidades .section-desc");
  if (skillsDesc) {
    skillsDesc.textContent = t.sections.skillsDesc;
  }

  skills.forEach((s) => {
    const card = document.createElement("article");
    card.className = `skill-card skill-${s.skill}`;

    // Crear icono con Font Awesome
    const icon = document.createElement("i");
    icon.className = `skill-card-icon ${s.icon}`;

    // Crear nombre de la habilidad
    const name = document.createElement("span");
    name.className = "skill-card-name";
    const nameText = currentLang === "en" && s.nameEn ? s.nameEn : s.name;
    name.textContent = nameText;

    card.appendChild(icon);
    card.appendChild(name);
    list.appendChild(card);
  });
}

function applyStaticText() {
  const t = getTranslations();

  const aboutLink = document.querySelector('.nav-links a[href="#sobre-mi"]');
  if (aboutLink) aboutLink.textContent = t.nav.about;
  const projectsLink = document.querySelector(
    '.nav-links a[href="#proyectos"]',
  );
  if (projectsLink) projectsLink.textContent = t.nav.projects;
  const skillsLink = document.querySelector(
    '.nav-links a[href="#habilidades"]',
  );
  if (skillsLink) skillsLink.textContent = t.nav.skills;

  const footerText = document.querySelector(".site-footer p");
  if (footerText) {
    const yearEl = document.getElementById("year");
    const yearVal =
      yearEl && yearEl.textContent
        ? yearEl.textContent
        : new Date().getFullYear();
    footerText.innerHTML = `© <span id="year">${yearVal}</span> Ricardo Verjan Marroquin. ${t.footer}`;
  }

  const langLabel = document.querySelector(".lang-toggle .lang-label");
  if (langLabel) {
    langLabel.textContent = currentLang === "en" ? "EN" : "ES";
  }
}

// Configura el menú móvil y el scroll suave del nav
function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  // Scroll suave con offset para el header fijo
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const href = a.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      links.classList.remove("open");

      // Añadir animación de llegada a la sección
      target.classList.add("scroll-target");
      setTimeout(() => {
        target.classList.remove("scroll-target");
      }, 1000);

      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    });
  });

  // Detectar sección activa durante scroll
  setupActiveSectionHighlight();
}

// Destaca la sección activa en el menú usando Intersection Observer
function setupActiveSectionHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -66%",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remover clase activa de todos los links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Agregar clase activa al link correspondiente
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, observerOptions);

  // Observar todas las secciones
  sections.forEach((section) => observer.observe(section));
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", currentLang);
  document.documentElement.lang = currentLang;
  applyStaticText();
  renderProfile();
  renderProjects();
  renderSkills();
}

// Actualiza el año en el footer
function setYear() {
  const y = new Date().getFullYear();
  document.getElementById("year").textContent = y;
}

// Setup del toggle de tema (oscuro/claro)
function setupThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const htmlElement = document.documentElement;

  // Detectar tema guardado o preferencia del sistema
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");

  // Aplicar tema inicial
  if (theme === "light") {
    htmlElement.setAttribute("data-theme", "light");
  }

  // Toggle al hacer clic
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    if (currentTheme === "light") {
      htmlElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}

function setupLangToggle() {
  const langToggle = document.querySelector(".lang-toggle");
  if (!langToggle) return;

  const updateLabel = () => {
    const langLabel = langToggle.querySelector(".lang-label");
    if (langLabel) {
      langLabel.textContent = currentLang === "en" ? "EN" : "ES";
    }
  };

  updateLabel();

  langToggle.addEventListener("click", () => {
    const next = currentLang === "es" ? "en" : "es";
    applyLanguage(next);
    updateLabel();
  });
}

// Init: render y configuración al cargar el DOM
window.addEventListener("DOMContentLoaded", () => {
  setYear();
  applyLanguage(currentLang);
  setupNav();
  setupThemeToggle();
  setupLangToggle();
  // Igualamos alturas vía CSS grid; no es necesario ajustar aspect-ratio por JS
});
