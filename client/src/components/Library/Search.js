import { Fragment, useState } from "react";
import classes from "./Search.module.css";
import axios from 'axios';
import SideBar from "./SideBar";
import Main from './Main'
import AudioPlayer from "./AudioPlayer";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


var dataresult;
const Search = () => {
    const [show, setShow] = useState(false);

    const [APIData, setAPIData] = useState([]);

    const handlesubmit = (e) => {

        if (e.key === 'Enter') {
            setShow(true);//to show the searched tracks insted of specialized playlists
            axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${e.target.value}`)
                .then(data => {
                    setAPIData(data.data.artists[0]);
                    console.log(data.data.artists[0])
                    console.log(e.target.value);

                })
        }
    }
    return (
        <div className={classes.search}>
            <div className={classes.row}>
                <SideBar />
                <div className={classes.content}>
                    {/* <ArtistSearch /> */}
                    {/* <div className={classes.searchInputWrapper}>
                        <input className={classes.searchBar}
                            placeholder="Search for any artists here"
                            onKeyDown={handlesubmit}
                        />
                    </div> */}
                    <Main/>
                    
                </div>
            </div>

            {/* <AudioPlayer /> */}
        </div>

        // <>
        //     <div className={classes.row}>
        //         {/* <SideBar /> */}
        //         <div className={classes.content}>

        //             <div className={classes.searchInputWrapper}>
        //                 <input className={classes.searchBar}
        //                     placeholder="Search for any artists here"
        //                     onKeyDown={handlesubmit}
        //                 />
        //             </div>
        //         </div>

        //     </div>
        //     <img src={APIData.strArtistThumb} alt={APIData.strArtist} width={"50px"}></img>

        //     {/* <AudioPlayer /> */}

        // </>

    );
};
export default Search;
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