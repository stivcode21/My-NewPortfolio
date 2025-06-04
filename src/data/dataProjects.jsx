import Viflow1 from "../assets/projects/VIFLOW-1.webp";
import Viflow2 from "../assets/projects/VIFLOW-2.webp";
import Viflow3 from "../assets/projects/VIFLOW-3.webp";

import UrbanShop1 from "../assets/projects/URBANSHOP-1.webp";
import UrbanShop2 from "../assets/projects/URBANSHOP-2.webp";
import UrbanShop3 from "../assets/projects/URBANSHOP-3.webp";

import FrameOnix1 from "../assets/projects/FRAMEONIX-1.webp";
import FrameOnix2 from "../assets/projects/FRAMEONIX-2.webp";
import FrameOnix3 from "../assets/projects/FRAMEONIX-3.webp";

import Cineverse1 from "../assets/projects/CINEVERSE-1.webp";
import Cineverse2 from "../assets/projects/CINEVERSE-2.webp";
import Cineverse3 from "../assets/projects/CINEVERSE-3.webp";

import WhatsAppClone1 from "../assets/projects/WHATSAPP-1.webp";
import WhatsAppClone2 from "../assets/projects/WHATSAPP-2.webp";
import WhatsAppClone3 from "../assets/projects/WHATSAPP-3.webp";

import MoneyTracking1 from "../assets/projects/MONEY-TRACKING-1.webp";
import MoneyTracking2 from "../assets/projects/MONEY-TRACKING-2.webp";
import MoneyTracking3 from "../assets/projects/MONEY-TRACKING-3.webp";

import DesignForm1 from "../assets/projects/DESING-FORM-1.webp";
import DesignForm2 from "../assets/projects/DESING-FORM-2.webp";
import DesignForm3 from "../assets/projects/DESING-FORM-3.webp";

