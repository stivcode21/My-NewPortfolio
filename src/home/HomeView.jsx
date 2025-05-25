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

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
      header: header_en,
    },
    es: {
      global: global_es,
      header: header_es,
    },
  },
});

const HomeView = () => {
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
