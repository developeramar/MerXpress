// TopNavbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileNavbar from './Mobilenav'; // Import the MobileNavbar component


const TopNavbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const handleSidebarToggle = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  const closeMobileNavbar = () => {
    setShowMobileNavbar(false);
  };

  return (
    <div className='w-full flex justify-between'>
      {/* Open Sidebar Icon */}
      <div className='p-2'>
        <FaBars className='text-black cursor-pointer' onClick={handleSidebarToggle} />
      </div>

      <div className='p-2 text-black'>
        <h1 className='text-md font-bold'>Merx<span className='text-red-600'>Press</span></h1>
      </div>

      {/* Your other top navbar content goes here */}

      {/* Conditionally render MobileNavbar */}
      {showMobileNavbar && (
        <MobileNavbar onClose={closeMobileNavbar} onProductClick={() => {}} showProductSubMenu={false} />
      )}
    </div>
  );
};

export default TopNavbar;
