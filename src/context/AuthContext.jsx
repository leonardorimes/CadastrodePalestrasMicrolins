import { useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children, value }) => {
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
