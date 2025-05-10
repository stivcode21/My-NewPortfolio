import NetworkButton from "@/components/networkButton/NetworkButton";
import { handleShare } from "@/hooks/share";
import styles from "./MyFooter.module.css";

export default function MyFooter() {
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
          © 2025 Desarrollado por <strong>StivCode</strong>. Todos los derechos
          reservados.{" "}
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
