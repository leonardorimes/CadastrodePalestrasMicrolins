import { useAuthentication } from "../hooks/useAuthentication";
import { useState, useEffect } from "react";

import styles from "./Login.module.css";

// img
import PdpLogin from "../img/pdp.png";

// components
import Input from "../Components/Input";
import Button from "../Components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();

    const user = {
      email,
      password,
    };

    const res = await login(user);

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
        <Button title="Entrar" />
        <Button title="Criar" />
      </form>
    </div>
  );
};

export default Login;
