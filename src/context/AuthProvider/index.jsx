import { useEffect } from "react";
import { createContext, useState } from "react";
import { geUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = geUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email, senha) {
    const response = await LoginRequest(email, senha);
    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
