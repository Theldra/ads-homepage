import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import agrilogo from "../assets/images/agriii.jpg"


function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="flex justify-between items-center">
        {/* <Link to="/" className="text-2xl font-bold">HarvestHub</Link> */}
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src={agrilogo} alt="AgriLink Logo" className="h-10 w-10" />
          </Link>
        </div>



        <div className="flex space-x-4">
          {/* <Link to="/" className="flex items-center"><FaHome className="mr-2" /> Home</Link> */}
          
          {/* <Link to="/profile" className="flex items-center"><FaUser className="mr-2" /> Profile</Link> */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:bg-green-700 px-3 py-2 rounded flex items-center"
            >
              <FaUser size={20} /> Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/regist"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          {/* <Link to="/cart" className="flex items-center"><FaShoppingCart className="mr-2" /> Cart</Link> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 