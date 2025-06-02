import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white-logo.png";
import loginImage from "../assets/fcl.webp";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 bg-gray-50 flex flex-col items-center justify-center p-8">
        <img src={logo} alt="Logo" className="h-16 mb-4" />
        <img
          src={loginImage}
          alt="Login Visual"
          className="w-full max-w-md rounded-[2rem] object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0e9ee4] to-blue-700 flex items-center justify-center p-6 md:p-12 text-white">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-white mb-4">Sign In</h2>
          <p className="text-sm text-white mb-6">
            Don’t have an account yet?{" "}
            <Link to="/signup" className="underline font-semibold">
              Sign Up
            </Link>
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm mb-1">
                Username *
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white font-bold py-2 rounded hover:bg-indigo-800"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <Link to="/forgot-password" className="text-xs underline">
                Forgot Username or Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
