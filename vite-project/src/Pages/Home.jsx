import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import { fetchCoins, fetchTrendingCoins } from '../Store/Slices/slice1';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const dispatch=useDispatch();
    
    useEffect(()=>{
      dispatch(fetchTrendingCoins());
      dispatch(fetchCoins());
    },[])
   
  return (
    <div>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home;