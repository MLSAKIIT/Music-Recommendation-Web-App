
import { Fragment, useEffect, useState } from "react";

import SideBar from "./SideBar";
import classes from './Playlist.module.css'
import axios from "axios";
import topvideos from "../../data/topmusicvideos";
import weeklyglobal from "../../data/top-weekly-songs-global";
import weeklyindia from "../../data/top-weekly-songs-india";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper';

import 'swiper/swiper.scss';


import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
SwiperCore.use([Navigation, Pagination]);


const Playlist = () => {

  return (

    <div className={classes.playlist}>
      <div className={classes.row}>
        <SideBar />
        <div className={classes.content}>
          <h2 style={{ color: 'white', margin: '20px' }}>Top Music Videos</h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          />



          <div className={classes.cards}>
            {/* <div> */}
            <SwiperSlide >
              {topvideos.map((data) => (
                // <div className={classes.box}>
                <iframe src={data["YouTube URL"]} title={data["Video Title"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                // </div>
              ))}
            </SwiperSlide>
            {/* </div> */}
          </div>
          <h2 style={{ color: 'white', margin: '20px' }}>Top Weekly Global Songs</h2>
          <div className={classes.cards}>
            <div>{weeklyglobal.map((data) => (

              <iframe src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            ))}</div>
          </div>
          <h2 style={{ color: 'white', margin: '20px' }}>Top Weekly Indian Songs</h2>
          <div className={classes.cards}>
            <div>{weeklyindia.map((data) => (

              <iframe src={data["YouTube URL"]} title={data["Track Name"]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            ))}
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};
export default Playlist;
