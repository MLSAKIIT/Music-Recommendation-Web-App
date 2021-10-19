import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ArtistsSendData(props)
{

 
    const  senddata=()=>{
        try
        {
             axios.post('http://localhost:1821/artists',{array:props.data});
                
            
        }
        catch(err)
        {
             console.log(err);
        }
       
    }
  
return(

<div style={{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end",paddingRight:"4px"}}>
<Link to="/music">
<button onClick={senddata} className="sendbtn" >
    
 I've selected all my favourite ones

</button>
</Link>
</div>
)
}
export default ArtistsSendData;