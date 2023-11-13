import React from 'react'
import { useParams } from 'react-router'
import Chart from '../Components/Chart';
import CoinInfo from '../Components/CoinInfo';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "./Style2.css"
import Navbar from '../Components/Navbar';

const SingleCoin = () => {
  const {coinId}=useParams();
  // getting single coin info
  return (
    <div className="singleCoinPage" style={{display:"flex", alignItems:"center"}}>
      {/* <Navbar/> */}
      <CoinInfo coinId={coinId}/>
      <div className="verticalLine"></div>
      <Chart coinId={coinId}/>
    </div>
  )
}

export default SingleCoin