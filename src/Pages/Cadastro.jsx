import { useAuthentication } from "../hooks/useAuthentication";
import styles from "./Login.module.css";

import { useState, useEffect } from "react";

// img
import PdpLogin from "../img/pdp.png";

// components
import Input from "../Components/Input";
import Button from "../Components/Button";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();

    const user = {
      email,
      password,
    };
    console.log(user);
    if (password !== password) {
      setError("As senhas precisam ser iguais");
      return;
    }

    const res = createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.container}>
      <img src={PdpLogin} alt="Logo PDP MICROLINS" />
      <h1> Criar Conta </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          placeholder="Digite o email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Digite a senha"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Confirme a senha"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {!loading && <Button title="Criar conta" />}
        <p> {email} </p>

        {error && <p className="error"> {error} </p>}
      </form>
    </div>
  );
};

export default Cadastro;
