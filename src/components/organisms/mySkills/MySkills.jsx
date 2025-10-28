import styles from "./MySkills.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { dataSkills } from "@/data/dataSkills";
import { dataCareers2 } from "@/data/dataCareers";
import FilterCategory from "@/components/templates/filterCategory/FilterCategory";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";
import { useTranslation } from "react-i18next";
import useAboutModalStore from "@/store/ModalAboutStore";
import ModalOverlay from "@/components/templates/modalOverlay/ModalOverlay";
import MyStory from "@/components/molecules/myStory/MyStory";

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
                  ...más
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
          <MyStory />
        </ModalOverlay>
      </div>
    </>
  );
};

export default MySkills;
