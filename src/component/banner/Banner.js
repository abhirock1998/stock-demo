import { Button } from '@material-ui/core';
import React from 'react'
import "./banner.css";
function Banner() {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1>Audi Q5 Premium</h1>
                <p>Capatalize on low hanging to identify a ballpark</p>
                <p>Current bid :<b>$5550</b></p>
                <Button>Place Bid Now</Button>
            </div>
            <div className="banner__image">
                <img alt="banner-logo" src="https://www.gannett-cdn.com/-mm-/3b8b0abcb585d9841e5193c3d072eed1e5ce62bc/c=0-30-580-356/local/-/media/2018/09/11/USATODAY/usatsports/getty-stock-market-rising_large.jpg?auto=webp&format=pjpg&width=1200"/>
            </div>
        </div>
    )
}

export default Banner
