import {Fragment,useState} from "react";
import classes from "./Main.module.css";
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MusicList from "./MusicList";
import { Redirect } from "react-router-dom";

var dataresult;
const Main = () => {
  const[show,setShow]=useState(false);
 
  const [APIData,setAPIData]=useState([]);


  const handlesubmit=(e)=>{
   

    
   if(e.key==='Enter')
   {
try{
  setShow(true);//to show the searched tracks insted of specialized playlists
  axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${e.target.value}&api_key=03cb2b4f2e1066124367be28aee0167f&format=json`).
  then(data=>{
    dataresult=data.data.results.trackmatches.track;
  setAPIData(dataresult);
  console.log(APIData.length)
 console.log(e.target.value);

  })
}
catch(err)
{
  console.log(err);
}
    
 
   }
  
    }
  
  return (
    <>
    <Fragment>
    
      <div className={classes.searchInputWrapper}>
      
      <input className={classes.searchBar} 
      placeholder="Search for any tracks here" 
      onKeyDown={handlesubmit}  
      />
      </div>  
     {show?
     <div>
    <ImageList sx={{ width: 700, height: 1000 ,padding:"20px"}}>
      {APIData.map((item, index) => (
        <ImageListItem sx={{padding:"10px"}} key={`${item.name}_${item.artist}_${item.listeners}`  }>
          <img
            src="https://cdn.dribbble.com/users/437315/screenshots/16696349/media/ca40a9e2ef151c22fbeb93677964774b.jpg?compress=1&resize=1600x1200"
            width={"5px"}
            height={"5px"}
            alt={item.className}
            loading="lazy"
          />
          <ImageListItemBar sx={{color:"white"}}
            title={item.name}
            subtitle={<span>By : {item.artist}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>   </div>:<MusicList/>
    
     }
  
     </Fragment>
     </>

    

       
     
      
    
    
  );
};
export default Main;
// {APIData.map((data, index) => (
//   <div key={`${data.name}_${data.artist}_${data.listeners}`}>
//     <p>{data.name}-{data.artist}</p>
//     {data.image.filter((image)=>image.size==='medium').map((c, i) => (
//       <div key={`${data.name}_${data.artist}_${data.artist}`}>
       
//         <img src={c["#text"]} 
//         alt={data.name}/>
    
//       </div>
//     ))}
//   </div>
// ))} 