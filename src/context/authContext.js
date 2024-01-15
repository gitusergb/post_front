import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };

  const logout = async() => {

    const response = await fetch("https://im-jbnm.onrender.com/users/logout");
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token"," ");
    setLoggedIn(false);

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};