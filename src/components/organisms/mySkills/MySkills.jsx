import styles from "./MySkills.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { dataSkills } from "@/data/dataSkills";
import { dataCareers2 } from "@/data/dataCareers";
import FilterCategory from "../../filterCategory/FilterCategory";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";
import { useTranslation } from "react-i18next";
import useAboutModalStore from "@/store/ModalAboutStore";
import ModalOverlay from "@/components/templates/modalOverlay/ModalOverlay";

const MySkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI
  const { t } = useTranslation("about");
  const { aboutModalState, setAboutModalState } = useAboutModalStore();

  const filteredSkills = dataSkills.filter(
    (skill) => skill.id === selectedCategory
  );

  return (
    <>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          viewport={{ once: true, amount: 0.1 }}
          className={styles.itemTitle}
        >
          <p>
            {t("aboutMe.text-1")}
            <strong>{t("aboutMe.strong-1")}</strong>
            {t("aboutMe.text-2")}
            <strong>{t("aboutMe.strong-2")}</strong>
            {t("aboutMe.text-3")}
            <strong>{t("aboutMe.strong-3")}</strong>
            <strong className={styles.buttonContainer}>
              <HoverTag label={t("aboutMe.option-readMore")} position="bottom">
                <button
                  className={styles.button}
                  onClick={() => setAboutModalState(true)}
                >
                  ...{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 12h-5" />
                    <path d="M15 8h-5" />
                    <path d="M19 17V5a2 2 0 0 0-2-2H4" />
                    <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
                  </svg>
                </button>
              </HoverTag>
            </strong>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.15,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          viewport={{ once: true, amount: 1 }}
          className={styles.itemDetails}
        >
          {/* Filtro de categorías */}
          <FilterCategory
            controls={dataCareers2}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            ifExists={true}
          />
        </motion.div>
        {filteredSkills.map((item) => (
          <div key={item.id} className={styles.containerSkills}>
            <h2 className={styles.subtitle}>{t(item.subtitle)}</h2>

            <ul className={styles.responsabilities}>
              {item.skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {t(skill)}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
        <ModalOverlay
          isOpen={aboutModalState}
          onClose={() => setAboutModalState(false)}
        >
          <p>hola</p>
        </ModalOverlay>
      </div>
    </>
  );
};

export default MySkills;
