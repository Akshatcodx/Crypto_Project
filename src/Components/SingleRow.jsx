import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import { addToWishlist, removeFromWishlist } from '../Store/Slices/slice1';
import { Link } from 'react-router-dom';
import { Tooltip  } from 'react-tooltip'
const SingleRow = ({elem}) => {
  const [iconClicked,setIconClicked]=useState(false);
  const elemId=elem.id;
  console.log(elemId);
  const dispatch=useDispatch();
  const {wishlist}=useSelector((state)=>state.slice1);
  const {coins}=useSelector((state)=>state.slice1);
  console.log("these are coins",coins);
const currentItem=wishlist.find((curElem)=>{
    return curElem.id==elemId;
});
console.log("this is current item",currentItem)
// dsajna
  console.log("this is wishlist",wishlist);
    const handleIconClick=(id,item)=>{ 
        dispatch(addToWishlist(item))
      }
      const handleRemove=(id,item)=>{
        dispatch(removeFromWishlist(item))
      }
      
      
  return (
    <tr>
    <td>
     <div 
     style=
     {{display:"flex",gap:"4px",alignItems:"center",justifyContent:"center"}}>
     <a data-tooltip-id="my-tooltip" data-tooltip-content="Wishlist">

     <p className='wishlistIcon'>
      {
       (currentItem)?(<FaStar onClick={()=>{handleRemove(elem.id,elem)}}/> )
       :(<BsStar onClick={()=>{handleIconClick(elem.id,elem)}}/>)
       
      }
     <Tooltip id="my-tooltip" />
        </p>
        </a>
    <p> {elem.market_cap_rank}</p>
     </div>
   </td>
    <td>
    <div className='coin'>
     <div className="img"><Link to={`/singleCoin/${elem.id}`}>
       <img src={elem.image}></img></Link></div>
     <div className="name"><p>{elem.symbol}</p> <p>{elem.name}</p></div>
    </div>
   </td>
    <td>{elem.current_price}  Rs</td>
    <td 
    className={((Number(elem.price_change_percentage_24h))<0.0)?"red":"green"}>
        {elem.price_change_percentage_24h}</td>
    <td>{elem.market_cap}  Rs</td>                 
    </tr>
  )
}

export default SingleRow