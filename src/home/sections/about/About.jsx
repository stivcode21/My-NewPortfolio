import styles from "./About.module.css";
import BlockHeader from "@/components/molecules/blockHeader/BlockHeader";
import MySkills from "@/components/mySkills/MySkills";
import ToolsBox from "@/components/organisms/toolsBox/ToolsBox";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className={styles.about} id="about">
      <BlockHeader title={t("head.title")}>
        <span>
          {t("head.text-1")}
          <strong>{t("head.strong-1")}</strong>
          {t("head.text-2")}
          <strong>{t("head.strong-2")}</strong>
          {t("head.text-3")}
          <strong>{t("head.strong-3")}</strong>
        </span>
      </BlockHeader>
      <div className={styles.container}>
        <MySkills />
        <ToolsBox />
      </div>
    </div>
  );
};

export default About;
