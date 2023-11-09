import React from 'react';
import "./Styles.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import TrendingCard from './TrendingCard';

const Header = () => {
    const {trendingCoins}=useSelector((state)=>state.slice1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true
      };
  return (
    <div className='header' >
      
        <div className="slider">
       <i> <h1>Trending Coins</h1></i>
        <Slider {...settings}>
     {
         trendingCoins.map((elem)=>{

             const num=1e4;
             return(                                                         
                    <TrendingCard autoplay={true} fade={true} id={elem.item.coin_id} 
                    name={elem.item.name} 
                    image={elem.item.small} 
                    symbol={elem.item.symbol} 
                    price={((elem.item.price_btc)*(num)).toFixed(3)}
                     />     
                
             )
         })
     }
 </Slider>
        </div>

   </div>
  )
}

export default Header