import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import Home from "./pages/Home.jsx";
import WritePage from "./pages/WritePage.jsx";
import UpdatePage from "./pages/UpdatePage";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/write" element={<WritePage />} />
              <Route path="/update" element={<UpdatePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
