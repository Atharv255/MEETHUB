import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";
import api from "../../services/api.js";

const UpdateCode = () => {
  const [secretKey, setSecretKey] = useState("");
  const [code, setCode] = useState("");
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFetchCode = async () => {
    try {
      const response = await api.post(`/code/verify/${id}`, { secretKey });
      if (response.status === 200) {
        setCode(response.data.code);
      } else {
        console.error("Incorrect secret key");
      }
    } catch (error) {
      console.error("Error fetching code:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/code/${id}`, {
        code,
        editor: user.username,
      });
      if (response.status === 200) {
        navigate("/"); // Redirect after successfully updating code
      }
    } catch (error) {
      console.error("Error updating code:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 mt-8"> {/* Reduced margin-top */}
      <div className="max-w-lg w-full bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center"> {/* Adjusted font size and margin-bottom */}
          Update Code
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Enter Secret Key
          </label>
          <input
            type="password"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleFetchCode}
            type="button"
            className="mt-4 w-full sm:w-auto bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
          >
            Fetch Code
          </button>
        </div>
        {code && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Edit Code
              </label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                rows="8"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-200 to-lime-200 hover:from-lime-200 hover:to-teal-200 focus:ring-4 focus:outline-none focus:ring-lime-200 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update Code
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateCode;
