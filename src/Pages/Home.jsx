import Header from "../Components/Header";
import Card from "../components/Card";
import Load from "../components/load";

import styles from "./Home.module.css";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

const Home = () => {
  const { documents: palestras, loading } = useFetchDocuments("palestras");

  return (
    <div>
      <Header />
      <div className={styles.home}>
        {loading && <Load />}
        {palestras &&
          palestras.map((palestra) => (
            <Card pal={palestra} key={palestra.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
