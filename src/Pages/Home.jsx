import Header from "../Components/Header";
import Card from "../components/Card";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
