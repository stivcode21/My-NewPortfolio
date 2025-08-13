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

import StivSound1 from "../assets/projects/STIVSOUND-1.webp";
import StivSound2 from "../assets/projects/STIVSOUND-2.webp";
import StivSound3 from "../assets/projects/STIVSOUND-3.webp";

import Parkify1 from "../assets/projects/PARKIFY-1.webp";
import Parkify2 from "../assets/projects/PARKIFY-2.webp";
import Parkify3 from "../assets/projects/PARKIFY-3.webp";

import OldPortfolio1 from "../assets/projects/OLD-PORTFOLIO-1.webp";
import OldPortfolio2 from "../assets/projects/OLD-PORTFOLIO-2.webp";
import OldPortfolio3 from "../assets/projects/OLD-PORTFOLIO-3.webp";

import DesignYoutube1 from "../assets/projects/DESIGN-YOUTUBE-1.webp";
import DesignYoutube2 from "../assets/projects/DESIGN-YOUTUBE-2.webp";

import DesignFacebook1 from "../assets/projects/DESIGN-FACEBOOK-1.webp";
import DesignFacebook2 from "../assets/projects/DESIGN-FACEBOOK-2.webp";

export const dataProjects = [
  {
    id: 1,
    title: "Parkify",
    url: "parkify",
    categoryId: 1,
    images: [
      <img src={Parkify1} alt="Mockup del proyecto de Parkify" />,
      <img src={Parkify2} alt="Mockup del proyecto de Parkify" />,
      <img src={Parkify3} alt="Mockup del proyecto de Parkify" />,
    ],
    tags: ["MAIN-PROJECT", "FullStack", "React", "Responsive"],
    tools: [
      "reactjs",
      "supabase",
      "css",
      "zustand",
      "vite",
      "vercel",
      "reactRouter",
    ],
    description: "parkify.description",
    shortDescription: "parkify.shortDescription",
    links: [
      {
        type: "website",
        url: "https://parkify-eight.vercel.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Parkify-React",
      },
    ],
    details: ["parkify.objective", "parkify.development", "parkify.conclusion"],
  },

  {
    id: 2,
    title: "ViFlow",
    url: "ViFlow",
    categoryId: 1,
    images: [
      <img src={Viflow1} alt="Mockup del proyecto de Viflow" />,
      <img src={Viflow2} alt="Mockup del proyecto de Viflow" />,
      <img src={Viflow3} alt="Mockup del proyecto de Viflow" />,
    ],
    tags: ["Social", "App", "Typescript", "Responsive"],
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "Cineverse",
    url: "cineverse",
    categoryId: 1,
    images: [
      <img src={Cineverse3} alt="Mockup del proyecto de Cineverse" />,
      <img src={Cineverse1} alt="Mockup del proyecto de Cineverse" />,
      <img src={Cineverse2} alt="Mockup del proyecto de Cineverse" />,
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
        url: "https://github.com/stivcode21/Cineverce.git",
      },
    ],
    details: [
      "cineverse.objective",
      "cineverse.development",
      "cineverse.conclusion",
    ],
  },

  {
    id: 6,
    title: "Old Portfolio",
    url: "old-portfolio",
    categoryId: 1,
    images: [
      <img src={OldPortfolio1} alt="Mockup del proyecto Old Portfolio" />,
      <img src={OldPortfolio2} alt="Mockup del proyecto Old Portfolio" />,
      <img src={OldPortfolio3} alt="Mockup del proyecto Old Portfolio" />,
    ],
    tags: ["Web", "Portfolio", "SSR", "Responsive", "Translations", "Filters"],
    tools: ["nextjs", "tailwindcss", "i18next", "resend", "js", "email-api"],
    description: "oldPortfolio.description",
    shortDescription: "oldPortfolio.shortDescription",
    links: [
      {
        type: "website",
        url: "https://portfolio-tau-one-75.vercel.app/es",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Portfolio-old.git",
      },
    ],
    details: [
      "oldPortfolio.objective",
      "oldPortfolio.development",
      "oldPortfolio.conclusion",
    ],
  },

  {
    id: 7,
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
        url: "https://money-tracking-two.vercel.app/",
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
    id: 8,
    title: "Form Design",
    url: "form-design",
    categoryId: 1,
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

  {
    id: 9,
    title: "StivSound",
    url: "stivsound",
    categoryId: 1,
    images: [
      <img src={StivSound2} alt="Mockup del proyecto StivSound" />,
      <img src={StivSound1} alt="Mockup del proyecto StivSound" />,
      <img src={StivSound3} alt="Mockup del proyecto StivSound" />,
    ],
    tags: ["Web", "Música", "Reproductor", "Responsive", "Firebase"], // Actualizadas
    tools: ["js", "firebase", "css", "html", "audio-api"],
    description: "stivSound.description",
    shortDescription: "stivSound.shortDescription",
    links: [
      {
        type: "website",
        url: "https://stiv-sound.vercel.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/MusicPlayer-StivSound",
      },
    ],
    details: [
      "stivSound.objective",
      "stivSound.development",
      "stivSound.conclusion",
    ],
  },

  {
    id: 10,
    title: "WhatsApp Clone",
    url: "whatsapp-clone",
    categoryId: 1,
    images: [
      <img src={WhatsAppClone3} alt="Mockup del proyecto WhatsApp Clone" />,
      <img src={WhatsAppClone1} alt="Mockup del proyecto WhatsApp Clone" />,
      <img src={WhatsAppClone2} alt="Mockup del proyecto WhatsApp Clone" />,
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
    id: 11,
    title: "YouTube Design",
    url: "youtube-design",
    categoryId: 2,
    images: [
      <img src={DesignYoutube1} alt="Mockup del proyecto YouTube Design" />,
      <img src={DesignYoutube2} alt="Mockup del proyecto YouTube Design" />,
    ],
    tags: ["Web", "UI Clone", "Responsive", "CSS Grid", "DOM"],
    tools: ["html", "css", "js", "css-grid"],
    description: "youtubeDesign.description",
    shortDescription: "youtubeDesign.shortDescription",
    links: [
      {
        type: "website",
        url: "https://desing-f0476.web.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Youtube-Desing.git",
      },
    ],
    details: [
      "youtubeDesign.objective",
      "youtubeDesign.development",
      "youtubeDesign.conclusion",
    ],
  },

  {
    id: 12,
    title: "Facebook Design",
    url: "facebook-design",
    categoryId: 2,
    images: [
      <img src={DesignFacebook1} alt="Mockup del proyecto Facebook Design" />,
      <img src={DesignFacebook2} alt="Mockup del proyecto Facebook Design" />,
    ],
    tags: ["Web", "UI Clone", "Responsive", "Flexbox", "Login"],
    tools: ["html", "css", "flexbox", "media-queries"],
    description: "facebookDesign.description",
    shortDescription: "facebookDesign.shortDescription",
    links: [
      {
        type: "website",
        url: "https://fk-desing.web.app/",
      },
      {
        type: "code",
        url: "https://github.com/stivcode21/Desing-Login-Facebook",
      },
    ],
    details: [
      "facebookDesign.objective",
      "facebookDesign.development",
      "facebookDesign.conclusion",
    ],
  },
];
