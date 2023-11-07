import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, fetchTrendingCoins } from './Store/Slices/slice1';
import Home from './Pages/Home';

const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
  },[]);

  return (
    <div>
      <Home/>
      
    </div>
  )
}

export default App