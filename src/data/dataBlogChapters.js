import History1 from "../assets/HU-1.png";
import History2 from "../assets/HU-2.png";
import { CalendarDays, Code2, Cpu, LaptopMinimal, Wrench } from "lucide-react";

export const dataBlogChapters = [
  {
    id: "start",
    label: "Punto de partida",
    date: "Marzo 26, 2024",
    icon: CalendarDays,
    image: History1,
    title: "Todo comenzo al ver un video en TikTok.",
    description: [
      "Una recomendacion me mostro el mundo de la programacion. El problema era que no tenia computadora y sentia que no podia siquiera intentarlo.",
      "Ese dia entendi que no me faltaban ganas, me faltaban recursos y direccion para empezar bien.",
      "Mientras mas videos me salian, mas crecia la pregunta de si yo tambien podia cambiar mi rumbo.",
    ],
    stats: { likes: 150, comments: 42 },
  },
  {
    id: "routine",
    label: "La rutina me apagaba",
    date: "Abril 2024",
    icon: Wrench,
    image: History2,
    title: "La vida en el taller me estaba apagando.",
    description: [
      "Trabajaba casi toda la semana arreglando motos. Horarios largos, cansancio constante y poco tiempo libre me hacian sentir que algo faltaba.",
      "Aunque hacia bien mi trabajo, sentia que mi energia se iba en repetir la misma rutina cada semana.",
      "Llegaba a casa sin animo, pero con la idea fija de que no queria quedarme estancado.",
    ],
    stats: { likes: 210, comments: 78 },
  },
  {
    id: "turning-point",
    label: "Cuando aparecio una oportunidad",
    date: "Mayo 2024",
    icon: LaptopMinimal,
    image: History2,
    title: "Una laptop vieja me abrio la puerta al codigo.",
    description: [
      "Mi hermana me presto su laptop vieja. Aunque era lenta y estaba maltratada, fue suficiente para escribir mis primeras lineas.",
      "No era el equipo ideal, pero por primera vez tenia una herramienta para practicar todos los dias.",
      "Aprendi que avanzar no depende de tener lo mejor, sino de usar bien lo que ya tienes.",
    ],
    stats: { likes: 345, comments: 96 },
  },
  {
    id: "reality",
    label: "Golpe de realidad",
    date: "Junio 2024",
    icon: Cpu,
    image: History2,
    title: "Queria correr antes de aprender a caminar.",
    description: [
      "Empece con JavaScript y me frustre en minutos. Volvi a la base con algoritmos, logica y pseudocodigo para entender el proceso.",
      "Me di cuenta de que estaba consumiendo contenido muy rapido y practicando muy poco.",
      "Cuando baje el ritmo, empece a retener mejor y a entender de verdad lo que hacia.",
    ],
    stats: { likes: 198, comments: 57 },
  },
  {
    id: "frontend",
    label: "Descubrimiento",
    date: "Julio 2024",
    icon: Code2,
    image: History2,
    title: "Frontend fue el punto donde todo conecto.",
    description: [
      "Despues de la frustracion encontre HTML y CSS. Construir interfaces visuales me devolvio energia y transforme las noches en estudio real.",
      "Ver resultados en pantalla me ayudo a mantener constancia incluso despues de jornadas pesadas.",
      "Empece a tomar notas, repetir ejercicios y entender como mejorar paso a paso.",
      "Ahi senti por primera vez que estaba construyendo un perfil profesional en tecnologia.",
    ],
    stats: { likes: 412, comments: 120 },
  },
];
