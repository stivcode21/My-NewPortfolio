import { useState } from "react";
import styles from "./ExpandableList.module.css";
import HoverTag from "../../atoms/hoverTag/HoverTag";
import { Hourglass, ShieldCheck, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExpandableList = ({ descriptions }) => {
  const { t } = useTranslation("global");

  const Accordion = [
    [
      {
        title: t("projects.objective"),
        icon: <Trophy />,
      },
      {
        title: t("projects.development"),
        icon: <Hourglass />,
      },
      {
        title: t("projects.conclusion"),
        icon: <ShieldCheck />,
      },
    ],
  ];

  const currentCategory = Accordion[0];
  const [openItem, setOpenItem] = useState(null);

  const handleAccordion = (index) => {
    openItem == index ? setOpenItem(null) : setOpenItem(index);
  };

  return (
    <section className={styles.accordion}>
      {descriptions.map((item, index) => (
        <article
          key={index}
          className={`${styles.accordionItem} ${
            index == openItem && styles.open
          } ${index < openItem && styles.completed}`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => handleAccordion(index)}
            aria-expanded={index == openItem ? true : null}
          >
            <span>
              <span className={styles.icon}>{currentCategory[index].icon}</span>
              <h3>{currentCategory[index].title}</h3>
            </span>
            <HoverTag
              label={
                openItem == index
                  ? t("projects.option-hide")
                  : t("projects.option-learn")
              }
            >
              <span className={styles.arrow}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 15L5 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </HoverTag>
          </button>
          <div
            className={styles.description}
            aria-hidden={index != openItem ? true : null}
          >
            <p>{item}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
export default ExpandableList;
