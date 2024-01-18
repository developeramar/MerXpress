// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user.name || !user.email || !user.password || !user.reEnterPassword) {
        alert("Please fill in all fields");
        return;
      }

      if (user.password !== user.reEnterPassword) {
        alert("Passwords do not match");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        alert("Please enter a valid email address");
        return;
      }

      const response = await axios.post("http://localhost:3001/register", user);

      if (response.data.status === 'success') {
        console.log("User registered successfully");
        navigate('/login');
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      console.error(`Error registering user: ${error.message}`);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowReEnterPassword = () => {
    setShowReEnterPassword(!showReEnterPassword);
  };

  return (
    <div className="min-h-screen bg-grey-lighter flex flex-col items-center justify-center">
      
      <div className="max-w-sm w-full bg-white px-6 py-8 rounded-md shadow-md text-black">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-900">
          Create your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Full Name:
            </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="block border border-grey-light w-full p-3 rounded"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-0 right-0 mt-3 mr-4 bg-slate-100 rounded p-1 cursor-pointer"
                onClick={toggleShowPassword}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="reEnterPassword" className="block text-gray-700  text-sm font-medium mb-2">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showReEnterPassword ? 'text' : 'password'}
                className="block border border-grey-light w-full p-3 rounded"
                name="reEnterPassword"
                placeholder="Confirm Password"
                value={user.reEnterPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute top-0 right-0 mt-3 bg-slate-100 rounded p-1 mr-4 cursor-pointer"
                onClick={toggleShowReEnterPassword}
              >
                {showReEnterPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <span
            className="hover:text-blue-700  hover:underline border-b border-blue text-blue-500 cursor-pointer"
            onClick={handleLoginClick}
          >
            Log in
          </span>.
        </div>
      </div>
    </div>
  );
};

export default SignUp;
