import React, { useRef, useEffect, useState } from 'react';
// import {Header}  from '../Component/Header';



import Movie from '../../Component/Movie';
import CartItem from '../../fakeData.json';
import Images from '../../Component/Images/Top_Images.png';
import ImagesT from '../../Component/Images/images2.jpg';
import Mid_Images from '../../Component/Images/Mid_Images.png';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';


class Carousel {
  constructor(element, updateFunction) {
    this.element = element;
    this.currentSlide = 0;
    this.totalSlides = 0;
    this.interval = null;
    this.updateFunction = updateFunction;


  }

  init() {

    this.totalSlides = this.element.querySelectorAll('[data-carousel-item]').length;
    this.element.querySelector('[data-carousel-next]').addEventListener('click', () => this.next());
    this.element.querySelector('[data-carousel-prev]').addEventListener('click', () => this.prev());
    this.interval = setInterval(() => this.next(), 5000);


  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateFunction(this.currentSlide);
    this.updateCarousel();
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateFunction(this.currentSlide);
    this.updateCarousel();
  }

  updateCarousel() {
    const items = this.element.querySelectorAll('[data-carousel-item]');
    const indicators = this.element.querySelectorAll('[data-carousel-slide-to]');

    items.forEach((item, index) => {
      item.classList.toggle('opacity-100', index === this.currentSlide);
      item.classList.toggle('opacity-0', index !== this.currentSlide);
      item.style.transform = `translateX(${index - this.currentSlide}00%)`;
    });

    indicators.forEach((indicator, index) => {
      indicator.setAttribute('aria-current', index === this.currentSlide);
    });
  }
}

