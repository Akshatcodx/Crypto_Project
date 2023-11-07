import React from 'react';
import "./Styles.css"

const TrendingCard = ({id,name,price,image,symbol}) => {
    console.log(price,name,symbol,id)
  return (
    <div className='card'>
       <div className="image">
        <img src={image}></img>
       </div>
       <div className="info">
        <p>{symbol}</p>
        <i><p>{name}</p></i>
       <i><p>💲{price}</p></i>


       </div>
    </div>
  )
}

export default TrendingCard;