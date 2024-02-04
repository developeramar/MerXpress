import React, { useState } from 'react';
import Header from '../../Component/Header';
import Cart from '../../Component/Assets/cart.png';
import Amar from '../../Component/Images/Amr.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../../Component/Footer';

const ProfileScreen = () => {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            <div>
                <Header />
            </div>

            {/* mid part */}
            <div className='flex justify-center w-full h-fit my-10'>
                {/* left div */}
                <div className='relative w-1/5 my-10 ml-10 bg-white rounded-md shadow'>
                    {/* Dropdown */}
                    <button
                        id="dropdownDefaultButton"
                        onClick={toggleDropdown}
                        className="text-black font-semibold text-xl rounded-lg px-5 py-2.5 inline-flex"
                        type="button"
                    >
                        Profile
                        <svg
                            className={`w-3.5 h-3.5 ms-3 mt-1.5 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    <div
                        className={`${isDropdownOpen ? 'block' : 'hidden'} absolute z-10 divide-y divide-gray-100 rounded-lg w-44 mt-1`}
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-black font-bold text-center hover:cursor-pointer"
                            aria-labelledby="dropdownDefaultButton"
                        >
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Profile</p>
                            </li>

                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Payment Details</p>
                            </li>

                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Shipping Details</p>
                            </li>

                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Recently Viewed</p>
                            </li>
                        </ul>
                    </div>

                    {/* Other items */}
                    <div className={`mt-4 ${!isDropdownOpen ? '' : 'mt-[150px]'}`}>
                        <ul className='m-2 font-semibold text-xl hover:cursor-pointer'>
                            <li className='flex items-center m-2 '>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Order History</p>
                            </li>
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Favorites</p>
                            </li>
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Preferences</p>
                            </li>
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Privacy Setting</p>
                            </li>
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Become Vendor</p>
                            </li>
                            <li className='flex items-center m-2'>
                                <img
                                    src={Cart}  // replace with your image URL
                                    alt=""
                                    className="mr-2 w-5 h-5"
                                />
                                <p>Close Account</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* right div */}
                <div className='w-1/2 h-fit my-2 mx-10 shadow rounded-md '>
                    <div className='w-full mx-10 my-5 text-xl flex font-semibold'>
                        <img
                            src={Cart}  // replace with your image URL
                            alt=""
                            className="mr-2 w-5 h-5"
                        />
                        <p>Profile</p>
                    </div>
                    <hr className='mx-10 h-1 ' />

                    <div className='w-full h-fit flex'>
                        <div className='w-1/3 h-60  px-10 flex flex-col items-center justify-center'>
                            <img src={Amar} alt='' style={{ width: '70%', height: '50%', borderRadius: '50%' }} className="rounded-full mb-4" />
                            <h1 className='text-center text-2xl font-semibold text-black'>Amar Patel</h1>
                        </div>

                        <div className='w-1/3 h-60 '>
                            <h1 className='px-2 text-xl font-semibold mt-2'>Email :</h1>
                            <h1 className='px-2 text-xl font-semibold mt-2'>Phone Number :</h1>
                            <h1 className='px-2 text-xl font-semibold mt-2'>Gender :</h1>
                            <h1 className='px-2 text-xl font-semibold mt-2'>Date of Birth :</h1>
                            <h1 className='px-2 text-xl font-semibold mt-2'>Interest :</h1>
                        </div>

                        <div className='w-1/3 h-60 '>
                            <h1 className='mt-2'>example@gmail.com <span><a className='text-blue-800 hover:cursor-pointer' href=''>change</a></span></h1>
                            <h1 className='mt-2'>+251 63547895 <span><a className='text-blue-800 hover:cursor-pointer' href=''>change</a></span></h1>
                            {/* Additional details, modify as needed */}
                            <h1 className=' border rounded-md mt-2'>
                                <select className='p-2 rounded-md bg-white text-gray-800'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                </select>
                            </h1>
                            <h1 className=' mt-2'>
                                <DatePicker className='mt-2 p-2 rounded-md bg-white border text-gray-800' selected={new Date()} />
                            </h1>
                            <h1 className='text-center text-xl font-semibold mt-2'>
                                <input type='text' className='mt-2 p-2 w-56 rounded-md border bg-white text-gray-800' />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

       
    );
};

export default ProfileScreen;
