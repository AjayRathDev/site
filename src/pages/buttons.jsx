import React, { useState } from 'react';
import '../styles/styles.css'
import Bio from '../pages/Bio'
import Expriences from '../pages/Expreince/Experince'

const Buttons = () =>{
    const [data,setData]=useState({Bio:true, Expreince:false, Exprtise:false, Goal: false})
    const Bio1=()=>{
        setData({Bio:true})

    }
    const Experince=()=>{
        setData({Expreince:true})
        }
        const Expertise=()=>{
            setData({Exprtise:true})
            }
            const GoalPlan=()=>{
                setData({Goal:true})
                }
    return(
        <div>
            <div>
    <href onClick={()=>Bio1()} style={{marginLeft:"2%"}}>Bio</href>
    <href onClick={()=>Experince()}  style={{marginLeft:"17%"}}>Experince</href>
    <href onClick={()=>Expertise()}  style={{marginLeft:"17%"}}>Expertise</href>
    <href onClick={()=>GoalPlan()}  style={{marginLeft:"17%"}}>Goal Plan</href>
    </div>
    <div>
    {data.Bio && (
    <Bio/>
    )}
    {data.Expreince && (
        <Expriences/>
    )}
     {/* {data.Exprtise && (
    <Expertise/>
    )}
    {data.Exprtise && (
        <Goal/>
    )} */}
    {/* //<button onClick={() => this.setState({ count: this.state.count + 1 })}>
    // <button onClick={sayHello}>Click</button>
    // <button onClick={sayHello}>Click</button> */}
    </div>
    </div>
    )
}
export default Buttons;