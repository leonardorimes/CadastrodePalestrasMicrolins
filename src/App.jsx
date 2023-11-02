import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.css";
import Load from "./Components/load";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

//pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Novapalestra from "./Pages/NovaPalestra";
import ConfirmarPalestra from "./Pages/ConfirmarPalestra";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <Load />;
  }

  return (
    <div className="app">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />

              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/cadastro"
                element={!user ? <Cadastro /> : <Navigate to="/" />}
              />
              <Route
                path="/novapalestra"
                element={user ? <Novapalestra /> : <Navigate to="/login" />}
              />

              <Route
                path="/confirmarpalestra"
                element={
                  user ? <ConfirmarPalestra /> : <Navigate to="/login" />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
