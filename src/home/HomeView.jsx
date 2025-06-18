import styles from "./HomeView.module.css";
import Navbar from "../components/organisms/navbar/Navbar";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Education from "./sections/education/Education";
import MyFooter from "./sections/myFooter/MyFooter";
import Contact from "./sections/contact/Contact";
import { NotificationProvider } from "@/components/templates/notificationProvider/notificationProvider";
import GitHubOverview from "@/components/templates/gitHubOverview/GitHubOverview";

const HomeView = () => {
  return (
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
  );
};

export default HomeView;
