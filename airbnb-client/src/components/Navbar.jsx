import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import logo from "../assets/Airbnb-Logo.wine.png";


export default function Navbar() {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogedIn(false);
    navigate("/login");
  };

  return (
    <nav className="sticky h-18 top-0 flex justify-between items-center px-6 py-4 shadow-md  bg-[#f2f3f4]">
      {/* Left: Logo */}
      <a href="/">
        <img src={logo} alt="Airbnb-logo" className="w-28 md:w-36" />
      </a>

      {/* Center: Search Bar */}
      <div className="hidden w-80 md:flex items-center justify-between border rounded-full shadow-sm px-4 py-2 gap-4 hover:shadow-md transition-all duration-200">
        
        <span className="text-sm text-gray-500">Add guests</span>
        <div className="bg-[#FF385C] text-white p-2 rounded-full">
          <FaSearch className="text-xs" />
        </div>
      </div>

      {/* Right: User menu */}
      {isLogedIn ? (
        <div className="flex items-center gap-6 pr-2">
          <Link to="/add" title="Add Listing">
            <MdAddBusiness className="text-2xl" />
          </Link>
          <button
            onClick={handleLogout}
            className="border px-4 py-1 rounded-full hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4 pr-2 text-sm">
          <Link to="/login" className="hover:underline">
            Login
          </Link>
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
