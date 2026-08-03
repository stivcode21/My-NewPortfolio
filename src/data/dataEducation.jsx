import habilidadesBlandas1 from "@/assets/education/habilidades-blandas.webp";
import cienciasVideojuegos from "@/assets/education/ciencias-videojuegos.webp";
import fundamentosVideojuegos from "@/assets/education/fundamentos-videojuegos.webp";
import dsrVideojuegosN1 from "@/assets/education/videojuegos-N1.webp";
import devFrontend from "@/assets/education/devFrontend.webp";
import webDesing from "@/assets/education/webDesing.webp";
import api_rest from "@/assets/education/plazi-api.webp";
/* Drop your certificate image here, then keep this import name */
//import tecnicoProgramacionSena from "@/assets/education/tecnico-programacion-sena.webp";

import platzi from "@/assets/logos/platzi.png";
import eafit from "@/assets/logos/EAFIT.png";
import polygonus from "@/assets/logos/polygonus.webp";
import udemy from "@/assets/logos/udemy.webp";
import freecodecamp from "@/assets/logos/freecodecamp.png";
import sena from "@/assets/logos/sena.png";

import GFX1 from "@/assets/gfx1.png";
import GFX2 from "@/assets/gfx2.png";
import GFX3 from "@/assets/gfx3.png";
import GFX4 from "@/assets/gfx4.png";

/** Brand accents — change freely; CertificateCard reads `accent` as --card-accent */
const BRAND = {
  eafit: "#1e3a8a",
  polygonus: "#7c3aed",
  platzi: "#98ca3f",
  unity: "#f59e0b",
  udemy: "#a435f0",
  freecodecamp: "#6e49ff",
  sena: "#39a900",
};

