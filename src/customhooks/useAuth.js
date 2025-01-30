import { useState, useEffect } from 'react';
import AuthService from '../services/authservice'

const useAuth = () => {
  const [user, setUser] = useState(() => AuthService.getCurrentUser());
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    AuthService.logout(); 
  };


  useEffect(() => {
    const storedUser = AuthService.getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);


  return { user, isAuthenticated, login, logout };
};

export default useAuth;
