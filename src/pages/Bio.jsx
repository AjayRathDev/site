import React, { useState } from 'react';
//import React from 'react'
import '../styles/styles.css'
import Mybio from "../pages/Bio/My_bio"
import Interst from "../pages/Bio/Intrest"

const Bio = () =>{
    const [textInput, setTextInput] = useState({Bios:true,Intrest:true,About:true});

    const handleClick = () => {
        setTextInput({Bios:true})
    }
  
    return (
        <div>
            <div style={{marginTop:"5%"}}>
      <div className = "white_Space" >
          <div className='text_button' >
        <href onClick={()=>handleClick()}>My Bio</href><br/>
        </div>
        </div><br/>
        <div className = "white_Space" >
        <div className='text_button'>
        <href onClick={()=>handleClick()}>Intrest</href>
        </div>
        </div><br/>
        <div className = "white_Space" >
          <div className='text_button' >
        <href onClick={()=>handleClick()}>Motivation</href><br/>
        </div>
        </div><br/>
        <div className = "white_Space" >
        <div className='text_button'>
        <href onClick={()=>handleClick()}>Accomplish</href>
        </div>
        </div><br/>
            <Mybio/>
            <Interst/>
        </div>
        </div>
    )

}

export default Bio;