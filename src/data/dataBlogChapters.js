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
      "Una recomendacion me mostro el mundo de la programacion y me pregunte si tambien podia cambiar mi rumbo. No sabia por donde empezar ni que herramientas necesitaba para aprender. Aun asi, esa curiosidad fue suficiente para dejar una idea sembrada en mi cabeza. Fue el primer momento en el que senti que mi vida podia tomar otra direccion.",
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
      "Llegaba a casa agotado del taller de motos y comence a sentir que me estaba quedando estancado. Cada semana se parecia demasiado a la anterior y eso comenzo a pesarme. Aunque cumplia con mi trabajo, por dentro sentia que estaba dejando pasar el tiempo. Esa incomodidad fue la que me empujo a buscar algo distinto para mi futuro.",
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
      "Mi hermana me presto un equipo viejo y maltratado, pero con el pude empezar a practicar mis primeras lineas de codigo. No era rapida ni bonita, pero me dio la posibilidad real de sentarme a practicar. Por primera vez deje de imaginar el cambio y empece a vivirlo con acciones pequeñas. Ese computador viejo se convirtio en una herramienta decisiva para dar el primer paso.",
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
      "Empece con JavaScript muy rapido y me di cuenta de que necesitaba volver a la base para entender de verdad. Me estaba dejando llevar por la emocion sin construir una base lo suficientemente solida. Cuando baje el ritmo, empece a notar que aprender tambien exige paciencia y orden. Entender eso me ayudo a cambiar mi forma de estudiar y a frustrarme mucho menos.",
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
      "Construir interfaces visuales me devolvio motivacion y transformo las noches pesadas en horas reales de estudio. Ver cambios en pantalla hizo que cada practica se sintiera mucho mas viva y cercana. Empece a disfrutar el proceso, a repetir ejercicios y a cuidar mas cada detalle. Fue ahi donde por primera vez senti que podia construir un perfil real en tecnologia.",
    badges: ["Claridad", "Frontend"],
  },
];

export const blogHighlight = {
  icon: Sparkles,
  label: "La leccion mas importante",
  title: "Aprender a programar es una maraton, no un sprint.",
  text: "No te apresures. En la velocidad mal entendida solo queda frustracion. Permitete no entender a la primera, repetir, descansar y volver con calma.",
};
