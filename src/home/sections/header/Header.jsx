import styles from "./Header.module.css";
import { motion } from "framer-motion";
import headerImage from "@/assets/FotoPerfil.png";
import NetworkButton from "@/components/molecules/networkButton/NetworkButton";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

export default function Header() {
  const { t } = useTranslation("header");

  return (
    <header id="main" className={styles.header}>
      <div className={styles.shape}>
        <svg
          width="876"
          height="889"
          viewBox="0 0 876 889"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_66_5508)">
            <circle cx="489.786" cy="494.404" r="113.348" fill="#4557FB" />
            <path
              d="M479.127 227.745C485.483 223.127 494.09 223.127 500.446 227.745L586.927 290.576C593.283 295.195 595.943 303.38 593.515 310.853L560.482 412.516C558.054 419.989 551.091 425.048 543.234 425.048H436.339C428.482 425.048 421.519 419.989 419.091 412.516L386.058 310.853C383.63 303.38 386.29 295.195 392.646 290.576L479.127 227.745Z"
              fill="#DBDDF2"
            />
            <path
              d="M333.086 410.129C340.168 403.046 351.651 403.046 358.734 410.129L446.434 497.829C453.516 504.911 453.516 516.394 446.434 523.476L358.734 611.176C351.651 618.259 340.168 618.259 333.086 611.176L245.386 523.476C238.304 516.394 238.304 504.911 245.386 497.829L333.086 410.129Z"
              fill="#DBDDF2"
            />
            <circle cx="345.91" cy="333.348" r="113.348" fill="#4557FB" />
          </g>
          <defs>
            <filter
              id="filter0_f_66_5508"
              x="-39.4719"
              y="-52.0342"
              width="914.64"
              height="940.557"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="136.017"
                result="effect1_foregroundBlur_66_5508"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <motion.div
        className={styles.headerLeft}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        <img src={headerImage} alt="Foto de perfil de stiven" loading="eager" />
        <div className={styles.workTag}>
          <div className={styles.circle}></div>
          <span>{t("main.state")}</span>
        </div>
      </motion.div>
      <motion.div
        className={styles.headerRight}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        <h3>{t("main.title")}</h3>
        <h1>Stiven Tapasco</h1>
        <span className={styles.profession}>
          <h2>Frontend Designer</h2>
          <span>
            <svg
              width="402"
              height="23"
              viewBox="0 0 402 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.632699 10.2452C0.0469128 10.831 0.0469128 11.7808 0.632699 12.3666L10.1786 21.9125C10.7644 22.4983 11.7142 22.4983 12.3 21.9125C12.8857 21.3267 12.8857 20.377 12.3 19.7912L3.81468 11.3059L12.3 2.82063C12.8857 2.23484 12.8857 1.28509 12.3 0.699306C11.7142 0.11352 10.7644 0.11352 10.1786 0.699306L0.632699 10.2452ZM1.69336 12.8059H401.693V9.80591H1.69336V12.8059Z"
                fill="#4557FB"
              />
            </svg>
          </span>
        </span>
        <p>
          {t("main.text-1")}
          <strong>{t("main.strong-1")}</strong>
          {t("main.text-2")}
          <strong>{t("main.strong-2")}</strong>
          {t("main.text-3")}
        </p>
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <a
            href="https://drive.google.com/file/d/1JnnZmWooFCb8GVlv5icrgOaVJfti3FZQ/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <Download />
            <span>{t("main.download")}</span>
          </a>
          <div className={styles.social}>
            <NetworkButton iconName="email" />
            <NetworkButton iconName="linkedin" />
            <span className={styles.separator}></span>
            <NetworkButton iconName="github" />
            <NetworkButton iconName="discord" />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
