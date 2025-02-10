import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./components/home.jsx";
import StudentDashboard from "./components/studentDashboard.jsx";
import MessOwnerDashboard from "./components/messOwnerDashboard.jsx";
import Navbar from "./components/navbar.jsx";
import Contact from "./components/contact.jsx";
import Pricing from "./components/pricing.jsx";
import OwnerRegister from "./components/OwnerRegister.jsx";
import OwnerLogin from "./components/ownerLogin.jsx";
import StudentLogin from "./components/studentLogin.jsx";
import MessDetails from "./components/messDetails.jsx"; // Ensure correct path

const App = () => {
  // Load login state from localStorage
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(() => {
    return localStorage.getItem("isOwnerLoggedIn") === "true";
  });

  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(() => {
    return localStorage.getItem("isStudentLoggedIn") === "true";
  });

  // Effect to store login state in localStorage
  useEffect(() => {
    localStorage.setItem("isOwnerLoggedIn", isOwnerLoggedIn);
    localStorage.setItem("isStudentLoggedIn", isStudentLoggedIn);
  }, [isOwnerLoggedIn, isStudentLoggedIn]);

  // Handle login for the owner
  const handleOwnerLogin = () => {
    setIsOwnerLoggedIn(true);
  };

  // Handle login for the student
  const handleStudentLogin = () => {
    setIsStudentLoggedIn(true);
  };

  // Router setup
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
          <Contact />
        </div>
      ),
    },
    {
      path: "/messOwnerDashboard",
      element: isOwnerLoggedIn ? (
        <div>
          <Navbar />
          <MessOwnerDashboard />
          <Contact />
        </div>
      ) : (
        <Navigate to="/owner-Login" />
      ),
    },
    {
      path: "/studentDashboard",
      element: isStudentLoggedIn ? (
        <div>
          <Navbar />
          <StudentDashboard />
          <Contact />
        </div>
      ) : (
        <Navigate to="/student-Login" />
      ),
    },
    {
      path: "/owner-Login",
      element: (
        <div>
          <Navbar />
          <OwnerLogin onLogin={handleOwnerLogin} />
          <Contact />
        </div>
      ),
    },
    {
      path: "/student-Login",
      element: (
        <div>
          <Navbar />
          <StudentLogin onLogin={handleStudentLogin} />
          <Contact />
        </div>
      ),
    },
    {
      path: "/Owner-Register",
      element: (
        <div>
          <Navbar />
          <OwnerRegister />
          <Contact />
        </div>
      ),
    },
    {
      path: "/pricing",
      element: (
        <div>
          <Navbar />
          <Pricing />
          <Contact />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Navbar />
          <Contact />
        </div>
      ),
    },
    {
      path: "/mess-details/:id",
      element: (
        <div>
          <Navbar />
          <MessDetails />
          <Contact />
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
