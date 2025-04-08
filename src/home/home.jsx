import Header from "./sections/header/Header";
import styles from "./Home.module.css";
import Navbar from "./sections/navbar/Navbar";

const Home = () => {
    return (
        <div id="container"
            className={styles.container}>
            <Navbar />
            <Header />
            <Header />
        </div>
    )
}

export default Home