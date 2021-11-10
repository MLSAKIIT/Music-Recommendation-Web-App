import {Fragment,useState,useEffect} from "react";
import classes from "./Main.module.css";
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MusicList from "./MusicList";
import { Redirect } from "react-router-dom";



const Main = () => {
  
const [show,setShow]=useState(false);
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const [target,setTarget]=useState('');

  useEffect(() => {
    if(show===true)
    {
        if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
      console.log(localStorage.getItem("accessToken"));
    }
    }
  
  }, [show]);


  const handlesubmit=(e)=>{
  
    if(e.key==='Enter')
    {
      console.log(localStorage.getItem("accessToken"));
      setShow(true);
      setTarget(e.target.value);
      console.log(target);
      axios
      .get(`https://api.spotify.com/v1/search?query=${target}&type=track&offset=5&limit=10`, {
        headers: {
          Authorization: "Bearer " + token,
        
  
        },
      })
      .then((response) => {
        setData(response.data.tracks.items);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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

        {/* rendering the data here */}

     {show?
     <div>
    <ImageList sx={{ width: 700, height: 1000 ,padding:"20px"}}>
      {data.map((item, index) => (
        <ImageListItem sx={{padding:"10px"}} key={`${item.id}`  }>
         
         
           <img
            src={`${item.album.images[1].url}`}
            width={"5px"}
            height={"5px"}
            alt={item.album.name}
            loading="lazy"
          /> 
          <ImageListItemBar sx={{color:"white"}}
            title={item.album.name}
            subtitle={<span>By : {item.album.artists[0].name}</span>}
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
