import { motion } from "framer-motion";
import styles from "./listSkills.module.css";
import { dataSkills } from "@/data/dataSkills";

const ListSkills = () => {
  return (
    <>
      {dataSkills.map((experience, i) => (
        <div className={styles.itemRight} key={i}>
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
          </motion.div>
          <ul className={styles.responsabilities}>
            {experience.responsabilities.map((item, index) => (
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
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ListSkills;
