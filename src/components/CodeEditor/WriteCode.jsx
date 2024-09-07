import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";
import api from "../../services/api.js";

const WriteCode = () => {
  const [secretKey, setSecretKey] = useState("");
  const [code, setCode] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/code", {
        secretKey,
        code,
        author: user.username,
      });
      if (response.status === 201) {
        navigate("/"); // Redirect to home or another relevant page after saving code
      }
    } catch (error) {
      console.error("Error saving code:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 overflow-auto">
      <div className="max-w-lg w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center"> {/* Adjusted margin-bottom */}
          Write Your Code
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-12"> {/* Adjusted space-y and mb */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Create Secret Key
            </label>
            <input
              type="password"
              value={secretKey}
              onChange={(e) => setSecretKey(e.target.value)}
              required
              className="mt-0.5 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Write Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              rows="6"
              className="mt-0.5 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-teal-200 to-lime-200 hover:from-lime-200 hover:to-teal-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save Code
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteCode;
