import Viflow1 from "../assets/projects/VIFLOW-1.webp";
import Viflow2 from "../assets/projects/VIFLOW-2.webp";
import Viflow3 from "../assets/projects/VIFLOW-3.webp";

import UrbanShop1 from "../assets/projects/URBANSHOP-1.webp";
import UrbanShop2 from "../assets/projects/URBANSHOP-2.webp";
import UrbanShop3 from "../assets/projects/URBANSHOP-3.webp";

import FrameOnix1 from "../assets/projects/FRAMEONIX-1.webp";
import FrameOnix2 from "../assets/projects/FRAMEONIX-2.webp";

import Consultora1 from "../assets/projects/Consultora1.jpg";
import Consultora2 from "../assets/projects/Consultora2.jpg";
import Consultora3 from "../assets/projects/Consultora3.jpg";
import Consultora4 from "../assets/projects/Consultora4.jpg";
import Consultora5 from "../assets/projects/Consultora5.jpg";

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
    description:
      "ViFlow es una red social desarrollada con TypeScript que permite a los usuarios registrarse, crear perfiles, publicar contenido, interactuar con posts y comentar. Con un diseño completamente responsive y manejo avanzado de rutas, ofrece una experiencia con características únicas.",
    shortDescription:
      "Red social interactiva con registro de usuarios, publicaciones y comentarios.",
    links: [
      {
        type: "website",
        url: "/",
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
    details: [
      "El proyecto surgió para resolver la necesidad de una red social minimalista pero funcional, con el objetivo de crear una plataforma donde usuarios puedan compartir contenido, interactuar y formar comunidades, implementando características clave como registro, perfiles, posts y comentarios con TypeScript para garantizar escalabilidad y mantenibilidad.",
      "Utilicé React con TypeScript para el desarrollo frontend, implementando react-router para la navegación. Para la UI, prioricé un diseño responsive con Tailwind, integrando Zustand para estados globales, interacciones en tiempo real",
      "El resultado fue una aplicación funcional que demostró mi capacidad para resolver problemas complejos en entornos sociales. Entre los aprendizajes clave destacan: la importancia de la tipificación en proyectos grandes (TypeScript), estrategias para manejar estados globales en aplicaciones sociales, y cómo diseñar interfaces intuitivas para flujos de interacción complejos.",
    ],
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
    description:
      "Urban Shop es una tienda en línea diseñada para la venta de zapatos y gorras, con una interfaz atractiva y dinámica. Desarrollé un e-commerce completo con funcionalidades principales como carrito de compras persistente y sliders interactivos, brindando una experiencia de usuario fluida e intuitiva.",
    shortDescription:
      "E-commerce funcional de zapatos y gorras con carrito persistente y diseño dinámico.",
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
      "El proyecto buscaba crear un e-commerce funcional para UrbanShop que resolviera los desafíos típicos de una tienda online: gestión del carrito de compras, exhibición atractiva de productos y persistencia de datos entre sesiones, con el objetivo de ofrecer una experiencia de usuario fluida y profesional.",
      "Implementé una arquitectura robusta con React y Redux Toolkit para manejar el estado global del carrito, integrando localStorage para persistencia de datos. Para la interfaz, utilicé TailwindCSS junto con SplideJS para crear sliders interactivos, desarrollando un diseño completamente responsive con Vite como build tool para optimizar el rendimiento.",
      "El resultado fue una tienda online 100% funcional con carrito persistente y tiempo de carga optimizado. Entre los aprendizajes clave destacan: dominio de Redux Toolkit para gestión de estado, técnicas avanzadas de persistencia con localStorage, y cómo implementar sliders profesionales con SplideJS en aplicaciones React.",
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
    ],
    tags: ["Web", "Library", "Documentation", "Responsive"],
    tools: ["npm", "tailwindcss", "reactjs", "vite", "vercel", "i18next"],
    description:
      "Frameonix es la plataforma web diseñada para documentar mi librería de componentes, proporcionando una introducción detallada, guía de instalación y uso, información sobre cómo contribuir y documentación específica de cada componente disponible. Esta web cuenta con una interfaz dinámica, navegación mediante rutas, y un diseño intuitivo para garantizar una excelente experiencia de usuario.",
    shortDescription:
      "Documentación completa e interactiva para mi librería de componentes Frameonix.",
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
      "El proyecto nació para resolver el desafío de documentar eficientemente la librería FrameOnix, con el objetivo claro de crear una plataforma que permitiera a otros desarrolladores entender rápidamente su funcionamiento, instalación y uso, reduciendo la curva de aprendizaje y fomentando la adopción de la librería.",
      "Desarrollé una solución completa con React y Vite para optimizar el rendimiento, implementando react-router-dom para la navegación entre secciones y i18next para soporte multiidioma. Utilicé IntersectionObserver para la detección de secciones activas y creé componentes interactivos como una terminal simulada, todo ello con TailwindCSS para garantizar un diseño responsive y coherente.",
      "La documentación resultante demostró ser intuitiva y efectiva, mejorando significativamente la experiencia de los desarrolladores al usar la librería. Entre los aprendizajes clave destacan: manejo avanzado de rutas en React, implementación de internacionalización con i18next, y técnicas para crear documentación interactiva que mejora la adopción de herramientas técnicas.",
    ],
  },

  {
    id: 4,
    title: "Consultora",
    url: "consultora-de-negocios",
    categoryId: 2,
    images: [
      <img src={Consultora1} alt="Mockup del proyecto de Consultora" />,
      <img src={Consultora2} alt="Mockup del proyecto de Consultora" />,
      <img src={Consultora3} alt="Mockup del proyecto de Consultora" />,
      <img src={Consultora4} alt="Mockup del proyecto de Consultora" />,
      <img src={Consultora5} alt="Mockup del proyecto de Consultora" />,
    ],
    tags: ["Responsive", "Web", "Landing page", "En equipo", "Pasantía"],
    tools: ["figma", "reactjs", "css", "vercel", "github"],
    description:
      "Participé en un proyecto freelance para la consultora de negocios, colaborando estrechamente con un **equipo de diseño y desarrollo para la página web** de la consultora. Mi rol incluyó la creación de una interfaz intuitiva y la **optimización de la experiencia y performance de la web**, reflejando la visión y profesionalismo, y logrando destacar la calidad y el compromiso del equipo.",
    shortDescription:
      "Landing atractiva y funcional que destaca la presencia en línea de una consultora de negocios.",
    links: [
      {
        type: "website",
        url: "/",
      },
      {
        type: "uxreport",
        url: "/",
      },
      {
        type: "code",
        url: "/",
      },
    ],
    details: [
      "La app de Mostaza presentó una **caída en pedidos**, señalando una pérdida de usuarios debido a una experiencia deficiente, falta de incentivos y competencia con otras apps. El objetivo fue **analizar comportamientos, motivaciones y puntos de dolor** para optimizar la experiencia, **fidelizar clientes y fortalecer su posición en el mercado**.",
      "Apliqué el enfoque del doble diamante, explorando en la primera fase los comportamientos y necesidades de los usuarios a través de **investigación cualitativa**. En la segunda fase, describí los puntos de dolor y oportunidades clave **mediante el análisis de datos**. Luego, creé soluciones enfocadas en prototipos interactivos, y finalmente, **evalué estas propuestas con pruebas de usabilidad**, asegurando una experiencia optimizada y alineada con las expectativas del usuario.",
      "Gracias al estratégico plan de investigación, logré mejorar la usabilidad  en un 83%, **simplificando la arquitectura y la navegación** para adaptarla a las necesidades reales de los usuarios. Esto se tradujo en una reducción significativa del **tiempo al hacer un pedido** y un **aumento de la confianza** en la app. Además, descubrí la importancia de **personalizar la experiencia del usuario a través de incentivos**, lo que resultó en una mayor fidelización.",
    ],
  },
];
