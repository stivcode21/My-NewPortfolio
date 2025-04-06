import Header from "./sections/header/Header";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div id="container"
            className={styles.container}>
            <Header />
        </div>
    )
}

export default Home