export const dataProjects = [
  {
    id: 1,
    title: "ViFlow",
    url: "ViFlow",
    categoryId: 1,
    images: [
      <img src={Viflow1} alt="Mockup del proyecto de Viflow" />,
      <img src={Viflow2} alt="Mockup del proyecto de Viflow" />,
      <img src={Viflow3} alt="Mockup del proyecto de Viflow" />,
    ],
    tags: ["Social", "App", "Typescript", "Responsive", "Threads"],
    tools: [
      "reactjs",
      "typescript",
      "tailwindcss",
      "zustand",
      "vite",
      "vercel",
      "reactRouter",
    ],
    description: "viflow.description",
    shortDescription: "viflow.shortDescription",
    links: [
      {
        type: "website",
        url: "https://viflow.vercel.app/",
      },
      {
        type: "uxreport",
        url: "/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/ViFlow-Social-Network.git",
      },
    ],
    details: ["viflow.objective", "viflow.development", "viflow.conclusion"],
  },
  {
    id: 2,
    title: "UrbanShop",
    url: "UrbanShop",
    categoryId: 1,
    images: [
      <img src={UrbanShop1} alt="Mockup del proyecto de UrbanShop" />,
      <img src={UrbanShop2} alt="Mockup del proyecto de UrbanShop" />,
      <img src={UrbanShop3} alt="Mockup del proyecto de UrbanShop" />,
    ],
    tags: ["E-commerce", "Redux", "Responsive", "Carrito"],
    tools: ["reactjs", "redux", "tailwindcss", "vercel", "vite"],
    description: "urbanShop.description",
    shortDescription: "urbanShop.shortDescription",
    links: [
      {
        type: "website",
        url: "https://urban-shop-delta.vercel.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Urban-Shop",
      },
    ],
    details: [
      "urbanShop.objective",
      "urbanShop.development",
      "urbanShop.conclusion",
    ],
  },

  {
    id: 3,
    title: "FrameOnix",
    url: "frameonix",
    categoryId: 1,
    images: [
      <img src={FrameOnix1} alt="Mockup del proyecto de FrameOnix" />,
      <img src={FrameOnix2} alt="Mockup del proyecto de FrameOnix" />,
      <img src={FrameOnix3} alt="Mockup del proyecto de FrameOnix" />,
    ],
    tags: ["Web", "Library", "Documentation", "Responsive"],
    tools: ["npm", "tailwindcss", "reactjs", "vite", "vercel", "i18next"],
    description: "frameonix.description",
    shortDescription: "frameonix.shortDescription",
    links: [
      {
        type: "website",
        url: "https://frameonix.stivcode.com/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/FrameOnix-Web",
      },
    ],
    details: [
      "frameonix.objective",
      "frameonix.development",
      "frameonix.conclusion",
    ],
  },

  {
    id: 4,
    title: "Cineverse",
    url: "cineverse",
    categoryId: 1,
    images: [
      <img src={Cineverse1} alt="Mockup del proyecto de Cineverse" />,
      <img src={Cineverse2} alt="Mockup del proyecto de Cineverse" />,
      <img src={Cineverse3} alt="Mockup del proyecto de Cineverse" />,
    ],
    tags: ["React", "TMDB", "Dynamic Filters", "Responsive"],
    tools: ["reactjs", "tmdb", "tailwindcss", "vercel", "vite"],
    description: "cineverse.description",
    shortDescription: "cineverse.shortDescription",
    links: [
      {
        type: "website",
        url: "https://cineverce.web.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Money-Tracking",
      },
    ],
    details: [
      "cineverse.objective",
      "cineverse.development",
      "cineverse.conclusion",
    ],
  },
  {
    id: 5,
    title: "WhatsApp Clone",
    url: "whatsapp-clone",
    categoryId: 1,
    images: [
      <img src={WhatsAppClone1} alt="Mockup del proyecto WhatsApp Clone" />,
      <img src={WhatsAppClone2} alt="Mockup del proyecto WhatsApp Clone" />,
      <img src={WhatsAppClone3} alt="Mockup del proyecto WhatsApp Clone" />,
    ],
    tags: ["Web", "Clone", "Chat", "Responsive", "Teamwork"],
    tools: ["reactjs", "material-ui", "tailwindcss", "vite", "react-router"],
    description: "whatsappClone.description",
    shortDescription: "whatsappClone.shortDescription",
    links: [
      {
        type: "website",
        url: "https://wpp-clone-98b2e.web.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Whatsapp_Web-Frontend.git",
      },
    ],
    details: [
      "whatsappClone.objective",
      "whatsappClone.development",
      "whatsappClone.conclusion",
    ],
  },
  {
    id: 6,
    title: "Money Tracking",
    url: "money-tracking",
    categoryId: 1,
    images: [
      <img src={MoneyTracking1} alt="Mockup del proyecto money tracking" />,
      <img src={MoneyTracking2} alt="Mockup del proyecto money tracking" />,
      <img src={MoneyTracking3} alt="Mockup del proyecto money tracking" />,
    ],
    tags: ["Web", "Finanzas", "Productividad", "Responsive", "Dashboard"],
    tools: ["reactjs", "material-ui", "chartjs", "firebase", "react-hook-form"],
    description: "moneyTracking.description",
    shortDescription: "moneyTracking.shortDescription",
    links: [
      {
        type: "website",
        url: "https://moneytracking-app.web.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Money-Tracking",
      },
    ],
    details: [
      "moneyTracking.objective",
      "moneyTracking.development",
      "moneyTracking.conclusion",
    ],
  },
  {
    id: 7,
    title: "Form Design",
    url: "form-design",
    categoryId: 2,
    images: [
      <img src={DesignForm1} alt="Mockup del proyecto form Design" />,
      <img src={DesignForm2} alt="Mockup del proyecto form Design" />,
      <img src={DesignForm3} alt="Mockup del proyecto form Design" />,
    ],
    tags: ["Web", "Formularios", "Interactivo", "Validación", "UX"],
    tools: ["js", "css", "html", "dom-manipulation"],
    description: "formDesign.description",
    shortDescription: "formDesign.shortDescription",
    links: [
      {
        type: "website",
        url: "https://form-register-coral.vercel.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/User-Register",
      },
    ],
    details: [
      "formDesign.objective",
      "formDesign.development",
      "formDesign.conclusion",
    ],
  },
];
