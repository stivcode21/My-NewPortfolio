import AutoScroll from "@/components/atoms/autoScroll/AutoScroll";
import BlockHeader from "@/components/blockHeader/BlockHeader";
import styles from "./Education.module.css";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation("education");

  return (
    <div id="education" className={styles.container}>
      <BlockHeader title={t("head.title")} hidden={true}>
        <span>
          {t("head.text-1")}
          <strong>{t("head.strong-1")}</strong>
          {t("head.text-2")}
          <strong>{t("head.strong-2")}</strong>
          {t("head.text-3")}
          <strong>{t("head.strong-3")}</strong>
        </span>
      </BlockHeader>
      <AutoScroll />
    </div>
  );
};

export default Education;
