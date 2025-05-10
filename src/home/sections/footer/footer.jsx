import SocialButton from "@/components/socialButton/SocialButton";
import { handleShare } from "@/hooks/share";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <SocialButton
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
        <SocialButton iconName="email" type="secondary" position="top" />
        <SocialButton iconName="linkedin" type="secondary" position="top" />
        <span className={styles.separator}></span>
        <SocialButton iconName="discord" type="secondary" position="top" />
        <SocialButton iconName="github" type="secondary" position="top" />
      </div>
    </footer>
  );
}
