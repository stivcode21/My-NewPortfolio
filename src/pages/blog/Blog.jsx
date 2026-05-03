import { useState } from "react";
import { BookOpenText } from "lucide-react";
import styles from "./Blog.module.css";
import ButtonBack from "@/components/molecules/buttonBack/ButtonBack";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import TimelineBlog from "@/components/organisms/timelineBlog/TimelineBlog";
import { dataBlogChapters } from "@/data/dataBlogChapters";

const Blog = () => {
  const [activeChapterId, setActiveChapterId] = useState(
    dataBlogChapters[0]?.id ?? null,
  );

  return (
    <>
      <section className={styles.page}>
        <nav className={styles.nav}>
          <ButtonBack type="transparent" />
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.heroAvatar} aria-hidden="true">
              <img src="/myEmoji.svg" alt="" />
            </div>
            <div className={styles.heroCopy}>
              <h1>Mi evolución como desarrollador</h1>
              <p>
                Historias reales de código, ideas y decisiones que me han
                convertido en quien soy hoy.
              </p>
            </div>
          </div>

          <button type="button" className={styles.heroAction}>
            <BookOpenText size={16} aria-hidden="true" />
            <span>Ver todos los capítulos</span>
          </button>
        </header>

        <h2 className={styles.sectionTitle}>Capítulos del camino</h2>

        <TimelineBlog
          chapters={dataBlogChapters}
          activeId={activeChapterId}
          onActivate={setActiveChapterId}
        />
      </section>
      <footer className={styles.containerFooter}>
        <MyFooter />
      </footer>
    </>
  );
};

export default Blog;
