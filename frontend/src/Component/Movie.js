// Movie.js

import React from 'react';

const Movie = ({ title, Desc, img }) => {
  return (
    <div className='w-full'>
      <div className='p-4 w-full grid-cols-4 mb-5 cursor-pointer hover:scale-105 transition-transform duration-100 border-gray-200 shadow bg-white rounded-lg backdrop:'>
        <div className="text-black h-96 flex flex-col items-center justify-center">
          <img src={img} alt="poster" className='w-52 h-52 transform scale-1 transition-transform duration-300 hover:scale-100' />
          <hr className="w-full mt-2" />
          <p className='pl-2'>{Desc}</p>
          <div className='flex justify-start'>
            <div className='float-left'>
              <p className='text text-slate-500' style={{ textDecoration: 'line-through' }}>$ 5.66</p>
            </div>
            <div className='float-right ml-4'>
              <p>$ 4.5</p>
            </div>
          </div>
          <button className="bg-red-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-red-600">
            BUY NOW
          </button>
        </div>
      </div>
      <div className='mt-10'></div>
    </div>
  );
};

export default Movie;
