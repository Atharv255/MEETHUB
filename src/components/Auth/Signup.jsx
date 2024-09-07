import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling error messages
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await registerUser(username, email, password);
    if (success) {
      navigate("/"); // Redirect to home page after successful signup
    } else {
      setError("Registration failed. Please try again."); // Set error message
    }
  };

  return (
    <div className="bg-background text-primary-foreground min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 -mt-10"> {/* Adjusted margin */}
      <form
        onSubmit={handleSubmit}
        className="bg-card shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Sign Up</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 p-2 rounded-md bg-input dark:bg-primary-foreground text-primary dark:text-primary-foreground"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 rounded-md bg-input dark:bg-primary-foreground text-primary dark:text-primary-foreground"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 rounded-md bg-input dark:bg-primary-foreground text-primary dark:text-primary-foreground"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sign Up
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
