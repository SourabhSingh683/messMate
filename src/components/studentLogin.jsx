import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const StudentLogin = ({ onLogin }) => {  // Destructure the onLogin prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent form submission

    // Mock login logic: Replace this with your actual login API call or logic
    if (email === "stu@example.com" && password === "stunew123") {
      console.log("Student logged in successfully");
      onLogin();  // Call onLogin prop to update the state in App.js
      navigate("/studentDashboard"); // Redirect to the student dashboard
    } else {
      console.log("Invalid login credentials");
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleRegister = () => {
    navigate("/student-Register");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Controlled input for email
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Controlled input for password
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="text-gray-300">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>
          <button
            type="button"
            onClick={handleLoginClick}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
          <h5 className="text-gray-200 my-1.5">If you are not registered, then first register yourself</h5>
          <button
            onClick={handleRegister}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
