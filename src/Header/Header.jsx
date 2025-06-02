import React, { useState } from "react";
import logo from "../assets/white-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-[#0e9ee4] text-white shadow">
      <div className="flex justify-between items-center py-3 px-4 md:px-8 lg:px-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="XportUs Logo" className="h-12" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-white text-[#0e9ee4] px-4 py-2 rounded-full font-semibold hover:shadow-md">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-[#0e9ee4] px-4 py-2 rounded-full font-semibold hover:shadow-md">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-20 bg-white text-[#0e9ee4] rounded shadow p-4 space-y-2 md:hidden">
          <Link to="/login">
            <button className="w-full text-left px-4 py-2 font-semibold hover:bg-[#0e9ee4] hover:text-white rounded">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full text-left px-4 py-2 font-semibold hover:bg-[#0e9ee4] hover:text-white rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
