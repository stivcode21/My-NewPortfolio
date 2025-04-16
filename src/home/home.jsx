import Header from "./sections/header/Header";
import styles from "./Home.module.css";
import Navbar from "./sections/navbar/Navbar";
import GitHubStats from "./sections/gitHubStats/GithubStats";
import Projects from "./sections/projects/Projects";
import About from "./sections/about/About";

const Home = () => {
    return (
        <div id="container"
            className={styles.container}>
            <Navbar />
            <Header />
            <GitHubStats />
            <Projects />
            <About />
        </div>
    )
}

export default Home