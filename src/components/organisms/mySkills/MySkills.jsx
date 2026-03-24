import styles from "./MySkills.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dataSkills } from "@/data/dataSkills";
import { dataCareers2 } from "@/data/dataCareers";
import FilterCategory from "@/components/templates/filterCategory/FilterCategory";
import HoverTag from "@/components/atoms/hoverTag/HoverTag";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const MySkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoria por defecto: UX/UI
  const { t } = useTranslation("about");
  const navigate = useNavigate();

  const filteredSkills = dataSkills.filter(
    (skill) => skill.id === selectedCategory,
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
            <strong className={styles.buttonContainer}>
              <strong>{t("aboutMe.strong-3") + ":"}</strong>

              <Link
                to="/blog"
                className={`${styles.navLink} ${styles.blogLink}`}
              >
                <span>Blog</span>
                <ArrowUpRight />
              </Link>
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
      </div>
    </>
  );
};

export default MySkills;
