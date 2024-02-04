
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown, FiShoppingCart } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="w-full bg-gray-900 py-3">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/" className="text-white text-3xl mx-10 font-bold flex items-center">
          <span className="text-white text-3xl">Merx</span>
          <span className="text-red-500 text-3xl">press</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/about" className="text-white">
            AboutUs
          </Link>
          <Link to="/help" className="text-white">
            Help
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for desired product"
              className="bg-white-800 text-black px-4 py-2 rounded-full w-96" // Adjusted width to 64 (you can change this value)
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
          </div>
          <div className="flex items-center text-white">
            <span className="mr-1">US</span>
            <FiChevronDown />
          </div>
          <Link to="/my-account" className="text-white">
            MyAccount
          </Link>
          <div className="flex items-center text-white">
            <FiShoppingCart className="mr-1" />
            Cart(0)
          </div>
        </div>
      </div>

      <br/>

      <div className="mx-auto ml-64 flex cursor-pointer  space-x-8  items-center mt-2 mb-4">
      <div className="flex items-center text-white">
            <FaBars className="mr-1" /> {/* Three-line icon */}
            <span>All Categories</span>
          </div>
          <Link to="/sell-on-merxpress" className="text-red-500">
            Sell on Merxpress
          </Link>
          <Link to="/top-deals" className="text-red-500">
            Top Deals
          </Link>
          <Link to="/marketplace" className="text-white">
            Marketplace
          </Link>

{ /*------------------------------------ */}

{ /* 
<Link to="/signup" className="text-white">
            SIGNUP
          </Link>
          <Link to="/login" className="text-white">
            LogIN
          </Link>
          <Link to="/order" className="text-white">
            ORDER SUCCESS
          </Link>
          <Link to="/paymentpage" className="text-white">
            PAYMENT PAGE
          </Link>

          <Link to="/shoping" className="text-white">
            SHOPPING CART PAGE
          </Link>
         */}

{ /*------------------------------------ */}


          <Link to="/merxclips" className="text-white">
            Merx Clips
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
        </div>


    </nav>
  );
};

export default Header;
