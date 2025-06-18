import { useEffect } from "react";
import styles from "./InfoEducation.module.css";
import { useParams } from "react-router-dom";
import { AllCertifications } from "@/data/dataEducation";
import { motion } from "framer-motion";
import Tag from "@/components/tag/Tag";
import MyFooter from "@/home/sections/myFooter/MyFooter";
import LazyImage from "@/components/lazyImage/LazyImage";
import ButtonBack from "@/components/buttonBack/ButtonBack";
import AnimatedBorderButton from "@/components/atoms/animatedBorderButton/AnimatedBorderButton";
import { useTranslation } from "react-i18next";

const InfoEducation = () => {
  const { id } = useParams();
  const education = AllCertifications.find((item) => item.url === id);
  const { t } = useTranslation("education");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!education) {
    return <div>Educación no encontrada</div>;
  }

  return (
    <motion.div
      className={styles.detailEducation}
      initial={{ opacity: "0", translateY: "100px" }}
      animate={{ opacity: "1", translateY: "0" }}
      exit={{ opacity: "0", translateY: "100px" }}
      transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <header className={styles.header}>
        <span>
          <ButtonBack />
          <div className={styles.title}>
            <h1>{t(education.title)}</h1>
          </div>
        </span>
        <div className={styles.cta}>
          <AnimatedBorderButton type="link">Descargar</AnimatedBorderButton>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.certificate}>
          <LazyImage
            src={education.img}
            alt={`Certificado de ${education.title}`}
            style={{ width: "100%", height: "auto" }}
            radius={20}
          />
        </section>
        <section className={styles.detail}>
          <div className={styles.about}>
            <div className={styles.col}>
              <div className={styles.tags}>
                {education.skills.map((skill, index) => (
                  <Tag tag={skill} index={index} key={index} />
                ))}
              </div>
            </div>
            <p className={styles.description}>{t(education.description)}</p>
          </div>
        </section>
      </main>
      <MyFooter />
    </motion.div>
  );
};

export default InfoEducation;
