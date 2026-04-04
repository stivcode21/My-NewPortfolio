import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import LazyImage from "@/components/atoms/lazyImage/LazyImage";
import Slider from "@/components/templates/slider/Slider";
import Tag from "@/components/atoms/tag/Tag";
import { useTranslation } from "react-i18next";
import premioImg from "@/assets/premio.png";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation("projects");
  console.log(project);

  //lista de projectos principales
  const list = [{ id: 1 }, { id: 2 }];

  const ifExists = list.some((item) => item.id === project.id);

  return (
    <Link
      to={`/project/${project.url}`}
      state={{ transitionName: `project-image-${project.url}` }}
    >
      <article className={`${styles.cardProject} `}>
        {/* Imagen duplicada con blur al hover */}
        <div className={styles.blurOverlay}>
          <LazyImage
            src={project.images[0].props.src}
            alt={project.images[0].props.alt}
            className={styles.blurImage}
          />
        </div>
        <div className={styles.content}>
          {ifExists && (
            <div className={styles.premio}>
              <img src={premioImg} alt="Premio" />
            </div>
          )}
          <Slider
            carouselImages={project.images}
            showControls={true}
            motionId={project.url}
          />

          <div className={styles.cardFooter}>
            <span>
              <span>
                <h3 className={styles.title}>{project.title}</h3>
                <ul>
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <Tag tag={tag} index={index} key={index} />
                  ))}
                </ul>
              </span>
              <p>{t(project.shortDescription)}</p>
            </span>
            <img
              src={project.images[0].props.src}
              alt={project.images[0].props.alt}
              className={styles.shadowImage}
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
