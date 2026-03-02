import styles from "./Blog.module.css";
import ButtonBack from "@/components/molecules/buttonBack/ButtonBack";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import { BookText, Heart, Sparkles } from "lucide-react";
import { dataBlogChapters } from "@/data/dataBlogChapters";

const Blog = () => {
  return (
    <>
      <section className={styles.blogPage}>
        <nav className={styles.nav}>
          <ButtonBack type="transparent" />
        </nav>
        <header className={styles.header}>
          <div className={styles.headerTag}>
            <BookText size={16} aria-hidden="true" />
            <span>Blog</span>
          </div>
          <div className={styles.headerIntro}>
            <h1>Bitacora de mi transicion a tecnologia</h1>
            <p>Historias reales, decisiones y progreso capitulo a capitulo.</p>
          </div>
        </header>
        <article className={styles.story}>
          <section className={styles.timeline} aria-label="Linea de tiempo">
            {dataBlogChapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <article key={chapter.id} className={styles.chapter}>
                  <span className={styles.chapterOrder} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <figure className={styles.chapterMedia}>
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      loading="lazy"
                    />
                  </figure>
                  <div className={styles.chapterContent}>
                    <div className={styles.chapterHead}>
                      <p className={styles.chapterLabel}>
                        <span className={styles.iconWrap} aria-hidden="true">
                          <Icon size={16} />
                        </span>
                        {chapter.label}
                      </p>

                      <p className={styles.chapterDate}>
                        <span>◉</span>
                        <span className={styles.date}>{chapter.date}</span>
                      </p>
                    </div>
                    <h3>{chapter.title}</h3>
                    <div className={styles.chapterDescription}>
                      {chapter.description.map((line) => (
                        <p key={line} className={styles.summary}>
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className={styles.actions}>
                      <span>
                        <Heart size={15} /> {chapter.stats.likes}
                      </span>
                    </div>
                  </div>
                </article>
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
              frustracion. Permitete no entender a la primera, repetir,
              descansar y volver con calma.
            </p>
          </section>
        </article>
      </section>
      <MyFooter />
    </>
  );
};

export default Blog;
