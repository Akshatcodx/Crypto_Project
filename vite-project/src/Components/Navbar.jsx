import React, { useEffect, useState } from 'react';
import "./Styles.css";
import "react-toggle/style.css" 
import Toggle from 'react-toggle'
const Navbar = () => {
    const [mode,setMode]=useState("lightTheme");

    useEffect(()=>{
        document.body.className=mode;

    },[mode])
    const handleMode=()=>{
       (mode==="lightTheme")?(setMode("darkTheme")):(setMode("lightTheme"))
       
    }
    console.log(mode)
  return (
    <div>
        <div className="navbar">
            <div className="logo">
              <h1>CryptoVerse</h1>
            </div>
            <div className="toggle">        
            <Toggle  defaultChecked={false} disabled={false} onClick={handleMode} />          
            </div>
        </div>
    </div>
  )
}

export default Navbar