export const profile = {
  name: "Ricardo Verjan Marroquin",
  role: "Desarrollo Full Stack | Análisis de Datos | Marketing Digital",
  bio: "Apasionado por el desarrollo web y el análisis de datos.",
  email: "rverjanmarroquin@gmail.com",
  cv: "https://drive.google.com/file/d/1y_AaxabN9vaSZIeRNn7Wmv8YmpEMwaIh/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ricardo-verján-marroquín-22b839218",
  github: "https://github.com/ricardoverjan",
}

export const projects = [
  {
    title: "Portafolio Personal",
    titleEn: "Personal Portfolio",
    description: "Portafolio web interactivo con sistema de temas, multiidioma y diseño responsive.",
    descriptionEn: "Interactive web portfolio with theme system, multilanguage and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    tagsEn: ["HTML", "CSS", "JavaScript"],
    demo: "",
    code: "",
    image: "/assets/img/portafolio.jpg",
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
    image: "/assets/img/ANALISIS DE DATOS.jpg",
  },
  {
    title: "Dashboard Power BI - Recursos Humanos",
    titleEn: "Power BI Dashboard - Human Resources",
    description: "Dashboard de Recursos Humanos con análisis de KPIs y métricas empresariales.",
    descriptionEn: "HR Dashboard with KPIs analysis and business metrics.",
    tags: ["Power BI", "DAX", "Data Analytics", "Excel"],
    tagsEn: ["Power BI", "DAX", "Data Analytics", "Excel"],
    demo: "https://app.powerbi.com/reportEmbed?reportId=ec8223ac-a7dd-44f9-bbbc-0288c0a55210&autoAuth=true&ctid=07da67a0-1f43-4e8c-977f-5f88b6470ee6",
    code: "#",
    image: "/assets/img/powerbi.jpg",
  },
]

export const skills = [
  { name: "HTML", icon: "fab fa-html5", skill: "html" },
  { name: "CSS", icon: "fab fa-css3-alt", skill: "css" },
  { name: "JavaScript", icon: "fab fa-js-square", skill: "javascript" },
  { name: "Git", icon: "fab fa-git-alt", skill: "git" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt", skill: "responsive" },
  { name: "Looker Studio", icon: "fas fa-chart-bar", skill: "looker" },
  { name: "Python", icon: "fab fa-python", skill: "python" },
  { name: "SQL", icon: "fas fa-database", skill: "sql" },
  { name: "Power BI", icon: "fas fa-chart-pie", skill: "powerbi" },
]

export const tagMeta: Record<string, { icon: string; color: string }> = {
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
}
