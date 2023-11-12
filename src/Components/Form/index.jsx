import styles from "./Form.module.css";

import Input from "../Input";
import Button from "../Button";

import { useEffect, useState } from "react";

import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

import { useNavigate } from "react-router-dom";

const Form = ({ palestra, data, hora, vagas, ...props }) => {
  const { insertDocument, response } = useInsertDocument("palestras");

  const [inputpalestra, setInputpalestra] = useState("");
  const [inputdata, setInputdata] = useState("");
  const [inputhora, setInputhora] = useState("");
  const [inputvagas, setInputVagas] = useState(15);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    if (!inputpalestra || !inputdata || !inputhora || !inputvagas) {
      setFormError("Por favor preencha todos os campos!");
    }
    console.log(inputpalestra, inputdata, inputhora, inputvagas);

    try {
      insertDocument({
        palestra: inputpalestra,
        data: inputdata,
        hora: inputhora,
        vagas: inputvagas,
        vagasOcupadas: [],
        uid: user.uid,
        createdBy: user.displayName,
      });

      alert("Palestra cadastrada com sucesso");
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  useEffect(() => {
    setInputpalestra(inputpalestra);
    setInputdata(data);
    setInputhora(inputhora);
    setInputVagas(inputvagas);
  }, [data, inputpalestra, inputhora, inputvagas]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Palestra
        <Input
          type="text"
          placeholder="Digite aqui o tema de sua palestra"
          onChange={(e) => setInputpalestra(e.target.value)}
          value={palestra ? palestra : inputpalestra}
          required
        />
      </label>

      <label>
        Hora
        <Input
          type="time"
          placeholder="Digite aqui o horário da palestra"
          onChange={(e) => setInputhora(e.target.value)}
          value={hora ? hora : inputhora}
          required
        />
      </label>
      <label>
        Dia
        <Input
          type="date"
          placeholder="Digite aqui o dia da palestra"
          onChange={(e) => setInputdata(e.target.value)}
          value={data ? data : inputdata}
          required
        />
      </label>
      <label>
        Vagas
        <Input
          type="number"
          value="15"
          disabled
          onChange={(e) => setInputVagas(e.target.value)}
        />
      </label>
      {!response.loading && <Button title="Confirmar" />}
      {response.loading && <Button title="Aguarde" disabled />}
      {response.error && <p className="error"> {response.error} </p>}
      {formError && <p className="error"> {formError} </p>}
    </form>
  );
};

export default Form;
