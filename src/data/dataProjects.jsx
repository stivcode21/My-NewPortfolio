import Mostaza1 from "../assets/projects/Mostaza1.jpg";
import Mostaza2 from "../assets/projects/Mostaza2.jpg";
import Mostaza3 from "../assets/projects/Mostaza3.jpg";
import Mostaza4 from "../assets/projects/Mostaza4.jpg";

import Amazon1 from "../assets/projects/Amazon1.jpg";
import Amazon2 from "../assets/projects/Amazon2.jpg";
import Amazon3 from "../assets/projects/Amazon3.jpg";
import Amazon4 from "../assets/projects/Amazon4.jpg";
import Amazon5 from "../assets/projects/Amazon5.jpg";

import Ajaka1 from "../assets/projects/Ajaka1.jpg";
import Ajaka2 from "../assets/projects/Ajaka2.jpg";
import Ajaka3 from "../assets/projects/Ajaka3.jpg";
import Ajaka4 from "../assets/projects/Ajaka4.jpg";

import Consultora1 from "../assets/projects/Consultora1.jpg";
import Consultora2 from "../assets/projects/Consultora2.jpg";
import Consultora3 from "../assets/projects/Consultora3.jpg";
import Consultora4 from "../assets/projects/Consultora4.jpg";
import Consultora5 from "../assets/projects/Consultora5.jpg";

export const dataProjects = [
    {
        id: 1,
        title: "Mostaza",
        url: "mostaza",
        categoryId: 1,
        images: [
            <img src={Mostaza1} alt="Mockup del proyecto de Mostaza" />,
            <img src={Mostaza2} alt="Mockup del proyecto de Mostaza" />,
            <img src={Mostaza3} alt="Mockup del proyecto de Mostaza" />,
            <img src={Mostaza4} alt="Mockup del proyecto de Mostaza" />,
        ],
        tags: ["Rediseño", "App", "Research", "Comida rápida"],
        shortDescription:
            "Plan de investigación para aumentar la tasa de pedidos y de fidelización de nuevos usuarios.",
    },
    {
        id: 2,
        title: "Amazon",
        url: "amazon",
        categoryId: 1,
        images: [
            <img src={Amazon1} alt="Mockup del proyecto de Amazon" />,
            <img src={Amazon2} alt="Mockup del proyecto de Amazon" />,
            <img src={Amazon3} alt="Mockup del proyecto de Amazon" />,
            <img src={Amazon4} alt="Mockup del proyecto de Amazon" />,
            <img src={Amazon5} alt="Mockup del proyecto de Amazon" />,
        ],
        tags: ["Rediseño", "Web", "E-commerce", "Benchmark"],
        shortDescription:
            "Una reinvención de la experiencia y diseño visual, eficientizando la búsqueda y compra de productos.",
    },
    {
        id: 3,
        title: "SkillSwap",
        url: "skillswap",
        categoryId: 2,
        images: [
            <img src={Ajaka1} alt="Mockup del proyecto de SkillSwap" />,
            <img src={Ajaka1} alt="Mockup del proyecto de SkillSwap" />,
            <img src={Ajaka1} alt="Mockup del proyecto de SkillSwap" />,
            <img src={Ajaka1} alt="Mockup del proyecto de SkillSwap" />,
        ],
        tags: ["Creación", "App", "Material Design", "Storytelling"],
        shortDescription:
            "Busca revolucionar la forma en que aprendemos y compartimos experiencias de aprendizaje.",
    },
    {
        id: 4,
        title: "Ajaka Envases",
        url: "ajaka-envases",
        categoryId: 2,
        images: [
            <img src={Ajaka1} alt="Mockup del proyecto de Ajaka Envases" />,
            <img src={Ajaka2} alt="Mockup del proyecto de Ajaka Envases" />,
            <img src={Ajaka3} alt="Mockup del proyecto de Ajaka Envases" />,
            <img src={Ajaka4} alt="Mockup del proyecto de Ajaka Envases" />,
        ],
        tags: ["Responsive", "Web", "Landing page", "React Router"],
        shortDescription:
            "Landing page adaptable y resolutiva para una empresa de envasado de productos.",
    },
    {
        id: 5,
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