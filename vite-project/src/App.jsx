import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, fetchTrendingCoins } from './Store/Slices/slice1';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router';
import SingleCoin from './Pages/SingleCoin';

const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
  },[]);

  return (
    <div>
    <Routes>
     <Route path='/' element={ <Home/>}></Route>
        <Route path="/singlecoin/:coinId" element={<SingleCoin/>}></Route>
     </Routes>
     
      
    </div>
  )
}

export default App