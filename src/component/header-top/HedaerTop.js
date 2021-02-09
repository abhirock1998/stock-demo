import React from 'react'
import "./header-top.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
function HedaerTop() {
    return (
        <div className="headerTop">
            <div className="headerTop__left">
               <div> <h1>EN</h1></div>
               <div> <h1>USD</h1></div>
               <div > <h1>Call us toll free +1-54-754-3010</h1></div>
                <div ><h1>Send us an Email : contact@example.com</h1></div>
                
                
            </div>
            <div className="headerTop__right">
          <div> <LocalShippingIcon  fontSize="small"  /> <h1> Order Tracking</h1></div>
 <div >   <FavoriteBorderIcon fontSize="small" />        <h1> WishList</h1></div>
            </div>
        </div>
    )
}

export default HedaerTop
