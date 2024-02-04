import React from 'react'
import Header from '../../Component/Header'
import BigImage from '../../Component/Assets/BigImage.png'
import Sony from '../../Component/Assets/sony.png'
import GameToy from '../../Component/Assets/gamepot.png'
import Movie from '../../Component/Movie'
import CartItem from '../../fakeData.json'
import Footer from '../../Component/Footer'





const Order_SuccessFull = () => {
    return (
        <div>
            <div className=' w-full'>
                <Header />
            
            </div>

            <div className='flex flex-col items-center justify-center h-fit my-5'>
                <p className='font-extrabold text-center'>A Great Big Thank You</p>
                <p className='text-center'>Thank you for trusting us as your no 1 shopping partner</p>
                <p className='text-center'>We have sent an order confirmation email to <span className='text text-lg font-bold underline cursor-pointer'>example@gmail.com</span></p>
            </div>

            <div className=' w-1/2 mx-52 h-fit  my-2 '><h1 className=' font font-extrabold text-lg'>Order Sumaary</h1></div>

            {/* ----------Order Section start--------------------Order Section start ----------------------*/}

            <div className=' w-1/2 mx-48 h-fit mb-5 border-zinc-950 border-2 '>
                <div className=' w-full h-fit mx-5 my-2'><h1 className='font font-extrabold text-xl cursor-pointer'>You Purchased</h1></div>
                <div className=' w-full h-fit mx-5 my-2 flex '>
                    <div className=' w-1/3 h-fit  '>
                        <img src={BigImage} alt='Images' className='border border-zinc-100 rounded-lg' />
                    </div>
                    <div className=' w-full h-fit'>
                        <h2 className=' font font-semibold text-lg'>Play Station 5 Console</h2>
                        <h3 className=' font '>Qty. <span className='text text-lg font font-bold'>1</span></h3>
                    </div>

                </div>

                {/* ----------------------*/}

                <div className=' w-full h-fit mx-5 my-2 flex '>
                    <div className=' w-1/3 h-fit  '>
                        <img src={Sony} alt='Images' className='border border-zinc-100 rounded-lg' />
                    </div>
                    <div className=' w-full h-fit'>
                        <h2 className=' font font-semibold text-lg cursor-pointer'>Sony</h2>
                        <h3 className=' font '>Qty. <span className='text text-lg font font-bold'>2</span></h3>
                    </div>

                </div>

                {/* -----------------------*/}

                <div className=' w-full h-fit mx-5 my-2 flex   '>
                    <div className=' w-1/3 h-fit  '>
                        <img src={GameToy} alt='Images' className='border border-zinc-100 rounded-lg' />
                    </div>
                    <div className=' w-full h-fit'>
                        <h2 className=' font font-semibold text-lg cursor-pointer'>Game Toy</h2>
                        <h3 className=' font '>Qty. <span className='text text-lg font font-bold'>3</span></h3>
                    </div>

                </div>
            </div>

            {/* ----------Order Section  close--------------------Order Section close ----------------------*/}
            {/* ----Adress Details --------------------------------*/}
            <div className=' w-1/2 mx-48 h-fit mb-5 border-zinc-950 border-2 '>
                <div className=' w-full h-fit mx-5 my-2'>
                    <h1 className='font font-bold text-lg '> Primary Address </h1>
                    <div className=' w-56 h-fit'>
                        <p>House no.52 , Patel Nagar , Near Hanuman Temple , Mumbai -603115 INDIA. </p>
                    </div>

                </div>
            </div>

            {/* ----Secondary Adress Details --------------------------------*/}
            <div className=' w-1/2 mx-48 h-fit mb-5 border-zinc-950 border-2 '>
                <div className=' w-full h-fit mx-5 my-2'>
                    <h1 className='font font-bold text-lg '> Secondary Address </h1>
                    <div className=' w-56 h-fit'>
                        <p>Near Railway Station Patna - 500005 , Bihar India </p>
                    </div>

                </div>
            </div>
            {/* ----Secondary Adress Details --------------------------------*/}


            {/* --------------------Total Amount Detail ---------------*/}


            <div className='w-1/2 mx-auto mb-5 h-fit'>
                <div className='mx-4 my-5 h-fit'>
                    <h3 className='font'>Total amount : <span className='text-lg font-bold ml-10'>$600</span></h3>
                    <h3 className='font'>Delivery Fee : <span className='text-lg font-bold ml-10'>$30</span></h3>
                    <h3 className='font'>Shipping Fee : <span className='text-lg font-bold ml-10'>$30</span></h3>

                    <hr className='my-2 w-56 border-zinc-950' />
                    <h3 className='font'>Total : <span className='text-lg font-bold ml-24'>$690</span></h3>
                </div>
            </div>

            {/* --------------------Total Amount Detail Close ---------------*/}

            {/* -----------Button -----------*/}
            <div className='w-full h-fit flex justify-end'>
                <button type="button" class="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Continue Shopping</button>
                <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-10">Exit Page</button>
            </div>

            {/* -----------Button -----------*/}

            {/* Card Item */}


            <div className='w-11/12 my-10 flex'>
          <h1 className='mr-auto mx-48 font-extrabold'>You may also like this </h1>
         
        </div>
        {/* Movies Section */}
        <div className='w-full flex justify-center items-center align-middle'>
                <div className='grid grid-cols-4 gap-2 max-w-screen-lg mx-auto justify-items-stretch'>
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



<div className=''>
    <Footer/>
</div>

        </div>
    )
}

export default Order_SuccessFull