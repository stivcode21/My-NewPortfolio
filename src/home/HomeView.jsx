import styles from "./HomeView.module.css";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import GitHubOverview from "@/components/gitHubOverview/GitHubOverview";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Education from "./sections/education/Education";
import MyFooter from "./sections/myFooter/MyFooter";
import Contact from "./sections/contact/Contact";
import { NotificationProvider } from "@/components/notificationProvider/notificationProvider";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "@/translate/es/global.json";
import global_en from "@/translate/en/global.json";
import header_es from "@/translate/es/header.json";
import header_en from "@/translate/en/header.json";
import projects_es from "@/translate/es/projects.json";
import projects_en from "@/translate/en/projects.json";
import { useLanguageStore } from "@/store/languageStore";

const HomeView = () => {
  const { isLanguageES } = useLanguageStore();

  i18next.init({
    interpolation: { escapeValue: false },
    lng: isLanguageES ? "es" : "en",
    resources: {
      en: {
        global: global_en,
        header: header_en,
        projects: projects_en,
      },
      es: {
        global: global_es,
        header: header_es,
        projects: projects_es,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <NotificationProvider>
        <div id="container" className={styles.container}>
          <Navbar />
          <Header />
          <GitHubOverview />
          <Projects />
          <About />
          <Education />
          <Contact />
          <MyFooter />
        </div>
      </NotificationProvider>
    </I18nextProvider>
  );
};

export default HomeView;
