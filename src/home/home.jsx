import Header from "./sections/header/Header";
import styles from "./home.module.css";
import Navbar from "./sections/navbar/Navbar";
import GitHubStats from "./sections/gitHubStats/GithubStats";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";
import Education from "./sections/education/Education";
import Footer from "./sections/footer/footer";
import Contact from "./sections/contact/Contact";
import { NotificationProvider } from "../components/notificationProvider/notificationProvider";

const Home = () => {
  return (
    <NotificationProvider>
      <div id="container" className={styles.container}>
        <Navbar />
        <Header />
        <GitHubStats />
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
