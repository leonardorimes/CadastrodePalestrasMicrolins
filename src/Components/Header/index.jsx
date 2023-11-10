import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAuthentication } from "../../hooks/useAuthentication";
import { HiOutlineBars3 } from "react-icons/hi2";

import { useAuthValue } from "../../context/AuthContext";
import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";

import styles from "./Header.module.css";

const Header = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className={styles.navbarMenu}>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <nav className={styles.nav}>
        <span>
          Olá,
          <Link to="/">{user.displayName} </Link>
        </span>
        {user.uid == "1B08evtyPVNriz1jviCEA76RlFo2" ? (
          <Link to="/novapalestra">Cadastrar palestra</Link>
        ) : (
          ""
        )}
        <Link onClick={logout}> Sair </Link>
      </nav>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <ListItem disablePadding className={styles.navbar}>
              <ListItemButton className={styles.navbarItems}>
                <Link to="/"> {user.displayName} </Link>
              </ListItemButton>
              <ListItemButton className={styles.navbarItems}>
                {user.uid == "1B08evtyPVNriz1jviCEA76RlFo2" ? (
                  <Link to="/novapalestra">Cadastrar palestra</Link>
                ) : (
                  ""
                )}
              </ListItemButton>
              <ListItemButton className={styles.navbarItems}>
                <Link onClick={logout}> Sair </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Header;
