import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center my-4 px-4">
        <h1>
          <span className="text-accent text-black px-4 py-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            MeetHub
          </span>
        </h1>
      </div>

      <div className="bg-slate-300 p-8 rounded-lg shadow-md text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <p className="text-gray-950 mt-4 text-lg sm:text-base">
          Collaborate, share, and improve code with coders around the world.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <Link
            to="/write"
            className="text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 py-2 px-4 sm:px-6 rounded-lg w-full sm:w-auto text-center transition-colors duration-300 ease-in-out"
          >
            Write Your Code
          </Link>
          <Link
            to="/update"
            className="text-black bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 py-2 px-4 sm:px-6 rounded-lg w-full sm:w-auto text-center transition-colors duration-300 ease-in-out"
          >
            Update Existing Code
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
