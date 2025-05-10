import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import LazyImage from "../lazyImage/LazyImage";
import Slider from "../slider/Slider";
import Tag from "../tag/Tag";

const ProjectCard = ({ project }) => {
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
              <p>{project.shortDescription}</p>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
