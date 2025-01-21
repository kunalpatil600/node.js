import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('userdata'));
  

  return (
    <div className="navbar bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="d-flex py-1 col-12 justify-content-between ">
          <Link
            to="/"
            className="fs-5 text-white"
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="fs-5 text-white"
            style={{ textDecoration: 'none' }}
          >
            Blog
          </Link>
          <Link
            to="/create"
            className="fs-5 text-white"
            style={{ textDecoration: 'none' }}
          >
            Blog Create
          </Link>
          <Link
            to="/signin"
            className="fs-5 text-white"
            style={{ textDecoration: 'none' }}
          >
            Sign In
          </Link>
          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className="fs-5 text-white"
              style={{ textDecoration: 'none' }}
            >
              Admin Panel
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
