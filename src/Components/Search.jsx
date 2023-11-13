import React from 'react'
import { useState } from 'react'

const Search = ({getSearchData}) => {
    const [search,setSearch]=useState("");
    // console.log(search);
    const sendDataToParent=(e)=>{
        setSearch(e.target.value);
        getSearchData(search);


    }
  return (
    <div className='search'>
      <input type='search' placeholder='search Coin Here'  onChange={()=>{sendDataToParent}}/>
    </div>
  )
}

export default Search