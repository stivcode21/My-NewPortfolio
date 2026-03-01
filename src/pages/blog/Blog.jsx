import styles from "./Blog.module.css";
import ButtonBack from "@/components/molecules/buttonBack/ButtonBack";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import {
  CalendarDays,
  Code2,
  Cpu,
  LaptopMinimal,
  Sparkles,
  Wrench,
} from "lucide-react";

const chapters = [
  {
    id: "start",
    label: "Punto de partida",
    icon: CalendarDays,
    title: "Todo comenzo el 26 de marzo de 2024",
    text: [
      "Un video recomendado en TikTok me hizo mirar la tecnologia con otros ojos. Hablaba de tendencias laborales y de los trabajos mejor pagados. El primero: programacion.",
      "Yo sabia lo basico, que programar era escribir codigo, pero nunca me habia interesado de verdad. El algoritmo insistio con mas videos, mas preguntas y mas curiosidad.",
      "El problema era claro: no tenia computadora. Sentia que, sin PC, ni siquiera podia intentarlo.",
    ],
  },
  {
    id: "routine",
    label: "La rutina",
    icon: Wrench,
    title: "La vida de mecanico que me estaba apagando",
    text: [
      "Trabajaba como mecanico de motos casi toda la semana, excepto los martes. Horarios largos, trabajo pesado y poco tiempo libre.",
      "Aunque me gustaba, algo ya no encajaba: sin mucha vida social, con ingreso limitado y con la sensacion de repetir el mismo dia una y otra vez.",
    ],
  },
  {
    id: "turning-point",
    label: "Cambio",
    icon: LaptopMinimal,
    title: "El dia en que aparecio una oportunidad",
    text: [
      "Recorde que mi hermana tenia una laptop guardada. Pensaba que no servia, pero fui por ella.",
      "Encendio. Iba lenta, tenia las bisagras rotas, pero funcionaba. Y eso fue suficiente para empezar.",
      "Ese dia escribi mis primeras lineas de codigo.",
    ],
  },
  {
    id: "reality",
    label: "Realidad",
    icon: Cpu,
    title: "Mi primer golpe: queria correr antes de caminar",
    text: [
      "Busque: 'cual es el lenguaje mas facil para aprender' y salio JavaScript. Arranque con toda la energia... y a los cinco minutos no entendia nada.",
      "Intente rebobinar y repetir. Luego encontre un curso de introduccion a algoritmos de TodoCode que me ayudo a comprender mejor la logica y el pseudocodigo.",
      "Mi error fue intentar aprender demasiado rapido: consumi todo en dos dias, casi sin practica, y olvide mucho.",
    ],
  },
  {
    id: "frontend",
    label: "Descubrimiento",
    icon: Code2,
    title: "Cuando descubri Frontend y me enamore del proceso",
    text: [
      "Despues de frustrarme, busque algo mas visual y encontre el curso de HTML y CSS de 24 horas de SoyDalto.",
      "Ver etiquetas en el navegador y luego darles estilo con CSS fue una sensacion poderosa. Sentia que podia construir algo real con mis manos.",
      "Durante un mes estudie de noche, llegando cansado a casa a las 8pm, pero con constancia, notas y ejercicios. Ahi empece a aprender de verdad.",
    ],
  },
];

const resources = [
  {
    title: "Curso de algoritmos (TodoCode)",
    description: "Base para entender logica y pseudocodigo.",
    link: "#",
  },
  {
    title: "Curso HTML + CSS (SoyDalto)",
    description: "El punto donde conecte con el frontend.",
    link: "#",
  },
  {
    title: "Bitacora de aprendizaje",
    description: "Notas, ejercicios y reflexiones del proceso.",
    link: "#",
  },
];

const storyGallery = [
  {
    src: "/story/laptop-rescatada.jpg",
    alt: "Laptop con la que empece a programar",
    caption: "La laptop que lo cambio todo",
  },
  {
    src: "/story/primer-codigo.jpg",
    alt: "Primeras lineas de codigo",
    caption: "Mis primeras lineas de codigo",
  },
  {
    src: "/story/noches-estudio.jpg",
    alt: "Noches de estudio despues del trabajo",
    caption: "Estudio nocturno despues del taller",
  },
];

const Blog = () => {
  return (
    <section className={styles.blogPage}>
      <nav className={styles.nav}>
       <ButtonBack type="transparent" />
      </nav>
      <header className={styles.header}>
        <p className={styles.kicker}>Blog</p>
        <h1>Mi historia</h1>
        <p>Un recorrido real de como empece en tecnologia.</p>
      </header>
      <article className={styles.story}>
        <header className={styles.hero}>
          <p className={styles.storyKicker}>Mi historia real</p>
          <h2>De mecanico a frontend developer</h2>
          <p className={styles.intro}>
            Esta historia no es solo sobre aprender codigo. Es sobre disciplina,
            cansancio, curiosidad y la decision de empezar incluso sin
            condiciones perfectas.
          </p>
          <div className={styles.badges}>
            <span>26 marzo 2024</span>
            <span>Aprendizaje nocturno</span>
            <span>Proceso real</span>
          </div>
        </header>

        <section className={styles.timeline} aria-label="Linea de tiempo">
          {chapters.map((chapter) => {
            const Icon = chapter.icon;
            return (
              <div key={chapter.id} className={styles.chapter}>
                <div className={styles.chapterHead}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <p>{chapter.label}</p>
                </div>
                <h3>{chapter.title}</h3>
                <div className={styles.chapterBody}>
                  {chapter.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className={styles.lesson}>
          <p className={styles.lessonTag}>
            <Sparkles size={16} /> La leccion mas importante
          </p>
          <h3>Aprender a programar es una maraton, no un sprint.</h3>
          <p>
            No te apresures. En la velocidad mal entendida, solo queda
            frustracion. Permitete no entender a la primera, repetir, descansar
            y volver con calma.
          </p>
        </section>

        <section className={styles.gallery} aria-label="Galeria de historia">
          <h3>Momentos de mi camino</h3>
          <p className={styles.galleryHint}>
            Reemplaza estas imagenes por tus fotos reales en la ruta indicada.
          </p>
          <div className={styles.grid}>
            {storyGallery.map((image) => (
              <figure key={image.src} className={styles.figure}>
                <img loading="lazy" src={image.src} alt={image.alt} />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          className={styles.resources}
          aria-label="Recursos recomendados"
        >
          <h3>Recursos que me ayudaron</h3>
          <ul>
            {resources.map((resource) => (
              <li key={resource.title}>
                <a href={resource.link} target="_blank" rel="noreferrer">
                  <strong>{resource.title}</strong>
                  <span>{resource.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.footerNote}>
          <p>
            Si estas empezando, empieza con lo que tengas. El progreso llega
            cuando dejas de esperar el momento perfecto.
          </p>
        </footer>
      </article>
      <MyFooter />
    </section>
  );
};

export default Blog;
