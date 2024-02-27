import { createContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();


export const AuthContexProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (input) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", input);
    setcurrentUser(res.data);
  };
  
  const logout = async (input) => {
    await axios.post("http://localhost:8800/api/auth/logout");
    setcurrentUser(null); 
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
