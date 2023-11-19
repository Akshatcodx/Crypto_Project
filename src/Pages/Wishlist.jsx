import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../Store/Slices/slice1';

const Wishlist = () => {
    const {wishlist}=useSelector((state)=>state.slice1);
    const dispatch=useDispatch();
    const removeItem=(id)=>{
      dispatch(removeFromWishlist(id))

    }
  return (
    <div className='wishlistPage'>
        {
            (wishlist.length===0)?(<h1>Your Wishlist is Currently Empty</h1>):(
                <div>
                     <div className='wishlistPage coinsection'>
  
    
  <h1><i>Wishlist</i></h1>
    <div className="coinstable">
      <div className="tableContainer">

      
    <table border="2">
     <thead>
      <th>  
        #
        </th>
        <th>Coin</th>
        <th>Price</th>
        <th>24 Change</th>
        <th>Market Cap</th>
        <th>Remove From Wishlist</th>
     </thead>
     <tbody>
     {
       
      wishlist.map((elem,index)=>{ 
       let num=Number(elem.price_change_percentage_24h.toFixed(2)
        )
        return(
          <tr>
          <td>
          <p> {elem.market_cap_rank}</p>
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
          <td><button className='removeButton' onClick={()=>{removeItem(elem.id)}}>Remove</button></td>                
          </tr>
        )
      }
        )
      }
     
      </tbody>
     </table>
     </div>
     </div>
     </div>
               </div>
            )
        }
    </div>
     )

}

export default Wishlist;