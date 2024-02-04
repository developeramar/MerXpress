import React, { useState } from 'react';
import InventoryList from '../components/InventoryList';
import Location from '../components/location';

const Inventory = () => {
    const [activeComponent, setActiveComponent] = useState('InventoryList'); // Default to InventoryList component

    const handleButtonClick = (componentName) => {
      setActiveComponent(componentName);
    };
  
  return (
    <>
    <div className='bg-neutral-200 w-full h-fit sm:w-3/4 md:w-4/5 lg:pt-2 p-1 md:p-5 lg:p-16 lg:pr-10'>
 <div className="md:space-x-8 sm:space-x-4 pt-2 flex sm:p-5 sm:pb-0 md:p-0">
 <button
                       onClick={() => handleButtonClick('InventoryList')}
                       className={`hover:bg-white active:bg-white focus:bg-white font-medium text-xs lg:text-md p-1.5 text-gray-500 rounded-full ${
                         activeComponent === 'InventoryList' && 'bg-white'
                       }`}
                         >    Inventory list
  </button>

  <button  onClick={() => handleButtonClick('Location')}
                       className={`hover:bg-white active:bg-white focus:bg-white font-medium text-xs lg:text-md p-1.5 text-gray-500 rounded-full ${
                         activeComponent === 'Location' && 'bg-white'
                       }`}>
    Location
  </button>
  <button className="hover:bg-white active:bg-white focus:bg-white text-xs lg:text-md font-medium p-1.5 text-gray-500 rounded-full">
    Transfers
  </button>
  <button className="hover:bg-white active:bg-white focus:bg-white text-xs lg:text-md font-medium p-1.5 text-gray-500 rounded-full">
    Suppliers
  </button>
  <button className="hover:bg-white active:bg-white focus:bg-white text-xs lg:text-md font-medium p-1.5 text-gray-500 rounded-full">
    Purchase orders
  </button>
</div>
{activeComponent === 'InventoryList' && <InventoryList />}
{activeComponent === 'Location' && <Location/>}
    </div>
 
    </>
  )
}

export default Inventory
