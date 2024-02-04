import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import img from "../Assets/ka.jpg";
import AdjustAvailability from "../components/adjust";
import Pagination from "../components/Pagination";
const inventoryItemsPerPage = 7;

const InventoryList = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [selectedReason, setSelectedReason] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inventoryItemsPerPage, setInventoryItemsPerPage] = useState(7); // Add this line
  
  

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleItemsPerPageChange = (itemsPerPage) => {
    // Update your state or perform any necessary actions
    // For example, you can set a state variable to control the number of items to display per page
    setInventoryItemsPerPage(itemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };
  const [inventoryItems, setInventoryItems] = useState([
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 0,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 0,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 0,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 63,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_001",
      incoming: 10,
      committed: 5,
      available: 11,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_002",
      incoming: 10,
      committed: 5,
      available: 20,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_003",
      incoming: 10,
      committed: 5,
      available: 22,
    },
    {
      image: img,
      item: "Classic Bathrobe",
      variants: "Small . White . Hooded",
      sku: "ROBE_004",
      incoming: 10,
      committed: 5,
      available: 0,
    },
  ]);

  const totalItems = inventoryItems.length;

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setShowDetail(true);
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(inventoryItems.length / inventoryItemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const startIndex = (currentPage - 1) * inventoryItemsPerPage;
  const endIndex = startIndex + inventoryItemsPerPage;

  const currentItems = inventoryItems.slice(startIndex, endIndex);

  const warehouseOptions = [
  
    "Zambian Warehouse ",
    "Kenyan Warehouse ",
    "Retail Store #1",
    "Retail Store #2",
    // Add more warehouse options as needed
  ];

  const handleAdjustment = (adjustedItem) => {
    const updatedInventoryItems = inventoryItems.map((item) => {
      if (item.sku === adjustedItem.sku) {
        return {
          ...item,
          available: adjustedItem.available,
        };
      }
      return item;
    });
    setInventoryItems(updatedInventoryItems);
  };

  return (
    <div className="bg-white sm:p-2 w-full  rounded-md mt-5 h-full overflow-auto ">
      {/* Status heading */}
      <div className="lg:flex items-center justify-between mb-4 p-3">
        <h2 className="text-2xl p-2 pt-0 lg:p-0  text-center font-bold">Inventory List</h2>

        {/* Warehouse dropdown */}
        <div className="flex items-center space-x-2 w-90   ">
  
 <div className="relative w-30 ">
    <div
      className={`mt-1 p-1 border border-gray-300 rounded-md w-full cursor-pointer ${
        isDropdownOpen ? 'focus:outline-none border-blue-500' : ''
      }`}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      onBlur={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center justify-between text-md">
        <span className="mr-2">{selectedReason ||  ' Select a WareHouse'}</span>
        <span className='transition ease-in-out duration-300 transform'>{isDropdownOpen ? '\u25B2' : '\u25BC'}</span>
      </div>
    </div>
    {isDropdownOpen && (
      <div className="absolute mt-1 w-50 text-sm p-1 border border-gray-300 bg-white rounded-md w-full overflow-hidden transition ease-in-out duration-300">
        {warehouseOptions.map((reason, index) => (
          <div
            className="flex w-full items-center cursor-pointer text-md hover:bg-gray-200 transition ease-in-out duration-300"
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




          {/* Search button */}

          <div className="relative flex  flex-wrap items-stretch">
            <div className="relative">
              <input
                type="search"
                className="relative m-0 cursor-pointer block min-w-0 flex-auto rounded border border-solid border-slate-200 bg-transparent bg-clip-padding pl-10 pr-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-500 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:text-neutral-200 dark:placeholder:text-gray-500"
                placeholder="Find Something"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={searchValue}
                onChange={handleInputChange}
              />
              {searchValue === "" && (
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inventory table */}
      <table class="   divide-y  divide-gray-200">
        <thead>
          <tr>
            <th class="lg:px-6 py-3 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th class="lg:px-6 py-3 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Variants
            </th>
            <th class="lg:px-6 py-3 bg-gray-50  text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              SKU
            </th>
            <th class="lg:px-6 py-3 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Incoming
            </th>
            <th class="lg:px-6 py-3 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Committed
            </th>
            <th class="lg:px-6 py-3 bg-gray-50 sm:text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Available
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(item)}
              className={`border-t ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } ${
                index === inventoryItems.length - 1 ? "border-b" : ""
              } hover:bg-gray-200 hover:cursor-pointer`} // Change the background color on hover
            >
              {" "}
              <td class="p-2 lg:px-6 lg:py-4 mr-4 lg:mr-0  whitespace-no-wrap text-xs lg:text-sm leading-5 font-medium text-gray-900 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={`Image for ${item.item}`}
                    class="lg:w-8 lg:h-8 w-5 h-5"
                  />
                </div>
                <div class="ml-4">{item.item}</div>
              </td>
              <td class="px-6 py-4  whitespace-no-wrap text-sm leading-5 text-gray-500">
                {item.variants}
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {item.sku}
              </td>
              <td class="px-10 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {item.incoming}
              </td>
              <td class="px-10 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {item.committed}
              </td>
              <td class="px-10 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                {item.available}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(inventoryItems.length / inventoryItemsPerPage)}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        totalItems={totalItems} // pass totalItems as a prop
        inventoryItemsPerPage={inventoryItemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      {showDetail && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          <div className="bg-zinc-400 w-full  h-full overflow-auto">
            <AdjustAvailability
              item={selectedItem}
              onClose={() => setShowDetail(false)}
              onAdjust={(adjustedItem) => handleAdjustment(adjustedItem)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryList;
