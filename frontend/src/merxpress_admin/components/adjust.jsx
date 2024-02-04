// adjust.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const AdjustAvailability = ({ item, onClose, onAdjust }) => {
  // State to manage the adjustment quantity
  const [adjustQuantity, setAdjustQuantity] = useState(0);
  const [selectedReason, setSelectedReason] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const handleSave = () => {
    // Implement the logic to save the adjustments
    // You can use the selected reason and adjustQuantity here
    // For example, you can send this data to an API or update the state in a parent component
    // ...

    // Calculate the adjusted available quantity
    const adjustedItem = {
      ...item,
      available: item.available + adjustQuantity,
    };

    // Callback to handle adjustment in the parent component
    onAdjust(adjustedItem);

    // Close the modal after saving
    onClose();
  };

  // Dropdown options for the reason
  const reasonOptions = ['Select the option','Out of Stock', 'Overstocked', 'Seasonal Demand', 'Other'];

  // Function to handle quantity adjustment
  const handleAdjustment = (value) => {
    setAdjustQuantity((prevQuantity) => prevQuantity + value);
  };

  return (
    <div className="bg-white p-6 pr-2 w-full sm:w-2/3 rounded-md lg:w-1/3 h-screen fixed right-0">
      <div className="flex justify-between items-center p-4 mb-4 border-b-4">
        <h2 className="text-2xl font-medium">Adjust Availability</h2>
        <button onClick={onClose}>
          <FaTimes className="text-gray-500 cursor-pointer" />
        </button>
      </div>

      {/* Display item information */}
      <h3 className="text-xl font-medium mb-8 text-gray-500">Item </h3>
      <div className="mb-7 flex items-center">
        <img src={item.image} alt={item.item} className="mb-2 w-10 h-10 mr-4" />
        <div className='flex justify-between space-x-20 text-sm'>
          <div className=''>
            <p> <span className='font-medium '>{item.item}</span> <span className='text-gray-500'>({item.sku})</span> </p>
            <p className='text-gray-500'>{item.variants}</p>
          </div>
          <div className='text-gray-600 mr-10'>
            <p className=''> Quantity</p>
            <p className='text-center font-bold'>{item.available}</p>
          </div>
        </div>
      </div>

      {/* Display reason dropdowns and adjust by input */}
      <div>
      <div className="pb-2 relative">
  <label htmlFor="reason" className="block text-md p-2 font-medium text-gray-500">
    Reason:
  </label>
  <div className="relative">
    <div
      className={`mt-1 p-1 border border-gray-300 rounded-md w-full cursor-pointer ${
        isDropdownOpen ? 'focus:outline-none border-blue-500' : ''
      }`}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      onBlur={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center justify-between">
        <span className="mr-2">{selectedReason || 'Select a reason'}</span>
        <span className='transition ease-in-out duration-300 transform'>{isDropdownOpen ? '\u25B2' : '\u25BC'}</span>
      </div>
    </div>
    {isDropdownOpen && (
      <div className="absolute mt-1 text-md p-1 border border-gray-300 bg-white rounded-md w-full overflow-hidden transition ease-in-out duration-300">
        {reasonOptions.map((reason, index) => (
          <div
            className="flex w-full items-center cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300"
            key={index}
            onClick={() => {
              setSelectedReason(reason);
              setIsDropdownOpen(false);
            }}
          >
            <span className="">{reason}</span>
            {selectedReason === reason && (
              <span className="text-blue-700 ml-auto">&#10003;</span>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

        <div className="p-2">
          <label htmlFor="adjustBy" className="block text-sm mb-4 font-medium text-gray-500">
            Adjust By:
          </label>
          <div className="flex">
            <input
              type="number"
              id="adjustBy"
              name="adjustBy"
              value={adjustQuantity}
              readOnly
              className="flex-1 p-1 border border-gray-300 text-md text-center"
            />
            <button
              onClick={() => handleAdjustment(-1)}
              className="p-1 w-10 border text-2xl border-gray-300 rounded-l-md cursor-pointer"
            >
              -
            </button>
            <button
              onClick={() => handleAdjustment(1)}
              className="p-1 w-10 border text-2xl border-gray-300 rounded-r-md cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 mb-4 flex justify-end">
        <button onClick={onClose} className="mr-2 text-black border-2 p-2 rounded-md">
          Cancel
        </button>
        <button onClick={handleSave} className="px-4 py-2 bg-gray-300 text-gray-500 pl-2 pr-2 ml-2 rounded">
          Save and close
        </button>
      </div>
    </div>
  );
};

export default AdjustAvailability;
