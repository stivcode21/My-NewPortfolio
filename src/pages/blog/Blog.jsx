import { useState } from "react";
import styles from "./Blog.module.css";
import ButtonBack from "@/components/molecules/buttonBack/ButtonBack";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import { BookOpenText, Camera, MoveRight } from "lucide-react";
import { blogHighlight, dataBlogChapters } from "@/data/dataBlogChapters";
import ParallaxCard from "@/components/templates/parallaxCard/ParallaxCard";

const Blog = () => {
  const HighlightIcon = blogHighlight.icon;
  const [activeChapterId, setActiveChapterId] = useState(
    dataBlogChapters[0]?.id ?? null,
  );

  return (
    <>
      <section className={styles.blogPage}>
        <div className={styles.backgroundMedia} aria-hidden="true">
          <video
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/video-bg.mp4" type="video/mp4" />
          </video>
          <div className={styles.backgroundDecoration} />
          <div className={styles.backgroundOverlay} />
        </div>

        <nav className={styles.nav}>
          <ButtonBack type="transparent" />
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroTop}>
            <div className={styles.heroTag}>
              <BookOpenText size={15} aria-hidden="true" />
              <span>Blog</span>
            </div>
            <div className={styles.heroCounter}>
              <Camera size={15} aria-hidden="true" />
              <span>{dataBlogChapters[0].number}</span>
              <span>/</span>
              <span>{String(dataBlogChapters.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className={styles.heroCopy}>
            <h1>Mi Camino hacia el Codigo</h1>
            <p>
              Fragmentos de mi viaje para convertirme en desarrollador. Errores,
              lecciones y momentos clave.
            </p>
          </div>
        </header>

        <section
          className={styles.timelineSection}
          aria-label="Linea de tiempo"
        >
          <div className={styles.timelineRail} aria-hidden="true" />
          <span className={styles.timelineNode} aria-hidden="true" />

          <div className={styles.chapterList}>
            {dataBlogChapters.map((chapter) => {
              const Icon = chapter.icon;

              return (
                <ParallaxCard
                  key={chapter.id}
                  id={chapter.id}
                  className={styles.chapterCard}
                  onVisibleChange={setActiveChapterId}
                >
                  <span className={styles.lineNode} aria-hidden="true" />

                  <div className={styles.dateBadge}>{chapter.date}</div>

                  <div
                    className={styles.chapterShell}
                    data-active={activeChapterId === chapter.id}
                  >
                    <div className={styles.chapterContent}>
                      <p className={styles.chapterEyebrow}>
                        <span>#{chapter.number}</span>
                        <span className={styles.separator}>&bull;</span>
                        <strong>{chapter.label}</strong>
                      </p>

                      <h2>{chapter.title}</h2>
                      <p className={styles.chapterExcerpt}>{chapter.excerpt}</p>

                      <div className={styles.badgeRow}>
                        {chapter.badges.map((badge) => (
                          <span key={badge} className={styles.badge}>
                            <span
                              className={styles.badgeIcon}
                              aria-hidden="true"
                            >
                              <Icon size={14} />
                            </span>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    <figure className={styles.chapterVisual}>
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        loading="lazy"
                      />
                      <figcaption className={styles.chapterAction}>
                        <span>Leer capitulo</span>
                        <MoveRight size={16} aria-hidden="true" />
                      </figcaption>
                    </figure>
                  </div>
                </ParallaxCard>
              );
            })}
          </div>
        </section>

        <section className={styles.lesson}>
          <p className={styles.lessonTag}>
            <HighlightIcon size={16} aria-hidden="true" />
            <span>{blogHighlight.label}</span>
          </p>
          <h3>{blogHighlight.title}</h3>
          <p>{blogHighlight.text}</p>
        </section>
      </section>
      <MyFooter />
    </>
  );
};

export default Blog;
