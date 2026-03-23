import History1 from "../assets/HU-1.png";
import History2 from "../assets/HU-2.png";
import {
  CalendarDays,
  Code2,
  Cpu,
  LaptopMinimal,
  Sparkles,
  Wrench,
} from "lucide-react";

export const dataBlogChapters = [
  {
    id: "start",
    number: "01",
    label: "Punto de partida",
    date: "26 Mar 2024",
    icon: CalendarDays,
    image: History1,
    title: "Todo comenzo al ver un video en TikTok.",
    excerpt:
      "Una recomendacion me mostro el mundo de la programacion y me pregunte si tambien podia cambiar mi rumbo.",
    badges: ["Descubrimiento", "Ganas sin recursos"],
  },
  {
    id: "routine",
    number: "02",
    label: "La rutina me apagaba",
    date: "15 Abr 2024",
    icon: Wrench,
    image: History2,
    title: "La vida en el taller me estaba apagando.",
    excerpt:
      "Llegaba a casa agotado del taller de motos y comence a sentir que me estaba quedando estancado.",
    badges: ["Cansancio", "Taller de motos"],
  },
  {
    id: "turning-point",
    number: "03",
    label: "Cuando aparecio una oportunidad",
    date: "26 May 2024",
    icon: LaptopMinimal,
    image: History1,
    title: "Una laptop vieja me abrio la puerta al codigo.",
    excerpt:
      "Mi hermana me presto un equipo viejo y maltratado, pero con el pude empezar a practicar mis primeras lineas de codigo.",
    badges: ["Comienzos humildes", "Laptop prestada"],
  },
  {
    id: "reality",
    number: "04",
    label: "Golpe de realidad",
    date: "18 Jun 2024",
    icon: Cpu,
    image: History2,
    title: "Queria correr antes de aprender a caminar.",
    excerpt:
      "Empece con JavaScript muy rapido y me di cuenta de que necesitaba volver a la base para entender de verdad.",
    badges: ["Frustracion", "Volver a la base"],
  },
  {
    id: "frontend",
    number: "05",
    label: "El punto donde todo conecto",
    date: "29 Jul 2024",
    icon: Code2,
    image: History1,
    title: "Frontend fue el lugar donde recupere energia.",
    excerpt:
      "Construir interfaces visuales me devolvio motivacion y transformo las noches pesadas en horas reales de estudio.",
    badges: ["Claridad", "Frontend"],
  },
];

export const blogHighlight = {
  icon: Sparkles,
  label: "La leccion mas importante",
  title: "Aprender a programar es una maraton, no un sprint.",
  text: "No te apresures. En la velocidad mal entendida solo queda frustracion. Permitete no entender a la primera, repetir, descansar y volver con calma.",
};
