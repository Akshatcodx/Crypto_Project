import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,Filler, LinearScale, PointElement, LineElement, Title} from "chart.js";
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
const Chart = ({coinId}) => {
    const [coinChart,setCoinChart]=useState([]);
    console.log(coinId);
    useEffect(()=>{
        console.log("useeffect running")
        fetchCoinChart();
      },[]);

    const fetchCoinChart=async()=>{
      try {
        console.log("try running")
        const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7&interval=daily&precision=1`);
        const temp=await response.data.prices; 
        console.log(temp);
         setCoinChart(temp);
       }
      
      catch (error) {
        console.log(error);
        
      }
    }
    console.log("this is coin chart",coinChart);
    // chart js
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
           display: false,
           text: `${coinId} Crypto Chart`,
         },
       },
     };
    // chartjs
    
      let coinChartData=coinChart.map((val)=>({x:val[0],y:val[1].toFixed(2)}));
      console.log("this is final",coinChartData)

     const labels=coinChartData.map((value)=>moment(value.x).format("MMM DD"));
     const data={
      labels:coinChartData.map((value)=>{return (moment(value.x).format("MMM DD"))}),
      datasets:[
        {
          fill:true,
          label:coinId,
          data:coinChartData.map((value)=>{
            console.log(value.y)
            return(value.y)
          }),
          
          borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }

      ]
     }
  return (
    <div>
      <Line options={options} data={data}></Line>
    </div>
  )
}

export default Chart;