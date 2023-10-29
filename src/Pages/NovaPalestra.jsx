import styles from "./NovaPalestra.module.css";

import Header from "../components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useInsertDocument } from "../hooks/useInsertDocument";

const Novapalestra = () => {
  const [palestra, setPalestra] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [vagas, setVagas] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("palestras");

  const handleSubmit = (e) => {
    if (!palestra || !data || !hora || !vagas) {
      setFormError("Por favor preencha todos os campos!");
    }
  };

  insertDocument({
    palestra,
    data,
    hora,
    vagas,
    uid: user.uid,
    createdBy: user.displayName,
  });

  return (
    <div className={styles.container}>
      <Header />
      <h1>Cadastre nova palestra</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Palestra
          <Input
            type="text"
            placeholder="Digite aqui o tema de sua palestra"
            onChange={(e) => setPalestra(e.target.value)}
            value={palestra}
            required
          />
        </label>
        <label>
          Dia
          <Input
            type="date"
            placeholder="Digite aqui o dia da palestra"
            onChange={(e) => setData(e.target.value)}
            value={data}
            required
          />
        </label>
        <label>
          Hora
          <Input
            type="time"
            placeholder="Digite aqui o horário da palestra"
            onChange={(e) => setHora(e.target.value)}
            value={hora}
            required
          />
        </label>
        <label>
          Vagas
          <Input
            type="number"
            value="15"
            disabled
            onChange={(e) => setVagas(e.target.value)}
          />
        </label>
        {!response.loading && <Button title="Confirmar" />}
        {response.loading && <Button title="Aguarde" disabled />}
        {response.error && <p className="error"> {response.error} </p>}
        {formError && <p className="error"> {formError} </p>}
      </form>
    </div>
  );
};

export default Novapalestra;
