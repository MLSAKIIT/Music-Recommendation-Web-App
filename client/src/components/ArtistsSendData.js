import React from "react";
import axios from 'axios';

function ArtistsSendData(props)
{

 
    const senddata=()=>{
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
<button onClick={senddata}className="sendbtn" >
 I've selected all my favourite ones
</button>
</div>
)
}
export default ArtistsSendData;