import Header from "../Components/Header";
import Card from "../components/Card";
import Load from "../components/load";

import styles from "./Home.module.css";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { documents: palestras, loading } = useFetchDocuments("palestras");

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className={styles.home}>
        {loading && <Load />}
        {palestras && palestras.map((palestra) => <Card pal={palestra} />)}
      </div>
    </div>
  );
};

export default Home;
