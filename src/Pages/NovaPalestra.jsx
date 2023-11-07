import styles from "./NovaPalestra.module.css";

import Header from "../components/Header";

import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const NovaPalestra = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      <h1>Cadastre nova palestra</h1>
      <Form palestra="" data="" hora="" vagas="" />
    </div>
  );
};

export default NovaPalestra;
