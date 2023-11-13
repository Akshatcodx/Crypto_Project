import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "./Styles.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,Filler, LinearScale, PointElement, LineElement, Title} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const CoinsSection = () => {
  const [page,setPage]=useState(1);
  const [history,setHistory]=useState([]);
  const {coins}=useSelector((state)=>(state.slice1));
  console.log("these are coins",coins);
  let itemsperPage=(coins.length)/10;
  useEffect(()=>{
    fetchData();
    
  },[]);
  const fetchData=async()=>{
    // console.log("fetchdata running")
    const response=await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily&precision=1");
    const data= await response.data;
    setHistory(data)
   

  }
  console.log("this is historicaldata",history);
  // chartjs

  ChartJS.register(ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
    Title);
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
//  const coinsChartData=history.prices.map((val)=>({x:val[0],y:val[1].toFixed(2)}));
  //  const labels=["1","20","2"]
  //  const data = {
    // labels,
    // datasets: [
      // {
        // label: 'Dataset 1',  
        // data: coins.map((coin) =>coin.sparkline),
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // fill:true,
        // data:["35372.97567211047",'35385.55493287271',"35368.401088874634"],
        // borderColor: 'rgb(255, 99, 132)',
        // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // },
    // ],
  // };
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
             <tbody>
             {
              coins.slice((page*itemsperPage-itemsperPage),(page*itemsperPage)).map((elem,index)=>{ 
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
                     <td className={(num<0.0)?"red":"green"}>{elem.price_change_percentage_24h
}</td>
                     <td>{elem.market_cap.toString().slice(0,6)}  Rs</td>
                     <td>
                     {/* <Line options={options} data={data} /> */}
                     </td>
                   </tr>
                )
              }
                )
              }
             
              </tbody>
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