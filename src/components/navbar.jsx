import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

  useEffect(() => {
    // Check login state from localStorage
    setIsOwnerLoggedIn(localStorage.getItem("isOwnerLoggedIn") === "true");
    setIsStudentLoggedIn(localStorage.getItem("isStudentLoggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isOwnerLoggedIn");
    localStorage.removeItem("isStudentLoggedIn");
    setIsOwnerLoggedIn(false);
    setIsStudentLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="p-4 bg-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-orange-400">MessMate</div>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
            Home
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
            Contact
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
            Pricing
          </NavLink>

          {/* Show Dashboard Links Based on Login Status */}
          {isStudentLoggedIn && (
            <NavLink to="/studentDashboard" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
              Student Dashboard
            </NavLink>
          )}
          {isOwnerLoggedIn && (
            <NavLink to="/messOwnerDashboard" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
              Mess Owner Dashboard
            </NavLink>
          )}

          {/* Show Login/Register or Logout Button */}
          {isOwnerLoggedIn || isStudentLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded">
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/owner-Login" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
                Owner Login
              </NavLink>
              <NavLink to="/student-Login" className={({ isActive }) => isActive ? "text-orange-300" : "text-gray-400"}>
                Student Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
