import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, fetchTrendingCoins } from './Store/Slices/slice1';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router';
import SingleCoin from './Pages/SingleCoin';
import Navbar from './Components/Navbar';
import 'react-tooltip/dist/react-tooltip.css';
import Wishlist from './Pages/Wishlist';
const App = () => {
  useEffect(()=>{
  },[]);
  return (
    <div>
      <Navbar/>
     <Routes>
     <Route path='/' element={ <Home/>}></Route>
        <Route path="/singlecoin/:coinId" element={<SingleCoin/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
     </Routes>     
    </div>
  )
}

export default App