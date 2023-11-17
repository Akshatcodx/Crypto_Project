import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import { STATUS, fetchCoins, fetchTrendingCoins } from '../Store/Slices/slice1';
import { useDispatch, useSelector } from 'react-redux';
import CoinsSection from '../Components/CoinsSection';
import { SpinnerCircular } from 'spinners-react';
const Home = () => {
    const dispatch=useDispatch();
    const {status}=useSelector((state)=>state.slice1)
    console.log(status)
    useEffect(()=>{
      dispatch(fetchTrendingCoins());
      dispatch(fetchCoins());
    },[])
   
  return (
    <div>
      {/* <Exampl/> */}
      {
        (status===STATUS.LOADING)?(<div className='spinner'><SpinnerCircular size={300}/></div>):(
          <div>
            <Header/>
            <CoinsSection/>
           </div>
        )
      }
    </div>
  )
}

export default Home;