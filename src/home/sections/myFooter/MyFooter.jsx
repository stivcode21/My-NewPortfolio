import NetworkButton from "@/components/molecules/networkButton/NetworkButton";
import { handleShare } from "@/hooks/share";
import styles from "./MyFooter.module.css";
import { useTranslation } from "react-i18next";

export default function MyFooter() {
  const { t } = useTranslation("global");
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <NetworkButton
          iconName="share"
          type="secondary"
          handleClick={handleShare}
          position="top"
        />
        <span>
          © 2025 {t("footer.text-copyright")}
          <strong>StivCode. </strong>
          {t("footer.text-end")}
        </span>
      </div>
      <div className={styles.footerLinks}>
        <NetworkButton iconName="email" type="secondary" position="top" />
        <NetworkButton iconName="linkedin" type="secondary" position="top" />
        <span className={styles.separator}></span>
        <NetworkButton iconName="discord" type="secondary" position="top" />
        <NetworkButton iconName="github" type="secondary" position="top" />
      </div>
    </footer>
  );
}
