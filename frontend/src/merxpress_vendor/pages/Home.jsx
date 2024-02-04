import React from "react";
import Piechart from "../components/piechart";

import { FaEye } from "react-icons/fa";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="bg-neutral-200 w-full sm:w-3/4 md:w-4/5 pt-0 h-screen sm:p-3">
        <h1 className="text-2xl font-bold text-black p-4">Hey Name!</h1>

        <div className="flex justify-between pb-1">
          <div className="space-x-2 flex font-medium">
            <button className="bg-white w-20 h-8 p-0.5 rounded-full">
              7 Days
            </button>
            <button className="bg-white w-20 h-8 p-0.5 rounded-full">
              30 Days
            </button>
            <button className="bg-white w-20 h-8  p-0.5 rounded-full">
              90 Days
            </button>
          </div>

          <button className="text-red-500  border-red-500 border-2 p-1  sm:w-32 font-medium rounded-lg">
            Clear Filter
          </button>
        </div>
        <div className="bg-white p-5 pt-0 mt-2 rounded-xl  sm:h-2/5 md:h-1/2 pb-0  ">
          <div className="flex items-center justify-between sm:w-4/5 ">
            <h1 className="font-bold sm:text-xl text-md ml-0">Seller Score</h1>
            <div className="mt-4  ">
              <select
                id="country"
                name="country"
                className="mt-1 p-2 pl-4 pr-4 border w-full rounded-md bg-white"
              >
                <option value="" disabled selected>
                  {" "}
                  Countries{" "}
                </option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
              </select>
            </div>
          </div>
          <div className=" p-1 lg-p-10 lg-pt-2 lg-pb-0 ">
            {" "}
            <Piechart />
          </div>
        </div>
        <div className=" mt-10 sm:mt-0 p-1 sm:pt-1 md:pt-0 lg:pt-1 pb-0">
          <h1 className="font-bold pl-3 text-xl">Activities</h1>

          <div className="flex flex-wrap justify-between ">
            {/* New Campaign Card */}
            <div className="bg-white mt-1 mb-1 lg:mt-4 xl:mt-0 rounded-lg shadow-md flex-1 mr-4 p-2">
              <h2 className="text-lg font-semibold text-center">
                New Campaign
              </h2>

              {/* Add content for the New Campaign card here */}

              <div className="flex justify-center items-center p-4">
                {/* Your new card content goes here */}
                <div className="bg-neutral-200 rounded-lg p-4 flex items-center justify-center">
                  <span className="mr-2">
                    <MdAdd />
                  </span>
                  <p className="text-center text-xs sm:text-lg"> Add New Compaign</p>
                </div>
              </div>
            </div>

            {/* Create New Campaign Card */}
            <div className="bg-white  mt-1 mb-1 lg:mt-4   xl:mt-0 rounded-lg shadow-md flex-1  p-2">
              <h2 className="text-lg font-semibold text-center">
                Create New Product
              </h2>
              {/* Add content for the Create New Campaign card here */}

              <div className="flex justify-center items-center p-4">
                {/* Your new card content goes here */}
                <div className="bg-neutral-200 rounded-lg p-4 flex items-center justify-center ">
                  <span className="mr-2">
                    <FaEye />
                  </span>
                  <p className="text-center text-xs sm:text-lg"> See Tutorial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
