import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoins, fetchTrendingCoins } from './Store/Slices/slice1';

const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchTrendingCoins());
    dispatch(fetchCoins());

  },[]);
  // console.log(coins);
  return (
    <div>App</div>
  )
}

export default App