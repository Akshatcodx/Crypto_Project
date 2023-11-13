import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Styles.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,Filler, LinearScale, PointElement, LineElement, Title} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from './Search';
import { setCoin } from '../Store/Slices/slice1';
const CoinsSection = () => {  
  let rows;
  const dispatch=useDispatch();
  const [page,setPage]=useState(1);
  const [search,setSearch]=useState("");
  const {coins}=useSelector((state)=>(state.slice1));
  // const [filteredCoins,setFilteredCoins]=useState([...coins]);
  console.log("these are coins",coins);
  let itemsPerPage=(coins.length)/10;
  const handleClick=(pageClicked)=>{
    console.log(pageClicked)
    if(!(pageClicked<=0 || pageClicked>((coins.length)/itemsPerPage) ))
    setPage(pageClicked)
   window.scroll(0,450)
  }

  // if(search!=="")
  // {
    //  let ItemToSearch=search.toLowerCase().split(" ").join("");
    //  const temp=filteredCoins.filter(({title})=>{  
        // let idleTitle=title.split(" ").join("");   
        // return (idleTitle.toLowerCase().includes(ItemToSearch));
    // })
    // filteredCoins=temp;
    // setFilteredCoins(temp);
  // }

  // if(filteredCoins.length>10)
  // {
      //  rows=filteredCoins.slice(page*itemsPerPage-itemsPerPage,page*itemsPerPage);
      // console.log("this is rows ",rows);
      // const numberOfPages=Math.ceil(products.length/itemsPerPage);
  // }
  // else{
      // rows=filteredCoins;
  // }
// rows=filteredCoins.slice(page*itemsPerPage-itemsPerPage,page*itemsPerPage);

const filteredCoins=coins.filter((elem)=>{
  return elem.name.toLowerCase().includes(search.toLowerCase());
});
console.log("tese are filtered products",filteredCoins)

if(filteredCoins.length<5)
{
  rows=filteredCoins; 
}
else{
  rows=filteredCoins.slice((page*itemsPerPage-itemsPerPage),(page*itemsPerPage));
console.log("tese are rows",rows)
}

if(search=="")
{
  window.scroll(0,450)
}


  return (
    <div className='coinsSection'>
        <h1>CryptoCurrencies By Market Price</h1>
        {/* search box */}
        <div className="search">
          <input type='text' value={search} placeholder='Search Coin' onChange={(e)=>{setSearch(e.target.value)}}></input>
        </div>
        {/* search box */}
        <div className="coinstable">
            <table border="2">
             <thead>
              <th>Index</th>
                <th>Coin</th>
                <th>Price</th>
                <th>24 Change</th>
                <th>Market Cap</th>
             </thead>
             <tbody>
             {
               
              rows.map((elem,index)=>{ 
               let num=Number(elem.price_change_percentage_24h.toFixed(2)
                )
                return(
                  <tr>
                     <td>{elem.market_cap_rank}</td>
                  <td>
                     <div className='coin'>
                      <div className="img"><Link to={`/singleCoin/${elem.id}`}>
                        <img src={elem.image}></img></Link></div>
                      <div className="name"><p>{elem.symbol}</p> <p>{elem.name}</p></div>
                     </div>
                    </td>
                     <td>{elem.current_price.toFixed(2)}  Rs</td>
                     <td className={(num<0.0)?"red":"green"}>{elem.price_change_percentage_24h}</td>
                     <td>{elem.market_cap.toString().slice(0,6)}  Rs</td>                 
                   </tr>
                )
              }
                )
              }
             
              </tbody>
             </table>
             {
              (filteredCoins.length>10)?(
             
             <div className="paginationCounter">
              <span className='prev' onClick={()=>handleClick(page-1)}>⬅️</span>            
                {
                  Array.from({length:((coins.length)/itemsPerPage)},(_,idx)=>{
                    return(
                      <span id={(page===idx+1)?"paginationClicked":""} className="paginationCounterButton" 
                      onClick={()=>{handleClick(idx+1)}}>{idx+1}</span>
                    )
                  })
                }           
              <span className='next' onClick={()=>handleClick(page+1)}>➡️</span> 
            </div> ):""
              }
        </div>
    </div>
  )
}

export default CoinsSection