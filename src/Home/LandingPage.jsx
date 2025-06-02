import React, { useState } from "react";
import bannervideo from "../assets/video-1.mp4";
import logo from "../assets/white-logo.png";
import SupplyChainFeatures from "../Pages/SupplyChainFeatures";
import Header from "../Header/Header";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative font-nunito min-h-screen text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={bannervideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0"></div>

        <Header />

        {/* Hero Section */}
        <div className="relative z-10 text-left px-8 md:px-20 pt-24 pb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Rate Search
            <br />
            Made Easy
          </h1>
        </div>

        {/* Search Panel */}
        <div className="relative z-10 bg-white mx-4 md:mx-20 mt-4 p-6 rounded-2xl shadow-lg text-black">
          {/* Mode Tabs */}
          <div className="flex justify-around border-b mb-4">
            <button className="text-[#0e9ee4] font-bold py-2 border-b-4 border-[#0e9ee4] w-full">
              FCL
            </button>
            <button className="text-[#0e9ee4] font-bold py-2 w-full">
              LCL
            </button>
            <button className="text-[#0e9ee4] font-bold py-2 w-full">
              AIR
            </button>
          </div>

          {/* Search Fields */}
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600 font-medium">FROM PORT</p>
              <div className="text-lg font-bold text-gray-800 bg-gray-100 p-3 rounded">
                INMUN
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">TO PORT</p>
              <div className="text-lg font-bold text-gray-800 bg-gray-100 p-3 rounded">
                INNSA
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">
                CONTAINER TYPE (Weight)
              </p>
              <div className="text-lg font-bold text-gray-800 bg-gray-100 p-3 rounded">
                456
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-[#0e9ee4] hover:bg-blue-700 text-white font-bold py-3 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <SupplyChainFeatures />
    </>
  );
}
