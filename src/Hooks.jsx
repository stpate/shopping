import React,{useState} from "react";
import Navbar from "./Navbar";
function Hooks()
{
    const state=useState();
    const[count,setCount] =useState(0);
    function Shlok()
    {
        setCount(count+1);
    };
    return(
        <>
        <Navbar/>
       <div className="text-center" style={{color:"red"}}>
        <h1 className="display-1">{count}</h1>
        <button type="button" className="btn btn-success btn -lg" onClick={Shlok}>Click Here</button>
        </div> 
        </>
    )
}
export default Hooks;