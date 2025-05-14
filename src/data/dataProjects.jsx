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
    tags: ["social", "App"],
    shortDescription:
      "Plan de investigación para aumentar la tasa de pedidos y de fidelización de nuevos usuarios.",
  },
  {
    id: 2,
    title: "UrbanShop",
    categories: [1, 2],
    url: "UrbanShop",
    categoryId: 1,
    images: [
      <img src={UrbanShop1} alt="Mockup del proyecto de UrbanShop" />,
      <img src={UrbanShop2} alt="Mockup del proyecto de UrbanShop" />,
      <img src={UrbanShop3} alt="Mockup del proyecto de UrbanShop" />,
    ],
    tags: ["E-commerce", "Redux", "Responsive", "Carrito"],
    tools: ["figma", "reactjs", "redux", "css", "vercel", "github"],
    description:
      "Urban Shop es una tienda en línea diseñada para la venta de zapatos y gorras, con una interfaz atractiva y dinámica. Desarrollé un e-commerce completo con funcionalidades principales como carrito de compras persistente y sliders interactivos, brindando una experiencia de usuario fluida e intuitiva.",
    shortDescription:
      "E-commerce funcional de zapatos y gorras con carrito persistente y diseño dinámico.",
    links: [
      {
        type: "website",
        url: "https://emmanuelmansilla.vercel.app/",
      },
      {
        type: "code",
        url: "https://github.com/iannellotomas/consultora-negocios",
      },
    ],
    details: [
      "Implementé un sistema completo de carrito con Redux Toolkit (mi primera experiencia con esta tecnología) que incluye: agregar/eliminar productos, ajustar cantidades, vaciar carrito y cálculos automáticos del total, resolviendo el desafío de persistencia con localStorage.",
      "Desarrollé una interfaz dinámica con sliders interactivos usando SplideJS para exhibición de productos y un diseño responsive que funciona perfectamente en todos los dispositivos.",
      "El proyecto demostró mi capacidad para aprender nuevas tecnologías (Redux Toolkit) rápidamente y resolver problemas complejos como la persistencia de datos entre recargas, resultando en un e-commerce completamente funcional y escalable.",
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
    tools: ["npm", "css", "github", "vercel"],
    description:
      "Frameonix es la plataforma web diseñada para documentar mi librería de componentes, proporcionando una introducción detallada, guía de instalación y uso, información sobre cómo contribuir y documentación específica de cada componente disponible. Esta web cuenta con una interfaz dinámica, navegación mediante rutas, y un diseño intuitivo para garantizar una excelente experiencia de usuario.",
    shortDescription:
      "Documentación completa e interactiva para mi librería de componentes Frameonix.",
    links: [
      {
        type: "website",
        url: "https://emmanuelmansilla.vercel.app/",
      },
      {
        type: "uxreport",
        url: "https://docs.google.com/presentation/d/18wdIVddg95Awx5Jm_bFdjx8mZMASn4xAdP7IiM2SRH0/edit?usp=sharing",
      },
      {
        type: "code",
        url: "https://github.com/iannellotomas/consultora-negocios",
      },
    ],
    details: [
      "El objetivo principal fue facilitar el aprendizaje y uso de Frameonix, asegurando que los desarrolladores tengan un punto de partida claro y comprendan cómo utilizar cada componente de la librería de manera eficiente.",
      "Implementé funciones clave como manejo de rutas con react-router-dom, cambio de idioma mediante i18next, diseño responsive, detección de sección en pantalla usando IntersectionObserver, y un componente de terminal interactiva para copiar código fácilmente.",
      "El resultado fue una documentación completa con excelente UX, coherencia visual mediante una paleta de colores unificada, y todas las funcionalidades necesarias para que los desarrolladores puedan entender y usar efectivamente la librería.",
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
        url: "https://emmanuelmansilla.vercel.app/",
      },
      {
        type: "uxreport",
        url: "https://docs.google.com/presentation/d/18wdIVddg95Awx5Jm_bFdjx8mZMASn4xAdP7IiM2SRH0/edit?usp=sharing",
      },
      {
        type: "code",
        url: "https://github.com/iannellotomas/consultora-negocios",
      },
    ],
    details: [
      "La app de Mostaza presentó una **caída en pedidos**, señalando una pérdida de usuarios debido a una experiencia deficiente, falta de incentivos y competencia con otras apps. El objetivo fue **analizar comportamientos, motivaciones y puntos de dolor** para optimizar la experiencia, **fidelizar clientes y fortalecer su posición en el mercado**.",
      "Apliqué el enfoque del doble diamante, explorando en la primera fase los comportamientos y necesidades de los usuarios a través de **investigación cualitativa**. En la segunda fase, describí los puntos de dolor y oportunidades clave **mediante el análisis de datos**. Luego, creé soluciones enfocadas en prototipos interactivos, y finalmente, **evalué estas propuestas con pruebas de usabilidad**, asegurando una experiencia optimizada y alineada con las expectativas del usuario.",
      "Gracias al estratégico plan de investigación, logré mejorar la usabilidad  en un 83%, **simplificando la arquitectura y la navegación** para adaptarla a las necesidades reales de los usuarios. Esto se tradujo en una reducción significativa del **tiempo al hacer un pedido** y un **aumento de la confianza** en la app. Además, descubrí la importancia de **personalizar la experiencia del usuario a través de incentivos**, lo que resultó en una mayor fidelización.",
    ],
  },
];
