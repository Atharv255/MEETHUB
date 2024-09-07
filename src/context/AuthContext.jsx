import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const loginUser = async (credentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Invalid credentials");
    }
  };

  const signupUser = async (credentials) => {
    try {
      const response = await api.post("/auth/signup", credentials);
      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
      throw new Error("Signup failed");
    }
  };

  const logoutUser = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loginUser, signupUser, logoutUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
