// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './Component/SignUp.jsx';
import Login from './Component/Login.jsx';
import Welcome from './Component/Welcome.jsx';
import Header from './Component/Header.js';
import Navbar from './Component/Navbar.jsx';
import Shopping_Cart from './Component/Shopping_Cart.js';

import './App.css';
import Payment_Page from './Component/Payment_Page.jsx';


function App() {
  return (
    <>

      <Router>
       
       <Payment_Page/>
      {/* <Shopping_Cart/> */}
       {/* 
 <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/signup" />} />

          <Route path="/" element={<Welcome />} />
        </Routes>

      </div>
      */}
      
      </Router>











    </>
  );
}

export default App;
