import styles from "./CertificateCard.module.css";
import { useTranslation } from "react-i18next";

/**
 * Reusable flip certificate card.
 * Colors/theme are driven by CSS vars from `accent` + per-tag colors
 * so you can restyle without touching the component logic.
 *
 * `bg_img` should be an imported asset URL (svg or png).
 * It is tinted with --card-accent via CSS mask (not inline SVG fills).
 */
const CertificateCard = ({
  url,
  img,
  bg_img,
  bg_opacity = 0.15,
  logo,
  title,
  category,
  subtitle = "Certification",
  platform,
  accent = "#864cff",
  date,
  duration,
  tags = [],
  studentName = "Johan Stiven Tapasco Correa",
  onClick,
  maxVisibleTags = 3,
}) => {
  const { t } = useTranslation("education");
  const resolvedTitle = title?.includes(".") ? t(title) : title;
  const visibleTags = tags.slice(0, maxVisibleTags);
  const extraTags = Math.max(tags.length - maxVisibleTags, 0);
  const meta = [date, duration].filter(Boolean).join(" • ");

  const handleActivate = () => {
    onClick?.(url);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActivate();
    }
  };

  return (
    <article
      className={styles.card}
      style={{ "--card-accent": accent }}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      aria-label={resolvedTitle}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.face}>
          <div className={styles.front}>
            {bg_img && (
              <div
                className={styles.bgGfx}
                style={{ "--bg-gfx": `url("${bg_img}")`, "--bg-opacity": bg_opacity, }}
                aria-hidden="true"
              />
            )}

            <div className={styles.content}>
              <div className={styles.platform}>
                <span className={styles.platformName}>
                  <img src={logo} alt="" className={styles.platformLogo}/>
                </span>
              </div>

              {category && <span className={styles.category}>{category}</span>}

              <h3 className={styles.title}>{resolvedTitle}</h3>

              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

              <div className={styles.footer}>
                {meta && <span className={styles.meta}>{meta}</span>}

                {visibleTags.length > 0 && (
                  <ul className={styles.tags}>
                    {visibleTags.map((tag) => {
                      const label = typeof tag === "string" ? tag : tag.label;
                      const color =
                        typeof tag === "string" ? undefined : tag.color;
                      const textColor =
                        typeof tag === "string" ? undefined : tag.textColor;

                      return (
                        <li
                          key={label}
                          className={styles.tag}
                          style={
                            color
                              ? {
                                  "--tag-bg": color,
                                  "--tag-color": textColor || "#fff",
                                }
                              : undefined
                          }
                        >
                          {label}
                        </li>
                      );
                    })}
                    {extraTags > 0 && (
                      <li className={`${styles.tag} ${styles.tagMore}`}>
                        +{extraTags}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className={`${styles.face} ${styles.backFace}`}>
          <div className={styles.back}>
            {img ? (
              <img
                src={img}
                alt=""
                className={styles.certificateImage}
                draggable={false}
              />
            ) : (
              <div className={styles.backFallback}>
                <span className={styles.backPlatform}>{platform}</span>
                <p className={styles.backLabel}>Certificado de finalización</p>
                <h4 className={styles.backTitle}>{resolvedTitle}</h4>
                <p className={styles.backStudent}>{studentName}</p>
                {meta && <span className={styles.backMeta}>{meta}</span>}
                <span className={styles.backSeal} aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
