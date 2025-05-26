import { useTranslation } from "react-i18next";
import styles from "./ProjectOptions.module.css";

const ProjectOptions = ({ links, isOptionsOpen }) => {
  const { t } = useTranslation("global");

  const linkDetails = {
    uxreport: {
      text: "projects.option-seeUX",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5623 7C19.616 6.69354 19.6019 6.37903 19.5212 6.07857C19.4404 5.7781 19.2949 5.49895 19.0947 5.26071C18.8946 5.02248 18.6448 4.83093 18.3628 4.69951C18.0807 4.5681 17.7734 4.5 17.4622 4.5H6.53825C6.22712 4.5 5.91975 4.5681 5.63774 4.69951C5.35572 4.83093 5.10589 5.02248 4.90577 5.26071C4.70565 5.49895 4.5601 5.7781 4.47933 6.07857C4.39857 6.37903 4.38455 6.69354 4.43825 7M17.5002 4.5C17.5282 4.24 17.5432 4.111 17.5432 4.004C17.5443 3.50969 17.3623 3.0325 17.0323 2.66446C16.7023 2.29643 16.2477 2.06364 15.7562 2.011C15.6502 2 15.5203 2 15.2603 2H8.74025C8.48025 2 8.34925 2 8.24325 2.011C7.75175 2.06364 7.29716 2.29643 6.96717 2.66446C6.63718 3.0325 6.45517 3.50969 6.45625 4.004C6.45625 4.111 6.47025 4.241 6.49925 4.5"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M15 18H9"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.38433 13.793C1.93733 10.629 1.71433 9.048 2.66233 8.023C3.61033 7 5.29833 7 8.67233 7H15.3283C18.7023 7 20.3903 7 21.3383 8.024C22.2863 9.048 22.0623 10.629 21.6163 13.793L21.1943 16.793C20.8443 19.273 20.6693 20.514 19.7723 21.257C18.8753 22 17.5523 22 14.9053 22H9.09533C6.44933 22 5.12533 22 4.22833 21.257C3.33133 20.514 3.15633 19.274 2.80633 16.793L2.38433 13.793Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    website: {
      text: "projects.option-seeweb",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.66667 8.66667H22.3333M3.66667 15.3333H22.3333M3 12C3 13.3132 3.25866 14.6136 3.7612 15.8268C4.26375 17.0401 5.00035 18.1425 5.92893 19.0711C6.85752 19.9997 7.95991 20.7363 9.17317 21.2388C10.3864 21.7413 11.6868 22 13 22C14.3132 22 15.6136 21.7413 16.8268 21.2388C18.0401 20.7363 19.1425 19.9997 20.0711 19.0711C20.9997 18.1425 21.7363 17.0401 22.2388 15.8268C22.7413 14.6136 23 13.3132 23 12C23 9.34784 21.9464 6.8043 20.0711 4.92893C18.1957 3.05357 15.6522 2 13 2C10.3478 2 7.8043 3.05357 5.92893 4.92893C4.05357 6.8043 3 9.34784 3 12Z"
            stroke="#1D1D1D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4443 2C10.5725 4.99957 9.58008 8.46429 9.58008 12C9.58008 15.5357 10.5725 19.0004 12.4443 22M13.5554 2C15.4273 4.99957 16.4196 8.46429 16.4196 12C16.4196 15.5357 15.4273 19.0004 13.5554 22"
            stroke="#1D1D1D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    code: {
      text: "projects.option-viewRepo",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0001 22.0268V19.1568C16.0376 18.68 15.9732 18.2006 15.8111 17.7506C15.649 17.3006 15.393 16.8902 15.0601 16.5468C18.2001 16.1968 21.5001 15.0068 21.5001 9.54679C21.4998 8.15062 20.9628 6.80799 20.0001 5.79679C20.4559 4.5753 20.4237 3.22514 19.9101 2.02679C19.9101 2.02679 18.7301 1.67679 16.0001 3.50679C13.708 2.88658 11.2922 2.88658 9.00008 3.50679C6.27008 1.67679 5.09008 2.02679 5.09008 2.02679C4.57645 3.22514 4.54422 4.5753 5.00008 5.79679C4.0302 6.81549 3.4926 8.17026 3.50008 9.57679C3.50008 14.9968 6.80008 16.1868 9.94008 16.5768C9.61107 16.9168 9.35734 17.3222 9.19539 17.7667C9.03343 18.2112 8.96688 18.6849 9.00008 19.1568V22.0268"
            stroke="#C2C2C4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20.0269C6 20.9999 3.5 20.0269 2 17.0269"
            stroke="#C2C2C4"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  };

  return (
    <div
      className={`${styles.optionsContainer} ${
        isOptionsOpen ? styles.open : ""
      }`}
    >
      <div>
        {links.map((link, index) => {
          const linkInfo = linkDetails[link.type];
          if (!linkInfo) return null;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={styles.option}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {linkInfo.icon}
              <span>{t(linkInfo.text)}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectOptions;