const MarketPlace = () => {
  const carouselRef = useRef(null);
  const [dailyDealsIndex, setDailyDealsIndex] = useState(0);
  const [trendingItemsIndex, setTrendingItemsIndex] = useState(0);

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, () => { });
    carousel.init();

    return () => {
      clearInterval(carousel.interval);
    };
  }, []);

  const showNextDailyDeals = () => {
    setDailyDealsIndex((prevIndex) => Math.min(prevIndex + 4, CartItem.length - 1));
  };

  const showPrevDailyDeals = () => {
    setDailyDealsIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const showNextTrendingItems = () => {
    setTrendingItemsIndex((prevIndex) => Math.min(prevIndex + 4, CartItem.length - 1));
  };

  const showPrevTrendingItems = () => {
    setTrendingItemsIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  return (
    <div className='w-full h-fit'>
      <div className='w-full h-fit'>
        <Header/>

      </div>

      <div className='   '>
        <div id='default-carousel' className='relative w-full  ' data-carousel='slide' ref={carouselRef}>
          {/* Carousel wrapper */}
          <div className='relative object-cover h-full  overflow-hidden  md:h-96 '>
            {/* Item 1 */}
            <div className='duration-700 ease-in-out h-full  ' data-carousel-item>
              {/* ... Your carousel content ... */}
              <img src={Images} className='absolute block w-full     -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' alt='...' />
            </div>


          </div>

          {/* Slider indicators */}
          <div className='absolute z-30 flex bg-gray-600 p-1 rounded-lg -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
            <button type='button' className='w-3 h-3 bg-lime-600 rounded-full' aria-current='true' aria-label='Slide 1' data-carousel-slide-to='0'></button>
            <button type='button' className='w-3 h-3 bg-lime-600 rounded-full' aria-current='false' aria-label='Slide 2' data-carousel-slide-to='1'></button>
            <button type='button' className='w-3 h-3 bg-lime-600 rounded-full' aria-current='false' aria-label='Slide 3' data-carousel-slide-to='2'></button>
            <button type='button' className='w-3 h-3 bg-lime-600 rounded-full' aria-current='false' aria-label='Slide 4' data-carousel-slide-to='3'></button>
            <button type='button' className='w-3 h-3 bg-lime-600 rounded-full' aria-current='false' aria-label='Slide 5' data-carousel-slide-to='4'></button>
          </div>

          {/* Slider controls */}
          <button type='button' className='absolute top-0 start-0 z-30 flex items-center  justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-prev>
            {/* Previous button content */}

            {/* ... Your previous button content ... */}
          </button>

          <button type='button' className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none' data-carousel-next>
            {/* Next button content */}
            {/* ... Your next button content ... */}
          </button>
        </div>

        {/* Daily Deals Section */}
        <div className='w-11/12 my-10 flex'>
          <h1 className='mr-auto mx-48 font-extrabold'>Daily Deals</h1>
          <div className='flex items-center cursor-pointer '>
            <span className='px-2 mr-1 border-solid border-2 border-gray-600 rounded-sm' onClick={showPrevDailyDeals}>
              ←
            </span>
            <span className='px-2 border-solid border-2 border-gray-600 rounded-sm' onClick={showNextDailyDeals}>
              →
            </span>
          </div>
        </div>

        {/* Movies Section */}
        <div className='w-11/12 mx-24 my-10'>
          {/* Third Row*/}
          <div className='w-full flex justify-center items-center align-middle'>
            <div className='grid grid-cols-4 gap-2 max-w-screen-lg mx-auto justify-items-stretch'>
              {CartItem.slice(dailyDealsIndex, dailyDealsIndex + 4).map((element, index) => (
                <Movie key={index} title={element.Title} Desc={element.Desc} img={element.Poster} />
              ))}
            </div>
          </div>
        </div>

        {/* Trending Items Section */}
        <div className='w-11/12 my-10 flex'>
          <h1 className='mr-auto mx-48 font-extrabold'>Trending Items</h1>
          <div className='flex items-center cursor-pointer '>
            <span className='px-2 mr-1 border-solid border-2 border-gray-600 rounded-sm' onClick={showPrevTrendingItems}>
              ←
            </span>
            <span className='px-2 border-solid border-2 border-gray-600 rounded-sm' onClick={showNextTrendingItems}>
              →
            </span>
          </div>
        </div>

        {/* Movies Section */}
        <div className='w-11/12 mx-24 my-10'>
          {/* Third Row*/}
          <div className='w-full flex justify-center items-center align-middle'>
            <div className='grid grid-cols-4 gap-2 max-w-screen-lg mx-auto justify-items-stretch'>
              {CartItem.slice(trendingItemsIndex, trendingItemsIndex + 4).map((element, index) => (
                <Movie key={index} title={element.Title} Desc={element.Desc} img={element.Poster} />
              ))}
            </div>
          </div>
        </div>

        <div className='w-11/12 mx-28  my-10 flex'>
          <img src={Mid_Images} className=' rounded-lg' alt='Images' />
        </div>

        {/* ------------------------------ *------------------*--------------- */}
        <div className='w-11/12 my-10 flex'>
          <h1 className='mr-auto mx-48 font-extrabold'>Refresh Your Spaces </h1>
          <div className='flex items-center cursor-pointer '>
            <span className='px-2 mr-1 border-solid border-2 border-gray-600 rounded-sm' onClick={showPrevTrendingItems}>
              ←
            </span>
            <span className='px-2 border-solid border-2 border-gray-600 rounded-sm' onClick={showNextTrendingItems}>
              →
            </span>
          </div>
        </div>
        {/* Movies Section */}
        <div className='w-11/12 mx-24 my-10'>
          {/* Third Row*/}
          <div className='w-full flex justify-center items-center align-middle'>
            <div className='grid grid-cols-4 gap-2 max-w-screen-lg mx-auto justify-items-stretch'>
              {CartItem.slice(trendingItemsIndex, trendingItemsIndex + 4).map((element, index) => (
                <Movie key={index} title={element.Title} Desc={element.Desc} img={element.Poster} />
              ))}
            </div>
          </div>
        </div>


        {/*---------------<->---------------------*/}
        <div className='w-11/12 my-10 flex'>
          <h1 className='mr-auto mx-48 font-extrabold'>International top sellers </h1>
          <div className='flex items-center cursor-pointer '>
            <span className='px-2 mr-1 border-solid border-2 border-gray-600 rounded-sm' onClick={showPrevTrendingItems}>
              ←
            </span>
            <span className='px-2 border-solid border-2 border-gray-600 rounded-sm' onClick={showNextTrendingItems}>
              →
            </span>
          </div>
        </div>
        {/* Movies Section */}
        <div className='w-11/12 mx-24 my-10'>
          {/* Third Row*/}
          <div className='w-full flex justify-center items-center align-middle'>
            <div className='grid grid-cols-4 gap-2 max-w-screen-lg mx-auto justify-items-stretch'>
              {CartItem.slice(trendingItemsIndex, trendingItemsIndex + 4).map((element, index) => (
                <Movie key={index} title={element.Title} Desc={element.Desc} img={element.Poster} />
              ))}
            </div>
          </div>
        </div>


        {/*-----------------<->------------------*/}
        <div className='flex items-center justify-center h-10 my-5'>
          <button type="button" className="text-red-700 hover:text-white border border-red-600 hover:bg-red-600 font-medium rounded-lg px-5 py-2.5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">SHOP MORE</button>
        </div>

        <Footer />


        {/* ... Your other sections ... */}
      </div>
    </div>
  );
};

export default MarketPlace;
