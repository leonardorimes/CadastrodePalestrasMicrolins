import { useAuthentication } from "../hooks/useAuthentication";
import styles from "./Login.module.css";

import { useState, useEffect } from "react";

// img
import PdpLogin from "../img/pdp.png";

// components
import Input from "../Components/Input";
import Button from "../Components/Button";

const Cadastro = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useEffect("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  return (
    <div className={styles.container}>
      <img src={PdpLogin} alt="Logo PDP MICROLINS" />
      <h1> Criar Conta </h1>
      <form className={styles.form}>
        <Input placeholder="Digite o usuário" type="email" />
        <Input placeholder="Digite a senha" type="password" />
        <Input placeholder="Confirme a senha" type="password" />

        <Button title="Criar conta" />
      </form>
    </div>
  );
};

export default Cadastro;
