// import classes from './Other.module.css';
 import bgMusic from './assets/musicBg.jpg'
import React from 'react'
const Other = () => {
    return (
        <>
        <div className="bg"  style={{ backgroundImage: `url(${bgMusic})`, width: '40%', height: '30%',  marginRight:'20px' }}></div>
        </>
    )
}
export default Other;