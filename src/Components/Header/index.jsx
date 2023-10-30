import React from "react";

import { Link } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

import styles from "./Header.module.css";

const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <header className={styles.header}>
      <span>
        Olá, <Link to="/">{user.displayName} </Link>{" "}
      </span>
      {user.uid == "QY4KiPApnJaZ7Y3w5NlSsuzz18q2" ? (
        <Link to="/novapalestra">Cadastrar palestra</Link>
      ) : (
        ""
      )}
      <Link onClick={logout}> Sair </Link>
    </header>
  );
};

export default Header;
