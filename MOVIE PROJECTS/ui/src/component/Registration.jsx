import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/user/register`, data);
      console.log(response);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error.response?.data?.message || "Error in Registration. Please try again!");
      setMessage(error.response?.data?.message || "Error in Registration. Please try again!");
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">User Registration</h2>
        {message && (
          <div
            className={`alert ${
              message.toLowerCase().includes("error") ? "alert-danger" : "alert-success"
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="border p-4 shadow rounded">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              onChange={handleData}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={handleData}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
              onChange={handleData}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
