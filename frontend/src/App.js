import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './BuyerScreen/Pages/SignUp';
import Login from './BuyerScreen/Pages/Login';
import MarketPlace from './BuyerScreen/Pages/MarketPlace';
import Order_SuccessFull from './BuyerScreen/Pages/Order_SuccessFull';
import Shopping_Cart from './BuyerScreen/Pages/Shopping_Cart';
import Payment_Page from './BuyerScreen/Pages/Payment_Page';
import ProfileScreen from './BuyerScreen/Pages/ProfileScreen';
import MainPage from './merxpress_vendor/pages/mainpage';






function App() {
  return (
    <>
    <MainPage/>
  
{/* 

     <div className=''>
    <Routes >
     
     <Route  path='/signup' element={<SignUp/>}/>   
    <Route path='/login' element={<Login/>} />
    <Route path='/marketplace' element={<MarketPlace/>} />
    <Route path='/order' element={<Order_SuccessFull/>} />
    <Route path='/shoping' element={<Shopping_Cart/>} />
    <Route path='/paymentpage' element= {<Payment_Page/>} />


    


    </Routes>
     </div>
     */}
    </>
  );
}

export default App;
