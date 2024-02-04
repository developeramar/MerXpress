import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dummy from '../dummy.js';

const Displayproducts = ({ filters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Change this to the desired number of items per page

  useEffect(() => {
    // Apply filters to the dummy data and update filteredProducts state
    const filteredData = dummy.filter(product => {
      let passesFilter = true;
    
      // Check if product status matches the selectedStatus filter
      if (filters.selectedStatus !== 'All' && product.status !== filters.selectedStatus) {
        passesFilter = false;
      }
    
      
    
      // Check if selectedCountry matches the product's country
      if (filters.selectedCountry && product.country !== filters.selectedCountry) {
        passesFilter = false;
      }
      
    
      return passesFilter;
    });
    
    setFilteredProducts(filteredData);
  }, [filters]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='text-black bg-white w-full md:h-3/6 lg:h-2/5 md:p-4 md:pb-3 rounded-xl   overflow-y-auto '>
      {/* Display the heading of the product details table */}
      <table className='w-full'>
        <thead>
          <tr className='text-sm '>
            {/* Add more table headings as needed */}
            <th className="border-b-2 border-black p-2">Name</th>
            <th className="border-b-2 border-black  p-2">Seller SKU</th>
            <th className="border-b-2 border-black p-2">Quantity</th>
            <th className="border-b-2 border-black p-2">Currency</th>
            <th className="border-b-2 border-black p-2">Price</th>
            <th className="border-b-2 border-black p-2">Visible</th>
            <th className="border-b-2 border-black p-2">Active</th>
            <th className="border-b-2 border-black p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Display either the product details or the "No records to display" message */}
          {filteredProducts.length === 0 ? (
            <tr>
              <td className='text-center p-10' colSpan="8">No records to display</td>
            </tr>
          ) : (
            currentProducts.map(product => (
              <tr key={product.id} className='text-sm'>
                <td className='text-center'>{product.name}</td>
                <td className='text-center'>{product.sellerSKU}</td>
                <td className='text-center'>{product.quantity}</td>
                <td className='text-center'>{product.currency}</td>
                <td className='text-center'>{product.price}</td>
                <td className='text-center'>{product.visible.toString()}</td>
                <td className='text-center'>{product.active.toString()}</td>
                <td className='text-center'>{product.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex justify-end  mt-2">
        <button
          className="text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> 
        </button>
        <button
          className=" text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
         <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Displayproducts;