export const AllCertifications = [
  {
    title: "certification-1.title",
    url: "habilidades-blandas",
    img: habilidadesBlandas1,
    bg_img: GFX4,
    bg_opacity: 0.7,
    logo: eafit,
    platform: "Universidad EAFIT",
    accent: BRAND.eafit,
    category: "Habilidades blandas",
    subtitle: "Soft Skills",
    date: "2024",
    duration: null,
    skills: [
      "Visual communication",
      "Branding",
      "Morphology",
      "Typography",
      "Expressive media",
    ],
    tags: [
      { label: "Comunicación", color: "#3b82f6" },
      { label: "Branding", color: "#6366f1" },
      { label: "Tipografía", color: "#8b5cf6" },
    ],
    description: "certification-1.description",
  },
  {
    title: "certification-12.title",
    url: "api-rest",
    img: api_rest,
    bg_img: GFX1,
    bg_opacity: 0.25,
    logo: platzi,
    platform: "Platzi",
    accent: BRAND.platzi,
    category: "Backend",
    subtitle: "API REST",
    date: "2024",
    duration: null,
    skills: ["API REST", "HTTP", "JSON", "Endpoints", "JavaScript"],
    tags: [
      { label: "API", color: "#98ca3f" },
      { label: "HTTP", color: "#6b8e23" },
      { label: "JSON", color: "#bada55", textColor: "#111" },
    ],
    description: "certification-12.description",
  },
  {
    title: "certification-3.title",
    url: "dsr-videojuegos-n1",
    img: dsrVideojuegosN1,
    bg_img: GFX3,
    bg_opacity: 0.1,
    logo: eafit,
    platform: "Game Design",
    accent: "#22c55e",
    category: "Videojuegos",
    subtitle: "Game Systems",
    date: "2024",
    duration: null,
    skills: [
      "Game loops",
      "Game mechanics",
      "Balancing",
      "Rapid prototyping",
      "Design documentation",
    ],
    tags: [
      { label: "Systems", color: "#16a34a" },
      { label: "Mechanics", color: "#22c55e" },
      { label: "Balance", color: "#4ade80" },
    ],
    description: "certification-3.description",
  },
    {
    title: "certification-8.title",
    url: "webDesing-iudemy",
    img: devFrontend,
    bg_img: GFX1,
    bg_opacity: 0.25,
    logo: udemy,
    platform: "Udemy",
    accent: BRAND.udemy,
    category: "Desarrollo Web",
    subtitle: "Web Developer",
    date: "2024",
    duration: null,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "REST API"],
    tags: [
      { label: "HTML", color: "#e34f26" },
      { label: "CSS", color: "#1572b6" },
      { label: "JavaScript", color: "#f7df1e", textColor: "#111" },
    ],
    description: "certification-8.description",
  },
  {
    title: "certification-4.title",
    url: "ciencias-videojuegos",
    img: cienciasVideojuegos,
    bg_img: GFX4,
    bg_opacity: 0.3,
    logo: eafit,
    platform: "Game Science",
    accent: "#0ea5e9",
    category: "Videojuegos",
    subtitle: "Certification",
    date: "2024",
    duration: null,
    skills: [
      "Game theory",
      "Player psychology",
      "Interactive narrative",
      "Game feel",
      "Critical analysis",
    ],
    tags: [
      { label: "Theory", color: "#0284c7" },
      { label: "Narrative", color: "#0ea5e9" },
      { label: "UX", color: "#38bdf8" },
    ],
    description: "certification-4.description",
  },
  {
    title: "certification-6.title",
    url: "fundamentos-videojuegos",
    img: fundamentosVideojuegos,
    bg_img: GFX2,
    logo: eafit,
    bg_opacity: 0.4,
    platform: "Unity",
    accent: BRAND.unity,
    category: "Desarrollo",
    subtitle: "Game Dev Basics",
    date: "2024",
    duration: null,
    skills: [
      "Unity basics",
      "C# programming",
      "Game physics",
      "Assets pipeline",
      "Debugging",
    ],
    tags: [
      { label: "Unity", color: "#d97706" },
      { label: "C#", color: "#525252" },
      { label: "Physics", color: "#fbbf24" },
    ],
    description: "certification-6.description",
  },
  {
    title: "certification-13.title",
    url: "tecnico-programacion-sena",
    img: "PROXIMO",
    bg_img: GFX1,
    bg_opacity: 0.3,
    logo: sena,
    platform: "SENA",
    accent: BRAND.sena,
    category: "Formación técnica",
    subtitle: "Software Programming",
    date: "2022–2024",
    duration: "1 año",
    skills: [
      "Programming fundamentals",
      "Object-oriented programming",
      "Databases & SQL",
      "Web development",
      "Software requirements",
      "Version control",
    ],
    tags: [
      { label: "Software", color: "#39a900" },
      { label: "OOP", color: "#2d8a00" },
      { label: "SQL", color: "#58cc02" },
    ],
    description: "certification-13.description",
  },
  {
    title: "certification-7.title",
    url: "devFrontend-freecodecamp",
    img: webDesing,
    logo: freecodecamp,
    bg_img: GFX3,
    platform: "FreeCodeCamp",
    accent: BRAND.freecodecamp,
    category: "Diseño Web",
    subtitle: "Web Design",
    date: "2024",
    duration: null,
    skills: [
      "UI/UX",
      "Responsive design",
      "Wireframing",
      "Design systems",
      "Accessibility",
    ],
    tags: [
      { label: "UI/UX", color: "#a435f0" },
      { label: "Responsive", color: "#c084fc" },
      { label: "Figma", color: "#f24e1e" },
    ],
    description: "certification-7.description",
  },
];

/** Items shown in the education auto-scroll (single row) */
export const carouselCertifications = AllCertifications;

/** @deprecated kept for compatibility — prefer carouselCertifications */
export const row1 = AllCertifications.slice(0, 6).map(({ url, img }) => ({
  url,
  img,
}));

/** @deprecated kept for compatibility — prefer carouselCertifications */
export const row2 = AllCertifications.slice(6).map(({ url, img }) => ({
  url,
  img,
}));
