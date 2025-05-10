import styles from "./Home.module.css";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import GitHubOverview from "@/components/gitHubOverview/GitHubOverview";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Education from "./sections/education/Education";
import Footer from "./sections/footer/Footer";
import Contact from "./sections/contact/Contact";
import { NotificationProvider } from "@/components/notificationProvider/NotificationProvider";

const Home = () => {
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
        <Footer />
      </div>
    </NotificationProvider>
  );
};

export default Home;
