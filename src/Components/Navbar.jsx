import React, { useEffect, useState } from 'react';
import "./Styles.css";
import "react-toggle/style.css" 
import Toggle from 'react-toggle'
import { Tooltip  } from 'react-tooltip'
import { Link } from 'react-router-dom';
import Wishlist from '../Pages/Wishlist';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {wishlist}=useSelector((state)=>state.slice1)
    const [mode,setMode]=useState("lightTheme");

    useEffect(()=>{
        document.body.className=mode;

    },[mode])
    const handleMode=()=>{
       (mode==="lightTheme")?(setMode("darkTheme")):(setMode("lightTheme"))
       
    }
    console.log(mode)
  return (
    <div className='dddd'>
        <div className="navbar">
            <div className="logo">
              <Link to="/"><h1><i>CryptoVerse</i></h1></Link>
            </div>
            <div className="toggle" style={{display:"flex",gap:"20px",alignItems:"center"}}>        
            <div className="wishlist">
              <Link  to="/wishlist">
                <h1 ><i>Wishlist</i></h1>
               {
                   (wishlist.length>0)?(<span className='count'>{wishlist.length}</span>):("") 
                   }
           
                </Link>
             </div>
              {
                 (mode==="lightTheme")?(<h4><i>Light Mode</i></h4>):(<h4><i>Dark Mode</i></h4>)
              }
            <Toggle  defaultChecked={false} disabled={false} onClick={handleMode} /> 
            </div>
        </div>
    </div>
  )
}

export default Navbar;