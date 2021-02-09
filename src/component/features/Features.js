import React from 'react'
import "./feature.css";
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
function Features() {
    return (
        <div className="features">
            <div className="features__points">
              <NewReleasesIcon  />
                <div className="features__pointContent">
                    <h2>News</h2>
                    <p>fast news</p>
            
                </div>
                </div>
                <div className="features__points" >
                    <CompareArrowsIcon />
                    <div className="features__pointContent">
                    <h2>Exchange Rate</h2>
                    <p>conversion rate of cryptocurrencies,stocks</p>
            
                </div></div>
                <div className="features__points">
                    
                    <EqualizerIcon /><div className="features__pointContent">
                    <h2>Statstics</h2>
                    <p>latest chart</p>
            
                </div></div>
               <div className="features__points">
                   <MonetizationOnIcon />
                    <div className="features__pointContent">
                    <h2>Buy Stocks</h2>
                    <p>instant purchase</p>
            
                </div></div>
            
        </div>
    )
}

export default Features
