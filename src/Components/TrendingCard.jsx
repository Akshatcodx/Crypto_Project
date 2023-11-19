import React from 'react';
import "./Styles.css";
import {Link} from "react-router-dom"

const TrendingCard = ({id,name,price,image,symbol}) => {
  return (
    <div className='card'>
       <div className="image">
       <Link to={`singlecoin/${id}`}> <img src={image}></img></Link>
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