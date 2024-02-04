
import React, { useState } from 'react';
const Pagination = ({
  currentPage,
  totalPages,
  onPrevClick,
  onNextClick,
  totalItems, // Add this prop
  inventoryItemsPerPage, // Add this prop
  onItemsPerPageChange,
  
}) => {
    const [showResultsOptions, setShowResultsOptions] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(inventoryItemsPerPage);
    
  const options = ['showAll', 'Fit To Screen', 10, 25, 50];

    const [displayText, setDisplayText] = useState(
      `${currentPage} -- ${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems} Results`
    );
    const handleResultInfoClick = () => {
      setShowResultsOptions(!showResultsOptions);
    };
  
    const handleOptionClick = (option) => {
      if (option === 'showAll') {
        setDisplayText(`${currentPage} -- ${totalItems} of ${totalItems} Results`);
        setItemsPerPage(totalItems); // Update the itemsPerPage state for "Show All"
        onItemsPerPageChange(totalItems);
      } else if (option === 'Fit To Screen') {
        setItemsPerPage(7);
        setDisplayText(
          `${currentPage} -- ${Math.min(currentPage * 7, totalItems)} of ${totalItems} Results`
        );
        onItemsPerPageChange(7);
      } else {
        setItemsPerPage(option);
        setDisplayText(
          `${currentPage} -- ${Math.min(currentPage * option, totalItems)} of ${totalItems} Results`
        );
        onItemsPerPageChange(option);
      }
    
      setShowResultsOptions(false);
    };
    
    
  return (
    <div className="flex items-center justify-between p-2 mt-4 m-9">
 <div className="text-gray-500 cursor-pointer" onClick={handleResultInfoClick}>
        {displayText}{' '}
        {showResultsOptions && (
          <div className="absolute w-40 bg-white border rounded-md shadow-md pr-0  p-3">
            {options.map((option) => (
              <div
                key={option}
                className="cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
              >
                {option} {itemsPerPage === option && <span className='ml-24'> ✓</span>}
                {option === 'showAll' && totalItems === itemsPerPage && <span className='ml-16'> ✓</span>}
                {option === 'Fit To Screen' && itemsPerPage !== option && (
      <span className={itemsPerPage === 7 ? 'text-gray-500 ml-9' : 'invisible'}> ✓</span>
    )}
              </div>
            ))}
          </div>
        )}
      </div>

      
      <div className="flex items-center space-x-2">
       
        <div className="text-gray-500">
          {currentPage} of {totalPages} pages
        </div>
        <button
          onClick={onPrevClick}
          className=" px-3 py-1 hover:text-slate-400 rounded-md cursor-pointer"
        >
          Prev
        </button>
        <button
          onClick={onNextClick}
          className=" px-3 py-1 hover:text-slate-400 rounded-md cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
