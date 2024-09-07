import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.jsx";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="hover-underline text-white text-lg md:text-xl">
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <div className="flex space-x-4">
              <li className="hover-underline text-white text-lg md:text-xl">
                <Link to="/notifications">Notifications</Link>
              </li>
              <li>
                <button
                  onClick={logoutUser}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-lg md:text-xl"
                >
                  Logout
                </button>
              </li>
              <li className="text-white text-lg md:text-xl">
                Welcome, {user.username}!
              </li>
            </div>
          ) : (
            <div className="flex space-x-4">
              <li className="hover-underline text-white text-lg md:text-xl">
                <Link to="/login">Login</Link>
              </li>
              <li className="hover-underline text-white text-lg md:text-xl">
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
