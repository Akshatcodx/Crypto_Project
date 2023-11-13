import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import SingleCoin from '../Pages/SingleCoin';
const CoinInfo = ({coinId}) => {
    const [singleCoin,setSingleCoin]=useState();
// getting single coin info
useEffect(()=>{
   fetchSingleCoin();
},[]);
const fetchSingleCoin=async()=>{
   try {
      const response= await
       axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data=await response.data;
      // console.log(data)
      setSingleCoin(data)
    
   } catch (error) {
    console.log(error);
   }
}
console.log(singleCoin)

  return (
    <div className='coinInfo' style={{width:"20vw"}}>
        <div className="logo">
            <img src={singleCoin?.image.large}></img>

        </div>
        <div className="description">
            <p>{(singleCoin?.description.en.slice(0,160))}</p>

        </div>
        <div className="info">
            <h3>Rank:{singleCoin?.market_cap_rank} </h3>
            <h3>CurrentPrice:{singleCoin?.market_data.current_price.aed}</h3>
            <h3>MarketCap:Rs {(singleCoin?.market_data.market_cap.aed)}</h3>

        </div>
        
    </div>
  )
}

export default CoinInfo