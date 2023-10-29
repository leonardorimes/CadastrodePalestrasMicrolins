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
      <p>Olá, {user.displayName}</p>
      <Link onClick={logout}> Sair </Link>
    </header>
  );
};

export default Header;
