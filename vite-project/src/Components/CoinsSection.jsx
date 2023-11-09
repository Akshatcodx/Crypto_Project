import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./Styles.css"

const CoinsSection = () => {
  const [page,setPage]=useState(1);
  const {coins}=useSelector((state)=>(state.slice1));
  console.log("these are coins",coins);
  let itemsperPage=(coins.length)/5;
  // pagination counter click logic
  const handleClick=(pageClicked)=>{
    console.log(pageClicked)
    if(!(pageClicked<=0 || pageClicked>((coins.length)/itemsperPage) ))
    
    setPage(pageClicked)
  }
   // pagination counter click logic
  return (
    <div className='coinsSection'>
        <h1>CryptoCurrencies By Market Price</h1>
        <div className="coinstable">
            <table border="2">
             <thead>
              <th>Index</th>
                <th>Coin</th>
                <th>Price</th>
                <th>24 Change</th>
                <th>Market Cap</th>
             </thead>
             {
              coins.slice((page*itemsperPage-itemsperPage),(page*itemsperPage)).map((elem,index)=>{
               let num=Number(elem.price)
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>
                     <div className='coin'>
                      <div className="img"><img src={elem.iconUrl}></img></div>
                      <div className="name"><p>{elem.symbol}</p> <p>{elem.name}</p></div>
                     </div>
                    </td>
                    <td>{num.toFixed(2)}  Rs</td>
                    <td className={((elem.change)>0)?"green":"red"}>{elem.change}</td>
                    <td>{elem.marketCap.toString().slice(0,6)}  Rs</td>
                  </tr>
                )
              })
             }
            </table>
            <div className="paginationCounter">
              <span className='prev' onClick={()=>handleClick(page-1)}>⬅️</span>
              {
                Array.from({length:((coins.length)/itemsperPage)},(_,idx)=>{
                  return(
                    <span  className="paginationCounterButton" onClick={()=>{handleClick(idx+1)}}>{idx+1}</span>
                  )
                })
              }
              <span className='next' onClick={()=>handleClick(page+1)}>➡️</span>
            </div>
        </div>
    </div>
  )
}

export default CoinsSection