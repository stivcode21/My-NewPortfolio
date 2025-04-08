import Header from "./sections/header/Header";
import styles from "./Home.module.css";
import Navbar from "./sections/navbar/Navbar";
import GitHubStats from "./sections/gitHubStats/GithubStats";

const Home = () => {
    return (
        <div id="container"
            className={styles.container}>
            <Navbar />
            <Header />
            <GitHubStats />
        </div>
    )
}

export default Home