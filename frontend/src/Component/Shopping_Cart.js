import React from 'react';
import Header from './Header.js';
import BigImage from './Assets/BigImage.png';
import Sony from './Assets/sony.png';
import CartItem from '../fakeData.json'
import Footer from './Footer.jsx';




const Movie = ({ title, Desc, imdb, img }) => {
    return (
        <>
            {/* Card Item Row */}
            <div className='w-full'>


                <div className='p-4 w-full grid-cols-4 mb-5 cursor-pointer hover:scale-105 transition-transform duration-100 border-gray-200 shadow bg-white rounded-lg backdrop:'>
                    <div className="text-black h-96 flex flex-col items-center justify-center">
                        <img src={img} alt="poster" className='w-52 h-52 transform scale-1 transition-transform duration-300 hover:scale-100' />
                        <hr className="w-full mt-2" />
                        <p className='pl-2'>{Desc}</p>
                        <button className="bg-red-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-red-600">
                            BUY NOW
                        </button>
                    </div>
                </div>

                <div className='mt-20'></div>




                <div className='p-4 w-full grid-cols-4 mb-5 cursor-pointer hover:scale-105 transition-transform duration-100 border-gray-200 shadow bg-white rounded-lg backdrop:'>
                    <div className="text-black h-96 flex flex-col items-center justify-center">
                        <img src={img} alt="poster" className='w-52 h-52 transform scale-1 transition-transform duration-300 hover:scale-100' />
                        <hr className="w-full mt-2" />
                        <p className='pl-2'>{Desc}</p>
                        <div class="flex mt-2 justify-start ">
                            <svg class="w-4 h-4 text-red-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-red-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-red-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-red-500 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 ms-1 text-red-500 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>

                        {/* Rate of Items */}
                        <div className='flex justify-start'>
                            <div className='float-left'>
                                {/* old rate */}
                                <p className='text text-slate-500' style={{ textDecoration: 'line-through' }}>$ 5.66</p>
                            </div>
                            <div className='float-right ml-4'>
                                <p>$ 4.5</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

    </>



    );
};


const Shopping_Cart = (props) => {
    return (
        <div className='container bg-orange-50 '>
            <Header />

            <div className='w-4/5 mt-24 ml-40 h-svh '>
                <div className='w-full-width h-fit ml-16'>
                    <h5 className='text-black font-semibold text-lg mb-5'>My Cart</h5>
                </div>
                <div className='w-full-width h-svh flex '>
                    <div className='w-10/12 p-4 h-svh '>
                        <div className="w-10/12 p-4 h-44 ml-20 bg-white border border-gray-200 shadow flex ">
                            <img src={BigImage} className="w-163 h-122 " alt='Image of Cart' />
                            <div className="flex w-full p-2 flex-col justify-between ml-4">

                                <div className=" w-full text-black font-semibold flex "> Play Station 5 Console  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195</span></div>

                                <div className="text-black font-semibold">Storage : <span className=''> 254 GB</span> </div>
                                <div className="text-black font-semibold">Better To Use</div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className='text-black font-semibold'>Quantity : </span>
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500">
                                            {/* Minus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className='text-black font-semibold'>2</span>
                                        <button className="text-gray-500">
                                            {/* Plus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-10/12 p-4 h-44 ml-20 bg-white border border-gray-200 shadow flex ">
                            <img src={BigImage} className="w-163 h-122 " alt='Image of Cart' />
                            <div className="flex w-full p-2 flex-col justify-between ml-4">

                                <div className=" w-full text-black font-semibold flex "> Play Station 5 Console  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195</span></div>

                                <div className="text-black font-semibold">Storage : <span className=''> 254 GB</span> </div>
                                <div className="text-black font-semibold">Better To Use</div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className='text-black font-semibold'>Quantity : </span>
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500">
                                            {/* Minus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className='text-black font-semibold'>2</span>
                                        <button className="text-gray-500">
                                            {/* Plus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="w-10/12 p-4 h-44 ml-20 bg-white border border-gray-200 shadow flex ">
                            <img src={BigImage} className="w-163 h-122 " alt='Image of Cart' />
                            <div className="flex w-full p-2 flex-col justify-between ml-4">

                                <div className=" w-full text-black font-semibold flex "> Play Station 5 Console  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195</span></div>

                                <div className="text-black font-semibold">Storage : <span className=''> 254 GB</span> </div>
                                <div className="text-black font-semibold">Better To Use</div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className='text-black font-semibold'>Quantity : </span>
                                    <div className="flex items-center space-x-2">
                                        <button className="text-gray-500">
                                            {/* Minus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className='text-black font-semibold'>2</span>
                                        <button className="text-gray-500">
                                            {/* Plus icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 bg-slate-600 text-white rounded-full">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='p-2 w-10/12 h-10  ml-20 bg-white  border border-gray-200 shadow'>
                            <div className=" w-full text-black flex "> Cart feel empty?  <span className='w-fit  pl-2 pr-2 text-end justify-end font-semibold hover:underline cursor-pointer '> Shop more</span></div>
                        </div>
                    </div>

                    <div className='w-72 h-96 ' >
                        <div className=' p-2 w-72 h-32 bg-white  border border-gray-200 shadow   '>
                            <div className='w-full mt-7 h-16 '>
                                <div className=" w-full text-black font-semibold flex  "> Total Amount :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195.35</span></div>
                                <div className=" w-full mt-4 text-black font-semibold flex  "> Shipping Fee :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $10</span></div>
                            </div>
                        </div>
                        <div className='p-2 w-72 h-10 mt-10 bg-white  border border-gray-200 shadow'>
                            <div className=" w-full text-black font-semibold flex  "> Total Amount :  <span className=' w-fit ml-auto pl-2 pr-2 text-end justify-end '> $195.35</span></div>
                        </div>
                        <div className=' w-72 h-10 mt-5   '>
                            <button type="button" className="text-white bg-red-500 hover:bg-red-600 focus:ring-4  rounded-lg text-sm px-5 py-2.5 font-serif">PROCEED TO CHECKOUT</button>
                        </div>
                        <div className=' w-72 h-10 mt-5   '>
                            <button type="button" className="text-red-700 hover:text-white border border-red-600 hover:bg-red-600   font-medium rounded-lg  px-5 py-2.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">CONTINUE SHOPPING</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full'>
                <h3 className='font-bold text-black ml-56 mb-5'>You may also like this</h3>
            </div>







            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}






            {/* Third Row*/}
            <div className='w-full flex justify-center items-center align-middle'>
                <div className='grid grid-cols-4 gap-1 max-w-screen-lg mx-auto justify-items-stretch'>
                    {CartItem.slice(0, 4).map((element, index) => (
                        <Movie
                            key={index}
                            title={element.Title}
                            Desc={element.Desc}
                            img={element.Poster}
                        />
                    ))}
                </div>
            </div>


            {/* -------- Footer Section-----------------------------------------------------Footer Section ------------------------------------------------------------------*/}


                        <Footer/>




        </div>
    );
};

export default Shopping_Cart;
