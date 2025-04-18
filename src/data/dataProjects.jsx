import Viflow1 from "../assets/projects/viflow1.webp";
import Viflow2 from "../assets/projects/viflow2.webp";
import Viflow3 from "../assets/projects/viflow3.webp";


import UrbanShop1 from "../assets/projects/urbanshop1.webp";
import UrbanShop2 from "../assets/projects/urbanshop2.webp";
import UrbanShop3 from "../assets/projects/urbanshop3.webp";

import FrameOnix1 from "../assets/projects/frameonix1.webp";

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
        url: "UrbanShop",
        categoryId: 1,
        images: [
            <img src={UrbanShop1} alt="Mockup del proyecto de UrbanShop" />,
            <img src={UrbanShop2} alt="Mockup del proyecto de UrbanShop" />,
            <img src={UrbanShop3} alt="Mockup del proyecto de UrbanShop" />,
        ],
        tags: ["Web", "E-commerce"],
        shortDescription:
            "Una reinvención de la experiencia y diseño visual, eficientizando la búsqueda y compra de productos.",
    },
    {
        id: 3,
        title: "FrameOnix",
        url: "FrameOnix",
        categoryId: 1,
        images: [
            <img src={FrameOnix1} alt="Mockup del proyecto de FrameOnix" />,
        ],
        tags: ["Web", "Library"],
        shortDescription:
            "Busca revolucionar la forma en que aprendemos y compartimos experiencias de aprendizaje.",
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
        tags: ["Responsive", "Web", "Landing page", "Pasantía"],
        shortDescription:
            "Landing atractiva y funcional que destaca la presencia en línea de una consultora de negocios.",
    },
];