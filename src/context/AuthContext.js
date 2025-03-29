// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { authService } from '../Api/axios/service/authService';
// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     setIsAuthenticated(authService.isAuthenticated());
//   }, []);

//   const login = (token) => {
//     authService.login(token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     authService.logout();
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../Api/service/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(authService.isAuthenticated());
    };
  
    window.addEventListener("storage", checkAuth); // Listen for storage changes
  
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const refreshAuthState = () => {
    setIsAuthenticated(authService.isAuthenticated());
  };
  
  

  const login = (token) => {
    authService.login(token);
    refreshAuthState();
    window.location.reload();
    setTimeout(() => {
      setIsAuthenticated(authService.isAuthenticated());
    }, 100);
  };
  
  const logout = () => {
    authService.logout();
    refreshAuthState();
    window.location.reload();
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 100);
  };

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);