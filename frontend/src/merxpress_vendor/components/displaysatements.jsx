import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import dummyorders from '../dummystatement.js';

const Displaystatement = () => {
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);

  useEffect(() => {
    // No filters are applied in this example, just use the entire dummy orders data
    setFilteredOrders(dummyorders);
  }, []); // Empty dependency array ensures this effect runs once on component mount

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalOrdersPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='text-black w-full md:mb-10  rounded-xl'>
      {/* Display the heading of the table */}
      <table className='w-full border-collapse'>
  <thead className='border-b-2 border-black'>
    <tr className='flex items-center justify-between'>
      <th className="p-2">Period/Number/Status</th>
      <th>Revenue</th>
    </tr>
  </thead>
  <tbody className=''>
    {/* Display either the table data or the "No records to display" message */}
    {filteredOrders.length === 0 ? (
      <tr>
        <td className='text-center p-10' colSpan="2">No Account Statements to list</td>
      </tr>
    ) : (
      currentOrders.map(product => (
        <tr key={product.sellerSku} className='flex items-center justify-between'>
          <td className='text-center'>{`${product.period}/${product.number}/${product.status}`}</td>
          <td className='text-center'>{product.revenue}</td>
        </tr>
      ))
    )}
  </tbody>
</table>


      <div className="flex justify-end  mt-20 md:mt-30 ">
        <button
          className="text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft /> 
        </button>
        <button
          className="text-black px-4 py-2 mx-2 rounded"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalOrdersPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Displaystatement;
