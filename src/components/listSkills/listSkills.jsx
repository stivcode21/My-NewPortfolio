import { motion } from "framer-motion";
import styles from "./listSkills.module.css";
import { dataSkills } from "@/data/dataSkills";
import CategoryFilter from "@/components/categoryFilter/categoryFilter";
import { useState } from "react";
import { dataCareers2 } from "@/data/dataCareers";

const ListSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState(1); // Categoría por defecto: UX/UI

  const filteredProjects = dataSkills.filter(
    (project) => project.id === selectedCategory
  );

  return (
    <>
      <div className={styles.itemRight}>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            aliquam eveniet distinctio assumenda explicabo, vel alias aut
            aperiam numquam tempora, impedit enim eligendi vitae adipisci odit
            aliquid accusantium possimus at!
          </p>
          {/* Filtro de categorías */}
          <CategoryFilter
            controls={dataCareers2}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            ifExists={true}
          />
        </motion.div>
        <ul className={styles.responsabilities}>
          {filteredProjects.map((item) =>
            item.skills.map((skill, index) => (
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
                {skill}
              </motion.li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default ListSkills;
