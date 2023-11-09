import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
const SingleCoin = () => {
    const {coinId}=useParams();
    const {coins}=useSelector((state)=>state.slice1);
    const selectedCoin=coins.find((elem)=>{
        return elem.id==coinId;
    });
    console.log(selectedCoin)
  return (
    <div>

    </div>
  )
}

export default SingleCoin;