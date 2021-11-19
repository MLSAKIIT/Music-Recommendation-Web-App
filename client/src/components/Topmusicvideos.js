import React, { useState } from "react";
import topvideos from "../data/topmusicvideos";

function Topmusicvideos()
{
  
  
    return(
        <div>{topvideos.map((data)=>(
            <div>
                <iframe width="560" height="315" src={data["YouTube URL"]} title={data["Video Title"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <iframe  src={data["YouTube URL"]} title={data["Video Title"]} frameborder="0" allowfullscreen></iframe> */}
         {/* <a href={data["YouTube URL"]}>{data["Video Title"]}</a> */}
         
            <div></div>
            </div>
        ))}</div>
    )
}
export default Topmusicvideos;

