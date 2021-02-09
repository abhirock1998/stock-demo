import React from 'react'
import "./sale-banner.css";
import {BannerHolder} from "../../helper/holder"
function SaleBanner() {
    return (
        <div className="saleBanner" >
            {BannerHolder?.map(banner =><div key={banner.id}  className="saleBanner__holder">
              <img src={banner.image} alt=""/>
            </div>)}
            

        </div>
    )
}

export default SaleBanner
